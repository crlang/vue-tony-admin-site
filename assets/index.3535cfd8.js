import{B as h,T as _}from"./TableImg.4b339cdc.js";import{u as j}from"./useTable.45598c42.js";import{d as C}from"./system.767b42c6.js";import{u as g}from"./index.3abb257b.js";import{M as w,c as T,s as D}from"./MenuDrawer.bc6ddc62.js";import{_ as S}from"./index.51427878.js";import{x as F,aI as x,c2 as B,Y as n,z as M,A as k,a0 as t,a3 as s,X as v,ab as A}from"./vendor.041d4bc7.js";import"./BasicForm.6860876e.js";import"./index.2d94dd73.js";import"./index.09cc8dc9.js";import"./index.df418349.js";import"./useAttrs.374c949f.js";import"./useWindowSizeFn.b4a2eb84.js";import"./uuid.2b29000c.js";import"./download.b0dab5ad.js";import"./base64Conver.bb012c73.js";import"./index.958cb5f8.js";import"./useForm.71c419b6.js";import"./clickOutside.3e0cf9e8.js";const E=F({name:"MenuManagement",components:{ElButton:x,ElTableColumn:B,BasicTable:h,MenuDrawer:w,TableAction:_},setup(){const[e,{openDrawer:r}]=g(),[u,{reload:d,expandAll:m}]=j({title:"\u83DC\u5355\u5217\u8868",api:C,columns:T,formConfig:{labelWidth:120,schemas:D},pagination:void 0,striped:!1,useSearchForm:!0,showTableSetting:!0,border:!0,showIndexColumn:!1,actionColumn:{width:80,label:"\u64CD\u4F5C",prop:"action",isSlot:!0,fixed:void 0}});function p(){r(!0,{isUpdate:!1})}function a(o){r(!0,{record:o,isUpdate:!0})}function i(o){console.log(o)}function c(){d()}function l(){v(m)}return{registerTable:u,registerDrawer:e,handleCreate:p,handleEdit:a,handleDelete:i,handleSuccess:c,onFetchSuccess:l}}}),y=A(" \u65B0\u589E\u83DC\u5355 ");function R(e,r,u,d,m,p){const a=n("el-button"),i=n("TableAction"),c=n("el-table-column"),l=n("BasicTable"),o=n("MenuDrawer");return M(),k("div",null,[t(l,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:s(()=>[t(a,{type:"primary",onClick:e.handleCreate},{default:s(()=>[y]),_:1},8,["onClick"])]),action:s(b=>[t(c,{lebel:b.label,prop:b.prop},{default:s(f=>[t(i,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f.row)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,f.row)}}]},null,8,["actions"])]),_:2},1032,["lebel","prop"])]),_:1},8,["onRegister","onFetchSuccess"]),t(o,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var ee=S(E,[["render",R]]);export{ee as default};
