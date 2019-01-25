const path = require('path');
const fs = require('fs-extra');
const chalk = require('chalk');
const {exec, execSync, spawnSync} = require('child_process');
const {getCLIEnv, isReactTVWebOSProject} = require('./shared');

function runEmulator(ENV) {
  const webOSTVVersion = process.env.WEBOS_CLI_TV_VERSION || false;
  const version = webOSTVVersion ? `v${webOSTVVersion}` : 'v3.0.0';
  switch (process.platform) {
    case 'darwin':
      execSync(
        `open ${ENV}/../../Emulator/${version}/LG_webOS_TV_Emulator_RCU.app`
      );
      break;
    case 'linux':
      exec(`
        sh ${ENV}/../../Emulator/${version}/LG_webOS_TV_Emulator.sh
        &&
        java -jar ${ENV}/../../Emulator/${version}/LG_webOS_TV_Emulator_linux_x64.jar -remocon`);
      break;
    case 'win32':
      exec(`LG_webOS_TV_Emulator.bat`, {
        cwd: `${ENV}/../Emulator/${version}/`,
        windowsHide: true,
      });
      break;
    default:
      execSync(
        `open ${ENV}/../../Emulator/${version}/LG_webOS_TV_Emulator_RCU.app`
      );
  }
}

function run(root, device, run, inspect) {
  let webOS_TV_SDK_ENV = process.env.WEBOS_CLI_TV || false;
  let optDevice = '';

  if (!webOS_TV_SDK_ENV) {
    webOS_TV_SDK_ENV = getCLIEnv();
  }

  if (device) {
    optDevice = `--device ${device}`;
  }

  process.env.PATH = `${webOS_TV_SDK_ENV}:${process.env.PATH}`;

  if (!isReactTVWebOSProject(root)) {
    const msg = `This project isn\'t a React-TV webOS Project:\n> Just run "react-tv init"`;
    return console.log(chalk.dim('[react-tv]'), msg);
  }

  const packageJson = require(path.resolve(root, 'package.json'));
  const ReactTVConfig = packageJson['react-tv'];
  if (!ReactTVConfig) {
    return console.log(
      chalk.dim('[react-tv]'),
      'You should set react-tv properties in your package.json'
    );
  }

  if (!ReactTVConfig.files || !ReactTVConfig.files.length) {
    return console.log(chalk.dim('[react-tv]'), 'You should add files');
  }

  const webosPath = path.resolve(root, 'react-tv/webos');

  process.on('exit', cleanup);
  process.on('SIGINT', cleanup);
  process.on('SIGUSR1', cleanup);
  process.on('SIGUSR2', cleanup);
  process.on('uncaughtException', cleanup);

  function cleanup() {
    fs.removeSync(`${webosPath}/icon.png`);
    fs.removeSync(`${webosPath}/icon-large.png`);
    ReactTVConfig.files.forEach(file => {
      fs.removeSync(`${webosPath}/${file}`);
    });
  }

  try {
    cleanup();
    fs.copySync(`${root}/react-tv/icon.png`, `${webosPath}/icon.png`);
    fs.copySync(
      `${root}/react-tv/icon-large.png`,
      `${webosPath}/icon-large.png`
    );

    ReactTVConfig.files.forEach(file => {
      const filePath = path.resolve(root, file);
      const toFile = path.resolve(webosPath, file);
      fs.ensureDirSync(path.dirname(toFile));
      fs.copySync(`${filePath}`, `${toFile}`);
    });
  } catch (e) {
    return console.log(chalk.red('Failed to mount'), e.toString());
  }

  if (!device) {
    console.log('');
    console.log(chalk.red('You haven\'t specified a device, listing your webOS devices:'));
    console.log('');
    const devices = execSync(`${webOS_TV_SDK_ENV}/ares-setup-device --list`, {cwd: webosPath}).toString();
    console.log(devices);

    console.log(chalk.yellow('└─ Choose a device and run `react-tv-cli run-webos <device name>`'));
    console.log('');
    console.log(chalk.red('Error: Aborting, please specify a device to install the app onto!'));
    console.log('');
    return false;
  }

  let attemps = 0;
  const config = JSON.parse(fs.readFileSync(`${webosPath}/appinfo.json`).toString());
  const latestIPK = config.id + '_' + config.version + '_all.ipk';

  const task = setInterval(function() {
    if (!device) {
      const runningVMS = execSync(`vboxmanage list runningvms`).toString();
      if (attemps > 30) {
        console.log(chalk.red('Failed to start VirtualBox Emulator, aborting.'));
        clearInterval(task);
      }

      if (runningVMS.indexOf('webOS') < 0) {
        attemps += 1;
        return false;
      }

      console.log(runningVMS);
    } else {
      console.log('');
      console.log(chalk.yellow((inspect ? 'Debugging' : 'Running') + ` "${config.title}" on "${device}"`));
    }

    clearInterval(task);

    console.log('');
    console.log(chalk.yellow('Creating IPK package...'));
    execSync(`${webOS_TV_SDK_ENV}/ares-package .`, {cwd: webosPath});
    console.log(chalk.green(`└─ Succesfully created IPK package!`));

    cleanup();

    if (install) {
      console.log('');
      console.log(chalk.yellow('Installing...'));

      console.log(chalk.blue(`└─ Installing "${latestIPK}" on "${device}" ...`));
      execSync(`${webOS_TV_SDK_ENV}/ares-install ${optDevice} ${latestIPK}`, {
        cwd: webosPath,
      });
      console.log(chalk.green(`└─ Succesfully installed app`));

      console.log('');
      console.log(chalk.yellow(`Launching app...`));
      execSync(`${webOS_TV_SDK_ENV}/ares-launch ${optDevice} ${config.id}`, {
        cwd: webosPath,
      });
      console.log(chalk.green(`└─ Launched app`));

      if (inspect) {
        console.log('');
        console.log(chalk.yellow('Inspecting app...'));
        spawnSync(
          `${webOS_TV_SDK_ENV}/ares-inspect`,
          [`-a ${config.id} ${optDevice}`],
          {
            stdio: 'inherit',
            shell: true,
            encoding: 'utf8',
          }
        );
      } else {
        console.log('');
        console.log(chalk.dim(`Successfully built release package "${latestIPK}", check folder "${webosPath}"`));
        console.log('');
      }
    }

  }, 500);
}

module.exports = run;
