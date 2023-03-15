import T from"./CurrentPermissionMode.a13f8e7e.js";import{_ as v,d as g,z as h,fy as N,fR as S,q as M,gk as d,c as A,e as n,bO as k,o as l,k as a,i as e,h as s,g as p,j as t,t as D,l as c,v as f}from"./index.a812ffa9.js";import{A as P}from"./index.b4755a7c.js";import{E as I}from"./index.6808290a.js";import{E as $}from"./index.4ba8cdc9.js";import"./tsxHelper.25cd2f92.js";const b=g({components:{ElButton:h,ElDivider:I,ElButtonGroup:N,ElAlert:$,CurrentPermissionMode:T,Authority:P},setup(){const{changeRole:u,hasPermission:E}=S(),r=M();return{userStore:r,RoleEnum:d,isAdmin:A(()=>r.getRoleList.includes(d.ADMIN)),isTest:A(()=>r.getRoleList.includes(d.TEST)),changeRole:u,hasPermission:E}}}),V={class:"mt-4"};function w(u,E,r,L,W,j){const C=n("CurrentPermissionMode"),y=n("el-alert"),o=n("el-button"),B=n("el-button-group"),i=n("el-divider"),m=n("Authority"),R=n("PageWrapper"),F=k("auth");return l(),a(R,{title:"\u524D\u7AEF\u6743\u9650\u6309\u94AE\u793A\u4F8B",contentBackground:"",description:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:e(()=>[s(C),p("p",null,[t(" \u5F53\u524D\u89D2\u8272: "),p("span",null,D(u.userStore.getRoleList),1)]),s(y,{class:"mt-4",type:"info",title:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316","show-icon":""}),p("div",V,[t(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): "),s(B,null,{default:e(()=>[s(o,{onClick:E[0]||(E[0]=_=>u.changeRole(u.RoleEnum.ADMIN)),type:u.isAdmin?"primary":"default"},{default:e(()=>[t(D(u.RoleEnum.ADMIN),1)]),_:1},8,["type"]),s(o,{onClick:E[1]||(E[1]=_=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:e(()=>[t(D(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),s(i,null,{default:e(()=>[t("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u6709\u9700\u8981\u53EF\u4EE5\u81EA\u884C\u5168\u5C40\u6CE8\u518C)")]),_:1}),s(m,{value:u.RoleEnum.ADMIN},{default:e(()=>[s(o,{type:"primary",class:"mx-4"},{default:e(()=>[t("\u62E5\u6709admin\u89D2\u8272\u6743\u9650\u53EF\u89C1")]),_:1})]),_:1},8,["value"]),s(m,{value:u.RoleEnum.TEST},{default:e(()=>[s(o,{type:"success",class:"mx-4"},{default:e(()=>[t("\u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1")]),_:1})]),_:1},8,["value"]),s(m,{value:[u.RoleEnum.TEST,u.RoleEnum.ADMIN]},{default:e(()=>[s(o,{type:"danger",class:"mx-4"},{default:e(()=>[t("\u62E5\u6709[test,admin]\u89D2\u8272\u6743\u9650\u53EF\u89C1")]),_:1})]),_:1},8,["value"]),s(i,null,{default:e(()=>[t("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u9002\u7528\u4E8E\u51FD\u6570\u5185\u90E8\u8FC7\u6EE4)")]),_:1}),u.hasPermission(u.RoleEnum.ADMIN)?(l(),a(o,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[t("\u62E5\u6709admin\u89D2\u8272\u6743\u9650\u53EF\u89C1")]),_:1})):c("",!0),u.hasPermission(u.RoleEnum.TEST)?(l(),a(o,{key:1,type:"success",class:"mx-4"},{default:e(()=>[t("\u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1")]),_:1})):c("",!0),u.hasPermission([u.RoleEnum.TEST,u.RoleEnum.ADMIN])?(l(),a(o,{key:2,type:"danger",class:"mx-4"},{default:e(()=>[t("\u62E5\u6709[test,admin]\u89D2\u8272\u6743\u9650\u53EF\u89C1")]),_:1})):c("",!0),s(i,null,{default:e(()=>[t("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)")]),_:1}),f((l(),a(o,{type:"primary",class:"mx-4"},{default:e(()=>[t("\u62E5\u6709admin\u89D2\u8272\u6743\u9650\u53EF\u89C1")]),_:1})),[[F,u.RoleEnum.ADMIN]]),f((l(),a(o,{type:"success",class:"mx-4"},{default:e(()=>[t("\u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1")]),_:1})),[[F,u.RoleEnum.TEST]]),f((l(),a(o,{type:"danger",class:"mx-4"},{default:e(()=>[t("\u62E5\u6709[test,admin]\u89D2\u8272\u6743\u9650\u53EF\u89C1")]),_:1})),[[F,[u.RoleEnum.TEST,u.RoleEnum.ADMIN]]])]),_:1})}const J=v(b,[["render",w]]);export{J as default};
