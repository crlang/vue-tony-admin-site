import{B as _}from"./BasicTable-8a62f65c.js";import{P as F}from"./index-103ae9c6.js";import{g as f,c as j}from"./data-994c695f.js";import{_ as B,c as k}from"./index-26bedde3.js";import{d as h}from"./table-77f0c299.js";import{u as T}from"./ex-pkg-element-plus-f609432a.js";import{y as D,a as P,Z as c,z as x,G as E,H as n,K as b,R as a,P as s,u as w}from"./ex-pkg-@vue-feb543c0.js";import"./BasicForm-108eec17.js";import"./index-44cf8bec.js";import"./ex-pkg-vendor-bb3f8859.js";import"./ex-pkg-mockjs-ec7a233b.js";import"./index-b436c267.js";import"./index-ddb5b200.js";import"./useAttrs-972c2e18.js";import"./useWindowSizeFn-3a4b39e4.js";import"./index-93f62e3c.js";import"./index-8ceb82bc.js";import"./tsxHelper-ab68d96a.js";import"./index-8a4d5146.js";import"./useTimeout-998fb248.js";import"./propTypes-605b60b6.js";import"./download-affeb443.js";import"./base64Conver-6d09fa87.js";import"./index-325600b8.js";import"./index-6b3050e7.js";import"./useCopyToClipboard-6f8ca492.js";import"./useForm-94dacd0e.js";const A=D({components:{ElButton:T,PageWrapper:F,BasicTable:_},setup(){const e=P(null),{createMessage:u}=k();function o(){const p=w(e);if(!p)throw new Error("tableAction is null");return p}function r(){o().setLoading(!0),setTimeout(()=>{o().setLoading(!1)},1e3)}function m(){o().setColumns(j())}function d(){o().setColumns(f()),o().reload()}function t(){u.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(o().getColumns())}function i(){u.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(o().getDataSource())}function l(){u.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(o().getRawDataSource())}function g(){u.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(o().getPagination())}function C(){o().setPagination({currentPage:2}),o().reload()}return{tableRef:e,api:h,columns:f(),changeLoading:r,changeColumns:m,reloadTable:d,getColumn:t,getTableData:i,getTableRawData:l,getPagination:g,setPaginationInfo:C}}}),R={class:"mb-4"},v=s("\u8FD8\u539F"),L=s("\u5F00\u542Floading"),S=s("\u66F4\u6539Columns"),W=s("\u83B7\u53D6Columns"),$=s("\u83B7\u53D6\u8868\u683C\u6570\u636E"),y=s("\u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E"),H=s("\u8DF3\u8F6C\u5230\u7B2C2\u9875"),M={class:"mb-4"},N=s("\u83B7\u53D6\u5206\u9875\u4FE1\u606F");function V(e,u,o,r,m,d){const t=c("el-button"),i=c("BasicTable"),l=c("PageWrapper");return x(),E(l,null,{default:n(()=>[b("div",R,[a(t,{onClick:e.reloadTable},{default:n(()=>[v]),_:1},8,["onClick"]),a(t,{onClick:e.changeLoading},{default:n(()=>[L]),_:1},8,["onClick"]),a(t,{onClick:e.changeColumns},{default:n(()=>[S]),_:1},8,["onClick"]),a(t,{onClick:e.getColumn},{default:n(()=>[W]),_:1},8,["onClick"]),a(t,{onClick:e.getTableData},{default:n(()=>[$]),_:1},8,["onClick"]),a(t,{onClick:e.getTableRawData},{default:n(()=>[y]),_:1},8,["onClick"]),a(t,{onClick:e.setPaginationInfo},{default:n(()=>[H]),_:1},8,["onClick"])]),b("div",M,[a(t,{onClick:e.getPagination},{default:n(()=>[N]),_:1},8,["onClick"])]),a(i,{title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:e.api,columns:e.columns,showCheckboxColumn:""},null,8,["api","columns"])]),_:1})}var be=B(A,[["render",V]]);export{be as default};
