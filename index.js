// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isPRNGLike=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&c&&c.call(t,e,r.set),t};var a=r;function y(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function _(t,e){return null!=t&&v.call(t,e)}var g="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var e,r,n;if(null==t)return d.call(t);r=t[g],e=_(t,g);try{t[g]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[g]=r:delete t[g],n}:function(t){return d.call(t)},m=Boolean.prototype.toString;var w=b();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function S(t){return p(t)||h(t)}function A(){return new Function("return this;")()}y(S,"isPrimitive",p),y(S,"isObject",h);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,P="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return A()}if(E)return E;if(O)return O;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),B=T.document&&T.document.childNodes,x=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;y(k,"REGEXP",G);var L=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function V(t){return null!==t&&"object"==typeof t}function C(t){var e,r,n,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=G.exec(n.toString()))return e[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}y(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!L(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V));var M="function"==typeof t||"object"==typeof x||"function"==typeof B?function(t){return C(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?C(t).toLowerCase():e};return function(t){return"function"===M(t)&&"string"==typeof t.NAME&&_(t,"state")&&_(t,"seed")}}));
//# sourceMappingURL=index.js.map
