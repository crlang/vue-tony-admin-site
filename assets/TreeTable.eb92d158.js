import{B as n}from"./TableImg.4b339cdc.js";import{u as l}from"./useTable.45598c42.js";import{getBasicColumns as p,getTreeTableData as m}from"./tableData.88e5e9a7.js";import{_ as d}from"./index.51427878.js";import{x as b,aI as _,Y as i,z as f,A as j,a0 as o,a3 as t,ab as u}from"./vendor.041d4bc7.js";import"./BasicForm.6860876e.js";import"./index.2d94dd73.js";import"./index.09cc8dc9.js";import"./index.df418349.js";import"./useAttrs.374c949f.js";import"./useWindowSizeFn.b4a2eb84.js";import"./uuid.2b29000c.js";import"./download.b0dab5ad.js";import"./base64Conver.bb012c73.js";import"./index.958cb5f8.js";import"./useForm.71c419b6.js";import"./clickOutside.3e0cf9e8.js";import"./select.9fa1ac8c.js";const C=b({components:{ElButton:_,BasicTable:n},setup(){const[e,{expandAll:s,collapseAll:a}]=l({title:"\u6811\u5F62\u8868\u683C",stripe:!0,showCheckboxColumn:!0,titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:p(),dataSource:m(),rowKey:"id"});return{register:e,expandAll:s,collapseAll:a}}}),x={class:"p-4"},F=u("\u5C55\u5F00\u5168\u90E8"),T=u("\u6298\u53E0\u5168\u90E8");function B(e,s,a,E,g,k){const r=i("el-button"),c=i("BasicTable");return f(),j("div",x,[o(c,{onRegister:e.register},{toolbar:t(()=>[o(r,{type:"primary",onClick:e.expandAll},{default:t(()=>[F]),_:1},8,["onClick"]),o(r,{type:"primary",onClick:e.collapseAll},{default:t(()=>[T]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var Y=d(C,[["render",B]]);export{Y as default};
