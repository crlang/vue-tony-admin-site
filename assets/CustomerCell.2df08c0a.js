import{B as d,a as _}from"./TableImg.85b7f65c.js";import{u as g}from"./useTable.806a78c4.js";import{d as f}from"./table.9ad93500.js";import{getCustomCellColumns as j}from"./tableData.c758511e.js";import{P as T}from"./index.2f4e0ba4.js";import{_ as C}from"./index.a180eed7.js";import{x as w,b_ as E,bw as F,c2 as x,X as s,z as B,Y as v,a2 as a,$ as t,aa as p,F as i}from"./vendor.5e678e09.js";import"./BasicForm.b7b18809.js";import"./index.24c16315.js";import"./index.3e4f3c3c.js";import"./index.2a498586.js";import"./useAttrs.f893c8ed.js";import"./useWindowSizeFn.c212c501.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.86b751ed.js";import"./base64Conver.bb012c73.js";import"./index.056c9b24.js";import"./useForm.5f193a64.js";import"./clickOutside.d6da8543.js";import"./select.2ba40e53.js";const A=w({components:{ElTag:E,ElAvatar:F,ElTableColumn:x,PageWrapper:T,BasicTable:d,TableImg:_},setup(){const[l]=g({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:f,columns:j(),border:!0,showTableSetting:!0});return{registerTable:l}}});function y(l,k,z,D,I,L){const r=s("el-table-column"),u=s("el-tag"),m=s("el-avatar"),n=s("TableImg"),c=s("BasicTable"),b=s("PageWrapper");return B(),v(b,{contentBackground:""},{default:a(()=>[t(c,{onRegister:l.registerTable},{id:a(e=>[t(r,{label:e.label,prop:e.prop},{default:a(o=>[p(" ID: "+i(o.row.id),1)]),_:2},1032,["label","prop"])]),no:a(e=>[t(r,{label:e.label,prop:e.prop},{default:a(o=>[t(u,{type:"success"},{default:a(()=>[p(i(o.row.no),1)]),_:2},1024)]),_:2},1032,["label","prop"])]),avatar:a(e=>[t(r,{label:e.label,prop:e.prop},{default:a(o=>[t(m,{size:60,src:o.row.avatar},null,8,["src"])]),_:2},1032,["label","prop"])]),imgArr:a(e=>[t(r,{label:e.label,prop:e.prop},{default:a(o=>[t(n,{size:60,simpleShow:!0,imgList:o.row.imgArr},null,8,["imgList"])]),_:2},1032,["label","prop"])]),imgs:a(e=>[t(r,{label:e.label,prop:e.prop},{default:a(o=>[t(n,{size:60,imgList:o.row.imgs},null,8,["imgList"])]),_:2},1032,["label","prop"])]),category:a(e=>[t(r,{label:e.label,prop:e.prop},{default:a(o=>[t(u,{type:"success"},{default:a(()=>[p(i(o.row.category),1)]),_:2},1024)]),_:2},1032,["label","prop"])]),_:1},8,["onRegister"])]),_:1})}var ae=C(A,[["render",y]]);export{ae as default};
