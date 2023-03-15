!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(j){f=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),u=new R(r||[]);return i(a,"_invoke",{value:S(t,n,u)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}n.wrap=s;var p={};function d(){}function v(){}function y(){}var g={};f(g,u,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(D([])));w&&w!==r&&o.call(w,u)&&(g=w);var b=y.prototype=d.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(e,n){function r(i,a,u,c){var l=h(e[i],e,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==t(s)&&o.call(s,"__await")?n.resolve(s.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):n.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}})}function S(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return _()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=E(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function E(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function D(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=y,i(b,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=f(y,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},x(L.prototype),f(L.prototype,c,(function(){return this})),n.AsyncIterator=L,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new L(s(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),f(b,l,"Generator"),f(b,u,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=D,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:D(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},n}function n(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(r,o)}System.register(["./index-legacy-db4b469e.js"],(function(t){"use strict";var r,o,i,a,u,c,l;return{setters:[function(t){r=t.r,o=t.ac,i=t.b,a=t.cH,u=t.fP,c=t.w,l=t.cG}],execute:function(t,f){t("u",(function(t){var f,s=r(null),h=r(!1),p=r(null);function d(){var t=i(s);return t||l("The table instance has not been obtained, please make sure the instance is rendered when performing the instance operation!"),t}var v={clearSelection:function(){d().clearSelection()},toggleRowSelection:function(t,e){d().toggleRowSelection(t,e)},toggleAllSelection:function(){d().toggleAllSelection()},toggleRowExpansion:function(t,e){d().toggleRowExpansion(t,e)},setCurrentRow:function(t){d().setCurrentRow(t)},clearSort:function(){d().clearSort()},clearFilter:function(t){d().clearFilter(t)},doLayout:function(){d().doLayout()},sort:function(t,e){d().sort(t,e)},reload:(y=e().mark((function t(n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d().reload(n);case 1:case"end":return t.stop()}}),t)})),g=function(){var t=this,e=arguments;return new Promise((function(r,o){var i=y.apply(t,e);function a(t){n(i,r,o,a,u,"next",t)}function u(t){n(i,r,o,a,u,"throw",t)}a(void 0)}))},function(t){return g.apply(this,arguments)}),setTableProps:function(t){d().setTableProps(t)},getColumns:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ignoreIndex,n=void 0!==e&&e,r=d().getColumns({ignoreIndex:n})||[];return r},setColumns:function(t){d().setColumns(t)},setLoading:function(t){d().setLoading(t)},getDataSource:function(){return d().getDataSource()},getRawDataSource:function(){return d().getRawDataSource()},setTableData:function(t){return d().setTableData(t)},getCacheColumns:function(){return d().getCacheColumns()},redoHeight:function(){d().redoHeight()},setPagination:function(t){return d().setPagination(t)},getPagination:function(){return d().getPagination()},getFormRef:function(){return i(p)},expandAll:function(){d().expandAll()},collapseAll:function(){d().collapseAll()},deleteTableDataRecord:function(t){return d().deleteTableDataRecord(t)},insertTableDataRecord:function(t,e){return d().insertTableDataRecord(t,e)},updateTableDataRecord:function(t,e){return d().updateTableDataRecord(t,e)},findTableDataRecord:function(t){return d().findTableDataRecord(t)},updateTableData:function(t,e,n){return d().updateTableData(t,e,n)}};var y,g;return[function(e,n){var r;o((function(){s.value=null,h.value=null})),i(h)&&a()&&e===i(s)||(s.value=e,p.value=n,h.value=!0,t&&e.setTableProps(u(t)),null===(r=f)||void 0===r||r(),f=c((function(){return t}),(function(){t&&e.setTableProps(u(t))}),{immediate:!0,deep:!0}))},v]}))}}}))}();