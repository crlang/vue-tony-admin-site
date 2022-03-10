import{u as m,_ as v,w as R}from"./index.b7d256c2.js";import{x as y,z as o,A as s,a3 as r,a7 as W,D as C,G as n,M as c,y as d,X as D,F as k,a9 as f,Y as b,a2 as F}from"./vendor.1ced56aa.js";const j=y({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=m("page-footer");return{prefixCls:e}}});function z(e,t,g,u,p,$){return o(),s("div",{class:n(e.prefixCls)},[e.$slots.default?r(e.$slots,"default",{key:0}):(o(),s(W,{key:1},[C("div",{class:n(`${e.prefixCls}__left`)},[r(e.$slots,"left")],2),C("div",{class:n(`${e.prefixCls}__right`)},[r(e.$slots,"right")],2)],64))],2)}var A=v(j,[["render",z]]);const N=y({name:"PageWrapper",components:{PageFooter:A},props:{title:String,description:String,headerFullHeight:Boolean,headerFixed:Boolean,contentFullHeight:Boolean,contentClass:String,contentBackground:Boolean},setup(e,{slots:t,attrs:g}){const u=c(null),p=c(null),$=c(null),h=c(null),{prefixCls:a}=m("page-wrapper"),_=d(()=>{var i;const{contentFullHeight:l}=e;return[a,(i=g.class)!=null?i:{},{[`${a}__full`]:l}]}),P=d(()=>(e==null?void 0:e.title)||(e==null?void 0:e.description)||(t==null?void 0:t.title)||(t==null?void 0:t.description)||(t==null?void 0:t.extra)),w=d(()=>(t==null?void 0:t.leftFooter)||(t==null?void 0:t.rightFooter)||(t==null?void 0:t.footer)),B=d(()=>{const{headerFullHeight:l,headerFixed:i}=e;return[`${a}-header`,{[`${a}-header-full`]:l,[`${a}-header-fixed`]:i}]}),H=d(()=>{const{contentBackground:l,contentFullHeight:i,contentClass:S}=e;return[`${a}-content`,S,{[`${a}-content-bg`]:l,[`${a}-content-full`]:i}]});return{prefixCls:a,wrapperRef:u,headerRef:p,contentRef:$,footerRef:h,getClass:_,getShowheader:P,getShowFooter:w,getHeaderClass:B,getContentClass:H}}});function V(e,t,g,u,p,$){const h=D("PageFooter");return o(),s("div",{class:n(e.getClass),ref:"wrapperRef"},[e.getShowheader?(o(),s("div",{key:0,ref:"headerRef",class:n(e.getHeaderClass)},[e.$slots.title?r(e.$slots,"title",{key:0}):e.title?(o(),s("div",{key:1,class:n(`${e.prefixCls}-header__title`)},k(e.title),3)):f("",!0),e.$slots.description?r(e.$slots,"description",{key:2}):e.description?(o(),s("div",{key:3,class:n(`${e.prefixCls}-header__description`)},k(e.description),3)):f("",!0),e.$slots.extra?r(e.$slots,"extra",{key:4}):f("",!0)],2)):f("",!0),C("div",{class:n(e.getContentClass),ref:"contentRef"},[r(e.$slots,"default")],2),e.getShowFooter?(o(),b(h,{key:1,ref:"footerRef"},{left:F(()=>[r(e.$slots,"leftFooter")]),default:F(()=>[r(e.$slots,"footer")]),right:F(()=>[r(e.$slots,"rightFooter")]),_:3},512)):f("",!0)],2)}var E=v(N,[["render",V]]);const K=R(E),M="PageWrapperFixedHeight";export{K as P,M as a};
