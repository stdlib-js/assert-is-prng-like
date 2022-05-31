// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isPRNGLike=t()}(this,(function(){"use strict";function e(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})})),r}var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(e){return!1}},o=Object.defineProperty,u=Object.prototype,i=u.toString,f=u.__defineGetter__,c=u.__defineSetter__,a=u.__lookupGetter__,l=u.__lookupSetter__;var p=function(e,t,r){var n,o,p,y;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(a.call(e,t)||l.call(e,t)?(n=e.__proto__,e.__proto__=u,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),p="get"in r,y="set"in r,o&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&f&&f.call(e,t,r.get),y&&c&&c.call(e,t,r.set),e},y=o,s=p,b=n()?y:s;var v=function(e,t,r){b(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})},d=v;var _=function(e){return"boolean"==typeof e};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var g=function(){return j&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,w=m;var h=function(e){return w.call(e)},O=Object.prototype.hasOwnProperty;var E=function(e,t){return null!=e&&O.call(e,t)},P="function"==typeof Symbol?Symbol.toStringTag:"",S=E,A=P,T=m;var B=h,x=function(e){var t,r,n;if(null==e)return T.call(e);r=e[A],t=S(e,A);try{e[A]=void 0}catch(t){return T.call(e)}return n=T.call(e),t?e[A]=r:delete e[A],n},k=g()?x:B,G=Boolean.prototype.toString;var L=k,M=function(e){try{return G.call(e),!0}catch(e){return!1}},V=g();var C=function(e){return"object"==typeof e&&(e instanceof Boolean||(V?M(e):"[object Boolean]"===L(e)))},N=_,R=C;var F=d,X=function(e){return N(e)||R(e)},z=C;F(X,"isPrimitive",_),F(X,"isObject",z);var D=X;var I=function(){return new Function("return this;")()},U="object"==typeof self?self:null,q="object"==typeof window?window:null,H="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof H?H:null;module.exports=J;var K=D.isPrimitive,Q=I,W=U,Y=q,Z=e(Object.freeze({__proto__:null}));var $=function(e){if(arguments.length){if(!K(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Q()}if(W)return W;if(Y)return Y;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},ee=$(),te=ee.document&&ee.document.childNodes,re=Int8Array,ne=t,oe=te,ue=re;var ie=function(){return"function"==typeof ne||"object"==typeof ue||"function"==typeof oe};var fe=function(){return/^\s*function\s*([^(]*)/i},ce=fe;d(ce,"REGEXP",fe());var ae=ce,le=k;var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===le(e)};var ye=function(e){return null!==e&&"object"==typeof e};d(ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!pe(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(ye));var se=ye;var be=k,ve=ae.REGEXP,de=function(e){return se(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))};var _e=function(e){var t,r,n;if(("Object"===(r=be(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=ve.exec(n.toString()))return t[1]}return de(e)?"Buffer":r},je=_e;var ge=_e;var me=function(e){var t;return null===e?"null":"object"===(t=typeof e)?je(e).toLowerCase():t},we=function(e){return ge(e).toLowerCase()},he=ie()?we:me;var Oe=function(e){return"function"===he(e)},Ee=E;return function(e){return Oe(e)&&"string"==typeof e.NAME&&Ee(e,"state")&&Ee(e,"seed")}}));
//# sourceMappingURL=index.js.map
