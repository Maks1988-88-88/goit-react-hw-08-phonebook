(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{87:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));var n=e(37);function o(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!r||e.length!==r);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return e}}(t,r)||Object(n.a)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91:function(t,r,e){"use strict";e.d(r,"a",(function(){return p}));var n=e(0),o=e.n(n),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.a.createContext&&o.a.createContext(a),c=function(){return(c=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)},u=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]])}return e};function s(t){return t&&t.map((function(t,r){return o.a.createElement(t.tag,c({key:r},t.attr),s(t.child))}))}function l(t){return function(r){return o.a.createElement(f,c({attr:c({},t.attr)},r),s(t.child))}}function f(t){var r=function(r){var e,n=t.attr,a=t.size,i=t.title,s=u(t,["attr","size","title"]),l=a||r.size||"1em";return r.className&&(e=r.className),t.className&&(e=(e?e+" ":"")+t.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,s,{className:e,style:c(c({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&o.a.createElement("title",null,i),t.children)};return void 0!==i?o.a.createElement(i.Consumer,null,(function(t){return r(t)})):r(a)}function p(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"}}]})(t)}},96:function(t,r,e){"use strict";var n,o=new Uint8Array(16);function a(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(t){return"string"===typeof t&&i.test(t)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));var l=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(u[t[r+0]]+u[t[r+1]]+u[t[r+2]]+u[t[r+3]]+"-"+u[t[r+4]]+u[t[r+5]]+"-"+u[t[r+6]]+u[t[r+7]]+"-"+u[t[r+8]]+u[t[r+9]]+"-"+u[t[r+10]]+u[t[r+11]]+u[t[r+12]]+u[t[r+13]]+u[t[r+14]]+u[t[r+15]]).toLowerCase();if(!c(e))throw TypeError("Stringified UUID is invalid");return e};r.a=function(t,r,e){var n=(t=t||{}).random||(t.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){e=e||0;for(var o=0;o<16;++o)r[e+o]=n[o];return r}return l(n)}}}]);
//# sourceMappingURL=7.4a994628.chunk.js.map