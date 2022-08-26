!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}r.wrap=f;var p={};function h(){}function y(){}function d(){}var v={};l(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==n&&o.call(g,a)&&(v=g);var b=d.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,u,c){var l=s(e[i],e,a);if("throw"!==l.type){var f=l.arg,p=f.value;return p&&"object"==t(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(p).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=d,l(b,"constructor",d),l(d,"constructor",y),y.displayName=l(d,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,u,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./index-legacy.cd308252.js","./index-legacy.f15ecb5f.js"],(function(t){"use strict";var r,o,a,u,c,l,f,s,p,h,y,d,v,m,g,b,w,x,O,E,L;return{setters:[function(t){r=t.d,o=t.r,a=t.c,u=t.b,c=t.cz,l=t.aA,f=t.w,s=t.b0,p=t.Y,h=t._,y=t.e,d=t.o,v=t.j,m=t.i,g=t.f,b=t.bB,w=t.am,x=t.aB,O=t.aC},function(t){E=t.a,L=t.E}],execute:function(){var j=r({name:"ApiSelect",components:{ElSelect:E,ElOption:L},inheritAttrs:!1,props:{modelValue:{type:[Array,String,Number],default:""},api:{type:Function,default:null},params:{type:Object,default:function(){return{}}},resultField:{type:String,default:""},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},valueToString:{type:Boolean},immediate:{type:Boolean,default:!1}},emits:["option-change","change","update:modelValue"],setup:function(t,r){var h=r.emit,y=o([]),d=o(!1),v=o(!0),m=o(),g=a((function(){var e=t.labelField,r=t.valueField,n=t.valueToString;return u(y).reduce((function(t,o){if(o){var a=o[r];t.push(i(i({},c(o,[e,r])),{},{label:o[e],value:n?"".concat(a):a}))}return t}),[])})),b=a((function(){return u(d)?"请等待数据加载完成...":"数据为空"}));function w(){return x.apply(this,arguments)}function x(){return(x=n(e().mark((function r(){var n,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((n=t.api)&&"function"==typeof n){e.next=3;break}return e.abrupt("return");case 3:return y.value=[],e.prev=4,d.value=!0,e.next=8,n(t.params);case 8:if(o=e.sent,!Array.isArray(o)){e.next=13;break}return y.value=o,L(),e.abrupt("return");case 13:t.resultField&&(y.value=s(o,t.resultField)||[]),L(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0);case 20:return e.prev=20,d.value=!1,e.finish(20);case 23:case"end":return e.stop()}}),r,null,[[4,17,20,23]])})))).apply(this,arguments)}function O(){return E.apply(this,arguments)}function E(){return(E=n(e().mark((function r(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.immediate||!u(v)){e.next=4;break}return e.next=3,w();case 3:v.value=!1;case 4:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function L(){h("option-change",u(g))}return l((function(){m.value=t.modelValue||"",t.immediate&&w()})),f((function(){return t.params}),(function(){!u(v)&&w()}),{deep:!0}),f((function(){return u(m)}),(function(t){h("update:modelValue",t),h("change",t)})),p((function(){O()})),{innerValueRef:m,getOptions:g,loading:d,getSelectEmpty:b,handleFetch:O}}});t("A",O(h(j,[["render",function(t,e,r,n,o,i){var a=y("ElOption"),u=y("ElSelect");return d(),v(u,x({onVisibleChange:t.handleFetch,clearable:""},t.$attrs,{"no-data-text":t.getSelectEmpty,modelValue:t.innerValueRef,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.innerValueRef=e})}),{default:m((function(){return[(d(!0),g(w,null,b(t.getOptions,(function(t){return d(),v(a,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])})),128))]})),_:1},16,["onVisibleChange","no-data-text","modelValue"])}]])))}}}))}();