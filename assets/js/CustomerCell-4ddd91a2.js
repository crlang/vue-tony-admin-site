import{B as b,T as _}from"./TableImg-244764d7.js";import{u as g}from"./useTable-a6392c55.js";import{d as j}from"./table-d642a3ce.js";import{getCustomCellColumns as x}from"./tableData-558aa509.js";import{P as T}from"./index-fe480704.js";import{_ as C}from"./index-034694ef.js";import{af as E,Z as w,aj as B}from"./ex-pkg-element-plus-fdfdae45.js";import{y as F,Z as i,z as v,G as k,H as e,R as o,P as l,Q as m}from"./ex-pkg-@vue-6f720869.js";import"./BasicForm-7e56ab34.js";import"./index-504d29a3.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";import"./index-ccc912f1.js";import"./index-ff107243.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-f8d8829f.js";import"./index-d0007c65.js";import"./index-4566a42e.js";import"./tsxHelper-97245be0.js";import"./index-c7b8aefc.js";import"./useTimeout-deb974d8.js";import"./propTypes-7bd4f998.js";import"./download-1f1abd5f.js";import"./base64Conver-6d09fa87.js";import"./index-7fc3c83a.js";import"./index-c7eaf852.js";import"./useCopyToClipboard-963b5f35.js";import"./useForm-9a91b2d5.js";const A=F({components:{ElTag:E,ElAvatar:w,ElTableColumn:B,PageWrapper:T,BasicTable:b,TableImg:_},setup(){const[p]=g({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:j,columns:x(),border:!0,showTableSetting:!0});return{registerTable:p}}});function y(p,z,D,I,L,P){const r=i("el-table-column"),u=i("el-tag"),c=i("el-avatar"),n=i("TableImg"),d=i("BasicTable"),f=i("PageWrapper");return v(),k(f,{contentBackground:""},{default:e(()=>[o(d,{onRegister:p.registerTable},{id:e(({label:t,prop:a})=>[o(r,{label:t,prop:a},{default:e(s=>[l(" ID: "+m(s.row.id),1)]),_:2},1032,["label","prop"])]),no:e(({label:t,prop:a})=>[o(r,{label:t,prop:a},{default:e(s=>[o(u,{type:"success"},{default:e(()=>[l(m(s.row.no),1)]),_:2},1024)]),_:2},1032,["label","prop"])]),avatar:e(({label:t,prop:a})=>[o(r,{label:t,prop:a},{default:e(s=>[o(c,{size:60,src:s.row.avatar},null,8,["src"])]),_:2},1032,["label","prop"])]),imgArr:e(({label:t,prop:a})=>[o(r,{label:t,prop:a},{default:e(s=>[o(n,{size:60,simpleShow:!0,imgList:s.row.imgArr},null,8,["imgList"])]),_:2},1032,["label","prop"])]),imgs:e(({label:t,prop:a})=>[o(r,{label:t,prop:a},{default:e(s=>[o(n,{size:60,imgList:s.row.imgs},null,8,["imgList"])]),_:2},1032,["label","prop"])]),category:e(({label:t,prop:a})=>[o(r,{label:t,prop:a},{default:e(s=>[o(u,{type:"success"},{default:e(()=>[l(m(s.row.category),1)]),_:2},1024)]),_:2},1032,["label","prop"])]),_:1},8,["onRegister"])]),_:1})}var me=C(A,[["render",y]]);export{me as default};
