import{B as d}from"./TableImg.25dce032.js";import{u as b}from"./useTable.f6265685.js";import{P as j}from"./index.04776c9c.js";import{getBasicColumns as f}from"./tableData.c5a608ee.js";import{d as x}from"./table.1b097614.js";import{_ as g}from"./index.16f9732e.js";import{aj as _}from"./ex-pkg-element-plus.e1a09009.js";import{y as k,Z as a,z as B,G as F,H as r,R as p,K as T,Q as C}from"./ex-pkg-@vue.dfd8e273.js";import"./BasicForm.b4f64650.js";import"./index.265a67f3.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./index.8c22b3cc.js";import"./index.83e77832.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./propTypes.6bd760c6.js";import"./uuid.2b29000c.js";import"./download.76630d52.js";import"./base64Conver.bb012c73.js";import"./index.944b2d86.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./useForm.c1733d5f.js";import"./onMountedOrActivated.67461842.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const E=k({components:{ElTableColumn:_,BasicTable:d,PageWrapper:j},setup(){const[o]=b({api:x,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",columns:[...f(),{actions:[{text:"\u542F\u7528",callback:t},{text:"\u5220\u9664",callback:s}]}],rowKey:"id"});function s(e){console.table("\u70B9\u51FB\u4E86\u5220\u9664",e)}function t(e){console.table("\u70B9\u51FB\u4E86\u542F\u7528",e)}return{registerTable:o,handleDelete:s,handleOpen:t}}});function v(o,s,t,e,y,w){const i=a("el-table-column"),n=a("BasicTable"),u=a("PageWrapper");return B(),F(u,{title:"\u53EF\u5C55\u5F00\u8868\u683C",description:"\u4E0D\u53EF\u4E0Escroll\u5171\u7528\u3002"},{default:r(()=>[p(n,{onRegister:o.registerTable},{address:r(({label:c,prop:m})=>[p(i,{type:"expand",label:c,prop:m},{default:r(l=>[T("span",null,"Address: "+C(l.row.address),1)]),_:2},1032,["label","prop"])]),_:1},8,["onRegister"])]),_:1})}var te=g(E,[["render",v]]);export{te as default};
