import{E as d,au as m,r as C,f as g,u as n,p as y,q as L,t as s,L as u,O as _}from"./vue-d691a816.js";import{D as R,G as c,S as $}from"./siteSetting-474b8bdf.js";import{f as F,y as v,b as w,_ as S}from"./index-795cdaa0.js";import{a as U}from"./index-1d31dc0e.js";import"./elementui-66980f2a.js";import"./useWindowSizeFn-f51aba85.js";const h=d({name:"LayoutFooter",components:{},setup(){const{getShowFooter:e}=F(),{currentRoute:o}=m(),{prefixCls:p}=w("layout-footer"),r=C(null),{setFooterHeight:a}=U();return{getShowLayoutFooter:g(()=>{var t,f;if(n(e)){const i=(t=n(r))==null?void 0:t.$el;a((i==null?void 0:i.offsetHeight)||0)}else a(0);return n(e)&&!((f=n(o).meta)!=null&&f.hiddenFooter)}),prefixCls:p,DOC_URL:R,GITHUB_URL:c,SITE_URL:$,openWindow:v,footerRef:r}}});const k=s("div",null,"Copyright ©2022 Tony Admin",-1);function B(e,o,p,r,a,l){return e.getShowLayoutFooter?(y(),L("div",{key:0,class:u(e.prefixCls),ref:"footerRef"},[s("div",{class:u(`${e.prefixCls}__links`)},[s("a",{onClick:o[0]||(o[0]=t=>e.openWindow(e.SITE_URL))},"在线预览"),s("a",{onClick:o[1]||(o[1]=t=>e.openWindow(e.GITHUB_URL)),class:u(`${e.prefixCls}__github`)},"Github",2),s("a",{onClick:o[2]||(o[2]=t=>e.openWindow(e.DOC_URL))},"在线文档")],2),k],2)):_("",!0)}const W=S(h,[["render",B]]);export{W as default};
