import{I as b}from"./index.144e3e21.js";import{B as x}from"./TableImg.f1872a7a.js";import{P as B}from"./index.7b145182.js";import{_ as S}from"./index.b7d256c2.js";import{x as h,aJ as E,M as F,X as s,z as p,Y as d,a2 as l,$ as f,A as g,ao as v,a7 as C,aa as I}from"./vendor.1ced56aa.js";import"./index.ff9a9226.js";import"./useAttrs.58303cdd.js";import"./useWindowSizeFn.2e4c2b5e.js";import"./BasicForm.3025383c.js";import"./index.d43b6350.js";import"./index.deee9844.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.00691155.js";import"./base64Conver.bb012c73.js";import"./index.9b0d1666.js";import"./useForm.c868803e.js";import"./onMountedOrActivated.f6bae218.js";const T=h({components:{ElButton:E,BasicTable:x,ImpExcel:b,PageWrapper:B},setup(){const e=F([]);function i(a){e.value=[],console.log(a);for(const m of a){const{header:r,results:u,meta:{sheetName:n}}=m,t=[];for(const o of r)console.log("header",o,r),t.push({label:o,prop:o});e.value.push({title:n,columns:t,dataSource:u})}}return{loadDataSuccess:i,tableListRef:e}}}),Y=I(" \u5BFC\u5165Excel ");function $(e,i,a,m,r,u){const n=s("el-button"),t=s("ImpExcel"),o=s("BasicTable"),_=s("PageWrapper");return p(),d(_,{title:"excel\u6570\u636E\u5BFC\u5165\u793A\u4F8B"},{default:l(()=>[f(t,{onSuccess:e.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:l(()=>[f(n,{class:"m-3"},{default:l(()=>[Y]),_:1})]),_:1},8,["onSuccess"]),(p(!0),g(C,null,v(e.tableListRef,(c,j)=>(p(),d(o,{key:j,title:c.title,columns:c.columns,dataSource:c.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}var H=S(T,[["render",$]]);export{H as default};
