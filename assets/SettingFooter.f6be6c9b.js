import{_ as y,d as D,z as b,bJ as v,bx as k,p as E,bR as B,q as I,bi as M,e as g,o as A,f as R,h as o,i as r,n as $,l as w,b as S,bW as C,ex as x,ev as j,ew as N,et as P,eu as T,ey as W,eB as z,c$ as J,d0 as V,g as u}from"./index.61be89a1.js";import{u as q}from"./useCopyToClipboard.8f3e20aa.js";const G=D({name:"SettingFooter",components:{ElButton:b,SvgIcon:v},setup(){const e=k(),{prefixCls:l}=w("setting-footer"),{createSuccessModal:i,createMessage:n}=E(),p=B(),d=I(),t=M();function s(){const{isSuccessRef:a}=q(`...${JSON.stringify(S(t.getProjectConfig),null,2)}`);S(a)&&i({title:"\u64CD\u4F5C\u6210\u529F",content:"\u590D\u5236\u914D\u7F6E\u6210\u529F,\u8BF7\u5230 src/settings/projectSetting.ts \u4E2D\u7684 /* do something */ \u7C98\u8D34\u66FF\u6362\uFF01"})}function _(){try{t.setProjectConfig(C);const{colorWeak:a,grayMode:m,headerSetting:F,menuSetting:h}=C;x(!1),j(a),N(m),P(F.bgColor),T(h.bgColor),W(z),n.success("\u91CD\u7F6E\u6210\u529F\uFF01")}catch(a){n.error(a)}}function f(){localStorage.clear(),t.resetAllState(),e.resetState(),p.resetState(),d.resetState(),location.reload()}return{prefixCls:l,handleCopy:s,handleResetSetting:_,handleClearAndRedo:f}}}),c=e=>(J("data-v-916881c8"),e=e(),V(),e),H=c(()=>u("span",null,"\u62F7\u8D1D",-1)),O=c(()=>u("span",null,"\u91CD\u7F6E",-1)),U=c(()=>u("span",null,"\u6E05\u7A7A\u7F13\u5B58\u5E76\u8FD4\u56DE\u767B\u5F55\u9875",-1));function K(e,l,i,n,p,d){const t=g("SvgIcon"),s=g("ElButton");return A(),R("div",{class:$(e.prefixCls)},[o(s,{type:"primary",onClick:e.handleCopy},{default:r(()=>[o(t,{name:"copy",class:"mr-1"}),H]),_:1},8,["onClick"]),o(s,{type:"warning",onClick:e.handleResetSetting,class:"my-3"},{default:r(()=>[o(t,{name:"reload",class:"mr-1"}),O]),_:1},8,["onClick"]),o(s,{type:"danger",onClick:e.handleClearAndRedo},{default:r(()=>[o(t,{name:"poweroff",class:"mr-1"}),U]),_:1},8,["onClick"])],2)}var X=y(G,[["render",K],["__scopeId","data-v-916881c8"]]);export{X as default};
