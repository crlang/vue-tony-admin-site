import{B}from"./index-2684c8ee.js";import{g as k}from"./data-d65ea251.js";import{d as A}from"./table-d77ffdea.js";import{n as E,_ as y}from"./elementui-66980f2a.js";import{E as F,r as i,u as v,ac as s,p as S,I as T,J as o,S as r,P as n,Q as d}from"./vue-d691a816.js";import{_ as h}from"./index-795cdaa0.js";import"./index-a82db265.js";import"./index-6ee1af83.js";import"./index-e82f403d.js";import"./index-9c67be75.js";import"./tsxHelper-f44f22cd.js";import"./useWindowSizeFn-f51aba85.js";import"./index-22989de9.js";import"./index-d5a424e4.js";import"./domUtils-3a96435f.js";import"./index-a2d8523e.js";import"./useForm-af19a7b1.js";const w=F({components:{ElButton:E,ElTableColumn:y,BasicTable:B},setup(){const e=i(!1),l=i(!0),a=i(!0),p=i(null);function g(){const u=v(p);if(!u)throw new Error("tableAction is null");return u}function f(){g().toggleAllSelection()}function m(){l.value=!l.value}function t(){e.value=!0,setTimeout(()=>{e.value=!1},3e3)}function c(){a.value=!a.value}return{tableRef:p,columns:k(),loading:e,stripe:l,border:a,toggleSelection:f,toggleStripe:m,toggleLoading:t,toggleBorder:c,demoListApi:A}}});function L(e,l,a,p,g,f){const m=s("el-table-column"),t=s("el-button"),c=s("BasicTable"),u=s("PageWrapper");return S(),T(u,null,{default:o(()=>[r(c,{ref:"tableRef",title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,loading:e.loading,stripe:e.stripe,api:e.demoListApi,showIndexColumn:"",showCheckboxColumn:"",border:e.border},{address:o(({label:b,prop:C})=>[r(m,{label:b,prop:C},{default:o(_=>[n(d(_.row.address),1)]),_:2},1032,["label","prop"])]),toolbar:o(()=>[r(t,{type:"primary",onClick:e.toggleSelection},{default:o(()=>[n("切换选中")]),_:1},8,["onClick"]),r(t,{type:"primary",onClick:e.toggleBorder},{default:o(()=>[n(d(e.border?"隐藏边框":"显示边框"),1)]),_:1},8,["onClick"]),r(t,{type:"primary",onClick:e.toggleLoading},{default:o(()=>[n("开启loading")]),_:1},8,["onClick"]),r(t,{type:"primary",onClick:e.toggleStripe},{default:o(()=>[n(d(e.stripe?"隐藏斑马纹":"显示斑马纹"),1)]),_:1},8,["onClick"])]),_:1},8,["columns","loading","stripe","api","border"])]),_:1})}const O=h(w,[["render",L]]);export{O as default};
