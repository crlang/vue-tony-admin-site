import{I as b}from"./index.7cf1fc6a.js";import{B as x}from"./TableImg.85b7f65c.js";import{P as B}from"./index.2f4e0ba4.js";import{_ as S}from"./index.a180eed7.js";import{x as h,aI as E,M as F,X as s,z as l,Y as d,a2 as p,$ as f,A as g,ao as I,a7 as v,aa as C}from"./vendor.5e678e09.js";import"./index.2a498586.js";import"./useAttrs.f893c8ed.js";import"./useWindowSizeFn.c212c501.js";import"./BasicForm.b7b18809.js";import"./index.24c16315.js";import"./index.3e4f3c3c.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.86b751ed.js";import"./base64Conver.bb012c73.js";import"./index.056c9b24.js";import"./useForm.5f193a64.js";import"./clickOutside.d6da8543.js";const T=h({components:{ElButton:E,BasicTable:x,ImpExcel:b,PageWrapper:B},setup(){const e=F([]);function i(a){e.value=[],console.log(a);for(const m of a){const{header:c,results:u,meta:{sheetName:r}}=m,t=[];for(const o of c)console.log("header",o,c),t.push({label:o,prop:o});e.value.push({title:r,columns:t,dataSource:u})}}return{loadDataSuccess:i,tableListRef:e}}}),k=C(" \u5BFC\u5165Excel ");function Y(e,i,a,m,c,u){const r=s("el-button"),t=s("ImpExcel"),o=s("BasicTable"),_=s("PageWrapper");return l(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:p(()=>[f(t,{onSuccess:e.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:p(()=>[f(r,{class:"m-3"},{default:p(()=>[k]),_:1})]),_:1},8,["onSuccess"]),(l(!0),g(v,null,I(e.tableListRef,(n,j)=>(l(),d(o,{key:j,title:n.title,columns:n.columns,dataSource:n.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var J=S(T,[["render",Y]]);export{J as default};
