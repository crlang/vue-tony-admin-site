import{B as _}from"./TableImg.25dce032.js";import{getBasicColumns as m,getBasicShortColumns as F}from"./tableData.c5a608ee.js";import{_ as j,f as k}from"./index.16f9732e.js";import{d as B}from"./table.1b097614.js";import{z as h}from"./ex-pkg-element-plus.e1a09009.js";import{y as T,a as D,Z as p,z as x,A as v,K as f,R as n,H as s,P as u,u as A}from"./ex-pkg-@vue.dfd8e273.js";import"./BasicForm.b4f64650.js";import"./index.265a67f3.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./index.8c22b3cc.js";import"./index.83e77832.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./propTypes.6bd760c6.js";import"./uuid.2b29000c.js";import"./download.76630d52.js";import"./base64Conver.bb012c73.js";import"./index.944b2d86.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./useForm.c1733d5f.js";import"./index.04776c9c.js";import"./onMountedOrActivated.67461842.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const E=T({components:{ElButton:h,BasicTable:_},setup(){const e=D(null),{createMessage:a}=k();function o(){const d=A(e);if(!d)throw new Error("tableAction is null");return d}function l(){o().setLoading(!0),setTimeout(()=>{o().setLoading(!1)},1e3)}function c(){o().setColumns(F())}function r(){o().setColumns(m()),o().reload()}function t(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getColumns())}function i(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getDataSource())}function g(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getRawDataSource())}function b(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getPagination())}function C(){o().setPagination({currentPage:2}),o().reload()}return{tableRef:e,api:B,columns:m(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:t,getTableData:i,getTableRawData:g,getPagination:b,setPaginationInfo:C}}}),w={class:"p-4"},R={class:"mb-4"},P=u("\u8FD8\u539F"),L=u("\u5F00\u542Floading"),z=u("\u66F4\u6539Columns"),M=u("\u83B7\u53D6Columns"),S=u("\u83B7\u53D6\u8868\u683C\u6570\u636E"),$=u("\u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E"),y=u("\u8DF3\u8F6C\u5230\u7B2C2\u9875"),I={class:"mb-4"},N=u("\u83B7\u53D6\u5206\u9875\u4FE1\u606F");function V(e,a,o,l,c,r){const t=p("el-button"),i=p("BasicTable");return x(),v("div",w,[f("div",R,[n(t,{onClick:e.reloadTable},{default:s(()=>[P]),_:1},8,["onClick"]),n(t,{onClick:e.changeLoading},{default:s(()=>[L]),_:1},8,["onClick"]),n(t,{onClick:e.changeColumns},{default:s(()=>[z]),_:1},8,["onClick"]),n(t,{onClick:e.getColumn},{default:s(()=>[M]),_:1},8,["onClick"]),n(t,{onClick:e.getTableData},{default:s(()=>[S]),_:1},8,["onClick"]),n(t,{onClick:e.getTableRawData},{default:s(()=>[$]),_:1},8,["onClick"]),n(t,{onClick:e.setPaginationInfo},{default:s(()=>[y]),_:1},8,["onClick"])]),f("div",I,[n(t,{onClick:e.getPagination},{default:s(()=>[N]),_:1},8,["onClick"])]),n(i,{title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:e.api,columns:e.columns,showCheckboxColumn:""},null,8,["api","columns"])])}var ge=j(E,[["render",V]]);export{ge as default};
