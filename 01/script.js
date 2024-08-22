/**
 * Polyfills for JavaScript Methods
 */

/**
 * 1. Array.prototype.includes
 */

// if (!Array.prototype.includes) {
//     Array.prototype.includes = function(element, fromIndex) {
//         if (this == null) {
//             throw new TypeError('Array.prototype.includes called on null or undefined');
//         }
//         if (fromIndex == null) {
//             fromIndex = 0;
//         }
//         var list = Object(this);
//         var length = list.length >>> 0;
//         var i = Math.max(fromIndex >= 0 ? fromIndex : length - Math.abs(fromIndex), 0);
//         while (i < length) {
//             if (list[i] === element) {
//                 return true;
//             }
//             i++;
//         }
//         return false;
//     };
// }

/**
 * 2. String.prototype.startsWith
 */

// if (!String.prototype.startsWith) {
//     String.prototype.startsWith = function(search, position) {
//         var str = this.toString();
//         var start = position || 0;
//         return str.substring(start, start + search.length) === search;
//     };
// }

/**
 * 3. String.prototype.endsWith
 */

// if (!String.prototype.endsWith) {
//     String.prototype.endsWith = function(search, length) {
//         var str = this.toString();
//         if (length === undefined || length > str.length) {
//             length = str.length;
//         }
//         return str.substring(length - search.length, length) === search;
//     };
// }

/**
 * 4. Object.assign
 */

// if (!Object.assign) {
//     Object.assign = function(target, varArgs) {
//         if (target == null) {
//             throw new TypeError('Cannot convert undefined or null to object');
//         }

//         var to = Object(target);

//         for (var i = 1; i < arguments.length; i++) {
//             var source = arguments[i];
//             if (source != null) {
//                 for (var key in source) {
//                     if (Object.prototype.hasOwnProperty.call(source, key)) {
//                         to[key] = source[key];
//                     }
//                 }
//             }
//         }
//         return to;
//     };
// }

/**
 * 5. Array.prototype.find
 */

// if (!Array.prototype.find) {
//     Array.prototype.find = function(predicate) {
//         if (this == null) {
//             throw new TypeError('Array.prototype.find called on null or undefined');
//         }
//         if (typeof predicate !== 'function') {
//             throw new TypeError('Predicate must be a function');
//         }

//         var list = Object(this);
//         var length = list.length >>> 0;
//         var thisArg = arguments[1];
//         var value;

//         for (var i = 0; i < length; i++) {
//             value = list[i];
//             if (predicate.call(thisArg, value, i, list)) {
//                 return value;
//             }
//         }
//         return undefined;
//     };
// }

/**
 * 6. Number.isNaN
 */

// if (!Number.isNaN) {
//     Number.isNaN = function(value) {
//         return value !== value; // NaN is the only value that is not equal to itself
//     };
// }

/**
 * 7. Polyfill for Array.prototype.map
 */

// if (!Array.prototype.map) {
//     Array.prototype.map = function(callback, thisArg) {
//         if (this == null) {
//             throw new TypeError('Array.prototype.map called on null or undefined');
//         }
//         if (typeof callback !== 'function') {
//             throw new TypeError(callback + ' is not a function');
//         }

//         var array = Object(this);
//         var length = array.length >>> 0;
//         var result = new Array(length);
//         var i;

//         for (i = 0; i < length; i++) {
//             if (i in array) {
//                 result[i] = callback.call(thisArg, array[i], i, array);
//             }
//         }
//         return result;
//     };
// }

/**
 * 8. Polyfill for Array.prototype.filter
 */

// if (!Array.prototype.filter) {
//     Array.prototype.filter = function(callback, thisArg) {
//         if (this == null) {
//             throw new TypeError('Array.prototype.filter called on null or undefined');
//         }
//         if (typeof callback !== 'function') {
//             throw new TypeError(callback + ' is not a function');
//         }

//         var array = Object(this);
//         var length = array.length >>> 0;
//         var result = [];
//         var value, i;

//         for (i = 0; i < length; i++) {
//             if (i in array) {
//                 value = array[i];
//                 if (callback.call(thisArg, value, i, array)) {
//                     result.push(value);
//                 }
//             }
//         }
//         return result;
//     };
// }

/**
 * 9. Polyfill for Array.prototype.reduce
 */

// if (!Array.prototype.reduce) {
//     Array.prototype.reduce = function(callback, initialValue) {
//         if (this == null) {
//             throw new TypeError('Array.prototype.reduce called on null or undefined');
//         }
//         if (typeof callback !== 'function') {
//             throw new TypeError(callback + ' is not a function');
//         }

