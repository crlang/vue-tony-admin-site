import{_ as S,x as F,u as h,c as y,h as k,d as D,g as E,W as m,aG as R,aH as j}from"./index-26bedde3.js";import{u as x}from"./useCopyToClipboard-6f8ca492.js";import{u as b}from"./ex-pkg-element-plus-f609432a.js";import{dm as v,dn as B,d3 as A}from"./ex-pkg-vendor-bb3f8859.js";import{y as M,Z as r,z as L,A as P,R as t,H as i,L as T,u as C,P as p}from"./ex-pkg-@vue-feb543c0.js";import"./ex-pkg-mockjs-ec7a233b.js";const $=M({name:"SettingFooter",components:{ElButton:b,CopyDocument:v,RefreshLeft:B,Refresh:A},setup(){const e=F(),{prefixCls:l}=h("setting-footer"),{createSuccessModal:d,createMessage:a}=y(),f=k(),_=D(),o=E();function s(){const{isSuccessRef:n}=x(JSON.stringify(C(o.getProjectConfig),null,2));C(n)&&d({title:"\u64CD\u4F5C\u6210\u529F",content:"\u590D\u5236\u6210\u529F,\u8BF7\u5230 src/settings/projectSetting.ts \u4E2D\u4FEE\u6539\u914D\u7F6E\uFF01"})}function u(){try{o.setProjectConfig(m);const{colorWeak:n,grayMode:g}=m;R(n),j(g),a.success("\u91CD\u7F6E\u6210\u529F\uFF01")}catch(n){a.error(n)}}function c(){localStorage.clear(),o.resetAllState(),e.resetState(),f.resetState(),_.resetState(),location.reload()}return{prefixCls:l,handleCopy:s,handleResetSetting:u,handleClearAndRedo:c}}}),N=p(" \u62F7\u8D1D "),W=p(" \u91CD\u7F6E "),w=p(" \u6E05\u7A7A\u7F13\u5B58\u5E76\u8FD4\u56DE\u767B\u5F55\u9875 ");function z(e,l,d,a,f,_){const o=r("CopyDocument"),s=r("ElButton"),u=r("RefreshLeft"),c=r("Refresh");return L(),P("div",{class:T(e.prefixCls)},[t(s,{type:"primary",onClick:e.handleCopy},{default:i(()=>[t(o),N]),_:1},8,["onClick"]),t(s,{type:"warning",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[t(u),W]),_:1},8,["onClick"]),t(s,{type:"danger",onClick:e.handleClearAndRedo},{default:i(()=>[t(c),w]),_:1},8,["onClick"])],2)}var U=S($,[["render",z],["__scopeId","data-v-59d1e4d2"]]);export{U as default};
