import{u as d}from"./useContextMenu.e86baaab.js";import{_ as m,aa as x,f}from"./index.16f9732e.js";import{P as C}from"./index.04776c9c.js";import{z as _}from"./ex-pkg-element-plus.e1a09009.js";import{y as b,Z as a,z as k,G as g,H as t,R as s,P as c}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const h=b({components:{ElButton:_,CollapseContainer:x,PageWrapper:C},setup(){const[e]=d(),{createMessage:n}=f();function l(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function p(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:l,handleMultipleContext:p}}}),j=c("Right Click on me"),w=c("Right Click on me");function v(e,n,l,p,o,M){const i=a("el-button"),r=a("CollapseContainer"),u=a("PageWrapper");return k(),g(u,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[s(r,{title:"Simple"},{default:t(()=>[s(i,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[j]),_:1},8,["onContextmenu"])]),_:1}),s(r,{title:"Multiple",class:"mt-4"},{default:t(()=>[s(i,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[w]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}var A=m(h,[["render",v]]);export{A as default};
