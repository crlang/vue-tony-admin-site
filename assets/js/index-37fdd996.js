var _=(o,u,s)=>new Promise((d,r)=>{var p=e=>{try{t(s.next(e))}catch(a){r(a)}},i=e=>{try{t(s.throw(e))}catch(a){r(a)}},t=e=>e.done?d(e.value):Promise.resolve(e.value).then(p,i);t((s=s.apply(o,u)).next())});import k from"./CurrentPermissionMode-53e6bb6c.js";import{_ as B,am as C,d as F,g as b,ay as P,q as g}from"./index-26bedde3.js";import{P as A}from"./index-103ae9c6.js";import{u as D,ai as M,a1 as j}from"./ex-pkg-element-plus-f609432a.js";import{y as h,l as x,Z as c,z as v,G as w,H as m,R as n,K as y,P as l}from"./ex-pkg-@vue-feb543c0.js";import"./ex-pkg-vendor-bb3f8859.js";import"./ex-pkg-mockjs-ec7a233b.js";const T=h({components:{ElButton:D,ElAlert:M,ElButtonGroup:j,CurrentPermissionMode:k,PageWrapper:A},setup(){const{refreshMenu:o}=C(),u=F(),s=b(),d=x(()=>s.getProjectConfig.permissionMode===g.BACK);function r(p){return _(this,null,function*(){const i="fakeToken"+p;u.setToken(i),u.getUserInfoAction(),o()})}return{RoleEnum:P,refreshMenu:o,switchToken:r,isBackPremissionMode:d}}}),$={class:"mt-4"},S=l(" \u6743\u9650\u5207\u6362: "),N=l("\u83B7\u53D6\u7528\u6237id\u4E3A1\u7684\u83DC\u5355"),V=l("\u83B7\u53D6\u7528\u6237id\u4E3A2\u7684\u83DC\u5355");function W(o,u,s,d,r,p){const i=c("CurrentPermissionMode"),t=c("el-alert"),e=c("el-button"),a=c("el-button-group"),f=c("PageWrapper");return v(),w(f,{title:"\u540E\u53F0\u6743\u9650\u793A\u4F8B",contentBackground:"",description:"\u76EE\u524Dmock\u4E86\u4E24\u7EC4\u6570\u636E\uFF0C id\u4E3A1 \u548C 2 \u5177\u4F53\u8FD4\u56DE\u7684\u83DC\u5355\u53EF\u4EE5\u5728mock/sys/menu.ts\u5185\u67E5\u770B"},{default:m(()=>[n(i),n(t,{class:"mt-4",type:"info",title:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316","show-icon":""}),y("div",$,[S,n(a,null,{default:m(()=>[n(e,{onClick:u[0]||(u[0]=E=>o.switchToken(1)),disabled:!o.isBackPremissionMode},{default:m(()=>[N]),_:1},8,["disabled"]),n(e,{onClick:u[1]||(u[1]=E=>o.switchToken(2)),disabled:!o.isBackPremissionMode},{default:m(()=>[V]),_:1},8,["disabled"])]),_:1}),n(t,{class:"mt-4",type:"info",title:"\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u540E\u53F0\u6743\u9650\u6A21\u5F0F","show-icon":""})])]),_:1})}var Z=B(T,[["render",W]]);export{Z as default};
