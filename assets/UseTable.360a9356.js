import{B as E}from"./index.41c3ca1e.js";import{g as p,c as P}from"./data.64f7723f.js";import{_ as S,d as A,y as R,e as l,o as v,j as I,i as t,g,h as n,m as u,z as L}from"./index.b263d89e.js";import{d as $}from"./table.9e8055a1.js";import{u as M}from"./useTable.27b91737.js";import"./index.fcad4ece.js";import"./index.528a2bb8.js";import"./index.1c7c0cd7.js";import"./row.e3bb9b75.js";import"./drawer.95bcb9ff.js";import"./card.86ff9530.js";import"./index.ef26d884.js";import"./index.2486a222.js";import"./index.ee4e75a5.js";import"./index.7bce58f8.js";import"./isEqual.2e3b6ef4.js";import"./_baseIsEqual.0e612cfa.js";import"./form-item.337e4360.js";import"./dropdown.109c4d5b.js";import"./index.b8d50620.js";import"./tsxHelper.c64d0d27.js";import"./useWindowSizeFn.159736d7.js";import"./index.b816e23f.js";import"./index.80d0f5e3.js";import"./index.53cddd5b.js";import"./refs.63e616a9.js";import"./use-dialog.adf6f7df.js";import"./index.0bf11fad.js";import"./index.6970fc55.js";import"./_baseUniq.82ba82ab.js";import"./index.2866cdc9.js";import"./index.dfd5a36d.js";import"./index.3bb3a281.js";import"./index.2609c49e.js";import"./index.1cc837a8.js";import"./index.a766b686.js";import"./domUtils.0dce6f1a.js";import"./index.26dc116b.js";import"./useForm.e2917246.js";const N=A({components:{ElButton:R,BasicTable:E},setup(){const{createMessage:o}=L(),r=p(),[c,{setLoading:a,setColumns:s,getColumns:d,getDataSource:e,getRawDataSource:m,reload:i,getPagination:Q,setPagination:f,toggleAllSelection:C}]=M({title:"useTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528useTable\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",api:$,columns:r,rowKey:"id",showTableSetting:!0,onSelectionChange:X=>{},showCheckboxColumn:!0});function _(){a(!0),setTimeout(()=>{a(!1)},1e3)}function F(){s(P())}function B(){s(p()),i()}function h(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function b(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function k(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function T(){o.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01")}function D(){f({currentPage:2}),i()}function w(){C()}return{registerTable:c,changeLoading:_,changeColumns:F,reloadTable:B,getColumn:h,getTableData:b,getTableRawData:k,getPaginationInfo:T,setPaginationInfo:D,toggleSelectedRows:w}}}),V={class:"mb-4"},y=u("\u8FD8\u539F"),W=u("\u5F00\u542Floading"),j=u("\u66F4\u6539Columns"),z=u("\u83B7\u53D6Columns"),H=u("\u83B7\u53D6\u8868\u683C\u6570\u636E"),K=u("\u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E"),U=u("\u8DF3\u8F6C\u5230\u7B2C2\u9875"),q={class:"mb-4"},G=u("\u5207\u6362\u9009\u4E2D\u884C"),J=u("\u83B7\u53D6\u5206\u9875\u4FE1\u606F");function O(o,r,c,a,s,d){const e=l("el-button"),m=l("BasicTable"),i=l("PageWrapper");return v(),I(i,null,{default:t(()=>[g("div",V,[n(e,{onClick:o.reloadTable},{default:t(()=>[y]),_:1},8,["onClick"]),n(e,{onClick:o.changeLoading},{default:t(()=>[W]),_:1},8,["onClick"]),n(e,{onClick:o.changeColumns},{default:t(()=>[j]),_:1},8,["onClick"]),n(e,{onClick:o.getColumn},{default:t(()=>[z]),_:1},8,["onClick"]),n(e,{onClick:o.getTableData},{default:t(()=>[H]),_:1},8,["onClick"]),n(e,{onClick:o.getTableRawData},{default:t(()=>[K]),_:1},8,["onClick"]),n(e,{onClick:o.setPaginationInfo},{default:t(()=>[U]),_:1},8,["onClick"])]),g("div",q,[n(e,{onClick:o.toggleSelectedRows},{default:t(()=>[G]),_:1},8,["onClick"]),n(e,{onClick:o.getPaginationInfo},{default:t(()=>[J]),_:1},8,["onClick"])]),n(m,{onRegister:o.registerTable},null,8,["onRegister"])]),_:1})}var Vo=S(N,[["render",O]]);export{Vo as default};
