import{B as _}from"./BasicTable-0f3386bf.js";import{y as B,a as l,Z as u,z as k,G as h,H as o,R as s,P as a,Q as b,u as y}from"./ex-pkg-@vue-6f720869.js";import{P as A}from"./index-46033b04.js";import{g as v}from"./data-4cf2bd84.js";import{d as x}from"./table-5b41b9cd.js";import{_ as F}from"./index-8e69729b.js";import{x as T,am as E}from"./ex-pkg-element-plus-6a2cfc13.js";import"./BasicForm-4389fd93.js";import"./index-bcceac7a.js";import"./ex-pkg-vendor-69b4619e.js";import"./ex-pkg-mockjs-abb76a9d.js";import"./index-3ab93494.js";import"./index-29499780.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-414339e6.js";import"./index-9b3b57b7.js";import"./index-583c82b1.js";import"./tsxHelper-fbe4f683.js";import"./index-e74afd53.js";import"./useTimeout-e48d95f5.js";import"./propTypes-fbd6d81b.js";import"./download-aa6ecb89.js";import"./base64Conver-6d09fa87.js";import"./index-b55369a6.js";import"./index-9bb5d20f.js";import"./useCopyToClipboard-3734008b.js";import"./useForm-944717e0.js";const w=B({components:{ElButton:T,ElTableColumn:E,PageWrapper:A,BasicTable:_},setup(){const e=l(!1),r=l(!0),i=l(!0),p=l(null);function f(){const n=y(p);if(!n)throw new Error("tableAction is null");return n}function g(){f().toggleAllSelection()}function m(){r.value=!r.value}function t(){e.value=!0,setTimeout(()=>{e.value=!1},3e3)}function d(){i.value=!i.value}function c(n){console.table("table column change",n)}return{tableRef:p,columns:v(),loading:e,stripe:r,border:i,toggleSelection:g,toggleStripe:m,toggleLoading:t,toggleBorder:d,handleColumnChange:c,demoListApi:x}}}),S=a("\u5207\u6362\u9009\u4E2D "),P=a(" \u5F00\u542Floading ");function L(e,r,i,p,f,g){const m=u("el-table-column"),t=u("el-button"),d=u("BasicTable"),c=u("PageWrapper");return k(),h(c,null,{default:o(()=>[s(d,{ref:"tableRef",title:"\u57FA\u7840\u793A\u4F8B",titleHelpMessage:"\u6E29\u99A8\u63D0\u9192",columns:e.columns,loading:e.loading,stripe:e.stripe,api:e.demoListApi,showIndexColumn:"",showCheckboxColumn:"",border:e.border,onColumnsChange:e.handleColumnChange},{address:o(({label:n,prop:C})=>[s(m,{label:n,prop:C},{default:o(j=>[a(b(j.row.address),1)]),_:2},1032,["label","prop"])]),toolbar:o(()=>[s(t,{type:"primary",onClick:e.toggleSelection},{default:o(()=>[S]),_:1},8,["onClick"]),s(t,{type:"primary",onClick:e.toggleBorder},{default:o(()=>[a(b(e.border?"\u9690\u85CF\u8FB9\u6846":"\u663E\u793A\u8FB9\u6846"),1)]),_:1},8,["onClick"]),s(t,{type:"primary",onClick:e.toggleLoading},{default:o(()=>[P]),_:1},8,["onClick"]),s(t,{type:"primary",onClick:e.toggleStripe},{default:o(()=>[a(b(e.stripe?"\u9690\u85CF\u6591\u9A6C\u7EB9":"\u663E\u793A\u6591\u9A6C\u7EB9"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","loading","stripe","api","border","onColumnsChange"])]),_:1})}var ie=F(w,[["render",L]]);export{ie as default};
