(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-tv'), require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react-tv', 'react'], factory) :
	(factory((global.ReactTV = {}),global.ReactTV,global._react));
}(this, (function (exports,ReactTV,_react) { 'use strict';

ReactTV = ReactTV && ReactTV.hasOwnProperty('default') ? ReactTV['default'] : ReactTV;
_react = _react && _react.hasOwnProperty('default') ? _react['default'] : _react;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var _library = true;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: _library ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});
});

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign$1 = _core.Object.assign;

var assign = createCommonjsModule(function (module) {
module.exports = { "default": assign$1, __esModule: true };
});

var _Object$assign = unwrapExports(assign);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$1(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject$1(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning$1 = function() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var printWarning = function() {};

{
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ('development' !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      printWarning('Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
}
});

var compose_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
});

var compose = unwrapExports(compose_1);

var setStatic_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;
});

unwrapExports(setStatic_1);

var setDisplayName_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _setStatic2 = _interopRequireDefault(setStatic_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;
});

unwrapExports(setDisplayName_1);

var getDisplayName_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;
});

unwrapExports(getDisplayName_1);

var wrapDisplayName_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _getDisplayName2 = _interopRequireDefault(getDisplayName_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;
});

unwrapExports(wrapDisplayName_1);

var mapProps_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;





var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);
    var MapProps = function MapProps(props) {
      return factory(propsMapper(props));
    };
    {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'mapProps'))(MapProps);
    }
    return MapProps;
  };
};

exports.default = mapProps;
});

var mapProps = unwrapExports(mapProps_1);

var lifecycle_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */


var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    if ('development' !== 'production' && spec.hasOwnProperty('render')) {
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
    }

    var Lifecycle = function (_Component) {
      _inherits(Lifecycle, _Component);

      function Lifecycle() {
        _classCallCheck(this, Lifecycle);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      Lifecycle.prototype.render = function render() {
        return factory(_extends({}, this.props, this.state));
      };

      return Lifecycle;
    }(_react.Component);

    Object.keys(spec).forEach(function (hook) {
      return Lifecycle.prototype[hook] = spec[hook];
    });

    {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'lifecycle'))(Lifecycle);
    }
    return Lifecycle;
  };
};

exports.default = lifecycle;
});

var lifecycle = unwrapExports(lifecycle_1);

var getContext_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getContext = function getContext(contextTypes) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);
    var GetContext = function GetContext(ownerProps, context) {
      return factory(_extends({}, ownerProps, context));
    };

    GetContext.contextTypes = contextTypes;

    {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'getContext'))(GetContext);
    }
    return GetContext;
  };
};

exports.default = getContext;
});

var getContext = unwrapExports(getContext_1);

var setPropTypes_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _setStatic2 = _interopRequireDefault(setStatic_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setPropTypes = function setPropTypes(propTypes) {
  return (0, _setStatic2.default)('propTypes', propTypes);
};

exports.default = setPropTypes;
});

var setPropTypes = unwrapExports(setPropTypes_1);

var mapValues_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */
  return result;
};

exports.default = mapValues;
});

unwrapExports(mapValues_1);

var withHandlers_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);



var _mapValues2 = _interopRequireDefault(mapValues_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */


var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var WithHandlers = function (_Component) {
      _inherits(WithHandlers, _Component);

      function WithHandlers() {
        var _temp, _this, _ret;

        _classCallCheck(this, WithHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
      }

      WithHandlers.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        this.cachedHandlers = {};
      };

      WithHandlers.prototype.render = function render() {
        return factory(_extends({}, this.props, this.handlers));
      };

      return WithHandlers;
    }(_react.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.cachedHandlers = {};
      this.handlers = (0, _mapValues2.default)(typeof handlers === 'function' ? handlers(this.props) : handlers, function (createHandler, handlerName) {
        return function () {
          var cachedHandler = _this2.cachedHandlers[handlerName];
          if (cachedHandler) {
            return cachedHandler.apply(undefined, arguments);
          }

          var handler = createHandler(_this2.props);
          _this2.cachedHandlers[handlerName] = handler;

          if ('development' !== 'production' && typeof handler !== 'function') {
            console.error(
            // eslint-disable-line no-console
            'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
          }

          return handler.apply(undefined, arguments);
        };
      });
    };

    {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'withHandlers'))(WithHandlers);
    }
    return WithHandlers;
  };
};

exports.default = withHandlers;
});

var withHandlers = unwrapExports(withHandlers_1);

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _redefine = _hide;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  
}

var f$3 = _wks;

var _wksExt = {
	f: f$3
};

var iterator$1 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$1, __esModule: true };
});

var _Symbol$iterator = unwrapExports(iterator);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$1({}, 'a', {
    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$1(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol$1 = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": symbol$1, __esModule: true };
});

var _Symbol = unwrapExports(symbol);

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys$1 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$1, __esModule: true };
});

var _Object$keys = unwrapExports(keys);

var _typeof = typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; };

/*eslint-disable*/

/**
 * Copyright (c) 2018-present, Raphael Amorim.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
  Fork from luke-chang/js-spatial-navigation
 */

