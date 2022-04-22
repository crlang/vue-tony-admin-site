import{B as _}from"./BasicTable-e73bdb7a.js";import{P as F}from"./index-daa1bcd9.js";import{g as p,c as j}from"./data-4cf2bd84.js";import{_ as B,f as k}from"./index-94a7e7e0.js";import{d as h}from"./table-0ce279e7.js";import{x as T}from"./ex-pkg-element-plus-6a2cfc13.js";import{y as D,a as x,Z as c,z as P,G as E,H as a,K as b,R as n,P as s,u as w}from"./ex-pkg-@vue-6f720869.js";import"./BasicForm-d9c6bead.js";import"./index-4a8d1af3.js";import"./ex-pkg-vendor-69b4619e.js";import"./ex-pkg-mockjs-abb76a9d.js";import"./index-2543fa86.js";import"./index-9fa4e1de.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-414339e6.js";import"./index-874009eb.js";import"./index-230bee16.js";import"./tsxHelper-f8a518c2.js";import"./index-55f6df6d.js";import"./useTimeout-dc9cc03d.js";import"./propTypes-fbd6d81b.js";import"./download-844ebaa9.js";import"./base64Conver-6d09fa87.js";import"./index-753cabc5.js";import"./index-f5b6bf30.js";import"./useCopyToClipboard-83ab3f80.js";import"./useForm-2317b26a.js";const A=D({components:{ElButton:T,PageWrapper:F,BasicTable:_},setup(){const e=x(null),{createMessage:u}=k();function o(){const f=w(e);if(!f)throw new Error("tableAction is null");return f}function r(){o().setLoading(!0),setTimeout(()=>{o().setLoading(!1)},1e3)}function d(){o().setColumns(j())}function m(){o().setColumns(p()),o().reload()}function t(){u.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(o().getColumns())}function i(){u.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(o().getDataSource())}function l(){u.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(o().getRawDataSource())}function g(){u.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(o().getPagination())}function C(){o().setPagination({currentPage:2}),o().reload()}return{tableRef:e,api:h,columns:p(),changeLoading:r,changeColumns:d,reloadTable:m,getColumn:t,getTableData:i,getTableRawData:l,getPagination:g,setPaginationInfo:C}}}),R={class:"mb-4"},v=s("\u8FD8\u539F"),L=s("\u5F00\u542Floading"),S=s("\u66F4\u6539Columns"),W=s("\u83B7\u53D6Columns"),$=s("\u83B7\u53D6\u8868\u683C\u6570\u636E"),y=s("\u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E"),H=s("\u8DF3\u8F6C\u5230\u7B2C2\u9875"),M={class:"mb-4"},N=s("\u83B7\u53D6\u5206\u9875\u4FE1\u606F");function V(e,u,o,r,d,m){const t=c("el-button"),i=c("BasicTable"),l=c("PageWrapper");return P(),E(l,null,{default:a(()=>[b("div",R,[n(t,{onClick:e.reloadTable},{default:a(()=>[v]),_:1},8,["onClick"]),n(t,{onClick:e.changeLoading},{default:a(()=>[L]),_:1},8,["onClick"]),n(t,{onClick:e.changeColumns},{default:a(()=>[S]),_:1},8,["onClick"]),n(t,{onClick:e.getColumn},{default:a(()=>[W]),_:1},8,["onClick"]),n(t,{onClick:e.getTableData},{default:a(()=>[$]),_:1},8,["onClick"]),n(t,{onClick:e.getTableRawData},{default:a(()=>[y]),_:1},8,["onClick"]),n(t,{onClick:e.setPaginationInfo},{default:a(()=>[H]),_:1},8,["onClick"])]),b("div",M,[n(t,{onClick:e.getPagination},{default:a(()=>[N]),_:1},8,["onClick"])]),n(i,{title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:e.api,columns:e.columns,showCheckboxColumn:""},null,8,["api","columns"])]),_:1})}var be=B(A,[["render",V]]);export{be as default};
