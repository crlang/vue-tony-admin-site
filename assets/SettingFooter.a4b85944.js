import{_ as h,F as R,u as k,e as v,f as b,q as B,h as F,m as M,aV as A,a4 as C,b8 as D,b9 as E}from"./index.c38c7de5.js";import{x as T,aI as j,cE as x,cF as $,c4 as I,Y as a,z as L,A as N,a0 as o,a3 as u,ab as p,F as d,G as P,u as y}from"./vendor.041d4bc7.js";const V=T({name:"SettingFooter",components:{ElButton:j,CopyDocument:x,RefreshLeft:$,Refresh:I},setup(){const e=R(),{prefixCls:f}=k("setting-footer"),{t:s}=v(),{createSuccessModal:g,createMessage:r}=b(),m=B(),c=F(),t=M();function l(){const{isSuccessRef:n}=A(JSON.stringify(y(t.getProjectConfig),null,2));y(n)&&g({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function i(){try{t.setProjectConfig(C);const{colorWeak:n,grayMode:S}=C;D(n),E(S),r.success(s("layout.setting.resetSuccess"))}catch(n){r.error(n)}}function _(){localStorage.clear(),t.resetAllState(),e.resetState(),m.resetState(),c.resetState(),location.reload()}return{prefixCls:f,t:s,handleCopy:l,handleResetSetting:i,handleClearAndRedo:_}}});function w(e,f,s,g,r,m){const c=a("CopyDocument"),t=a("ElButton"),l=a("RefreshLeft"),i=a("Refresh");return L(),N("div",{class:P(e.prefixCls)},[o(t,{type:"primary",onClick:e.handleCopy},{default:u(()=>[o(c),p(" "+d(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{type:"warning",onClick:e.handleResetSetting,class:"my-3"},{default:u(()=>[o(l),p(" "+d(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{type:"danger",onClick:e.handleClearAndRedo},{default:u(()=>[o(i),p(" "+d(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var W=h(V,[["render",w],["__scopeId","data-v-53d89358"]]);export{W as default};
