import{ae as V,a9 as $,_ as j,w as T}from"./index.16f9732e.js";import{y as k,a as D,_ as B,l,u as i,b as I,q as M,U as P,R as a,Z as x,z as L,G as q,H as h,K as f,Q as A,P as E}from"./ex-pkg-@vue.dfd8e273.js";import{P as U}from"./index.04776c9c.js";import{d as z}from"./data.3116030c.js";import{L as G}from"./ex-pkg-element-plus.e1a09009.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const S="virtual-scroll";function s(e,_="px"){if(!(e==null||e===""))return isNaN(+e)?String(e):`${Number(e)}${_}`}var K=k({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(e,{slots:_}){const u=D(null),n=B({first:0,last:0,scrollTop:0}),p=l(()=>parseInt(e.bench,10)),c=l(()=>parseInt(e.itemHeight,10)),d=l(()=>Math.max(0,n.first-i(p))),g=l(()=>Math.min((e.items||[]).length,n.last+i(p))),v=l(()=>({height:s((e.items||[]).length*i(c))})),m=l(()=>{const t={},r=s(e.height),o=s(e.minHeight),H=s(e.minWidth),w=s(e.maxHeight),F=s(e.maxWidth),N=s(e.width);return r&&(t.height=r),o&&(t.minHeight=o),H&&(t.minWidth=H),w&&(t.maxHeight=w),F&&(t.maxWidth=F),N&&(t.width=N),t});I([()=>e.itemHeight,()=>e.height],()=>{y()});function b(t){const r=i(u);if(!r)return 0;const o=parseInt(e.height||0,10)||r.clientHeight;return t+Math.ceil(o/i(c))}function W(){return Math.floor(n.scrollTop/i(c))}function y(){const t=i(u);!t||(n.scrollTop=t.scrollTop,n.first=W(),n.last=b(n.first))}function C(){const{items:t=[]}=e;return t.slice(i(d),i(g)).map(R)}function R(t,r){r+=i(d);const o=s(r*i(c));return a("div",{class:`${S}__item`,style:{top:o},key:r},[$(_,"default",{index:r,item:t})])}return M(()=>{n.last=b(0),P(()=>{const t=i(u);!t||V({el:t,name:"scroll",listener:y,wait:0})})}),()=>a("div",{class:S,style:i(m),ref:u},[a("div",{class:`${S}__container`,style:i(v)},[C()])])}});var Q=j(K,[["__scopeId","data-v-c1e759d4"]]);const Z=T(Q);const J=k({components:{ElDivider:G,VScroll:Z,PageWrapper:U},setup(){return{data:z}}}),O=E("\u57FA\u7840\u6EDA\u52A8\u793A\u4F8B"),X={class:"virtual-scroll-demo-wrap"},Y={class:"virtual-scroll-demo__item"},ee=E("\u5373\u4F7F\u4E0D\u53EF\u89C1\uFF0C\u4E5F\u9884\u5148\u52A0\u8F7D50\u6761\u6570\u636E\uFF0C\u9632\u6B62\u7A7A\u767D"),te={class:"virtual-scroll-demo-wrap"},ie={class:"virtual-scroll-demo__item"};function re(e,_,u,n,p,c){const d=x("el-divider"),g=x("VScroll"),v=x("PageWrapper");return L(),q(v,{title:"\u865A\u62DF\u6EDA\u52A8\u793A\u4F8B"},{default:h(()=>[a(d,null,{default:h(()=>[O]),_:1}),f("div",X,[a(g,{itemHeight:60,items:e.data,height:300},{default:h(({item:m})=>[f("div",Y,A(m.title),1)]),_:1},8,["items"])]),a(d,null,{default:h(()=>[ee]),_:1}),f("div",te,[a(g,{items:e.data,itemHeight:60,height:300,bench:50},{default:h(({item:m})=>[f("div",ie,A(m.title),1)]),_:1},8,["items"])])]),_:1})}var ge=j(J,[["render",re],["__scopeId","data-v-677b6744"]]);export{ge as default};
