!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var c,a,r=[],i=!0,u=!1;try{for(t=t.call(n);!(i=(c=t.next()).done)&&(r.push(c.value),!e||r.length!==e);i=!0);}catch(o){u=!0,a=o}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return r}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var c=Object.prototype.toString.call(n).slice(8,-1);"Object"===c&&n.constructor&&(c=n.constructor.name);if("Map"===c||"Set"===c)return Array.from(n);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,c=new Array(e);t<e;t++)c[t]=n[t];return c}System.register(["./index-legacy.ec1ddf55.js","./data-legacy.ac3df9b5.js","./table-legacy.95532f77.js","./index-legacy.cd308252.js","./useTable-legacy.dae9c52a.js","./index-legacy.8aaceb96.js","./index-legacy.0e15e12e.js","./index-legacy.a77864c6.js","./row-legacy.ec50572d.js","./drawer-legacy.4a70f1fb.js","./card-legacy.584d3fc9.js","./index-legacy.01ebb247.js","./index-legacy.f15ecb5f.js","./index-legacy.31fc35dc.js","./index-legacy.d0d56c10.js","./isEqual-legacy.5f7ec321.js","./_baseIsEqual-legacy.b151024a.js","./form-item-legacy.f5cfce08.js","./dropdown-legacy.106e2848.js","./index-legacy.81dff364.js","./tsxHelper-legacy.185109f0.js","./useWindowSizeFn-legacy.8693c1a3.js","./index-legacy.131fac0a.js","./index-legacy.40b460b6.js","./index-legacy.250c887c.js","./refs-legacy.9b11aec0.js","./use-dialog-legacy.bd28a0fb.js","./index-legacy.69017a7a.js","./index-legacy.b64aef82.js","./_baseUniq-legacy.fd6c0d49.js","./index-legacy.1801d9f9.js","./index-legacy.365d3541.js","./index-legacy.d04eed9c.js","./index-legacy.880f4132.js","./index-legacy.58e676ae.js","./index-legacy.d4ed367e.js","./domUtils-legacy.9091d183.js","./index-legacy.a72df072.js","./useForm-legacy.1f303c78.js"],(function(e){"use strict";var t,c,a,r,i,u,o,f,l,s;return{setters:[function(n){t=n.B},function(n){c=n.d},function(n){a=n.d},function(n){r=n._,i=n.d,u=n.e,o=n.o,f=n.f,l=n.h},function(n){s=n.u},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var d=i({components:{BasicTable:t},setup:function(){return{registerTable:n(s({title:"表尾行合计示例",api:a,columns:c(),height:350,showSummary:!0,summaryMethod:function(n){var e=n.columns,t=n.data,c=[];return e.forEach((function(n,e){if(0!==e){var a=t.map((function(e){return Number(e[n.property])}));a.every((function(n){return Number.isNaN(n)}))||"sex"===n.property?c[e]="--":c[e]="".concat(a.reduce((function(n,e){var t=Number(e);return Number.isNaN(t)?n:n+e}),0))}else c[e]="统计"})),c}}),1)[0]}}}),y={class:"p-4"};e("default",r(d,[["render",function(n,e,t,c,a,r){var i=u("BasicTable");return o(),f("div",y,[l(i,{onRegister:n.registerTable},null,8,["onRegister"])])}]]))}}}))}();