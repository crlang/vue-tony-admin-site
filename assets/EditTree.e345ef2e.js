import{t as _}from"./data.9d8655ec.js";import{P as f}from"./index.2db0f4ce.js";import{u as g}from"./useContextMenu.76234cb3.js";import{_ as x}from"./index.b3c9ad7f.js";import{W as C,ao as E,y as j,z as b}from"./ex-pkg-element-plus.1726aa79.js";import{Z as k,P as B}from"./ex-pkg-@element-plus.3c8245e2.js";import{y as v,Z as r,z as F,G as M,H as u,R as n}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const D=v({components:{ElCard:C,ElTree:E,ElRow:j,ElCol:b,PageWrapper:f},setup(){const[a]=g();function i(e,o,t){console.log("click send",e,o,t)}function d(e,o,t,s){var c;console.log(e,o,t,s);const l={event:e,items:[{label:"\u65B0\u589E",handler:()=>{console.table("\u70B9\u51FB\u4E86\u65B0\u589E",t)},icon:"bi:plus"},{label:"\u5220\u9664",handler:()=>{console.table("\u70B9\u51FB\u4E86\u5220\u9664",t)},icon:"bx:bxs-folder-open"}]};!((c=l.items)==null?void 0:c.length)||a(l)}function m(e,{node:o,data:t,store:s}){return e("div",{class:"demo-tree-action"},e("span",null,o.label),e("div",null,e(k,{class:"mr-2",onClick:()=>i(o,t,s)}),e(B,{class:"mr-2"})))}return{treeData:_,actionList:m,getRightMenuList:d}}});function h(a,i,d,m,e,o){const t=r("el-tree"),s=r("el-card"),p=r("el-col"),l=r("el-row"),c=r("PageWrapper");return F(),M(c,{title:"Tree \u64CD\u4F5C\u793A\u4F8B"},{default:u(()=>[n(l,{gutter:16},{default:u(()=>[n(p,{span:12},{default:u(()=>[n(s,{header:"\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE/\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:u(()=>[n(t,{data:a.treeData,"render-content":a.actionList},null,8,["data","render-content"])]),_:1})]),_:1}),n(p,{span:12},{default:u(()=>[n(s,{header:"\u53F3\u952E\u83DC\u5355"},{default:u(()=>[n(t,{data:a.treeData,onNodeContextmenu:a.getRightMenuList},null,8,["data","onNodeContextmenu"])]),_:1})]),_:1})]),_:1})]),_:1})}var Z=x(D,[["render",h]]);export{Z as default};
