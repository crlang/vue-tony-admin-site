import{D as c,G as g,S as y}from"./siteSetting.0be25c3f.js";import{_ as b,e as k,q as v,u as j,o as _}from"./index.16f9732e.js";import{bX as S}from"./ex-pkg-vendor.ab2d902e.js";import{a as C}from"./index.acc9f221.js";import{y as L,a as w,l as R,u as t,z as $,A as h,K as s,Q as m,L as p,O as x,b5 as I,b4 as F}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-element-plus.e1a09009.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./useWindowSizeFn.732207ab.js";import"./propTypes.6bd760c6.js";const U=L({name:"LayoutFooter",components:{},setup(){const{t:e}=k(),{getShowFooter:o}=v(),{currentRoute:u}=S(),{prefixCls:d}=j("layout-footer"),n=w(null),{setFooterHeight:r}=C();return{getShowLayoutFooter:R(()=>{var l,f;if(t(o)){const a=(l=t(n))==null?void 0:l.$el;r((a==null?void 0:a.offsetHeight)||0)}else r(0);return t(o)&&!((f=t(u).meta)==null?void 0:f.hiddenFooter)}),prefixCls:d,t:e,DOC_URL:c,GITHUB_URL:g,SITE_URL:y,openWindow:_,footerRef:n}}}),D=e=>(I("data-v-54b37d8b"),e=e(),F(),e),T=D(()=>s("div",null,"Copyright \xA92022 Tony Admin",-1));function B(e,o,u,d,n,r){return e.getShowLayoutFooter?($(),h("div",{key:0,class:p(e.prefixCls),ref:"footerRef"},[s("div",{class:p(`${e.prefixCls}__links`)},[s("a",{onClick:o[0]||(o[0]=i=>e.openWindow(e.SITE_URL))},m(e.t("layout.footer.onlinePreview")),1),s("a",{onClick:o[1]||(o[1]=i=>e.openWindow(e.GITHUB_URL)),class:p(`${e.prefixCls}__github`)},"Github",2),s("a",{onClick:o[2]||(o[2]=i=>e.openWindow(e.DOC_URL))},m(e.t("layout.footer.onlineDocument")),1)],2),T],2)):x("",!0)}var X=b(U,[["render",B],["__scopeId","data-v-54b37d8b"]]);export{X as default};