var GlobalConfig = {
  selector: '', // can be a valid <extSelector> except "@" syntax.
  straightOnly: false,
  straightOverlapThreshold: 0.5,
  rememberSource: false,
  disabled: false,
  defaultElement: '', // <extSelector> except "@" syntax.
  enterTo: '', // '', 'last-focused', 'default-element'
  leaveFor: null, // {left: <extSelector>, right: <extSelector>,
  //  up: <extSelector>, down: <extSelector>}
  restrict: 'self-first', // 'self-first', 'self-only', 'none'
  // tabIndexIgnoreList:
  //   'a, input, select, textarea, button, iframe, [contentEditable=true]',
  tabIndexIgnoreList: [],
  navigableFilter: null
};

/*********************/
/* Constant Variable */
/*********************/
var KEYMAPPING = {
  '37': 'left',
  '38': 'up',
  '39': 'right',
  '40': 'down'
};

var REVERSE = {
  'left': 'right',
  'up': 'down',
  'right': 'left',
  'down': 'up'
};

var EVENT_PREFIX = 'sn:';
var ID_POOL_PREFIX = 'section-';

/********************/
/* Private Variable */
/********************/
var _idPool = 0;
var _ready = false;
var _pause = false;
var _sections = {};
var _sectionCount = 0;
var _defaultSectionId = '';
var _lastSectionId = '';
var _duringFocusChange = false;

/************/
/* Polyfill */
/************/
var elementMatchesSelector = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || function (selector) {
  var matchedNodes = (this.parentNode || this.document).querySelectorAll(selector);
  return [].slice.call(matchedNodes).indexOf(this) >= 0;
};

/*****************/
/* Core Function */
/*****************/
function getRect(elem) {
  var cr = elem.getBoundingClientRect();
  var rect = {
    left: cr.left,
    top: cr.top,
    right: cr.right,
    bottom: cr.bottom,
    width: cr.width,
    height: cr.height
  };
  rect.element = elem;
  rect.center = {
    x: rect.left + Math.floor(rect.width / 2),
    y: rect.top + Math.floor(rect.height / 2)
  };
  rect.center.left = rect.center.right = rect.center.x;
  rect.center.top = rect.center.bottom = rect.center.y;
  return rect;
}

function partition(rects, targetRect, straightOverlapThreshold) {
  var groups = [[], [], [], [], [], [], [], [], []];

  for (var i = 0; i < rects.length; i++) {
    var rect = rects[i];
    var center = rect.center;
    var x, y, groupId;

    if (center.x < targetRect.left) {
      x = 0;
    } else if (center.x <= targetRect.right) {
      x = 1;
    } else {
      x = 2;
    }

    if (center.y < targetRect.top) {
      y = 0;
    } else if (center.y <= targetRect.bottom) {
      y = 1;
    } else {
      y = 2;
    }

    groupId = y * 3 + x;
    groups[groupId].push(rect);

    if ([0, 2, 6, 8].indexOf(groupId) !== -1) {
      var threshold = straightOverlapThreshold;

      if (rect.left <= targetRect.right - targetRect.width * threshold) {
        if (groupId === 2) {
          groups[1].push(rect);
        } else if (groupId === 8) {
          groups[7].push(rect);
        }
      }

      if (rect.right >= targetRect.left + targetRect.width * threshold) {
        if (groupId === 0) {
          groups[1].push(rect);
        } else if (groupId === 6) {
          groups[7].push(rect);
        }
      }

      if (rect.top <= targetRect.bottom - targetRect.height * threshold) {
        if (groupId === 6) {
          groups[3].push(rect);
        } else if (groupId === 8) {
          groups[5].push(rect);
        }
      }

      if (rect.bottom >= targetRect.top + targetRect.height * threshold) {
        if (groupId === 0) {
          groups[3].push(rect);
        } else if (groupId === 2) {
          groups[5].push(rect);
        }
      }
    }
  }

  return groups;
}

function generateDistanceFunction(targetRect) {
  return {
    nearPlumbLineIsBetter: function nearPlumbLineIsBetter(rect) {
      var d;
      if (rect.center.x < targetRect.center.x) {
        d = targetRect.center.x - rect.right;
      } else {
        d = rect.left - targetRect.center.x;
      }
      return d < 0 ? 0 : d;
    },
    nearHorizonIsBetter: function nearHorizonIsBetter(rect) {
      var d;
      if (rect.center.y < targetRect.center.y) {
        d = targetRect.center.y - rect.bottom;
      } else {
        d = rect.top - targetRect.center.y;
      }
      return d < 0 ? 0 : d;
    },
    nearTargetLeftIsBetter: function nearTargetLeftIsBetter(rect) {
      var d;
      if (rect.center.x < targetRect.center.x) {
        d = targetRect.left - rect.right;
      } else {
        d = rect.left - targetRect.left;
      }
      return d < 0 ? 0 : d;
    },
    nearTargetTopIsBetter: function nearTargetTopIsBetter(rect) {
      var d;
      if (rect.center.y < targetRect.center.y) {
        d = targetRect.top - rect.bottom;
      } else {
        d = rect.top - targetRect.top;
      }
      return d < 0 ? 0 : d;
    },
    topIsBetter: function topIsBetter(rect) {
      return rect.top;
    },
    bottomIsBetter: function bottomIsBetter(rect) {
      return -1 * rect.bottom;
    },
    leftIsBetter: function leftIsBetter(rect) {
      return rect.left;
    },
    rightIsBetter: function rightIsBetter(rect) {
      return -1 * rect.right;
    }
  };
}

