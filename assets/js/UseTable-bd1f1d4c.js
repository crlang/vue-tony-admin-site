import{B as w}from"./BasicTable-0f3386bf.js";import{u as E}from"./useTable-178612d2.js";import{P as S}from"./index-46033b04.js";import{g as f,c as A}from"./data-4cf2bd84.js";import{_ as R,f as v}from"./index-8e69729b.js";import{d as y}from"./table-5b41b9cd.js";import{x as L}from"./ex-pkg-element-plus-6a2cfc13.js";import{y as W,Z as r,z as $,G as H,H as t,K as b,R as n,P as s}from"./ex-pkg-@vue-6f720869.js";import"./BasicForm-4389fd93.js";import"./index-bcceac7a.js";import"./ex-pkg-vendor-69b4619e.js";import"./ex-pkg-mockjs-abb76a9d.js";import"./index-3ab93494.js";import"./index-29499780.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-414339e6.js";import"./index-9b3b57b7.js";import"./index-583c82b1.js";import"./tsxHelper-fbe4f683.js";import"./index-e74afd53.js";import"./useTimeout-e48d95f5.js";import"./propTypes-fbd6d81b.js";import"./download-aa6ecb89.js";import"./base64Conver-6d09fa87.js";import"./index-b55369a6.js";import"./index-9bb5d20f.js";import"./useCopyToClipboard-3734008b.js";import"./useForm-944717e0.js";const M=W({components:{ElButton:L,PageWrapper:S,BasicTable:w},setup(){const{createMessage:e}=v(),d=f(),[m,{setLoading:a,setColumns:i,getColumns:p,getDataSource:o,getRawDataSource:l,reload:u,getPagination:g,setPagination:C,toggleAllSelection:_}]=E({title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:y,columns:d,rowKey:"id",showTableSetting:!0,onSelectionChange:c=>{console.table("SelectionChange",c)},showCheckboxColumn:!0,onColumnsChange:c=>{console.table("ColumnsChange",c)}});function F(){a(!0),setTimeout(()=>{a(!1)},1e3)}function j(){i(A())}function B(){i(f()),u()}function k(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(p())}function h(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(o())}function T(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(l())}function D(){e.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.table(g())}function x(){C({currentPage:2}),u()}function P(){_()}return{registerTable:m,changeLoading:F,changeColumns:j,reloadTable:B,getColumn:k,getTableData:h,getTableRawData:T,getPagination2:D,setPaginationInfo:x,toggleSelectedRows:P}}}),N={class:"mb-4"},V=s("\u8FD8\u539F"),z=s("\u5F00\u542Floading"),I=s("\u66F4\u6539Columns"),K=s("\u83B7\u53D6Columns"),G=s("\u83B7\u53D6\u8868\u683C\u6570\u636E"),U=s("\u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E"),Z=s("\u8DF3\u8F6C\u5230\u7B2C2\u9875"),q={class:"mb-4"},J=s("\u5207\u6362\u9009\u4E2D\u884C"),O=s("\u83B7\u53D6\u5206\u9875\u4FE1\u606F");function Q(e,d,m,a,i,p){const o=r("el-button"),l=r("BasicTable"),u=r("PageWrapper");return $(),H(u,null,{default:t(()=>[b("div",N,[n(o,{onClick:e.reloadTable},{default:t(()=>[V]),_:1},8,["onClick"]),n(o,{onClick:e.changeLoading},{default:t(()=>[z]),_:1},8,["onClick"]),n(o,{onClick:e.changeColumns},{default:t(()=>[I]),_:1},8,["onClick"]),n(o,{onClick:e.getColumn},{default:t(()=>[K]),_:1},8,["onClick"]),n(o,{onClick:e.getTableData},{default:t(()=>[G]),_:1},8,["onClick"]),n(o,{onClick:e.getTableRawData},{default:t(()=>[U]),_:1},8,["onClick"]),n(o,{onClick:e.setPaginationInfo},{default:t(()=>[Z]),_:1},8,["onClick"])]),b("div",q,[n(o,{onClick:e.toggleSelectedRows},{default:t(()=>[J]),_:1},8,["onClick"]),n(o,{onClick:e.getPagination2},{default:t(()=>[O]),_:1},8,["onClick"])]),n(l,{onRegister:e.registerTable},null,8,["onRegister"])]),_:1})}var xe=R(M,[["render",Q]]);export{xe as default};
