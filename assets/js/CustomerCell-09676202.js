import{B as b}from"./BasicTable-0f3386bf.js";import{u as f}from"./useTable-178612d2.js";import{d as _}from"./table-5b41b9cd.js";import{a as j}from"./data-4cf2bd84.js";import{P as g}from"./index-46033b04.js";import{_ as x}from"./index-8e69729b.js";import{ai as C,a0 as T,am as B}from"./ex-pkg-element-plus-6a2cfc13.js";import{y as E,Z as r,z as F,G as v,H as e,R as o,P as u,Q as n}from"./ex-pkg-@vue-6f720869.js";import"./BasicForm-4389fd93.js";import"./index-bcceac7a.js";import"./ex-pkg-vendor-69b4619e.js";import"./ex-pkg-mockjs-abb76a9d.js";import"./index-3ab93494.js";import"./index-29499780.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-414339e6.js";import"./index-9b3b57b7.js";import"./index-583c82b1.js";import"./tsxHelper-fbe4f683.js";import"./index-e74afd53.js";import"./useTimeout-e48d95f5.js";import"./propTypes-fbd6d81b.js";import"./download-aa6ecb89.js";import"./base64Conver-6d09fa87.js";import"./index-b55369a6.js";import"./index-9bb5d20f.js";import"./useCopyToClipboard-3734008b.js";import"./useForm-944717e0.js";const k=E({components:{ElTag:C,ElAvatar:T,ElTableColumn:B,PageWrapper:g,BasicTable:b},setup(){const[i]=f({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:_,columns:j(),border:!0,showTableSetting:!0});return{registerTable:i}}});function w(i,y,A,P,D,W){const p=r("el-table-column"),l=r("el-tag"),m=r("el-avatar"),c=r("BasicTable"),d=r("PageWrapper");return F(),v(d,{contentBackground:""},{default:e(()=>[o(c,{onRegister:i.registerTable},{id:e(({label:t,prop:a})=>[o(p,{label:t,prop:a},{default:e(s=>[u(" ID: "+n(s.row.id),1)]),_:2},1032,["label","prop"])]),no:e(({label:t,prop:a})=>[o(p,{label:t,prop:a},{default:e(s=>[o(l,{type:"success"},{default:e(()=>[u(n(s.row.no),1)]),_:2},1024)]),_:2},1032,["label","prop"])]),avatar:e(({label:t,prop:a})=>[o(p,{label:t,prop:a},{default:e(s=>[o(m,{size:60,src:s.row.avatar},null,8,["src"])]),_:2},1032,["label","prop"])]),category:e(({label:t,prop:a})=>[o(p,{label:t,prop:a},{default:e(s=>[o(l,{type:"success"},{default:e(()=>[u(n(s.row.category),1)]),_:2},1024)]),_:2},1032,["label","prop"])]),_:1},8,["onRegister"])]),_:1})}var ie=x(k,[["render",w]]);export{ie as default};