function prioritize(priorities) {
  var destPriority = null;
  for (var i = 0; i < priorities.length; i++) {
    if (priorities[i].group.length) {
      destPriority = priorities[i];
      break;
    }
  }

  if (!destPriority) {
    return null;
  }

  var destDistance = destPriority.distance;

  destPriority.group.sort(function (a, b) {
    for (var i = 0; i < destDistance.length; i++) {
      var distance = destDistance[i];
      var delta = distance(a) - distance(b);
      if (delta) {
        return delta;
      }
    }
    return 0;
  });

  return destPriority.group;
}

function navigate(target, direction, candidates, config) {
  if (!target || !direction || !candidates || !candidates.length) {
    return null;
  }

  var rects = [];
  for (var i = 0; i < candidates.length; i++) {
    var rect = getRect(candidates[i]);
    if (rect) {
      rects.push(rect);
    }
  }
  if (!rects.length) {
    return null;
  }

  var targetRect = getRect(target);
  if (!targetRect) {
    return null;
  }

  var distanceFunction = generateDistanceFunction(targetRect);

  var groups = partition(rects, targetRect, config.straightOverlapThreshold);

  var internalGroups = partition(groups[4], targetRect.center, config.straightOverlapThreshold);

  var priorities;

  switch (direction) {
    case 'left':
      priorities = [{
        group: internalGroups[0].concat(internalGroups[3]).concat(internalGroups[6]),
        distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter]
      }, {
        group: groups[3],
        distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter]
      }, {
        group: groups[0].concat(groups[6]),
        distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.rightIsBetter, distanceFunction.nearTargetTopIsBetter]
      }];
      break;
    case 'right':
      priorities = [{
        group: internalGroups[2].concat(internalGroups[5]).concat(internalGroups[8]),
        distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter]
      }, {
        group: groups[5],
        distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter]
      }, {
        group: groups[2].concat(groups[8]),
        distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter, distanceFunction.nearTargetTopIsBetter]
      }];
      break;
    case 'up':
      priorities = [{
        group: internalGroups[0].concat(internalGroups[1]).concat(internalGroups[2]),
        distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter]
      }, {
        group: groups[1],
        distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter]
      }, {
        group: groups[0].concat(groups[2]),
        distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.bottomIsBetter, distanceFunction.nearTargetLeftIsBetter]
      }];
      break;
    case 'down':
      priorities = [{
        group: internalGroups[6].concat(internalGroups[7]).concat(internalGroups[8]),
        distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter]
      }, {
        group: groups[7],
        distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter]
      }, {
        group: groups[6].concat(groups[8]),
        distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter, distanceFunction.nearTargetLeftIsBetter]
      }];
      break;
    default:
      return null;
  }

  if (config.straightOnly) {
    priorities.pop();
  }

  var destGroup = prioritize(priorities);
  if (!destGroup) {
    return null;
  }

  var dest = null;
  if (config.rememberSource && config.previous && config.previous.destination === target && config.previous.reverse === direction) {
    for (var j = 0; j < destGroup.length; j++) {
      if (destGroup[j].element === config.previous.target) {
        dest = destGroup[j].element;
        break;
      }
    }
  }

  if (!dest) {
    dest = destGroup[0].element;
  }

  return dest;
}

/********************/
/* Private Function */
/********************/
function generateId() {
  var id;
  while (true) {
    id = ID_POOL_PREFIX + String(++_idPool);
    if (!_sections[id]) {
      break;
    }
  }
  return id;
}

function parseSelector(selector) {
  var result;
  if (typeof selector === 'string') {
    result = [].slice.call(document.querySelectorAll(selector));
  } else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object' && selector.length) {
    result = [].slice.call(selector);
  } else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object' && selector.nodeType === 1) {
    result = [selector];
  } else {
    result = [];
  }
  return result;
}

function matchSelector(elem, selector) {
  if (typeof selector === 'string') {
    return elementMatchesSelector.call(elem, selector);
  } else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object' && selector.length) {
    return selector.indexOf(elem) >= 0;
  } else if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) === 'object' && selector.nodeType === 1) {
    return elem === selector;
  }
  return false;
}

function getCurrentFocusedElement() {
  var activeElement = document.activeElement;
  if (activeElement && activeElement !== document.body) {
    return activeElement;
  }
}

function extend(out) {
  out = out || {};
  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i]) {
      continue;
    }
    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key) && arguments[i][key] !== undefined) {
        out[key] = arguments[i][key];
      }
    }
  }
  return out;
}

function exclude(elemList, excludedElem) {
  if (!Array.isArray(excludedElem)) {
    excludedElem = [excludedElem];
  }
  for (var i = 0, index; i < excludedElem.length; i++) {
    index = elemList.indexOf(excludedElem[i]);
    if (index >= 0) {
      elemList.splice(index, 1);
    }
  }
  return elemList;
}