//         var array = Object(this);
//         var length = array.length >>> 0;
//         var i = 0;
//         var value;

//         if (arguments.length >= 2) {
//             value = initialValue;
//         } else {
//             if (length === 0) {
//                 throw new TypeError('Reduce of empty array with no initial value');
//             }
//             value = array[0];
//             i = 1;
//         }

//         for (; i < length; i++) {
//             if (i in array) {
//                 value = callback(value, array[i], i, array);
//             }
//         }
//         return value;
//     };
// }

/**
 * 10. Polyfill for Array.prototype.flat
 */

// if (!Array.prototype.flat) {
//     Array.prototype.flat = function(depth) {
//         // Default depth is 1
//         depth = depth === undefined ? 1 : Number(depth);

//         if (depth < 0) {
//             throw new RangeError('Depth must be a non-negative integer');
//         }

//         var result = [];

//         (function flatten(arr, currentDepth) {
//             for (var i = 0; i < arr.length; i++) {
//                 var item = arr[i];
//                 if (Array.isArray(item) && currentDepth > 0) {
//                     flatten(item, currentDepth - 1);
//                 } else {
//                     result.push(item);
//                 }
//             }
//         })(this, depth);

//         return result;
//     };
// }

/**
 * 11. Polyfill for Array.prototype.flatMap
 */

// if (!Array.prototype.flatMap) {
//     Array.prototype.flatMap = function(callback, thisArg) {
//         if (this == null) {
//             throw new TypeError('Array.prototype.flatMap called on null or undefined');
//         }
//         if (typeof callback !== 'function') {
//             throw new TypeError(callback + ' is not a function');
//         }

//         var array = Object(this);
//         var length = array.length >>> 0;
//         var result = [];

//         for (var i = 0; i < length; i++) {
//             if (i in array) {
//                 var mapped = callback.call(thisArg, array[i], i, array);
//                 if (Array.isArray(mapped)) {
//                     result.push(...mapped);
//                 } else {
//                     result.push(mapped);
//                 }
//             }
//         }
//         return result;
//     };
// }

/**
 * 12. Polyfill for Function.prototype.call
 */

// if (!Function.prototype.call) {
//     Function.prototype.call = function(context) {
//         if (this == null) {
//             throw new TypeError('Function.prototype.call - function must be callable');
//         }

//         context = context || globalThis; // Use global object as default context
//         var args = [];
//         for (var i = 1; i < arguments.length; i++) {
//             args.push(arguments[i]);
//         }

//         var func = this;
//         var result;
//         context.__tempFunc__ = func; // Temporary property to call function on context

//         try {
//             result = context.__tempFunc__(...args);
//         } finally {
//             delete context.__tempFunc__; // Clean up temporary property
//         }

//         return result;
//     };
// }

/**
 * 13. Polyfill for Function.prototype.apply
 */

// if (!Function.prototype.apply) {
//     Function.prototype.apply = function(context, args) {
//         if (this == null) {
//             throw new TypeError('Function.prototype.apply - function must be callable');
//         }

//         context = context || globalThis; // Use global object as default context
//         var func = this;
//         var result;
//         context.__tempFunc__ = func; // Temporary property to call function on context

//         try {
//             result = context.__tempFunc__(...args);
//         } finally {
//             delete context.__tempFunc__; // Clean up temporary property
//         }

//         return result;
//     };
// }

/**
 * 14. Polyfill for Function.prototype.bind
 */

// if (!Function.prototype.bind) {
//   Function.prototype.bind = function (context) {
//     if (this == null) {
//       throw new TypeError(
//         "Function.prototype.bind - function must be callable"
//       );
//     }

//     var func = this;
//     var boundArgs = Array.prototype.slice.call(arguments, 1);

//     function boundFunction() {
//       var args = boundArgs.concat(Array.prototype.slice.call(arguments));
//       if (this instanceof boundFunction) {
//         var result = func.apply(this, args);
//         if (Object(result) === result) {
//           return result; // If result is an object, return it
//         }
//         return this; // If result is not an object, return the instance
//       } else {
//         return func.apply(context, args);
//       }
//     }

//     // Copy function properties (e.g., `name`, `length`)
//     boundFunction.prototype = Object.create(func.prototype);
//     return boundFunction;
//   };
// }

// "use strict";
// const obj = {
//   value: 42,
//   arrowFunc: () => {
//     console.log(this);
//   },
// };

// obj.arrowFunc();

const obj = {};
console.log("obj type:", typeof obj);

const myMap = new Map();
console.log("myMap type:", typeof myMap);

p = myMap.isArray();
console.log(p);
