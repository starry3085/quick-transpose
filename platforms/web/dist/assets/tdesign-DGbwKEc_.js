import { g as getDefaultExportFromCjs$1, c as commonjsGlobal$1, r as reactExports, R as React, a as reactDomExports, b as ReactDOM, d as ReactDOM$1 } from "./vendor-Boyj_dwm.js";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function toPrimitive(t2, r2) {
  if ("object" != _typeof$2(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i = e2.call(t2, r2);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i = toPrimitive(t2, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _defineProperty$2(e2, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function _objectWithoutPropertiesLoose$3(r2, e2) {
  if (null == r2) return {};
  var t2 = {};
  for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
    if (-1 !== e2.indexOf(n2)) continue;
    t2[n2] = r2[n2];
  }
  return t2;
}
function _objectWithoutProperties$2(e2, t2) {
  if (null == e2) return {};
  var o, r2, i = _objectWithoutPropertiesLoose$3(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < n2.length; r2++) o = n2[r2], -1 === t2.indexOf(o) && {}.propertyIsEnumerable.call(e2, o) && (i[o] = e2[o]);
  }
  return i;
}
var classnames$2 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module2) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = "";
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames2.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (module2.exports) {
      classNames2.default = classNames2;
      module2.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames$2);
var classnamesExports = classnames$2.exports;
const classNames$2 = /* @__PURE__ */ getDefaultExportFromCjs$1(classnamesExports);
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
var nativeObjectToString$1 = objectProto$f.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$c.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$e = Object.prototype;
var nativeObjectToString = objectProto$e.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray = Array.isArray;
var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$d = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$b).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap$1 = getNative(root, "WeakMap");
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty$1 = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$c = Object.prototype;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$a.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax$1 = Math.max;
function overRest(func, start2, transform) {
  start2 = nativeMax$1(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start2, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start2 + index];
    }
    index = -1;
    var otherArgs = Array(start2 + 1);
    while (++index < start2) {
      otherArgs[index] = args[index];
    }
    otherArgs[start2] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start2) {
  return setToString(overRest(func, start2, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var objectProto$b = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$b;
  return value === proto;
}
function baseTimes(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$9.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$4 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$4 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$4] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$4] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$6.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : void 0;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty$4.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values[index];
  }
  return array;
}
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (predicate(value)) {
      {
        arrayPush(result, value);
      }
    } else {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array) : [];
}
function flatRest(func) {
  return setToString(overRest(func, void 0, flatten), func + "");
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$4 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function baseSlice(array, start2, end2) {
  var index = -1, length = array.length;
  if (start2 < 0) {
    start2 = -start2 > length ? 0 : length + start2;
  }
  end2 = end2 > length ? length : end2;
  if (end2 < 0) {
    end2 += length;
  }
  length = start2 > end2 ? 0 : end2 - start2 >>> 0;
  start2 >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start2];
  }
  return result;
}
function castSlice(array, start2, end2) {
  var length = array.length;
  end2 = end2 === void 0 ? length : end2;
  return !start2 && end2 >= length ? array : baseSlice(array, start2, end2);
}
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
function asciiToArray(string) {
  return string.split("");
}
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var upperFirst = createCaseFirst("toUpperCase");
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$3 = Object.prototype;
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
var DataView = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$2.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array = root.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$3 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$3 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$2;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$2;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var CLONE_DEEP_FLAG$2 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$2 = 4;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$2 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$2 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$2] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$2, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$2;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG$1 = 1, CLONE_SYMBOLS_FLAG$1 = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag$1 = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag$1 = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag$1:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag$1:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var stringTag = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
}
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
function isEqual$1(value, other) {
  return baseIsEqual(value, other);
}
var numberTag = "[object Number]";
function isNumber(value) {
  return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
}
var merge$1 = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
function customOmitClone(value) {
  return isPlainObject(value) ? void 0 : value;
}
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet(object, path);
    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var dayjs_min = { exports: {} };
(function(module2, exports2) {
  !function(t2, e2) {
    module2.exports = e2();
  }(commonjsGlobal$1, function() {
    var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i = "second", s = "minute", u2 = "hour", a = "day", o = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
      var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
      return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
    } }, m2 = function(t3, e3, n3) {
      var r3 = String(t3);
      return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
    }, v2 = { s: m2, z: function(t3) {
      var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i2 = n3 % 60;
      return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i2, 2, "0");
    }, m: function t3(e3, n3) {
      if (e3.date() < n3.date()) return -t3(n3, e3);
      var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i2 = e3.clone().add(r3, c2), s2 = n3 - i2 < 0, u3 = e3.clone().add(r3 + (s2 ? -1 : 1), c2);
      return +(-(r3 + (n3 - i2) / (s2 ? i2 - u3 : u3 - i2)) || 0);
    }, a: function(t3) {
      return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
    }, p: function(t3) {
      return { M: c2, y: h2, w: o, d: a, D: d2, h: u2, m: s, s: i, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t3) {
      return void 0 === t3;
    } }, g2 = "en", D = {};
    D[g2] = M;
    var p2 = "$isDayjsObject", S = function(t3) {
      return t3 instanceof _ || !(!t3 || !t3[p2]);
    }, w2 = function t3(e3, n3, r3) {
      var i2;
      if (!e3) return g2;
      if ("string" == typeof e3) {
        var s2 = e3.toLowerCase();
        D[s2] && (i2 = s2), n3 && (D[s2] = n3, i2 = s2);
        var u3 = e3.split("-");
        if (!i2 && u3.length > 1) return t3(u3[0]);
      } else {
        var a2 = e3.name;
        D[a2] = e3, i2 = a2;
      }
      return !r3 && i2 && (g2 = i2), i2 || !r3 && g2;
    }, O = function(t3, e3) {
      if (S(t3)) return t3.clone();
      var n3 = "object" == typeof e3 ? e3 : {};
      return n3.date = t3, n3.args = arguments, new _(n3);
    }, b2 = v2;
    b2.l = w2, b2.i = S, b2.w = function(t3, e3) {
      return O(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
    };
    var _ = function() {
      function M2(t3) {
        this.$L = w2(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
      }
      var m3 = M2.prototype;
      return m3.parse = function(t3) {
        this.$d = function(t4) {
          var e3 = t4.date, n3 = t4.utc;
          if (null === e3) return /* @__PURE__ */ new Date(NaN);
          if (b2.u(e3)) return /* @__PURE__ */ new Date();
          if (e3 instanceof Date) return new Date(e3);
          if ("string" == typeof e3 && !/Z$/i.test(e3)) {
            var r3 = e3.match($);
            if (r3) {
              var i2 = r3[2] - 1 || 0, s2 = (r3[7] || "0").substring(0, 3);
              return n3 ? new Date(Date.UTC(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2)) : new Date(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2);
            }
          }
          return new Date(e3);
        }(t3), this.init();
      }, m3.init = function() {
        var t3 = this.$d;
        this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
      }, m3.$utils = function() {
        return b2;
      }, m3.isValid = function() {
        return !(this.$d.toString() === l2);
      }, m3.isSame = function(t3, e3) {
        var n3 = O(t3);
        return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
      }, m3.isAfter = function(t3, e3) {
        return O(t3) < this.startOf(e3);
      }, m3.isBefore = function(t3, e3) {
        return this.endOf(e3) < O(t3);
      }, m3.$g = function(t3, e3, n3) {
        return b2.u(t3) ? this[e3] : this.set(n3, t3);
      }, m3.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m3.valueOf = function() {
        return this.$d.getTime();
      }, m3.startOf = function(t3, e3) {
        var n3 = this, r3 = !!b2.u(e3) || e3, f3 = b2.p(t3), l3 = function(t4, e4) {
          var i2 = b2.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
          return r3 ? i2 : i2.endOf(a);
        }, $2 = function(t4, e4) {
          return b2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
        }, y3 = this.$W, M3 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
        switch (f3) {
          case h2:
            return r3 ? l3(1, 0) : l3(31, 11);
          case c2:
            return r3 ? l3(1, M3) : l3(0, M3 + 1);
          case o:
            var g3 = this.$locale().weekStart || 0, D2 = (y3 < g3 ? y3 + 7 : y3) - g3;
            return l3(r3 ? m4 - D2 : m4 + (6 - D2), M3);
          case a:
          case d2:
            return $2(v3 + "Hours", 0);
          case u2:
            return $2(v3 + "Minutes", 1);
          case s:
            return $2(v3 + "Seconds", 2);
          case i:
            return $2(v3 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m3.endOf = function(t3) {
        return this.startOf(t3, false);
      }, m3.$set = function(t3, e3) {
        var n3, o2 = b2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a] = f3 + "Date", n3[d2] = f3 + "Date", n3[c2] = f3 + "Month", n3[h2] = f3 + "FullYear", n3[u2] = f3 + "Hours", n3[s] = f3 + "Minutes", n3[i] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[o2], $2 = o2 === a ? this.$D + (e3 - this.$W) : e3;
        if (o2 === c2 || o2 === h2) {
          var y3 = this.clone().set(d2, 1);
          y3.$d[l3]($2), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
        } else l3 && this.$d[l3]($2);
        return this.init(), this;
      }, m3.set = function(t3, e3) {
        return this.clone().$set(t3, e3);
      }, m3.get = function(t3) {
        return this[b2.p(t3)]();
      }, m3.add = function(r3, f3) {
        var d3, l3 = this;
        r3 = Number(r3);
        var $2 = b2.p(f3), y3 = function(t3) {
          var e3 = O(l3);
          return b2.w(e3.date(e3.date() + Math.round(t3 * r3)), l3);
        };
        if ($2 === c2) return this.set(c2, this.$M + r3);
        if ($2 === h2) return this.set(h2, this.$y + r3);
        if ($2 === a) return y3(1);
        if ($2 === o) return y3(7);
        var M3 = (d3 = {}, d3[s] = e2, d3[u2] = n2, d3[i] = t2, d3)[$2] || 1, m4 = this.$d.getTime() + r3 * M3;
        return b2.w(m4, this);
      }, m3.subtract = function(t3, e3) {
        return this.add(-1 * t3, e3);
      }, m3.format = function(t3) {
        var e3 = this, n3 = this.$locale();
        if (!this.isValid()) return n3.invalidDate || l2;
        var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b2.z(this), s2 = this.$H, u3 = this.$m, a2 = this.$M, o2 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h3 = function(t4, n4, i3, s3) {
          return t4 && (t4[n4] || t4(e3, r3)) || i3[n4].slice(0, s3);
        }, d3 = function(t4) {
          return b2.s(s2 % 12 || 12, t4, "0");
        }, $2 = f3 || function(t4, e4, n4) {
          var r4 = t4 < 12 ? "AM" : "PM";
          return n4 ? r4.toLowerCase() : r4;
        };
        return r3.replace(y2, function(t4, r4) {
          return r4 || function(t5) {
            switch (t5) {
              case "YY":
                return String(e3.$y).slice(-2);
              case "YYYY":
                return b2.s(e3.$y, 4, "0");
              case "M":
                return a2 + 1;
              case "MM":
                return b2.s(a2 + 1, 2, "0");
              case "MMM":
                return h3(n3.monthsShort, a2, c3, 3);
              case "MMMM":
                return h3(c3, a2);
              case "D":
                return e3.$D;
              case "DD":
                return b2.s(e3.$D, 2, "0");
              case "d":
                return String(e3.$W);
              case "dd":
                return h3(n3.weekdaysMin, e3.$W, o2, 2);
              case "ddd":
                return h3(n3.weekdaysShort, e3.$W, o2, 3);
              case "dddd":
                return o2[e3.$W];
              case "H":
                return String(s2);
              case "HH":
                return b2.s(s2, 2, "0");
              case "h":
                return d3(1);
              case "hh":
                return d3(2);
              case "a":
                return $2(s2, u3, true);
              case "A":
                return $2(s2, u3, false);
              case "m":
                return String(u3);
              case "mm":
                return b2.s(u3, 2, "0");
              case "s":
                return String(e3.$s);
              case "ss":
                return b2.s(e3.$s, 2, "0");
              case "SSS":
                return b2.s(e3.$ms, 3, "0");
              case "Z":
                return i2;
            }
            return null;
          }(t4) || i2.replace(":", "");
        });
      }, m3.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m3.diff = function(r3, d3, l3) {
        var $2, y3 = this, M3 = b2.p(d3), m4 = O(r3), v3 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D2 = function() {
          return b2.m(y3, m4);
        };
        switch (M3) {
          case h2:
            $2 = D2() / 12;
            break;
          case c2:
            $2 = D2();
            break;
          case f2:
            $2 = D2() / 3;
            break;
          case o:
            $2 = (g3 - v3) / 6048e5;
            break;
          case a:
            $2 = (g3 - v3) / 864e5;
            break;
          case u2:
            $2 = g3 / n2;
            break;
          case s:
            $2 = g3 / e2;
            break;
          case i:
            $2 = g3 / t2;
            break;
          default:
            $2 = g3;
        }
        return l3 ? $2 : b2.a($2);
      }, m3.daysInMonth = function() {
        return this.endOf(c2).$D;
      }, m3.$locale = function() {
        return D[this.$L];
      }, m3.locale = function(t3, e3) {
        if (!t3) return this.$L;
        var n3 = this.clone(), r3 = w2(t3, e3, true);
        return r3 && (n3.$L = r3), n3;
      }, m3.clone = function() {
        return b2.w(this.$d, this);
      }, m3.toDate = function() {
        return new Date(this.valueOf());
      }, m3.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m3.toISOString = function() {
        return this.$d.toISOString();
      }, m3.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), k2 = _.prototype;
    return O.prototype = k2, [["$ms", r2], ["$s", i], ["$m", s], ["$H", u2], ["$W", a], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t3) {
      k2[t3[1]] = function(e3) {
        return this.$g(e3, t3[0], t3[1]);
      };
    }), O.extend = function(t3, e3) {
      return t3.$i || (t3(e3, _, O), t3.$i = true), O;
    }, O.locale = w2, O.isDayjs = S, O.unix = function(t3) {
      return O(1e3 * t3);
    }, O.en = D[g2], O.Ls = D, O.p = {}, O;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
const dayjs = /* @__PURE__ */ getDefaultExportFromCjs$1(dayjs_minExports);
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var zhCn$1 = { exports: {} };
(function(module2, exports2) {
  !function(e2, _) {
    module2.exports = _(dayjs);
  }(commonjsGlobal, function(e2) {
    function _(e3) {
      return e3 && "object" == _typeof$2(e3) && "default" in e3 ? e3 : {
        "default": e3
      };
    }
    var t2 = _(e2), d2 = {
      name: "zh-cn",
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      ordinal: function ordinal(e3, _2) {
        return "W" === _2 ? e3 + "周" : e3 + "日";
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日Ah点mm分",
        LLLL: "YYYY年M月D日ddddAh点mm分",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm"
      },
      relativeTime: {
        future: "%s内",
        past: "%s前",
        s: "几秒",
        m: "1 分钟",
        mm: "%d 分钟",
        h: "1 小时",
        hh: "%d 小时",
        d: "1 天",
        dd: "%d 天",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年"
      },
      meridiem: function meridiem(e3, _2) {
        var t3 = 100 * e3 + _2;
        return t3 < 600 ? "凌晨" : t3 < 900 ? "早上" : t3 < 1100 ? "上午" : t3 < 1300 ? "中午" : t3 < 1800 ? "下午" : "晚上";
      }
    };
    return t2["default"].locale(d2, null, true), d2;
  });
})(zhCn$1);
var zhCN = {
  autoComplete: {
    empty: "暂无数据"
  },
  pagination: {
    itemsPerPage: "{size} 条/页",
    jumpTo: "跳至",
    page: "页",
    total: "共 {count} 条数据"
  },
  cascader: {
    empty: "暂无数据",
    loadingText: "加载中",
    placeholder: "请选择"
  },
  calendar: {
    yearSelection: "{year} 年",
    monthSelection: "{month} 月",
    yearRadio: "年",
    monthRadio: "月",
    hideWeekend: "隐藏周末",
    showWeekend: "显示周末",
    today: "今天",
    thisMonth: "本月",
    week: "一,二,三,四,五,六,日",
    cellMonth: "1 月,2 月,3 月,4 月,5 月,6 月,7 月,8 月,9 月,10 月,11 月,12 月"
  },
  transfer: {
    title: "{checked} / {total} 项",
    empty: "暂无数据",
    placeholder: "请输入关键词搜索"
  },
  timePicker: {
    dayjsLocale: "zh-cn",
    now: "此刻",
    confirm: "确定",
    anteMeridiem: "上午",
    postMeridiem: "下午",
    placeholder: "选择时间"
  },
  dialog: {
    confirm: "确认",
    cancel: "取消"
  },
  drawer: {
    confirm: "确认",
    cancel: "取消"
  },
  popconfirm: {
    confirm: {
      content: "确定"
    },
    cancel: {
      content: "取消"
    }
  },
  table: {
    empty: "暂无数据",
    loadingText: "正在加载中，请稍后",
    loadingMoreText: "点击加载更多",
    filterInputPlaceholder: "请输入内容（无默认值）",
    sortAscendingOperationText: "点击升序",
    sortCancelOperationText: "点击取消排序",
    sortDescendingOperationText: "点击降序",
    clearFilterResultButtonText: "清空筛选",
    columnConfigButtonText: "列配置",
    columnConfigTitleText: "表格列配置",
    columnConfigDescriptionText: "请选择需要在表格中显示的数据列",
    confirmText: "确认",
    cancelText: "取消",
    resetText: "重置",
    selectAllText: "全选",
    searchResultText: "搜索“{result}”，找到 {count} 条结果"
  },
  select: {
    empty: "暂无数据",
    loadingText: "加载中",
    placeholder: "请选择"
  },
  tree: {
    empty: "暂无数据"
  },
  treeSelect: {
    empty: "暂无数据",
    loadingText: "加载中",
    placeholder: "请选择"
  },
  datePicker: {
    dayjsLocale: "zh-cn",
    placeholder: {
      date: "请选择日期",
      month: "请选择月份",
      year: "请选择年份",
      quarter: "请选择季度",
      week: "请选择周"
    },
    weekdays: ["一", "二", "三", "四", "五", "六", "日"],
    months: ["1 月", "2 月", "3 月", "4 月", "5 月", "6 月", "7 月", "8 月", "9 月", "10 月", "11 月", "12 月"],
    quarters: ["一季度", "二季度", "三季度", "四季度"],
    rangeSeparator: " - ",
    direction: "ltr",
    format: "YYYY-MM-DD",
    dayAriaLabel: "日",
    weekAbbreviation: "周",
    yearAriaLabel: "年",
    monthAriaLabel: "月",
    confirm: "确定",
    selectTime: "选择时间",
    selectDate: "选择日期",
    nextYear: "下一年",
    preYear: "上一年",
    nextMonth: "下个月",
    preMonth: "上个月",
    preDecade: "上个十年",
    nextDecade: "下个十年",
    now: "当前"
  },
  upload: {
    sizeLimitMessage: "文件大小不能超过 {sizeLimit}",
    cancelUploadText: "取消上传",
    triggerUploadText: {
      fileInput: "选择文件",
      image: "点击上传图片",
      normal: "点击上传",
      reupload: "重新选择",
      continueUpload: "继续选择",
      "delete": "删除",
      uploading: "上传中"
    },
    dragger: {
      dragDropText: "释放鼠标",
      draggingText: "拖拽到此区域",
      clickAndDragText: "点击上方“选择文件”或将文件拖拽到此区域"
    },
    file: {
      fileNameText: "文件名",
      fileSizeText: "文件大小",
      fileStatusText: "状态",
      fileOperationText: "操作",
      fileOperationDateText: "上传日期"
    },
    progress: {
      uploadingText: "上传中",
      waitingText: "待上传",
      failText: "上传失败",
      successText: "上传成功"
    }
  },
  form: {
    errorMessage: {
      date: "请输入正确的${name}",
      url: "请输入正确的${name}",
      required: "${name}必填",
      whitespace: "${name}不能为空",
      max: "${name}字符长度不能超过 ${validate} 个字符，一个中文等于两个字符",
      min: "${name}字符长度不能少于 ${validate} 个字符，一个中文等于两个字符",
      len: "${name}字符长度必须是 ${validate}",
      "enum": "${name}只能是${validate}等",
      idcard: "请输入正确的${name}",
      telnumber: "请输入正确的${name}",
      pattern: "请输入正确的${name}",
      validator: "${name}不符合要求",
      "boolean": "${name}数据类型必须是布尔类型",
      number: "${name}必须是数字"
    },
    colonText: "："
  },
  input: {
    placeholder: "请输入"
  },
  list: {
    loadingText: "正在加载中，请稍等",
    loadingMoreText: "点击加载更多"
  },
  alert: {
    expandText: "展开更多",
    collapseText: "收起"
  },
  anchor: {
    copySuccessText: "链接复制成功",
    copyText: "复制链接"
  },
  colorPicker: {
    swatchColorTitle: "系统预设颜色",
    recentColorTitle: "最近使用颜色",
    clearConfirmText: "确定清空最近使用的颜色吗？",
    singleColor: "单色",
    gradientColor: "渐变"
  },
  guide: {
    finishButtonProps: {
      content: "完成",
      theme: "primary"
    },
    nextButtonProps: {
      content: "下一步",
      theme: "primary"
    },
    skipButtonProps: {
      content: "跳过",
      theme: "default"
    },
    prevButtonProps: {
      content: "上一步",
      theme: "default"
    }
  },
  image: {
    errorText: "图片无法显示",
    loadingText: "图片加载中"
  },
  imageViewer: {
    errorText: "图片加载失败，可尝试重新加载",
    mirrorTipText: "镜像",
    rotateTipText: "旋转",
    originalSizeTipText: "原始大小"
  },
  typography: {
    expandText: "展开",
    collapseText: "收起",
    copiedText: "复制成功"
  },
  rate: {
    rateText: ["极差", "失望", "一般", "满意", "惊喜"]
  },
  empty: {
    titleText: {
      maintenance: "建设中",
      success: "成功",
      fail: "失败",
      empty: "暂无数据",
      networkError: "网络错误"
    }
  },
  descriptions: {
    colonText: "："
  },
  chat: {
    placeholder: "请输入消息...",
    stopBtnText: "中止",
    refreshTipText: "重新生成",
    copyTipText: "复制",
    likeTipText: "点赞",
    dislikeTipText: "点踩",
    copyCodeBtnText: "复制代码",
    copyCodeSuccessText: "已复制",
    clearHistoryBtnText: "清空历史记录",
    copyTextSuccess: "已成功复制到剪贴板",
    copyTextFail: "复制到剪贴板失败",
    confirmClearHistory: "确定要清空所有的消息吗？",
    loadingText: "思考中...",
    loadingEndText: "已深度思考",
    uploadImageText: "上传图片",
    uploadAttachmentText: "上传附件"
  },
  qrcode: {
    expiredText: "二维码过期",
    refreshText: "点击刷新",
    scannedText: "已扫描"
  }
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var defaultConfig = {
  classPrefix: "t",
  animation: {
    include: ["ripple", "expand", "fade"],
    exclude: []
  },
  attach: null,
  calendar: {
    firstDayOfWeek: 1,
    fillWithZero: true,
    controllerConfig: void 0
  },
  icon: {},
  input: {
    autocomplete: ""
  },
  dialog: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    confirmBtnTheme: {
      "default": "primary",
      info: "primary",
      warning: "primary",
      danger: "primary",
      success: "primary"
    }
  },
  message: {},
  popconfirm: {
    confirmBtnTheme: {
      "default": "primary",
      warning: "primary",
      danger: "primary"
    }
  },
  table: {
    expandIcon: void 0,
    sortIcon: void 0,
    filterIcon: void 0,
    treeExpandAndFoldIcon: void 0,
    hideSortTips: false,
    size: "medium"
  },
  select: {
    clearIcon: void 0,
    filterable: false
  },
  drawer: {
    closeOnEscKeydown: true,
    closeOnOverlayClick: true,
    size: "small"
  },
  tree: {
    folderIcon: void 0
  },
  datePicker: {
    firstDayOfWeek: 1
  },
  steps: {
    checkIcon: void 0,
    errorIcon: void 0
  },
  tag: {
    closeIcon: void 0
  },
  form: {
    requiredMark: void 0
  },
  empty: {
    titleText: {
      maintenance: void 0,
      success: void 0,
      fail: void 0,
      empty: void 0,
      networkError: void 0
    },
    image: {
      maintenance: void 0,
      success: void 0,
      fail: void 0,
      empty: void 0,
      networkError: void 0
    }
  }
};
function ownKeys$Q(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$Q(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$Q(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$Q(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var EAnimationType = /* @__PURE__ */ function(EAnimationType2) {
  EAnimationType2["ripple"] = "ripple";
  EAnimationType2["expand"] = "expand";
  EAnimationType2["fade"] = "fade";
  return EAnimationType2;
}(EAnimationType || {});
var defaultClassPrefix = "t";
var defaultAnimation = {
  include: [
    "ripple",
    "expand",
    "fade"
    /* fade */
  ],
  exclude: []
};
var defaultGlobalConfig = _objectSpread$Q({
  animation: defaultAnimation,
  classPrefix: defaultClassPrefix
}, merge$1({}, zhCN, defaultConfig));
var defaultContext = {
  globalConfig: defaultGlobalConfig
};
var ConfigContext$2 = /* @__PURE__ */ reactExports.createContext(defaultContext);
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var useConfig$2 = function() {
  return reactExports.useContext(ConfigContext$2).globalConfig;
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useDefaultProps(originalProps, defaultProps) {
  return reactExports.useMemo(function() {
    var props = Object.assign({}, originalProps);
    Object.keys(defaultProps).forEach(function(key) {
      if (props[key] === void 0) {
        props[key] = defaultProps[key];
      }
    });
    return props;
  }, [originalProps, defaultProps]);
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$c = ["width", "className", "style", "children"];
function ownKeys$P(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$P(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$P(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$P(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Aside = function Aside2(props) {
  var _useDefaultProps = useDefaultProps(props, {
    width: 232
  }), width = _useDefaultProps.width, className = _useDefaultProps.className, style = _useDefaultProps.style, children = _useDefaultProps.children, otherAsideProps = _objectWithoutProperties$2(_useDefaultProps, _excluded$c);
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var asideClassNames = classNames$2("".concat(classPrefix, "-layout__sider"), className);
  var asideWidth = isNaN(Number(width)) ? width : "".concat(width, "px");
  var asideStyle = _objectSpread$P({
    width: asideWidth,
    maxWidth: asideWidth,
    minWidth: asideWidth,
    flex: "0 0 ".concat(asideWidth)
  }, style);
  return /* @__PURE__ */ React.createElement("aside", _objectSpread$P({
    className: asideClassNames,
    style: asideStyle
  }, otherAsideProps), children);
};
Aside.displayName = "Aside";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var logSet = /* @__PURE__ */ new Set();
var log = {
  warn: function warn(componentName, message) {
    console.warn("TDesign ".concat(componentName, " Warn: ").concat(message));
  },
  warnOnce: function warnOnce(componentName, message) {
    var msgContent = "TDesign ".concat(componentName, " Warn: ").concat(message);
    if (logSet.has(msgContent)) return;
    logSet.add(msgContent);
    console.warn(msgContent);
  },
  error: function error(componentName, message) {
    console.error("TDesign ".concat(componentName, " Error: ").concat(message));
  },
  errorOnce: function errorOnce(componentName, message) {
    var msgContent = "TDesign ".concat(componentName, " Error: ").concat(message);
    if (logSet.has(msgContent)) return;
    logSet.add(msgContent);
    console.error(msgContent);
  },
  info: function info(componentName, message) {
    console.info("TDesign ".concat(componentName, " Info: ").concat(message));
  }
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$O(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$O(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$O(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$O(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function parseTNode(renderNode, renderParams, defaultNode) {
  var node = null;
  if (typeof renderNode === "function") {
    node = renderNode(renderParams);
  } else if (renderNode === true) {
    node = defaultNode;
  } else if (renderNode !== null) {
    node = renderNode !== null && renderNode !== void 0 ? renderNode : defaultNode;
  }
  return node;
}
function parseContentTNode(tnode, props) {
  if (isFunction(tnode)) return tnode(props);
  if (!tnode || ["string", "number", "boolean"].includes(_typeof$2(tnode))) return tnode;
  try {
    return /* @__PURE__ */ React.cloneElement(tnode, _objectSpread$O({}, props));
  } catch (e2) {
    log.warn("parseContentTNode", "".concat(tnode, " is not a valid ReactNode"));
    return null;
  }
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$b = ["className", "style", "children", "height"], _excluded2$1 = ["className", "style", "children", "height"], _excluded3 = ["className", "style", "children", "content"], _excluded4 = ["direction", "className", "style", "children"];
function ownKeys$N(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$N(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$N(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$N(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Header = function Header2(props) {
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var className = props.className, _props$style = props.style, style = _props$style === void 0 ? {} : _props$style, children = props.children, height = props.height, others = _objectWithoutProperties$2(props, _excluded$b);
  var renderHeight = isNaN(Number(height)) ? height : "".concat(height, "px");
  var headerClassNames = classNames$2("".concat(classPrefix, "-layout__header"), className);
  return /* @__PURE__ */ React.createElement("header", _objectSpread$N({
    className: headerClassNames,
    style: _objectSpread$N({
      height: renderHeight
    }, style)
  }, others), parseTNode(children));
};
var Footer = function Footer2(props) {
  var _useConfig2 = useConfig$2(), classPrefix = _useConfig2.classPrefix;
  var className = props.className, _props$style2 = props.style, style = _props$style2 === void 0 ? {} : _props$style2, children = props.children, height = props.height, others = _objectWithoutProperties$2(props, _excluded2$1);
  var renderHeight = isNaN(Number(height)) ? height : "".concat(height, "px");
  var footerClassNames = classNames$2("".concat(classPrefix, "-layout__footer"), className);
  return /* @__PURE__ */ React.createElement("footer", _objectSpread$N({
    className: footerClassNames,
    style: _objectSpread$N({
      height: renderHeight
    }, style)
  }, others), parseTNode(children));
};
var Content = function Content2(props) {
  var _useConfig3 = useConfig$2(), classPrefix = _useConfig3.classPrefix;
  var className = props.className, style = props.style, children = props.children, content = props.content, others = _objectWithoutProperties$2(props, _excluded3);
  var contentClassNames = classNames$2("".concat(classPrefix, "-layout__content"), className);
  return /* @__PURE__ */ React.createElement("main", _objectSpread$N({
    className: contentClassNames,
    style
  }, others), parseTNode(content) || parseTNode(children));
};
var Layout$1 = function Layout(props) {
  var direction = props.direction, className = props.className, style = props.style, children = props.children, otherLayoutProps = _objectWithoutProperties$2(props, _excluded4);
  var shouldAsides = reactExports.useMemo(function() {
    var asides = [];
    React.Children.forEach(children, function(child) {
      if (!child || _typeof$2(child) !== "object") {
        return;
      }
      if (child.type === Aside) {
        asides.push(child);
      }
    });
    return !!asides.length;
  }, [children]);
  var _useConfig4 = useConfig$2(), classPrefix = _useConfig4.classPrefix;
  var layoutClassNames = classNames$2("".concat(classPrefix, "-layout"), _defineProperty$2(_defineProperty$2({}, "".concat(classPrefix, "-layout--with-sider"), shouldAsides), "".concat(classPrefix, "-layout__direction-").concat(direction), direction), className);
  return /* @__PURE__ */ React.createElement("div", _objectSpread$N({
    className: layoutClassNames,
    style
  }, otherLayoutProps), parseTNode(children));
};
Layout$1.Header = Header;
Layout$1.Content = Content;
Layout$1.Footer = Footer;
Layout$1.Aside = Aside;
Header.displayName = "Header";
Content.displayName = "Content";
Footer.displayName = "Footer";
Layout$1.displayName = "Layout";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Layout2 = Layout$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function _arrayLikeToArray(r2, a) {
  (null == a || a > r2.length) && (a = r2.length);
  for (var e2 = 0, n2 = Array(a); e2 < a; e2++) n2[e2] = r2[e2];
  return n2;
}
function _unsupportedIterableToArray(r2, a) {
  if (r2) {
    if ("string" == typeof r2) return _arrayLikeToArray(r2, a);
    var t2 = {}.toString.call(r2).slice(8, -1);
    return "Object" === t2 && r2.constructor && (t2 = r2.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r2) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r2, a) : void 0;
  }
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function _arrayWithHoles(r2) {
  if (Array.isArray(r2)) return r2;
}
function _iterableToArrayLimit(r2, l2) {
  var t2 = null == r2 ? null : "undefined" != typeof Symbol && r2[Symbol.iterator] || r2["@@iterator"];
  if (null != t2) {
    var e2, n2, i, u2, a = [], f2 = true, o = false;
    try {
      if (i = (t2 = t2.call(r2)).next, 0 === l2) {
        if (Object(t2) !== t2) return;
        f2 = false;
      } else for (; !(f2 = (e2 = i.call(t2)).done) && (a.push(e2.value), a.length !== l2); f2 = true) ;
    } catch (r3) {
      o = true, n2 = r3;
    } finally {
      try {
        if (!f2 && null != t2["return"] && (u2 = t2["return"](), Object(u2) !== u2)) return;
      } finally {
        if (o) throw n2;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r2, e2) {
  return _arrayWithHoles(r2) || _iterableToArrayLimit(r2, e2) || _unsupportedIterableToArray(r2, e2) || _nonIterableRest();
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var trim = function trim2(str) {
  return (str || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
};
function hasClass$1(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(" ") !== -1) throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return " ".concat(el.className, " ").indexOf(" ".concat(cls, " ")) > -1;
}
var addClass$1 = function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || "").split(" ");
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass$1(el, clsName)) {
      curClass += " ".concat(clsName);
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};
var removeClass$2 = function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(" ");
  var curClass = " ".concat(el.className, " ");
  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;
    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass$1(el, clsName)) {
      curClass = curClass.replace(" ".concat(clsName, " "), " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};
var getCssVarsValue = function getCssVarsValue2(name, element2) {
  if (!canUseDocument) return;
  var el = element2 || document.documentElement;
  return getComputedStyle(el).getPropertyValue(name);
};
var canUseDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function getWindowSize() {
  if (canUseDocument) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  return {
    width: 0,
    height: 0
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var useIsomorphicLayoutEffect = canUseDocument ? reactExports.useLayoutEffect : reactExports.useEffect;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function getAttach(attach, triggerNode) {
  if (!canUseDocument) return null;
  var el;
  if (typeof attach === "string") {
    el = document.querySelector(attach);
  }
  if (typeof attach === "function") {
    el = attach(triggerNode);
  }
  if (_typeof$2(attach) === "object" && attach instanceof window.HTMLElement) {
    el = attach;
  }
  if (el && el.nodeType === 1) return el;
  return document.body;
}
var Portal = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var attach = props.attach, children = props.children, triggerNode = props.triggerNode;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var container = reactExports.useMemo(function() {
    if (!canUseDocument) return null;
    var el = document.createElement("div");
    el.className = "".concat(classPrefix, "-portal-wrapper");
    return el;
  }, [classPrefix]);
  useIsomorphicLayoutEffect(function() {
    var _parentElement$append;
    var parentElement = getAttach(attach, triggerNode);
    parentElement === null || parentElement === void 0 || (_parentElement$append = parentElement.appendChild) === null || _parentElement$append === void 0 || _parentElement$append.call(parentElement, container);
    return function() {
      var _parentElement$remove;
      parentElement === null || parentElement === void 0 || (_parentElement$remove = parentElement.removeChild) === null || _parentElement$remove === void 0 || _parentElement$remove.call(parentElement, container);
    };
  }, [container, attach, triggerNode]);
  reactExports.useImperativeHandle(ref, function() {
    return container;
  });
  return canUseDocument ? /* @__PURE__ */ reactDomExports.createPortal(children, container) : null;
});
Portal.displayName = "Portal";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function setStyle(el, styles) {
  var keys2 = Object.keys(styles);
  keys2.forEach(function(key) {
    el.style[key] = styles[key];
  });
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function _arrayWithoutHoles(r2) {
  if (Array.isArray(r2)) return _arrayLikeToArray(r2);
}
function _iterableToArray(r2) {
  if ("undefined" != typeof Symbol && null != r2[Symbol.iterator] || null != r2["@@iterator"]) return Array.from(r2);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r2) {
  return _arrayWithoutHoles(r2) || _iterableToArray(r2) || _unsupportedIterableToArray(r2) || _nonIterableSpread();
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function getIEVersion() {
  if (typeof navigator === "undefined" || !navigator) return Number.MAX_SAFE_INTEGER;
  var _navigator = navigator, userAgent = _navigator.userAgent;
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
  var isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    var match = userAgent.match(reIE);
    if (!match) return -1;
    var fIEVersion = parseFloat(match[1]);
    return fIEVersion < 7 ? 6 : fIEVersion;
  }
  if (isIE11) {
    return 11;
  }
  return Number.MAX_SAFE_INTEGER;
}
function getCharacterLength(str, maxCharacter) {
  var hasMaxCharacter = isNumber(maxCharacter);
  if (!str || str.length === 0) {
    if (hasMaxCharacter) {
      return {
        length: 0,
        characters: str
      };
    }
    return 0;
  }
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var currentStringLength = 0;
    if (str.charCodeAt(i) > 127) {
      currentStringLength = 2;
    } else {
      currentStringLength = 1;
    }
    if (hasMaxCharacter && len + currentStringLength > maxCharacter) {
      return {
        length: len,
        characters: str.slice(0, i)
      };
    }
    len += currentStringLength;
  }
  if (hasMaxCharacter) {
    return {
      length: len,
      characters: str
    };
  }
  return len;
}
function getUnicodeLength(str) {
  return _toConsumableArray(str !== null && str !== void 0 ? str : "").length;
}
function limitUnicodeMaxLength(str, maxLength, oldStr) {
  if (_toConsumableArray("").slice().length === maxLength) return "";
  return _toConsumableArray(str !== null && str !== void 0 ? str : "").slice(0, maxLength).join("");
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useDomRefCallback() {
  var _useState = reactExports.useState(), _useState2 = _slicedToArray(_useState, 2), refCurrent = _useState2[0], setRefCurrent = _useState2[1];
  reactExports.useCallback(function(dom) {
    if (dom) setRefCurrent(dom);
  }, []);
  return [refCurrent, setRefCurrent];
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$M(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$M(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$M(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$M(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function circleAdapter(circleElem) {
  var _window, _window$getComputedSt2, _window2;
  var basicStyle = {};
  if (!circleElem || typeof window === "undefined") {
    return;
  }
  var _window$getComputedSt = (_window = window) === null || _window === void 0 || (_window$getComputedSt2 = _window.getComputedStyle) === null || _window$getComputedSt2 === void 0 ? void 0 : _window$getComputedSt2.call(_window, circleElem), color = _window$getComputedSt.color, fontSize = _window$getComputedSt.fontSize;
  var ua = (_window2 = window) === null || _window2 === void 0 || (_window2 = _window2.navigator) === null || _window2 === void 0 ? void 0 : _window2.userAgent;
  var isSafari = /Safari/.test(ua) && !/Chrome/.test(ua);
  var isIosWechat = /(?=.*iPhone)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
  var isIpadWechat = /(?=.*iPad)[?=.*MicroMessenger]/.test(ua) && !/Chrome/.test(ua);
  if (isSafari || isIosWechat || isIpadWechat) {
    basicStyle = {
      transformOrigin: "0px 0px",
      transform: "scale(".concat(parseInt(fontSize, 10) / 12, ")")
    };
  }
  if (color && getIEVersion() > 11) {
    var matched = color.match(/[\d.]+/g);
    var endColor = matched ? "rgba(".concat(matched[0], ", ").concat(matched[1], ", ").concat(matched[2], ", 0)") : "";
    setStyle(circleElem, _objectSpread$M(_objectSpread$M({}, basicStyle), {}, {
      background: "conic-gradient(from 90deg at 50% 50%,".concat(endColor, " 0deg, ").concat(color, " 360deg)")
    }));
  } else {
    setStyle(circleElem, _objectSpread$M(_objectSpread$M({}, basicStyle), {}, {
      background: ""
    }));
  }
}
var GradientLoading = function GradientLoading2() {
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var _useDomRefCallback = useDomRefCallback(), _useDomRefCallback2 = _slicedToArray(_useDomRefCallback, 2), conicRef = _useDomRefCallback2[0], setConicRef = _useDomRefCallback2[1];
  var gradientClass = "".concat(classPrefix, "-loading__gradient");
  reactExports.useEffect(function() {
    var el = conicRef;
    circleAdapter(el);
  }, [conicRef]);
  return /* @__PURE__ */ React.createElement("svg", {
    className: classNames$2(gradientClass, "".concat(classPrefix, "-icon-loading")),
    viewBox: "0 0 12 12",
    version: "1.1",
    width: "1em",
    height: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("foreignObject", {
    x: "0",
    y: "0",
    width: "12",
    height: "12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "".concat(gradientClass, "-conic"),
    ref: setConicRef
  })));
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var loadingDefaultProps = {
  delay: 0,
  fullscreen: false,
  indicator: true,
  inheritColor: false,
  loading: true,
  preventScrollThrough: true,
  showOverlay: true,
  size: "medium"
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$L(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$L(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$L(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$L(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Loading$1 = function Loading(props) {
  var _useDefaultProps = useDefaultProps(props, loadingDefaultProps), attach = _useDefaultProps.attach, indicator = _useDefaultProps.indicator, text = _useDefaultProps.text, loading = _useDefaultProps.loading, size = _useDefaultProps.size, delay = _useDefaultProps.delay, fullscreen = _useDefaultProps.fullscreen, preventScrollThrough = _useDefaultProps.preventScrollThrough, showOverlay = _useDefaultProps.showOverlay, content = _useDefaultProps.content, children = _useDefaultProps.children, inheritColor = _useDefaultProps.inheritColor, zIndex = _useDefaultProps.zIndex, className = _useDefaultProps.className, style = _useDefaultProps.style;
  var _useState = reactExports.useState(function() {
    return delay ? false : loading;
  }), _useState2 = _slicedToArray(_useState, 2), showLoading = _useState2[0], setShowLoading = _useState2[1];
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var name = "".concat(classPrefix, "-loading");
  var centerClass = "".concat(classPrefix, "-loading--center");
  var inheritColorClass = "".concat(classPrefix, "-loading--inherit-color");
  var fullClass = "".concat(classPrefix, "-loading--full");
  var fullscreenClass = "".concat(classPrefix, "-loading__fullscreen");
  var lockClass = "".concat(classPrefix, "-loading--lock");
  var overlayClass = "".concat(classPrefix, "-loading__overlay");
  var relativeClass = "".concat(classPrefix, "-loading__parent");
  var textClass = "".concat(classPrefix, "-loading__text");
  reactExports.useEffect(function() {
    var timer;
    if (delay && loading) {
      timer = setTimeout(function() {
        setShowLoading(loading);
      }, delay);
    } else {
      setShowLoading(loading);
    }
    return function() {
      clearTimeout(timer);
    };
  }, [delay, loading]);
  var calcStyles = reactExports.useMemo(function() {
    var styles = {};
    if (zIndex !== void 0) {
      styles.zIndex = zIndex;
    }
    if (!["small", "medium", "large"].includes(size)) {
      styles.fontSize = size;
    }
    return styles;
  }, [size, zIndex]);
  var sizeMap = {
    large: "".concat(classPrefix, "-size-l"),
    small: "".concat(classPrefix, "-size-s"),
    medium: "".concat(classPrefix, "-size-m")
  };
  var baseClasses = classNames$2(centerClass, sizeMap[size], _defineProperty$2({}, inheritColorClass, inheritColor), className);
  reactExports.useEffect(function() {
    if (preventScrollThrough && fullscreen && canUseDocument && loading) {
      addClass$1(document.body, lockClass);
    }
    return function() {
      removeClass$2(document.body, lockClass);
    };
  }, [loading, preventScrollThrough, fullscreen, lockClass]);
  var commonContent = function commonContent2() {
    var renderIndicator = /* @__PURE__ */ React.createElement(GradientLoading, null);
    if (indicator && typeof indicator !== "boolean") {
      renderIndicator = indicator;
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, indicator ? renderIndicator : null, text ? /* @__PURE__ */ React.createElement("div", {
      className: textClass
    }, text) : null);
  };
  if (fullscreen) {
    return loading ? /* @__PURE__ */ React.createElement("div", {
      className: classNames$2(name, fullscreenClass, centerClass, overlayClass),
      style: _objectSpread$L(_objectSpread$L({}, calcStyles), style)
    }, /* @__PURE__ */ React.createElement("div", {
      className: baseClasses
    }, commonContent())) : null;
  }
  if (content || children) {
    return /* @__PURE__ */ React.createElement("div", {
      className: relativeClass,
      style
    }, content || children, showLoading ? /* @__PURE__ */ React.createElement("div", {
      className: classNames$2(name, baseClasses, fullClass, _defineProperty$2({}, overlayClass, showOverlay)),
      style: calcStyles
    }, commonContent()) : null);
  }
  if (attach) {
    return /* @__PURE__ */ React.createElement(Portal, {
      attach
    }, loading ? /* @__PURE__ */ React.createElement("div", {
      className: classNames$2(name, baseClasses, fullClass, _defineProperty$2({}, overlayClass, showOverlay)),
      style: _objectSpread$L(_objectSpread$L({}, calcStyles), style)
    }, commonContent()) : null);
  }
  return loading ? /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(name, baseClasses),
    style: _objectSpread$L(_objectSpread$L({}, calcStyles), style)
  }, commonContent()) : null;
};
Loading$1.displayName = "Loading";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function asyncGeneratorStep(n2, t2, e2, r2, o, a, c2) {
  try {
    var i = n2[a](c2), u2 = i.value;
  } catch (n3) {
    return void e2(n3);
  }
  i.done ? t2(u2) : Promise.resolve(u2).then(r2, o);
}
function _asyncToGenerator(n2) {
  return function() {
    var t2 = this, e2 = arguments;
    return new Promise(function(r2, o) {
      var a = n2.apply(t2, e2);
      function _next(n3) {
        asyncGeneratorStep(a, r2, o, _next, _throw, "next", n3);
      }
      function _throw(n3) {
        asyncGeneratorStep(a, r2, o, _next, _throw, "throw", n3);
      }
      _next(void 0);
    });
  };
}
var regeneratorRuntime$2 = { exports: {} };
var _typeof$1 = { exports: {} };
(function(module2) {
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return module2.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports, _typeof2(o);
  }
  module2.exports = _typeof2, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
})(_typeof$1);
(function(module2) {
  var _typeof2 = _typeof$1.exports["default"];
  function _regeneratorRuntime() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
    module2.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
      return e2;
    }, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
    var t2, e2 = {}, r2 = Object.prototype, n2 = r2.hasOwnProperty, o = Object.defineProperty || function(t3, e3, r3) {
      t3[e3] = r3.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c2 = i.asyncIterator || "@@asyncIterator", u2 = i.toStringTag || "@@toStringTag";
    function define(t3, e3, r3) {
      return Object.defineProperty(t3, e3, {
        value: r3,
        enumerable: true,
        configurable: true,
        writable: true
      }), t3[e3];
    }
    try {
      define({}, "");
    } catch (t3) {
      define = function define2(t4, e3, r3) {
        return t4[e3] = r3;
      };
    }
    function wrap(t3, e3, r3, n3) {
      var i2 = e3 && e3.prototype instanceof Generator ? e3 : Generator, a2 = Object.create(i2.prototype), c3 = new Context(n3 || []);
      return o(a2, "_invoke", {
        value: makeInvokeMethod(t3, r3, c3)
      }), a2;
    }
    function tryCatch(t3, e3, r3) {
      try {
        return {
          type: "normal",
          arg: t3.call(e3, r3)
        };
      } catch (t4) {
        return {
          type: "throw",
          arg: t4
        };
      }
    }
    e2.wrap = wrap;
    var h2 = "suspendedStart", l2 = "suspendedYield", f2 = "executing", s = "completed", y2 = {};
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    var p2 = {};
    define(p2, a, function() {
      return this;
    });
    var d2 = Object.getPrototypeOf, v2 = d2 && d2(d2(values([])));
    v2 && v2 !== r2 && n2.call(v2, a) && (p2 = v2);
    var g2 = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p2);
    function defineIteratorMethods(t3) {
      ["next", "throw", "return"].forEach(function(e3) {
        define(t3, e3, function(t4) {
          return this._invoke(e3, t4);
        });
      });
    }
    function AsyncIterator(t3, e3) {
      function invoke(r4, o2, i2, a2) {
        var c3 = tryCatch(t3[r4], t3, o2);
        if ("throw" !== c3.type) {
          var u3 = c3.arg, h3 = u3.value;
          return h3 && "object" == _typeof2(h3) && n2.call(h3, "__await") ? e3.resolve(h3.__await).then(function(t4) {
            invoke("next", t4, i2, a2);
          }, function(t4) {
            invoke("throw", t4, i2, a2);
          }) : e3.resolve(h3).then(function(t4) {
            u3.value = t4, i2(u3);
          }, function(t4) {
            return invoke("throw", t4, i2, a2);
          });
        }
        a2(c3.arg);
      }
      var r3;
      o(this, "_invoke", {
        value: function value(t4, n3) {
          function callInvokeWithMethodAndArg() {
            return new e3(function(e4, r4) {
              invoke(t4, n3, e4, r4);
            });
          }
          return r3 = r3 ? r3.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e3, r3, n3) {
      var o2 = h2;
      return function(i2, a2) {
        if (o2 === f2) throw Error("Generator is already running");
        if (o2 === s) {
          if ("throw" === i2) throw a2;
          return {
            value: t2,
            done: true
          };
        }
        for (n3.method = i2, n3.arg = a2; ; ) {
          var c3 = n3.delegate;
          if (c3) {
            var u3 = maybeInvokeDelegate(c3, n3);
            if (u3) {
              if (u3 === y2) continue;
              return u3;
            }
          }
          if ("next" === n3.method) n3.sent = n3._sent = n3.arg;
          else if ("throw" === n3.method) {
            if (o2 === h2) throw o2 = s, n3.arg;
            n3.dispatchException(n3.arg);
          } else "return" === n3.method && n3.abrupt("return", n3.arg);
          o2 = f2;
          var p3 = tryCatch(e3, r3, n3);
          if ("normal" === p3.type) {
            if (o2 = n3.done ? s : l2, p3.arg === y2) continue;
            return {
              value: p3.arg,
              done: n3.done
            };
          }
          "throw" === p3.type && (o2 = s, n3.method = "throw", n3.arg = p3.arg);
        }
      };
    }
    function maybeInvokeDelegate(e3, r3) {
      var n3 = r3.method, o2 = e3.iterator[n3];
      if (o2 === t2) return r3.delegate = null, "throw" === n3 && e3.iterator["return"] && (r3.method = "return", r3.arg = t2, maybeInvokeDelegate(e3, r3), "throw" === r3.method) || "return" !== n3 && (r3.method = "throw", r3.arg = new TypeError("The iterator does not provide a '" + n3 + "' method")), y2;
      var i2 = tryCatch(o2, e3.iterator, r3.arg);
      if ("throw" === i2.type) return r3.method = "throw", r3.arg = i2.arg, r3.delegate = null, y2;
      var a2 = i2.arg;
      return a2 ? a2.done ? (r3[e3.resultName] = a2.value, r3.next = e3.nextLoc, "return" !== r3.method && (r3.method = "next", r3.arg = t2), r3.delegate = null, y2) : a2 : (r3.method = "throw", r3.arg = new TypeError("iterator result is not an object"), r3.delegate = null, y2);
    }
    function pushTryEntry(t3) {
      var e3 = {
        tryLoc: t3[0]
      };
      1 in t3 && (e3.catchLoc = t3[1]), 2 in t3 && (e3.finallyLoc = t3[2], e3.afterLoc = t3[3]), this.tryEntries.push(e3);
    }
    function resetTryEntry(t3) {
      var e3 = t3.completion || {};
      e3.type = "normal", delete e3.arg, t3.completion = e3;
    }
    function Context(t3) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t3.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(e3) {
      if (e3 || "" === e3) {
        var r3 = e3[a];
        if (r3) return r3.call(e3);
        if ("function" == typeof e3.next) return e3;
        if (!isNaN(e3.length)) {
          var o2 = -1, i2 = function next() {
            for (; ++o2 < e3.length; ) if (n2.call(e3, o2)) return next.value = e3[o2], next.done = false, next;
            return next.value = t2, next.done = true, next;
          };
          return i2.next = i2;
        }
      }
      throw new TypeError(_typeof2(e3) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g2, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u2, "GeneratorFunction"), e2.isGeneratorFunction = function(t3) {
      var e3 = "function" == typeof t3 && t3.constructor;
      return !!e3 && (e3 === GeneratorFunction || "GeneratorFunction" === (e3.displayName || e3.name));
    }, e2.mark = function(t3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t3, GeneratorFunctionPrototype) : (t3.__proto__ = GeneratorFunctionPrototype, define(t3, u2, "GeneratorFunction")), t3.prototype = Object.create(g2), t3;
    }, e2.awrap = function(t3) {
      return {
        __await: t3
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c2, function() {
      return this;
    }), e2.AsyncIterator = AsyncIterator, e2.async = function(t3, r3, n3, o2, i2) {
      void 0 === i2 && (i2 = Promise);
      var a2 = new AsyncIterator(wrap(t3, r3, n3, o2), i2);
      return e2.isGeneratorFunction(r3) ? a2 : a2.next().then(function(t4) {
        return t4.done ? t4.value : a2.next();
      });
    }, defineIteratorMethods(g2), define(g2, u2, "Generator"), define(g2, a, function() {
      return this;
    }), define(g2, "toString", function() {
      return "[object Generator]";
    }), e2.keys = function(t3) {
      var e3 = Object(t3), r3 = [];
      for (var n3 in e3) r3.push(n3);
      return r3.reverse(), function next() {
        for (; r3.length; ) {
          var t4 = r3.pop();
          if (t4 in e3) return next.value = t4, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, e2.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(e3) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t2, this.done = false, this.delegate = null, this.method = "next", this.arg = t2, this.tryEntries.forEach(resetTryEntry), !e3) for (var r3 in this) "t" === r3.charAt(0) && n2.call(this, r3) && !isNaN(+r3.slice(1)) && (this[r3] = t2);
      },
      stop: function stop() {
        this.done = true;
        var t3 = this.tryEntries[0].completion;
        if ("throw" === t3.type) throw t3.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e3) {
        if (this.done) throw e3;
        var r3 = this;
        function handle(n3, o3) {
          return a2.type = "throw", a2.arg = e3, r3.next = n3, o3 && (r3.method = "next", r3.arg = t2), !!o3;
        }
        for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
          var i2 = this.tryEntries[o2], a2 = i2.completion;
          if ("root" === i2.tryLoc) return handle("end");
          if (i2.tryLoc <= this.prev) {
            var c3 = n2.call(i2, "catchLoc"), u3 = n2.call(i2, "finallyLoc");
            if (c3 && u3) {
              if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
              if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
            } else if (c3) {
              if (this.prev < i2.catchLoc) return handle(i2.catchLoc, true);
            } else {
              if (!u3) throw Error("try statement without catch or finally");
              if (this.prev < i2.finallyLoc) return handle(i2.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t3, e3) {
        for (var r3 = this.tryEntries.length - 1; r3 >= 0; --r3) {
          var o2 = this.tryEntries[r3];
          if (o2.tryLoc <= this.prev && n2.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
            var i2 = o2;
            break;
          }
        }
        i2 && ("break" === t3 || "continue" === t3) && i2.tryLoc <= e3 && e3 <= i2.finallyLoc && (i2 = null);
        var a2 = i2 ? i2.completion : {};
        return a2.type = t3, a2.arg = e3, i2 ? (this.method = "next", this.next = i2.finallyLoc, y2) : this.complete(a2);
      },
      complete: function complete(t3, e3) {
        if ("throw" === t3.type) throw t3.arg;
        return "break" === t3.type || "continue" === t3.type ? this.next = t3.arg : "return" === t3.type ? (this.rval = this.arg = t3.arg, this.method = "return", this.next = "end") : "normal" === t3.type && e3 && (this.next = e3), y2;
      },
      finish: function finish(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r3 = this.tryEntries[e3];
          if (r3.finallyLoc === t3) return this.complete(r3.completion, r3.afterLoc), resetTryEntry(r3), y2;
        }
      },
      "catch": function _catch(t3) {
        for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
          var r3 = this.tryEntries[e3];
          if (r3.tryLoc === t3) {
            var n3 = r3.completion;
            if ("throw" === n3.type) {
              var o2 = n3.arg;
              resetTryEntry(r3);
            }
            return o2;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(e3, r3, n3) {
        return this.delegate = {
          iterator: values(e3),
          resultName: r3,
          nextLoc: n3
        }, "next" === this.method && (this.arg = t2), y2;
      }
    }, e2;
  }
  module2.exports = _regeneratorRuntime, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
})(regeneratorRuntime$2);
/* @__PURE__ */ getDefaultExportFromCjs(regeneratorRuntime$2.exports);
var runtime = regeneratorRuntime$2.exports();
var regenerator = runtime;
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof$2(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$K(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r22) {
      return Object.getOwnPropertyDescriptor(e2, r22).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$K(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$K(Object(t2), true).forEach(function(r22) {
      _defineProperty$2(e2, r22, t2[r22]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$K(Object(t2)).forEach(function(r22) {
      Object.defineProperty(e2, r22, Object.getOwnPropertyDescriptor(t2, r22));
    });
  }
  return e2;
}
var fullClone = _objectSpread$K({}, ReactDOM);
var version = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode;
var legacyCreateRoot;
try {
  var mainVersion = Number((version || "").split(".")[0]);
  if (mainVersion >= 18 && mainVersion < 19) {
    legacyCreateRoot = fullClone.createRoot;
  }
  if (false) ;
} catch (e2) {
}
function toggleWarning(skip) {
  var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof$2(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === "object") {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}
var MARK = "__td_react_root__";
function modernRender(node, container) {
  toggleWarning(true);
  var root2 = container[MARK] || legacyCreateRoot(container);
  toggleWarning(false);
  root2.render(node);
  container[MARK] = root2;
}
function legacyRender(node, container) {
  reactRender(node, container);
}
function render$2(node, container) {
  if (legacyCreateRoot) {
    modernRender(node, container);
    return;
  }
  legacyRender === null || legacyRender === void 0 || legacyRender(node, container);
}
function modernUnmount(_x) {
  return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
  _modernUnmount = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee(container) {
    return regenerator.wrap(function(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", Promise.resolve().then(function() {
            var _container$MARK;
            (_container$MARK = container[MARK]) === null || _container$MARK === void 0 || _container$MARK.unmount();
            delete container[MARK];
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _modernUnmount.apply(this, arguments);
}
function legacyUnmount(container) {
  unmountComponentAtNode(container);
}
function unmount(_x2) {
  return _unmount.apply(this, arguments);
}
function _unmount() {
  _unmount = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee2(container) {
    return regenerator.wrap(function(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(legacyCreateRoot !== void 0)) {
            _context2.next = 1;
            break;
          }
          return _context2.abrupt("return", modernUnmount(container));
        case 1:
          legacyUnmount(container);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _unmount.apply(this, arguments);
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$J(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$J(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$J(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$J(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var merge = function merge2(src, config2) {
  return mergeWith(src, config2, function(objValue, srcValue) {
    if (Array.isArray(objValue)) {
      return srcValue;
    }
  });
};
var globalConfig$1 = defaultGlobalConfig;
var getGlobalConfig = function getGlobalConfig2(configInfo) {
  return merge(_objectSpread$J({}, globalConfig$1), configInfo);
};
var setGlobalConfig$1 = function setGlobalConfig(configInfo) {
  globalConfig$1 = configInfo;
};
function ConfigProvider(_ref) {
  var children = _ref.children, globalConfig2 = _ref.globalConfig, notSet = _ref.notSet;
  var defaultData = cloneDeep(defaultGlobalConfig);
  var mergedGlobalConfig = merge(defaultData, globalConfig2);
  reactExports.useEffect(function() {
    if (!notSet) {
      setGlobalConfig$1(mergedGlobalConfig);
    }
  }, [mergedGlobalConfig, notSet]);
  return /* @__PURE__ */ React.createElement(ConfigContext$2.Provider, {
    value: {
      globalConfig: mergedGlobalConfig
    }
  }, children);
}
ConfigProvider.getGlobalConfig = getGlobalConfig;
ConfigProvider.setGlobalConfig = setGlobalConfig$1;
ConfigProvider.displayName = "ConfigProvider";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$I(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$I(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$I(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$I(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var PluginContainer = function PluginContainer2(props) {
  var _props$globalConfig;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, props !== null && props !== void 0 && (_props$globalConfig = props.globalConfig) !== null && _props$globalConfig !== void 0 && _props$globalConfig.isContextEffectPlugin ? /* @__PURE__ */ React.createElement(ConfigProvider, _objectSpread$I({
    notSet: true
  }, props), props === null || props === void 0 ? void 0 : props.children) : props === null || props === void 0 ? void 0 : props.children);
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Loading2 = Loading$1;
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r2 in t2) ({}).hasOwnProperty.call(t2, r2) && (n2[r2] = t2[r2]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}
function _objectWithoutPropertiesLoose$2(r2, e2) {
  if (null == r2) return {};
  var t2 = {};
  for (var n2 in r2) if ({}.hasOwnProperty.call(r2, n2)) {
    if (-1 !== e2.indexOf(n2)) continue;
    t2[n2] = r2[n2];
  }
  return t2;
}
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}
function _inheritsLoose(t2, o) {
  t2.prototype = Object.create(o.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o);
}
function hasClass(element2, className) {
  if (element2.classList) return !!className && element2.classList.contains(className);
  return (" " + (element2.className.baseVal || element2.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass2(element2, className) {
  if (element2.classList) element2.classList.add(className);
  else if (!hasClass(element2, className)) if (typeof element2.className === "string") element2.className = element2.className + " " + className;
  else element2.setAttribute("class", (element2.className && element2.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass$1(element2, className) {
  if (element2.classList) {
    element2.classList.remove(className);
  } else if (typeof element2.className === "string") {
    element2.className = replaceClassName(element2.className, className);
  } else {
    element2.setAttribute("class", replaceClassName(element2.className && element2.className.baseVal || "", className));
  }
}
const config = {
  disabled: false
};
const TransitionGroupContext = React.createContext(null);
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM$1.findDOMNode(this);
          if (node) forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM$1.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM$1.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM$1.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render2() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose$2(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop$1() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop$1,
  onEntering: noop$1,
  onEntered: noop$1,
  onExit: noop$1,
  onExiting: noop$1,
  onExited: noop$1
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var _addClass = function addClass$12(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c2) {
    return addClass2(node, c2);
  });
};
var removeClass2 = function removeClass22(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c2) {
    return removeClass$1(node, c2);
  });
};
var CSSTransition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass22(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node) forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass2(node, baseClassName);
    }
    if (activeClassName) {
      removeClass2(node, activeClassName);
    }
    if (doneClassName) {
      removeClass2(node, doneClassName);
    }
  };
  _proto.render = function render2() {
    var _this$props = this.props;
    _this$props.classNames;
    var props = _objectWithoutPropertiesLoose$2(_this$props, ["classNames"]);
    return /* @__PURE__ */ React.createElement(Transition, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(React.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = {};
var reactIs$2 = { exports: {} };
var reactIs_production_min$1 = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = Symbol.for("react.element"), c$1 = Symbol.for("react.portal"), d$1 = Symbol.for("react.fragment"), e$1 = Symbol.for("react.strict_mode"), f$1 = Symbol.for("react.profiler"), g$1 = Symbol.for("react.provider"), h$1 = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l$1 = Symbol.for("react.forward_ref"), m$1 = Symbol.for("react.suspense"), n$1 = Symbol.for("react.suspense_list"), p$1 = Symbol.for("react.memo"), q$1 = Symbol.for("react.lazy"), t$2 = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v$1(a) {
  if ("object" === typeof a && null !== a) {
    var r2 = a.$$typeof;
    switch (r2) {
      case b$1:
        switch (a = a.type, a) {
          case d$1:
          case f$1:
          case e$1:
          case m$1:
          case n$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k$1:
              case h$1:
              case l$1:
              case q$1:
              case p$1:
              case g$1:
                return a;
              default:
                return r2;
            }
        }
      case c$1:
        return r2;
    }
  }
}
reactIs_production_min$1.ContextConsumer = h$1;
reactIs_production_min$1.ContextProvider = g$1;
reactIs_production_min$1.Element = b$1;
reactIs_production_min$1.ForwardRef = l$1;
reactIs_production_min$1.Fragment = d$1;
reactIs_production_min$1.Lazy = q$1;
reactIs_production_min$1.Memo = p$1;
reactIs_production_min$1.Portal = c$1;
reactIs_production_min$1.Profiler = f$1;
reactIs_production_min$1.StrictMode = e$1;
reactIs_production_min$1.Suspense = m$1;
reactIs_production_min$1.SuspenseList = n$1;
reactIs_production_min$1.isAsyncMode = function() {
  return false;
};
reactIs_production_min$1.isConcurrentMode = function() {
  return false;
};
reactIs_production_min$1.isContextConsumer = function(a) {
  return v$1(a) === h$1;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return v$1(a) === g$1;
};
reactIs_production_min$1.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b$1;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return v$1(a) === l$1;
};
reactIs_production_min$1.isFragment = function(a) {
  return v$1(a) === d$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return v$1(a) === q$1;
};
reactIs_production_min$1.isMemo = function(a) {
  return v$1(a) === p$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return v$1(a) === c$1;
};
reactIs_production_min$1.isProfiler = function(a) {
  return v$1(a) === f$1;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return v$1(a) === e$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return v$1(a) === m$1;
};
reactIs_production_min$1.isSuspenseList = function(a) {
  return v$1(a) === n$1;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d$1 || a === f$1 || a === e$1 || a === m$1 || a === n$1 || a === t$2 || "object" === typeof a && null !== a && (a.$$typeof === q$1 || a.$$typeof === p$1 || a.$$typeof === g$1 || a.$$typeof === h$1 || a.$$typeof === l$1 || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
};
reactIs_production_min$1.typeOf = v$1;
{
  reactIs$2.exports = reactIs_production_min$1;
}
var reactIsExports$1 = reactIs$2.exports;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var REACT_ELEMENT_TYPE_18 = Symbol["for"]("react.element");
var REACT_ELEMENT_TYPE_19 = Symbol["for"]("react.transitional.element");
var REACT_FRAGMENT_TYPE = Symbol["for"]("react.fragment");
function isFragment(object) {
  return object && _typeof$2(object) === "object" && (object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) && object.type === REACT_FRAGMENT_TYPE;
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var supportRef = function supportRef2(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  if (!nodeOrComponent) {
    return false;
  }
  if (isReactElement(nodeOrComponent) && nodeOrComponent.props.propertyIsEnumerable("ref")) {
    return true;
  }
  var type = reactIsExports$1.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;
  if (typeof type === "function" && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render) && type.$$typeof !== reactIsExports$1.ForwardRef) {
    return false;
  }
  if (typeof nodeOrComponent === "function" && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render) && nodeOrComponent.$$typeof !== reactIsExports$1.ForwardRef) {
    return false;
  }
  return true;
};
function getRefDom(domRef) {
  if (domRef.current && _typeof$2(domRef.current) === "object" && "currentElement" in domRef.current) {
    return domRef.current.currentElement;
  }
  return domRef.current;
}
function isReactElement(node) {
  return /* @__PURE__ */ reactExports.isValidElement(node) && !isFragment(node);
}
var getNodeRef = function getNodeRef2(node) {
  if (node && isReactElement(node)) {
    var ele = node;
    return ele.props.propertyIsEnumerable("ref") ? ele.props.ref : ele.ref;
  }
  return null;
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useAnimation() {
  var _useConfig = useConfig$2(), animation = _useConfig.animation;
  var expand = EAnimationType.expand, ripple = EAnimationType.ripple, fade = EAnimationType.fade;
  var keepAnimation = reactExports.useCallback(function(type) {
    var _animation$exclude, _animation$include;
    return animation && !((_animation$exclude = animation.exclude) !== null && _animation$exclude !== void 0 && _animation$exclude.includes(type)) && ((_animation$include = animation.include) === null || _animation$include === void 0 ? void 0 : _animation$include.includes(type));
  }, [animation]);
  return {
    keepExpand: keepAnimation(expand),
    keepRipple: keepAnimation(ripple),
    keepFade: keepAnimation(fade)
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var defaultAttach = "body";
var useAttach = function useAttach2(name, attach) {
  var globalConfig2 = useConfig$2();
  var attachVal = reactExports.useMemo(function() {
    var _globalConfig$attach;
    return attach || (globalConfig2 === null || globalConfig2 === void 0 || (_globalConfig$attach = globalConfig2.attach) === null || _globalConfig$attach === void 0 ? void 0 : _globalConfig$attach[name]) || (globalConfig2 === null || globalConfig2 === void 0 ? void 0 : globalConfig2.attach) || defaultAttach;
  }, [name, attach, globalConfig2 === null || globalConfig2 === void 0 ? void 0 : globalConfig2.attach]);
  return attachVal;
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var noop = function noop2() {
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var useControlled = function useControlled2() {
  var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var valueKey = arguments.length > 1 ? arguments[1] : void 0;
  var onChange = arguments.length > 2 ? arguments[2] : void 0;
  var defaultOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  var controlled = Reflect.has(props, valueKey);
  var value = props[valueKey];
  var defaultValue = defaultOptions["default".concat(upperFirst(valueKey))] || props["default".concat(upperFirst(valueKey))];
  var _useState = reactExports.useState(defaultValue), _useState2 = _slicedToArray(_useState, 2), internalValue = _useState2[0], setInternalValue = _useState2[1];
  if (controlled) return [value, onChange || noop];
  return [internalValue, function(newValue) {
    setInternalValue(newValue);
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    onChange === null || onChange === void 0 || onChange.apply(void 0, [newValue].concat(args));
  }];
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var useLatest = function useLatest2(value) {
  var ref = reactExports.useRef(value);
  ref.current = value;
  return ref;
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var DEFAULT_OPTIONS$1 = {
  debounceTime: 0,
  config: {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  }
};
function useMutationObservable(targetEl, cb) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : DEFAULT_OPTIONS$1;
  var optionsRef = reactExports.useRef(null);
  var signalRef = reactExports.useRef(0);
  var callbackRef = useLatest(cb);
  if (!isEqual$1(options, optionsRef.current)) {
    signalRef.current += 1;
  }
  optionsRef.current = options;
  reactExports.useEffect(function() {
    if (!targetEl || !(targetEl !== null && targetEl !== void 0 && targetEl.nodeType)) return;
    var observer = null;
    try {
      var _optionsRef$current = optionsRef.current, debounceTime = _optionsRef$current.debounceTime, config2 = _optionsRef$current.config;
      var mutationCallback = function mutationCallback2() {
        callbackRef.current.apply(callbackRef, arguments);
      };
      observer = new MutationObserver(debounceTime > 0 ? debounce$1(mutationCallback, debounceTime) : mutationCallback);
      observer.observe(targetEl, config2);
    } catch (e2) {
      console.error(e2);
    }
    return function() {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, [targetEl, signalRef.current]);
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element2) {
  return element2 ? (element2.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element2 = state.elements[name];
    if (!isHTMLElement(element2) || !getNodeName(element2)) {
      return;
    }
    Object.assign(element2.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element2.removeAttribute(name2);
      } else {
        element2.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element2 = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element2) || !getNodeName(element2)) {
        return;
      }
      Object.assign(element2.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element2.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element2.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element2)) {
    scaleX = element2.offsetWidth > 0 ? round(clientRect.width) / element2.offsetWidth || 1 : 1;
    scaleY = element2.offsetHeight > 0 ? round(clientRect.height) / element2.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element2) ? getWindow(element2) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getLayoutRect(element2) {
  var clientRect = getBoundingClientRect(element2);
  var width = element2.offsetWidth;
  var height = element2.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element2.offsetLeft,
    y: element2.offsetTop,
    width,
    height
  };
}
function contains(parent2, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent2.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent2.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function isTableElement(element2) {
  return ["table", "td", "th"].indexOf(getNodeName(element2)) >= 0;
}
function getDocumentElement(element2) {
  return ((isElement(element2) ? element2.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element2.document
  )) || window.document).documentElement;
}
function getParentNode(element2) {
  if (getNodeName(element2) === "html") {
    return element2;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element2.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element2.parentNode || // DOM Element detected
    (isShadowRoot(element2) ? element2.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element2)
  );
}
function getTrueOffsetParent(element2) {
  if (!isHTMLElement(element2) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  return element2.offsetParent;
}
function getContainingBlock(element2) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element2)) {
    var elementCss = getComputedStyle$1(element2);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element2);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element2) {
  var window2 = getWindow(element2);
  var offsetParent = getTrueOffsetParent(element2);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element2) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys2) {
  return keys2.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }, getWindow(popper2)) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element2) {
  return getBoundingClientRect(getDocumentElement(element2)).left + getWindowScroll(element2).scrollLeft;
}
function getViewportRect(element2, strategy) {
  var win = getWindow(element2);
  var html = getDocumentElement(element2);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element2),
    y: y2
  };
}
function getDocumentRect(element2) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element2);
  var winScroll = getWindowScroll(element2);
  var body = (_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element2);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function isScrollParent(element2) {
  var _getComputedStyle = getComputedStyle$1(element2), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element2, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element2);
  var isBody = scrollParent === ((_element$ownerDocumen = element2.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element2, strategy) {
  var rect = getBoundingClientRect(element2, false, strategy === "fixed");
  rect.top = rect.top + element2.clientTop;
  rect.left = rect.left + element2.clientLeft;
  rect.bottom = rect.top + element2.clientHeight;
  rect.right = rect.left + element2.clientWidth;
  rect.width = element2.clientWidth;
  rect.height = element2.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element2, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element2, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element2)));
}
function getClippingParents(element2) {
  var clippingParents2 = listScrollParents(getParentNode(element2));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element2).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element2) ? getOffsetParent(element2) : element2;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element2, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element2) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element2, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element2, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element2 = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element2.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element2.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element2.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element2.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element2[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element2[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element2 = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element2) ? element2 : element2.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b2) {
    return overflows[a] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip$1(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$2 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip$1,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element2) {
  return {
    scrollLeft: element2.scrollLeft,
    scrollTop: element2.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element2) {
  var rect = element2.getBoundingClientRect();
  var scaleX = round(rect.width) / element2.offsetWidth || 1;
  var scaleY = round(rect.height) / element2.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element2) {
    return !(element2 && typeof element2.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$2, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b2) {
  if (a === b2) return true;
  if (a && b2 && typeof a == "object" && typeof b2 == "object") {
    if (a.constructor !== b2.constructor) return false;
    var length, i, keys2;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b2.length) return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b2[i])) return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b2 instanceof Map) {
      if (a.size !== b2.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b2.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b2.get(i.value[0]))) return false;
      return true;
    }
    if (hasSet && a instanceof Set && b2 instanceof Set) {
      if (a.size !== b2.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b2.has(i.value[0])) return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b2)) {
      length = a.length;
      if (length != b2.length) return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b2[i]) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b2.source && a.flags === b2.flags;
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b2.valueOf === "function") return a.valueOf() === b2.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b2.toString === "function") return a.toString() === b2.toString();
    keys2 = Object.keys(a);
    length = keys2.length;
    if (length !== Object.keys(b2).length) return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys2[i])) return false;
    if (hasElementType && a instanceof Element) return false;
    for (i = length; i-- !== 0; ) {
      if ((keys2[i] === "_owner" || keys2[i] === "__v" || keys2[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys2[i]], b2[keys2[i]])) return false;
    }
    return true;
  }
  return a !== a && b2 !== b2;
}
var reactFastCompare = function isEqual(a, b2) {
  try {
    return equal(a, b2);
  } catch (error2) {
    if ((error2.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error2;
  }
};
const isEqual2 = /* @__PURE__ */ getDefaultExportFromCjs$1(reactFastCompare);
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var EMPTY_MODIFIERS = [];
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
    acc[key] = value;
    return acc;
  }, {});
};
var usePopper = function usePopper2(referenceElement, popperElement) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var prevOptions = reactExports.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS
  };
  var _useState = reactExports.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), _useState2 = _slicedToArray(_useState, 2), state = _useState2[0], setState = _useState2[1];
  var updateStateModifier = reactExports.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn2(_ref3) {
        var state2 = _ref3.state;
        var elements = Object.keys(state2.elements);
        reactDomExports.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element2) {
              return [element2, state2.styles[element2] || {}];
            })),
            attributes: fromEntries(elements.map(function(element2) {
              return [element2, state2.attributes[element2]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = reactExports.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(_toConsumableArray(optionsWithDefaults.modifiers), [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if (isEqual2(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    }
    prevOptions.current = newOptions;
    return newOptions;
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = reactExports.useRef(null);
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useWindowSize() {
  var _useState = reactExports.useState(getWindowSize), _useState2 = _slicedToArray(_useState, 2), size = _useState2[0], setSize = _useState2[1];
  reactExports.useEffect(function() {
    function handleResize() {
      setSize(getWindowSize());
    }
    var debounceResize = debounce$1(handleResize, 400);
    window.addEventListener("resize", debounceResize);
    return function() {
      window.removeEventListener("resize", debounceResize);
      debounceResize.cancel();
    };
  }, []);
  return size;
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var popupDefaultProps = {
  destroyOnClose: false,
  hideEmptyPopup: false,
  placement: "top",
  showArrow: false,
  trigger: "hover"
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function composeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return function(instance) {
    for (var _i = 0, _refs = refs; _i < _refs.length; _i++) {
      var ref = _refs[_i];
      if (typeof ref === "function") {
        ref(instance);
      } else if (ref) {
        ref.current = instance;
      }
    }
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var on = function() {
  if (canUseDocument && document.addEventListener) {
    return function(element2, event, handler) {
      if (element2 && event && handler) {
        element2.addEventListener(event, handler, false);
      }
    };
  }
  return function(element2, event, handler) {
    if (element2 && event && handler) {
      element2.attachEvent("on".concat(event), handler);
    }
  };
}();
var off = function() {
  if (canUseDocument && document.removeEventListener) {
    return function(element2, event, handler) {
      if (element2 && event) {
        element2.removeEventListener(event, handler, false);
      }
    };
  }
  return function(element2, event, handler) {
    if (element2 && event) {
      element2.detachEvent("on".concat(event), handler);
    }
  };
}();
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var ESC_KEY = "Escape";
function useTrigger(_ref) {
  var content = _ref.content, disabled = _ref.disabled, trigger = _ref.trigger, visible = _ref.visible, onVisibleChange = _ref.onVisibleChange, triggerRef = _ref.triggerRef, delay = _ref.delay;
  var hasPopupMouseDown = reactExports.useRef(false);
  var mouseDownTimer = reactExports.useRef(0);
  var visibleTimer = reactExports.useRef(null);
  var triggerDataKey = reactExports.useRef("t-popup--".concat(Math.random().toFixed(10)));
  var leaveFlag = reactExports.useRef(false);
  var shouldToggle = reactExports.useMemo(function() {
    if (disabled) return false;
    return !disabled && content === 0 ? true : content;
  }, [disabled, content]);
  var _useMemo = reactExports.useMemo(function() {
    if (Array.isArray(delay)) return delay;
    return [delay, delay];
  }, [delay]), _useMemo2 = _slicedToArray(_useMemo, 2), _useMemo2$ = _useMemo2[0], appearDelay = _useMemo2$ === void 0 ? 0 : _useMemo2$, _useMemo2$2 = _useMemo2[1], exitDelay = _useMemo2$2 === void 0 ? 0 : _useMemo2$2;
  function callFuncWithDelay(_ref2) {
    var delay2 = _ref2.delay, callback = _ref2.callback;
    if (delay2) {
      clearTimeout(visibleTimer.current);
      visibleTimer.current = setTimeout(callback, delay2);
    } else {
      callback();
    }
  }
  reactExports.useEffect(function() {
    if (!shouldToggle) return;
    var handleDocumentClick = function handleDocumentClick2(e2) {
      var _getRefDom, _getRefDom$contains;
      if ((_getRefDom = getRefDom(triggerRef)) !== null && _getRefDom !== void 0 && (_getRefDom$contains = _getRefDom.contains) !== null && _getRefDom$contains !== void 0 && _getRefDom$contains.call(_getRefDom, e2.target) || hasPopupMouseDown.current) {
        return;
      }
      visible && onVisibleChange(false, {
        e: e2,
        trigger: "document"
      });
    };
    on(document, "mousedown", handleDocumentClick);
    on(document, "touchend", handleDocumentClick);
    return function() {
      off(document, "mousedown", handleDocumentClick);
      off(document, "touchend", handleDocumentClick);
    };
  }, [shouldToggle, visible, onVisibleChange, triggerRef]);
  function getPopupProps() {
    if (!shouldToggle) return {};
    return {
      onMouseEnter: function onMouseEnter(e2) {
        if (trigger === "hover" && !leaveFlag.current) {
          clearTimeout(visibleTimer.current);
          onVisibleChange(true, {
            e: e2,
            trigger: "trigger-element-hover"
          });
        }
      },
      onMouseLeave: function onMouseLeave(e2) {
        if (trigger === "hover") {
          leaveFlag.current = true;
          clearTimeout(visibleTimer.current);
          onVisibleChange(false, {
            e: e2,
            trigger: "trigger-element-hover"
          });
        }
      },
      onMouseDown: function onMouseDown() {
        clearTimeout(mouseDownTimer.current);
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(function() {
          hasPopupMouseDown.current = false;
        });
      },
      onTouchEnd: function onTouchEnd() {
        clearTimeout(mouseDownTimer.current);
        hasPopupMouseDown.current = true;
        mouseDownTimer.current = window.setTimeout(function() {
          hasPopupMouseDown.current = false;
        });
      }
    };
  }
  function getTriggerProps(triggerNode) {
    if (!shouldToggle) return {};
    var triggerProps = {
      className: visible ? classNames$2(triggerNode.props.className, "t-popup-open") : triggerNode.props.className,
      onMouseDown: function onMouseDown(e2) {
        var _triggerNode$props$on, _triggerNode$props;
        if (trigger === "mousedown") {
          callFuncWithDelay({
            delay: visible ? appearDelay : exitDelay,
            callback: function callback() {
              return onVisibleChange(!visible, {
                e: e2,
                trigger: "trigger-element-mousedown"
              });
            }
          });
        }
        (_triggerNode$props$on = (_triggerNode$props = triggerNode.props).onMouseDown) === null || _triggerNode$props$on === void 0 || _triggerNode$props$on.call(_triggerNode$props, e2);
      },
      onClick: function onClick(e2) {
        var _triggerNode$props$on2, _triggerNode$props2;
        if (trigger === "click") {
          callFuncWithDelay({
            delay: visible ? appearDelay : exitDelay,
            callback: function callback() {
              return onVisibleChange(!visible, {
                e: e2,
                trigger: "trigger-element-click"
              });
            }
          });
        }
        (_triggerNode$props$on2 = (_triggerNode$props2 = triggerNode.props).onClick) === null || _triggerNode$props$on2 === void 0 || _triggerNode$props$on2.call(_triggerNode$props2, e2);
      },
      onTouchStart: function onTouchStart(e2) {
        var _triggerNode$props$on3, _triggerNode$props3;
        if (trigger === "hover" || trigger === "mousedown") {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e2,
                trigger: "trigger-element-hover"
              });
            }
          });
        }
        (_triggerNode$props$on3 = (_triggerNode$props3 = triggerNode.props).onTouchStart) === null || _triggerNode$props$on3 === void 0 || _triggerNode$props$on3.call(_triggerNode$props3, e2);
      },
      onMouseEnter: function onMouseEnter(e2) {
        var _triggerNode$props$on4, _triggerNode$props4;
        if (trigger === "hover") {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e2,
                trigger: "trigger-element-hover"
              });
            }
          });
        }
        (_triggerNode$props$on4 = (_triggerNode$props4 = triggerNode.props).onMouseEnter) === null || _triggerNode$props$on4 === void 0 || _triggerNode$props$on4.call(_triggerNode$props4, e2);
      },
      onMouseLeave: function onMouseLeave(e2) {
        var _triggerNode$props$on5, _triggerNode$props5;
        if (trigger === "hover") {
          leaveFlag.current = false;
          callFuncWithDelay({
            delay: exitDelay,
            callback: function callback() {
              return onVisibleChange(false, {
                e: e2,
                trigger: "trigger-element-hover"
              });
            }
          });
        }
        (_triggerNode$props$on5 = (_triggerNode$props5 = triggerNode.props).onMouseLeave) === null || _triggerNode$props$on5 === void 0 || _triggerNode$props$on5.call(_triggerNode$props5, e2);
      },
      onFocus: function onFocus() {
        var _triggerNode$props$on6, _triggerNode$props6;
        if (trigger === "focus") {
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                trigger: "trigger-element-focus"
              });
            }
          });
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        (_triggerNode$props$on6 = (_triggerNode$props6 = triggerNode.props).onFocus) === null || _triggerNode$props$on6 === void 0 || _triggerNode$props$on6.call.apply(_triggerNode$props$on6, [_triggerNode$props6].concat(args));
      },
      onBlur: function onBlur() {
        var _triggerNode$props$on7, _triggerNode$props7;
        if (trigger === "focus") {
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(false, {
                trigger: "trigger-element-blur"
              });
            }
          });
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        (_triggerNode$props$on7 = (_triggerNode$props7 = triggerNode.props).onBlur) === null || _triggerNode$props$on7 === void 0 || _triggerNode$props$on7.call.apply(_triggerNode$props$on7, [_triggerNode$props7].concat(args));
      },
      onContextMenu: function onContextMenu(e2) {
        var _triggerNode$props$on8, _triggerNode$props8;
        if (trigger === "context-menu") {
          e2.preventDefault();
          callFuncWithDelay({
            delay: appearDelay,
            callback: function callback() {
              return onVisibleChange(true, {
                e: e2,
                trigger: "context-menu"
              });
            }
          });
        }
        (_triggerNode$props$on8 = (_triggerNode$props8 = triggerNode.props).onContextMenu) === null || _triggerNode$props$on8 === void 0 || _triggerNode$props$on8.call(_triggerNode$props8, e2);
      },
      onKeyDown: function onKeyDown(e2) {
        var _triggerNode$props$on9, _triggerNode$props9;
        if ((e2 === null || e2 === void 0 ? void 0 : e2.key) === ESC_KEY) {
          callFuncWithDelay({
            delay: exitDelay,
            callback: function callback() {
              return onVisibleChange(false, {
                e: e2,
                trigger: "keydown-esc"
              });
            }
          });
        }
        (_triggerNode$props$on9 = (_triggerNode$props9 = triggerNode.props).onKeyDown) === null || _triggerNode$props$on9 === void 0 || _triggerNode$props$on9.call(_triggerNode$props9, e2);
      }
    };
    if (supportRef(triggerNode)) {
      triggerProps.ref = composeRefs(triggerRef, getNodeRef(triggerNode));
    } else {
      triggerProps["data-popup"] = triggerDataKey.current;
    }
    return triggerProps;
  }
  function getTriggerNode(children) {
    var triggerNode = /* @__PURE__ */ reactExports.isValidElement(children) && !reactIsExports$1.isFragment(children) ? children : /* @__PURE__ */ React.createElement("span", {
      className: "t-trigger"
    }, children);
    return /* @__PURE__ */ React.cloneElement(triggerNode, getTriggerProps(triggerNode));
  }
  var getTriggerDom = reactExports.useCallback(function() {
    if (typeof document === "undefined") return {};
    return document.querySelector('[data-popup="'.concat(triggerDataKey.current, '"]'));
  }, []);
  return {
    getTriggerNode,
    getPopupProps,
    getTriggerDom
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var getTransitionParams = function getTransitionParams2(_ref) {
  var classPrefix = _ref.classPrefix, expandAnimation = _ref.expandAnimation, fadeAnimation = _ref.fadeAnimation;
  if (!fadeAnimation) return {};
  var popupAnimationClassPrefix = expandAnimation ? "".concat(classPrefix, "-popup--animation-expand") : "".concat(classPrefix, "-popup--animation");
  return {
    classNames: {
      appear: "".concat(popupAnimationClassPrefix, "-enter ").concat(popupAnimationClassPrefix, "-enter-active"),
      appearActive: "".concat(popupAnimationClassPrefix, "-enter-active"),
      appearDone: "".concat(popupAnimationClassPrefix, "-enter-active ").concat(popupAnimationClassPrefix, "-enter-to"),
      enter: "".concat(popupAnimationClassPrefix, "-enter ").concat(popupAnimationClassPrefix, "-enter-active"),
      enterActive: "".concat(popupAnimationClassPrefix, "-enter-active"),
      enterDone: "".concat(popupAnimationClassPrefix, "-enter-active ").concat(popupAnimationClassPrefix, "-enter-to"),
      exit: "".concat(popupAnimationClassPrefix, "-leave ").concat(popupAnimationClassPrefix, "-leave-active"),
      exitActive: "".concat(popupAnimationClassPrefix, "-leave-active"),
      exitDone: "".concat(popupAnimationClassPrefix, "-leave-active ").concat(popupAnimationClassPrefix, "-leave-to")
    }
  };
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$H(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$H(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$H(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$H(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Popup$1 = /* @__PURE__ */ reactExports.forwardRef(function(originalProps, ref) {
  var _popperOptions$modifi;
  var props = useDefaultProps(originalProps, popupDefaultProps);
  var trigger = props.trigger, content = props.content, placement = props.placement, attach = props.attach, showArrow = props.showArrow, destroyOnClose = props.destroyOnClose, overlayClassName = props.overlayClassName, overlayInnerClassName = props.overlayInnerClassName, overlayStyle = props.overlayStyle, overlayInnerStyle = props.overlayInnerStyle, triggerElement = props.triggerElement, _props$children = props.children, children = _props$children === void 0 ? triggerElement : _props$children, disabled = props.disabled, zIndex = props.zIndex, onScroll = props.onScroll, onScrollToBottom = props.onScrollToBottom, expandAnimation = props.expandAnimation, delay = props.delay, hideEmptyPopup = props.hideEmptyPopup, updateScrollTop = props.updateScrollTop;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var popupAttach = useAttach("popup", attach);
  var _useAnimation = useAnimation(), keepExpand = _useAnimation.keepExpand, keepFade = _useAnimation.keepFade;
  var _useWindowSize = useWindowSize(), windowHeight = _useWindowSize.height, windowWidth = _useWindowSize.width;
  var _useControlled = useControlled(props, "visible", props.onVisibleChange), _useControlled2 = _slicedToArray(_useControlled, 2), visible = _useControlled2[0], onVisibleChange = _useControlled2[1];
  var _useState = reactExports.useState(null), _useState2 = _slicedToArray(_useState, 2), popupElement = _useState2[0], setPopupElement = _useState2[1];
  var triggerRef = reactExports.useRef(null);
  var popupRef = reactExports.useRef(null);
  var portalRef = reactExports.useRef(null);
  var contentRef = reactExports.useRef(null);
  var popperRef = reactExports.useRef(null);
  var DEFAULT_TRANSITION_TIMEOUT = 180;
  reactExports.useEffect(function() {
    if (!content && hideEmptyPopup) {
      requestAnimationFrame(function() {
        return setPopupElement(null);
      });
    }
  }, [content, hideEmptyPopup]);
  var showOverlay = reactExports.useMemo(function() {
    if (hideEmptyPopup && !content) return false;
    return visible || popupElement;
  }, [hideEmptyPopup, content, visible, popupElement]);
  var popperPlacement = reactExports.useMemo(function() {
    return placement.replace(/-(left|top)$/, "-start").replace(/-(right|bottom)$/, "-end");
  }, [placement]);
  var _useTrigger = useTrigger({
    triggerRef,
    content,
    disabled,
    trigger,
    visible,
    delay,
    onVisibleChange
  }), getTriggerNode = _useTrigger.getTriggerNode, getPopupProps = _useTrigger.getPopupProps, getTriggerDom = _useTrigger.getTriggerDom;
  var popperOptions = props.popperOptions;
  popperRef.current = usePopper(getRefDom(triggerRef), popupElement, _objectSpread$H({
    placement: popperPlacement
  }, popperOptions));
  var hasArrowModifier = popperOptions === null || popperOptions === void 0 || (_popperOptions$modifi = popperOptions.modifiers) === null || _popperOptions$modifi === void 0 ? void 0 : _popperOptions$modifi.some(function(modifier) {
    return modifier.name === "arrow";
  });
  var _popperRef$current = popperRef.current, styles = _popperRef$current.styles, attributes = _popperRef$current.attributes;
  var triggerNode = isFunction(children) ? getTriggerNode(children({
    visible
  })) : getTriggerNode(children);
  var updateTimeRef = reactExports.useRef(null);
  useMutationObservable(getRefDom(triggerRef), function() {
    var isDisplayNone = getCssVarsValue("display", getRefDom(triggerRef)) === "none";
    if (visible && !isDisplayNone) {
      clearTimeout(updateTimeRef.current);
      updateTimeRef.current = setTimeout(function() {
        var _popperRef$current2, _popperRef$current2$u;
        return (_popperRef$current2 = popperRef.current) === null || _popperRef$current2 === void 0 || (_popperRef$current2$u = _popperRef$current2.update) === null || _popperRef$current2$u === void 0 ? void 0 : _popperRef$current2$u.call(_popperRef$current2);
      }, 0);
    }
  });
  reactExports.useEffect(function() {
    return function() {
      return clearTimeout(updateTimeRef.current);
    };
  }, []);
  reactExports.useEffect(function() {
    if (visible) {
      requestAnimationFrame(function() {
        var _popperRef$current3, _popperRef$current3$u;
        return (_popperRef$current3 = popperRef.current) === null || _popperRef$current3 === void 0 || (_popperRef$current3$u = _popperRef$current3.update) === null || _popperRef$current3$u === void 0 ? void 0 : _popperRef$current3$u.call(_popperRef$current3);
      });
    }
  }, [visible, content, windowHeight, windowWidth]);
  reactExports.useEffect(function() {
    if (!triggerRef.current) triggerRef.current = getTriggerDom();
    if (visible) {
      updateScrollTop === null || updateScrollTop === void 0 || updateScrollTop(contentRef.current);
    }
  }, [visible, updateScrollTop, getTriggerDom]);
  function handleExited() {
    !destroyOnClose && popupElement && (popupElement.style.display = "none");
  }
  function handleEnter() {
    !destroyOnClose && popupElement && (popupElement.style.display = "block");
  }
  function handleScroll(e2) {
    onScroll === null || onScroll === void 0 || onScroll({
      e: e2
    });
    var debounceOnScrollBottom = debounce$1(function(e22) {
      return onScrollToBottom === null || onScrollToBottom === void 0 ? void 0 : onScrollToBottom({
        e: e22
      });
    }, 100);
    var _e$target = e2.target, scrollTop = _e$target.scrollTop, clientHeight = _e$target.clientHeight, scrollHeight = _e$target.scrollHeight;
    if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
      debounceOnScrollBottom(e2);
    }
  }
  function getOverlayStyle(overlayStyle2) {
    if (getRefDom(triggerRef) && popupRef.current && typeof overlayStyle2 === "function") {
      return _objectSpread$H({}, overlayStyle2(getRefDom(triggerRef), popupRef.current));
    }
    return _objectSpread$H({}, overlayStyle2);
  }
  var overlay = showOverlay && /* @__PURE__ */ React.createElement(CSSTransition, {
    appear: true,
    "in": visible,
    timeout: DEFAULT_TRANSITION_TIMEOUT,
    nodeRef: portalRef,
    unmountOnExit: destroyOnClose,
    onEnter: handleEnter,
    onExited: handleExited
  }, /* @__PURE__ */ React.createElement(Portal, {
    triggerNode: getRefDom(triggerRef),
    attach: popupAttach,
    ref: portalRef
  }, /* @__PURE__ */ React.createElement(CSSTransition, _objectSpread$H({
    appear: true,
    timeout: 0,
    "in": visible,
    nodeRef: popupRef
  }, getTransitionParams({
    classPrefix,
    fadeAnimation: keepFade,
    expandAnimation: expandAnimation && keepExpand
  })), /* @__PURE__ */ React.createElement("div", _objectSpread$H(_objectSpread$H({
    ref: function ref2(node) {
      if (node) {
        popupRef.current = node;
        setPopupElement(node);
      }
    },
    style: _objectSpread$H(_objectSpread$H({}, styles.popper), {}, {
      zIndex
    }, getOverlayStyle(overlayStyle)),
    className: classNames$2("".concat(classPrefix, "-popup"), overlayClassName)
  }, attributes.popper), getPopupProps()), /* @__PURE__ */ React.createElement("div", {
    ref: contentRef,
    className: classNames$2("".concat(classPrefix, "-popup__content"), _defineProperty$2({}, "".concat(classPrefix, "-popup__content--arrow"), showArrow), overlayInnerClassName),
    style: getOverlayStyle(overlayInnerStyle),
    onScroll: handleScroll
  }, content, showArrow && /* @__PURE__ */ React.createElement("div", _objectSpread$H({
    style: styles.arrow,
    className: "".concat(classPrefix, "-popup__arrow")
  }, hasArrowModifier && {
    "data-popper-arrow": ""
  })))))));
  reactExports.useImperativeHandle(ref, function() {
    return {
      getPopper: function getPopper() {
        return popperRef.current;
      },
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      },
      getPortalElement: function getPortalElement() {
        return portalRef.current;
      },
      getPopupContentElement: function getPopupContentElement() {
        return contentRef.current;
      },
      setVisible: function setVisible(visible2) {
        return onVisibleChange(visible2, {
          trigger: "document"
        });
      }
    };
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, triggerNode, overlay);
});
Popup$1.displayName = "Popup";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Popup = Popup$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var period = 200;
var noneRippleBg = "rgba(0, 0, 0, 0)";
var defaultRippleColor = "rgba(0, 0, 0, 0.35)";
var getRippleColor = function getRippleColor2(el, fixedRippleColor) {
  var _el$dataset;
  if (el !== null && el !== void 0 && (_el$dataset = el.dataset) !== null && _el$dataset !== void 0 && _el$dataset.ripple) {
    var rippleColor = el.dataset.ripple;
    return rippleColor;
  }
  var cssVariable = getComputedStyle(el).getPropertyValue("--ripple-color");
  if (cssVariable) {
    return cssVariable;
  }
  return defaultRippleColor;
};
function useRipple(el, fixedRippleColor) {
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var _useAnimation = useAnimation(), keepRipple = _useAnimation.keepRipple;
  var rippleContainer = reactExports.useMemo(function() {
    if (!canUseDocument) return null;
    var container = document.createElement("div");
    container.className = "".concat(classPrefix, "-ripple");
    return container;
  }, [classPrefix]);
  var handleAddRipple = reactExports.useCallback(function(e2) {
    var rippleColor = getRippleColor(el);
    if (e2.button !== 0 || !el || !keepRipple) return;
    if (el.classList.contains("".concat(classPrefix, "-is-active")) || el.classList.contains("".concat(classPrefix, "-is-disabled")) || el.classList.contains("".concat(classPrefix, "-is-checked")) || el.classList.contains("".concat(classPrefix, "-is-loading"))) return;
    var elStyle = getComputedStyle(el);
    var elBorder = parseInt(elStyle.borderWidth, 10);
    var border = elBorder > 0 ? elBorder : 0;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    if (rippleContainer.parentNode === null) {
      setStyle(rippleContainer, {
        position: "absolute",
        left: "".concat(0 - border, "px"),
        top: "".concat(0 - border, "px"),
        width: "".concat(width, "px"),
        height: "".concat(height, "px"),
        borderRadius: elStyle.borderRadius,
        pointerEvents: "none",
        overflow: "hidden"
      });
      el.appendChild(rippleContainer);
    }
    var ripple = document.createElement("div");
    ripple.className = "".concat(classPrefix, "-ripple__inner");
    setStyle(ripple, {
      marginTop: "0",
      marginLeft: "0",
      right: "".concat(width, "px"),
      width: "".concat(width + 20, "px"),
      height: "100%",
      transition: "transform ".concat(period, "ms cubic-bezier(.38, 0, .24, 1), background ").concat(period * 2, "ms linear"),
      transform: "skewX(-8deg)",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      backgroundColor: rippleColor,
      opacity: "0.9"
    });
    var elMap = /* @__PURE__ */ new WeakMap();
    for (var n2 = el.children.length, i = 0; i < n2; ++i) {
      var child = el.children[i];
      if (child.style.zIndex === "" && child !== rippleContainer) {
        child.style.zIndex = "1";
        elMap.set(child, true);
      }
    }
    var initPosition = el.style.position ? el.style.position : getComputedStyle(el).position;
    if (initPosition === "" || initPosition === "static") {
      el.style.position = "relative";
    }
    rippleContainer.insertBefore(ripple, rippleContainer.firstChild);
    setTimeout(function() {
      ripple.style.transform = "translateX(".concat(width, "px)");
    }, 0);
    var _handleClearRipple = function handleClearRipple() {
      ripple.style.backgroundColor = noneRippleBg;
      if (!el) return;
      el.removeEventListener("pointerup", _handleClearRipple, false);
      el.removeEventListener("pointerleave", _handleClearRipple, false);
      setTimeout(function() {
        ripple.remove();
        if (rippleContainer.children.length === 0) rippleContainer.remove();
      }, period * 2 + 100);
    };
    el.addEventListener("pointerup", _handleClearRipple, false);
    el.addEventListener("pointerleave", _handleClearRipple, false);
  }, [classPrefix, el, fixedRippleColor, rippleContainer, keepRipple]);
  reactExports.useEffect(function() {
    if (!el) return;
    el.addEventListener("pointerdown", handleAddRipple, false);
    return function() {
      el.removeEventListener("pointerdown", handleAddRipple, false);
    };
  }, [handleAddRipple, fixedRippleColor, el]);
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var buttonDefaultProps = {
  block: false,
  disabled: false,
  form: void 0,
  ghost: false,
  loading: false,
  shape: "rectangle",
  size: "medium",
  type: "button",
  variant: "base"
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$a = ["type", "theme", "variant", "icon", "disabled", "loading", "size", "block", "ghost", "shape", "children", "content", "className", "suffix", "href", "tag", "onClick"];
function ownKeys$G(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$G(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$G(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$G(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Button$1 = /* @__PURE__ */ reactExports.forwardRef(function(originProps, ref) {
  var props = useDefaultProps(originProps, buttonDefaultProps);
  var type = props.type, theme = props.theme, variant = props.variant, icon = props.icon, disabled = props.disabled, loading = props.loading, size = props.size, block = props.block, ghost = props.ghost, shape = props.shape, children = props.children, content = props.content, className = props.className, suffix = props.suffix, href = props.href, tag = props.tag, onClick = props.onClick, buttonProps = _objectWithoutProperties$2(props, _excluded$a);
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var _useDomRefCallback = useDomRefCallback(), _useDomRefCallback2 = _slicedToArray(_useDomRefCallback, 2), btnDom = _useDomRefCallback2[0], setRefCurrent = _useDomRefCallback2[1];
  useRipple((ref === null || ref === void 0 ? void 0 : ref.current) || btnDom);
  var renderChildren = content !== null && content !== void 0 ? content : children;
  var iconNode = icon;
  if (loading) iconNode = /* @__PURE__ */ React.createElement(Loading2, {
    loading,
    inheritColor: true
  });
  var renderTheme = reactExports.useMemo(function() {
    if (!theme) {
      if (variant === "base") return "primary";
      return "default";
    }
    return theme;
  }, [theme, variant]);
  var renderTag = reactExports.useMemo(function() {
    if (!tag && href && !disabled) return "a";
    if (!tag && disabled) return "div";
    return tag || "button";
  }, [tag, href, disabled]);
  return /* @__PURE__ */ React.createElement(renderTag, _objectSpread$G(_objectSpread$G({}, buttonProps), {}, {
    href,
    type,
    ref: ref || setRefCurrent,
    disabled: disabled || loading,
    className: classNames$2(className, ["".concat(classPrefix, "-button"), "".concat(classPrefix, "-button--theme-").concat(renderTheme), "".concat(classPrefix, "-button--variant-").concat(variant)], _defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2({}, "".concat(classPrefix, "-button--shape-").concat(shape), shape !== "rectangle"), "".concat(classPrefix, "-button--ghost"), ghost), "".concat(classPrefix, "-is-loading"), loading), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large"), "".concat(classPrefix, "-size-full-width"), block)),
    onClick: !disabled && !loading ? onClick : void 0
  }), /* @__PURE__ */ React.createElement(React.Fragment, null, iconNode, renderChildren && /* @__PURE__ */ React.createElement("span", {
    className: "".concat(classPrefix, "-button__text")
  }, renderChildren), suffix && /* @__PURE__ */ React.createElement("span", {
    className: "".concat(classPrefix, "-button__suffix")
  }, parseTNode(suffix))));
});
Button$1.displayName = "Button";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Button = Button$1;
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var classnames$1 = { exports: {} };
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module2) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames2.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        } else if (argType === "object") {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module2.exports) {
      classNames2.default = classNames2;
      module2.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames$1);
var classNames$1 = classnames$1.exports;
var DEFAULT_CLASS_PREFIX$1 = "t";
var DEFAULT_LOCALE$1 = "zh-CN";
var ConfigContext$1 = /* @__PURE__ */ reactExports.createContext({
  classPrefix: DEFAULT_CLASS_PREFIX$1,
  locale: DEFAULT_LOCALE$1
});
var useConfig$1 = function() {
  return reactExports.useContext(ConfigContext$1);
};
function useCommonClassName$2() {
  var _useConfig = useConfig$1(), classPrefix = _useConfig.classPrefix;
  return reactExports.useMemo(function() {
    return {
      SIZE: {
        "default": "",
        xs: "".concat(classPrefix, "-size-xs"),
        small: "".concat(classPrefix, "-size-s"),
        medium: "".concat(classPrefix, "-size-m"),
        large: "".concat(classPrefix, "-size-l"),
        xl: "".concat(classPrefix, "-size-xl"),
        block: "".concat(classPrefix, "-size-full-width")
      },
      STATUS: {
        loading: "".concat(classPrefix, "-is-loading"),
        disabled: "".concat(classPrefix, "-is-disabled"),
        focused: "".concat(classPrefix, "-is-focused"),
        success: "".concat(classPrefix, "-is-success"),
        error: "".concat(classPrefix, "-is-error"),
        warning: "".concat(classPrefix, "-is-warning"),
        selected: "".concat(classPrefix, "-is-selected"),
        active: "".concat(classPrefix, "-is-active"),
        checked: "".concat(classPrefix, "-is-checked"),
        current: "".concat(classPrefix, "-is-current"),
        hidden: "".concat(classPrefix, "-is-hidden"),
        visible: "".concat(classPrefix, "-is-visible"),
        expanded: "".concat(classPrefix, "-is-expanded"),
        indeterminate: "".concat(classPrefix, "-is-indeterminate")
      }
    };
  }, [classPrefix]);
}
function useSizeProps$1(size) {
  var COMMON_SIZE_CLASS_NAMES = useCommonClassName$2().SIZE;
  if (typeof size === "undefined") {
    return {};
  }
  if (!(size in COMMON_SIZE_CLASS_NAMES)) {
    return {
      className: "",
      style: {
        fontSize: size
      }
    };
  }
  return {
    className: COMMON_SIZE_CLASS_NAMES[size],
    style: {}
  };
}
function loadStylesheet$1() {
  var styleSheetId = "__TDESIGN_ICON_STYLE__";
  var iconStyleString = "@keyframes t-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  .t-icon {\n    display: inline-block;\n    vertical-align: middle;\n    width: 1em;\n    height: 1em;\n  }\n  .t-icon::before {\n    font-family: unset;\n  }\n  .t-icon-loading {\n    animation: t-spin 1s linear infinite;\n  }\n  .t-icon {\n    fill: currentColor;\n  }\n  .t-icon.t-size-s,\n  i.t-size-s {\n    font-size: 14px;\n  }\n  .t-icon.t-size-m,\n  i.t-size-m {\n    font-size: 16px;\n  }\n  .t-icon.t-size-l,\n  i.t-size-l {\n    font-size: 18px;\n  }\n  ";
  if (!document || document.getElementById(styleSheetId)) return;
  var styleSheet = document.createElement("style");
  styleSheet.setAttribute("id", styleSheetId);
  styleSheet.innerHTML = iconStyleString;
  document.head.appendChild(styleSheet);
}
var _excluded$9 = ["icon", "id", "className", "size", "style"];
function ownKeys$F(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$F(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$F(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$F(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function render$1(node, id, rootProps) {
  return /* @__PURE__ */ reactExports.createElement(node.tag, _objectSpread$F(_objectSpread$F({
    key: id
  }, node.attrs), rootProps), (node.children || []).map(function(child, index) {
    return render$1(child, "".concat(id, "-").concat(node.tag, "-").concat(index));
  }));
}
var IconBase$1 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var icon = props.icon, id = props.id, className = props.className, size = props.size, style = props.style, restProps = _objectWithoutProperties$1(props, _excluded$9);
  var _useSizeProps = useSizeProps$1(size), sizeClassName = _useSizeProps.className, sizeStyle = _useSizeProps.style;
  var cls = classNames$1("t-icon", "t-icon-".concat(id), className, sizeClassName);
  reactExports.useEffect(function() {
    loadStylesheet$1();
  }, []);
  return render$1(icon, "".concat(id), _objectSpread$F({
    ref,
    className: cls,
    style: _objectSpread$F(_objectSpread$F({}, style), sizeStyle)
  }, restProps));
});
function ownKeys$E(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$E(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$E(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$E(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$f = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M13 4V11L20 11V13L13 13V20H11L11 13H4L4 11L11 11L11 4L13 4Z"
    }
  }]
};
var AddIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$E(_objectSpread$E({}, props), {}, {
    id: "add",
    ref,
    icon: element$f
  }));
});
AddIcon.displayName = "AddIcon";
function ownKeys$D(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$D(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$D(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$D(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$e = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 26 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M3.99999 1.58582L10.1714 7.75774L17.2425 14.8288L23.4137 21L21.9995 22.4142L19.0345 19.4492C17.2447 20.4377 15.1866 21.0001 12.9996 21.0001C7.42102 21.0001 2.69842 17.3465 1.08922 12.3042L0.992188 12.0001L1.08922 11.6961C1.85645 9.29201 3.33009 7.20571 5.26511 5.67975L2.58567 2.99993L3.99999 1.58582ZM6.69098 7.10574C5.05507 8.33729 3.79122 10.0353 3.09676 12.0001C4.53843 16.0793 8.42915 19.0001 12.9996 19.0001C14.6314 19.0001 16.1745 18.6285 17.5507 17.9655L15.7571 16.1719C14.9668 16.695 14.0185 17.0003 12.9999 17.0003C10.2385 17.0003 7.99989 14.7618 7.99989 12.0003C7.99989 10.9817 8.3052 10.0334 8.82835 9.24312L6.69098 7.10574ZM10.292 10.7068C10.1046 11.0984 9.99989 11.5368 9.99989 12.0003C9.99989 13.6572 11.343 15.0003 12.9999 15.0003C13.4634 15.0003 13.9018 14.8956 14.2934 14.7082L10.292 10.7068ZM13 5.00003C12.4234 5.00003 11.8583 5.04642 11.3081 5.13548L10.321 5.29527L10.0014 3.32097L10.9885 3.16117C11.644 3.05508 12.3159 3.00003 13 3.00003C18.5786 3.00003 23.3012 6.65367 24.9104 11.696L25.0074 12L24.9104 12.3041C24.4968 13.5999 23.878 14.8034 23.0926 15.8763L22.5019 16.6833L20.8881 15.5019L21.4788 14.695C22.0769 13.8778 22.5595 12.9715 22.9028 12C21.4612 7.92082 17.5704 5.00003 13 5.00003ZM13.5132 6.92636L14.4691 7.21985C16.0499 7.70515 17.2953 8.95049 17.7806 10.5313L18.0741 11.4873L16.1621 12.0742L15.8687 11.1183C15.578 10.1715 14.829 9.42243 13.8822 9.13178L12.9262 8.8383L13.5132 6.92636Z"
    }
  }]
};
var BrowseOffIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$D(_objectSpread$D({}, props), {}, {
    id: "browse-off",
    ref,
    icon: element$e
  }));
});
BrowseOffIcon.displayName = "BrowseOffIcon";
function ownKeys$C(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$C(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$C(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$C(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$d = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "g",
    "attrs": {
      "clipPath": "url(#clip0_8726_7319)"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "fill": "currentColor",
        "d": "M2.09675 12C3.53842 16.0792 7.42915 19 11.9996 19C16.57 19 20.4607 16.0792 21.9024 12C20.4607 7.92079 16.57 5 11.9996 5C7.42915 5 3.53842 7.92079 2.09675 12ZM0.0892162 11.696C1.69842 6.65364 6.42102 3 11.9996 3C17.5781 3 22.3007 6.65364 23.9099 11.696L24.007 12L23.9099 12.304C22.3007 17.3464 17.5781 21 11.9996 21C6.42102 21 1.69842 17.3464 0.0892162 12.304L-0.0078125 12L0.0892162 11.696ZM11.9999 9C10.343 9 8.99989 10.3431 8.99989 12C8.99989 13.6569 10.343 15 11.9999 15C13.6567 15 14.9999 13.6569 14.9999 12C14.9999 10.3431 13.6567 9 11.9999 9ZM6.99989 12C6.99989 9.23858 9.23846 7 11.9999 7C14.7613 7 16.9999 9.23858 16.9999 12C16.9999 14.7614 14.7613 17 11.9999 17C9.23846 17 6.99989 14.7614 6.99989 12Z"
      }
    }]
  }]
};
var BrowseIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$C(_objectSpread$C({}, props), {}, {
    id: "browse",
    ref,
    icon: element$d
  }));
});
BrowseIcon.displayName = "BrowseIcon";
function ownKeys$B(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$B(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$B(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$B(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$c = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM7.49985 10.5858L10.4999 13.5858L16.4999 7.58578L17.9141 8.99999L10.4999 16.4142L6.08564 12L7.49985 10.5858Z"
    }
  }]
};
var CheckCircleFilledIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$B(_objectSpread$B({}, props), {}, {
    id: "check-circle-filled",
    ref,
    icon: element$c
  }));
});
CheckCircleFilledIcon.displayName = "CheckCircleFilledIcon";
function ownKeys$A(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$A(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$A(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$A(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$b = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M15.9144 17.5L10.4144 12L15.9144 6.50003L14.5002 5.08582L7.58594 12L14.5002 18.9142L15.9144 17.5Z"
    }
  }]
};
var ChevronLeftIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$A(_objectSpread$A({}, props), {}, {
    id: "chevron-left",
    ref,
    icon: element$b
  }));
});
ChevronLeftIcon.displayName = "ChevronLeftIcon";
function ownKeys$z(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$z(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$z(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$z(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$a = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M8.08594 17.5L13.5859 12L8.08594 6.50003L9.50015 5.08582L16.4144 12L9.50015 18.9142L8.08594 17.5Z"
    }
  }]
};
var ChevronRightIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$z(_objectSpread$z({}, props), {}, {
    id: "chevron-right",
    ref,
    icon: element$a
  }));
});
ChevronRightIcon.displayName = "ChevronRightIcon";
function ownKeys$y(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$y(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$y(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$y(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$9 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.81753 7.40346L11.9999 10.5858L15.1815 7.40414L16.5957 8.81835L13.4141 12L16.5957 15.1816L15.1815 16.5958L11.9999 13.4142L8.81753 16.5965L7.40332 15.1823L10.5856 12L7.40332 8.81767L8.81753 7.40346Z"
    }
  }]
};
var CloseCircleFilledIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$y(_objectSpread$y({}, props), {}, {
    id: "close-circle-filled",
    ref,
    icon: element$9
  }));
});
CloseCircleFilledIcon.displayName = "CloseCircleFilledIcon";
function ownKeys$x(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$x(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$x(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$x(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$8 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M7.04996 5.63599L11.9997 10.5857L16.9494 5.63599L18.3637 7.0502L13.4139 11.9999L18.3637 16.9497L16.9494 18.3639L11.9997 13.4142L7.04996 18.3639L5.63574 16.9497L10.5855 11.9999L5.63574 7.0502L7.04996 5.63599Z"
    }
  }]
};
var CloseIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$x(_objectSpread$x({}, props), {}, {
    id: "close",
    ref,
    icon: element$8
  }));
});
CloseIcon.displayName = "CloseIcon";
function ownKeys$w(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$w(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$w(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$w(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$7 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM11.0001 14H13.0001V6.49998H11.0001V14ZM13.004 15.5H11.0001V17.5039H13.004V15.5Z"
    }
  }]
};
var ErrorCircleFilledIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$w(_objectSpread$w({}, props), {}, {
    id: "error-circle-filled",
    ref,
    icon: element$7
  }));
});
ErrorCircleFilledIcon.displayName = "ErrorCircleFilledIcon";
function ownKeys$v(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$v(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$v(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$v(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$6 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM11.8265 11.8902C12.2582 11.3593 12.8004 10.9159 13.2365 10.5723C13.7034 10.2045 14.0002 9.63718 14.0002 9C14.0002 7.89543 13.1048 7 12.0002 7C11.131 7 10.3888 7.5551 10.1138 8.33325L9.78055 9.27609L7.89487 8.6096L8.22811 7.66676C8.77675 6.11451 10.2571 5 12.0002 5C14.2094 5 16.0002 6.79086 16.0002 9C16.0002 10.2759 15.4018 11.4125 14.4742 12.1433C14.0426 12.4834 13.6573 12.8088 13.3783 13.1519C13.1038 13.4896 13.0002 13.762 13.0002 14V15.25H11.0002V14C11.0002 13.1334 11.3905 12.4265 11.8265 11.8902ZM11.0001 18.2539V16.25H13.004V18.2539H11.0001Z"
    }
  }]
};
var HelpCircleFilledIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$v(_objectSpread$v({}, props), {}, {
    id: "help-circle-filled",
    ref,
    icon: element$6
  }));
});
HelpCircleFilledIcon.displayName = "HelpCircleFilledIcon";
function ownKeys$u(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$u(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$u(Object(source), true).forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$u(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$5 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM10.996 8.50002V6.49611H12.9999V8.50002H10.996ZM12.9999 10L12.9999 17.5H10.9999V10L12.9999 10Z"
    }
  }]
};
var InfoCircleFilledIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase$1, _objectSpread$u(_objectSpread$u({}, props), {}, {
    id: "info-circle-filled",
    ref,
    icon: element$5
  }));
});
InfoCircleFilledIcon.displayName = "InfoCircleFilledIcon";
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t$1 = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t$1:
              case r:
              case h:
                return a;
              default:
                return u2;
            }
        }
      case d:
        return u2;
    }
  }
}
function A(a) {
  return z(a) === m;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t$1;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;
reactIs_production_min.isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a) {
  return z(a) === k;
};
reactIs_production_min.isContextProvider = function(a) {
  return z(a) === h;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a) {
  return z(a) === n;
};
reactIs_production_min.isFragment = function(a) {
  return z(a) === e;
};
reactIs_production_min.isLazy = function(a) {
  return z(a) === t$1;
};
reactIs_production_min.isMemo = function(a) {
  return z(a) === r;
};
reactIs_production_min.isPortal = function(a) {
  return z(a) === d;
};
reactIs_production_min.isProfiler = function(a) {
  return z(a) === g;
};
reactIs_production_min.isStrictMode = function(a) {
  return z(a) === f;
};
reactIs_production_min.isSuspense = function(a) {
  return z(a) === p;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
var reactIsExports = reactIs$1.exports;
var reactIs = reactIsExports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys2 = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys2 = keys2.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys2.length; ++i) {
      var key = keys2[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
const hoistNonReactStatics$1 = /* @__PURE__ */ getDefaultExportFromCjs$1(hoistNonReactStatics_cjs);
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function forwardRefWithStatics(component, statics) {
  return hoistNonReactStatics$1(/* @__PURE__ */ reactExports.forwardRef(component), statics);
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useGlobalIcon(tdIcon) {
  var _useConfig = useConfig$2(), globalIcon = _useConfig.icon;
  var resultIcon = {};
  Object.keys(tdIcon).forEach(function(key) {
    resultIcon[key] = (globalIcon === null || globalIcon === void 0 ? void 0 : globalIcon[key]) || tdIcon[key];
  });
  return resultIcon;
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$8 = ["separate", "children", "className"];
function ownKeys$t(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$t(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$t(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$t(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var InputGroup = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var separate = props.separate, children = props.children, className = props.className, wrapperProps = _objectWithoutProperties$2(props, _excluded$8);
  return /* @__PURE__ */ React.createElement("div", _objectSpread$t({
    ref,
    className: classNames$2("".concat(classPrefix, "-input-group"), className, _defineProperty$2({}, "".concat(classPrefix, "-input-group--separate"), separate))
  }, wrapperProps), children);
});
InputGroup.displayName = "InputGroup";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function getPluralIndex(count) {
  if (count === 0) return 0;
  if (count === 1) return 1;
  return 2;
}
function t(pattern) {
  if (isString(pattern)) {
    var text = pattern;
    var count;
    var data = {};
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (args.length > 0) {
      var firstArg = args[0], secondArg = args[1];
      if (typeof firstArg === "number") {
        count = firstArg;
        if (secondArg && _typeof$2(secondArg) === "object") {
          data = secondArg;
        } else {
          data.count = count;
        }
      } else if (_typeof$2(firstArg) === "object" && firstArg !== null) {
        data = firstArg;
      }
    }
    if (text.includes("|")) {
      var pluralParts = text.split("|").map(function(part) {
        return part.trim();
      });
      if (typeof count === "number") {
        var pluralIndex = getPluralIndex(count);
        if (pluralIndex < pluralParts.length) {
          text = pluralParts[pluralIndex];
        } else {
          text = pluralParts[pluralParts.length - 1];
        }
      } else {
        var _pluralParts = _slicedToArray(pluralParts, 1), firstPart = _pluralParts[0];
        text = firstPart;
      }
    }
    if (data && Object.keys(data).length > 0) {
      var regular = /\{\s*([\w-]+)\s*\}/g;
      text = text.replace(regular, function(match, key) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          return String(data[key]);
        }
        return match;
      });
    }
    return text;
  }
  return "";
}
function ownKeys$s(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$s(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$s(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$s(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function useLocaleReceiver(componentName, defaultLocale) {
  var _React$useContext = React.useContext(ConfigContext$2), globalConfig2 = _React$useContext.globalConfig;
  function transformLocale(pattern) {
    var REGEXP = /\{\s*([\w-]+)\s*\}/g;
    var placement = arguments.length <= 1 ? void 0 : arguments[1];
    if (Array.isArray(pattern)) {
      return pattern.map(function(p2, index) {
        var translated = p2.replace(REGEXP, function(_, key) {
          if (placement) return String(placement[index][key]);
          return "";
        });
        return translated;
      });
    }
    if (typeof pattern === "function") {
      return pattern(placement);
    }
    var data = arguments.length <= 2 ? void 0 : arguments[2];
    if (data) {
      return t(pattern, placement, data);
    }
    return t(pattern, placement);
  }
  var componentLocale = React.useMemo(function() {
    var locale = {};
    var connectLocaleByName = globalConfig2[componentName];
    var localeFromContext = componentName && globalConfig2 ? connectLocaleByName : {};
    return _objectSpread$s(_objectSpread$s({}, typeof locale === "function" ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, globalConfig2]);
  return [componentLocale, transformLocale];
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var inputDefaultProps = {
  align: "left",
  allowInputOverMax: false,
  autoWidth: false,
  autocomplete: void 0,
  autofocus: false,
  borderless: false,
  allowInput: true,
  clearable: false,
  placeholder: void 0,
  readonly: false,
  showClearIconOnEmpty: false,
  showLimitNumber: false,
  size: "medium",
  spellCheck: false,
  status: "default",
  type: "text",
  defaultValue: ""
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useLengthLimit(params) {
  var getValueByLimitNumber = function getValueByLimitNumber2(inputValue) {
    var allowInputOverMax = params.allowInputOverMax, maxlength = params.maxlength, maxcharacter = params.maxcharacter;
    if (!(maxlength || maxcharacter) || allowInputOverMax || !inputValue) return inputValue;
    if (maxlength) {
      return limitUnicodeMaxLength(inputValue, maxlength);
    }
    if (maxcharacter) {
      var r2 = getCharacterLength(inputValue, maxcharacter);
      if (_typeof$2(r2) === "object") {
        return r2.characters;
      }
    }
  };
  var limitNumber = reactExports.useMemo(function() {
    var maxlength = params.maxlength, maxcharacter = params.maxcharacter, value = params.value;
    if (typeof value === "number") return String(value);
    if (maxlength && maxcharacter) {
      log.warn("Input", "Pick one of maxlength and maxcharacter please.");
    }
    if (maxlength) {
      var length = value !== null && value !== void 0 && value.length ? getUnicodeLength(value) : 0;
      return "".concat(length, "/").concat(maxlength);
    }
    if (maxcharacter) {
      return "".concat(getCharacterLength(value || ""), "/").concat(maxcharacter);
    }
    return "";
  }, [params.maxcharacter, params.maxlength, params.value]);
  var innerStatus = reactExports.useMemo(function() {
    if (limitNumber) {
      var _limitNumber$split = limitNumber.split("/"), _limitNumber$split2 = _slicedToArray(_limitNumber$split, 2), current = _limitNumber$split2[0], total = _limitNumber$split2[1];
      return Number(current) > Number(total) ? "error" : "";
    }
    return "";
  }, [limitNumber]);
  var tStatus = reactExports.useMemo(function() {
    return params.status || innerStatus;
  }, [params.status, innerStatus]);
  var onValidateChange = function onValidateChange2() {
    var _params$onValidate;
    (_params$onValidate = params.onValidate) === null || _params$onValidate === void 0 || _params$onValidate.call(params, {
      error: innerStatus ? "exceed-maximum" : void 0
    });
  };
  reactExports.useEffect(function() {
    onValidateChange();
  }, [innerStatus]);
  return {
    tStatus,
    limitNumber,
    getValueByLimitNumber
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$7 = ["type", "autoWidth", "borderless", "placeholder", "disabled", "status", "size", "className", "inputClass", "style", "prefixIcon", "suffixIcon", "clearable", "tips", "align", "maxlength", "maxcharacter", "showClearIconOnEmpty", "autofocus", "autocomplete", "readonly", "label", "suffix", "showInput", "keepWrapperWidth", "showLimitNumber", "allowInput", "allowInputOverMax", "name", "format", "onClick", "onClear", "onEnter", "onKeydown", "onKeyup", "onKeypress", "onFocus", "onBlur", "onPaste", "onMouseenter", "onMouseleave", "onWheel", "onCompositionstart", "onCompositionend", "onValidate", "onChange"];
function ownKeys$r(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$r(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$r(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$r(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var renderIcon = function renderIcon2(classPrefix, type, icon) {
  var result = parseTNode(icon);
  var iconClassName = icon ? "".concat(classPrefix, "-input__").concat(type, "-icon") : "";
  return result ? /* @__PURE__ */ React.createElement("span", {
    className: "".concat(classPrefix, "-input__").concat(type, " ").concat(iconClassName)
  }, result) : null;
};
var Input$1 = forwardRefWithStatics(function(originalProps, ref) {
  var _classNames3;
  var _useLocaleReceiver = useLocaleReceiver("input"), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 2), local = _useLocaleReceiver2[0], t2 = _useLocaleReceiver2[1];
  var _useGlobalIcon = useGlobalIcon({
    BrowseIcon,
    BrowseOffIcon,
    CloseCircleFilledIcon
  }), BrowseIcon$1 = _useGlobalIcon.BrowseIcon, BrowseOffIcon$1 = _useGlobalIcon.BrowseOffIcon, CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon;
  var props = useDefaultProps(originalProps, inputDefaultProps);
  var type = props.type, autoWidth = props.autoWidth, borderless = props.borderless, _props$placeholder = props.placeholder, placeholder = _props$placeholder === void 0 ? t2(local.placeholder) : _props$placeholder, disabled = props.disabled, status = props.status, size = props.size, className = props.className, inputClass = props.inputClass, style = props.style, prefixIcon = props.prefixIcon, suffixIcon = props.suffixIcon, clearable = props.clearable, tips = props.tips, align = props.align, maxlength = props.maxlength, maxcharacter = props.maxcharacter, showClearIconOnEmpty = props.showClearIconOnEmpty, autofocus = props.autofocus, autocomplete = props.autocomplete, readonly = props.readonly, label = props.label, suffix = props.suffix, _props$showInput = props.showInput, showInput = _props$showInput === void 0 ? true : _props$showInput, keepWrapperWidth = props.keepWrapperWidth, showLimitNumber = props.showLimitNumber, allowInput = props.allowInput, allowInputOverMax = props.allowInputOverMax, name = props.name, format = props.format, _onClick = props.onClick, onClear = props.onClear, onEnter = props.onEnter, onKeydown = props.onKeydown, onKeyup = props.onKeyup, onKeypress = props.onKeypress, onFocus = props.onFocus, onBlur = props.onBlur, onPaste = props.onPaste, onMouseenter = props.onMouseenter, onMouseleave = props.onMouseleave, _onWheel = props.onWheel, onCompositionstart = props.onCompositionstart, onCompositionend = props.onCompositionend, onValidate = props.onValidate, onChangeFromProps = props.onChange, restProps = _objectWithoutProperties$2(props, _excluded$7);
  var _useControlled = useControlled(props, "value", onChangeFromProps), _useControlled2 = _slicedToArray(_useControlled, 2), value = _useControlled2[0], onChange = _useControlled2[1];
  var _useLengthLimit = useLengthLimit({
    value: value === void 0 ? void 0 : String(value),
    status,
    maxlength,
    maxcharacter,
    allowInputOverMax,
    onValidate
  }), limitNumber = _useLengthLimit.limitNumber, getValueByLimitNumber = _useLengthLimit.getValueByLimitNumber, tStatus = _useLengthLimit.tStatus;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix, inputConfig = _useConfig.input;
  var composingRef = reactExports.useRef(false);
  var inputRef = reactExports.useRef(null);
  var inputPreRef = reactExports.useRef(null);
  var wrapperRef = reactExports.useRef(null);
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), isHover = _useState2[0], toggleIsHover = _useState2[1];
  var _useState3 = reactExports.useState(false), _useState4 = _slicedToArray(_useState3, 2), isFocused = _useState4[0], toggleIsFocused = _useState4[1];
  var _useState5 = reactExports.useState(type), _useState6 = _slicedToArray(_useState5, 2), renderType = _useState6[0], setRenderType = _useState6[1];
  var _useState7 = reactExports.useState(""), _useState8 = _slicedToArray(_useState7, 2), composingValue = _useState8[0], setComposingValue = _useState8[1];
  var isInnerInputReadonly = readonly || !allowInput;
  var isValueEnabled = value && !disabled;
  var alwaysShowClearIcon = (inputConfig === null || inputConfig === void 0 ? void 0 : inputConfig.clearTrigger) === "always";
  var isShowClearIcon = (clearable && isValueEnabled || showClearIconOnEmpty) && isHover || isValueEnabled && alwaysShowClearIcon;
  var prefixIconContent = renderIcon(classPrefix, "prefix", parseTNode(prefixIcon));
  var suffixIconNew = suffixIcon;
  if (isShowClearIcon) suffixIconNew = /* @__PURE__ */ React.createElement(CloseCircleFilledIcon$1, {
    className: "".concat(classPrefix, "-input__suffix-clear"),
    onMouseDown: handleMouseDown,
    onClick: handleClear
  });
  if (type === "password" && typeof suffixIcon === "undefined") {
    if (renderType === "password") {
      suffixIconNew = /* @__PURE__ */ React.createElement(BrowseOffIcon$1, {
        className: "".concat(classPrefix, "-input__suffix-clear"),
        onClick: togglePasswordVisible
      });
    } else if (renderType === "text") {
      suffixIconNew = /* @__PURE__ */ React.createElement(BrowseIcon$1, {
        className: "".concat(classPrefix, "-input__suffix-clear"),
        onClick: togglePasswordVisible
      });
    }
  }
  var suffixIconContent = renderIcon(classPrefix, "suffix", parseTNode(suffixIconNew));
  var labelContent = isFunction(label) ? label() : label;
  var suffixContent = isFunction(suffix) ? suffix() : suffix;
  var limitNumberNode = limitNumber && showLimitNumber ? /* @__PURE__ */ React.createElement("div", {
    className: classNames$2("".concat(classPrefix, "-input__limit-number"), _defineProperty$2({}, "".concat(classPrefix, "-is-disabled"), disabled))
  }, limitNumber) : null;
  var updateInputWidth = function updateInputWidth2() {
    if (!autoWidth || !inputRef.current) return;
    var offsetWidth = inputPreRef.current.offsetWidth;
    var _inputPreRef$current$ = inputPreRef.current.getBoundingClientRect(), width = _inputPreRef$current$.width;
    var calcWidth = width < offsetWidth ? offsetWidth + 1 : width;
    inputRef.current.style.width = "".concat(calcWidth, "px");
  };
  useIsomorphicLayoutEffect(function() {
    requestAnimationFrame(function() {
      updateInputWidth();
    });
  }, [autoWidth, value, placeholder, inputRef, composingValue]);
  reactExports.useEffect(function() {
    var resizeObserver = null;
    if (typeof window.ResizeObserver === "undefined" || !inputRef.current) return;
    resizeObserver = new window.ResizeObserver(function() {
      updateInputWidth();
    });
    resizeObserver.observe(inputRef.current);
    return function() {
      var _resizeObserver$disco, _resizeObserver;
      (_resizeObserver$disco = (_resizeObserver = resizeObserver).disconnect) === null || _resizeObserver$disco === void 0 || _resizeObserver$disco.call(_resizeObserver);
      resizeObserver = null;
    };
  }, [inputRef]);
  reactExports.useEffect(function() {
    setRenderType(type);
  }, [type]);
  reactExports.useEffect(function() {
    if (value) {
      var limitedValue = getValueByLimitNumber(value);
      if (limitedValue.length !== value.length && !allowInputOverMax) {
        onChange === null || onChange === void 0 || onChange(limitedValue, {
          trigger: "initial"
        });
      }
    }
  }, []);
  var innerValue = composingRef.current ? composingValue : value !== null && value !== void 0 ? value : "";
  var formatDisplayValue = format && !isFocused ? format(innerValue) : innerValue;
  var renderInput = /* @__PURE__ */ React.createElement("input", {
    ref: inputRef,
    placeholder,
    type: renderType,
    className: classNames$2("".concat(classPrefix, "-input__inner"), _defineProperty$2({}, "".concat(classPrefix, "-input--soft-hidden"), !showInput)),
    value: formatDisplayValue,
    readOnly: isInnerInputReadonly,
    disabled,
    autoComplete: autocomplete !== null && autocomplete !== void 0 ? autocomplete : local.autocomplete || void 0,
    autoFocus: autofocus,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onKeyPress: handleKeyPress,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onPaste: handlePaste,
    name
  });
  var renderInputNode = /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(inputClass, "".concat(classPrefix, "-input"), (_classNames3 = {}, _defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_classNames3, "".concat(classPrefix, "-is-readonly"), readonly), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-focused"), isFocused), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large"), "".concat(classPrefix, "-align-").concat(align), align), "".concat(classPrefix, "-is-").concat(tStatus), tStatus && tStatus !== "default"), "".concat(classPrefix, "-input--prefix"), prefixIcon || labelContent), "".concat(classPrefix, "-input--suffix"), suffixIconContent || suffixContent), "".concat(classPrefix, "-input--borderless"), borderless), _defineProperty$2(_classNames3, "".concat(classPrefix, "-input--focused"), isFocused))),
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onWheel: function onWheel(e2) {
      return _onWheel === null || _onWheel === void 0 ? void 0 : _onWheel({
        e: e2
      });
    },
    onClick: function onClick(e2) {
      var _inputRef$current;
      (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 || _inputRef$current.focus();
      _onClick === null || _onClick === void 0 || _onClick({
        e: e2
      });
    }
  }, prefixIconContent, labelContent ? /* @__PURE__ */ React.createElement("div", {
    className: "".concat(classPrefix, "-input__prefix")
  }, labelContent) : null, renderInput, autoWidth && /* @__PURE__ */ React.createElement("span", {
    ref: inputPreRef,
    className: "".concat(classPrefix, "-input__input-pre")
  }, innerValue || placeholder), suffixContent || limitNumberNode ? /* @__PURE__ */ React.createElement("div", {
    className: "".concat(classPrefix, "-input__suffix")
  }, suffixContent, limitNumberNode) : null, suffixIconContent);
  function togglePasswordVisible() {
    if (disabled) return;
    var toggleType = renderType === "password" ? "text" : "password";
    setRenderType(toggleType);
  }
  function handleChange(e2) {
    var trigger = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "input";
    var newStr = e2.currentTarget.value;
    if (composingRef.current) {
      setComposingValue(newStr);
    } else {
      if (props.type !== "number") {
        newStr = getValueByLimitNumber(newStr);
      }
      setComposingValue(newStr);
      onChange(newStr, {
        e: e2,
        trigger
      });
    }
  }
  function handleMouseDown(e2) {
    e2.stopPropagation();
    e2.nativeEvent.stopImmediatePropagation();
  }
  function handleClear(e2) {
    onChange === null || onChange === void 0 || onChange("", {
      e: e2,
      trigger: "clear"
    });
    onClear === null || onClear === void 0 || onClear({
      e: e2
    });
  }
  function handleKeyDown(e2) {
    var key = e2.key, value2 = e2.currentTarget.value;
    key === "Enter" && (onEnter === null || onEnter === void 0 ? void 0 : onEnter(value2, {
      e: e2
    }));
    onKeydown === null || onKeydown === void 0 || onKeydown(value2, {
      e: e2
    });
  }
  function handleKeyUp(e2) {
    var value2 = e2.currentTarget.value;
    onKeyup === null || onKeyup === void 0 || onKeyup(value2, {
      e: e2
    });
  }
  function handleKeyPress(e2) {
    var value2 = e2.currentTarget.value;
    onKeypress === null || onKeypress === void 0 || onKeypress(value2, {
      e: e2
    });
  }
  function handleCompositionStart(e2) {
    composingRef.current = true;
    var value2 = e2.currentTarget.value;
    onCompositionstart === null || onCompositionstart === void 0 || onCompositionstart(value2, {
      e: e2
    });
  }
  function handleCompositionEnd(e2) {
    var value2 = e2.currentTarget.value;
    if (composingRef.current) {
      composingRef.current = false;
      handleChange(e2);
    }
    onCompositionend === null || onCompositionend === void 0 || onCompositionend(value2, {
      e: e2
    });
  }
  function handleFocus(e2) {
    if (isInnerInputReadonly) return;
    var value2 = e2.currentTarget.value;
    onFocus === null || onFocus === void 0 || onFocus(value2, {
      e: e2
    });
    toggleIsFocused(true);
  }
  function handleBlur(e2) {
    if (isInnerInputReadonly) return;
    var value2 = e2.currentTarget.value;
    onBlur === null || onBlur === void 0 || onBlur(value2, {
      e: e2
    });
    toggleIsFocused(false);
  }
  function handlePaste(e2) {
    var clipData = e2.clipboardData;
    var pasteValue = clipData === null || clipData === void 0 ? void 0 : clipData.getData("text/plain");
    onPaste === null || onPaste === void 0 || onPaste({
      e: e2,
      pasteValue
    });
  }
  function handleMouseEnter(e2) {
    !readonly && toggleIsHover(true);
    onMouseenter === null || onMouseenter === void 0 || onMouseenter({
      e: e2
    });
  }
  function handleMouseLeave(e2) {
    !readonly && toggleIsHover(false);
    onMouseleave === null || onMouseleave === void 0 || onMouseleave({
      e: e2
    });
  }
  reactExports.useImperativeHandle(ref, function() {
    return {
      currentElement: wrapperRef.current,
      inputElement: inputRef.current,
      focus: function focus() {
        var _inputRef$current2;
        return (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
      },
      blur: function blur() {
        var _inputRef$current3;
        return (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0 ? void 0 : _inputRef$current3.blur();
      },
      select: function select() {
        var _inputRef$current4;
        return (_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0 ? void 0 : _inputRef$current4.select();
      }
    };
  });
  return /* @__PURE__ */ React.createElement("div", _objectSpread$r({
    ref: wrapperRef,
    style,
    className: classNames$2("".concat(classPrefix, "-input__wrap"), className, _defineProperty$2({}, "".concat(classPrefix, "-input--auto-width"), autoWidth && !keepWrapperWidth))
  }, restProps), renderInputNode, tips && /* @__PURE__ */ React.createElement("div", {
    className: classNames$2("".concat(classPrefix, "-input__tips"), "".concat(classPrefix, "-input__tips--").concat(tStatus || "default"))
  }, tips));
}, {
  Group: InputGroup
});
Input$1.displayName = "Input";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Input = Input$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function getOffsetTopToContainer(element2, container) {
  var offsetTop = element2.offsetTop;
  var current = element2.offsetParent;
  while (current && current !== container) {
    offsetTop += current.offsetTop;
    current = current.offsetParent;
  }
  return offsetTop;
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useCommonClassName$1() {
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  return reactExports.useMemo(function() {
    var names2 = {
      SIZE: {
        "default": "",
        xs: "".concat(classPrefix, "-size-xs"),
        small: "".concat(classPrefix, "-size-s"),
        medium: "".concat(classPrefix, "-size-m"),
        large: "".concat(classPrefix, "-size-l"),
        xl: "".concat(classPrefix, "-size-xl"),
        block: "".concat(classPrefix, "-size-full-width")
      },
      STATUS: {
        loading: "".concat(classPrefix, "-is-loading"),
        disabled: "".concat(classPrefix, "-is-disabled"),
        focused: "".concat(classPrefix, "-is-focused"),
        success: "".concat(classPrefix, "-is-success"),
        error: "".concat(classPrefix, "-is-error"),
        warning: "".concat(classPrefix, "-is-warning"),
        selected: "".concat(classPrefix, "-is-selected"),
        active: "".concat(classPrefix, "-is-active"),
        checked: "".concat(classPrefix, "-is-checked"),
        current: "".concat(classPrefix, "-is-current"),
        hidden: "".concat(classPrefix, "-is-hidden"),
        visible: "".concat(classPrefix, "-is-visible"),
        expanded: "".concat(classPrefix, "-is-expanded"),
        indeterminate: "".concat(classPrefix, "-is-indeterminate")
      }
    };
    return {
      SIZE: names2.SIZE,
      STATUS: names2.STATUS,
      sizeClassNames: names2.SIZE,
      statusClassNames: names2.STATUS,
      classPrefix
    };
  }, [classPrefix]);
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var SPACE_REG = /^Space$/i;
var ENTER_REG = /^Enter$/i;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Distance = "32px";
var PlacementOffset = {
  center: {
    left: "50%",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)"
  },
  left: {
    left: Distance,
    top: "50%",
    transform: "translateY(-50%)"
  },
  bottom: {
    bottom: Distance,
    left: "50%",
    transform: "translateX(-50%)"
  },
  right: {
    right: Distance,
    top: "50%",
    transform: "translateY(-50%)"
  },
  top: {
    top: Distance,
    left: "50%",
    transform: "translateX(-50%)"
  },
  "top-left": {
    left: Distance,
    top: Distance
  },
  "top-right": {
    right: Distance,
    top: Distance
  },
  "bottom-left": {
    left: Distance,
    bottom: Distance
  },
  "bottom-right": {
    right: Distance,
    bottom: Distance
  }
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useMessageClass() {
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var tdMessagePrefix = "".concat(classPrefix, "-message");
  var tdMessageListClass = "".concat(tdMessagePrefix, "__list");
  var tdClassIsGenerator = function tdClassIsGenerator2(append) {
    return "".concat(classPrefix, "-is-").concat(append);
  };
  var tdMessageClassGenerator = function tdMessageClassGenerator2(append) {
    return "".concat(tdMessagePrefix, "__").concat(append);
  };
  var tdMessagePlacementClassGenerator = function tdMessagePlacementClassGenerator2(placement) {
    return "".concat(tdMessagePrefix, "-placement--").concat(placement);
  };
  return {
    tdMessagePrefix,
    tdMessageListClass,
    tdClassIsGenerator,
    tdMessageClassGenerator,
    tdMessagePlacementClassGenerator
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function MessageClose(_ref) {
  var closeBtn = _ref.closeBtn, onCloseBtnClick = _ref.onCloseBtnClick;
  var _useMessageClass = useMessageClass(), tdMessageClassGenerator = _useMessageClass.tdMessageClassGenerator;
  var _useGlobalIcon = useGlobalIcon({
    CloseIcon
  }), CloseIcon$1 = _useGlobalIcon.CloseIcon;
  var relCloseBtn = closeBtn;
  if (typeof closeBtn === "function") {
    relCloseBtn = closeBtn();
  }
  if (!relCloseBtn) {
    return null;
  }
  if (typeof relCloseBtn === "string" || typeof relCloseBtn === "number") {
    return /* @__PURE__ */ React.createElement("span", {
      className: tdMessageClassGenerator("close"),
      onClick: function onClick(e2) {
        return onCloseBtnClick === null || onCloseBtnClick === void 0 ? void 0 : onCloseBtnClick({
          e: e2
        });
      }
    }, closeBtn);
  }
  if (/* @__PURE__ */ React.isValidElement(relCloseBtn)) {
    var _onClick = relCloseBtn.props.onClick;
    return /* @__PURE__ */ React.cloneElement(relCloseBtn, {
      className: classNames$2(relCloseBtn.props.className, tdMessageClassGenerator("close")),
      onClick: function onClick(e2) {
        _onClick === null || _onClick === void 0 || _onClick(e2);
        onCloseBtnClick === null || onCloseBtnClick === void 0 || onCloseBtnClick({
          e: e2
        });
      }
    });
  }
  return /* @__PURE__ */ React.createElement(CloseIcon$1, {
    className: tdMessageClassGenerator("close"),
    onClick: function onClick(e2) {
      return onCloseBtnClick === null || onCloseBtnClick === void 0 ? void 0 : onCloseBtnClick({
        e: e2
      });
    }
  });
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function MessageIcon(_ref) {
  var theme = _ref.theme, onCloseBtnClick = _ref.onCloseBtnClick;
  var _useGlobalIcon = useGlobalIcon({
    CheckCircleFilledIcon,
    ErrorCircleFilledIcon,
    HelpCircleFilledIcon,
    InfoCircleFilledIcon
  }), CheckCircleFilledIcon$1 = _useGlobalIcon.CheckCircleFilledIcon, ErrorCircleFilledIcon$1 = _useGlobalIcon.ErrorCircleFilledIcon, HelpCircleFilledIcon$1 = _useGlobalIcon.HelpCircleFilledIcon, InfoCircleFilledIcon$1 = _useGlobalIcon.InfoCircleFilledIcon;
  var iconMap = {
    info: InfoCircleFilledIcon$1,
    success: CheckCircleFilledIcon$1,
    warning: ErrorCircleFilledIcon$1,
    error: ErrorCircleFilledIcon$1,
    question: HelpCircleFilledIcon$1,
    loading: Loading2
  };
  var Icon = iconMap[theme];
  if (theme === "loading") {
    return /* @__PURE__ */ React.createElement(Icon, {
      loading: true
    });
  }
  return Icon ? /* @__PURE__ */ React.createElement(Icon, {
    onClick: function onClick(e2) {
      return onCloseBtnClick === null || onCloseBtnClick === void 0 ? void 0 : onCloseBtnClick({
        e: e2
      });
    }
  }) : null;
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function usePersistFn(fn2) {
  var fnRef = reactExports.useRef(fn2);
  fnRef.current = fn2;
  var persistFn = reactExports.useRef(null);
  if (!persistFn.current) {
    persistFn.current = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return persistFn.current;
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var MessageComponent = function MessageComponent2(props) {
  var _useMessageClass = useMessageClass(), tdMessagePrefix = _useMessageClass.tdMessagePrefix, tdClassIsGenerator = _useMessageClass.tdClassIsGenerator;
  var _props$theme = props.theme, theme = _props$theme === void 0 ? "info" : _props$theme, className = props.className, children = props.children, style = props.style, _props$icon = props.icon, icon = _props$icon === void 0 ? true : _props$icon, content = props.content, closeBtn = props.closeBtn, _props$onCloseBtnClic = props.onCloseBtnClick, onCloseBtnClick = _props$onCloseBtnClic === void 0 ? noop : _props$onCloseBtnClic, _props$onDurationEnd = props.onDurationEnd, onDurationEnd = _props$onDurationEnd === void 0 ? noop : _props$onDurationEnd, _props$onClose = props.onClose, onClose = _props$onClose === void 0 ? noop : _props$onClose, duration = props.duration;
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), isHovering = _useState2[0], setIsHovering = _useState2[1];
  var onCloseFn = usePersistFn(onClose);
  var onDurationEndFn = usePersistFn(onDurationEnd);
  var onCloseBtnClickFn = usePersistFn(onCloseBtnClick);
  function handleCloseBtnClick(e2) {
    onCloseBtnClickFn(e2);
    onCloseFn({
      trigger: "close-click"
    });
  }
  reactExports.useEffect(function() {
    if (!isHovering && duration > 0) {
      var timer = setTimeout(function() {
        onDurationEndFn();
        onCloseFn({
          trigger: "duration-end"
        });
      }, duration);
      return function() {
        clearTimeout(timer);
      };
    }
  }, [duration, isHovering, onCloseFn, onDurationEndFn]);
  return /* @__PURE__ */ React.createElement("div", {
    key: "message",
    style,
    className: classNames$2(className, "".concat(tdMessagePrefix), tdClassIsGenerator(theme), closeBtn ? tdClassIsGenerator("closable") : ""),
    onMouseEnter: function onMouseEnter() {
      return setIsHovering(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovering(false);
    }
  }, icon === true ? /* @__PURE__ */ React.createElement(MessageIcon, {
    theme
  }) : icon, content ? content : children, /* @__PURE__ */ React.createElement(MessageClose, {
    closeBtn,
    onCloseBtnClick: handleCloseBtnClick
  }));
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var messageDefaultProps = {
  closeBtn: void 0,
  duration: 3e3,
  icon: true,
  theme: "info"
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$q(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$q(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$q(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$q(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var globalConfig = {
  top: 32
};
var messageDefaultConfig = _objectSpread$q(_objectSpread$q({}, messageDefaultProps), {}, {
  duration: 3e3,
  placement: "top",
  zIndex: 5e3
});
var getMessageConfig = function getMessageConfig2(options) {
  var currentOptions = _objectSpread$q({}, options);
  for (var i in currentOptions) {
    if (typeof currentOptions[i] === "undefined") {
      delete currentOptions[i];
    }
  }
  if (typeof currentOptions.duration !== "number" || currentOptions.duration < 0) {
    delete currentOptions.duration;
  }
  return _objectSpread$q(_objectSpread$q({}, messageDefaultConfig), currentOptions);
};
var setGlobalConfig2 = function setGlobalConfig3(options) {
  messageDefaultConfig = _objectSpread$q({}, getMessageConfig(options));
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$p(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$p(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$p(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$p(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var MessageList = [];
var keyIndex = 1;
var MessageContainer = function MessageContainer2(props) {
  var placement = props.placement, children = props.children, zIndex = props.zIndex, id = props.id, renderCallback = props.renderCallback;
  var style = {
    zIndex
  };
  Object.keys(PlacementOffset[placement]).forEach(function(key) {
    style[key] = PlacementOffset[placement][key];
  });
  if (placement.includes("top")) {
    style.top = "".concat(globalConfig.top, "px");
  }
  reactExports.useEffect(function() {
    renderCallback();
  }, []);
  var _useMessageClass = useMessageClass(), tdMessagePlacementClassGenerator = _useMessageClass.tdMessagePlacementClassGenerator, tdMessageListClass = _useMessageClass.tdMessageListClass;
  return /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(tdMessageListClass, tdMessagePlacementClassGenerator(placement)),
    style,
    id
  }, children);
};
function createContainer(_ref) {
  var attach = _ref.attach, zIndex = _ref.zIndex, _ref$placement = _ref.placement, placement = _ref$placement === void 0 ? "top" : _ref$placement;
  return new Promise(function(resolve) {
    var mountedDom = document.body;
    if (typeof attach === "string") {
      var result = document.querySelectorAll(attach);
      if (result.length >= 1) {
        mountedDom = result[0];
      }
    } else if (typeof attach === "function") {
      mountedDom = attach();
    }
    var containerId = "tdesign-message-container--".concat(placement);
    var container = Array.from(mountedDom.querySelectorAll("#".concat(containerId)));
    if (container.length < 1) {
      var div = document.createElement("div");
      var mGlobalConfig = ConfigProvider.getGlobalConfig();
      render$2(/* @__PURE__ */ React.createElement(PluginContainer, {
        globalConfig: mGlobalConfig
      }, /* @__PURE__ */ React.createElement(MessageContainer, {
        id: containerId,
        placement,
        zIndex,
        renderCallback: function renderCallback() {
          mountedDom.appendChild(div);
          var container2 = Array.from(mountedDom.querySelectorAll("#".concat(containerId)));
          resolve(container2[0]);
        }
      })), div);
    } else {
      resolve(container[0]);
    }
  });
}
function renderElement(_x, _x2) {
  return _renderElement.apply(this, arguments);
}
function _renderElement() {
  _renderElement = _asyncToGenerator(/* @__PURE__ */ regenerator.mark(function _callee(theme, config2) {
    var container, content, offset2, _config$onClose, _onClose, div, message, style, _offset, left2, top2;
    return regenerator.wrap(function(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 1;
          return createContainer(config2);
        case 1:
          container = _context.sent;
          content = config2.content, offset2 = config2.offset, _config$onClose = config2.onClose, _onClose = _config$onClose === void 0 ? noop : _config$onClose;
          div = document.createElement("div");
          keyIndex += 1;
          message = {
            close: function close() {
              unmount(div);
              div.remove();
              message.closed = true;
              var index = MessageList.indexOf(message);
              if (index >= 0) {
                MessageList.splice(index, 1);
              }
            },
            key: keyIndex,
            closed: false
          };
          style = _objectSpread$p({}, config2.style);
          if (Array.isArray(offset2) && offset2.length === 2) {
            _offset = _slicedToArray(offset2, 2), left2 = _offset[0], top2 = _offset[1];
            style = _objectSpread$p(_objectSpread$p({
              left: left2,
              top: top2
            }, style), {}, {
              position: "relative"
            });
          }
          return _context.abrupt("return", new Promise(function(resolve) {
            var mGlobalConfig = ConfigProvider.getGlobalConfig();
            render$2(/* @__PURE__ */ React.createElement(PluginContainer, {
              globalConfig: mGlobalConfig
            }, /* @__PURE__ */ React.createElement(MessageComponent, _objectSpread$p(_objectSpread$p({
              key: keyIndex
            }, config2), {}, {
              theme,
              style,
              onClose: function onClose(ctx) {
                _onClose(ctx);
                message.close();
              }
            }), content)), div);
            container.appendChild(div);
            MessageList.push(message);
            resolve(message);
          }));
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _renderElement.apply(this, arguments);
}
function isConfig(content) {
  return Object.prototype.toString.call(content) === "[object Object]" && !!content.content;
}
var messageMethod = function messageMethod2(theme, content, duration) {
  var config2 = {};
  if (isConfig(content)) {
    config2 = _objectSpread$p({
      duration
    }, content);
  } else {
    config2 = {
      content,
      duration
    };
  }
  return renderElement(theme, getMessageConfig(config2));
};
var MessagePlugin$1 = function MessagePlugin(theme, message, duration) {
  return messageMethod(theme, message, duration);
};
MessagePlugin$1.info = function(content, duration) {
  return messageMethod("info", content, duration);
};
MessagePlugin$1.error = function(content, duration) {
  return messageMethod("error", content, duration);
};
MessagePlugin$1.warning = function(content, duration) {
  return messageMethod("warning", content, duration);
};
MessagePlugin$1.success = function(content, duration) {
  return messageMethod("success", content, duration);
};
MessagePlugin$1.question = function(content, duration) {
  return messageMethod("question", content, duration);
};
MessagePlugin$1.loading = function(content, duration) {
  return messageMethod("loading", content, duration);
};
MessagePlugin$1.config = function(options) {
  return setGlobalConfig2(options);
};
MessagePlugin$1.close = function(messageInstance) {
  messageInstance.then(function(instance) {
    return instance.close();
  });
};
MessagePlugin$1.closeAll = function() {
  MessageList.forEach(function(message) {
    typeof message.close === "function" && message.close();
  });
  MessageList = [];
  return;
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var MessagePlugin2 = MessagePlugin$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var selectDefaultProps = {
  autoWidth: false,
  autofocus: false,
  borderless: false,
  clearable: false,
  creatable: false,
  loading: false,
  max: 0,
  minCollapsedNum: 0,
  multiple: false,
  placeholder: void 0,
  readonly: false,
  reserveKeyword: false,
  showArrow: true,
  size: "medium",
  status: "default",
  valueType: "value"
};
var optionGroupDefaultProps = {
  divider: true
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var OptionGroup = function OptionGroup2(props) {
  var _useDefaultProps = useDefaultProps(props, optionGroupDefaultProps), children = _useDefaultProps.children, label = _useDefaultProps.label, divider = _useDefaultProps.divider;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  return /* @__PURE__ */ React.createElement("li", {
    className: classNames$2("".concat(classPrefix, "-select-option-group"), _defineProperty$2({}, "".concat(classPrefix, "-select-option-group__divider"), divider))
  }, (label !== null && label !== void 0 ? label : false) && /* @__PURE__ */ React.createElement("div", {
    className: "".concat(classPrefix, "-select-option-group__header")
  }, label), children);
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var componentType = "select";
var Option = function Option2(props) {
  var propDisabled = props.disabled, propLabel = props.label, propTitle = props.title, selectedValue = props.selectedValue, checkAll = props.checkAll, multiple = props.multiple, size = props.size, max2 = props.max, keys2 = props.keys, value = props.value, onSelect = props.onSelect, children = props.children, content = props.content, restData = props.restData, style = props.style, className = props.className, isVirtual = props.isVirtual;
  var selected;
  var indeterminate;
  var label = propLabel || value;
  var disabled = propDisabled || multiple && Array.isArray(selectedValue) && max2 && selectedValue.length >= max2;
  var titleContent = reactExports.useMemo(function() {
    var controlledTitle = Reflect.has(props, "title");
    if (controlledTitle) return propTitle;
    if (typeof label === "string") return label;
    return null;
  }, [propTitle, label]);
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var _useDomRefCallback = useDomRefCallback(), _useDomRefCallback2 = _slicedToArray(_useDomRefCallback, 2), optionRef = _useDomRefCallback2[0], setRefCurrent = _useDomRefCallback2[1];
  reactExports.useEffect(function() {
    if (isVirtual && optionRef) {
      var _props$onRowMounted;
      (_props$onRowMounted = props.onRowMounted) === null || _props$onRowMounted === void 0 || _props$onRowMounted.call(props, {
        ref: optionRef,
        data: props
      });
    }
  }, [isVirtual, optionRef]);
  useRipple(optionRef);
  if (!multiple) {
    selected = isNumber(selectedValue) || isString(selectedValue) ? value === selectedValue : value === get(selectedValue, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value");
  }
  if (multiple && Array.isArray(selectedValue)) {
    selected = selectedValue.some(function(item) {
      if (isNumber(item) || isString(item)) {
        return item === value;
      }
      return get(item, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value") === value;
    });
    if (props.checkAll) {
      selected = selectedValue.length === props.optionLength;
      indeterminate = selectedValue.length > 0 && !selected;
    }
  }
  var handleSelect = function handleSelect2(event) {
    if (!disabled && !checkAll) {
      onSelect(value, {
        label: String(label),
        selected,
        event,
        restData
      });
    }
    if (checkAll) {
      var _props$onCheckAllChan;
      (_props$onCheckAllChan = props.onCheckAllChange) === null || _props$onCheckAllChan === void 0 || _props$onCheckAllChan.call(props, selected, event);
    }
  };
  var renderItem = function renderItem2(children2) {
    if (multiple) {
      return /* @__PURE__ */ React.createElement("label", {
        className: classNames$2("".concat(classPrefix, "-checkbox"), _defineProperty$2(_defineProperty$2(_defineProperty$2({}, "".concat(classPrefix, "-is-indeterminate"), indeterminate), "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-checked"), selected)),
        title: titleContent
      }, /* @__PURE__ */ React.createElement("input", {
        type: "checkbox",
        className: classNames$2("".concat(classPrefix, "-checkbox__former")),
        value: "",
        disabled: disabled && !selected,
        onClick: function onClick(e2) {
          e2.stopPropagation();
          e2.nativeEvent.stopImmediatePropagation();
        }
      }), /* @__PURE__ */ React.createElement("span", {
        className: classNames$2("".concat(classPrefix, "-checkbox__input"))
      }), /* @__PURE__ */ React.createElement("span", {
        className: classNames$2("".concat(classPrefix, "-checkbox__label"))
      }, children2 || content || label));
    }
    return /* @__PURE__ */ React.createElement("span", {
      title: titleContent
    }, children2 || content || label);
  };
  return /* @__PURE__ */ React.createElement("li", {
    className: classNames$2(className, "".concat(classPrefix, "-").concat(componentType, "-option"), _defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2({}, "".concat(classPrefix, "-is-disabled"), disabled), "".concat(classPrefix, "-is-selected"), selected), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large")),
    key: value,
    onClick: handleSelect,
    ref: setRefCurrent,
    style
  }, renderItem(children));
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$1$1(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$1$1(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1$1(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function isSelectOptionGroup(option) {
  return !!option && "group" in option && "children" in option;
}
function UseOptions(keys2, options, children, valueType, value, reserveKeyword) {
  var _useState = reactExports.useState({}), _useState2 = _slicedToArray(_useState, 2), valueToOption = _useState2[0], setValueToOption = _useState2[1];
  var _useState3 = reactExports.useState([]), _useState4 = _slicedToArray(_useState3, 2), currentOptions = _useState4[0], setCurrentOptions = _useState4[1];
  var _useState5 = reactExports.useState([]), _useState6 = _slicedToArray(_useState5, 2), tmpPropOptions = _useState6[0], setTmpPropOptions = _useState6[1];
  var _useState7 = reactExports.useState([]), _useState8 = _slicedToArray(_useState7, 2), selectedOptions = _useState8[0], setSelectedOptions = _useState8[1];
  reactExports.useEffect(function() {
    var transformedOptions = options;
    var arrayChildren = React.Children.toArray(children);
    var optionChildren = arrayChildren.filter(function(v2) {
      return v2.type === Option || v2.type === OptionGroup;
    });
    var isChildrenFilterable = arrayChildren.length > 0 && optionChildren.length === arrayChildren.length;
    if (reserveKeyword && currentOptions.length && isChildrenFilterable) return;
    if (isChildrenFilterable) {
      var _handlerOptionElement = function handlerOptionElement(v2) {
        if (/* @__PURE__ */ React.isValidElement(v2)) {
          if (v2.type === OptionGroup) {
            var _v$props$children;
            return _objectSpread$1$1(_objectSpread$1$1({}, v2.props), {}, {
              group: v2.props.label,
              children: (_v$props$children = v2.props.children) === null || _v$props$children === void 0 ? void 0 : _v$props$children.map(function(v22) {
                return _handlerOptionElement(v22);
              })
            });
          }
          return _objectSpread$1$1(_objectSpread$1$1({}, v2.props), {}, {
            label: v2.props.label || v2.props.children
          });
        }
        return {
          label: v2
        };
      };
      transformedOptions = arrayChildren === null || arrayChildren === void 0 ? void 0 : arrayChildren.map(function(v2) {
        return _handlerOptionElement(v2);
      });
    }
    if (keys2) {
      var _transformedOptions;
      transformedOptions = (_transformedOptions = transformedOptions) === null || _transformedOptions === void 0 ? void 0 : _transformedOptions.map(function(option) {
        return _objectSpread$1$1(_objectSpread$1$1({}, option), {}, {
          value: get(option, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"),
          label: get(option, (keys2 === null || keys2 === void 0 ? void 0 : keys2.label) || "label")
        });
      });
    }
    setCurrentOptions(transformedOptions);
    setTmpPropOptions(transformedOptions);
    setValueToOption(getValueToOption(children, options, keys2) || {});
  }, [options, keys2, children, reserveKeyword]);
  reactExports.useEffect(function() {
    var valueKey = (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value";
    var labelKey = (keys2 === null || keys2 === void 0 ? void 0 : keys2.label) || "label";
    setSelectedOptions(function(oldSelectedOptions) {
      var createOptionFromValue = function createOptionFromValue2(item) {
        if (valueType === "value") {
          return valueToOption[item] || oldSelectedOptions.find(function(option2) {
            return get(option2, valueKey) === item;
          }) || _defineProperty$2(_defineProperty$2({}, valueKey, item), labelKey, item);
        }
        if (_typeof$2(item) === "object" && item !== null) {
          return item;
        }
        return [];
      };
      if (Array.isArray(value)) {
        return value.map(createOptionFromValue);
      }
      if (value !== void 0 && value !== null) {
        var option = createOptionFromValue(value);
        return option ? [option] : [];
      }
      return [];
    });
  }, [value, keys2, valueType, valueToOption, setSelectedOptions]);
  return {
    currentOptions,
    setCurrentOptions,
    tmpPropOptions,
    setTmpPropOptions,
    valueToOption,
    setValueToOption,
    selectedOptions,
    setSelectedOptions
  };
}
function ownKeys$o(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$o(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$o(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$o(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function setValueToOptionFormOptionDom(dom, valueToOption, keys2) {
  var _dom$props = dom.props, value = _dom$props.value, label = _dom$props.label, children = _dom$props.children;
  valueToOption[value] = _objectSpread$o(_objectSpread$o({}, dom.props), {}, _defineProperty$2(_defineProperty$2({}, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value", value), (keys2 === null || keys2 === void 0 ? void 0 : keys2.label) || "label", label || children || value));
}
var getValueToOption = function getValueToOption2(children, options, keys2) {
  var valueToOption = {};
  if (Array.isArray(options)) {
    options.forEach(function(option) {
      if (isSelectOptionGroup(option)) {
        var _option$children;
        (_option$children = option.children) === null || _option$children === void 0 || _option$children.forEach(function(child) {
          valueToOption[get(child, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value")] = _objectSpread$o(_objectSpread$o({}, child), {}, {
            value: get(child, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"),
            label: get(child, (keys2 === null || keys2 === void 0 ? void 0 : keys2.label) || "label")
          });
        });
      } else {
        valueToOption[get(option, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value")] = _objectSpread$o(_objectSpread$o({}, option), {}, {
          value: get(option, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"),
          label: get(option, (keys2 === null || keys2 === void 0 ? void 0 : keys2.label) || "label")
        });
      }
    });
    return valueToOption;
  }
  if (isPlainObject(children)) {
    if (children.type === Option) {
      setValueToOptionFormOptionDom(children, valueToOption, keys2);
      return valueToOption;
    }
    if (children.type === OptionGroup) {
      var groupChildren = children.props.children;
      if (Array.isArray(groupChildren)) {
        groupChildren.forEach(function(item) {
          setValueToOptionFormOptionDom(item, valueToOption, keys2);
        });
        return valueToOption;
      }
    }
  }
  if (Array.isArray(children)) {
    var _handlerElement = function handlerElement(item) {
      if (item.type === Option) {
        setValueToOptionFormOptionDom(item, valueToOption, keys2);
      }
      if (item.type === OptionGroup) {
        var _groupChildren = item.props.children;
        if (Array.isArray(_groupChildren)) {
          _groupChildren.forEach(function(groupItem) {
            setValueToOptionFormOptionDom(groupItem, valueToOption, keys2);
          });
        }
      }
      if (Array.isArray(item)) {
        item.forEach(function(child) {
          _handlerElement(child);
        });
      }
    };
    children.forEach(function(item) {
      return _handlerElement(item);
    });
  }
  return valueToOption;
};
var getSelectValueArr = function getSelectValueArr2(values, activeValue, selected, valueType, keys2, objVal) {
  values = Array.isArray(values) ? values : [];
  if (Array.isArray(values)) {
    var currentValues = _toConsumableArray(values);
    var isValueObj = valueType === "object";
    if (selected) {
      currentValues = currentValues.filter(function(item2) {
        if (isValueObj) {
          if (isPlainObject(activeValue)) {
            return get(item2, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value") !== get(activeValue, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value");
          }
          return get(item2, (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value") !== activeValue;
        }
        return item2 !== activeValue;
      });
    } else {
      var item = isValueObj ? objVal : activeValue;
      currentValues.push(item);
    }
    return currentValues;
  }
};
var getSelectedOptions = function getSelectedOptions2(value, multiple, valueType, keys2, valueToOption, selectedValue) {
  var isObjectType = valueType === "object";
  var currentSelectedOptions = [];
  var currentOption;
  var allSelectedValue;
  var tmpPropOptions = Object.values(valueToOption);
  if (multiple) {
    var _tmpPropOptions$filte, _currentSelectedOptio, _currentSelectedOptio2;
    currentSelectedOptions = isObjectType ? value : tmpPropOptions === null || tmpPropOptions === void 0 || (_tmpPropOptions$filte = tmpPropOptions.filter) === null || _tmpPropOptions$filte === void 0 ? void 0 : _tmpPropOptions$filte.call(tmpPropOptions, function(v2) {
      var _value$includes;
      return (_value$includes = value.includes) === null || _value$includes === void 0 ? void 0 : _value$includes.call(value, v2[(keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"]);
    });
    allSelectedValue = isObjectType ? currentSelectedOptions : (_currentSelectedOptio = currentSelectedOptions) === null || _currentSelectedOptio === void 0 ? void 0 : _currentSelectedOptio.map(function(v2) {
      return v2[(keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"];
    });
    currentOption = isObjectType ? value.find(function(v2) {
      return v2[(keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"] === selectedValue;
    }) : (_currentSelectedOptio2 = currentSelectedOptions) === null || _currentSelectedOptio2 === void 0 ? void 0 : _currentSelectedOptio2.find(function(option) {
      return option[(keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"] === selectedValue;
    });
  } else {
    var _tmpPropOptions$filte2, _currentSelectedOptio3;
    currentSelectedOptions = isObjectType ? [value] : (tmpPropOptions === null || tmpPropOptions === void 0 || (_tmpPropOptions$filte2 = tmpPropOptions.filter) === null || _tmpPropOptions$filte2 === void 0 ? void 0 : _tmpPropOptions$filte2.call(tmpPropOptions, function(v2) {
      return value === v2[(keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"];
    })) || [];
    allSelectedValue = currentSelectedOptions;
    currentOption = isObjectType ? value : (_currentSelectedOptio3 = currentSelectedOptions) === null || _currentSelectedOptio3 === void 0 ? void 0 : _currentSelectedOptio3.find(function(option) {
      return option[(keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"] === selectedValue;
    });
  }
  return {
    currentSelectedOptions,
    currentOption,
    allSelectedValue
  };
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function FakeArrow(props) {
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  return /* @__PURE__ */ React.createElement("svg", {
    style: props.style,
    className: classNames$2("".concat(classPrefix, "-fake-arrow"), _defineProperty$2({}, "".concat(classPrefix, "-fake-arrow--active"), (props === null || props === void 0 ? void 0 : props.isActive) && !(props !== null && props !== void 0 && props.disabled)), props === null || props === void 0 ? void 0 : props.className),
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M3.75 5.7998L7.99274 10.0425L12.2361 5.79921",
    stroke: "black",
    strokeOpacity: "0.9",
    strokeWidth: "1.3"
  }));
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$n(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$n(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$n(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$n(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var COMMON_PROPERTIES = ["status", "clearable", "disabled", "label", "placeholder", "readonly", "suffix", "suffixIcon", "onPaste", "onEnter", "onMouseenter", "onMouseleave", "size", "prefixIcon"];
var DEFAULT_KEYS$1 = {
  label: "label"
};
function getInputValue(value, keys2) {
  var iKeys = keys2 || DEFAULT_KEYS$1;
  return isObject(value) ? value[iKeys.label] : value;
}
function useSingle(props) {
  var value = props.value, keys2 = props.keys, loading = props.loading;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var inputRef = reactExports.useRef(null);
  var _useControlled = useControlled(props, "inputValue", props.onInputChange), _useControlled2 = _slicedToArray(_useControlled, 2), inputValue = _useControlled2[0], setInputValue = _useControlled2[1];
  var commonInputProps = _objectSpread$n(_objectSpread$n({}, pick(props, COMMON_PROPERTIES)), {}, {
    suffixIcon: loading ? /* @__PURE__ */ React.createElement(Loading2, {
      loading: true,
      size: "small"
    }) : props.suffixIcon
  });
  var onInnerClear = function onInnerClear2(context) {
    var _context$e, _props$onClear;
    context === null || context === void 0 || (_context$e = context.e) === null || _context$e === void 0 || _context$e.stopPropagation();
    (_props$onClear = props.onClear) === null || _props$onClear === void 0 || _props$onClear.call(props, context);
    setInputValue("", {
      trigger: "clear"
    });
  };
  var onInnerInputChange = function onInnerInputChange2(value2, context) {
    if (props.allowInput) {
      setInputValue(value2, _objectSpread$n(_objectSpread$n({}, context), {}, {
        trigger: "input"
      }));
    }
  };
  var handleEmptyPanelBlur = function handleEmptyPanelBlur2(value2, _ref) {
    var _props$onBlur;
    var e2 = _ref.e;
    (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, value2, {
      e: e2,
      inputValue: value2
    });
  };
  var renderSelectSingle = function renderSelectSingle2(popupVisible) {
    var _props$inputProps;
    var singleValueDisplay = !props.multiple ? props.valueDisplay : null;
    var displayedValue = popupVisible && props.allowInput ? inputValue : getInputValue(value, keys2);
    return /* @__PURE__ */ React.createElement(Input, _objectSpread$n(_objectSpread$n(_objectSpread$n({
      ref: inputRef
    }, commonInputProps), {}, {
      autoWidth: props.autoWidth,
      allowInput: props.allowInput,
      placeholder: singleValueDisplay ? "" : props.placeholder,
      value: singleValueDisplay ? " " : displayedValue,
      label: (props.label || singleValueDisplay) && /* @__PURE__ */ React.createElement(React.Fragment, null, props.label, singleValueDisplay),
      onChange: onInnerInputChange,
      onClear: onInnerClear,
      onFocus: function onFocus(val, context) {
        var _props$onFocus;
        (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, value, _objectSpread$n(_objectSpread$n({}, context), {}, {
          inputValue: val
        }));
      },
      onEnter: function onEnter(val, context) {
        var _props$onEnter;
        (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, value, _objectSpread$n(_objectSpread$n({}, context), {}, {
          inputValue: val
        }));
      },
      onBlur: !props.panel ? handleEmptyPanelBlur : null
    }, props.inputProps), {}, {
      inputClass: classNames$2((_props$inputProps = props.inputProps) === null || _props$inputProps === void 0 ? void 0 : _props$inputProps.className, _defineProperty$2(_defineProperty$2({}, "".concat(classPrefix, "-input--focused"), popupVisible), "".concat(classPrefix, "-is-focused"), popupVisible))
    }));
  };
  return {
    inputRef,
    commonInputProps,
    singleInputValue: inputValue,
    onInnerClear,
    renderSelectSingle
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var useInsertionEffect = typeof window !== "undefined" ? React.useInsertionEffect || React.useLayoutEffect : noop;
function useEventCallbackShouldNotBeInvokedBeforeMount() {
  throw new Error("INVALID_USEEVENTCALLBACK_INVOCATION: the callback from useEventCallback cannot be invoked before the component has mounted.");
}
function useEventCallback(callback) {
  var latestRef = React.useRef(useEventCallbackShouldNotBeInvokedBeforeMount);
  useInsertionEffect(function() {
    latestRef.current = callback;
  }, [callback]);
  var stableRef = React.useRef(null);
  if (!stableRef.current) {
    stableRef.current = function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return latestRef.current.apply(this, args);
    };
  }
  return stableRef.current;
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useDragSorter(props) {
  var sortOnDraggable = props.sortOnDraggable, onDragSort = props.onDragSort, onDragOverCheck = props.onDragOverCheck;
  var _useState = reactExports.useState(-1), _useState2 = _slicedToArray(_useState, 2), draggingIndex = _useState2[0], setDraggingIndex = _useState2[1];
  var _useState3 = reactExports.useState(null), _useState4 = _slicedToArray(_useState3, 2), dragStartData = _useState4[0], setDragStartData = _useState4[1];
  var _useState5 = reactExports.useState(null), _useState6 = _slicedToArray(_useState5, 2);
  _useState6[0];
  var setIsDropped = _useState6[1];
  var _useState7 = reactExports.useState({
    nodeX: 0,
    nodeWidth: 0,
    mouseX: 0
  }), _useState8 = _slicedToArray(_useState7, 2), startInfo = _useState8[0], setStartInfo = _useState8[1];
  var onDragSortEvent = useEventCallback(onDragSort);
  var _onDragOver = reactExports.useCallback(function(e2, index, record) {
    var _e$target;
    e2.preventDefault();
    if (draggingIndex === index || draggingIndex === -1) return;
    if (onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.targetClassNameRegExp && !(onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.targetClassNameRegExp.test((_e$target = e2.target) === null || _e$target === void 0 ? void 0 : _e$target.className))) {
      return;
    }
    if (onDragOverCheck !== null && onDragOverCheck !== void 0 && onDragOverCheck.x) {
      if (!startInfo.nodeWidth) return;
      var _e$target$getBounding = e2.target.getBoundingClientRect(), x2 = _e$target$getBounding.x, width = _e$target$getBounding.width;
      var targetNodeMiddleX = x2 + width / 2;
      var clientX = e2.clientX || 0;
      var draggingNodeLeft = clientX - (startInfo.mouseX - startInfo.nodeX);
      var draggingNodeRight = draggingNodeLeft + startInfo.nodeWidth;
      var overlap = false;
      if (draggingNodeLeft > x2 && draggingNodeLeft < x2 + width) {
        overlap = draggingNodeLeft < targetNodeMiddleX;
      } else {
        overlap = draggingNodeRight > targetNodeMiddleX;
      }
      if (!overlap) return;
    }
    onDragSortEvent({
      currentIndex: draggingIndex,
      current: dragStartData,
      target: record,
      targetIndex: index
    });
    setDraggingIndex(index);
  }, [draggingIndex, onDragOverCheck === null || onDragOverCheck === void 0 ? void 0 : onDragOverCheck.targetClassNameRegExp, onDragOverCheck === null || onDragOverCheck === void 0 ? void 0 : onDragOverCheck.x, dragStartData, startInfo.nodeWidth, startInfo.mouseX, startInfo.nodeX, onDragSortEvent]);
  if (!sortOnDraggable) {
    return {};
  }
  function _onDragStart(e2, index, record) {
    setDraggingIndex(index);
    setDragStartData(record);
    if (onDragOverCheck) {
      var _e$target$getBounding2 = e2.target.getBoundingClientRect(), x2 = _e$target$getBounding2.x, width = _e$target$getBounding2.width;
      setStartInfo({
        nodeX: x2,
        nodeWidth: width,
        mouseX: e2.clientX || 0
      });
    }
  }
  function _onDrop() {
    setIsDropped(true);
  }
  function _onDragEnd() {
    setIsDropped(false);
    setDraggingIndex(-1);
    setDragStartData(null);
  }
  function getDragProps(index, record) {
    if (sortOnDraggable) {
      return {
        draggable: true,
        onDragStart: function onDragStart(e2) {
          _onDragStart(e2, index, record);
        },
        onDragOver: function onDragOver(e2) {
          _onDragOver(e2, index, record);
        },
        onDrop: function onDrop() {
          _onDrop();
        },
        onDragEnd: function onDragEnd() {
          _onDragEnd();
        }
      };
    }
    return {};
  }
  return {
    onDragStart: _onDragStart,
    onDragOver: _onDragOver,
    onDrop: _onDrop,
    onDragEnd: _onDragEnd,
    getDragProps,
    dragging: draggingIndex !== -1
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var mouseEnterTimer = null;
function useTagScroll(props) {
  var tagInputRef = reactExports.useRef(null);
  var _props$excessTagsDisp = props.excessTagsDisplayType, excessTagsDisplayType = _props$excessTagsDisp === void 0 ? "scroll" : _props$excessTagsDisp, readonly = props.readonly, disabled = props.disabled;
  var _useState = reactExports.useState(0), _useState2 = _slicedToArray(_useState, 2), scrollDistance = _useState2[0], setScrollDistance = _useState2[1];
  var _useState3 = reactExports.useState(), _useState4 = _slicedToArray(_useState3, 2), scrollElement = _useState4[0], setScrollElement = _useState4[1];
  var updateScrollElement = function updateScrollElement2(element2) {
    var scrollElement2 = element2.children[0];
    setScrollElement(scrollElement2);
  };
  var updateScrollDistance = function updateScrollDistance2() {
    if (!scrollElement) return;
    setScrollDistance(scrollElement.scrollWidth - scrollElement.clientWidth);
  };
  var scrollTo = function scrollTo2(distance) {
    if (isFunction(scrollElement === null || scrollElement === void 0 ? void 0 : scrollElement.scroll)) {
      scrollElement.scroll({
        left: distance,
        behavior: "smooth"
      });
    }
  };
  var scrollToRight = function scrollToRight2() {
    updateScrollDistance();
    scrollTo(scrollDistance);
  };
  var scrollToLeft = function scrollToLeft2() {
    scrollTo(0);
  };
  var onWheel = function onWheel2(_ref) {
    var e2 = _ref.e;
    if (readonly || disabled) return;
    if (!scrollElement) return;
    if (e2.deltaX > 0) {
      var distance = Math.min(scrollElement.scrollLeft + 120, scrollDistance);
      scrollTo(distance);
    } else {
      var _distance = Math.max(scrollElement.scrollLeft - 120, 0);
      scrollTo(_distance);
    }
  };
  var scrollToRightOnEnter = function scrollToRightOnEnter2() {
    if (excessTagsDisplayType !== "scroll") return;
    mouseEnterTimer = setTimeout(function() {
      scrollToRight();
      clearTimeout(mouseEnterTimer);
    }, 100);
  };
  var scrollToLeftOnLeave = function scrollToLeftOnLeave2() {
    if (excessTagsDisplayType !== "scroll") return;
    scrollTo(0);
    clearTimeout(mouseEnterTimer);
  };
  var clearScroll = function clearScroll2() {
    clearTimeout(mouseEnterTimer);
  };
  var initScroll = function initScroll2(element2) {
    if (!element2) return;
    updateScrollElement(element2);
  };
  reactExports.useEffect(function() {
    var _tagInputRef$current;
    initScroll(tagInputRef === null || tagInputRef === void 0 || (_tagInputRef$current = tagInputRef.current) === null || _tagInputRef$current === void 0 ? void 0 : _tagInputRef$current.currentElement);
    return clearScroll;
  }, []);
  return {
    initScroll,
    clearScroll,
    tagInputRef,
    scrollElement,
    scrollDistance,
    scrollTo,
    scrollToRight,
    scrollToLeft,
    updateScrollElement,
    updateScrollDistance,
    onWheel,
    scrollToRightOnEnter,
    scrollToLeftOnLeave
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color, opts) {
  color = color ? color : "";
  opts = opts || {};
  if (color instanceof tinycolor) {
    return color;
  }
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color, opts);
  }
  var rgb = inputToRGB(color);
  this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;
  if (this._r < 1) this._r = Math.round(this._r);
  if (this._g < 1) this._g = Math.round(this._g);
  if (this._b < 1) this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  },
  getLuminance: function getLuminance() {
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R, G, B;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) R = RsRGB / 12.92;
    else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928) G = GsRGB / 12.92;
    else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928) B = BsRGB / 12.92;
    else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h2 = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v2 = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h2 + ", " + s + "%, " + v2 + "%)" : "hsva(" + h2 + ", " + s + "%, " + v2 + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h2 = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l2 = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h2 + ", " + s + "%, " + l2 + "%)" : "hsla(" + h2 + ", " + s + "%, " + l2 + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString2(format) {
    var formatSet = !!format;
    format = format || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn2, args) {
    var color = fn2.apply(null, [this].concat([].slice.call(args)));
    this._r = color._r;
    this._g = color._g;
    this._b = color._b;
    this.setAlpha(color._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn2, args) {
    return fn2.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};
tinycolor.fromRatio = function(color, opts) {
  if (_typeof(color) == "object") {
    var newColor = {};
    for (var i in color) {
      if (color.hasOwnProperty(i)) {
        if (i === "a") {
          newColor[i] = color[i];
        } else {
          newColor[i] = convertToPercentage(color[i]);
        }
      }
    }
    color = newColor;
  }
  return tinycolor(color, opts);
};
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color == "string") {
    color = stringInputToObject(color);
  }
  if (_typeof(color) == "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l2);
      ok = true;
      format = "hsl";
    }
    if (color.hasOwnProperty("a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
function rgbToRgb(r2, g2, b2) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r2, g2, b2), min2 = Math.min(r2, g2, b2);
  var h2, s, l2 = (max2 + min2) / 2;
  if (max2 == min2) {
    h2 = s = 0;
  } else {
    var d2 = max2 - min2;
    s = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
    switch (max2) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return {
    h: h2,
    s,
    l: l2
  };
}
function hslToRgb(h2, s, l2) {
  var r2, g2, b2;
  h2 = bound01(h2, 360);
  s = bound01(s, 100);
  l2 = bound01(l2, 100);
  function hue2rgb(p3, q3, t2) {
    if (t2 < 0) t2 += 1;
    if (t2 > 1) t2 -= 1;
    if (t2 < 1 / 6) return p3 + (q3 - p3) * 6 * t2;
    if (t2 < 1 / 2) return q3;
    if (t2 < 2 / 3) return p3 + (q3 - p3) * (2 / 3 - t2) * 6;
    return p3;
  }
  if (s === 0) {
    r2 = g2 = b2 = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
    var p2 = 2 * l2 - q2;
    r2 = hue2rgb(p2, q2, h2 + 1 / 3);
    g2 = hue2rgb(p2, q2, h2);
    b2 = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return {
    r: r2 * 255,
    g: g2 * 255,
    b: b2 * 255
  };
}
function rgbToHsv(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r2, g2, b2), min2 = Math.min(r2, g2, b2);
  var h2, s, v2 = max2;
  var d2 = max2 - min2;
  s = max2 === 0 ? 0 : d2 / max2;
  if (max2 == min2) {
    h2 = 0;
  } else {
    switch (max2) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return {
    h: h2,
    s,
    v: v2
  };
}
function hsvToRgb(h2, s, v2) {
  h2 = bound01(h2, 360) * 6;
  s = bound01(s, 100);
  v2 = bound01(v2, 100);
  var i = Math.floor(h2), f2 = h2 - i, p2 = v2 * (1 - s), q2 = v2 * (1 - f2 * s), t2 = v2 * (1 - (1 - f2) * s), mod = i % 6, r2 = [v2, q2, p2, p2, t2, v2][mod], g2 = [t2, v2, v2, q2, p2, p2][mod], b2 = [p2, p2, t2, v2, v2, q2][mod];
  return {
    r: r2 * 255,
    g: g2 * 255,
    b: b2 * 255
  };
}
function rgbToHex(r2, g2, b2, allow3Char) {
  var hex = [pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b2).toString(16))];
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r2, g2, b2, a, allow4Char) {
  var hex = [pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b2).toString(16)), pad2(convertDecimalToHex(a))];
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function rgbaToArgbHex(r2, g2, b2, a) {
  var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b2).toString(16))];
  return hex.join("");
}
tinycolor.equals = function(color1, color2) {
  if (!color1 || !color2) return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function _desaturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _saturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _greyscale(color) {
  return tinycolor(color).desaturate(100);
}
function _lighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _brighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = tinycolor(color).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb);
}
function _darken(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _spin(color, amount) {
  var hsl = tinycolor(color).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return tinycolor(hsl);
}
function _complement(color) {
  var hsl = tinycolor(color).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return tinycolor(hsl);
}
function polyad(color, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = tinycolor(color).toHsl();
  var result = [tinycolor(color)];
  var step = 360 / number;
  for (var i = 1; i < number; i++) {
    result.push(tinycolor({
      h: (hsl.h + i * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result;
}
function _splitcomplement(color) {
  var hsl = tinycolor(color).toHsl();
  var h2 = hsl.h;
  return [tinycolor(color), tinycolor({
    h: (h2 + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), tinycolor({
    h: (h2 + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = tinycolor(color).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(tinycolor(hsl));
  }
  return ret;
}
function _monochromatic(color, results) {
  results = results || 6;
  var hsv = tinycolor(color).toHsv();
  var h2 = hsv.h, s = hsv.s, v2 = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h: h2,
      s,
      v: v2
    }));
    v2 = (v2 + modification) % 1;
  }
  return ret;
}
tinycolor.mix = function(color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p2 = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
    a: (rgb2.a - rgb1.a) * p2 + rgb1.a
  };
  return tinycolor(rgba);
};
tinycolor.readability = function(color1, color2) {
  var c1 = tinycolor(color1);
  var c2 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i = 0; i < colorList.length; i++) {
    readability = tinycolor.readability(baseColor, colorList[i]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level,
    size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};
var names = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
var hexNames = tinycolor.hexNames = flip(names);
function flip(o) {
  var flipped = {};
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      flipped[o[i]] = i;
    }
  }
  return flipped;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function bound01(n2, max2) {
  if (isOnePointZero(n2)) n2 = "100%";
  var processPercent = isPercentage(n2);
  n2 = Math.min(max2, Math.max(0, parseFloat(n2)));
  if (processPercent) {
    n2 = parseInt(n2 * max2, 10) / 100;
  }
  if (Math.abs(n2 - max2) < 1e-6) {
    return 1;
  }
  return n2 % max2 / parseFloat(max2);
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function isOnePointZero(n2) {
  return typeof n2 == "string" && n2.indexOf(".") != -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") != -1;
}
function pad2(c2) {
  return c2.length == 1 ? "0" + c2 : "" + c2;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    n2 = n2 * 100 + "%";
  }
  return n2;
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
var matchers = function() {
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function isValidCSSUnit(color) {
  return !!matchers.CSS_UNIT.exec(color);
}
function stringInputToObject(color) {
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }
  var match;
  if (match = matchers.rgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level,
    size
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var tagDefaultProps = {
  closable: false,
  disabled: false,
  icon: void 0,
  shape: "square",
  size: "medium",
  theme: "default",
  variant: "dark"
};
var checkTagDefaultProps = {
  disabled: false,
  size: "medium"
};
var checkTagGroupDefaultProps = {
  multiple: false,
  defaultValue: []
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$6 = ["theme", "size", "shape", "variant", "closable", "maxWidth", "icon", "content", "onClick", "onClose", "className", "style", "disabled", "children", "color", "title"];
function ownKeys$m(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$m(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$m(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$m(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var TagFunction = function TagFunction2(originalProps, ref) {
  var props = useDefaultProps(originalProps, tagDefaultProps);
  var theme = props.theme, size = props.size, shape = props.shape, variant = props.variant, closable = props.closable, maxWidth = props.maxWidth, icon = props.icon, content = props.content, _props$onClick = props.onClick, _onClick = _props$onClick === void 0 ? noop : _props$onClick, _props$onClose = props.onClose, onClose = _props$onClose === void 0 ? noop : _props$onClose, className = props.className, style = props.style, disabled = props.disabled, children = props.children, color = props.color, titleAttr = props.title, otherTagProps = _objectWithoutProperties$2(props, _excluded$6);
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var _useGlobalIcon = useGlobalIcon({
    CloseIcon
  }), CloseIcon$1 = _useGlobalIcon.CloseIcon;
  var tagClassPrefix = "".concat(classPrefix, "-tag");
  var sizeMap = {
    large: "".concat(classPrefix, "-size-l"),
    small: "".concat(classPrefix, "-size-s")
  };
  var tagClassNames = classNames$2(tagClassPrefix, "".concat(tagClassPrefix, "--").concat(theme), "".concat(tagClassPrefix, "--").concat(variant), _defineProperty$2(_defineProperty$2(_defineProperty$2({}, "".concat(tagClassPrefix, "--").concat(shape), shape !== "square"), "".concat(tagClassPrefix, "--ellipsis"), !!maxWidth), "".concat(tagClassPrefix, "--disabled"), disabled), sizeMap[size], className);
  var deleteIcon = /* @__PURE__ */ React.createElement(CloseIcon$1, {
    onClick: function onClick(e2) {
      if (disabled) return;
      onClose({
        e: e2
      });
    },
    className: "".concat(tagClassPrefix, "__icon-close")
  });
  var title = reactExports.useMemo(function() {
    if (Reflect.has(props, "title")) return titleAttr;
    if (children && typeof children === "string") return children;
    if (content && typeof content === "string") return content;
  }, [children, content, props, titleAttr]);
  var titleAttribute = title ? {
    title
  } : void 0;
  var getTagStyle = reactExports.useMemo(function() {
    if (!color) return style;
    var luminance = tinycolor(color).getLuminance();
    var calculatedStyle = {};
    calculatedStyle.color = luminance > 0.5 ? "black" : "white";
    if (variant === "outline" || variant === "light-outline") {
      calculatedStyle.borderColor = color;
    }
    if (variant !== "outline") {
      var getLightestShade = function getLightestShade2() {
        var _tinycolor$toRgb = tinycolor(color).toRgb(), r2 = _tinycolor$toRgb.r, g2 = _tinycolor$toRgb.g, b2 = _tinycolor$toRgb.b;
        return "rgba(".concat(r2, ", ").concat(g2, ", ").concat(b2, ", 0.1)");
      };
      calculatedStyle.backgroundColor = variant === "dark" ? color : getLightestShade();
    }
    if (variant !== "dark") {
      calculatedStyle.color = color;
    }
    return _objectSpread$m(_objectSpread$m({}, calculatedStyle), style);
  }, [color, variant, style]);
  var getTextStyle = reactExports.useMemo(function() {
    if (!maxWidth) return {};
    return {
      maxWidth: isNaN(Number(maxWidth)) ? String(maxWidth) : "".concat(maxWidth, "px")
    };
  }, [maxWidth]);
  var tag = /* @__PURE__ */ React.createElement("div", _objectSpread$m({
    ref,
    className: tagClassNames,
    onClick: function onClick(e2) {
      if (disabled) return;
      _onClick({
        e: e2
      });
    },
    style: getTagStyle
  }, otherTagProps), /* @__PURE__ */ React.createElement(React.Fragment, null, icon, /* @__PURE__ */ React.createElement("span", _objectSpread$m({
    className: maxWidth ? "".concat(tagClassPrefix, "--text") : void 0,
    style: getTextStyle
  }, titleAttribute), children !== null && children !== void 0 ? children : content), closable && !disabled && deleteIcon));
  return tag;
};
var Tag$1 = /* @__PURE__ */ reactExports.forwardRef(TagFunction);
Tag$1.displayName = "Tag";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$5 = ["value", "content", "onClick", "disabled", "children", "size", "checkedProps", "uncheckedProps", "onChange", "className"];
function ownKeys$l(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$l(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$l(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$l(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var CheckTag = /* @__PURE__ */ reactExports.forwardRef(function(originalProps, ref) {
  var props = useDefaultProps(originalProps, checkTagDefaultProps);
  var value = props.value, content = props.content, _props$onClick = props.onClick, onClick = _props$onClick === void 0 ? noop : _props$onClick, disabled = props.disabled, children = props.children, size = props.size, checkedProps = props.checkedProps, uncheckedProps = props.uncheckedProps, onChange = props.onChange, className = props.className, tagOtherProps = _objectWithoutProperties$2(props, _excluded$5);
  var _useControlled = useControlled(props, "checked", onChange), _useControlled2 = _slicedToArray(_useControlled, 2), innerChecked = _useControlled2[0], setInnerChecked = _useControlled2[1];
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var tagClassPrefix = "".concat(classPrefix, "-tag");
  var tagClass = reactExports.useMemo(function() {
    return ["".concat(tagClassPrefix), "".concat(tagClassPrefix, "--check"), _defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2({}, "".concat(tagClassPrefix, "--checked"), innerChecked), "".concat(tagClassPrefix, "--disabled"), disabled), "".concat(classPrefix, "-size-s"), size === "small"), "".concat(classPrefix, "-size-l"), size === "large"), className];
  }, [innerChecked, disabled, classPrefix, tagClassPrefix, size, className]);
  var checkTagProps = reactExports.useMemo(function() {
    var tmpCheckedProps = _objectSpread$l({
      theme: "primary"
    }, checkedProps);
    var tmpUncheckedProps = _objectSpread$l({}, uncheckedProps);
    return innerChecked ? tmpCheckedProps : tmpUncheckedProps;
  }, [innerChecked, checkedProps, uncheckedProps]);
  var handleClick = function handleClick2(_ref2) {
    var e2 = _ref2.e;
    if (!disabled) {
      onClick === null || onClick === void 0 || onClick({
        e: e2
      });
      setInnerChecked(!innerChecked, {
        e: e2,
        value
      });
    }
  };
  var keyboardEventListener = function keyboardEventListener2(e2) {
    var _e$key;
    var code = e2.code || ((_e$key = e2.key) === null || _e$key === void 0 ? void 0 : _e$key.trim());
    var isCheckedCode = SPACE_REG.test(code) || ENTER_REG.test(code);
    if (isCheckedCode) {
      e2.preventDefault();
      setInnerChecked(!innerChecked, {
        e: e2,
        value
      });
    }
  };
  var onCheckboxFocus = function onCheckboxFocus2(e2) {
    e2.currentTarget.addEventListener("keydown", keyboardEventListener);
  };
  var onCheckboxBlur = function onCheckboxBlur2(e2) {
    e2.currentTarget.removeEventListener("keydown", keyboardEventListener);
  };
  return /* @__PURE__ */ React.createElement(Tag$1, _objectSpread$l(_objectSpread$l({
    ref,
    className: classNames$2(tagClass),
    disabled: props.disabled,
    tabIndex: props.disabled ? void 0 : 0,
    onFocus: onCheckboxFocus,
    onBlur: onCheckboxBlur
  }, checkTagProps), {}, {
    onClick: handleClick
  }, tagOtherProps), content || children);
});
CheckTag.displayName = "CheckTag";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var CheckTagGroup = function CheckTagGroup2(originalProps) {
  var props = useDefaultProps(originalProps, checkTagGroupDefaultProps);
  var options = props.options, onChange = props.onChange;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var componentName = "".concat(classPrefix, "-check-tag-group");
  var _useControlled = useControlled(props, "value", onChange), _useControlled2 = _slicedToArray(_useControlled, 2), innerValue = _useControlled2[0], setInnerValue = _useControlled2[1];
  var onCheckTagChange = function onCheckTagChange2(checked, ctx) {
    var value = ctx.value;
    if (checked) {
      if (props.multiple) {
        setInnerValue(innerValue.concat(value), {
          e: ctx.e,
          type: "check",
          value
        });
      } else {
        setInnerValue([value], {
          e: ctx.e,
          type: "check",
          value
        });
      }
    } else {
      var newValue = [];
      if (props.multiple) {
        newValue = innerValue.filter(function(t2) {
          return t2 !== value;
        });
      }
      setInnerValue(newValue, {
        e: ctx.e,
        type: "uncheck",
        value
      });
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: componentName
  }, options === null || options === void 0 ? void 0 : options.map(function(option) {
    var _ref, _option$content;
    return /* @__PURE__ */ React.createElement(CheckTag, {
      key: option.value,
      value: option.value,
      "data-value": option.value,
      checkedProps: props.checkedProps,
      uncheckedProps: props.uncheckedProps,
      checked: innerValue.includes(option.value),
      onChange: onCheckTagChange,
      disabled: option.disabled,
      size: option.size
    }, (_ref = (_option$content = option.content) !== null && _option$content !== void 0 ? _option$content : option.children) !== null && _ref !== void 0 ? _ref : option.label);
  }));
};
CheckTagGroup.displayName = "CheckTagGroup";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Tag = forwardRefWithStatics(TagFunction, {
  CheckTag,
  CheckTagGroup
});
Tag.displayName = "Tag";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$k(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$k(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$k(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$k(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function useTagList(props) {
  var _useConfig = useConfig$2(), prefix = _useConfig.classPrefix;
  var onRemove = props.onRemove, max2 = props.max, minCollapsedNum = props.minCollapsedNum, size = props.size, disabled = props.disabled, readonly = props.readonly, tagProps = props.tagProps, tag = props.tag, collapsedItems = props.collapsedItems, getDragProps = props.getDragProps;
  var _useControlled = useControlled(props, "value", props.onChange), _useControlled2 = _slicedToArray(_useControlled, 2), tagValue = _useControlled2[0], setTagValue = _useControlled2[1];
  var _useState = reactExports.useState(), _useState2 = _slicedToArray(_useState, 2);
  _useState2[0];
  var setOldInputValue = _useState2[1];
  var _onClose = function onClose(p2) {
    var arr = _toConsumableArray(tagValue);
    var _arr$splice = arr.splice(p2.index, 1), _arr$splice2 = _slicedToArray(_arr$splice, 1), item = _arr$splice2[0];
    setTagValue(arr, _objectSpread$k(_objectSpread$k({
      trigger: "tag-remove"
    }, p2), {}, {
      item
    }));
    onRemove === null || onRemove === void 0 || onRemove(_objectSpread$k(_objectSpread$k({}, p2), {}, {
      item,
      trigger: "tag-remove",
      value: arr
    }));
  };
  var clearAll = function clearAll2(context) {
    setTagValue([], {
      trigger: "clear",
      e: context.e
    });
  };
  var onInnerEnter = function onInnerEnter2(value, context) {
    var _props$onEnter;
    var valueStr = value ? String(value).trim() : "";
    var newValue = tagValue;
    var isLimitExceeded = max2 && (tagValue === null || tagValue === void 0 ? void 0 : tagValue.length) >= max2;
    if (valueStr && !isLimitExceeded) {
      newValue = tagValue instanceof Array ? tagValue.concat(String(valueStr)) : [valueStr];
      setTagValue(newValue, {
        trigger: "enter",
        index: newValue.length - 1,
        item: valueStr,
        e: context.e
      });
    }
    props === null || props === void 0 || (_props$onEnter = props.onEnter) === null || _props$onEnter === void 0 || _props$onEnter.call(props, newValue, _objectSpread$k(_objectSpread$k({}, context), {}, {
      inputValue: value
    }));
  };
  var onInputBackspaceKeyUp = function onInputBackspaceKeyUp2(value) {
    if (!tagValue || !tagValue.length) return;
    setOldInputValue(value);
  };
  var onInputBackspaceKeyDown = function onInputBackspaceKeyDown2(value, context) {
    var e2 = context.e;
    if (!tagValue || !tagValue.length || readonly) return;
    if (!value && ["Backspace", "NumpadDelete"].includes(e2.key)) {
      var index = tagValue.length - 1;
      var item = tagValue[index];
      var trigger = "backspace";
      var newValue = tagValue.slice(0, -1);
      setTagValue(newValue, {
        e: e2,
        index,
        item,
        trigger
      });
      onRemove === null || onRemove === void 0 || onRemove({
        e: e2,
        index,
        item,
        trigger,
        value: newValue
      });
    }
  };
  var renderLabel = function renderLabel2(_ref) {
    var displayNode = _ref.displayNode, label = _ref.label;
    var newList = minCollapsedNum ? tagValue.slice(0, minCollapsedNum) : tagValue;
    var list = displayNode ? [/* @__PURE__ */ React.createElement(reactExports.Fragment, {
      key: "display-node"
    }, displayNode)] : newList === null || newList === void 0 ? void 0 : newList.map(function(item, index) {
      var tagContent = isFunction(tag) ? tag({
        value: item
      }) : tag;
      return /* @__PURE__ */ React.createElement(Tag, _objectSpread$k(_objectSpread$k({
        key: index,
        size,
        disabled,
        onClose: function onClose(context) {
          return _onClose({
            e: context.e,
            index
          });
        },
        closable: !readonly && !disabled
      }, getDragProps === null || getDragProps === void 0 ? void 0 : getDragProps(index, item)), tagProps), tagContent !== null && tagContent !== void 0 ? tagContent : item);
    });
    if (label) {
      list === null || list === void 0 || list.unshift(/* @__PURE__ */ React.createElement("div", {
        className: "".concat(prefix, "-tag-input__prefix"),
        key: "label"
      }, label));
    }
    if (newList.length !== tagValue.length) {
      var len = tagValue.length - newList.length;
      var options = Array.isArray(props === null || props === void 0 ? void 0 : props.options) ? props.options : tagValue;
      var params = {
        value: tagValue,
        count: tagValue.length - minCollapsedNum,
        collapsedTags: tagValue.slice(minCollapsedNum, tagValue.length),
        collapsedSelectedItems: options.slice(minCollapsedNum, tagValue.length),
        onClose: _onClose
      };
      var more = isFunction(collapsedItems) ? collapsedItems(params) : collapsedItems;
      list.push(/* @__PURE__ */ React.createElement(reactExports.Fragment, {
        key: "more"
      }, more !== null && more !== void 0 ? more : /* @__PURE__ */ React.createElement(Tag, _objectSpread$k({
        size
      }, tagProps), "+", len)));
    }
    return list;
  };
  return {
    tagValue,
    clearAll,
    onClose: _onClose,
    onInnerEnter,
    onInputBackspaceKeyDown,
    onInputBackspaceKeyUp,
    renderLabel
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useHover(props) {
  var readonly = props.readonly, disabled = props.disabled, onMouseenter = props.onMouseenter, onMouseleave = props.onMouseleave;
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), isHover = _useState2[0], setIsHover = _useState2[1];
  var addHover = function addHover2(context) {
    if (readonly || disabled) return;
    setIsHover(true);
    onMouseenter === null || onMouseenter === void 0 || onMouseenter(context);
  };
  var cancelHover = function cancelHover2(context) {
    if (readonly || disabled) return;
    setIsHover(false);
    onMouseleave === null || onMouseleave === void 0 || onMouseleave(context);
  };
  return {
    isHover,
    addHover,
    cancelHover
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var tagInputDefaultProps = {
  autoWidth: false,
  borderless: false,
  clearable: false,
  dragSort: false,
  excessTagsDisplayType: "break-line",
  defaultInputValue: "",
  minCollapsedNum: 0,
  placeholder: void 0,
  readonly: false,
  size: "medium",
  defaultValue: []
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$j(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$j(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$j(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$j(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var TagInput$1 = /* @__PURE__ */ reactExports.forwardRef(function(originalProps, ref) {
  var props = useDefaultProps(originalProps, tagInputDefaultProps);
  var _useConfig = useConfig$2(), prefix = _useConfig.classPrefix;
  var _useGlobalIcon = useGlobalIcon({
    CloseCircleFilledIcon
  }), CloseCircleFilledIcon$1 = _useGlobalIcon.CloseCircleFilledIcon;
  var excessTagsDisplayType = props.excessTagsDisplayType, autoWidth = props.autoWidth, borderless = props.borderless, readonly = props.readonly, disabled = props.disabled, clearable = props.clearable, placeholder = props.placeholder, valueDisplay = props.valueDisplay, label = props.label, inputProps = props.inputProps, size = props.size, tips = props.tips, status = props.status, suffixIcon = props.suffixIcon, suffix = props.suffix, prefixIcon = props.prefixIcon, maxRows = props.maxRows, onClick = props.onClick, onPaste = props.onPaste, _onFocus = props.onFocus, _onBlur = props.onBlur;
  var _useControlled = useControlled(props, "inputValue", props.onInputChange), _useControlled2 = _slicedToArray(_useControlled, 2), tInputValue = _useControlled2[0], setTInputValue = _useControlled2[1];
  var _useHover = useHover(props), isHover = _useHover.isHover, addHover = _useHover.addHover, cancelHover = _useHover.cancelHover;
  var _useDragSorter = useDragSorter(_objectSpread$j(_objectSpread$j({}, props), {}, {
    sortOnDraggable: props.dragSort,
    onDragOverCheck: {
      x: true,
      targetClassNameRegExp: new RegExp("^".concat(prefix, "-tag"))
    }
  })), getDragProps = _useDragSorter.getDragProps;
  var isCompositionRef = reactExports.useRef(false);
  var _useTagScroll = useTagScroll(props), scrollToRight = _useTagScroll.scrollToRight, onWheel = _useTagScroll.onWheel, scrollToRightOnEnter = _useTagScroll.scrollToRightOnEnter, scrollToLeftOnLeave = _useTagScroll.scrollToLeftOnLeave, tagInputRef = _useTagScroll.tagInputRef;
  var _useTagList = useTagList(_objectSpread$j(_objectSpread$j({}, props), {}, {
    getDragProps
  })), tagValue = _useTagList.tagValue, _onClose = _useTagList.onClose, onInnerEnter = _useTagList.onInnerEnter, onInputBackspaceKeyUp = _useTagList.onInputBackspaceKeyUp, clearAll = _useTagList.clearAll, renderLabel = _useTagList.renderLabel, onInputBackspaceKeyDown = _useTagList.onInputBackspaceKeyDown;
  var NAME_CLASS = "".concat(prefix, "-tag-input");
  var WITH_SUFFIX_ICON_CLASS = "".concat(prefix, "-tag-input__with-suffix-icon");
  var CLEAR_CLASS = "".concat(prefix, "-tag-input__suffix-clear");
  var BREAK_LINE_CLASS = "".concat(prefix, "-tag-input--break-line");
  var tagInputPlaceholder = !(tagValue !== null && tagValue !== void 0 && tagValue.length) ? placeholder : "";
  var showClearIcon = Boolean(!readonly && !disabled && clearable && isHover && (tagValue === null || tagValue === void 0 ? void 0 : tagValue.length));
  reactExports.useImperativeHandle(ref, function() {
    return _objectSpread$j({}, tagInputRef.current || {});
  });
  var onInputCompositionstart = function onInputCompositionstart2(value, context) {
    var _inputProps$onComposi;
    isCompositionRef.current = true;
    inputProps === null || inputProps === void 0 || (_inputProps$onComposi = inputProps.onCompositionstart) === null || _inputProps$onComposi === void 0 || _inputProps$onComposi.call(inputProps, value, context);
  };
  var onInputCompositionend = function onInputCompositionend2(value, context) {
    var _inputProps$onComposi2;
    isCompositionRef.current = false;
    inputProps === null || inputProps === void 0 || (_inputProps$onComposi2 = inputProps.onCompositionend) === null || _inputProps$onComposi2 === void 0 || _inputProps$onComposi2.call(inputProps, value, context);
  };
  var onInputEnter = function onInputEnter2(value, context) {
    setTInputValue("", {
      e: context.e,
      trigger: "enter"
    });
    !isCompositionRef.current && onInnerEnter(value, context);
    scrollToRight();
  };
  var onInnerClick = function onInnerClick2(context) {
    if (!props.disabled && !props.readonly) {
      var _tagInputRef$current, _tagInputRef$current$;
      (_tagInputRef$current = tagInputRef.current) === null || _tagInputRef$current === void 0 || (_tagInputRef$current = _tagInputRef$current.inputElement) === null || _tagInputRef$current === void 0 || (_tagInputRef$current$ = _tagInputRef$current.focus) === null || _tagInputRef$current$ === void 0 || _tagInputRef$current$.call(_tagInputRef$current);
    }
    onClick === null || onClick === void 0 || onClick(context);
  };
  var onClearClick = function onClearClick2(e2) {
    var _props$onClear;
    clearAll({
      e: e2
    });
    setTInputValue("", {
      e: e2,
      trigger: "clear"
    });
    (_props$onClear = props.onClear) === null || _props$onClear === void 0 || _props$onClear.call(props, {
      e: e2
    });
  };
  var suffixIconNode = showClearIcon ? /* @__PURE__ */ React.createElement(CloseCircleFilledIcon$1, {
    className: CLEAR_CLASS,
    onClick: onClearClick
  }) : suffixIcon;
  var displayNode = isFunction(valueDisplay) ? valueDisplay({
    value: tagValue,
    onClose: function onClose(index) {
      return _onClose({
        index
      });
    }
  }) : valueDisplay;
  var isEmpty = !(Array.isArray(tagValue) && tagValue.length);
  var classes = [NAME_CLASS, _defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2({}, BREAK_LINE_CLASS, excessTagsDisplayType === "break-line"), WITH_SUFFIX_ICON_CLASS, !!suffixIconNode), "".concat(prefix, "-is-empty"), isEmpty), "".concat(prefix, "-tag-input--with-tag"), !isEmpty), "".concat(prefix, "-tag-input--max-rows"), excessTagsDisplayType === "break-line" && maxRows), "".concat(prefix, "-tag-input--drag-sort"), props.dragSort && !disabled && !readonly), props.className];
  var maxRowsStyle = maxRows ? {
    "--max-rows": maxRows,
    "--tag-input-size": size
  } : {};
  return /* @__PURE__ */ React.createElement(Input, _objectSpread$j({
    ref: tagInputRef,
    value: tInputValue,
    onChange: function onChange(val, context) {
      setTInputValue(val, _objectSpread$j(_objectSpread$j({}, context), {}, {
        trigger: "input"
      }));
    },
    autoWidth: true,
    onWheel,
    size,
    borderless,
    readonly,
    disabled,
    label: renderLabel({
      displayNode,
      label
    }),
    className: classNames$2(classes),
    style: _objectSpread$j(_objectSpread$j({}, props.style), maxRowsStyle),
    tips,
    status,
    placeholder: tagInputPlaceholder,
    suffix,
    prefixIcon,
    suffixIcon: suffixIconNode,
    showInput: !(inputProps !== null && inputProps !== void 0 && inputProps.readonly) || !tagValue || !(tagValue !== null && tagValue !== void 0 && tagValue.length),
    keepWrapperWidth: !autoWidth,
    onPaste,
    onClick: onInnerClick,
    onEnter: onInputEnter,
    onKeydown: onInputBackspaceKeyDown,
    onKeyup: onInputBackspaceKeyUp,
    onMouseenter: function onMouseenter(context) {
      addHover(context);
      scrollToRightOnEnter();
    },
    onMouseleave: function onMouseleave(context) {
      cancelHover(context);
      scrollToLeftOnLeave();
    },
    onFocus: function onFocus(inputValue, context) {
      _onFocus === null || _onFocus === void 0 || _onFocus(tagValue, {
        e: context.e,
        inputValue
      });
    },
    onBlur: function onBlur(inputValue, context) {
      if (tInputValue) {
        setTInputValue("", {
          e: context.e,
          trigger: "blur"
        });
      }
      _onBlur === null || _onBlur === void 0 || _onBlur(tagValue, {
        e: context.e,
        inputValue: ""
      });
    },
    onCompositionstart: onInputCompositionstart,
    onCompositionend: onInputCompositionend
  }, inputProps));
});
TagInput$1.displayName = "TagInput";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var TagInput = TagInput$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$i(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$i(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$i(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$i(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var DEFAULT_KEYS = {
  label: "label",
  key: "key",
  children: "children"
};
function useMultiple(props) {
  var value = props.value;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var tagInputRef = reactExports.useRef(null);
  var _useControlled = useControlled(props, "inputValue", props.onInputChange), _useControlled2 = _slicedToArray(_useControlled, 2), tInputValue = _useControlled2[0], setTInputValue = _useControlled2[1];
  var iKeys = _objectSpread$i(_objectSpread$i({}, DEFAULT_KEYS), props.keys);
  var getTags = function getTags2() {
    if (!(value instanceof Array)) {
      if (["", null, void 0].includes(value)) return [];
      return isObject(value) ? [value[iKeys.label]] : [value];
    }
    return value.map(function(item) {
      return isObject(item) ? item[iKeys.label] : item;
    });
  };
  var tags = getTags();
  var tPlaceholder = !tags || !tags.length ? props.placeholder : "";
  var onTagInputChange = function onTagInputChange2(val, context) {
    var _props$onTagChange;
    if (context.trigger === "tag-remove") {
      var _context$e;
      (_context$e = context.e) === null || _context$e === void 0 || _context$e.stopPropagation();
    }
    (_props$onTagChange = props.onTagChange) === null || _props$onTagChange === void 0 || _props$onTagChange.call(props, val, context);
  };
  var renderSelectMultiple = function renderSelectMultiple2(p2) {
    var _props$tagInputProps;
    return /* @__PURE__ */ React.createElement(TagInput, _objectSpread$i(_objectSpread$i(_objectSpread$i({
      ref: tagInputRef
    }, p2.commonInputProps), {}, {
      autoWidth: props.autoWidth,
      readonly: props.readonly,
      minCollapsedNum: props.minCollapsedNum,
      collapsedItems: props.collapsedItems,
      tag: props.tag,
      valueDisplay: props.valueDisplay,
      placeholder: tPlaceholder,
      options: props.options,
      value: tags,
      inputValue: p2.popupVisible && p2.allowInput ? tInputValue : "",
      onChange: onTagInputChange,
      onInputChange: function onInputChange(val, context) {
        if ((context === null || context === void 0 ? void 0 : context.trigger) === "enter" || (context === null || context === void 0 ? void 0 : context.trigger) === "blur") return;
        setTInputValue(val, {
          trigger: context.trigger,
          e: context.e
        });
      },
      tagProps: props.tagProps,
      onClear: p2.onInnerClear,
      onFocus: function onFocus(val, context) {
        var _props$onFocus;
        (_props$onFocus = props.onFocus) === null || _props$onFocus === void 0 || _props$onFocus.call(props, props.value, _objectSpread$i(_objectSpread$i({}, context), {}, {
          tagInputValue: val
        }));
      },
      onBlur: !props.panel ? props.onBlur : null
    }, props.tagInputProps), {}, {
      inputProps: _objectSpread$i(_objectSpread$i({}, props.inputProps), {}, {
        readonly: !props.allowInput || props.readonly,
        inputClass: classNames$2((_props$tagInputProps = props.tagInputProps) === null || _props$tagInputProps === void 0 ? void 0 : _props$tagInputProps.className, _defineProperty$2(_defineProperty$2({}, "".concat(classPrefix, "-input--focused"), p2.popupVisible), "".concat(classPrefix, "-is-focused"), p2.popupVisible))
      })
    }));
  };
  return {
    tags,
    tPlaceholder,
    tagInputRef,
    multipleInputValue: tInputValue,
    renderSelectMultiple
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$h(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$h(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$h(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$h(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var MAX_POPUP_WIDTH = 1e3;
function useOverlayInnerStyle(props, extra) {
  var popupProps = props.popupProps, autoWidth = props.autoWidth, readonly = props.readonly, disabled = props.disabled, onPopupVisibleChange = props.onPopupVisibleChange, allowInput = props.allowInput;
  var _useControlled = useControlled(props, "popupVisible", onPopupVisibleChange), _useControlled2 = _slicedToArray(_useControlled, 2), innerPopupVisible = _useControlled2[0], setInnerPopupVisible = _useControlled2[1];
  var matchWidthFunc = function matchWidthFunc2(triggerElement, popupElement) {
    if (!triggerElement || !popupElement) return;
    var prevDisplay = popupElement.style.display;
    popupElement.style.display = "";
    var overlayScrollWidth = popupElement.offsetWidth - popupElement.scrollWidth;
    var width = popupElement.offsetWidth - overlayScrollWidth > triggerElement.offsetWidth ? popupElement.scrollWidth : triggerElement.offsetWidth - overlayScrollWidth;
    if (prevDisplay === "none") {
      popupElement.style.display = "none";
    }
    var otherOverlayInnerStyle = {};
    if (popupProps && _typeof$2(popupProps.overlayInnerStyle) === "object" && !popupProps.overlayInnerStyle.width) {
      otherOverlayInnerStyle = popupProps.overlayInnerStyle;
    }
    return _objectSpread$h({
      width: "".concat(Math.min(width, MAX_POPUP_WIDTH), "px")
    }, otherOverlayInnerStyle);
  };
  var onInnerPopupVisibleChange = function onInnerPopupVisibleChange2(visible, context) {
    if (disabled || readonly) {
      return;
    }
    var newVisible = context.trigger === "trigger-element-click" && allowInput ? true : visible;
    if (props.popupVisible !== newVisible) {
      setInnerPopupVisible(newVisible, context);
      if (!newVisible) {
        var _extra$afterHidePopup;
        extra === null || extra === void 0 || (_extra$afterHidePopup = extra.afterHidePopup) === null || _extra$afterHidePopup === void 0 || _extra$afterHidePopup.call(extra, context);
      }
    }
  };
  var tOverlayInnerStyle = reactExports.useMemo(function() {
    var result = {};
    var overlayInnerStyle = (popupProps === null || popupProps === void 0 ? void 0 : popupProps.overlayInnerStyle) || {};
    if (isFunction(overlayInnerStyle) || isObject(overlayInnerStyle) && overlayInnerStyle.width) {
      result = overlayInnerStyle;
    } else if (!autoWidth) {
      result = matchWidthFunc;
    }
    return result;
  }, [autoWidth, popupProps === null || popupProps === void 0 ? void 0 : popupProps.overlayInnerStyle]);
  return {
    tOverlayInnerStyle,
    innerPopupVisible,
    onInnerPopupVisibleChange
  };
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var selectInputDefaultProps = {
  allowInput: false,
  autoWidth: false,
  autofocus: false,
  borderless: false,
  clearable: false,
  loading: false,
  minCollapsedNum: 0,
  multiple: false,
  readonly: false,
  reserveKeyword: false,
  status: "default"
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$g(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$g(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$g(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$g(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var SelectInput$1 = /* @__PURE__ */ React.forwardRef(function(originalProps, ref) {
  var props = useDefaultProps(originalProps, selectInputDefaultProps);
  var selectInputRef = reactExports.useRef(null);
  var selectInputWrapRef = reactExports.useRef(null);
  var _useConfig = useConfig$2(), prefix = _useConfig.classPrefix;
  var multiple = props.multiple, value = props.value, popupVisible = props.popupVisible, popupProps = props.popupProps, borderless = props.borderless, disabled = props.disabled;
  var _useSingle = useSingle(props), commonInputProps = _useSingle.commonInputProps, inputRef = _useSingle.inputRef, singleInputValue = _useSingle.singleInputValue, onInnerClear = _useSingle.onInnerClear, renderSelectSingle = _useSingle.renderSelectSingle;
  var _useMultiple = useMultiple(props), tagInputRef = _useMultiple.tagInputRef, multipleInputValue = _useMultiple.multipleInputValue, renderSelectMultiple = _useMultiple.renderSelectMultiple;
  var _useOverlayInnerStyle = useOverlayInnerStyle(props, {
    afterHidePopup: onInnerBlur
  }), tOverlayInnerStyle = _useOverlayInnerStyle.tOverlayInnerStyle, innerPopupVisible = _useOverlayInnerStyle.innerPopupVisible, onInnerPopupVisibleChange = _useOverlayInnerStyle.onInnerPopupVisibleChange;
  var popupClasses = classNames$2([props.className, "".concat(prefix, "-select-input"), _defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2({}, "".concat(prefix, "-select-input--borderless"), borderless), "".concat(prefix, "-select-input--multiple"), multiple), "".concat(prefix, "-select-input--popup-visible"), popupVisible !== null && popupVisible !== void 0 ? popupVisible : innerPopupVisible), "".concat(prefix, "-select-input--empty"), value instanceof Array ? !value.length : !value)]);
  reactExports.useImperativeHandle(ref, function() {
    return _objectSpread$g(_objectSpread$g(_objectSpread$g({}, selectInputRef.current || {}), inputRef.current || {}), tagInputRef.current || {});
  });
  var visibleProps = {
    visible: popupVisible !== null && popupVisible !== void 0 ? popupVisible : innerPopupVisible
  };
  function onInnerBlur(ctx) {
    var _props$onBlur;
    var inputValue = props.multiple ? multipleInputValue : singleInputValue;
    var params = {
      e: ctx.e,
      inputValue
    };
    (_props$onBlur = props.onBlur) === null || _props$onBlur === void 0 || _props$onBlur.call(props, props.value, params);
  }
  var mainContent = /* @__PURE__ */ React.createElement("div", {
    className: popupClasses,
    style: props.style
  }, /* @__PURE__ */ React.createElement(Popup, _objectSpread$g(_objectSpread$g(_objectSpread$g({
    ref: selectInputRef,
    trigger: (popupProps === null || popupProps === void 0 ? void 0 : popupProps.trigger) || "click",
    placement: "bottom-left",
    content: props.panel,
    hideEmptyPopup: true,
    onVisibleChange: onInnerPopupVisibleChange,
    updateScrollTop: props.updateScrollTop
  }, visibleProps), popupProps), {}, {
    disabled,
    overlayInnerStyle: tOverlayInnerStyle
  }), multiple ? renderSelectMultiple({
    commonInputProps,
    onInnerClear,
    popupVisible: visibleProps.visible,
    allowInput: props.allowInput
  }) : renderSelectSingle(visibleProps.visible)));
  if (!props.tips) {
    return mainContent;
  }
  return /* @__PURE__ */ React.createElement("div", {
    ref: selectInputWrapRef,
    className: "".concat(prefix, "-select-input__wrap")
  }, mainContent, props.tips && /* @__PURE__ */ React.createElement("div", {
    className: "".concat(prefix, "-input__tips ").concat(prefix, "-input__tips--").concat(props.status || "normal")
  }, props.tips));
});
SelectInput$1.displayName = "SelectInput";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var SelectInput = SelectInput$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function useResizeObserver(container, callback) {
  var enabled = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var callbackRef = useLatest(callback);
  useIsomorphicLayoutEffect(function() {
    var isSupport = canUseDocument && window.ResizeObserver;
    var element2 = container.current;
    var observer = null;
    if (!enabled) return;
    if (isSupport && element2) {
      var resizeCallback = function resizeCallback2(entries) {
        callbackRef.current(entries);
      };
      observer = new ResizeObserver(resizeCallback);
      observer.observe(element2);
    }
    return function() {
      if (observer && element2) {
        var _observer$disconnect, _observer;
        observer.unobserve(element2);
        (_observer$disconnect = (_observer = observer).disconnect) === null || _observer$disconnect === void 0 || _observer$disconnect.call(_observer);
        observer = null;
      }
    };
  }, [container, enabled]);
}
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var requestAnimationFrame$1 = (typeof window === "undefined" ? false : window.requestAnimationFrame) || function(cb) {
  return setTimeout(cb, 16.6);
};
var useVirtualScroll = function useVirtualScroll2(container, params) {
  var data = params.data, scroll = params.scroll;
  var _useState = reactExports.useState([]), _useState2 = _slicedToArray(_useState, 2), visibleData = _useState2[0], setVisibleData = _useState2[1];
  var _useState3 = reactExports.useState(function() {
    return ((data === null || data === void 0 ? void 0 : data.length) || 0) * ((scroll === null || scroll === void 0 ? void 0 : scroll.rowHeight) || 50);
  }), _useState4 = _slicedToArray(_useState3, 2), translateY = _useState4[0], setTranslateY = _useState4[1];
  var _useState5 = reactExports.useState(0), _useState6 = _slicedToArray(_useState5, 2), scrollHeight = _useState6[0], setScrollHeight = _useState6[1];
  var trScrollTopHeightList = reactExports.useRef([]);
  var _useState7 = reactExports.useState([]), _useState8 = _slicedToArray(_useState7, 2), trHeightList = _useState8[0], setTrHeightList = _useState8[1];
  var containerWidth = reactExports.useRef(0);
  var containerHeight = reactExports.useRef(0);
  var _useState9 = reactExports.useState(function() {
    return [0, ((scroll === null || scroll === void 0 ? void 0 : scroll.bufferSize) || 10) * 3];
  }), _useState0 = _slicedToArray(_useState9, 2), startAndEndIndex = _useState0[0], setStartAndEndIndex = _useState0[1];
  var tScroll = reactExports.useMemo(function() {
    var _scroll$isFixedRowHei, _scroll$fixedRows;
    if (!scroll) return {};
    return {
      bufferSize: scroll.bufferSize || 10,
      isFixedRowHeight: (_scroll$isFixedRowHei = scroll.isFixedRowHeight) !== null && _scroll$isFixedRowHei !== void 0 ? _scroll$isFixedRowHei : false,
      rowHeight: scroll.rowHeight || 47,
      threshold: scroll.threshold || 100,
      type: scroll.type,
      fixedRows: (_scroll$fixedRows = scroll.fixedRows) !== null && _scroll$fixedRows !== void 0 ? _scroll$fixedRows : [0, 0]
    };
  }, [scroll]);
  var isVirtualScroll = reactExports.useMemo(function() {
    return tScroll.type === "virtual" && tScroll.threshold < data.length;
  }, [tScroll, data]);
  var getTrScrollTopHeightList = function getTrScrollTopHeightList2(trHeightList2) {
    var list = [];
    for (var i = 0, len = data.length; i < len; i++) {
      list[i] = (list[i - 1] || 0) + (trHeightList2[i] || tScroll.rowHeight);
    }
    return list;
  };
  var updateVisibleData = function updateVisibleData2(trScrollTopHeightList2, scrollTop) {
    var currentIndex = -1;
    for (var i = 0, len = trScrollTopHeightList2.length; i < len; i++) {
      if (trScrollTopHeightList2[i] >= scrollTop) {
        currentIndex = i;
        break;
      }
    }
    var lastIndex = trScrollTopHeightList2.length;
    var containerCurrentHeight = containerHeight.current || container.current.getBoundingClientRect().height;
    var scrollBottom = scrollTop + containerCurrentHeight;
    for (var _i = currentIndex, _len = trScrollTopHeightList2.length; _i < _len; _i++) {
      if (trScrollTopHeightList2[_i] >= scrollBottom) {
        lastIndex = _i;
        break;
      }
    }
    if (currentIndex < 0) return;
    var startIndex = Math.max(currentIndex - tScroll.bufferSize, 0);
    var endIndex = Math.min(lastIndex + tScroll.bufferSize, trScrollTopHeightList2.length);
    var fixedRows = tScroll.fixedRows;
    var _fixedRows = _slicedToArray(fixedRows, 2), fixedStart = _fixedRows[0], fixedEnd = _fixedRows[1];
    var fixedStartData = fixedStart ? data.slice(0, fixedStart) : [];
    if (fixedStart && startIndex < fixedStart) {
      fixedStartData = fixedStartData.slice(0, startIndex);
    }
    var fixedEndData = fixedEnd ? data.slice(data.length - fixedEnd) : [];
    var bottomStartIndex = endIndex - data.length + 1 + (fixedEnd !== null && fixedEnd !== void 0 ? fixedEnd : 0);
    if (fixedEnd && bottomStartIndex > 0) {
      fixedEndData = fixedEndData.slice(bottomStartIndex);
    }
    if (startAndEndIndex.join() !== [startIndex, endIndex].join() && startIndex >= 0) {
      var tmpVisibleData = fixedStartData.concat(data.slice(startIndex, endIndex)).concat(fixedEndData);
      setVisibleData(tmpVisibleData);
      var lastScrollTop = trScrollTopHeightList2[startIndex - 1];
      var top2 = lastScrollTop > 0 ? lastScrollTop : 0;
      var stickyHeight = trScrollTopHeightList2[Math.min(startIndex, fixedStart) - 1] || 0;
      setTranslateY(top2 - stickyHeight);
      setStartAndEndIndex([startIndex, endIndex]);
    }
  };
  var handleRowMounted = function handleRowMounted2(rowData) {
    if (!isVirtualScroll || !rowData || tScroll.isFixedRowHeight || !(container !== null && container !== void 0 && container.current)) return;
    var trHeight = rowData.ref.offsetHeight;
    var rowIndex = rowData.data.__VIRTUAL_SCROLL_INDEX;
    var newTrHeightList = trHeightList;
    if (newTrHeightList[rowIndex] !== trHeight) {
      newTrHeightList[rowIndex] = trHeight;
      setTrHeightList(newTrHeightList);
      var scrollTopHeightList = getTrScrollTopHeightList(newTrHeightList);
      trScrollTopHeightList.current = scrollTopHeightList;
      var lastIndex = scrollTopHeightList.length - 1;
      setScrollHeight(scrollTopHeightList[lastIndex] - containerHeight.current);
      updateVisibleData(scrollTopHeightList, container.current.scrollTop);
    }
  };
  var handleScroll = function handleScroll2() {
    if (!isVirtualScroll) return;
    updateVisibleData(trScrollTopHeightList.current, container.current.scrollTop);
  };
  var refreshVirtualScroll = function refreshVirtualScroll2(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), contentRect = _ref2[0].contentRect;
    var maxScrollbarWidth = 16;
    if (Math.abs(contentRect.width - containerWidth.current) > maxScrollbarWidth) {
      container.current.scrollTop = 0;
      handleScroll();
    }
    containerWidth.current = contentRect.width;
    containerHeight.current = contentRect.height;
  };
  var addIndexToData = function addIndexToData2(data2) {
    data2.forEach(function(item, index) {
      Reflect.set(item, "__VIRTUAL_SCROLL_INDEX", index);
    });
  };
  var updateScrollTop = function updateScrollTop2(_ref3) {
    var _container$current;
    var index = _ref3.index, _ref3$top = _ref3.top, top2 = _ref3$top === void 0 ? 0 : _ref3$top, behavior = _ref3.behavior;
    var scrollTop = trScrollTopHeightList.current[index] - top2;
    (_container$current = container.current) === null || _container$current === void 0 || _container$current.scrollTo({
      top: scrollTop,
      behavior: behavior || "auto"
    });
  };
  var scrollToElement = function scrollToElement2(p2) {
    updateScrollTop(p2);
    if (!tScroll.isFixedRowHeight) {
      requestAnimationFrame$1(function() {
        var _p$time;
        var duration = (_p$time = p2.time) !== null && _p$time !== void 0 ? _p$time : 60;
        var timer = setTimeout(function() {
          updateScrollTop(p2);
          clearTimeout(timer);
        }, duration);
      });
    }
  };
  useResizeObserver(container, refreshVirtualScroll, isVirtualScroll);
  reactExports.useEffect(function() {
    if (!isVirtualScroll) {
      trScrollTopHeightList.current = getTrScrollTopHeightList(trHeightList);
      return;
    }
    addIndexToData(data);
    var scrollTopHeightList = trScrollTopHeightList.current;
    if ((scrollTopHeightList === null || scrollTopHeightList === void 0 ? void 0 : scrollTopHeightList.length) === (data === null || data === void 0 ? void 0 : data.length)) {
      var lastIndex = scrollTopHeightList.length - 1;
      setScrollHeight(scrollTopHeightList[lastIndex]);
      updateVisibleData(scrollTopHeightList, container.current.scrollTop);
    } else {
      setScrollHeight(data.length * tScroll.rowHeight);
      var tmpData = data.slice(0, ((scroll === null || scroll === void 0 ? void 0 : scroll.bufferSize) || 10) * 3);
      setVisibleData(tmpData);
      setTranslateY(0);
    }
    var timer = setTimeout(function() {
      if (container.current) {
        var tmpContainerHeight = container.current.getBoundingClientRect().height;
        containerHeight.current = tmpContainerHeight;
        var scrollTopHeightList2 = getTrScrollTopHeightList(trHeightList);
        trScrollTopHeightList.current = scrollTopHeightList2;
        clearTimeout(timer);
      }
    }, 1);
  }, [container, data, tScroll, isVirtualScroll, startAndEndIndex, trHeightList]);
  return {
    visibleData,
    translateY,
    scrollHeight,
    isVirtualScroll,
    handleScroll,
    handleRowMounted,
    scrollToElement
  };
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var usePanelVirtualScroll = function usePanelVirtualScroll2(_ref) {
  var popupContentRef = _ref.popupContentRef, scroll = _ref.scroll, options = _ref.options, size = _ref.size;
  var scrollThreshold = (scroll === null || scroll === void 0 ? void 0 : scroll.threshold) || 100;
  var scrollType = scroll === null || scroll === void 0 ? void 0 : scroll.type;
  var isVirtual = reactExports.useMemo(function() {
    return scrollType === "virtual" && (options === null || options === void 0 ? void 0 : options.length) > scrollThreshold;
  }, [scrollType, scrollThreshold, options]);
  var scrollParams = reactExports.useMemo(function() {
    var heightMap = {
      small: 20,
      medium: 28,
      large: 36
    };
    var rowHeight = heightMap[size] || 28;
    return {
      type: "virtual",
      isFixedRowHeight: (scroll === null || scroll === void 0 ? void 0 : scroll.isFixedRowHeight) || false,
      rowHeight: (scroll === null || scroll === void 0 ? void 0 : scroll.rowHeight) || rowHeight,
      bufferSize: (scroll === null || scroll === void 0 ? void 0 : scroll.bufferSize) || 20,
      threshold: scrollThreshold
    };
  }, [scroll, scrollThreshold, size]);
  var _useVirtualScroll = useVirtualScroll(popupContentRef, {
    data: options || [],
    scroll: scrollParams
  }), _useVirtualScroll$vis = _useVirtualScroll.visibleData, visibleData = _useVirtualScroll$vis === void 0 ? null : _useVirtualScroll$vis, _useVirtualScroll$han = _useVirtualScroll.handleScroll, handleVirtualScroll = _useVirtualScroll$han === void 0 ? null : _useVirtualScroll$han, _useVirtualScroll$scr = _useVirtualScroll.scrollHeight, scrollHeight = _useVirtualScroll$scr === void 0 ? null : _useVirtualScroll$scr, _useVirtualScroll$tra = _useVirtualScroll.translateY, translateY = _useVirtualScroll$tra === void 0 ? null : _useVirtualScroll$tra, _useVirtualScroll$han2 = _useVirtualScroll.handleRowMounted, handleRowMounted = _useVirtualScroll$han2 === void 0 ? null : _useVirtualScroll$han2;
  var lastScrollY = -1;
  var onInnerVirtualScroll = reactExports.useCallback(function(e2) {
    if (!isVirtual) {
      return;
    }
    var target = e2.target;
    var top2 = target.scrollTop;
    if (Math.abs(lastScrollY - top2) > 5) {
      handleVirtualScroll();
      lastScrollY = top2;
    } else {
      lastScrollY = -1;
    }
  }, []);
  reactExports.useEffect(function() {
    var popupContentDom = popupContentRef === null || popupContentRef === void 0 ? void 0 : popupContentRef.current;
    if (isVirtual) {
      var _popupContentDom$addE;
      popupContentDom === null || popupContentDom === void 0 || (_popupContentDom$addE = popupContentDom.addEventListener) === null || _popupContentDom$addE === void 0 || _popupContentDom$addE.call(popupContentDom, "scroll", onInnerVirtualScroll);
    }
    return function() {
      if (isVirtual) {
        var _popupContentDom$remo;
        popupContentDom === null || popupContentDom === void 0 || (_popupContentDom$remo = popupContentDom.removeEventListener) === null || _popupContentDom$remo === void 0 || _popupContentDom$remo.call(popupContentDom, "scroll", onInnerVirtualScroll);
      }
    };
  }, [isVirtual, onInnerVirtualScroll, popupContentRef.current]);
  var cursorStyle = {
    position: "absolute",
    width: "1px",
    height: "1px",
    transition: "transform 0.2s",
    transform: "translate(0, ".concat(scrollHeight, "px)"),
    MsTransform: "translate(0, ".concat(scrollHeight, "px)"),
    MozTransform: "translate(0, ".concat(scrollHeight, "px)"),
    WebkitTransform: "translate(0, ".concat(scrollHeight, "px)")
  };
  var panelStyle = {
    transform: "translate(0, ".concat(translateY, "px)"),
    MsTransform: "translate(0, ".concat(translateY, "px)"),
    MozTransform: "translate(0, ".concat(translateY, "px)"),
    WebkitTransform: "translate(0, ".concat(translateY, "px)")
  };
  return {
    scrollHeight,
    translateY,
    visibleData,
    handleRowMounted,
    isVirtual,
    cursorStyle,
    panelStyle
  };
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$4 = ["group", "divider"], _excluded2 = ["value", "label", "disabled", "content", "children"];
function ownKeys$f(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$f(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$f(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$f(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var PopupContent = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var value = props.value, size = props.size, max2 = props.max, multiple = props.multiple, showPopup = props.showPopup, setShowPopup = props.setShowPopup, empty = props.empty, loadingText = props.loadingText, loading = props.loading, valueType = props.valueType, children = props.children, keys2 = props.keys, panelTopContent = props.panelTopContent, panelBottomContent = props.panelBottomContent, onChange = props.onChange, onCheckAllChange = props.onCheckAllChange, getPopupInstance = props.getPopupInstance, propsOptions = props.options, propsScroll = props.scroll;
  var _useLocaleReceiver = useLocaleReceiver("select"), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 2), local = _useLocaleReceiver2[0], t2 = _useLocaleReceiver2[1];
  var emptyText = t2(local.empty);
  var popupContentRef = reactExports.useRef(null);
  popupContentRef.current = getPopupInstance();
  var _usePanelVirtualScrol = usePanelVirtualScroll({
    popupContentRef,
    scroll: propsScroll,
    options: propsOptions,
    size
  }), visibleData = _usePanelVirtualScrol.visibleData, handleRowMounted = _usePanelVirtualScrol.handleRowMounted, isVirtual = _usePanelVirtualScrol.isVirtual, panelStyle = _usePanelVirtualScrol.panelStyle, cursorStyle = _usePanelVirtualScrol.cursorStyle;
  var selectableOptions = reactExports.useMemo(function() {
    var uniqueOptions = {};
    propsOptions === null || propsOptions === void 0 || propsOptions.forEach(function(option) {
      if (option.group) {
        option.children.forEach(function(item) {
          if (!item.disabled && !item.checkAll) {
            uniqueOptions[item.value] = item;
          }
        });
      } else if (!option.disabled && !option.checkAll) {
        uniqueOptions[option.value] = option;
      }
    });
    return Object.values(uniqueOptions);
  }, [propsOptions]);
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  if (!children && !propsOptions) {
    return null;
  }
  var onSelect = function onSelect2(selectedValue, _ref) {
    var label = _ref.label, selected = _ref.selected, event = _ref.event, restData = _ref.restData;
    var isValObj = valueType === "object";
    var objVal = {};
    if (isValObj) {
      objVal = _objectSpread$f({}, restData);
      if (!(keys2 !== null && keys2 !== void 0 && keys2.label)) {
        Object.assign(objVal, {
          label
        });
      }
      if (!(keys2 !== null && keys2 !== void 0 && keys2.value)) {
        Object.assign(objVal, {
          value: selectedValue
        });
      }
    }
    if (!Object.keys(objVal).length) {
      Object.assign(objVal, _defineProperty$2(_defineProperty$2({}, (keys2 === null || keys2 === void 0 ? void 0 : keys2.label) || "label", label), (keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value", selectedValue));
    }
    if (multiple) {
      var values = getSelectValueArr(value, selectedValue, selected, valueType, keys2, objVal);
      onChange(values, {
        label,
        value: selectedValue,
        e: event,
        trigger: selected ? "uncheck" : "check"
      });
    } else {
      var selectVal = valueType === "object" ? objVal : selectedValue;
      if (!isEqual$1(value, selectVal)) {
        onChange(selectVal, {
          label,
          value: selectVal,
          e: event,
          trigger: "check"
        });
      }
      setShowPopup(!showPopup);
    }
  };
  var childrenWithProps = reactExports.Children.map(children, function(child) {
    if (/* @__PURE__ */ reactExports.isValidElement(child)) {
      var addedProps = {
        size,
        max: max2,
        multiple,
        selectedValue: value,
        onSelect
      };
      return /* @__PURE__ */ reactExports.cloneElement(child, _objectSpread$f({}, addedProps));
    }
    return child;
  });
  var _renderOptions = function renderOptions(options) {
    if (options) {
      return /* @__PURE__ */ React.createElement("ul", {
        className: "".concat(classPrefix, "-select__list")
      }, options.map(function(item, index) {
        var group = item.group, divider = item.divider, rest = _objectWithoutProperties$2(item, _excluded$4);
        if (group) {
          return /* @__PURE__ */ React.createElement(OptionGroup, {
            label: group,
            divider,
            key: index
          }, _renderOptions(rest.children));
        }
        var optionValue = item.value, label = item.label, disabled = item.disabled, content = item.content, children2 = item.children, restData = _objectWithoutProperties$2(item, _excluded2);
        return /* @__PURE__ */ React.createElement(Option, _objectSpread$f(_objectSpread$f({
          key: index,
          max: max2,
          label,
          value: optionValue,
          onSelect,
          selectedValue: value,
          optionLength: selectableOptions.length,
          multiple,
          size,
          disabled,
          restData,
          keys: keys2,
          content,
          onCheckAllChange,
          onRowMounted: handleRowMounted
        }, isVirtual ? {
          isVirtual,
          bufferSize: propsScroll === null || propsScroll === void 0 ? void 0 : propsScroll.bufferSize,
          scrollType: propsScroll === null || propsScroll === void 0 ? void 0 : propsScroll.type
        } : {}), restData), children2);
      }));
    }
    return /* @__PURE__ */ React.createElement("ul", {
      className: "".concat(classPrefix, "-select__list")
    }, childrenWithProps);
  };
  var isEmpty = Array.isArray(childrenWithProps) && !childrenWithProps.length || propsOptions && propsOptions.length === 0;
  var renderPanel = function renderPanel2(renderedOptions, extraStyle) {
    return /* @__PURE__ */ React.createElement("div", {
      ref,
      className: classNames$2("".concat(classPrefix, "-select__dropdown-inner"), _defineProperty$2(_defineProperty$2(_defineProperty$2({}, "".concat(classPrefix, "-select__dropdown-inner--size-s"), size === "small"), "".concat(classPrefix, "-select__dropdown-inner--size-l"), size === "large"), "".concat(classPrefix, "-select__dropdown-inner--size-m"), size === "medium")),
      style: extraStyle
    }, loading && /* @__PURE__ */ React.createElement("div", {
      className: "".concat(classPrefix, "-select__loading-tips")
    }, loadingText), !loading && isEmpty && /* @__PURE__ */ React.createElement("div", {
      className: "".concat(classPrefix, "-select__empty")
    }, empty ? empty : /* @__PURE__ */ React.createElement("p", null, emptyText)), !loading && !isEmpty && _renderOptions(renderedOptions));
  };
  if (isVirtual) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, panelTopContent, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      style: cursorStyle
    }), renderPanel(visibleData, panelStyle)), panelBottomContent);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, panelTopContent, renderPanel(propsOptions), panelBottomContent);
});
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$3 = ["overlayClassName", "onScroll", "onScrollToBottom"];
function ownKeys$e(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$e(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$e(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$e(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Select$1 = forwardRefWithStatics(function(originalProps, ref) {
  var props = useDefaultProps(originalProps, selectDefaultProps);
  var _useLocaleReceiver = useLocaleReceiver("select"), _useLocaleReceiver2 = _slicedToArray(_useLocaleReceiver, 2), local = _useLocaleReceiver2[0], t2 = _useLocaleReceiver2[1];
  var emptyText = t2(local.loadingText);
  var readonly = props.readonly, borderless = props.borderless, autoWidth = props.autoWidth, creatable = props.creatable, _props$loadingText = props.loadingText, loadingText = _props$loadingText === void 0 ? emptyText : _props$loadingText, max2 = props.max, popupProps = props.popupProps, reserveKeyword = props.reserveKeyword, className = props.className, style = props.style, disabled = props.disabled, size = props.size, multiple = props.multiple, placeholder = props.placeholder, clearable = props.clearable, prefixIcon = props.prefixIcon, options = props.options, filterable = props.filterable, loading = props.loading, empty = props.empty, valueType = props.valueType, keys2 = props.keys, children = props.children, collapsedItems = props.collapsedItems, minCollapsedNum = props.minCollapsedNum, valueDisplay = props.valueDisplay, showArrow = props.showArrow, inputProps = props.inputProps, panelBottomContent = props.panelBottomContent, panelTopContent = props.panelTopContent, selectInputProps = props.selectInputProps, tagInputProps = props.tagInputProps, tagProps = props.tagProps, scroll = props.scroll, suffixIcon = props.suffixIcon, label = props.label, filter = props.filter, onFocus = props.onFocus, _onBlur = props.onBlur, _props$onClear = props.onClear, onClear = _props$onClear === void 0 ? noop : _props$onClear, onCreate = props.onCreate, onRemove = props.onRemove, onSearch = props.onSearch, onEnter = props.onEnter, onPopupVisibleChange = props.onPopupVisibleChange;
  var _useControlled = useControlled(props, "value", props.onChange), _useControlled2 = _slicedToArray(_useControlled, 2), value = _useControlled2[0], onChange = _useControlled2[1];
  var selectInputRef = reactExports.useRef(null);
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var _ref = popupProps || {}, overlayClassName = _ref.overlayClassName, onScroll = _ref.onScroll, onScrollToBottom = _ref.onScrollToBottom, restPopupProps = _objectWithoutProperties$2(_ref, _excluded$3);
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), isScrolling = _useState2[0], toggleIsScrolling = _useState2[1];
  var name = "".concat(classPrefix, "-select");
  var _useControlled3 = useControlled(props, "popupVisible", onPopupVisibleChange), _useControlled4 = _slicedToArray(_useControlled3, 2), showPopup = _useControlled4[0], setShowPopup = _useControlled4[1];
  var _useControlled5 = useControlled(props, "inputValue", props.onInputChange), _useControlled6 = _slicedToArray(_useControlled5, 2), inputValue = _useControlled6[0], onInputChange = _useControlled6[1];
  var _useOptions = UseOptions(keys2, options, children, valueType, value, reserveKeyword), currentOptions = _useOptions.currentOptions, setCurrentOptions = _useOptions.setCurrentOptions, tmpPropOptions = _useOptions.tmpPropOptions, valueToOption = _useOptions.valueToOption, selectedOptions = _useOptions.selectedOptions;
  var selectedLabel = reactExports.useMemo(function() {
    if (multiple) {
      return selectedOptions.map(function(selectedOption) {
        return get(selectedOption || {}, (keys2 === null || keys2 === void 0 ? void 0 : keys2.label) || "label") || "";
      });
    }
    return get(selectedOptions[0] || {}, (keys2 === null || keys2 === void 0 ? void 0 : keys2.label) || "label") || void 0;
  }, [selectedOptions, keys2, multiple]);
  var handleShowPopup = function handleShowPopup2(visible, ctx) {
    if (disabled) return;
    visible && toggleIsScrolling(false);
    !visible && onInputChange("", {
      trigger: "blur"
    });
    setShowPopup(visible, ctx);
  };
  var onTagChange = function onTagChange2(_currentTags, context) {
    var trigger = context.trigger, index = context.index, item = context.item, e2 = context.e;
    if (trigger === "backspace") {
      e2.stopPropagation();
      var closest = -1;
      var len = index;
      while (len >= 0) {
        var option = selectedOptions[len];
        if (!isSelectOptionGroup(option) && !option.disabled) {
          closest = len;
          break;
        }
        len -= 1;
      }
      if (closest < 0) {
        return;
      }
      var values = getSelectValueArr(value, value[closest], true, valueType, keys2);
      var _getSelectedOptions = getSelectedOptions(values, multiple, valueType, keys2, valueToOption), currentSelectedOptions = _getSelectedOptions.currentSelectedOptions;
      onChange(values, {
        e: e2,
        trigger,
        selectedOptions: currentSelectedOptions
      });
      return;
    }
    if (trigger === "tag-remove") {
      var _e$stopPropagation;
      e2 === null || e2 === void 0 || (_e$stopPropagation = e2.stopPropagation) === null || _e$stopPropagation === void 0 || _e$stopPropagation.call(e2);
      var _values = getSelectValueArr(value, value[index], true, valueType, keys2);
      var _getSelectedOptions2 = getSelectedOptions(_values, multiple, valueType, keys2, valueToOption), _currentSelectedOptions = _getSelectedOptions2.currentSelectedOptions;
      onChange(_values, {
        e: e2,
        trigger,
        selectedOptions: _currentSelectedOptions
      });
      if (isFunction(onRemove)) {
        onRemove({
          value: value[index],
          data: {
            label: item,
            value: value[index]
          },
          e: e2
        });
      }
    }
  };
  var onCheckAllChange = function onCheckAllChange2(checkAll, e2) {
    var _props$value;
    var isDisabledCheckAll = function isDisabledCheckAll2(opt) {
      return opt.checkAll && opt.disabled;
    };
    if (!multiple || currentOptions.some(function(opt) {
      return !isSelectOptionGroup(opt) && isDisabledCheckAll(opt);
    })) {
      return;
    }
    var isSelectableOption = function isSelectableOption2(opt) {
      return !opt.checkAll && !opt.disabled;
    };
    var getOptionValue = function getOptionValue2(option) {
      return valueType === "object" ? option : option[(keys2 === null || keys2 === void 0 ? void 0 : keys2.value) || "value"];
    };
    var values = [];
    currentOptions.forEach(function(option) {
      if (isSelectOptionGroup(option)) {
        option.children.forEach(function(item) {
          if (isSelectableOption(item)) {
            values.push(getOptionValue(item));
          }
        });
      } else if (isSelectableOption(option)) {
        values.push(getOptionValue(option));
      }
    });
    var _getSelectedOptions3 = getSelectedOptions(values, multiple, valueType, keys2, valueToOption), currentSelectedOptions = _getSelectedOptions3.currentSelectedOptions, allSelectedValue = _getSelectedOptions3.allSelectedValue;
    var checkAllValue = !checkAll && allSelectedValue.length !== ((_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.length) ? allSelectedValue : [];
    onChange === null || onChange === void 0 || onChange(checkAllValue, {
      e: e2,
      trigger: !checkAll ? "check" : "uncheck",
      selectedOptions: currentSelectedOptions
    });
  };
  var handleChange = function handleChange2(value2, context) {
    if (multiple) {
      !reserveKeyword && inputValue && onInputChange("", {
        e: context.e,
        trigger: "change"
      });
    }
    if (creatable && isFunction(onCreate)) {
      if (options.filter(function(option2) {
        return option2.value === value2;
      }).length === 0) {
        onCreate(value2);
      }
    }
    var selectedValue = multiple ? context.value : value2;
    var _getSelectedOptions4 = getSelectedOptions(value2, multiple, valueType, keys2, valueToOption, selectedValue), currentSelectedOptions = _getSelectedOptions4.currentSelectedOptions, currentOption = _getSelectedOptions4.currentOption;
    onChange === null || onChange === void 0 || onChange(value2, {
      e: context.e,
      trigger: context.trigger,
      selectedOptions: currentSelectedOptions,
      option: currentOption
    });
    if (multiple && (context === null || context === void 0 ? void 0 : context.trigger) === "uncheck" && isFunction(onRemove)) {
      var value3 = context === null || context === void 0 ? void 0 : context.value;
      var option = options.find(function(option2) {
        return option2.value === value3;
      });
      onRemove({
        value: value3,
        data: option,
        e: context.e
      });
    }
  };
  var handleFilter = function handleFilter2(value2) {
    var filteredOptions = [];
    if (filterable && isFunction(onSearch)) {
      return;
    }
    if (!value2) {
      setCurrentOptions(tmpPropOptions);
      return;
    }
    var filterLabels = [];
    var filterMethods = function filterMethods2(option) {
      if (filter && isFunction(filter)) {
        return filter(value2, option);
      }
      var upperValue = value2.toUpperCase();
      return ((option === null || option === void 0 ? void 0 : option.label) || "").toUpperCase().includes(upperValue);
    };
    tmpPropOptions === null || tmpPropOptions === void 0 || tmpPropOptions.forEach(function(option) {
      if (isSelectOptionGroup(option)) {
        var _option$children;
        filteredOptions.push(_objectSpread$e(_objectSpread$e({}, option), {}, {
          children: (_option$children = option.children) === null || _option$children === void 0 ? void 0 : _option$children.filter(function(child) {
            if (filterMethods(child)) {
              filterLabels.push(child.label);
              return true;
            }
            return false;
          })
        }));
      } else if (filterMethods(option)) {
        filterLabels.push(option.label);
        filteredOptions.push(option);
      }
    });
    var isSameLabelOptionExist = filterLabels.includes(value2);
    if (creatable && !isSameLabelOptionExist) {
      filteredOptions = filteredOptions.concat([{
        label: value2,
        value: value2
      }]);
    }
    setCurrentOptions(filteredOptions);
  };
  var handleInputChange = function handleInputChange2(value2, context) {
    if (context.trigger !== "clear") {
      onInputChange(value2, {
        e: context.e,
        trigger: "input"
      });
    }
    if (value2 === void 0) {
      return;
    }
    if (isFunction(onSearch)) {
      onSearch(value2, {
        e: context.e
      });
      return;
    }
  };
  var handleClear = function handleClear2(context) {
    context.e.stopPropagation();
    if (Array.isArray(value)) {
      onChange([], _objectSpread$e(_objectSpread$e({}, context), {}, {
        trigger: "clear",
        selectedOptions: []
      }));
    } else {
      onChange(null, _objectSpread$e(_objectSpread$e({}, context), {}, {
        trigger: "clear",
        selectedOptions: []
      }));
    }
    onClear(context);
  };
  reactExports.useEffect(function() {
    if (typeof inputValue !== "undefined") {
      handleFilter(String(inputValue));
    }
  }, [inputValue, tmpPropOptions]);
  var renderSuffixIcon = function renderSuffixIcon2() {
    if (suffixIcon) {
      return suffixIcon;
    }
    if (loading) {
      return /* @__PURE__ */ React.createElement(Loading2, {
        className: classNames$2("".concat(name, "__right-icon"), "".concat(name, "__active-icon")),
        loading: true,
        size: "small"
      });
    }
    return showArrow && /* @__PURE__ */ React.createElement(FakeArrow, {
      className: "".concat(name, "__right-icon"),
      isActive: showPopup,
      disabled
    });
  };
  var getPopupInstance = reactExports.useCallback(function() {
    var _selectInputRef$curre;
    return (_selectInputRef$curre = selectInputRef.current) === null || _selectInputRef$curre === void 0 ? void 0 : _selectInputRef$curre.getPopupContentElement();
  }, []);
  var childrenWithProps = reactExports.Children.map(children, function(child) {
    if (/* @__PURE__ */ reactExports.isValidElement(child)) {
      var addedProps = {
        multiple
      };
      return /* @__PURE__ */ reactExports.cloneElement(child, _objectSpread$e({}, addedProps));
    }
    return child;
  });
  var renderContent = function renderContent2() {
    var popupContentProps = {
      onChange: handleChange,
      value,
      className,
      size,
      multiple,
      showPopup,
      setShowPopup: function setShowPopup2(show) {
        return handleShowPopup(show, {});
      },
      options: currentOptions,
      empty,
      max: max2,
      loadingText,
      loading,
      valueType,
      keys: keys2,
      panelBottomContent,
      panelTopContent,
      onCheckAllChange,
      getPopupInstance,
      scroll
    };
    return /* @__PURE__ */ React.createElement(PopupContent, _objectSpread$e({}, popupContentProps), childrenWithProps);
  };
  var renderValueDisplay = function renderValueDisplay2() {
    if (!valueDisplay) {
      if (!multiple) {
        if (typeof selectedLabel !== "string") {
          return selectedLabel;
        }
        return "";
      }
      return function(_ref2) {
        var val = _ref2.value;
        return val.slice(0, minCollapsedNum ? minCollapsedNum : val.length).map(function(v2, key) {
          var filterOption = options === null || options === void 0 ? void 0 : options.find(function(option) {
            return option.label === v2;
          });
          return /* @__PURE__ */ React.createElement(Tag, _objectSpread$e(_objectSpread$e({
            key,
            closable: !(filterOption !== null && filterOption !== void 0 && filterOption.disabled) && !disabled && !readonly,
            size
          }, tagProps), {}, {
            onClose: function onClose(_ref3) {
              var _e$nativeEvent, _e$nativeEvent$stopIm, _tagProps$onClose;
              var e2 = _ref3.e;
              e2.stopPropagation();
              e2 === null || e2 === void 0 || (_e$nativeEvent = e2.nativeEvent) === null || _e$nativeEvent === void 0 || (_e$nativeEvent$stopIm = _e$nativeEvent.stopImmediatePropagation) === null || _e$nativeEvent$stopIm === void 0 || _e$nativeEvent$stopIm.call(_e$nativeEvent);
              var values = getSelectValueArr(value, value[key], true, valueType, keys2);
              var _getSelectedOptions5 = getSelectedOptions(values, multiple, valueType, keys2, valueToOption, value), currentSelectedOptions = _getSelectedOptions5.currentSelectedOptions;
              onChange(values, {
                e: e2,
                selectedOptions: currentSelectedOptions,
                trigger: "tag-remove"
              });
              tagProps === null || tagProps === void 0 || (_tagProps$onClose = tagProps.onClose) === null || _tagProps$onClose === void 0 || _tagProps$onClose.call(tagProps, {
                e: e2
              });
              onRemove === null || onRemove === void 0 || onRemove({
                value: value[key],
                data: {
                  label: v2,
                  value: value[key]
                },
                e: e2
              });
            }
          }), v2);
        });
      };
    }
    if (typeof valueDisplay === "string") {
      return valueDisplay;
    }
    if (multiple) {
      return function(_ref4) {
        var onClose = _ref4.onClose;
        return parseContentTNode(valueDisplay, {
          value: selectedOptions,
          onClose
        });
      };
    }
    return parseContentTNode(valueDisplay, {
      value: selectedLabel,
      onClose: noop
    });
  };
  var updateScrollTop = function updateScrollTop2(content) {
    if (!content || isScrolling) {
      return;
    }
    var firstSelectedNode = content.querySelector(".".concat(classPrefix, "-is-selected"));
    if (!multiple && firstSelectedNode) {
      var _getComputedStyle = getComputedStyle(firstSelectedNode), paddingBottom = _getComputedStyle.paddingBottom;
      var _getComputedStyle2 = getComputedStyle(content), marginBottom = _getComputedStyle2.marginBottom;
      var elementBottomHeight = parseInt(paddingBottom, 10) + parseInt(marginBottom, 10);
      var updateValue = getOffsetTopToContainer(firstSelectedNode, content) - content.offsetTop - (content.clientHeight - firstSelectedNode.clientHeight) + elementBottomHeight;
      setTimeout(function() {
        content.scrollTop = updateValue;
      });
    }
  };
  var onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave;
  var handleEnter = function handleEnter2(_, context) {
    onEnter === null || onEnter === void 0 || onEnter(_objectSpread$e(_objectSpread$e({}, context), {}, {
      value
    }));
  };
  var handleScroll = function handleScroll2(_ref5) {
    var e2 = _ref5.e;
    toggleIsScrolling(true);
    onScroll === null || onScroll === void 0 || onScroll({
      e: e2
    });
    if (onScrollToBottom) {
      var debounceOnScrollBottom = debounce$1(function(e22) {
        return onScrollToBottom({
          e: e22
        });
      }, 100);
      var _e$target = e2.target, scrollTop = _e$target.scrollTop, clientHeight = _e$target.clientHeight, scrollHeight = _e$target.scrollHeight;
      if (clientHeight + Math.floor(scrollTop) === scrollHeight) {
        debounceOnScrollBottom(e2);
      }
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: classNames$2("".concat(name, "__wrap"), className),
    style,
    onMouseEnter,
    onMouseLeave
  }, /* @__PURE__ */ React.createElement(SelectInput, _objectSpread$e({
    autoWidth: !(style !== null && style !== void 0 && style.width) && autoWidth,
    ref: composeRefs(ref, selectInputRef),
    className: name,
    readonly,
    autofocus: props.autofocus,
    allowInput: (filterable !== null && filterable !== void 0 ? filterable : local.filterable) || isFunction(filter),
    multiple,
    value: selectedLabel,
    options: selectedOptions,
    valueDisplay: renderValueDisplay(),
    clearable,
    disabled,
    status: props.status,
    tips: props.tips,
    borderless,
    label,
    suffix: props.suffix,
    prefixIcon,
    suffixIcon: renderSuffixIcon(),
    panel: renderContent(),
    placeholder: !multiple && showPopup && selectedLabel ? selectedLabel : placeholder || t2(local.placeholder),
    inputValue,
    tagInputProps: _objectSpread$e({
      size
    }, tagInputProps),
    tagProps: _objectSpread$e({
      size
    }, tagProps),
    inputProps: _objectSpread$e({
      size
    }, inputProps),
    minCollapsedNum,
    collapsedItems,
    updateScrollTop,
    popupProps: _objectSpread$e({
      overlayClassName: ["".concat(name, "__dropdown"), overlayClassName],
      onScroll: handleScroll
    }, restPopupProps),
    popupVisible: showPopup,
    onPopupVisibleChange: handleShowPopup,
    onTagChange,
    onInputChange: handleInputChange,
    onFocus,
    onEnter: handleEnter,
    onBlur: function onBlur(_, context) {
      _onBlur === null || _onBlur === void 0 || _onBlur({
        value,
        e: context.e
      });
    },
    onClear: handleClear
  }, selectInputProps)));
}, {
  Option,
  OptionGroup
});
Select$1.displayName = "Select";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Select = Select$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var useTabClass = function useTabClass2() {
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var tdTabsClassPrefix = "".concat(classPrefix, "-tabs");
  var tdTabPanelClassPrefix = "".concat(classPrefix, "-tab-panel");
  var tdClassGenerator = function tdClassGenerator2(append) {
    return "".concat(classPrefix, "-").concat(append);
  };
  var tdTabsClassGenerator = function tdTabsClassGenerator2(append) {
    return "".concat(tdTabsClassPrefix, "__").concat(append);
  };
  var tdTabPanelClassGenerator = function tdTabPanelClassGenerator2(append) {
    return "".concat(tdTabPanelClassPrefix, "__").concat(append);
  };
  var tdSizeClassGenerator = function tdSizeClassGenerator2(size) {
    return "".concat(classPrefix, "-size-").concat(size === "large" ? "l" : "m");
  };
  return {
    tdTabsClassPrefix,
    tdTabPanelClassPrefix,
    tdClassGenerator,
    tdTabsClassGenerator,
    tdTabPanelClassGenerator,
    tdSizeClassGenerator
  };
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$d(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$d(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$d(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$d(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var TabNavItem = function TabNavItem2(props) {
  var label = props.label, removable = props.removable, isActive = props.isActive, _props$onClick = props.onClick, onClick = _props$onClick === void 0 ? noop : _props$onClick, theme = props.theme, placement = props.placement, _props$onRemove = props.onRemove, onRemove = _props$onRemove === void 0 ? noop : _props$onRemove, value = props.value, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, index = props.index, _props$onTabRemove = props.onTabRemove, onTabRemove = _props$onTabRemove === void 0 ? noop : _props$onTabRemove, innerRef = props.innerRef, dragProps = props.dragProps;
  var _useGlobalIcon = useGlobalIcon({
    CloseIcon
  }), CloseIcon$1 = _useGlobalIcon.CloseIcon;
  var isCard = theme === "card";
  var _useTabClass = useTabClass(), tdTabsClassGenerator = _useTabClass.tdTabsClassGenerator, tdClassGenerator = _useTabClass.tdClassGenerator, tdSizeClassGenerator = _useTabClass.tdSizeClassGenerator;
  var _useDomRefCallback = useDomRefCallback(), _useDomRefCallback2 = _slicedToArray(_useDomRefCallback, 2), navItemDom = _useDomRefCallback2[0], setRefCurrent = _useDomRefCallback2[1];
  useRipple(navItemDom);
  return /* @__PURE__ */ React.createElement("div", _objectSpread$d(_objectSpread$d({}, dragProps), {}, {
    ref: innerRef,
    onClick: disabled ? noop : onClick,
    className: classNames$2(tdTabsClassGenerator("nav-item"), isCard ? tdTabsClassGenerator("nav--card") : "", tdSizeClassGenerator(size), isActive ? tdClassGenerator("is-active") : "", tdClassGenerator("is-".concat(placement)), disabled ? tdClassGenerator("is-disabled") : "", props.className)
  }), isCard ? /* @__PURE__ */ React.createElement("span", {
    className: classNames$2(tdTabsClassGenerator("nav-item-text-wrapper"))
  }, label) : /* @__PURE__ */ React.createElement("div", {
    ref: setRefCurrent,
    className: classNames$2(tdTabsClassGenerator("nav-item-wrapper"))
  }, /* @__PURE__ */ React.createElement("span", {
    className: classNames$2(tdTabsClassGenerator("nav-item-text-wrapper"))
  }, label)), removable ? /* @__PURE__ */ React.createElement(CloseIcon$1, {
    className: classNames$2("remove-btn"),
    onClick: function onClick2(e2) {
      if (disabled) {
        return;
      }
      e2.stopPropagation();
      onRemove({
        value,
        e: e2
      });
      onTabRemove({
        value,
        e: e2,
        index
      });
    }
  }) : null);
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var TabBar = function TabBar2(props) {
  var tabPosition = props.tabPosition, activeId = props.activeId, containerRef = props.containerRef, navsWrapRef = props.navsWrapRef;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var _useState = reactExports.useState({}), _useState2 = _slicedToArray(_useState, 2), barStyle = _useState2[0], setBarStyle = _useState2[1];
  var tabsClassPrefix = "".concat(classPrefix, "-tabs");
  var currentActiveIdRef = reactExports.useRef(activeId);
  reactExports.useEffect(function() {
    currentActiveIdRef.current = activeId;
  }, [activeId]);
  var computeStyle = React.useCallback(function() {
    var isHorizontal = ["bottom", "top"].includes(tabPosition);
    var transformPosition = isHorizontal ? "translateX" : "translateY";
    var itemProp = isHorizontal ? "width" : "height";
    var barBorderProp = isHorizontal ? "width" : "height";
    var offset2 = 0;
    if (containerRef.current) {
      var _containerRef$current;
      var itemsRef = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelectorAll(".".concat(tabsClassPrefix, "__nav-item"));
      if (itemsRef.length - 1 >= currentActiveIdRef.current) {
        itemsRef.forEach(function(item, itemIndex) {
          if (itemIndex < currentActiveIdRef.current) {
            offset2 += Number(getComputedStyle(item)[itemProp].replace("px", ""));
          }
        });
        var computedItem = itemsRef[currentActiveIdRef.current];
        if (!computedItem) {
          setBarStyle(_defineProperty$2({
            transform: "".concat(transformPosition, "(", 0, "px)")
          }, barBorderProp, 0));
          return;
        }
        var itemPropValue = getComputedStyle(computedItem)[itemProp];
        setBarStyle(_defineProperty$2({
          transform: "".concat(transformPosition, "(").concat(offset2, "px)")
        }, barBorderProp, itemPropValue || 0));
      }
    }
  }, [currentActiveIdRef, containerRef, tabPosition, tabsClassPrefix]);
  reactExports.useEffect(function() {
    if (containerRef.current) {
      setTimeout(function() {
        return computeStyle();
      });
    }
  }, [tabPosition, activeId, containerRef.current]);
  var handleMutationObserver = React.useCallback(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === "characterData") {
        computeStyle();
      }
    });
  }, [computeStyle]);
  useMutationObservable(containerRef.current, handleMutationObserver);
  useResizeObserver(navsWrapRef, computeStyle);
  return /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(_defineProperty$2(_defineProperty$2({}, "".concat(tabsClassPrefix, "__bar"), true), "".concat(classPrefix, "-is-").concat(tabPosition), true)),
    style: barStyle
  });
};
TabBar.displayName = "TabBar";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var getDomWidth = function getDomWidth2(dom) {
  return (dom === null || dom === void 0 ? void 0 : dom.offsetWidth) || 0;
};
var getDomOffsetLeft = function getDomOffsetLeft2(dom) {
  return (dom === null || dom === void 0 ? void 0 : dom.offsetLeft) || 0;
};
function calculateOffset(depElement, offset2, scrollPosition) {
  var navsContainer = depElement.navsContainer, activeTab = depElement.activeTab, rightOperations = depElement.rightOperations, leftOperations = depElement.leftOperations;
  var tabWidth = getDomWidth(activeTab);
  var wrapWidth = getDomWidth(navsContainer);
  var tabOffset = getDomOffsetLeft(activeTab);
  var rightOperationsWidth = getDomWidth(rightOperations);
  var leftOperationsWidth = getDomWidth(leftOperations);
  if (scrollPosition === "auto") {
    if (tabOffset - leftOperationsWidth < offset2) {
      return tabOffset - leftOperationsWidth;
    }
    if (tabOffset + tabWidth > offset2 + wrapWidth - rightOperationsWidth) {
      return tabOffset + tabWidth - wrapWidth + rightOperationsWidth;
    }
  } else if (scrollPosition === "start") {
    return tabOffset - leftOperationsWidth;
  } else if (scrollPosition === "center") {
    return tabOffset + (tabWidth - wrapWidth) / 2;
  } else if (scrollPosition === "end") {
    return tabOffset + tabWidth - wrapWidth + rightOperationsWidth;
  }
  return offset2;
}
function calcPrevOrNextOffset(elements, offset2, action) {
  var navsContainer = elements.navsContainer, activeTab = elements.activeTab;
  var navsContainerWidth = getDomWidth(navsContainer);
  var activeTabWidth = getDomWidth(activeTab);
  var diffWidth = Math.abs(navsContainerWidth - activeTabWidth);
  if (action === "next") {
    return offset2 + diffWidth;
  }
  return offset2 - diffWidth;
}
function calcMaxOffset(elements) {
  var navsWrap = elements.navsWrap, navsContainer = elements.navsContainer, rightOperations = elements.rightOperations, toRightBtn = elements.toRightBtn;
  var wrapWidth = getDomWidth(navsWrap);
  var containerWidth = getDomWidth(navsContainer);
  var rightOperationsWidth = getDomWidth(rightOperations);
  var toRightBtnWidth = getDomWidth(toRightBtn);
  return wrapWidth - containerWidth + rightOperationsWidth - toRightBtnWidth;
}
function calcValidOffset(offset2, maxOffset) {
  return Math.max(0, Math.min(offset2, maxOffset));
}
function ownKeys$c(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$c(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$c(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$c(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var TabNav = function TabNav2(props) {
  var _props$placement = props.placement, placement = _props$placement === void 0 ? "top" : _props$placement, _props$itemList = props.itemList, itemList = _props$itemList === void 0 ? [] : _props$itemList, theme = props.theme, addable = props.addable, onAdd = props.onAdd, _props$scrollPosition = props.scrollPosition, scrollPosition = _props$scrollPosition === void 0 ? "auto" : _props$scrollPosition, _props$size = props.size, size = _props$size === void 0 ? "medium" : _props$size, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$onRemove = props.onRemove, onRemove = _props$onRemove === void 0 ? noop : _props$onRemove, _props$onChange = props.onChange, onChange = _props$onChange === void 0 ? noop : _props$onChange, activeValue = props.activeValue, children = props.children, action = props.action, getDragProps = props.getDragProps;
  var _useGlobalIcon = useGlobalIcon({
    AddIcon,
    ChevronLeftIcon,
    ChevronRightIcon
  }), AddIcon$1 = _useGlobalIcon.AddIcon, ChevronLeftIcon$1 = _useGlobalIcon.ChevronLeftIcon, ChevronRightIcon$1 = _useGlobalIcon.ChevronRightIcon;
  var isCard = theme === "card";
  var _useTabClass = useTabClass(), tdTabsClassGenerator = _useTabClass.tdTabsClassGenerator, tdClassGenerator = _useTabClass.tdClassGenerator, tdSizeClassGenerator = _useTabClass.tdSizeClassGenerator;
  var navsContainerRef = reactExports.useRef(null);
  var navsWrapRef = reactExports.useRef(null);
  var getIndex = reactExports.useCallback(function(value) {
    var index = itemList.findIndex(function(item) {
      return item.value === value;
    });
    return index > -1 ? index : -1;
  }, [itemList]);
  var activeIndex = getIndex(activeValue);
  var _useState = reactExports.useState(false), _useState2 = _slicedToArray(_useState, 2), canToLeft = _useState2[0], setToLeftBtnVisible = _useState2[1];
  var _useState3 = reactExports.useState(false), _useState4 = _slicedToArray(_useState3, 2), canToRight = _useState4[0], setToRightBtnVisible = _useState4[1];
  var scrollBarRef = reactExports.useRef(null);
  var leftOperationsRef = reactExports.useRef(null);
  var rightOperationsRef = reactExports.useRef(null);
  var toLeftBtnRef = reactExports.useRef(null);
  var toRightBtnRef = reactExports.useRef(null);
  var _useState5 = reactExports.useState(0), _useState6 = _slicedToArray(_useState5, 2), scrollLeft = _useState6[0], setScrollLeft = _useState6[1];
  var _useState7 = reactExports.useState(0), _useState8 = _slicedToArray(_useState7, 2), maxScrollLeft = _useState8[0], setMaxScrollLeft = _useState8[1];
  var _useState9 = reactExports.useState(null), _useState0 = _slicedToArray(_useState9, 2), activeTab = _useState0[0], setActiveTab = _useState0[1];
  var setOffset = function setOffset2(offset2) {
    setScrollLeft(calcValidOffset(offset2, maxScrollLeft));
  };
  var getMaxScrollLeft = reactExports.useCallback(function() {
    if (["top", "bottom"].includes(placement.toLowerCase())) {
      var maxOffset = calcMaxOffset({
        navsWrap: navsWrapRef.current,
        navsContainer: navsContainerRef.current,
        rightOperations: rightOperationsRef.current,
        toRightBtn: toRightBtnRef.current
      });
      setMaxScrollLeft(maxOffset);
    }
  }, [placement]);
  var moveActiveTabIntoView = function moveActiveTabIntoView2() {
    var offset2 = calculateOffset({
      activeTab,
      navsContainer: navsContainerRef.current,
      leftOperations: leftOperationsRef.current,
      rightOperations: rightOperationsRef.current
    }, scrollLeft, scrollPosition);
    setOffset(offset2);
  };
  reactExports.useEffect(function() {
    var timeout = setTimeout(function() {
      moveActiveTabIntoView();
    }, 100);
    return function() {
      return clearTimeout(timeout);
    };
  }, [activeTab, maxScrollLeft, scrollPosition]);
  reactExports.useEffect(function() {
    if (["top", "bottom"].includes(placement.toLowerCase())) {
      var canToLeft2 = scrollLeft > 1;
      var canToRight2 = scrollLeft < maxScrollLeft - 1;
      setToLeftBtnVisible(canToLeft2);
      setToRightBtnVisible(canToRight2);
    }
  }, [placement, scrollLeft, maxScrollLeft]);
  var handleScroll = function handleScroll2(action2) {
    var offset2 = calcPrevOrNextOffset({
      activeTab,
      navsContainer: navsContainerRef.current
    }, scrollLeft, action2);
    setOffset(offset2);
  };
  reactExports.useEffect(function() {
    var scrollBar = scrollBarRef.current;
    if (!scrollBar) return;
    var handleWheel = function handleWheel2(e2) {
      if (!canToLeft && !canToRight) return;
      e2.preventDefault();
      var deltaX = e2.deltaX, deltaY = e2.deltaY;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setOffset(scrollLeft + deltaX);
      } else {
        setOffset(scrollLeft + deltaY);
      }
    };
    scrollBar.addEventListener("wheel", handleWheel, {
      passive: false
    });
    return function() {
      scrollBar === null || scrollBar === void 0 || scrollBar.removeEventListener("wheel", handleWheel);
    };
  });
  reactExports.useEffect(function() {
    var onResize = debounce$1(getMaxScrollLeft, 300);
    window.addEventListener("resize", onResize);
    return function() {
      window.removeEventListener("resize", onResize);
      onResize.cancel();
    };
  });
  reactExports.useEffect(function() {
    getMaxScrollLeft();
  }, [itemList.length, children, getMaxScrollLeft]);
  var TabBarCom = isCard ? null : /* @__PURE__ */ React.createElement(TabBar, {
    tabPosition: placement,
    activeId: activeIndex,
    containerRef: navsWrapRef,
    navsWrapRef
  });
  var handleTabItemRemove = function handleTabItemRemove2(removeItem) {
    var removeValue = removeItem.value, removeIndex = removeItem.index;
    if (removeValue === activeValue) {
      var _itemList;
      onChange(removeIndex === 0 ? (_itemList = itemList[removeIndex + 1]) === null || _itemList === void 0 ? void 0 : _itemList.value : itemList[removeIndex - 1].value);
    }
    onRemove(removeItem);
  };
  var handleTabItemClick = function handleTabItemClick2(clickItem) {
    var _clickItem$onClick;
    if (activeValue !== clickItem.value) {
      onChange(clickItem.value);
    }
    clickItem === null || clickItem === void 0 || (_clickItem$onClick = clickItem.onClick) === null || _clickItem$onClick === void 0 || _clickItem$onClick.call(clickItem, clickItem.value);
  };
  var handleTabAdd = function handleTabAdd2(e2) {
    onAdd({
      e: e2
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    ref: navsContainerRef,
    className: classNames$2(tdTabsClassGenerator("nav")),
    style: {
      minHeight: 48
    }
  }, /* @__PURE__ */ React.createElement("div", {
    ref: leftOperationsRef,
    className: classNames$2(tdTabsClassGenerator("operations"), tdTabsClassGenerator("operations--left"))
  }, canToLeft ? /* @__PURE__ */ React.createElement("div", {
    onClick: function onClick() {
      handleScroll("prev");
    },
    className: classNames$2(tdTabsClassGenerator("btn"), tdTabsClassGenerator("btn--left"), tdSizeClassGenerator(size)),
    ref: toLeftBtnRef
  }, /* @__PURE__ */ React.createElement(ChevronLeftIcon$1, null)) : null), /* @__PURE__ */ React.createElement("div", {
    ref: rightOperationsRef,
    className: classNames$2(tdTabsClassGenerator("operations"), tdTabsClassGenerator("operations--right"))
  }, canToRight ? /* @__PURE__ */ React.createElement("div", {
    onClick: function onClick() {
      handleScroll("next");
    },
    className: classNames$2(tdTabsClassGenerator("btn"), tdTabsClassGenerator("btn--right"), tdSizeClassGenerator(size)),
    ref: toRightBtnRef
  }, /* @__PURE__ */ React.createElement(ChevronRightIcon$1, null)) : null, addable ? /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(tdTabsClassGenerator("add-btn"), tdTabsClassGenerator("btn"), tdSizeClassGenerator(size)),
    onClick: handleTabAdd
  }, /* @__PURE__ */ React.createElement(AddIcon$1, null)) : null, action ? /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(tdTabsClassGenerator("btn"), tdTabsClassGenerator("nav-action"), tdSizeClassGenerator(size))
  }, parseTNode(action)) : null), /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(tdTabsClassGenerator("nav-container"), isCard ? tdTabsClassGenerator("nav--card") : "", tdClassGenerator("is-".concat(placement)), addable ? tdClassGenerator("is-addable") : "")
  }, /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(tdTabsClassGenerator("nav-scroll"), canToLeft || canToRight ? tdClassGenerator("is-scrollable") : ""),
    ref: scrollBarRef
  }, /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(tdTabsClassGenerator("nav-wrap"), ["left", "right"].includes(placement) ? tdClassGenerator("is-vertical") : "", tdClassGenerator("is-smooth")),
    style: {
      transform: "translate(".concat(-scrollLeft, "px, 0)")
    },
    ref: navsWrapRef
  }, placement !== "bottom" ? TabBarCom : null, !isCard && /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(tdTabsClassGenerator("bar"), tdClassGenerator("is-".concat(placement)))
  }), itemList.map(function(v2, index) {
    return /* @__PURE__ */ React.createElement(TabNavItem, _objectSpread$c(_objectSpread$c(_objectSpread$c({}, omit(props, ["className", "style"])), v2), {}, {
      dragProps: _objectSpread$c({}, getDragProps === null || getDragProps === void 0 ? void 0 : getDragProps(index, v2)),
      onRemove: v2.onRemove,
      key: v2.value,
      label: v2.label,
      isActive: activeValue === v2.value,
      theme,
      placement,
      index,
      disabled: disabled || v2.disabled,
      onClick: function onClick() {
        return handleTabItemClick(v2);
      },
      onTabRemove: handleTabItemRemove,
      innerRef: function innerRef(ref) {
        if (activeValue === v2.value) {
          setActiveTab(ref);
        }
      }
    }));
  }), placement === "bottom" ? TabBarCom : null))));
};
TabNav.displayName = "TabNav";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var tabsDefaultProps = {
  addable: false,
  disabled: false,
  dragSort: false,
  placement: "top",
  scrollPosition: "auto",
  size: "medium",
  theme: "normal"
};
var tabPanelDefaultProps = {
  destroyOnHide: true,
  disabled: false,
  draggable: true,
  lazy: false,
  removable: false
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$b(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$b(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$b(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$b(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var TabPanel = function TabPanel2(props) {
  var _useDefaultProps = useDefaultProps(props, tabPanelDefaultProps), className = _useDefaultProps.className, lazy = _useDefaultProps.lazy, isActive = _useDefaultProps.isActive, destroyOnHide = _useDefaultProps.destroyOnHide, style = _useDefaultProps.style;
  var _useTabClass = useTabClass(), tdTabPanelClassPrefix = _useTabClass.tdTabPanelClassPrefix;
  var lazyRenderRef = reactExports.useRef(lazy);
  if (lazy && isActive && lazyRenderRef.current) {
    lazyRenderRef.current = false;
  }
  if (!isActive && destroyOnHide || lazyRenderRef.current) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(tdTabPanelClassPrefix, className),
    style: _objectSpread$b({
      display: !isActive ? "none" : void 0
    }, style)
  }, props.children || props.panel);
};
TabPanel.displayName = "TabPanel";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$a(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$a(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$a(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$a(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Tabs$1 = forwardRefWithStatics(function(originalProps, ref) {
  var props = useDefaultProps(originalProps, tabsDefaultProps);
  var children = props.children, list = props.list, placement = props.placement, dragSort = props.dragSort, className = props.className, style = props.style, onRemove = props.onRemove;
  var _useControlled = useControlled(props, "value", props.onChange), _useControlled2 = _slicedToArray(_useControlled, 2), value = _useControlled2[0], onChange = _useControlled2[1];
  var _useTabClass = useTabClass(), tdTabsClassPrefix = _useTabClass.tdTabsClassPrefix, tdTabsClassGenerator = _useTabClass.tdTabsClassGenerator, tdClassGenerator = _useTabClass.tdClassGenerator;
  var targetClassNameRegExpStr = "^".concat(tdTabsClassPrefix, "(__nav-item|__nav-item-wrapper|__nav-item-text-wrapper)");
  var _useDragSorter = useDragSorter(_objectSpread$a(_objectSpread$a({}, props), {}, {
    sortOnDraggable: dragSort,
    onDragOverCheck: {
      x: true,
      targetClassNameRegExp: new RegExp(targetClassNameRegExpStr)
    }
  })), getDragProps = _useDragSorter.getDragProps;
  var memoChildren = React.useMemo(function() {
    if (!list || list.length === 0) {
      return children;
    }
    return list.map(function(panelProps) {
      return /* @__PURE__ */ React.createElement(TabPanel, _objectSpread$a({
        key: panelProps.value
      }, panelProps));
    });
  }, [children, list]);
  var itemList = React.Children.map(memoChildren, function(child) {
    if (child && child.type === TabPanel) {
      return child.props;
    }
    return null;
  });
  var handleChange = React.useCallback(function(v2) {
    onChange === null || onChange === void 0 || onChange(v2);
  }, [onChange]);
  var headerNode = React.useMemo(function() {
    return /* @__PURE__ */ React.createElement("div", {
      className: classNames$2(tdTabsClassGenerator("header"), tdClassGenerator("is-".concat(placement)))
    }, /* @__PURE__ */ React.createElement(TabNav, _objectSpread$a(_objectSpread$a({}, props), {}, {
      getDragProps,
      activeValue: value,
      onRemove,
      itemList,
      onChange: handleChange
    })));
  }, [props, getDragProps, value, onRemove, itemList, handleChange, placement, tdTabsClassGenerator, tdClassGenerator]);
  return /* @__PURE__ */ React.createElement("div", {
    ref,
    className: classNames$2(tdTabsClassPrefix, className),
    style
  }, placement !== "bottom" ? headerNode : null, /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(tdTabsClassGenerator("content"), tdClassGenerator("is-".concat(placement)))
  }, React.Children.map(memoChildren, function(child) {
    if (child && child.type === TabPanel) {
      return /* @__PURE__ */ React.createElement(TabPanel, _objectSpread$a(_objectSpread$a({}, child.props), {}, {
        isActive: child.props.value === value
      }));
    }
    return null;
  })), placement === "bottom" ? headerNode : null);
}, {
  TabPanel
});
Tabs$1.displayName = "Tabs";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Tabs = Tabs$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var switchDefaultProps = {
  label: [],
  loading: false,
  size: "medium"
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$2 = ["className", "value", "defaultValue", "disabled", "loading", "size", "label", "customValue", "onChange", "beforeChange"];
function ownKeys$9(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$9(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$9(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$9(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Switch$1 = /* @__PURE__ */ React.forwardRef(function(originalProps, ref) {
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var props = useDefaultProps(originalProps, switchDefaultProps);
  var className = props.className, value = props.value, defaultValue = props.defaultValue, disabled = props.disabled, loading = props.loading, size = props.size, label = props.label, customValue = props.customValue, onChange = props.onChange, beforeChange = props.beforeChange, restProps = _objectWithoutProperties$2(props, _excluded$2);
  var _ref = customValue || [], _ref2 = _slicedToArray(_ref, 2), _ref2$ = _ref2[0], activeValue = _ref2$ === void 0 ? true : _ref2$, _ref2$2 = _ref2[1], inactiveValue = _ref2$2 === void 0 ? false : _ref2$2;
  var isControlled = typeof value !== "undefined";
  var initChecked = defaultValue === activeValue || value === activeValue;
  var _useState = reactExports.useState(initChecked), _useState2 = _slicedToArray(_useState, 2), innerChecked = _useState2[0], setInnerChecked = _useState2[1];
  var contentNode = React.useMemo(function() {
    if (Array.isArray(label)) {
      var _label = _slicedToArray(label, 2), _label$ = _label[0], activeContent = _label$ === void 0 ? "" : _label$, _label$2 = _label[1], inactiveContent = _label$2 === void 0 ? "" : _label$2;
      var content = innerChecked ? activeContent : inactiveContent;
      return parseTNode(content, {
        value
      });
    }
    return parseTNode(label, {
      value
    });
  }, [label, innerChecked, value]);
  var handleChange = function handleChange2(e2) {
    !isControlled && setInnerChecked(!innerChecked);
    var changedValue = !innerChecked ? activeValue : inactiveValue;
    onChange === null || onChange === void 0 || onChange(changedValue, {
      e: e2
    });
  };
  var onInternalClick = function onInternalClick2(e2) {
    if (disabled) {
      return;
    }
    if (!beforeChange) {
      handleChange(e2);
      return;
    }
    Promise.resolve(beforeChange()).then(function(v2) {
      if (v2) {
        handleChange(e2);
      }
    })["catch"](function(e22) {
      log.error("Switch", "some error occurred: ".concat(e22));
    });
  };
  reactExports.useEffect(function() {
    if (Array.isArray(customValue) && !customValue.includes(value)) {
      log.error("Switch", "value is not in customValue: ".concat(JSON.stringify(customValue)));
    }
    isControlled && setInnerChecked(value === activeValue);
  }, [value, customValue, activeValue, isControlled]);
  var _useCommonClassName = useCommonClassName$1(), SIZE = _useCommonClassName.SIZE, STATUS = _useCommonClassName.STATUS;
  var switchClassName = classNames$2("".concat(classPrefix, "-switch"), className, _defineProperty$2(_defineProperty$2(_defineProperty$2({}, STATUS.checked, innerChecked), STATUS.disabled, disabled), STATUS.loading, loading), SIZE[size]);
  return /* @__PURE__ */ React.createElement("button", _objectSpread$9(_objectSpread$9({}, restProps), {}, {
    type: "button",
    role: "switch",
    disabled: disabled || loading,
    className: switchClassName,
    ref,
    onClick: onInternalClick
  }), /* @__PURE__ */ React.createElement("span", {
    className: "".concat(classPrefix, "-switch__handle")
  }, loading && /* @__PURE__ */ React.createElement(Loading2, {
    loading: true,
    size: "small"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "".concat(classPrefix, "-switch__content")
  }, contentNode));
});
Switch$1.displayName = "Switch";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Switch = Switch$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var cardDefaultProps = {
  bordered: true,
  headerBordered: false,
  hoverShadow: false,
  loading: false,
  shadow: false,
  size: "medium",
  theme: "normal"
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$8(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$8(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$8(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$8(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Card$1 = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var _props$children;
  var _useDefaultProps = useDefaultProps(props, cardDefaultProps), actions = _useDefaultProps.actions, avatar = _useDefaultProps.avatar, bordered = _useDefaultProps.bordered, className = _useDefaultProps.className, cover = _useDefaultProps.cover, description = _useDefaultProps.description, footer = _useDefaultProps.footer, header = _useDefaultProps.header, headerBordered = _useDefaultProps.headerBordered, hoverShadow = _useDefaultProps.hoverShadow, loading = _useDefaultProps.loading, shadow = _useDefaultProps.shadow, size = _useDefaultProps.size, style = _useDefaultProps.style, subtitle = _useDefaultProps.subtitle, title = _useDefaultProps.title, theme = _useDefaultProps.theme, status = _useDefaultProps.status, loadingProps = _useDefaultProps.loadingProps;
  var children = (_props$children = props.children) !== null && _props$children !== void 0 ? _props$children : props.content;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var commonClassNames = useCommonClassName$1();
  var isPoster2 = theme === "poster2";
  var cardClass = classNames$2("".concat(classPrefix, "-card"), className, _defineProperty$2(_defineProperty$2(_defineProperty$2(_defineProperty$2({}, commonClassNames.SIZE.small, size === "small"), "".concat(classPrefix, "-card--bordered"), bordered), "".concat(classPrefix, "-card--shadow"), shadow), "".concat(classPrefix, "-card--shadow-hover"), hoverShadow));
  var showHeader = header || title || subtitle || description || avatar || actions && !isPoster2 || status && isPoster2;
  var headerClass = classNames$2(_defineProperty$2(_defineProperty$2({}, "".concat(classPrefix, "-card__header"), showHeader), "".concat(classPrefix, "-card__title--bordered"), headerBordered));
  var titleClass = classNames$2(_defineProperty$2({}, "".concat(classPrefix, "-card__title"), title));
  var subtitleClass = classNames$2(_defineProperty$2({}, "".concat(classPrefix, "-card__subtitle"), subtitle));
  var actionClass = classNames$2(_defineProperty$2({}, "".concat(classPrefix, "-card__actions"), actions));
  var footerClass = classNames$2(_defineProperty$2({}, "".concat(classPrefix, "-card__footer"), footer));
  var coverClass = classNames$2(_defineProperty$2({}, "".concat(classPrefix, "-card__cover"), cover));
  var avatarClass = classNames$2(_defineProperty$2({}, "".concat(classPrefix, "-card__avatar"), avatar));
  var bodyClass = classNames$2(_defineProperty$2({}, "".concat(classPrefix, "-card__body"), children));
  var descriptionClass = classNames$2(_defineProperty$2({}, "".concat(classPrefix, "-card__description"), description));
  var renderTitle = title ? /* @__PURE__ */ React.createElement("div", {
    className: titleClass
  }, title) : null;
  var renderSubtitle = subtitle ? /* @__PURE__ */ React.createElement("div", {
    className: subtitleClass
  }, subtitle) : null;
  var renderDescription = description ? /* @__PURE__ */ React.createElement("p", {
    className: descriptionClass
  }, description) : null;
  var renderAvatar = avatar && /* @__PURE__ */ React.createElement("div", {
    className: avatarClass
  }, avatar);
  var renderHeaderActions = actions && !isPoster2 && /* @__PURE__ */ React.createElement("div", {
    className: actionClass
  }, actions);
  var renderFooterActions = actions && isPoster2 && /* @__PURE__ */ React.createElement("div", {
    className: actionClass
  }, actions);
  var renderStatus = status && isPoster2 && /* @__PURE__ */ React.createElement("div", {
    className: actionClass
  }, status);
  var renderHeader = function renderHeader2() {
    if (header) {
      return /* @__PURE__ */ React.createElement("div", {
        className: headerClass
      }, header);
    }
    return /* @__PURE__ */ React.createElement("div", {
      className: headerClass
    }, /* @__PURE__ */ React.createElement("div", {
      className: "".concat(classPrefix, "-card__header-wrapper")
    }, renderAvatar, /* @__PURE__ */ React.createElement("div", null, renderTitle, renderSubtitle, renderDescription)), renderHeaderActions, renderStatus);
  };
  var renderCover = cover ? /* @__PURE__ */ React.createElement("div", {
    className: coverClass
  }, typeof cover === "string" ? /* @__PURE__ */ React.createElement("img", {
    src: cover,
    alt: ""
  }) : cover) : null;
  var renderChildren = children && /* @__PURE__ */ React.createElement("div", {
    className: bodyClass
  }, children);
  var renderFooter = footer && /* @__PURE__ */ React.createElement("div", {
    className: footerClass
  }, /* @__PURE__ */ React.createElement("div", {
    className: "".concat(classPrefix, "-card__footer-wrapper")
  }, footer), renderFooterActions);
  var card = /* @__PURE__ */ React.createElement(React.Fragment, null, showHeader ? renderHeader() : null, renderCover, renderChildren, renderFooter);
  var childrenNode = null;
  if (!Reflect.has(props, "loading")) {
    childrenNode = card;
  } else if (/* @__PURE__ */ React.isValidElement(loading)) {
    childrenNode = /* @__PURE__ */ React.cloneElement(loading, null, card);
  } else {
    childrenNode = /* @__PURE__ */ React.createElement(Loading2, _objectSpread$8(_objectSpread$8({}, loadingProps), {}, {
      loading: !!loading
    }), card);
  }
  return /* @__PURE__ */ React.createElement("div", {
    ref,
    className: cardClass,
    style
  }, childrenNode);
});
Card$1.displayName = "Card";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Card = Card$1;
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var CollapseContext = /* @__PURE__ */ React.createContext({
  defaultExpandAll: false,
  disabled: false,
  expandIconPlacement: "left",
  expandOnRowClick: true,
  expandIcon: true
});
var useCollapseContext = function useCollapseContext2() {
  return React.useContext(CollapseContext);
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var collapseDefaultProps = {
  borderless: false,
  defaultExpandAll: false,
  expandIcon: true,
  expandIconPlacement: "left",
  expandMutex: false,
  expandOnRowClick: true
};
var collapsePanelDefaultProps = {
  destroyOnCollapse: false,
  disabled: void 0,
  expandIcon: void 0
};
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
function ownKeys$7(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$7(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$7(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$7(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var CollapsePanel = function CollapsePanel2(props) {
  var _useDefaultProps = useDefaultProps(props, collapsePanelDefaultProps), value = _useDefaultProps.value, disabled = _useDefaultProps.disabled, destroyOnCollapse = _useDefaultProps.destroyOnCollapse, expandIcon = _useDefaultProps.expandIcon, className = _useDefaultProps.className, style = _useDefaultProps.style, header = _useDefaultProps.header, headerRightContent = _useDefaultProps.headerRightContent, children = _useDefaultProps.children, index = _useDefaultProps.index;
  var _useCollapseContext = useCollapseContext(), disableAll = _useCollapseContext.disabled, defaultExpandAll = _useCollapseContext.defaultExpandAll, expandIconPlacement = _useCollapseContext.expandIconPlacement, expandOnRowClick = _useCollapseContext.expandOnRowClick, expandIconAll = _useCollapseContext.expandIcon, updateCollapseValue = _useCollapseContext.updateCollapseValue, collapseValue = _useCollapseContext.collapseValue;
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var componentName = "".concat(classPrefix, "-collapse-panel");
  var innerValue = value || index;
  var finalExpandIcon = (expandIcon === void 0 ? expandIconAll : expandIcon) || null;
  var headRef = reactExports.useRef(null);
  var iconRef = reactExports.useRef(null);
  var contentRef = reactExports.useRef(null);
  var bodyRef = reactExports.useRef(null);
  var isDisabled = disabled || !!disableAll;
  reactExports.useEffect(function() {
    if (defaultExpandAll) {
      updateCollapseValue(innerValue);
    }
  }, []);
  var isActive = Array.isArray(collapseValue) ? collapseValue.includes(innerValue) : collapseValue === innerValue;
  var classes = classNames$2(componentName, _defineProperty$2({}, "".concat(classPrefix, "-is-disabled"), isDisabled), className);
  var handleClick = function handleClick2(e2) {
    var canExpand = expandOnRowClick && e2.currentTarget === headRef.current || e2.currentTarget === iconRef.current;
    if (canExpand && !isDisabled) {
      updateCollapseValue(innerValue, {
        e: e2
      });
    }
    e2.stopPropagation();
  };
  var renderIcon3 = function renderIcon4() {
    var iconNode = null;
    if (/* @__PURE__ */ React.isValidElement(finalExpandIcon)) {
      iconNode = finalExpandIcon;
    } else if (finalExpandIcon) {
      iconNode = /* @__PURE__ */ React.createElement(FakeArrow, {
        className: classNames$2("".concat(componentName, "__icon--default"))
      });
    }
    return iconNode && /* @__PURE__ */ React.createElement("div", {
      className: "".concat(componentName, "__icon ").concat(componentName, "__icon--").concat(expandIconPlacement, " ").concat(isActive ? "".concat(componentName, "__icon--active") : ""),
      ref: iconRef,
      onClick: handleClick
    }, iconNode);
  };
  var renderHeader = function renderHeader2() {
    var cls = ["".concat(componentName, "__header"), _defineProperty$2({}, "".concat(classPrefix, "-is-clickable"), expandOnRowClick && !isDisabled)];
    return /* @__PURE__ */ React.createElement("div", {
      ref: headRef,
      className: classNames$2(cls),
      onClick: handleClick
    }, expandIconPlacement === "left" && renderIcon3(), header, /* @__PURE__ */ React.createElement("div", {
      className: "".concat(componentName, "__header--blank")
    }), headerRightContent, expandIconPlacement === "right" && renderIcon3());
  };
  var renderBody = function renderBody2() {
    var transitionCallbacks = {
      onEnter: function onEnter() {
        bodyRef.current.style.height = "".concat(contentRef === null || contentRef === void 0 ? void 0 : contentRef.current.clientHeight, "px");
      },
      onEntered: function onEntered() {
        bodyRef.current.style.height = "auto";
      },
      onExit: function onExit() {
        bodyRef.current.style.height = "".concat(contentRef === null || contentRef === void 0 ? void 0 : contentRef.current.clientHeight, "px");
      },
      onExiting: function onExiting() {
        bodyRef.current.style.height = "0px";
      }
    };
    return /* @__PURE__ */ React.createElement(CSSTransition, _objectSpread$7({
      "in": isActive,
      appear: true,
      timeout: 300,
      nodeRef: bodyRef,
      unmountOnExit: destroyOnCollapse
    }, transitionCallbacks), /* @__PURE__ */ React.createElement("div", {
      style: {
        height: 0
      },
      className: classNames$2("".concat(componentName, "__body"), "".concat(classPrefix, "-slide-down-enter-active"), _defineProperty$2({}, "".concat(componentName, "__body--collapsed"), !isActive)),
      ref: bodyRef
    }, /* @__PURE__ */ React.createElement("div", {
      className: "".concat(componentName, "__content"),
      ref: contentRef
    }, children)));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: classes,
    style: _objectSpread$7({}, style)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "".concat(componentName, "__wrapper")
  }, renderHeader(), renderBody()));
};
CollapsePanel.displayName = "CollapsePanel";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var _excluded$1 = ["defaultExpandAll", "disabled", "expandIconPlacement", "expandOnRowClick", "expandIcon"];
function ownKeys$6(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e2);
    r2 && (o = o.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o);
  }
  return t2;
}
function _objectSpread$6(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$6(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$6(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
var Collapse$1 = forwardRefWithStatics(function(originalProps, ref) {
  var props = useDefaultProps(originalProps, collapseDefaultProps);
  var _useConfig = useConfig$2(), classPrefix = _useConfig.classPrefix;
  var componentName = "".concat(classPrefix, "-collapse");
  var borderlessClass = "".concat(classPrefix, "--border-less");
  var defaultExpandAll = props.defaultExpandAll, disabled = props.disabled, expandIconPlacement = props.expandIconPlacement, expandOnRowClick = props.expandOnRowClick, expandIcon = props.expandIcon, rest = _objectWithoutProperties$2(props, _excluded$1);
  var children = rest.children, className = rest.className, style = rest.style, expandMutex = rest.expandMutex, borderless = rest.borderless, onChange = rest.onChange;
  var _useControlled = useControlled(props, "value", onChange), _useControlled2 = _slicedToArray(_useControlled, 2), collapseValue = _useControlled2[0], setCollapseValue = _useControlled2[1];
  var collapseValues = reactExports.useRef(collapseValue);
  reactExports.useEffect(function() {
    collapseValues.current = collapseValue;
  }, [collapseValue]);
  var updateCollapseValue = function updateCollapseValue2(value, context) {
    var newValue = [].concat(collapseValues.current || []);
    var index = newValue.indexOf(value);
    if (index >= 0) {
      newValue.splice(index, 1);
    } else if (expandMutex) {
      newValue = [value];
    } else {
      newValue.push(value);
    }
    collapseValues.current = _toConsumableArray(newValue);
    setCollapseValue(newValue, context);
  };
  var classes = [componentName, _defineProperty$2({}, borderlessClass, !!borderless), className];
  var childrenList = React.Children.toArray(children).filter(function(child) {
    return child.type.displayName === CollapsePanel.displayName;
  });
  var collapsePanelList = function collapsePanelList2() {
    return childrenList.map(function(child, index) {
      var key = child.key || String(index);
      var childProps = _objectSpread$6({
        key,
        index: index + 1
      }, child.props);
      return /* @__PURE__ */ React.cloneElement(child, childProps);
    });
  };
  return /* @__PURE__ */ React.createElement(CollapseContext.Provider, {
    value: {
      defaultExpandAll,
      disabled,
      expandIconPlacement,
      expandOnRowClick,
      expandIcon,
      updateCollapseValue,
      collapseValue
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: classNames$2(classes),
    style,
    ref
  }, collapsePanelList()));
}, {
  Panel: CollapsePanel
});
Collapse$1.displayName = "Collapse";
/**
 * tdesign v1.13.2
 * (c) 2025 tdesign
 * @license MIT
 */
var Collapse = Collapse$1;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var classnames = { exports: {} };
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module2) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames2.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        } else if (argType === "object") {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module2.exports) {
      classNames2.default = classNames2;
      module2.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
var DEFAULT_CLASS_PREFIX = "t";
var DEFAULT_LOCALE = "zh-CN";
var ConfigContext = /* @__PURE__ */ reactExports.createContext({
  classPrefix: DEFAULT_CLASS_PREFIX,
  locale: DEFAULT_LOCALE
});
var useConfig = function() {
  return reactExports.useContext(ConfigContext);
};
function useCommonClassName() {
  var _useConfig = useConfig(), classPrefix = _useConfig.classPrefix;
  return reactExports.useMemo(function() {
    return {
      SIZE: {
        "default": "",
        xs: "".concat(classPrefix, "-size-xs"),
        small: "".concat(classPrefix, "-size-s"),
        medium: "".concat(classPrefix, "-size-m"),
        large: "".concat(classPrefix, "-size-l"),
        xl: "".concat(classPrefix, "-size-xl"),
        block: "".concat(classPrefix, "-size-full-width")
      },
      STATUS: {
        loading: "".concat(classPrefix, "-is-loading"),
        disabled: "".concat(classPrefix, "-is-disabled"),
        focused: "".concat(classPrefix, "-is-focused"),
        success: "".concat(classPrefix, "-is-success"),
        error: "".concat(classPrefix, "-is-error"),
        warning: "".concat(classPrefix, "-is-warning"),
        selected: "".concat(classPrefix, "-is-selected"),
        active: "".concat(classPrefix, "-is-active"),
        checked: "".concat(classPrefix, "-is-checked"),
        current: "".concat(classPrefix, "-is-current"),
        hidden: "".concat(classPrefix, "-is-hidden"),
        visible: "".concat(classPrefix, "-is-visible"),
        expanded: "".concat(classPrefix, "-is-expanded"),
        indeterminate: "".concat(classPrefix, "-is-indeterminate")
      }
    };
  }, [classPrefix]);
}
function useSizeProps(size) {
  var COMMON_SIZE_CLASS_NAMES = useCommonClassName().SIZE;
  if (typeof size === "undefined") {
    return {};
  }
  if (!(size in COMMON_SIZE_CLASS_NAMES)) {
    return {
      className: "",
      style: {
        fontSize: size
      }
    };
  }
  return {
    className: COMMON_SIZE_CLASS_NAMES[size],
    style: {}
  };
}
function loadStylesheet() {
  var styleSheetId = "__TDESIGN_ICON_STYLE__";
  var iconStyleString = "@keyframes t-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  .t-icon {\n    display: inline-block;\n    vertical-align: middle;\n    width: 1em;\n    height: 1em;\n  }\n  .t-icon::before {\n    font-family: unset;\n  }\n  .t-icon-loading {\n    animation: t-spin 1s linear infinite;\n  }\n  .t-icon {\n    fill: currentColor;\n  }\n  .t-icon.t-size-s,\n  i.t-size-s {\n    font-size: 14px;\n  }\n  .t-icon.t-size-m,\n  i.t-size-m {\n    font-size: 16px;\n  }\n  .t-icon.t-size-l,\n  i.t-size-l {\n    font-size: 18px;\n  }\n  ";
  if (!document || document.getElementById(styleSheetId)) return;
  var styleSheet = document.createElement("style");
  styleSheet.setAttribute("id", styleSheetId);
  styleSheet.innerHTML = iconStyleString;
  document.head.appendChild(styleSheet);
}
var _excluded = ["icon", "id", "className", "size", "style"];
function ownKeys$5(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$5(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function render(node, id, rootProps) {
  return /* @__PURE__ */ reactExports.createElement(node.tag, _objectSpread$5(_objectSpread$5({
    key: id
  }, node.attrs), rootProps), (node.children || []).map(function(child, index) {
    return render(child, "".concat(id, "-").concat(node.tag, "-").concat(index));
  }));
}
var IconBase = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  var icon = props.icon, id = props.id, className = props.className, size = props.size, style = props.style, restProps = _objectWithoutProperties(props, _excluded);
  var _useSizeProps = useSizeProps(size), sizeClassName = _useSizeProps.className, sizeStyle = _useSizeProps.style;
  var cls = classNames("t-icon", "t-icon-".concat(id), className, sizeClassName);
  reactExports.useEffect(function() {
    loadStylesheet();
  }, []);
  return render(icon, "".concat(id), _objectSpread$5({
    ref,
    className: cls,
    style: _objectSpread$5(_objectSpread$5({}, style), sizeStyle)
  }, restProps));
});
function ownKeys$4(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$4(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$4 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M4.5 11L16.0858 11L11.5858 6.50003L13 5.08582L19.9142 12L13 18.9142L11.5858 17.5L16.0858 13L4.5 13L4.5 11Z"
    }
  }]
};
var ArrowRightIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase, _objectSpread$4(_objectSpread$4({}, props), {}, {
    id: "arrow-right",
    ref,
    icon: element$4
  }));
});
ArrowRightIcon.displayName = "ArrowRightIcon";
function ownKeys$3(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$3(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$3 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M1 2H9C10.1947 2 11.2671 2.52375 12 3.35418C12.7329 2.52376 13.8053 2 15 2H23V3L23 21H22C19.0558 21 16.8608 21.2453 15.4144 21.4864C14.6911 21.6069 14.1546 21.7265 13.805 21.8139C13.6302 21.8576 13.5021 21.8933 13.4206 21.917C13.3799 21.9289 13.3508 21.9378 13.3334 21.9432L13.3162 21.9487L13.314 21.9494L13.1623 22H10.8377L10.686 21.9494L10.6847 21.949L10.6838 21.9487L10.6666 21.9432C10.6492 21.9378 10.6201 21.9289 10.5794 21.917C10.4979 21.8933 10.3698 21.8576 10.195 21.8139C9.84535 21.7265 9.30891 21.6069 8.5856 21.4864C7.13918 21.2453 4.94416 21 2 21H1L1 3.00062L1 2ZM3 4V19.0093C5.56349 19.0572 7.53509 19.2837 8.9144 19.5136C9.69108 19.6431 10.2796 19.7735 10.68 19.8736C10.805 19.9049 10.9117 19.9332 11 19.9575V6C11 4.89543 10.1046 4 9 4H3ZM13 6V19.9575C13.0883 19.9331 13.195 19.9049 13.32 19.8736C13.7203 19.7735 14.3089 19.6431 15.0856 19.5136C16.4649 19.2837 18.4365 19.0572 21 19.0093V4H15C13.8954 4 13 4.89543 13 6ZM15 8H19V10H15V8ZM15 11H19V13H15V11Z"
    }
  }]
};
var BookOpenIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase, _objectSpread$3(_objectSpread$3({}, props), {}, {
    id: "book-open",
    ref,
    icon: element$3
  }));
});
BookOpenIcon.displayName = "BookOpenIcon";
function ownKeys$2(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$2 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M20 2.91309V17.9999C20 19.6567 18.6569 20.9999 17 20.9999C15.3431 20.9999 14 19.6567 14 17.9999C14 16.343 15.3431 14.9999 17 14.9999C17.3506 14.9999 17.6872 15.06 18 15.1706V10.0867L8 10.92V18.9999C8 20.6567 6.65685 21.9999 5 21.9999C3.34315 21.9999 2 20.6567 2 18.9999C2 17.343 3.34315 15.9999 5 15.9999C5.35064 15.9999 5.68722 16.06 6 16.1706V4.07975L20 2.91309ZM6 18.9999C6 18.4476 5.55228 17.9999 5 17.9999C4.44772 17.9999 4 18.4476 4 18.9999C4 19.5522 4.44772 19.9999 5 19.9999C5.55228 19.9999 6 19.5522 6 18.9999ZM8 8.91309L18 8.07975V5.08669L8 5.92002V8.91309ZM18 17.9999C18 17.4476 17.5523 16.9999 17 16.9999C16.4477 16.9999 16 17.4476 16 17.9999C16 18.5522 16.4477 18.9999 17 18.9999C17.5523 18.9999 18 18.5522 18 17.9999Z"
    }
  }]
};
var MusicIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase, _objectSpread$2(_objectSpread$2({}, props), {}, {
    id: "music",
    ref,
    icon: element$2
  }));
});
MusicIcon.displayName = "MusicIcon";
function ownKeys$1(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element$1 = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M20.4997 5.83468C18.5918 3.20865 15.4961 1.5 11.9997 1.5C6.57341 1.5 2.10958 5.61542 1.55717 10.896L1.45312 11.8905L3.44227 12.0986L3.54632 11.104C3.9933 6.83125 7.60814 3.5 11.9997 3.5C15.0404 3.5 17.7099 5.09688 19.2125 7.5H15.4997V9.5H22.4997V2.5H20.4997V5.83468ZM20.5572 11.9014L20.4532 12.896C20.0062 17.1687 16.3913 20.5 11.9997 20.5C8.95904 20.5 6.28956 18.9031 4.78702 16.5H8.49974V14.5H1.49974V21.5H3.49974V18.1653C5.40769 20.7914 8.50342 22.5 11.9997 22.5C17.4261 22.5 21.8899 18.3846 22.4423 13.104L22.5464 12.1095L20.5572 11.9014Z"
    }
  }]
};
var RefreshIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase, _objectSpread$1(_objectSpread$1({}, props), {}, {
    id: "refresh",
    ref,
    icon: element$1
  }));
});
RefreshIcon.displayName = "RefreshIcon";
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var element = {
  "tag": "svg",
  "attrs": {
    "fill": "none",
    "viewBox": "0 0 24 24",
    "width": "1em",
    "height": "1em"
  },
  "children": [{
    "tag": "path",
    "attrs": {
      "fill": "currentColor",
      "d": "M15.0002 3.08569L22.4144 10.4999L2.00015 10.4999V8.4999L17.5859 8.4999L13.5859 4.49991L15.0002 3.08569ZM22.0002 13.4999V15.4999L6.41437 15.4999L10.4144 19.4999L9.00015 20.9141L1.58594 13.4999L22.0002 13.4999Z"
    }
  }]
};
var SwapIcon = /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
  return /* @__PURE__ */ reactExports.createElement(IconBase, _objectSpread(_objectSpread({}, props), {}, {
    id: "swap",
    ref,
    icon: element
  }));
});
SwapIcon.displayName = "SwapIcon";
export {
  ArrowRightIcon as A,
  Button as B,
  Card as C,
  Input as I,
  Layout2 as L,
  MessagePlugin2 as M,
  RefreshIcon as R,
  Select as S,
  Tag as T,
  Collapse as a,
  SwapIcon as b,
  Switch as c,
  Tabs as d,
  MusicIcon as e,
  BookOpenIcon as f,
  ConfigProvider as g
};
//# sourceMappingURL=tdesign-DGbwKEc_.js.map
