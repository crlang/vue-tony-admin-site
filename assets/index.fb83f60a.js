import{C as _}from"./index.d6eee18e.js";import{_ as f,d as g,y as C,r as h,bU as m,e as s,o as k,j as F,i as t,h as o,m as n,t as w,g as y}from"./index.b263d89e.js";import"./index.a77e9094.js";import"./tsxHelper.c64d0d27.js";import"./index.b8d50620.js";import"./index.ee4e75a5.js";import"./index.2540fdd7.js";const S=g({components:{ElButton:C,CollapseContainer:_},setup(){const e=h(null),{enter:r,toggle:a,exit:i,isFullscreen:c}=m(),{toggle:u}=m(e);return{enter:r,toggleDom:u,toggle:a,isFullscreen:c,exit:i,domRef:e}}}),D=n("Enter Window Full Screen"),b=n("Toggle Window Full Screen"),x=n("Exit Window Full Screen"),W=n("Enter Dom Full Screen"),B={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},E=n("Exit Dom Full Screen");function $(e,r,a,i,c,u){const l=s("el-button"),d=s("CollapseContainer"),p=s("PageWrapper");return k(),F(p,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:t(()=>[o(d,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:t(()=>[o(l,{type:"primary",onClick:e.enter,class:"mr-2"},{default:t(()=>[D]),_:1},8,["onClick"]),o(l,{type:"success",onClick:e.toggle,class:"mr-2"},{default:t(()=>[b]),_:1},8,["onClick"]),o(l,{type:"danger",onClick:e.exit,class:"mr-2"},{default:t(()=>[x]),_:1},8,["onClick"]),n(" Current State: "+w(e.isFullscreen),1)]),_:1}),o(d,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:t(()=>[o(l,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:t(()=>[W]),_:1},8,["onClick"])]),_:1}),y("div",B,[o(l,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:t(()=>[E]),_:1},8,["onClick"])],512)]),_:1})}var A=f(S,[["render",$]]);export{A as default};
