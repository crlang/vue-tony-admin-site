import{u as d}from"./useContextMenu.03189281.js";import{_ as m,ab as C,f as _}from"./index.c38c7de5.js";import{P as f}from"./index.14ff926d.js";import{x as b,aI as x,Y as s,z as h,Z as w,a3 as t,a0 as a,ab as u}from"./vendor.041d4bc7.js";import"./useMenuSetting.8bd75ac6.js";const M=b({components:{ElButton:x,CollapseContainer:C,PageWrapper:f},setup(){const[e]=d(),{createMessage:n}=_();function l(o){e({event:o,items:[{label:"New",icon:"bi:plus",handler:()=>{n.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{n.success("click open")}}]})}function i(o){e({event:o,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{n.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}return{handleContext:l,handleMultipleContext:i}}}),g=u("Right Click on me"),N=u("Right Click on me");function k(e,n,l,i,o,v){const c=s("el-button"),r=s("CollapseContainer"),p=s("PageWrapper");return h(),w(p,{title:"\u53F3\u952E\u83DC\u5355\u793A\u4F8B"},{default:t(()=>[a(r,{title:"Simple"},{default:t(()=>[a(c,{type:"primary",onContextmenu:e.handleContext},{default:t(()=>[g]),_:1},8,["onContextmenu"])]),_:1}),a(r,{title:"Multiple",class:"mt-4"},{default:t(()=>[a(c,{type:"primary",onContextmenu:e.handleMultipleContext},{default:t(()=>[N]),_:1},8,["onContextmenu"])]),_:1})]),_:1})}var W=m(M,[["render",k]]);export{W as default};
