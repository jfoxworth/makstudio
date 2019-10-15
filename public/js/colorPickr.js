/*! Pickr 1.4.4 MIT | https://github.com/Simonwep/pickr */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Pickr=e():t.Pickr=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t){t.exports=JSON.parse('{"a":"1.4.4"}')},function(t,e,n){"use strict";n.r(e);var r={};function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(r),n.d(r,"on",function(){return c}),n.d(r,"off",function(){return l}),n.d(r,"createElementFromString",function(){return u}),n.d(r,"removeAttribute",function(){return p}),n.d(r,"createFromTemplate",function(){return h}),n.d(r,"eventPath",function(){return f}),n.d(r,"resolveElement",function(){return d}),n.d(r,"adjustableInputNumbers",function(){return v});var c=s.bind(null,"addEventListener"),l=s.bind(null,"removeEventListener");function s(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(n)||(n=[n]);var a=!0,c=!1,l=void 0;try{for(var s,u=e[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var p=s.value,h=!0,f=!1,d=void 0;try{for(var v,y=n[Symbol.iterator]();!(h=(v=y.next()).done);h=!0){var m=v.value;p[t](m,r,i({capture:!1},o))}}catch(t){f=!0,d=t}finally{try{h||null==y.return||y.return()}finally{if(f)throw d}}}}catch(t){c=!0,l=t}finally{try{a||null==u.return||u.return()}finally{if(c)throw l}}return Array.prototype.slice.call(arguments,1)}function u(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function p(t,e){var n=t.getAttribute(e);return t.removeAttribute(e),n}function h(t){return function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=p(e,":obj"),o=p(e,":ref"),i=r?n[r]={}:n;o&&(n[o]=e);for(var a=0,c=Array.from(e.children);a<c.length;a++){var l=c[a],s=p(l,":arr"),u=t(l,s?{}:i);s&&(i[s]||(i[s]=[])).push(Object.keys(u).length?u:l)}return n}(u(t))}function f(t){var e=t.path||t.composedPath&&t.composedPath();if(e)return e;var n=t.target.parentElement;for(e=[t.target,n];n=n.parentElement;)e.push(n);return e.push(document,window),e}function d(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce(function(t,e,n,r){return t=t.querySelector(e),n<r.length-1?t.shadowRoot:t},document):null}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t){return t};function n(n){var r=[.001,.01,.1][Number(n.shiftKey||2*n.ctrlKey)]*(n.deltaY<0?1:-1),o=0,i=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,function(t,n){return n<=i&&n+t.length>=i?(i=n,e(Number(t),r,o)):(o++,t)}),t.focus(),t.setSelectionRange(i,i),n.preventDefault(),t.dispatchEvent(new Event("input"))}c(t,"focus",function(){return c(window,"wheel",n,{passive:!1})}),c(t,"blur",function(){return l(window,"wheel",n)})}var y=n(0);function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=Math.min,_=Math.max,w=Math.floor,A=Math.round;function k(t,e,n){e/=100,n/=100;var r=w(t=t/360*6),o=t-r,i=n*(1-e),a=n*(1-o*e),c=n*(1-(1-o)*e),l=r%6;return[255*[n,a,i,i,c,n][l],255*[c,n,n,a,i,i][l],255*[i,i,c,n,n,a][l]]}function C(t,e,n){var r,o,i=g(t/=255,e/=255,n/=255),a=_(t,e,n),c=a-i;if(0===c)r=o=0;else{o=c/a;var l=((a-t)/6+c/2)/c,s=((a-e)/6+c/2)/c,u=((a-n)/6+c/2)/c;t===a?r=u-s:e===a?r=1/3+l-u:n===a&&(r=2/3+s-l),r<0?r+=1:r>1&&(r-=1)}return[360*r,100*o,100*a]}function S(t,e,n,r){return e/=100,n/=100,b(C(255*(1-g(1,(t/=100)*(1-(r/=100))+r)),255*(1-g(1,e*(1-r)+r)),255*(1-g(1,n*(1-r)+r))))}function O(t,e,n){return e/=100,[t,2*(e*=(n/=100)<.5?n:1-n)/(n+e)*100,100*(n+e)]}function j(t){return C.apply(void 0,b(t.match(/.{2}/g).map(function(t){return parseInt(t,16)})))}function x(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000";var e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;var e,n={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},r=function(t){return t.map(function(t){return/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0})};t:for(var o in n)if(e=n[o].exec(t)){var i=function(t){return!!e[2]==("number"==typeof t)};switch(o){case"cmyk":var a=m(r(e),5),c=a[1],l=a[2],s=a[3],u=a[4];if(c>100||l>100||s>100||u>100)break t;return{values:S(c,l,s,u),type:o};case"rgba":var p=m(r(e),7),h=p[3],f=p[4],d=p[5],v=p[6];if(h>255||f>255||d>255||v<0||v>1||!i(v))break t;return{values:[].concat(b(C(h,f,d)),[v]),a:v,type:o};case"hexa":var y=m(e,2)[1];4!==y.length&&3!==y.length||(y=y.split("").map(function(t){return t+t}).join(""));var g=y.substring(0,6),_=y.substring(6);return _=_?parseInt(_,16)/255:void 0,{values:[].concat(b(j(g)),[_]),a:_,type:o};case"hsla":var w=m(r(e),7),A=w[3],k=w[4],x=w[5],E=w[6];if(A>360||k>100||x>100||E<0||E>1||!i(E))break t;return{values:[].concat(b(O(A,k,x)),[E]),a:E,type:o};case"hsva":var L=m(r(e),7),P=L[3],B=L[4],R=L[5],H=L[6];if(P>360||B>100||R>100||H<0||H>1||!i(H))break t;return{values:[P,B,R,H],a:H,type:o}}}return{values:null,type:null}}function E(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function L(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=function(t,e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;return e(~n?t.map(function(t){return Number(t.toFixed(n))}):t)}},i={h:t,s:e,v:n,a:r,toHSVA:function(){var t=[i.h,i.s,i.v,i.a];return t.toString=o(t,function(t){return"hsva(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(i.a,")")}),t},toHSLA:function(){var t=[].concat(E(function(t,e,n){var r=(2-(e/=100))*(n/=100)/2;return 0!==r&&(e=1===r?0:r<.5?e*n/(2*r):e*n/(2-2*r)),[t,100*e,100*r]}(i.h,i.s,i.v)),[i.a]);return t.toString=o(t,function(t){return"hsla(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(i.a,")")}),t},toRGBA:function(){var t=[].concat(E(k(i.h,i.s,i.v)),[i.a]);return t.toString=o(t,function(t){return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(i.a,")")}),t},toCMYK:function(){var t=function(t,e,n){var r,o=k(t,e,n),i=o[0]/255,a=o[1]/255,c=o[2]/255;return[100*(1===(r=g(1-i,1-a,1-c))?0:(1-i-r)/(1-r)),100*(1===r?0:(1-a-r)/(1-r)),100*(1===r?0:(1-c-r)/(1-r)),100*r]}(i.h,i.s,i.v);return t.toString=o(t,function(t){return"cmyk(".concat(t[0],"%, ").concat(t[1],"%, ").concat(t[2],"%, ").concat(t[3],"%)")}),t},toHEXA:function(){var t=function(t,e,n){return k(t,e,n).map(function(t){return A(t).toString(16).padStart(2,"0")})}(i.h,i.s,i.v),e=i.a>=1?"":Number((255*i.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=function(){return"#".concat(t.join("").toUpperCase())},t},clone:function(){return L(i.h,i.s,i.v,i.a)}};return i}var P=function(t){return Math.max(Math.min(t,1),0)};function B(t){var e={options:Object.assign({lock:null,onchange:function(){return 0},onstop:function(){return 0}},t),_keyboard:function(t){var r=t.type,o=t.key;if(document.activeElement===n.wrapper){var i=e.options.lock,a="ArrowUp"===o,c="ArrowRight"===o,l="ArrowDown"===o,s="ArrowLeft"===o;if("keydown"===r&&(a||c||l||s)){var u=0,p=0;"v"===i?u=a||c?1:-1:"h"===i?u=a||c?-1:1:(p=a?-1:l?1:0,u=s?-1:c?1:0),e.update(P(e.cache.x+.01*u),P(e.cache.y+.01*p))}else o.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart:function(t){c(document,["mouseup","touchend","touchcancel"],e._tapstop),c(document,["mousemove","touchmove"],e._tapmove),t.preventDefault(),e._tapmove(t)},_tapmove:function(t){var r=e.options.lock,o=e.cache,i=n.element,a=n.wrapper,c=a.getBoundingClientRect(),l=0,s=0;if(t){var u=t&&t.touches&&t.touches[0];l=t?(u||t).clientX:0,s=t?(u||t).clientY:0,l<c.left?l=c.left:l>c.left+c.width&&(l=c.left+c.width),s<c.top?s=c.top:s>c.top+c.height&&(s=c.top+c.height),l-=c.left,s-=c.top}else o&&(l=o.x*c.width,s=o.y*c.height);"h"!==r&&(i.style.left="calc(".concat(l/c.width*100,"% - ").concat(i.offsetWidth/2,"px)")),"v"!==r&&(i.style.top="calc(".concat(s/c.height*100,"% - ").concat(i.offsetHeight/2,"px)")),e.cache={x:l/c.width,y:s/c.height};var p=P(l/a.offsetWidth),h=P(s/a.offsetHeight);switch(r){case"v":return n.onchange(p);case"h":return n.onchange(h);default:return n.onchange(p,h)}},_tapstop:function(){e.options.onstop(),l(document,["mouseup","touchend","touchcancel"],e._tapstop),l(document,["mousemove","touchmove"],e._tapmove)},trigger:function(){e._tapmove()},update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.options.wrapper.getBoundingClientRect(),o=r.left,i=r.top,a=r.width,c=r.height;"h"===e.options.lock&&(n=t),e._tapmove({clientX:o+a*t,clientY:i+c*n})},destroy:function(){var t=e.options,n=e._tapstart;l([t.wrapper,t.element],"mousedown",n),l([t.wrapper,t.element],"touchstart",n,{passive:!1})}},n=e.options,r=e._tapstart,o=e._keyboard;return c([n.wrapper,n.element],"mousedown",r),c([n.wrapper,n.element],"touchstart",r,{passive:!1}),c(document,["keydown","keyup"],o),e}function R(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function H(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign({onchange:function(){return 0},className:"",elements:[]},t);var e=c(t.elements,"click",function(e){t.elements.forEach(function(n){return n.classList[e.target===n?"add":"remove"](t.className)}),t.onchange(e)});return{destroy:function(){return l.apply(r,R(e))}}}function D(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function M(t){var e=t.el,n=t.reference,r=t.padding,o=void 0===r?8:r,i={start:"sme",middle:"mse",end:"ems"},a={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t[e];if(n)return n;var r=e.split("-"),o=D(r,2),i=o[0],a=o[1],c=void 0===a?"middle":a,l="top"===i||"bottom"===i;return t[e]={position:i,variant:c,isVertical:l}}}();return{update:function(t){var r=c(t),l=r.position,s=r.variant,u=r.isVertical,p=n.getBoundingClientRect(),h=e.getBoundingClientRect(),f=function(t){return t?{s:p.left+p.width-h.width,m:-h.width/2+(p.left+p.width/2),e:p.left}:{s:p.bottom-h.height,m:p.bottom-p.height/2-h.height/2,e:p.bottom-p.height}},d={};function v(t,n,r){var o="top"===r,i=o?h.height:h.width,a=window[o?"innerHeight":"innerWidth"],c=!0,l=!1,s=void 0;try{for(var u,p=t[Symbol.iterator]();!(c=(u=p.next()).done);c=!0){var f=n[u.value],v=d[r]="".concat(f,"px");if(f>0&&f+i<a)return e.style[r]=v,!0}}catch(t){l=!0,s=t}finally{try{c||null==p.return||p.return()}finally{if(l)throw s}}return!1}for(var y=0,m=[u,!u];y<m.length;y++){var b=m[y],g=v(a[l],b?{t:p.top-h.height-o,b:p.bottom+o}:{r:p.right+o,l:p.left-h.width-o},b?"top":"left"),_=v(i[s],f(b),b?"left":"top");if(g&&_)return}e.style.left=d.left,e.style.top=d.top}}}function N(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function V(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var I=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),F(this,"_initializingActive",!0),F(this,"_recalc",!0),F(this,"_color",L()),F(this,"_lastColor",L()),F(this,"_swatchColors",[]),F(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=e=Object.assign({appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},strings:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},e);var r=e,o=r.swatches,i=r.components,a=r.theme,c=r.sliders,l=r.lockOpacity,s=r.padding;["nano","monolith"].includes(a)&&!c&&(e.sliders="h"),i.interaction||(i.interaction={});var u=i.preview,p=i.opacity,h=i.hue,f=i.palette;i.opacity=!l&&p,i.palette=f||u||p||h,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),o&&o.length&&o.forEach(function(t){return n.addSwatch(t)});var d=this._root,v=d.button,y=d.app;this._nanopop=M({reference:v,padding:s,el:y}),v.setAttribute("role","button"),v.setAttribute("aria-label","toggle color picker dialog");var m=this;requestAnimationFrame(function t(){if(!y.offsetWidth&&y.parentElement!==e.container)return requestAnimationFrame(t);m.setColor(e.default),m._rePositioningPicker(),e.defaultRepresentation&&(m._representation=e.defaultRepresentation,m.setColorRepresentation(m._representation)),e.showAlways&&m.show(),m._initializingActive=!1,m._emit("init")})}var e,n,o;return e=t,(n=[{key:"_preBuild",value:function(){for(var t,e,n,r,o,i,a,c,l,s,u,p=this.options,f=0,v=["el","container"];f<v.length;f++){var y=v[f];p[y]=d(p[y])}this._root=(e=(t=p).components,n=t.strings,r=t.useAsButton,o=t.inline,i=t.appClass,a=t.theme,c=t.lockOpacity,l=function(t){return t?"":'style="display:none" hidden'},s=h('\n      <div :ref="root" class="pickr">\n\n        '.concat(r?"":'<button type="button" :ref="button" class="pcr-button"></button>','\n\n        <div :ref="app" class="pcr-app ').concat(i||"",'" data-theme="').concat(a,'" ').concat(o?'style="position: unset"':"",' aria-label="color picker dialog" role="window">\n          <div class="pcr-selection" ').concat(l(e.palette),'>\n            <div :obj="preview" class="pcr-color-preview" ').concat(l(e.preview),'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="use previous color"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="color selection area" role="widget"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ').concat(l(e.hue),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="hue selection slider" role="widget"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ').concat(l(e.opacity),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="opacity selection slider" role="widget"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ').concat(e.palette?"":"pcr-last",'" :ref="swatches"></div> \n\n          <div :obj="interaction" class="pcr-interaction" ').concat(l(Object.keys(e.interaction).length),'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ').concat(l(e.interaction.input),'>\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="').concat(c?"HEX":"HEXA",'" type="button" ').concat(l(e.interaction.hex),'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="').concat(c?"RGB":"RGBA",'" type="button" ').concat(l(e.interaction.rgba),'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="').concat(c?"HSL":"HSLA",'" type="button" ').concat(l(e.interaction.hsla),'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="').concat(c?"HSV":"HSVA",'" type="button" ').concat(l(e.interaction.hsva),'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ').concat(l(e.interaction.cmyk),'>\n\n            <input :ref="save" class="pcr-save" value="').concat(n.save||"Save",'" type="button" ').concat(l(e.interaction.save),' aria-label="save and exit">\n            <input :ref="cancel" class="pcr-cancel" value="').concat(n.cancel||"Cancel",'" type="button" ').concat(l(e.interaction.cancel),' aria-label="cancel and exit">\n            <input :ref="clear" class="pcr-clear" value="').concat(n.clear||"Clear",'" type="button" ').concat(l(e.interaction.clear),' aria-label="clear and exit">\n          </div>\n        </div>\n      </div>\n    ')),(u=s.interaction).options.find(function(t){return!t.hidden&&!t.classList.add("active")}),u.type=function(){return u.options.find(function(t){return t.classList.contains("active")})},s),p.useAsButton&&(this._root.button=p.el),p.container.appendChild(this._root.root)}},{key:"_finalBuild",value:function(){var t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){var n=t.el.parentElement;t.el.nextSibling?n.insertBefore(e.app,t.el.nextSibling):n.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}},{key:"_buildComponents",value:function(){var t=this,e=this,n=this.options.components,r=(e.options.sliders||"v").repeat(2),o=T(r.match(/^[vh]+$/g)?r:[],2),i=o[0],a=o[1],c=function(){return t._color||(t._color=t._lastColor.clone())},l={palette:B({element:e._root.palette.picker,wrapper:e._root.palette.palette,onstop:function(){return e._emit("changestop",e)},onchange:function(t,r){if(n.palette){var o=c(),i=e._root,a=e.options;e._recalc&&(o.s=100*t,o.v=100-100*r,o.v<0&&(o.v=0),e._updateOutput());var l=o.toRGBA().toString(0);this.element.style.background=l,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, ".concat(o.a,"), transparent),\n                        linear-gradient(to left, hsla(").concat(o.h,", 100%, 50%, ").concat(o.a,"), rgba(255, 255, 255, ").concat(o.a,"))\n                    "),a.comparison?a.useAsButton||e._lastColor||(i.preview.lastColor.style.color=l):i.button.style.color=l;var s=o.toHEXA().toString(),u=!0,p=!1,h=void 0;try{for(var f,d=e._swatchColors[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var v=f.value,y=v.el,m=v.color;y.classList[s===m.toHEXA().toString()?"add":"remove"]("pcr-active")}}catch(t){p=!0,h=t}finally{try{u||null==d.return||d.return()}finally{if(p)throw h}}i.preview.currentColor.style.color=l,e.options.comparison||i.button.classList.remove("clear")}}}),hue:B({lock:"v"===a?"h":"v",element:e._root.hue.picker,wrapper:e._root.hue.slider,onstop:function(){return e._emit("changestop",e)},onchange:function(t){if(n.hue&&n.palette){var r=c();e._recalc&&(r.h=360*t),this.element.style.backgroundColor="hsl(".concat(r.h,", 100%, 50%)"),l.palette.trigger()}}}),opacity:B({lock:"v"===i?"h":"v",element:e._root.opacity.picker,wrapper:e._root.opacity.slider,onstop:function(){return e._emit("changestop",e)},onchange:function(t){if(n.opacity&&n.palette){var r=c();e._recalc&&(r.a=Math.round(100*t)/100),this.element.style.background="rgba(0, 0, 0, ".concat(r.a,")"),l.palette.trigger()}}}),selectable:H({elements:e._root.interaction.options,className:"active",onchange:function(t){e._representation=t.target.getAttribute("data-type").toUpperCase(),e._recalc&&e._updateOutput()}})};this._components=l}},{key:"_bindEvents",value:function(){var t=this,e=this._root,n=this.options,r=[c(e.interaction.clear,"click",function(){return t._clearColor()}),c([e.interaction.cancel,e.preview.lastColor],"click",function(){t._emit("cancel",t),t.setHSVA.apply(t,N((t._lastColor||t._color).toHSVA()).concat([!0]))}),c(e.interaction.save,"click",function(){!t.applyColor()&&!n.showAlways&&t.hide()}),c(e.interaction.result,["keyup","input"],function(e){t.setColor(e.target.value,!0)&&!t._initializingActive&&t._emit("change",t._color),e.stopImmediatePropagation()}),c(e.interaction.result,["focus","blur"],function(e){t._recalc="blur"===e.type,t._recalc&&t._updateOutput()}),c([e.palette.palette,e.palette.picker,e.hue.slider,e.hue.picker,e.opacity.slider,e.opacity.picker],["mousedown","touchstart"],function(){return t._recalc=!0})];if(!n.showAlways){var o=n.closeWithKey;r.push(c(e.button,"click",function(){return t.isOpen()?t.hide():t.show()}),c(document,"keyup",function(e){return t.isOpen()&&(e.key===o||e.code===o)&&t.hide()}),c(document,["touchstart","mousedown"],function(n){t.isOpen()&&!f(n).some(function(t){return t===e.app||t===e.button})&&t.hide()},{capture:!0}))}if(n.adjustableNumbers){var i={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};v(e.interaction.result,function(e,n,r){var o=i[t.getColorRepresentation().toLowerCase()];if(o){var a=o[r],c=e+(a>=100?1e3*n:n);return c<=0?0:Number((c<a?c:a).toPrecision(3))}return e})}if(n.autoReposition&&!n.inline){var a=null,l=this;r.push(c(window,["scroll","resize"],function(){l.isOpen()&&(n.closeOnScroll&&l.hide(),null===a?(a=setTimeout(function(){return a=null},100),requestAnimationFrame(function t(){l._rePositioningPicker(),null!==a&&requestAnimationFrame(t)})):(clearTimeout(a),a=setTimeout(function(){return a=null},100)))},{capture:!0}))}this._eventBindings=r}},{key:"_rePositioningPicker",value:function(){var t=this.options;if(!t.inline){var e=this._root.app;matchMedia("(max-width: 576px)").matches?Object.assign(e.style,{margin:"auto",height:"".concat(e.getBoundingClientRect().height,"px"),top:0,bottom:0,left:0,right:0}):(Object.assign(e.style,{margin:null,right:null,top:null,bottom:null,left:null,height:null}),this._nanopop.update(t.position))}}},{key:"_updateOutput",value:function(){var t=this._root,e=this._color,n=this.options;if(t.interaction.type()){var r="to".concat(t.interaction.type().getAttribute("data-type"));t.interaction.result.value="function"==typeof e[r]?e[r]().toString(n.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",e)}},{key:"_clearColor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._root,n=this.options;n.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),n.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this))}},{key:"_parseLocalColor",value:function(t){var e=x(t),n=e.values,r=e.type,o=e.a,i=this.options.lockOpacity,a=void 0!==o&&1!==o;return n&&3===n.length&&(n[3]=void 0),{values:!n||i&&a?null:n,type:r}}},{key:"_emit",value:function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this._eventListener[t].forEach(function(t){return t.apply(void 0,r.concat([e]))})}},{key:"on",value:function(t,e){return"function"==typeof e&&"string"==typeof t&&t in this._eventListener&&this._eventListener[t].push(e),this}},{key:"off",value:function(t,e){var n=this._eventListener[t];if(n){var r=n.indexOf(e);~r&&n.splice(r,1)}return this}},{key:"addSwatch",value:function(t){var e=this,n=this._parseLocalColor(t).values;if(n){var r=this._swatchColors,o=this._root,i=L.apply(void 0,N(n)),a=u('<button type="button" style="color: '.concat(i.toRGBA().toString(0),'" aria-label="color swatch"/>'));return o.swatches.appendChild(a),r.push({el:a,color:i}),this._eventBindings.push(c(a,"click",function(){e.setHSVA.apply(e,N(i.toHSVA()).concat([!0])),e._emit("swatchselect",i),e._emit("change",i)})),!0}return!1}},{key:"removeSwatch",value:function(t){var e=this._swatchColors[t];if(e){var n=e.el;return this._root.swatches.removeChild(n),this._swatchColors.splice(t,1),!0}return!1}},{key:"applyColor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._root,n=e.preview,r=e.button,o=this._color.toRGBA().toString(0);return n.lastColor.style.color=o,this.options.useAsButton||(r.style.color=o),r.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this}},{key:"destroy",value:function(){var t=this;this._eventBindings.forEach(function(t){return l.apply(r,N(t))}),Object.keys(this._components).forEach(function(e){return t._components[e].destroy()})}},{key:"destroyAndRemove",value:function(){var t=this;this.destroy();var e=this._root,n=e.root,r=e.app;n.parentElement&&n.parentElement.removeChild(n),r.parentElement.removeChild(r),Object.keys(this).forEach(function(e){return t[e]=null})}},{key:"hide",value:function(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this}},{key:"show",value:function(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this}},{key:"isOpen",value:function(){return this._root.app.classList.contains("visible")}},{key:"setHSVA",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:360,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||n<0||n>100||r<0||r>1)return!1;this._color=L(t,e,n,r);var a=this._components,c=a.hue,l=a.opacity,s=a.palette;return c.update(t/360),l.update(r),s.update(e/100,1-n/100),o||this.applyColor(),i&&this._updateOutput(),this._recalc=i,!0}},{key:"setColor",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null===t)return this._clearColor(e),!0;var n=this._parseLocalColor(t),r=n.values,o=n.type;if(r){var i=o.toUpperCase(),a=this._root.interaction.options,c=a.find(function(t){return t.getAttribute("data-type")===i});if(c&&!c.hidden){var l=!0,s=!1,u=void 0;try{for(var p,h=a[Symbol.iterator]();!(l=(p=h.next()).done);l=!0){var f=p.value;f.classList[f===c?"add":"remove"]("active")}}catch(t){s=!0,u=t}finally{try{l||null==h.return||h.return()}finally{if(s)throw u}}}return this.setColorRepresentation(i),this.setHSVA.apply(this,N(r).concat([e]))}return!1}},{key:"setColorRepresentation",value:function(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(function(e){return e.getAttribute("data-type").startsWith(t)&&!e.click()})}},{key:"getColorRepresentation",value:function(){return this._representation}},{key:"getColor",value:function(){return this._color}},{key:"getSelectedColor",value:function(){return this._lastColor}},{key:"getRoot",value:function(){return this._root}},{key:"disable",value:function(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}},{key:"enable",value:function(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}])&&V(e.prototype,n),o&&V(e,o),t}();I.utils=r,I.libs={HSVaColor:L,Moveable:B,Nanopop:M,Selectable:H},I.create=function(t){return new I(t)},I.version=y.a;e.default=I}]).default});
//# sourceMappingURL=pickr.es5.min.js.map