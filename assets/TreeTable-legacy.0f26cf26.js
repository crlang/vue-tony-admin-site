!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var c,a,i=[],r=!0,o=!1;try{for(t=t.call(n);!(r=(c=t.next()).done)&&(i.push(c.value),!e||i.length!==e);r=!0);}catch(l){o=!0,a=l}finally{try{r||null==t.return||t.return()}finally{if(o)throw a}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var c=Object.prototype.toString.call(n).slice(8,-1);"Object"===c&&n.constructor&&(c=n.constructor.name);if("Map"===c||"Set"===c)return Array.from(n);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,c=new Array(e);t<e;t++)c[t]=n[t];return c}System.register(["./index-legacy.9de5530f.js","./data-legacy.5315a914.js","./index-legacy.65fa1ffc.js","./useTable-legacy.0136984a.js","./index-legacy.0607f9e4.js","./index-legacy.5d6a4de8.js","./index-legacy.948f9f37.js","./row-legacy.b65718ac.js","./drawer-legacy.90321562.js","./card-legacy.15c175c0.js","./index-legacy.21e8c385.js","./index-legacy.a398d48b.js","./index-legacy.89eaccdd.js","./index-legacy.29a2e527.js","./isEqual-legacy.63bf3d19.js","./_baseIsEqual-legacy.57bdcc60.js","./form-item-legacy.d26ea80c.js","./dropdown-legacy.3231fa9c.js","./index-legacy.8ab675c6.js","./tsxHelper-legacy.a1d1c62e.js","./useWindowSizeFn-legacy.1b2f4915.js","./index-legacy.80fc9fa0.js","./index-legacy.40b460b6.js","./index-legacy.a5f9d5f1.js","./refs-legacy.a2736ae9.js","./use-dialog-legacy.57319053.js","./index-legacy.cd8aa6d6.js","./index-legacy.f413d90a.js","./_baseUniq-legacy.a41ff9fa.js","./index-legacy.ad5f6af6.js","./index-legacy.7452d99c.js","./index-legacy.6e2d720d.js","./index-legacy.867f550d.js","./index-legacy.18f85551.js","./index-legacy.c95fa9b7.js","./domUtils-legacy.9091d183.js","./index-legacy.f0372c68.js","./useForm-legacy.7ee84aca.js"],(function(e){"use strict";var t,c,a,i,r,o,l,u,f,s,d,y,g,j,p;return{setters:[function(n){t=n.B},function(n){c=n.g},function(n){a=n.dp,i=n._,r=n.d,o=n.y,l=n.e,u=n.o,f=n.j,s=n.i,d=n.h,y=n.bq,g=n.m,j=n.z},function(n){p=n.u},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var x=function(n){return a.get({url:"/tree/getDemoTreeList",params:n})},b=r({components:{ElButton:o,BasicTable:t},setup:function(){var e=j().createMessage,t=n(p({title:"树形表格",titleHelpMessage:"树形组件不能和序列号列同时存在",columns:c(),api:x,searchInfo:{type:2},rowKey:"code"}),2),a=t[0],i=t[1];return{register:a,expandAll:i.expandAll,collapseAll:i.collapseAll,handleExpand:function(n,t){var c;e.info("点击了 - ".concat(null===(c=y(n))||void 0===c?void 0:c.id," - ").concat(t))}}}}),m=g(" 展开全部 "),h=g(" 折叠全部 ");e("default",i(b,[["render",function(n,e,t,c,a,i){var r=l("el-button"),o=l("BasicTable"),y=l("PageWrapper");return u(),f(y,null,{default:s((function(){return[d(o,{onRegister:n.register,onExpandChange:n.handleExpand},{toolbar:s((function(){return[d(r,{type:"primary",onClick:n.expandAll},{default:s((function(){return[m]})),_:1},8,["onClick"]),d(r,{type:"primary",onClick:n.collapseAll},{default:s((function(){return[h]})),_:1},8,["onClick"])]})),_:1},8,["onRegister","onExpandChange"])]})),_:1})}]]))}}}))}();