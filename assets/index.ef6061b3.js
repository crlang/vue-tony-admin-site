import{B as m}from"./TableImg.cb20c750.js";import{u as p}from"./useTable.13dff6e9.js";import{c as f}from"./system.4141d536.js";import{u as b}from"./index.2c44dcb3.js";import{R as j,c as h,s as _}from"./RoleDrawer.5a5f53f8.js";import{_ as g}from"./index.dea57c76.js";import{x as w,aK as x,X as a,z as B,A as C,$ as i,a2 as u,aa as D}from"./vendor.6c1ff918.js";import"./BasicForm.e762b6e5.js";import"./index.8d342d10.js";import"./index.8eeddf42.js";import"./index.14049971.js";import"./useAttrs.1cff00fd.js";import"./useWindowSizeFn.b326ae88.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.765012d5.js";import"./base64Conver.bb012c73.js";import"./index.87273d76.js";import"./useForm.51dec503.js";import"./index.238d148c.js";import"./onMountedOrActivated.3712f3d2.js";const R=w({name:"RoleManagement",components:{ElButton:x,BasicTable:m,RoleDrawer:j},setup(){const[e,{openDrawer:s}]=b(),[c,{reload:l}]=p({title:"\u89D2\u8272\u5217\u8868",api:f,columns:[...h,{actions:[{icon:"clarity:note-edit-line",callback:r},{icon:"ep:delete",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:t}}]}],formConfig:{labelWidth:120,schemas:_},useSearchForm:!0,showTableSetting:!0,border:!0,showIndexColumn:!1});function d(){s(!0,{isUpdate:!1})}function r(o){s(!0,{record:o,isUpdate:!0})}function t(o){console.log(o)}function n(){l()}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:r,handleDelete:t,handleSuccess:n}}}),T=D("\u65B0\u589E\u89D2\u8272");function S(e,s,c,l,d,r){const t=a("el-button"),n=a("BasicTable"),o=a("RoleDrawer");return B(),C("div",null,[i(n,{onRegister:e.registerTable},{toolbar:u(()=>[i(t,{type:"primary",onClick:e.handleCreate},{default:u(()=>[T]),_:1},8,["onClick"])]),_:1},8,["onRegister"]),i(o,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var H=g(R,[["render",S]]);export{H as default};
