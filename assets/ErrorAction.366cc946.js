import{_ as d,I as g,e as f,a$ as E,u as _,P as k}from"./index.16f9732e.js";import{bX as x}from"./ex-pkg-vendor.ab2d902e.js";import{d as L,am as j}from"./ex-pkg-element-plus.e1a09009.js";import{y as v,l as C,Z as r,z as b,A as h,R as s,H as i,K as B,L as T}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@popperjs.f3a17871.js";const y=v({name:"ErrorAction",components:{ElTooltip:L,ElBadge:j,Icon:g},setup(){const{t:e}=f(),{push:o}=x(),t=E(),{prefixCls:n}=_("header-error-action"),a=C(()=>t.getErrorLogListCount);function p(){o(k.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:e,prefixCls:n,getCount:a,handleToErrorList:p}}});function A(e,o,t,n,a,p){const c=r("Icon"),l=r("ElBadge"),u=r("ElTooltip");return b(),h("div",{class:T(e.prefixCls)},[s(u,{content:e.t("layout.header.tooltipErrorLog"),placement:"bottom"},{default:i(()=>[B("span",{onClick:o[0]||(o[0]=(...m)=>e.handleToErrorList&&e.handleToErrorList(...m))},[s(l,{value:e.getCount,max:99},{default:i(()=>[s(c,{icon:"ion:bug-outline"})]),_:1},8,["value"])])]),_:1},8,["content"])],2)}var V=d(y,[["render",A]]);export{V as default};