function isNavigable(elem, sectionId, verifySectionSelector) {
  if (!elem || !sectionId || !_sections[sectionId] || _sections[sectionId].disabled) {
    return false;
  }
  if (elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || elem.hasAttribute('disabled')) {
    return false;
  }
  if (verifySectionSelector && !matchSelector(elem, _sections[sectionId].selector)) {
    return false;
  }
  if (typeof _sections[sectionId].navigableFilter === 'function') {
    if (_sections[sectionId].navigableFilter(elem, sectionId) === false) {
      return false;
    }
  } else if (typeof GlobalConfig.navigableFilter === 'function') {
    if (GlobalConfig.navigableFilter(elem, sectionId) === false) {
      return false;
    }
  }
  return true;
}

function getSectionId(elem) {
  for (var id in _sections) {
    if (!_sections[id].disabled && matchSelector(elem, _sections[id].selector)) {
      return id;
    }
  }
}

function getSectionNavigableElements(sectionId) {
  return parseSelector(_sections[sectionId].selector).filter(function (elem) {
    return isNavigable(elem, sectionId);
  });
}

function getSectionDefaultElement(sectionId) {
  var defaultElement = _sections[sectionId].defaultElement;
  if (!defaultElement) {
    return null;
  }
  if (typeof defaultElement === 'string') {
    defaultElement = parseSelector(defaultElement)[0];
  }
  if (isNavigable(defaultElement, sectionId, true)) {
    return defaultElement;
  }
  return null;
}

function getSectionLastFocusedElement(sectionId) {
  var lastFocusedElement = _sections[sectionId] && _sections[sectionId].lastFocusedElement;
  if (!isNavigable(lastFocusedElement, sectionId, true)) {
    return null;
  }
  return lastFocusedElement;
}

function fireEvent(elem, type, details, cancelable) {
  if (arguments.length < 4) {
    cancelable = true;
  }
  var evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(EVENT_PREFIX + type, true, cancelable, details);
  return elem.dispatchEvent(evt);
}

function focusElement(elem, sectionId, direction) {
  if (!elem) {
    return false;
  }

  var currentFocusedElement = getCurrentFocusedElement();

  var silentFocus = function silentFocus() {
    if (currentFocusedElement) {
      currentFocusedElement.blur();
    }
    elem.focus();
    focusChanged(elem, sectionId);
  };

  if (_duringFocusChange) {
    silentFocus();
    return true;
  }

  _duringFocusChange = true;

  if (_pause) {
    silentFocus();
    _duringFocusChange = false;
    return true;
  }

  if (currentFocusedElement) {
    var unfocusProperties = {
      nextElement: elem,
      nextSectionId: sectionId,
      direction: direction,
      native: false
    };
    if (!fireEvent(currentFocusedElement, 'willunfocus', unfocusProperties)) {
      _duringFocusChange = false;
      return false;
    }
    currentFocusedElement.blur();
    fireEvent(currentFocusedElement, 'unfocused', unfocusProperties, false);
  }

  var focusProperties = {
    previousElement: currentFocusedElement,
    sectionId: sectionId,
    direction: direction,
    native: false
  };
  if (!fireEvent(elem, 'willfocus', focusProperties)) {
    _duringFocusChange = false;
    return false;
  }
  elem.focus();
  fireEvent(elem, 'focused', focusProperties, false);

  _duringFocusChange = false;

  focusChanged(elem, sectionId);
  return true;
}

function focusChanged(elem, sectionId) {
  if (!sectionId) {
    sectionId = getSectionId(elem);
  }
  if (sectionId) {
    _sections[sectionId].lastFocusedElement = elem;
    _lastSectionId = sectionId;
  }
}

function focusExtendedSelector(selector, direction) {
  if (selector.charAt(0) == '@') {
    if (selector.length == 1) {
      return focusSection();
    } else {
      var sectionId = selector.substr(1);
      return focusSection(sectionId);
    }
  } else {
    var next = parseSelector(selector)[0];
    if (next) {
      var nextSectionId = getSectionId(next);
      if (isNavigable(next, nextSectionId)) {
        return focusElement(next, nextSectionId, direction);
      }
    }
  }
  return false;
}

function focusSection(sectionId) {
  var range = [];
  var addRange = function addRange(id) {
    if (id && range.indexOf(id) < 0 && _sections[id] && !_sections[id].disabled) {
      range.push(id);
    }
  };

  if (sectionId) {
    addRange(sectionId);
  } else {
    addRange(_defaultSectionId);
    addRange(_lastSectionId);
    _Object$keys(_sections).map(addRange);
  }

  for (var i = 0; i < range.length; i++) {
    var id = range[i];
    var next;

    if (_sections[id].enterTo == 'last-focused') {
      next = getSectionLastFocusedElement(id) || getSectionDefaultElement(id) || getSectionNavigableElements(id)[0];
    } else {
      next = getSectionDefaultElement(id) || getSectionLastFocusedElement(id) || getSectionNavigableElements(id)[0];
    }

    if (next) {
      return focusElement(next, id);
    }
  }

  return false;
}

function fireNavigatefailed(elem, direction) {
  fireEvent(elem, 'navigatefailed', {
    direction: direction
  }, false);
}

function gotoLeaveFor(sectionId, direction) {
  if (_sections[sectionId].leaveFor && _sections[sectionId].leaveFor[direction] !== undefined) {
    var next = _sections[sectionId].leaveFor[direction];

    if (typeof next === 'string') {
      if (next === '') {
        return null;
      }
      return focusExtendedSelector(next, direction);
    }

    var nextSectionId = getSectionId(next);
    if (isNavigable(next, nextSectionId)) {
      return focusElement(next, nextSectionId, direction);
    }
  }
  return false;
}

