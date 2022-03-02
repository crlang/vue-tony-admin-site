import R from"./CurrentPermissionMode.6e803296.js";import{_ as T,ax as v,h as g,a$ as F}from"./index.a180eed7.js";import{A as M}from"./index.1751195c.js";import{P as N}from"./index.2f4e0ba4.js";import{x as P,aI as S,aX as I,bA as k,c0 as $,y as A,X as n,bd as b,z as a,Y as l,a2 as e,$ as t,D as p,F as c,aa as s,a9 as _,B as D}from"./vendor.5e678e09.js";const j=P({components:{ElButton:S,ElDivider:I,ElButtonGroup:k,ElAlert:$,PageWrapper:N,CurrentPermissionMode:R,Authority:M},setup(){const{changeRole:u,hasPermission:i}=v(),r=g();return{userStore:r,RoleEnum:F,isAdmin:A(()=>r.getRoleList.includes(F.ADMIN)),isTest:A(()=>r.getRoleList.includes(F.TEST)),changeRole:u,hasPermission:i}}}),V=s("\u5F53\u524D\u89D2\u8272: "),w={class:"mt-4"},L=s(" \u6743\u9650\u5207\u6362(\u8BF7\u5148\u5207\u6362\u6743\u9650\u6A21\u5F0F\u4E3A\u524D\u7AEF\u89D2\u8272\u6743\u9650\u6A21\u5F0F): "),W=s("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u6709\u9700\u8981\u53EF\u4EE5\u81EA\u884C\u5168\u5C40\u6CE8\u518C)"),X=s("\u62E5\u6709admin\u89D2\u8272\u6743\u9650\u53EF\u89C1"),z=s("\u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1"),G=s("\u62E5\u6709[test,admin]\u89D2\u8272\u6743\u9650\u53EF\u89C1"),U=s("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u9002\u7528\u4E8E\u51FD\u6570\u5185\u90E8\u8FC7\u6EE4)"),Y=s("\u62E5\u6709admin\u89D2\u8272\u6743\u9650\u53EF\u89C1"),q=s("\u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1"),H=s(" \u62E5\u6709[test,admin]\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),J=s("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)"),K=s("\u62E5\u6709admin\u89D2\u8272\u6743\u9650\u53EF\u89C1"),O=s("\u62E5\u6709test\u89D2\u8272\u6743\u9650\u53EF\u89C1"),Q=s(" \u62E5\u6709[test,admin]\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");function Z(u,i,r,x,uu,eu){const f=n("CurrentPermissionMode"),C=n("el-alert"),o=n("el-button"),h=n("el-button-group"),E=n("el-divider"),d=n("Authority"),y=n("PageWrapper"),m=b("auth");return a(),l(y,{title:"\u524D\u7AEF\u6743\u9650\u6309\u94AE\u793A\u4F8B",contentBackground:"",description:"\u7531\u4E8E\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8BF7\u6C42\u7528\u6237\u4FE1\u606F\u63A5\u53E3\uFF0C\u4F1A\u6839\u636E\u63A5\u53E3\u91CD\u7F6E\u89D2\u8272\u4FE1\u606F\uFF0C\u6240\u4EE5\u5237\u65B0\u540E\u754C\u9762\u4F1A\u6062\u590D\u539F\u6837\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u6CE8\u91CA src/layout/default/index\u5185\u7684\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u63A5\u53E3"},{default:e(()=>[t(f),p("p",null,[V,p("span",null,c(u.userStore.getRoleList),1)]),t(C,{class:"mt-4",type:"info",title:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316","show-icon":""}),p("div",w,[L,t(h,null,{default:e(()=>[t(o,{onClick:i[0]||(i[0]=B=>u.changeRole(u.RoleEnum.ADMIN)),type:u.isAdmin?"primary":"default"},{default:e(()=>[s(c(u.RoleEnum.ADMIN),1)]),_:1},8,["type"]),t(o,{onClick:i[1]||(i[1]=B=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:e(()=>[s(c(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),t(E,null,{default:e(()=>[W]),_:1}),t(d,{value:u.RoleEnum.ADMIN},{default:e(()=>[t(o,{type:"primary",class:"mx-4"},{default:e(()=>[X]),_:1})]),_:1},8,["value"]),t(d,{value:u.RoleEnum.TEST},{default:e(()=>[t(o,{type:"success",class:"mx-4"},{default:e(()=>[z]),_:1})]),_:1},8,["value"]),t(d,{value:[u.RoleEnum.TEST,u.RoleEnum.ADMIN]},{default:e(()=>[t(o,{type:"danger",class:"mx-4"},{default:e(()=>[G]),_:1})]),_:1},8,["value"]),t(E,null,{default:e(()=>[U]),_:1}),u.hasPermission(u.RoleEnum.ADMIN)?(a(),l(o,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[Y]),_:1})):_("",!0),u.hasPermission(u.RoleEnum.TEST)?(a(),l(o,{key:1,type:"success",class:"mx-4"},{default:e(()=>[q]),_:1})):_("",!0),u.hasPermission([u.RoleEnum.TEST,u.RoleEnum.ADMIN])?(a(),l(o,{key:2,type:"danger",class:"mx-4"},{default:e(()=>[H]),_:1})):_("",!0),t(E,null,{default:e(()=>[J]),_:1}),D((a(),l(o,{type:"primary",class:"mx-4"},{default:e(()=>[K]),_:1})),[[m,u.RoleEnum.ADMIN]]),D((a(),l(o,{type:"success",class:"mx-4"},{default:e(()=>[O]),_:1})),[[m,u.RoleEnum.TEST]]),D((a(),l(o,{type:"danger",class:"mx-4"},{default:e(()=>[Q]),_:1})),[[m,[u.RoleEnum.TEST,u.RoleEnum.ADMIN]]])]),_:1})}var lu=T(j,[["render",Z]]);export{lu as default};
