!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,a,c=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(c.push(t.value),!n||c.length!==n);i=!0);}catch(u){o=!0,a=u}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return c}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}System.register(["./index-legacy.b9845da6.js","./Drawer1-legacy.c7ddb8e5.js","./Drawer2-legacy.f76fc926.js","./Drawer3-legacy.fbc19122.js","./Drawer4-legacy.4978853b.js","./Drawer5-legacy.4b11581e.js","./index-legacy.65fa1ffc.js","./index-legacy.e1d47d0d.js","./index-legacy.80fc9fa0.js","./index-legacy.40b460b6.js","./index-legacy.8ab675c6.js","./tsxHelper-legacy.a1d1c62e.js","./index-legacy.89eaccdd.js","./index-legacy.948f9f37.js","./row-legacy.b65718ac.js","./drawer-legacy.90321562.js","./card-legacy.15c175c0.js","./index-legacy.21e8c385.js","./index-legacy.a398d48b.js","./index-legacy.29a2e527.js","./isEqual-legacy.63bf3d19.js","./_baseIsEqual-legacy.57bdcc60.js","./form-item-legacy.d26ea80c.js","./dropdown-legacy.3231fa9c.js","./index-legacy.3b5be3a6.js","./use-dialog-legacy.57319053.js","./index-legacy.a5f9d5f1.js","./index-legacy.0607f9e4.js","./index-legacy.5d6a4de8.js","./useWindowSizeFn-legacy.1b2f4915.js","./refs-legacy.a2736ae9.js","./index-legacy.cd8aa6d6.js","./index-legacy.f413d90a.js","./_baseUniq-legacy.a41ff9fa.js","./index-legacy.ad5f6af6.js","./index-legacy.7452d99c.js","./index-legacy.6e2d720d.js","./index-legacy.867f550d.js","./index-legacy.18f85551.js","./index-legacy.c95fa9b7.js","./useForm-legacy.7ee84aca.js"],(function(n){"use strict";var r,t,a,c,i,o,u,f,l,s,d,y,g,j,w,p;return{setters:[function(e){r=e.u},function(e){t=e.default},function(e){a=e.default},function(e){c=e.default},function(e){i=e.default},function(e){o=e.default},function(e){u=e._,f=e.d,l=e.y,s=e.e,d=e.o,y=e.j,g=e.i,j=e.h,w=e.m},function(e){p=e.E},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var D=f({components:{ElAlert:p,ElButton:l,Drawer1:t,Drawer2:a,Drawer3:c,Drawer4:i,Drawer5:o},setup:function(){var n=e(r(),2),t=n[0],a=n[1].openDrawer,c=e(r(),2),i=c[0],o=c[1].openDrawer,u=e(r(),2),f=u[0],l=u[1].openDrawer,s=e(r(),2);return{register2:t,openDrawer2:a,register3:i,openDrawer3:o,register4:f,register5:s[0],openDrawer5:s[1].openDrawer,send:function(){l(!0,{data:"content",info:"Info"})}}}}),b=w(" 打开Drawer "),x=w(" 打开Drawer "),m=w(" 打开Drawer并传递数据 "),h=w(" 打开详情Drawer ");n("default",u(D,[["render",function(e,n,r,t,a,c){var i=s("el-alert"),o=s("Drawer1"),u=s("el-button"),f=s("Drawer2"),l=s("Drawer3"),w=s("Drawer4"),p=s("Drawer5"),D=s("PageWrapper");return d(),y(D,{title:"抽屉组件使用示例"},{default:g((function(){return[j(i,{title:"使用 useDrawer 进行抽屉操作","show-icon":""}),j(o),j(i,{title:"内外同时控制显示隐藏","show-icon":""}),j(u,{type:"primary",class:"my-4",onClick:n[0]||(n[0]=function(n){return e.openDrawer2(!0)})},{default:g((function(){return[b]})),_:1}),j(i,{title:"自适应高度/显示footer","show-icon":""}),j(u,{type:"primary",class:"my-4",onClick:n[1]||(n[1]=function(n){return e.openDrawer3(!0)})},{default:g((function(){return[x]})),_:1}),j(i,{title:"内外数据交互","show-icon":""}),j(u,{type:"primary",class:"my-4",onClick:e.send},{default:g((function(){return[m]})),_:1},8,["onClick"]),j(i,{title:"详情页模式","show-icon":""}),j(u,{type:"primary",class:"my-4",onClick:n[2]||(n[2]=function(n){return e.openDrawer5(!0)})},{default:g((function(){return[h]})),_:1}),j(f,{onRegister:e.register2},null,8,["onRegister"]),j(l,{onRegister:e.register3},null,8,["onRegister"]),j(w,{onRegister:e.register4},null,8,["onRegister"]),j(p,{onRegister:e.register5},null,8,["onRegister"])]})),_:1})}]]))}}}))}();