!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var c=null!=arguments[r]?arguments[r]:{};r%2?e(Object(c),!0).forEach((function(e){n(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.cd308252.js","./index-legacy.eb618289.js","./tsxHelper-legacy.185109f0.js","./index-legacy.a77864c6.js","./index-legacy.3a2c63b7.js"],(function(e){"use strict";var n,r,c,u,o,i,a,f,s,l,p,b,y,O,d,j;return{setters:[function(e){n=e.d,r=e.r,c=e.c,u=e.b,o=e.cz,i=e.h,a=e.aB,f=e.cA,s=e.l,l=e.b0,p=e.aC},function(e){b=e.C},function(e){y=e.g},function(e){O=e.E},function(e){d=e.E,j=e.a}],execute:function(){var g={schema:{type:Array,default:function(){return[]}},data:{type:Object},useCollapse:{type:Boolean,default:!0},collapseOptions:{type:Object,default:null}},v=t(t({},O),g);var m=n({name:"BasicDescription",props:v,emits:["register"],setup:function(e,n){var p=n.attrs,O=n.slots,v=n.emit,m=n.expose,x=r(null),h=s("basic-description").prefixCls,P=c((function(){return t(t({},e),u(x))})),w=c((function(){return!!u(P).title})),E=c((function(){var e=u(P).collapseOptions;return t({canExpand:!1},void 0===e?{}:e)})),D=c((function(){var e=t(t({},p),u(P)),n=Object.keys(g);return o(e,n)}));function C(){var e=u(P),t=e.schema,n=e.data;return u(t).map((function(e){var t=e.field,r=e.show,c=e.isSlot,o=e.render;if("function"==typeof r&&!r(n))return null;return i(j,u(e),{default:function(){return function(){if(!n)return null;var e=l(n,t);return c?y(O,t,e):"function"==typeof o?o(e,n):null!=e?e:""}()}})})).filter((function(e){return!!e}))}var S=function(){var e,t;return i(d,a({class:"".concat(h)},u(D)),"function"==typeof(t=e=C())||"[object Object]"===Object.prototype.toString.call(t)&&!f(t)?e:{default:function(){return[e]}})},B={setDescProps:function(e){x.value=t(t({},u(x)),e)}};return m(B),v("register",B),function(){return u(w)?function(){var e=u(P),t=e.title;if(!e.useCollapse)return S();var n=u(E),r=n.canExpand,c=n.helpMessage;return i(b,{title:t,canExpan:r,helpMessage:c},{default:function(){return S()},action:function(){return y(O,"action")}})}():S()}}});e("B",p(m))}}}))}();