function focusNext(direction, currentFocusedElement, currentSectionId) {
  var extSelector = currentFocusedElement.getAttribute('data-sn-' + direction);
  if (typeof extSelector === 'string') {
    if (extSelector === '' || !focusExtendedSelector(extSelector, direction)) {
      fireNavigatefailed(currentFocusedElement, direction);
      return false;
    }
    return true;
  }

  var sectionNavigableElements = {};
  var allNavigableElements = [];
  for (var id in _sections) {
    sectionNavigableElements[id] = getSectionNavigableElements(id);
    allNavigableElements = allNavigableElements.concat(sectionNavigableElements[id]);
  }

  var config = extend({}, GlobalConfig, _sections[currentSectionId]);
  var next;

  if (config.restrict == 'self-only' || config.restrict == 'self-first') {
    var currentSectionNavigableElements = sectionNavigableElements[currentSectionId];

    next = navigate(currentFocusedElement, direction, exclude(currentSectionNavigableElements, currentFocusedElement), config);

    if (!next && config.restrict == 'self-first') {
      next = navigate(currentFocusedElement, direction, exclude(allNavigableElements, currentSectionNavigableElements), config);
    }
  } else {
    next = navigate(currentFocusedElement, direction, exclude(allNavigableElements, currentFocusedElement), config);
  }

  if (next) {
    _sections[currentSectionId].previous = {
      target: currentFocusedElement,
      destination: next,
      reverse: REVERSE[direction]
    };

    var nextSectionId = getSectionId(next);

    if (currentSectionId != nextSectionId) {
      var result = gotoLeaveFor(currentSectionId, direction);
      if (result) {
        return true;
      } else if (result === null) {
        fireNavigatefailed(currentFocusedElement, direction);
        return false;
      }

      var enterToElement;
      switch (_sections[nextSectionId].enterTo) {
        case 'last-focused':
          enterToElement = getSectionLastFocusedElement(nextSectionId) || getSectionDefaultElement(nextSectionId);
          break;
        case 'default-element':
          enterToElement = getSectionDefaultElement(nextSectionId);
          break;
      }
      if (enterToElement) {
        next = enterToElement;
      }
    }

    return focusElement(next, nextSectionId, direction);
  } else if (gotoLeaveFor(currentSectionId, direction)) {
    return true;
  }

  fireNavigatefailed(currentFocusedElement, direction);
  return false;
}

function onKeyDown(evt) {
  if (!_sectionCount || _pause || evt.altKey || evt.ctrlKey || evt.metaKey || evt.shiftKey) {
    return;
  }

  var currentFocusedElement;
  var preventDefault = function preventDefault() {
    evt.preventDefault();
    evt.stopPropagation();
    return false;
  };

  var direction = KEYMAPPING[evt.keyCode];
  if (!direction) {
    if (evt.keyCode == 13) {
      currentFocusedElement = getCurrentFocusedElement();
      if (currentFocusedElement && getSectionId(currentFocusedElement)) {
        if (!fireEvent(currentFocusedElement, 'enter-down')) {
          return preventDefault();
        }
      }
    }
    return;
  }

  currentFocusedElement = getCurrentFocusedElement();

  if (!currentFocusedElement) {
    if (_lastSectionId) {
      currentFocusedElement = getSectionLastFocusedElement(_lastSectionId);
    }
    if (!currentFocusedElement) {
      focusSection();
      return preventDefault();
    }
  }

  var currentSectionId = getSectionId(currentFocusedElement);
  if (!currentSectionId) {
    return;
  }

  var willmoveProperties = {
    direction: direction,
    sectionId: currentSectionId,
    cause: 'keydown'
  };

  if (fireEvent(currentFocusedElement, 'willmove', willmoveProperties)) {
    focusNext(direction, currentFocusedElement, currentSectionId);
  }

  return preventDefault();
}

function onKeyUp(evt) {
  if (evt.altKey || evt.ctrlKey || evt.metaKey || evt.shiftKey) {
    return;
  }
  if (!_pause && _sectionCount && evt.keyCode == 13) {
    var currentFocusedElement = getCurrentFocusedElement();
    if (currentFocusedElement && getSectionId(currentFocusedElement)) {
      if (!fireEvent(currentFocusedElement, 'enter-up')) {
        evt.preventDefault();
        evt.stopPropagation();
      }
    }
  }
}

function onFocus(evt) {
  var target = evt.target;
  if (target !== window && target !== document && _sectionCount && !_duringFocusChange) {
    var sectionId = getSectionId(target);
    if (sectionId) {
      if (_pause) {
        focusChanged(target, sectionId);
        return;
      }

      var focusProperties = {
        sectionId: sectionId,
        native: true
      };

      if (!fireEvent(target, 'willfocus', focusProperties)) {
        _duringFocusChange = true;
        target.blur();
        _duringFocusChange = false;
      } else {
        fireEvent(target, 'focused', focusProperties, false);
        focusChanged(target, sectionId);
      }
    }
  }
}

