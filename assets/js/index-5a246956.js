import{B as l}from"./TableImg-244764d7.js";import{u as d}from"./useTable-a6392c55.js";import{c as f}from"./system-405f3ae4.js";import{u as j}from"./index-99c79dc4.js";import{R as b,c as x,s as g}from"./RoleDrawer-09630d21.js";import{_}from"./index-034694ef.js";import{u as h}from"./ex-pkg-element-plus-fdfdae45.js";import{y as C,Z as n,z as R,A as T,R as i,H as u,P as w}from"./ex-pkg-@vue-6f720869.js";import"./BasicForm-7e56ab34.js";import"./index-504d29a3.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";import"./index-ccc912f1.js";import"./index-ff107243.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-f8d8829f.js";import"./index-d0007c65.js";import"./index-4566a42e.js";import"./tsxHelper-97245be0.js";import"./index-c7b8aefc.js";import"./useTimeout-deb974d8.js";import"./propTypes-7bd4f998.js";import"./download-1f1abd5f.js";import"./base64Conver-6d09fa87.js";import"./index-7fc3c83a.js";import"./index-c7eaf852.js";import"./useCopyToClipboard-963b5f35.js";import"./useForm-9a91b2d5.js";import"./index-fe480704.js";const B=C({name:"RoleManagement",components:{ElButton:h,BasicTable:l,RoleDrawer:b},setup(){const[e,{openDrawer:r}]=j(),[c,{reload:m}]=d({title:"\u89D2\u8272\u5217\u8868",api:f,columns:[...x,{actions:[{icon:"clarity:note-edit-line",text:"\u7F16\u8F91",callback:s},{icon:"ep:delete",text:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t}}]}],formConfig:{labelWidth:120,schemas:g},useSearchForm:!0,border:!0});function p(){r(!0,{isUpdate:!1})}function s({row:o}){r(!0,{record:o,isUpdate:!0})}function t({row:o}){console.table(o)}function a(){m()}return{registerTable:c,registerDrawer:e,handleCreate:p,handleEdit:s,handleDelete:t,handleSuccess:a}}}),D=w("\u65B0\u589E\u89D2\u8272");function k(e,r,c,m,p,s){const t=n("el-button"),a=n("BasicTable"),o=n("RoleDrawer");return R(),T("div",null,[i(a,{onRegister:e.registerTable},{toolbar:u(()=>[i(t,{type:"primary",onClick:e.handleCreate},{default:u(()=>[D]),_:1},8,["onClick"])]),_:1},8,["onRegister"]),i(o,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var re=_(B,[["render",k]]);export{re as default};
