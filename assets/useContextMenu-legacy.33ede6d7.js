!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.cd308252.js","./index-legacy.a72df072.js","./index-legacy.1df474e3.js"],(function(e){"use strict";var n,r,o,i,c,l,u,a,s,d,f,v,p,b,y,m,h;return{setters:[function(e){n=e.d,r=e.r,o=e.c,i=e.Y,c=e.R,l=e.ab,u=e.b,a=e.h,s=e.cA,d=e.l,f=e.am,v=e.d_,p=e.U},function(e){b=e.I},function(e){y=e.b,m=e.a,h=e.E}],execute:function(){e("u",(function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];p()&&e&&l((function(){g()}));return[w,g]}));var O=n({name:"ContextMenu",props:{items:{type:Array,default:function(){return[]}},width:{type:Number,default:156},event:{type:Object,default:null},styles:Object,showIcon:{type:Boolean,default:!0},axis:{type:Object,default:function(){return{x:0,y:0}}}},setup:function(e){var n=r(null),v=r(!1),p=d("context-menu").prefixCls,O=o((function(){var n=e.axis,r=e.items,o=e.styles,i=e.width,c=n||{x:0,y:0},l=c.x,u=c.y,a=44*(r||[]).length,s=i,d=document.body,f=d.clientWidth<l+s?l-s:l,v=d.clientHeight<u+a?u-a:u;return t(t({},o),{},{width:"".concat(i,"px"),left:"".concat(f+1,"px"),top:"".concat(v+1,"px")})})),j=function(e){var t=e.item,n=e.handler,r=e.showIcon;return a("div",{class:"".concat(p,"__text"),onClick:n.bind(null,t)},[r&&t.icon&&a(b,{class:"mr-2",name:t.icon},null),a("span",null,[t.label])])};function w(e,t){var n=e.handler;e.disabled||(v.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function g(t){return t.map((function(t){var n=t.disabled,r=t.label,o=t.children,i=t.divider,c=void 0!==i&&i,l={item:t,handler:w,showIcon:e.showIcon};return o&&0!==o.length?u(v)?a(h,{index:r,disabled:n,"popper-class":"".concat(p,"__popup")},{title:function(){return a(j,l,null)},default:function(){return g(o)}}):null:a(f,null,[a(m,{disabled:n,class:"".concat(p,"__item ").concat(c?"is-divider":""),index:r},{default:function(){return[a(j,l,null)]}})])}))}return i((function(){c((function(){return v.value=!0}))})),l((function(){var e=u(n);e&&document.body.removeChild(e)})),function(){var t;if(!u(v))return null;var r,o=e.items;return a(y,{"default-active":"12",mode:"vertical",collapse:!0,"unique-opened":!0,"menu-trigger":"hover",class:p,ref:n,style:u(O)},"function"==typeof(r=t=g(o))||"[object Object]"===Object.prototype.toString.call(r)&&!s(r)?t:{default:function(){return[t]}})}}}),j={domList:[],resolve:function(){}},w=function(e){var t=e||{},n=t.event,r=void 0===n?null:n,o=t.showIcon,i=void 0===o||o,c=t.styles,l=void 0===c?{}:c,u=t.items,s=t.width;if(r&&(null==r||r.preventDefault()),"undefined"!=typeof window)return new Promise((function(e){var t=document.body,n=document.createElement("div"),o={event:r,styles:l,showIcon:i,items:u,width:s,axis:{x:(null==r?void 0:r.clientX)||0,y:(null==r?void 0:r.clientY)||0}},c=a(O,o);v(c,n);var d=function(){j.resolve("")};j.domList.push(n);var f=function(){j.domList.forEach((function(e){try{e&&t.removeChild(e)}catch(n){}})),t.removeEventListener("click",d),t.removeEventListener("scroll",d)};j.resolve=function(t){f(),e(t)},f(),t.appendChild(n),t.addEventListener("click",d),t.addEventListener("scroll",d)}))},g=function(){j&&(j.resolve(""),j.domList=[])}}}}))}();