import{B as h,T as _}from"./TableImg.390c3a43.js";import{u as j}from"./useTable.b18130de.js";import{d as C}from"./system.0928f088.js";import{u as g}from"./index.f2934f3f.js";import{M as w,c as T,s as D}from"./MenuDrawer.54bae0aa.js";import{_ as S}from"./index.c38c7de5.js";import{x as F,aI as x,c2 as B,Y as n,z as M,A as k,a0 as t,a3 as a,X as v,ab as A}from"./vendor.041d4bc7.js";import"./BasicForm.5b4e187b.js";import"./index.8a676b72.js";import"./index.a0c3ab5a.js";import"./index.724f1992.js";import"./useAttrs.374c949f.js";import"./useWindowSizeFn.b4a2eb84.js";import"./uuid.2b29000c.js";import"./download.0159c5b0.js";import"./base64Conver.bb012c73.js";import"./index.eae7ea3e.js";import"./useForm.d6410a30.js";import"./clickOutside.2de8acc0.js";const E=F({name:"MenuManagement",components:{ElButton:x,ElTableColumn:B,BasicTable:h,MenuDrawer:w,TableAction:_},setup(){const[e,{openDrawer:s}]=g(),[u,{reload:d,expandAll:m}]=j({title:"\u83DC\u5355\u5217\u8868",api:C,columns:T,formConfig:{labelWidth:120,schemas:D},pagination:void 0,striped:!1,useSearchForm:!0,showTableSetting:!0,border:!0,showIndexColumn:!1,actionColumn:{width:80,label:"\u64CD\u4F5C",prop:"action",isSlot:!0,fixed:void 0}});function p(){s(!0,{isUpdate:!1})}function r(o){s(!0,{record:o,isUpdate:!0})}function i(o){console.log(o)}function c(){d()}function l(){v(m)}return{registerTable:u,registerDrawer:e,handleCreate:p,handleEdit:r,handleDelete:i,handleSuccess:c,onFetchSuccess:l}}}),y=A(" \u65B0\u589E\u83DC\u5355 ");function R(e,s,u,d,m,p){const r=n("el-button"),i=n("TableAction"),c=n("el-table-column"),l=n("BasicTable"),o=n("MenuDrawer");return M(),k("div",null,[t(l,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:a(()=>[t(r,{type:"primary",onClick:e.handleCreate},{default:a(()=>[y]),_:1},8,["onClick"])]),action:a(b=>[t(c,{lebel:b.label,prop:b.prop},{default:a(f=>[t(i,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f.row)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,f.row)}}]},null,8,["actions"])]),_:2},1032,["lebel","prop"])]),_:1},8,["onRegister","onFetchSuccess"]),t(o,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var ee=S(E,[["render",R]]);export{ee as default};
