!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(F){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),u=new P(n||[]);return i(a,"_invoke",{value:E(t,r,u)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}r.wrap=s;var h={};function v(){}function y(){}function d(){}var m={};f(m,u,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(k([])));b&&b!==n&&o.call(b,u)&&(m=b);var w=d.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(i,a,u,c){var l=p(e[i],e,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==t(s)&&o.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=j(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return y.prototype=d,i(w,"constructor",{value:d,configurable:!0}),i(d,"constructor",{value:y,configurable:!0}),y.displayName=f(d,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},x(O.prototype),f(O.prototype,c,(function(){return this})),r.AsyncIterator=O,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new O(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy-db4b469e.js","./index-legacy-cc451a16.js"],(function(t){"use strict";var r,o,a,u,c,l,f,s,p,h,v,y,d,m,g,b,w,x,O,E,j;return{setters:[function(t){r=t.d,o=t.r,a=t.c,u=t.b,c=t.cF,l=t.aC,f=t.w,s=t.cf,p=t.Z,h=t._,v=t.e,y=t.o,d=t.k,m=t.i,g=t.f,b=t.al,w=t.bw,x=t.aD,O=t.aE},function(t){E=t.c,j=t.E}],execute:function(t,S){var L=r({name:"ApiSelect",components:{ElSelect:E,ElOption:j},inheritAttrs:!1,props:{modelValue:{type:[Array,String,Number],default:""},api:{type:Function,default:null},params:{type:Object,default:function(){return{}}},resultField:{type:String,default:""},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},valueToString:{type:Boolean},immediate:{type:Boolean,default:!1}},emits:["option-change","change","update:modelValue"],setup:function(t,r){var h=r.emit,v=o([]),y=o(!1),d=o(!0),m=o(),g=a((function(){var e=t.labelField,r=t.valueField,n=t.valueToString;return u(v).reduce((function(t,o){if(o){var a=o[r];t.push(i(i({},c(o,[e,r])),{},{label:o[e],value:n?"".concat(a):a}))}return t}),[])})),b=a((function(){return u(y)?"请等待数据加载完成...":"数据为空"}));function w(){return x.apply(this,arguments)}function x(){return(x=n(e().mark((function r(){var n,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.api)&&"function"==typeof n){e.next=3;break}return e.abrupt("return");case 3:return v.value=[],e.prev=4,y.value=!0,e.next=8,n(t.params);case 8:if(o=e.sent,!Array.isArray(o)){e.next=13;break}return v.value=o,j(),e.abrupt("return");case 13:t.resultField&&(v.value=s(o,t.resultField)||[]),j(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0);case 20:return e.prev=20,y.value=!1,e.finish(20);case 23:case"end":return e.stop()}}),r,null,[[4,17,20,23]])})))).apply(this,arguments)}function O(){return E.apply(this,arguments)}function E(){return(E=n(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.immediate||!u(d)){e.next=4;break}return e.next=3,w();case 3:d.value=!1;case 4:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function j(){h("option-change",u(g))}return l((function(){m.value=t.modelValue||"",t.immediate&&w()})),f((function(){return t.params}),(function(){!u(d)&&w()}),{deep:!0}),f((function(){return u(m)}),(function(t){h("update:modelValue",t),h("change",t)})),p((function(){O()})),{innerValueRef:m,getOptions:g,loading:y,getSelectEmpty:b,handleFetch:O}}});t("A",O(h(L,[["render",function(t,e,r,n,o,i){var a=v("ElOption"),u=v("ElSelect");return y(),d(u,x({onVisibleChange:t.handleFetch,clearable:""},t.$attrs,{"no-data-text":t.getSelectEmpty,modelValue:t.innerValueRef,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.innerValueRef=e})}),{default:m((function(){return[(y(!0),g(b,null,w(t.getOptions,(function(t){return y(),d(a,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])})),128))]})),_:1},16,["onVisibleChange","no-data-text","modelValue"])}]])))}}}))}();