System.register(["./index-legacy.65fa1ffc.js","./data-legacy.6da04a8d.js","./index-legacy.ad5f6af6.js"],(function(t){"use strict";var e,i,n,r,a,l,u,c,o,s,d,f,h,m,g,v,p,_,x,b,y,H;return{setters:[function(t){e=t.d,i=t.r,n=t.q,r=t.c,a=t.b,l=t.w,u=t.Y,c=t.R,o=t.al,s=t.h,d=t.l,f=t.aC,h=t._,m=t.e,g=t.o,v=t.j,p=t.i,_=t.g,x=t.t,b=t.m},function(t){y=t.d},function(t){H=t.E}],execute:function(){var N=e({name:"VirtualScroll",props:{height:[Number,String],width:[Number,String],itemHeight:{type:Number,required:!0},listData:{type:Array,default:function(){return[]}},bench:{type:Number,default:0},maxHeight:[Number,String],minHeight:[Number,String],maxWidth:[Number,String],minWidth:[Number,String]},setup:function(t,e){var f=e.slots,h=i(null),m=n({first:0,last:0,scrollTop:0}),g=d("virtual-scroll").prefixCls,v=r((function(){return parseInt(t.bench,10)})),p=r((function(){return parseInt(t.itemHeight,10)})),_=r((function(){return Math.max(0,m.first-a(v))})),x=r((function(){return Math.min((t.listData||[]).length,m.last+a(v))})),b=r((function(){return{height:H((t.listData||[]).length*a(p))}})),y=r((function(){var e={},i=H(t.height),n=H(t.minHeight),r=H(t.minWidth),a=H(t.maxHeight),l=H(t.maxWidth),u=H(t.width);return i&&(e.height=i),n&&(e.minHeight=n),r&&(e.minWidth=r),a&&(e.maxHeight=a),l&&(e.maxWidth=l),u&&(e.width=u),e}));function H(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==t||""===t?void 0:isNaN(+t)?String(t):"".concat(Number(t)).concat(e)}function N(e){var i=a(h);if(!i)return 0;var n=parseInt(t.height||0,10)||i.clientHeight;return e+Math.ceil(n/a(p))}function S(){var t=a(h);t&&(m.scrollTop=t.scrollTop,m.first=Math.floor(m.scrollTop/a(p)),m.last=N(m.first))}function D(t,e){e+=a(_);var i=H(a(p)),n=H(e*a(p)),r=f.default;return s("div",{class:"".concat(g,"__item"),style:{top:n,height:i},key:e},{default:function(){return r({index:e,item:t})}})}return l([function(){return t.itemHeight},function(){return t.height}],(function(){S()})),u((function(){m.last=N(0),c((function(){var t=a(h);t&&t.addEventListener("scroll",S)}))})),o((function(){c((function(){var t=a(h);t&&t.removeEventListener("scroll",S)}))})),function(){return s("div",{class:g,style:a(y),ref:h},[s("div",{class:"".concat(g,"__container"),style:a(b)},[(e=t.listData,(void 0===e?[]:e).slice(a(_),a(x)).map(D))])]);var e}}}),S=f(N),D=e({components:{ElDivider:H,VirtualScroll:S},setup:function(){return{data:y}}}),W=b("基础滚动示例"),w={class:"virtual-scroll-demo-wrap"},j={class:"virtual-scroll-demo__item"},E=b("即使不可见，也预先加载50条数据，防止空白"),I={class:"virtual-scroll-demo-wrap"},M={class:"virtual-scroll-demo__item"};t("default",h(D,[["render",function(t,e,i,n,r,a){var l=m("el-divider"),u=m("VirtualScroll",!0),c=m("PageWrapper");return g(),v(c,{title:"虚拟滚动示例"},{default:p((function(){return[s(l,null,{default:p((function(){return[W]})),_:1}),_("div",w,[s(u,{itemHeight:60,listData:t.data,height:300},{default:p((function(t){var e=t.item,i=t.index;return[_("div",j,x(i)+" - "+x(e.title),1)]})),_:1},8,["listData"])]),s(l,null,{default:p((function(){return[E]})),_:1}),_("div",I,[s(u,{listData:t.data,itemHeight:60,height:300,bench:50},{default:p((function(t){var e=t.item;return[_("div",M,x(e.title),1)]})),_:1},8,["listData"])])]})),_:1})}],["__scopeId","data-v-d6794c20"]]))}}}));