#! /usr/bin/env node

const argv = process.argv;
const {help, version, createReactTVApp} = require('./shared');
const {WebOS} = require('./scripts');

if (argv.length < 2) {
  return help();
}

let appName;
let device;

const command = argv[2];
switch (command) {
  case 'init':
    if (argv.length > 3) {
      appName = argv[3];
    }

    createReactTVApp(appName);
    break;

  case 'build-prod-webos':
    if (argv.length > 3) {
      device = argv[3];
    }

    WebOS.run(process.cwd(), device, false, false);
    break;

  case 'run-webos':
    if (argv.length > 3) {
      device = argv[3];
    }

    WebOS.run(process.cwd(), device, true, false);
    break;

  case 'debug-webos':
    if (argv.length > 3) {
      device = argv[3];
    }

    WebOS.run(process.cwd(), device, true, true);
    break;

  case 'setup-webos':
    WebOS.setupDevice();
    break;

  case 'get-key-webos':
    if (argv.length > 3) {
      device = argv[3];
    }

    WebOS.getKey(device);
    break;

  case '--version':
    version();
    break;

  default:
    help();
}
