import T from"./CurrentPermissionMode-2e70d45e.js";import{a0 as v,g,ah as p,_ as h}from"./index-795cdaa0.js";import{A as N}from"./index-9a34082b.js";import{n as S,ap as M,N as I,aJ as P}from"./elementui-66980f2a.js";import{E as k,f,ac as n,ap as b,p as a,I as l,J as e,S as s,t as F,P as t,Q as c,O as D,K as A}from"./vue-d691a816.js";import"./tsxHelper-f44f22cd.js";const $=k({components:{ElButton:S,ElDivider:M,ElButtonGroup:I,ElAlert:P,CurrentPermissionMode:T,Authority:N},setup(){const{changeRole:u,hasPermission:E}=v(),r=g();return{userStore:r,RoleEnum:p,isAdmin:f(()=>r.getRoleList.includes(p.ADMIN)),isTest:f(()=>r.getRoleList.includes(p.TEST)),changeRole:u,hasPermission:E}}});const V={class:"mt-4"};function w(u,E,r,L,J,W){const C=n("CurrentPermissionMode"),_=n("el-alert"),o=n("el-button"),y=n("el-button-group"),i=n("el-divider"),m=n("Authority"),B=n("PageWrapper"),d=b("auth");return a(),l(B,{title:"前端权限按钮示例",contentBackground:"",description:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:e(()=>[s(C),F("p",null,[t(" 当前角色: "),F("span",null,c(u.userStore.getRoleList),1)]),s(_,{class:"mt-4",type:"info",title:"点击后请查看按钮变化","show-icon":""}),F("div",V,[t(" 权限切换(请先切换权限模式为前端角色权限模式): "),s(y,null,{default:e(()=>[s(o,{onClick:E[0]||(E[0]=R=>u.changeRole(u.RoleEnum.ADMIN)),type:u.isAdmin?"primary":"default"},{default:e(()=>[t(c(u.RoleEnum.ADMIN),1)]),_:1},8,["type"]),s(o,{onClick:E[1]||(E[1]=R=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:e(()=>[t(c(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),s(i,null,{default:e(()=>[t("组件方式判断权限(有需要可以自行全局注册)")]),_:1}),s(m,{value:u.RoleEnum.ADMIN},{default:e(()=>[s(o,{type:"primary",class:"mx-4"},{default:e(()=>[t("拥有admin角色权限可见")]),_:1})]),_:1},8,["value"]),s(m,{value:u.RoleEnum.TEST},{default:e(()=>[s(o,{type:"success",class:"mx-4"},{default:e(()=>[t("拥有test角色权限可见")]),_:1})]),_:1},8,["value"]),s(m,{value:[u.RoleEnum.TEST,u.RoleEnum.ADMIN]},{default:e(()=>[s(o,{type:"danger",class:"mx-4"},{default:e(()=>[t("拥有[test,admin]角色权限可见")]),_:1})]),_:1},8,["value"]),s(i,null,{default:e(()=>[t("函数方式方式判断权限(适用于函数内部过滤)")]),_:1}),u.hasPermission(u.RoleEnum.ADMIN)?(a(),l(o,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[t("拥有admin角色权限可见")]),_:1})):D("",!0),u.hasPermission(u.RoleEnum.TEST)?(a(),l(o,{key:1,type:"success",class:"mx-4"},{default:e(()=>[t("拥有test角色权限可见")]),_:1})):D("",!0),u.hasPermission([u.RoleEnum.TEST,u.RoleEnum.ADMIN])?(a(),l(o,{key:2,type:"danger",class:"mx-4"},{default:e(()=>[t("拥有[test,admin]角色权限可见")]),_:1})):D("",!0),s(i,null,{default:e(()=>[t("指令方式方式判断权限(该方式不能动态修改权限.)")]),_:1}),A((a(),l(o,{type:"primary",class:"mx-4"},{default:e(()=>[t("拥有admin角色权限可见")]),_:1})),[[d,u.RoleEnum.ADMIN]]),A((a(),l(o,{type:"success",class:"mx-4"},{default:e(()=>[t("拥有test角色权限可见")]),_:1})),[[d,u.RoleEnum.TEST]]),A((a(),l(o,{type:"danger",class:"mx-4"},{default:e(()=>[t("拥有[test,admin]角色权限可见")]),_:1})),[[d,[u.RoleEnum.TEST,u.RoleEnum.ADMIN]]])]),_:1})}const q=h($,[["render",w],["__scopeId","data-v-60bd5461"]]);export{q as default};