function onBlur(evt) {
  var target = evt.target;
  if (target !== window && target !== document && !_pause && _sectionCount && !_duringFocusChange && getSectionId(target)) {
    var unfocusProperties = {
      native: true
    };
    if (!fireEvent(target, 'willunfocus', unfocusProperties)) {
      _duringFocusChange = true;
      setTimeout(function () {
        target.focus();
        _duringFocusChange = false;
      });
    } else {
      fireEvent(target, 'unfocused', unfocusProperties, false);
    }
  }
}

/*******************/
/* Public Function */
/*******************/
var SpatialNavigation$2 = {
  init: function init() {
    if (!_ready) {
      window.addEventListener('keydown', onKeyDown);
      window.addEventListener('keyup', onKeyUp);
      window.addEventListener('focus', onFocus, true);
      window.addEventListener('blur', onBlur, true);
      _ready = true;
    }
  },

  uninit: function uninit() {
    window.removeEventListener('blur', onBlur, true);
    window.removeEventListener('focus', onFocus, true);
    window.removeEventListener('keyup', onKeyUp);
    window.removeEventListener('keydown', onKeyDown);
    SpatialNavigation$2.clear();
    _idPool = 0;
    _ready = false;
  },

  clear: function clear() {
    _sections = {};
    _sectionCount = 0;
    _defaultSectionId = '';
    _lastSectionId = '';
    _duringFocusChange = false;
  },

  // set(<config>);
  // set(<sectionId>, <config>);
  set: function set() {
    var sectionId, config;

    if (_typeof(arguments[0]) === 'object') {
      config = arguments[0];
    } else if (typeof arguments[0] === 'string' && _typeof(arguments[1]) === 'object') {
      sectionId = arguments[0];
      config = arguments[1];
      if (!_sections[sectionId]) {
        throw new Error('Section "' + sectionId + '" doesn\'t exist!');
      }
    } else {
      return;
    }

    for (var key in config) {
      if (GlobalConfig[key] !== undefined) {
        if (sectionId) {
          _sections[sectionId][key] = config[key];
        } else if (config[key] !== undefined) {
          GlobalConfig[key] = config[key];
        }
      }
    }

    if (sectionId) {
      // remove "undefined" items
      _sections[sectionId] = extend({}, _sections[sectionId]);
    }
  },

  // add(<config>);
  // add(<sectionId>, <config>);
  add: function add() {
    var sectionId;
    var config = {};

    if (_typeof(arguments[0]) === 'object') {
      config = arguments[0];
    } else if (typeof arguments[0] === 'string' && _typeof(arguments[1]) === 'object') {
      sectionId = arguments[0];
      config = arguments[1];
    }

    if (!sectionId) {
      sectionId = typeof config.id === 'string' ? config.id : generateId();
    }

    if (_sections[sectionId]) {
      throw new Error('Section "' + sectionId + '" has already existed!');
    }

    _sections[sectionId] = {};
    _sectionCount++;

    SpatialNavigation$2.set(sectionId, config);

    return sectionId;
  },

  remove: function remove(sectionId) {
    if (!sectionId || typeof sectionId !== 'string') {
      throw new Error('Please assign the "sectionId"!');
    }
    if (_sections[sectionId]) {
      _sections[sectionId] = undefined;
      _sections = extend({}, _sections);
      _sectionCount--;
      return true;
    }
    return false;
  },

  disable: function disable(sectionId) {
    if (_sections[sectionId]) {
      _sections[sectionId].disabled = true;
      return true;
    }
    return false;
  },

  enable: function enable(sectionId) {
    if (_sections[sectionId]) {
      _sections[sectionId].disabled = false;
      return true;
    }
    return false;
  },

  pause: function pause() {
    _pause = true;
  },

  resume: function resume() {
    _pause = false;
  },

  // focus([silent])
  // focus(<sectionId>, [silent])
  // focus(<extSelector>, [silent])
  // Note: "silent" is optional and default to false
  focus: function focus(elem, silent) {
    var result = false;

    if (silent === undefined && typeof elem === 'boolean') {
      silent = elem;
      elem = undefined;
    }

    var autoPause = !_pause && silent;

    if (autoPause) {
      SpatialNavigation$2.pause();
    }

    if (!elem) {
      result = focusSection();
    } else {
      if (typeof elem === 'string') {
        if (_sections[elem]) {
          result = focusSection(elem);
        } else {
          result = focusExtendedSelector(elem);
        }
      } else {
        var nextSectionId = getSectionId(elem);
        if (isNavigable(elem, nextSectionId)) {
          result = focusElement(elem, nextSectionId);
        }
      }
    }

    if (autoPause) {
      SpatialNavigation$2.resume();
    }

    return result;
  },

  // move(<direction>)
  // move(<direction>, <selector>)
  move: function move(direction, selector) {
    direction = direction.toLowerCase();
    if (!REVERSE[direction]) {
      return false;
    }

    var elem = selector ? parseSelector(selector)[0] : getCurrentFocusedElement();
    if (!elem) {
      return false;
    }

    var sectionId = getSectionId(elem);
    if (!sectionId) {
      return false;
    }

    var willmoveProperties = {
      direction: direction,
      sectionId: sectionId,
      cause: 'api'
    };

    if (!fireEvent(elem, 'willmove', willmoveProperties)) {
      return false;
    }

    return focusNext(direction, elem, sectionId);
  },

  // makeFocusable()
  // makeFocusable(<sectionId>)
  makeFocusable: function makeFocusable(sectionId) {
    var doMakeFocusable = function doMakeFocusable(section) {
      var tabIndexIgnoreList = section.tabIndexIgnoreList !== undefined ? section.tabIndexIgnoreList : GlobalConfig.tabIndexIgnoreList;
      parseSelector(section.selector).forEach(function (elem) {
        if (!matchSelector(elem, tabIndexIgnoreList)) {
          if (!elem.getAttribute('tabindex')) {
            elem.setAttribute('tabindex', '-1');
          }
        }
      });
    };

    if (sectionId) {
      if (_sections[sectionId]) {
        doMakeFocusable(_sections[sectionId]);
      } else {
        throw new Error('Section "' + sectionId + '" doesn\'t exist!');
      }
    } else {
      for (var id in _sections) {
        doMakeFocusable(_sections[id]);
      }
    }
  },

  setDefaultSection: function setDefaultSection(sectionId) {
    if (!sectionId) {
      _defaultSectionId = '';
    } else if (!_sections[sectionId]) {
      throw new Error('Section "' + sectionId + '" doesn\'t exist!');
    } else {
      _defaultSectionId = sectionId;
    }
  },

  getSectionId: getSectionId
};



