!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var c,a,i=[],r=!0,o=!1;try{for(t=t.call(n);!(r=(c=t.next()).done)&&(i.push(c.value),!e||i.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==t.return||t.return()}finally{if(o)throw a}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var c=Object.prototype.toString.call(n).slice(8,-1);"Object"===c&&n.constructor&&(c=n.constructor.name);if("Map"===c||"Set"===c)return Array.from(n);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,c=new Array(e);t<e;t++)c[t]=n[t];return c}System.register(["./index-legacy.9de5530f.js","./table-legacy.905a6a18.js","./index-legacy.65fa1ffc.js","./useTable-legacy.0136984a.js","./index-legacy.0607f9e4.js","./index-legacy.5d6a4de8.js","./index-legacy.948f9f37.js","./row-legacy.b65718ac.js","./drawer-legacy.90321562.js","./card-legacy.15c175c0.js","./index-legacy.21e8c385.js","./index-legacy.a398d48b.js","./index-legacy.89eaccdd.js","./index-legacy.29a2e527.js","./isEqual-legacy.63bf3d19.js","./_baseIsEqual-legacy.57bdcc60.js","./form-item-legacy.d26ea80c.js","./dropdown-legacy.3231fa9c.js","./index-legacy.8ab675c6.js","./tsxHelper-legacy.a1d1c62e.js","./useWindowSizeFn-legacy.1b2f4915.js","./index-legacy.80fc9fa0.js","./index-legacy.40b460b6.js","./index-legacy.a5f9d5f1.js","./refs-legacy.a2736ae9.js","./use-dialog-legacy.57319053.js","./index-legacy.cd8aa6d6.js","./index-legacy.f413d90a.js","./_baseUniq-legacy.a41ff9fa.js","./index-legacy.ad5f6af6.js","./index-legacy.7452d99c.js","./index-legacy.6e2d720d.js","./index-legacy.867f550d.js","./index-legacy.18f85551.js","./index-legacy.c95fa9b7.js","./domUtils-legacy.9091d183.js","./index-legacy.f0372c68.js","./useForm-legacy.7ee84aca.js"],(function(e){"use strict";var t,c,a,i,r,o,l,u,f;return{setters:[function(n){t=n.B},function(n){c=n.d},function(n){a=n.d,i=n._,r=n.e,o=n.o,l=n.f,u=n.h},function(n){f=n.u},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var s=a({components:{BasicTable:t},setup:function(){var e=n(f({columns:[{label:"成员姓名",prop:"name"},{label:"工号",prop:"no"},{label:"所属部门",prop:"dept"},{actions:[{btnText:"编辑",callback:t},{type:"danger",btnText:"删除"}]}],api:c,pagination:!1}),2);function t(n){var e;null===(e=n.onEdit)||void 0===e||e.call(n,!0)}return{registerTable:e[0],handleEdit:t,createActions:function(n){return[{btnText:"编辑",onClick:t.bind(null,n)},{btnText:"删除"}]},getDataSource:e[1].getDataSource}}});e("default",i(s,[["render",function(n,e,t,c,a,i){var f=r("BasicTable");return o(),l("div",null,[u(f,{onRegister:n.registerTable},null,8,["onRegister"])])}]]))}}}))}();