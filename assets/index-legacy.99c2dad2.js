!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,l,i=[],u=!0,o=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){o=!0,l=c}finally{try{u||null==t.return||t.return()}finally{if(o)throw l}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./useContextMenu-legacy.33ede6d7.js","./index-legacy.eb618289.js","./index-legacy.cd308252.js","./index-legacy.a72df072.js","./index-legacy.1df474e3.js","./index-legacy.fcca1494.js","./index-legacy.31fc35dc.js","./index-legacy.cdf18f3b.js","./tsxHelper-legacy.185109f0.js","./index-legacy.81dff364.js","./index-legacy.0f3671f3.js"],(function(n){"use strict";var t,r,l,i,u,o,c,a,f,s,d,p;return{setters:[function(e){t=e.u},function(e){r=e.C},function(e){l=e._,i=e.d,u=e.z,o=e.p,c=e.e,a=e.o,f=e.j,s=e.i,d=e.h,p=e.m},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var y=i({components:{ElButton:u,CollapseContainer:r},setup:function(){var n=e(t(),1)[0],r=o().createMessage;return{handleContext:function(e){n({event:e,items:[{label:"New",icon:"ep:plus",handler:function(){r.success("click new")}},{label:"Open",icon:"ep:folder",handler:function(){r.success("click open")}}]})},handleMultipleContext:function(e){n({event:e,items:[{label:"New",icon:"ep:plus",children:[{label:"New1-1",icon:"ep:plus",divider:!0,children:[{label:"New1-1-1",handler:function(){r.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"ep:plus"}]}]})}}}}),m=p("Right Click on me"),g=p("Right Click on me");n("default",l(y,[["render",function(e,n,t,r,l,i){var u=c("el-button"),o=c("CollapseContainer"),p=c("PageWrapper");return a(),f(p,{title:"右键菜单示例"},{default:s((function(){return[d(o,{title:"Simple"},{default:s((function(){return[d(u,{type:"primary",onContextmenu:e.handleContext},{default:s((function(){return[m]})),_:1},8,["onContextmenu"])]})),_:1}),d(o,{title:"Multiple",class:"mt-4"},{default:s((function(){return[d(u,{type:"primary",onContextmenu:e.handleMultipleContext},{default:s((function(){return[g]})),_:1},8,["onContextmenu"])]})),_:1})]})),_:1})}]]))}}}))}();