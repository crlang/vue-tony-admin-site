import{D as c,G as y,S as _}from"./siteSetting.0be25c3f.js";import{_ as g,e as v,r as S,u as C,o as w}from"./index.c38c7de5.js";import{x as L,a as R,M as $,y as h,u as s,z as F,A as I,D as t,F as m,G as u,aa as b,bp as U,bq as k}from"./vendor.041d4bc7.js";import{a as D}from"./index.e706a9f5.js";import"./useWindowSizeFn.b4a2eb84.js";const j=L({name:"LayoutFooter",components:{},setup(){const{t:e}=v(),{getShowFooter:o}=S(),{currentRoute:d}=R(),{prefixCls:p}=C("layout-footer"),n=$(null),{setFooterHeight:a}=D();return{getShowLayoutFooter:h(()=>{var l,f;if(s(o)){const i=(l=s(n))==null?void 0:l.$el;a((i==null?void 0:i.offsetHeight)||0)}else a(0);return s(o)&&!((f=s(d).meta)==null?void 0:f.hiddenFooter)}),prefixCls:p,t:e,DOC_URL:c,GITHUB_URL:y,SITE_URL:_,openWindow:w,footerRef:n}}}),B=e=>(U("data-v-c83d3710"),e=e(),k(),e),G=B(()=>t("div",null,"Copyright \xA92022 Tony Admin",-1));function H(e,o,d,p,n,a){return e.getShowLayoutFooter?(F(),I("div",{key:0,class:u(e.prefixCls),ref:"footerRef"},[t("div",{class:u(`${e.prefixCls}__links`)},[t("a",{onClick:o[0]||(o[0]=r=>e.openWindow(e.SITE_URL))},m(e.t("layout.footer.onlinePreview")),1),t("a",{onClick:o[1]||(o[1]=r=>e.openWindow(e.GITHUB_URL)),class:u(`${e.prefixCls}__github`)},"Github",2),t("a",{onClick:o[2]||(o[2]=r=>e.openWindow(e.DOC_URL))},m(e.t("layout.footer.onlineDocument")),1)],2),G],2)):b("",!0)}var E=g(j,[["render",H],["__scopeId","data-v-c83d3710"]]);export{E as default};