/*eslint-enable*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpatialNavigation = function () {
  function SpatialNavigation() {
    _classCallCheck(this, SpatialNavigation);

    this.handleFocused = this.handleFocused.bind(this);

    this.destroy();
    this.bindFocusEvent();
  }

  SpatialNavigation.prototype.init = function init(updateState) {
    if (!this.setState) {
      this.setState = updateState;
    }

    SpatialNavigation$2.init();
    SpatialNavigation$2.focus();
    this.bindFocusEvent();
  };

  SpatialNavigation.prototype.destroy = function destroy() {
    this.focusedPath = null;
    this.setState = null;

    SpatialNavigation$2.uninit();
    this.unbindFocusEvent();
  };

  SpatialNavigation.prototype.bindFocusEvent = function bindFocusEvent() {
    if (!this.listening) {
      this.listening = true;
      document.addEventListener('sn:focused', this.handleFocused);
    }
  };

  SpatialNavigation.prototype.unbindFocusEvent = function unbindFocusEvent() {
    document.removeEventListener('sn:focused', this.handleFocused);
    this.listening = false;
  };

  SpatialNavigation.prototype.handleFocused = function handleFocused(ev) {
    if (this.focusedPath !== ev.detail.sectionId) {
      this.setState(ev.detail.sectionId);
      SpatialNavigation$2.focus(ev.detail.sectionId);
    }
  };

  SpatialNavigation.prototype.getCurrentFocusedPath = function getCurrentFocusedPath() {
    return this.focusedPath;
  };

  SpatialNavigation.prototype.setCurrentFocusedPath = function setCurrentFocusedPath(focusPath) {
    this.focusedPath = focusPath;
    SpatialNavigation$2.focus(focusPath);
  };

  SpatialNavigation.prototype.addFocusable = function addFocusable(focusDOMElement, _ref) {
    var focusPath = _ref.focusPath,
        onEnterPressHandler = _ref.onEnterPressHandler,
        disabled = _ref.disabled;

    if (!focusDOMElement || SpatialNavigation$2.getSectionId(focusDOMElement)) {
      return;
    }

    this.removeFocusable(focusDOMElement, { onEnterPressHandler: onEnterPressHandler });

    var params = [{ selector: focusDOMElement }];
    if (focusPath) {
      params.unshift(focusPath);
    }

    focusDOMElement.addEventListener('sn:enter-down', onEnterPressHandler);
    var sectionId = SpatialNavigation$2.add.apply(SpatialNavigation$2, params);
    SpatialNavigation$2.makeFocusable(sectionId);

    if (disabled) {
      SpatialNavigation$2.disable(sectionId);
    }
  };

  SpatialNavigation.prototype.removeFocusable = function removeFocusable(focusDOMElement, _ref2) {
    var onEnterPressHandler = _ref2.onEnterPressHandler;

    var sectionId = SpatialNavigation$2.getSectionId(focusDOMElement);
    if (!sectionId) {
      return;
    }

    SpatialNavigation$2.remove(sectionId);
    focusDOMElement.removeEventListener('sn:enter-down', onEnterPressHandler);
  };

  return SpatialNavigation;
}();

var SpatialNavigation$1 = new SpatialNavigation();

var _extends = _Object$assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var withFocusable$1 = compose(setPropTypes({
  focusPath: propTypes.string.isRequired
}), getContext({
  setFocus: propTypes.func,
  currentFocusPath: propTypes.string
}), mapProps(function (_ref) {
  var currentFocusPath = _ref.currentFocusPath,
      focusPath = _ref.focusPath,
      _ref$setFocus = _ref.setFocus,
      setFocus = _ref$setFocus === undefined ? function () {} : _ref$setFocus,
      props = _objectWithoutProperties(_ref, ['currentFocusPath', 'focusPath', 'setFocus']);

  return _extends({
    focused: currentFocusPath === focusPath,
    setFocus: setFocus.bind(null, focusPath),
    focusPath: focusPath
  }, props);
}), withHandlers({
  onEnterPressHandler: function onEnterPressHandler(_ref2) {
    var _ref2$onEnterPress = _ref2.onEnterPress,
        onEnterPress = _ref2$onEnterPress === undefined ? function () {} : _ref2$onEnterPress;
    return onEnterPress;
  }
}), lifecycle({
  addFocusable: function addFocusable() {
    var _props = this.props,
        focusPath = _props.focusPath,
        onEnterPressHandler = _props.onEnterPressHandler;

    console.log(ReactTV.findDOMNode);
    SpatialNavigation$1.addFocusable(ReactTV.findDOMNode(this), { focusPath: focusPath, onEnterPressHandler: onEnterPressHandler });
  },
  componentDidMount: function componentDidMount() {
    this.addFocusable();
  },
  componentDidUpdate: function componentDidUpdate() {
    this.addFocusable();
  },
  componentWillUnmount: function componentWillUnmount() {
    SpatialNavigation$1.removeFocusable(ReactTV.findDOMNode(this), { onEnterPressHandler: this.props.onEnterPressHandler });
  }
}));

var withContext_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;





var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withContext = function withContext(childContextTypes, getChildContext) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var WithContext = function (_Component) {
      _inherits(WithContext, _Component);

      function WithContext() {
        var _temp, _this, _ret;

        _classCallCheck(this, WithContext);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = function () {
          return getChildContext(_this.props);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      WithContext.prototype.render = function render() {
        return factory(this.props);
      };

      return WithContext;
    }(_react.Component);

    WithContext.childContextTypes = childContextTypes;

    {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'withContext'))(WithContext);
    }
    return WithContext;
  };
};

exports.default = withContext;
});

var withContext = unwrapExports(withContext_1);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is$1(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual$2(objA, objB) {
  if (is$1(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty$2.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

var shallowEqual_1 = shallowEqual$2;

var shallowEqual = createCommonjsModule(function (module, exports) {
exports.__esModule = true;



var _shallowEqual2 = _interopRequireDefault(shallowEqual_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;
});

unwrapExports(shallowEqual);

var withStateHandlers_1 = createCommonjsModule(function (module, exports) {
exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);



var _shallowEqual2 = _interopRequireDefault(shallowEqual);



var _mapValues2 = _interopRequireDefault(mapValues_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withStateHandlers = function withStateHandlers(initialState, stateUpdaters) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var WithStateHandlers = function (_Component) {
      _inherits(WithStateHandlers, _Component);

      function WithStateHandlers() {
        var _temp, _this, _ret;

        _classCallCheck(this, WithStateHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
      }

      WithStateHandlers.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        var propsChanged = nextProps !== this.props;
        // the idea is to skip render if stateUpdater handler return undefined
        // this allows to create no state update handlers with access to state and props
        var stateChanged = !(0, _shallowEqual2.default)(nextState, this.state);
        return propsChanged || stateChanged;
      };

      WithStateHandlers.prototype.render = function render() {
        return factory(_extends({}, this.props, this.state, this.stateUpdaters));
      };

      return WithStateHandlers;
    }(_react.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.state = typeof initialState === 'function' ? initialState(this.props) : initialState;
      this.stateUpdaters = (0, _mapValues2.default)(stateUpdaters, function (handler) {
        return function (mayBeEvent) {
          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          // Having that functional form of setState can be called async
          // we need to persist SyntheticEvent
          if (mayBeEvent && typeof mayBeEvent.persist === 'function') {
            mayBeEvent.persist();
          }

          _this2.setState(function (state, props) {
            return handler(state, props).apply(undefined, [mayBeEvent].concat(args));
          });
        };
      });
    };

    {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'withStateHandlers'))(WithStateHandlers);
    }
    return WithStateHandlers;
  };
};

exports.default = withStateHandlers;
});

var withStateHandlers = unwrapExports(withStateHandlers_1);

var withNavigation$1 = compose(withStateHandlers({
  currentFocusPath: SpatialNavigation$1.getCurrentFocusedPath()
}, {
  setFocus: function setFocus(_ref) {
    var currentFocusPath = _ref.currentFocusPath;
    return function (focusPath, overwriteFocusPath) {
      var newFocusPath = overwriteFocusPath || focusPath;
      if (currentFocusPath !== newFocusPath) {
        SpatialNavigation$1.setCurrentFocusedPath(newFocusPath);
        return { currentFocusPath: newFocusPath };
      }
    };
  }
}), withContext({ setFocus: propTypes.func, currentFocusPath: propTypes.string }, function (_ref2) {
  var setFocus = _ref2.setFocus,
      currentFocusPath = _ref2.currentFocusPath;
  return { setFocus: setFocus, currentFocusPath: currentFocusPath };
}), lifecycle({
  componentDidMount: function componentDidMount() {
    SpatialNavigation$1.init(this.props.setFocus);
  },
  componentDidUpdate: function componentDidUpdate() {
    SpatialNavigation$1.init(this.props.setFocus);
  },
  componentWillUnmount: function componentWillUnmount() {
    SpatialNavigation$1.destroy();
  }
}));

var withFocusable = withFocusable$1;
var withNavigation = withNavigation$1;

exports.withFocusable = withFocusable;
exports.withNavigation = withNavigation;

Object.defineProperty(exports, '__esModule', { value: true });

})));
