!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,c,i=[],a=!0,o=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){o=!0,c=u}finally{try{a||null==t.return||t.return()}finally{if(o)throw c}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.2e34498a.js","./index-legacy.cd308252.js","./index-legacy.131fac0a.js","./index-legacy.40b460b6.js","./index-legacy.81dff364.js","./tsxHelper-legacy.185109f0.js","./index-legacy.31fc35dc.js","./index-legacy.a77864c6.js","./row-legacy.ec50572d.js","./drawer-legacy.4a70f1fb.js","./card-legacy.584d3fc9.js","./index-legacy.01ebb247.js","./index-legacy.f15ecb5f.js","./index-legacy.d0d56c10.js","./isEqual-legacy.5f7ec321.js","./_baseIsEqual-legacy.b151024a.js","./form-item-legacy.f5cfce08.js","./dropdown-legacy.106e2848.js","./index-legacy.e9516782.js","./use-dialog-legacy.bd28a0fb.js","./index-legacy.250c887c.js"],(function(n){"use strict";var t,r,c,i,a,o,u,f,l,s,y,d;return{setters:[function(e){t=e.B,r=e.a},function(e){c=e.d,i=e.z,a=e._,o=e.e,u=e.o,f=e.j,l=e.i,s=e.h,y=e.aB,d=e.m},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var g=c({components:{ElButton:i,BasicDrawer:t},setup:function(){var n=e(r(),2);return{register:n[0],closeDrawer:n[1].closeDrawer}}}),j=d(" Drawer Info. "),b=d("内部关闭drawer");n("default",a(g,[["render",function(e,n,t,r,c,i){var a=o("el-button"),d=o("BasicDrawer");return u(),f(d,y(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:l((function(){return[j,s(a,{type:"primary",onClick:e.closeDrawer},{default:l((function(){return[b]})),_:1},8,["onClick"])]})),_:1},16,["onRegister"])}]]))}}}))}();