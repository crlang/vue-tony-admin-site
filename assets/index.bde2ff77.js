import{B as f}from"./TableImg.f1872a7a.js";import{u as b}from"./useTable.9ede0ccb.js";import{d as j}from"./system.07d41a1c.js";import{u as h}from"./index.294c9e0b.js";import{M as g,c as _,s as w}from"./MenuDrawer.590b8c7f.js";import{_ as C}from"./index.b7d256c2.js";import{x,aJ as S,X as a,z as T,A as D,$ as i,a2 as m,W as B,aa as F}from"./vendor.1ced56aa.js";import"./BasicForm.3025383c.js";import"./index.d43b6350.js";import"./index.deee9844.js";import"./index.ff9a9226.js";import"./useAttrs.58303cdd.js";import"./useWindowSizeFn.2e4c2b5e.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.00691155.js";import"./base64Conver.bb012c73.js";import"./index.9b0d1666.js";import"./useForm.c868803e.js";import"./index.7b145182.js";import"./onMountedOrActivated.f6bae218.js";const M=x({name:"MenuManagement",components:{ElButton:S,BasicTable:f,MenuDrawer:g},setup(){const[e,{openDrawer:t}]=h(),[c,{reload:u,expandAll:d}]=b({title:"\u83DC\u5355\u5217\u8868",api:j,columns:[..._,{actions:[{icon:"clarity:note-edit-line",callback:o},{icon:"ep:delete",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:s}}]}],formConfig:{labelWidth:120,schemas:w},pagination:void 0,striped:!1,useSearchForm:!0,showTableSetting:!0,border:!0,showIndexColumn:!1});function l(){t(!0,{isUpdate:!1})}function o(r){t(!0,{record:r,isUpdate:!0})}function s(r){console.log(r)}function n(){u()}function p(){B(d)}return{registerTable:c,registerDrawer:e,handleCreate:l,handleEdit:o,handleDelete:s,handleSuccess:n,onFetchSuccess:p}}}),v=F(" \u65B0\u589E\u83DC\u5355 ");function k(e,t,c,u,d,l){const o=a("el-button"),s=a("BasicTable"),n=a("MenuDrawer");return T(),D("div",null,[i(s,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:m(()=>[i(o,{type:"primary",onClick:e.handleCreate},{default:m(()=>[v]),_:1},8,["onClick"])]),_:1},8,["onRegister","onFetchSuccess"]),i(n,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Y=C(M,[["render",k]]);export{Y as default};
