import{_ as d,I as _,e as m,aZ as E,u as g,P as f}from"./index.a180eed7.js";import{x as C,a6 as L,c8 as v,a as h,y as x,X as t,z as B,A,$ as n,a2 as l,D as I,G as T}from"./vendor.5e678e09.js";const $=C({name:"ErrorAction",components:{ElTooltip:L,ElBadge:v,Icon:_},setup(){const{t:o}=m(),{push:r}=h(),e=E(),{prefixCls:s}=g("header-error-action"),a=x(()=>e.getErrorLogListCount);function c(){r(f.ERROR_LOG_PAGE).then(()=>{e.setErrorLogListCount(0)})}return{t:o,prefixCls:s,getCount:a,handleToErrorList:c}}});function k(o,r,e,s,a,c){const i=t("Icon"),u=t("ElBadge"),p=t("ElTooltip");return B(),A("div",{class:T(o.prefixCls)},[n(p,{content:o.t("layout.header.tooltipErrorLog"),placement:"bottom"},{default:l(()=>[n(u,{value:o.getCount,onClick:o.handleToErrorList,max:99},{default:l(()=>[I("span",null,[n(i,{icon:"ion:bug-outline"})])]),_:1},8,["value","onClick"])]),_:1},8,["content"])],2)}var G=d($,[["render",k]]);export{G as default};
