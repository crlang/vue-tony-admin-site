import{u as d}from"./useContextMenu.76234cb3.js";import{C as m}from"./index.4cd5987a.js";import{_ as x,f}from"./index.b3c9ad7f.js";import{P as C}from"./index.2db0f4ce.js";import{u as _}from"./ex-pkg-element-plus.1726aa79.js";import{y as b,Z as a,z as j,G as k,H as t,R as s,P as c}from"./ex-pkg-@vue.dfd8e273.js";import"./index.755f7294.js";import"./tsxHelper.88158ea5.js";import"./index.cd4e42f7.js";import"./ex-pkg-@element-plus.3c8245e2.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./useTimeout.be9115ef.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const g=b({components:{ElButton:_,CollapseContainer:m,PageWrapper:C},setup(){const[e]=d(),{createMessage:n}=f();function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function l(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:i,handleMultipleContext:l}}}),h=c("Right Click on me"),w=c("Right Click on me");function v(e,n,i,l,o,M){const p=a("el-button"),r=a("CollapseContainer"),u=a("PageWrapper");return j(),k(u,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[s(r,{title:"Simple"},{default:t(()=>[s(p,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[h]),_:1},8,["onContextmenu"])]),_:1}),s(r,{title:"Multiple",class:"mt-4"},{default:t(()=>[s(p,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[w]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}var O=x(g,[["render",v]]);export{O as default};
