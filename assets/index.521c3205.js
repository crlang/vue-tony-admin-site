var _=(o,u,t)=>new Promise((d,i)=>{var p=e=>{try{s(t.next(e))}catch(a){i(a)}},r=e=>{try{s(t.throw(e))}catch(a){i(a)}},s=e=>e.done?d(e.value):Promise.resolve(e.value).then(p,r);s((t=t.apply(o,u)).next())});import B from"./CurrentPermissionMode.ac09c6ec.js";import{_ as k,d as C,y as F,df as A,dI as D,p as P,bi as b,c as g,by as h,ee as M,e as c,o as w,j as y,i as l,h as n,g as T,m}from"./index.b263d89e.js";import{E as $}from"./index.f856cdf3.js";import"./index.2866cdc9.js";const v=C({components:{ElButton:F,ElAlert:$,ElButtonGroup:A,CurrentPermissionMode:B},setup(){const{refreshMenu:o}=D(),u=P(),t=b(),d=g(()=>t.getProjectConfig.permissionMode===h.BACK);function i(p){return _(this,null,function*(){const r="fakeToken"+p;u.setToken(r),u.getUserInfoAction(),o()})}return{RoleEnum:M,refreshMenu:o,switchToken:i,isBackPremissionMode:d}}}),S={class:"mt-4"},N=m(" \u6743\u9650\u5207\u6362: "),V=m("\u83B7\u53D6\u7528\u6237id\u4E3A1\u7684\u83DC\u5355"),j=m("\u83B7\u53D6\u7528\u6237id\u4E3A2\u7684\u83DC\u5355");function x(o,u,t,d,i,p){const r=c("CurrentPermissionMode"),s=c("el-alert"),e=c("el-button"),a=c("el-button-group"),E=c("PageWrapper");return w(),y(E,{title:"\u540E\u53F0\u6743\u9650\u793A\u4F8B",contentBackground:"",description:"\u76EE\u524Dmock\u4E86\u4E24\u7EC4\u6570\u636E\uFF0C id\u4E3A1 \u548C 2 \u5177\u4F53\u8FD4\u56DE\u7684\u83DC\u5355\u53EF\u4EE5\u5728mock/sys/menu.ts\u5185\u67E5\u770B"},{default:l(()=>[n(r),n(s,{class:"mt-4",type:"info",title:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316","show-icon":""}),T("div",S,[N,n(a,null,{default:l(()=>[n(e,{onClick:u[0]||(u[0]=f=>o.switchToken(1)),disabled:!o.isBackPremissionMode},{default:l(()=>[V]),_:1},8,["disabled"]),n(e,{onClick:u[1]||(u[1]=f=>o.switchToken(2)),disabled:!o.isBackPremissionMode},{default:l(()=>[j]),_:1},8,["disabled"])]),_:1}),n(s,{class:"mt-4",type:"info",title:"\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u540E\u53F0\u6743\u9650\u6A21\u5F0F","show-icon":""})])]),_:1})}var R=k(v,[["render",x]]);export{R as default};
