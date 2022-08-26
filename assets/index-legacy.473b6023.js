!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(k){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=j(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}n.wrap=f;var d={};function p(){}function h(){}function y(){}var g={};u(g,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(S([])));v&&v!==r&&o.call(v,a)&&(g=v);var b=y.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,n){function r(i,a,c,l){var u=s(e[i],e,a);if("throw"!==u.type){var f=u.arg,d=f.value;return d&&"object"==t(d)&&o.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):n.resolve(d).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,l)}))}l(u.arg)}var i;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}}function j(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=s(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=y,u(b,"constructor",y),u(y,"constructor",h),h.displayName=u(y,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,c,(function(){return this})),n.AsyncIterator=x,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new x(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),u(b,l,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.0607f9e4.js","./PersonTable-legacy.eb22b9d3.js","./index-legacy.65fa1ffc.js","./index-legacy.7405a6ef.js","./useForm-legacy.7ee84aca.js","./index-legacy.5d6a4de8.js","./index-legacy.948f9f37.js","./row-legacy.b65718ac.js","./drawer-legacy.90321562.js","./card-legacy.15c175c0.js","./index-legacy.21e8c385.js","./index-legacy.a398d48b.js","./index-legacy.89eaccdd.js","./index-legacy.29a2e527.js","./isEqual-legacy.63bf3d19.js","./_baseIsEqual-legacy.57bdcc60.js","./form-item-legacy.d26ea80c.js","./dropdown-legacy.3231fa9c.js","./index-legacy.8ab675c6.js","./tsxHelper-legacy.a1d1c62e.js","./useWindowSizeFn-legacy.1b2f4915.js","./index-legacy.80fc9fa0.js","./index-legacy.40b460b6.js","./index-legacy.a5f9d5f1.js","./refs-legacy.a2736ae9.js","./use-dialog-legacy.57319053.js","./index-legacy.cd8aa6d6.js","./index-legacy.f413d90a.js","./_baseUniq-legacy.a41ff9fa.js","./index-legacy.ad5f6af6.js","./index-legacy.7452d99c.js","./index-legacy.6e2d720d.js","./index-legacy.867f550d.js","./index-legacy.18f85551.js","./index-legacy.c95fa9b7.js","./index-legacy.9de5530f.js","./domUtils-legacy.9091d183.js","./index-legacy.f0372c68.js","./table-legacy.905a6a18.js","./useTable-legacy.0136984a.js"],(function(t){"use strict";var n,i,a,c,l,u,f,s,d,p,h,y,g,m,v,b;return{setters:[function(t){n=t.B},function(t){i=t.default},function(t){a=t._,c=t.d,l=t.y,u=t.r,f=t.e,s=t.o,d=t.j,p=t.i,h=t.g,y=t.h,g=t.z,m=t.m},function(t){v=t.E},function(t){b=t.u},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var w=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],x=[{label:"私密",value:"1"},{label:"公开",value:"2"}],j=[{field:"f1",component:"ElInput",label:"仓库名",required:!0},{field:"f2",component:"ElInput",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"ElSelect",label:"仓库管理员",componentProps:{options:w},required:!0,colProps:{offset:2}},{field:"f4",component:"ElSelect",label:"审批人",componentProps:{options:w},required:!0},{field:"f5",component:"ElDatePicker",label:"生效日期",required:!0,colProps:{offset:2},componentProps:{type:"daterange"}},{field:"f6",component:"ElSelect",label:"仓库类型",componentProps:{options:x},required:!0,colProps:{offset:2}}],E=[{field:"t1",component:"ElInput",label:"任务名",required:!0},{field:"t2",component:"ElInput",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"ElSelect",label:"执行人",componentProps:{options:w},required:!0,colProps:{offset:2}},{field:"t4",component:"ElSelect",label:"责任人",componentProps:{options:w},required:!0},{field:"t5",component:"ElTimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"ElSelect",label:"任务类型",componentProps:{options:x},required:!0,colProps:{offset:2}}],P=c({name:"FormHightPage",components:{ElButton:l,ElCard:v,BasicForm:n,PersonTable:i},setup:function(){var t=u(),n=g().createMessage,i=o(b({labelWidth:120,colProps:{span:6},schemas:j,showActionButtonGroup:!1}),2),a=i[0],c=i[1].validate,l=o(b({labelWidth:120,colProps:{span:6},schemas:E,showActionButtonGroup:!1}),2),f=l[0],s=l[1].validate;function d(){return(d=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([c(),s()]);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),n.error("请填写完整再提交");case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}return{register:a,registerTask:f,submitAll:function(){return d.apply(this,arguments)},tableRef:t}}}),L={class:"p-2 text-right"},S=m(" 提交 ");t("default",a(P,[["render",function(t,e,n,r,o,i){var a=f("BasicForm"),c=f("el-card"),l=f("PersonTable"),u=f("el-button"),g=f("PageWrapper");return s(),d(g,{class:"high-form",title:"高级表单",contentFullHeight:"",description:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:p((function(){return[h("div",L,[y(u,{type:"primary",onClick:t.submitAll},{default:p((function(){return[S]})),_:1},8,["onClick"])])]})),default:p((function(){return[y(c,{header:"仓库管理"},{default:p((function(){return[y(a,{onRegister:t.register},null,8,["onRegister"])]})),_:1}),y(c,{header:"任务管理",class:"my-5"},{default:p((function(){return[y(a,{onRegister:t.registerTask},null,8,["onRegister"])]})),_:1}),y(c,{header:"成员管理"},{default:p((function(){return[y(l,{ref:"tableRef"},null,512)]})),_:1})]})),_:1})}],["__scopeId","data-v-0cfc73ec"]]))}}}))}();