import{B as i}from"./TableImg.f1872a7a.js";import{u as n}from"./useTable.9ede0ccb.js";import{d as u}from"./table.7f6ad5dd.js";import{_ as p}from"./index.b7d256c2.js";import{x as l,X as c,z as d,A as m,$ as b}from"./vendor.1ced56aa.js";import"./BasicForm.3025383c.js";import"./index.d43b6350.js";import"./index.deee9844.js";import"./index.ff9a9226.js";import"./useAttrs.58303cdd.js";import"./useWindowSizeFn.2e4c2b5e.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.00691155.js";import"./base64Conver.bb012c73.js";import"./index.9b0d1666.js";import"./useForm.c868803e.js";import"./index.7b145182.js";import"./onMountedOrActivated.f6bae218.js";const f=l({components:{BasicTable:i},setup(){const o=[{label:"ID",prop:"id",fixed:"left"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"},{label:"\u7F16\u53F7",prop:"no"},{label:"\u5F00\u59CB\u65F6\u95F4",prop:"beginTime"},{label:"\u7ED3\u675F\u65F6\u95F4",prop:"endTime"},{actions:[{text:"\u542F\u7528",callback:s},{text:"\u5220\u9664",callback:t}]}],[r]=n({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:u,columns:o,showCheckboxColumn:!0,border:!0,actionColumn:{width:160,label:"Action",prop:"action",isSlot:!0}});function t(e){console.table("\u70B9\u51FB\u4E86\u5220\u9664",e)}function s(e){console.table("\u70B9\u51FB\u4E86\u542F\u7528",e)}return{registerTable:r,handleDelete:t,handleOpen:s}}}),j={class:"p-4"};function F(o,r,t,s,e,x){const a=c("BasicTable");return d(),m("div",j,[b(a,{onRegister:o.registerTable},null,8,["onRegister"])])}var L=p(f,[["render",F]]);export{L as default};
