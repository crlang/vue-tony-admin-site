import{t as _}from"./data.9d8655ec.js";import{P as f}from"./index.79d904a0.js";import{u as g}from"./useContextMenu.832db946.js";import{_ as x}from"./index.ec0491db.js";import{X as C,ao as j,D as E,F as k}from"./ex-pkg-element-plus.7627c250.js";import{a0 as b,R as B}from"./ex-pkg-@element-plus.e8ce6c8b.js";import{y as F,Z as u,z as v,G as D,H as r,R as n}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-vendor.0d33d667.js";import"./ex-pkg-xlsx.9db082f2.js";import"./ex-pkg-mockjs.907334ba.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const M=F({components:{ElCard:C,ElTree:j,ElRow:E,ElCol:k,PageWrapper:f},setup(){const[s]=g();function i(e,o,t){console.log("click send",e,o,t)}function d(e,o,t,a){var c;console.log(e,o,t,a);const l={event:e,items:[{label:"\u65B0\u589E",handler:()=>{console.log("\u70B9\u51FB\u4E86\u65B0\u589E",t)},icon:"bi:plus"},{label:"\u5220\u9664",handler:()=>{console.log("\u70B9\u51FB\u4E86\u5220\u9664",t)},icon:"bx:bxs-folder-open"}]};!((c=l.items)==null?void 0:c.length)||s(l)}function m(e,{node:o,data:t,store:a}){return e("div",{class:"demo-tree-action"},e("span",null,o.label),e("div",null,e(b,{class:"mr-2",onClick:()=>i(o,t,a)}),e(B,{class:"mr-2"})))}return{treeData:_,actionList:m,getRightMenuList:d}}});function h(s,i,d,m,e,o){const t=u("el-tree"),a=u("el-card"),p=u("el-col"),l=u("el-row"),c=u("PageWrapper");return v(),D(c,{title:"Tree \u64CD\u4F5C\u793A\u4F8B"},{default:r(()=>[n(l,{gutter:16},{default:r(()=>[n(p,{span:12},{default:r(()=>[n(a,{header:"\u53F3\u4FA7\u64CD\u4F5C\u6309\u94AE/\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:r(()=>[n(t,{data:s.treeData,"render-content":s.actionList},null,8,["data","render-content"])]),_:1})]),_:1}),n(p,{span:12},{default:r(()=>[n(a,{header:"\u53F3\u952E\u83DC\u5355"},{default:r(()=>[n(t,{data:s.treeData,onNodeContextmenu:s.getRightMenuList},null,8,["data","onNodeContextmenu"])]),_:1})]),_:1})]),_:1})]),_:1})}var H=x(M,[["render",h]]);export{H as default};
