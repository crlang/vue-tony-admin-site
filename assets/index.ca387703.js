var f=(o,s,u)=>new Promise((c,r)=>{var d=e=>{try{t(u.next(e))}catch(a){r(a)}},i=e=>{try{t(u.throw(e))}catch(a){r(a)}},t=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,i);t((u=u.apply(o,s)).next())});import E from"./CurrentPermissionMode.b5cfbca0.js";import{_ as B,ax as g,h as C,m as b,b1 as x,B as F}from"./index.ec0491db.js";import{P as j}from"./index.79d904a0.js";import{z as P,ai as A,a2 as D}from"./ex-pkg-element-plus.7627c250.js";import{y as M,l as h,Z as p,z as v,G as w,H as m,R as n,K as y,P as l}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-vendor.0d33d667.js";import"./ex-pkg-xlsx.9db082f2.js";import"./ex-pkg-mockjs.907334ba.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const T=M({components:{ElButton:P,ElAlert:A,ElButtonGroup:D,CurrentPermissionMode:E,PageWrapper:j},setup(){const{refreshMenu:o}=g(),s=C(),u=b(),c=h(()=>u.getProjectConfig.permissionMode===F.BACK);function r(d){return f(this,null,function*(){const i="fakeToken"+d;s.setToken(i),s.getUserInfoAction(),o()})}return{RoleEnum:x,refreshMenu:o,switchToken:r,isBackPremissionMode:c}}}),$={class:"mt-4"},S=l(" \u6743\u9650\u5207\u6362: "),N=l("\u83B7\u53D6\u7528\u6237id\u4E3A1\u7684\u83DC\u5355"),V=l("\u83B7\u53D6\u7528\u6237id\u4E3A2\u7684\u83DC\u5355");function W(o,s,u,c,r,d){const i=p("CurrentPermissionMode"),t=p("el-alert"),e=p("el-button"),a=p("el-button-group"),k=p("PageWrapper");return v(),w(k,{title:"\u540E\u53F0\u6743\u9650\u793A\u4F8B",contentBackground:"",description:"\u76EE\u524Dmock\u4E86\u4E24\u7EC4\u6570\u636E\uFF0C id\u4E3A1 \u548C 2 \u5177\u4F53\u8FD4\u56DE\u7684\u83DC\u5355\u53EF\u4EE5\u5728mock/sys/menu.ts\u5185\u67E5\u770B"},{default:m(()=>[n(i),n(t,{class:"mt-4",type:"info",title:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316","show-icon":""}),y("div",$,[S,n(a,null,{default:m(()=>[n(e,{onClick:s[0]||(s[0]=_=>o.switchToken(1)),disabled:!o.isBackPremissionMode},{default:m(()=>[N]),_:1},8,["disabled"]),n(e,{onClick:s[1]||(s[1]=_=>o.switchToken(2)),disabled:!o.isBackPremissionMode},{default:m(()=>[V]),_:1},8,["disabled"])]),_:1}),n(t,{class:"mt-4",type:"info",title:"\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u540E\u53F0\u6743\u9650\u6A21\u5F0F","show-icon":""})])]),_:1})}var X=B(T,[["render",W]]);export{X as default};
