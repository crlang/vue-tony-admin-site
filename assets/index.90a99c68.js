import{B as b}from"./TableImg.e594892d.js";import{u as f}from"./useTable.b1bdaa18.js";import{d as j}from"./system.73aab648.js";import{u as g}from"./index.13018749.js";import{M as x,c as h,s as k}from"./MenuDrawer.149ccc75.js";import{_}from"./index.54cb4205.js";import{z as C}from"./ex-pkg-element-plus.e1a09009.js";import{y as w,Z as a,z as D,A as S,R as i,H as d,U as T,P as B}from"./ex-pkg-@vue.dfd8e273.js";import"./BasicForm.dbe2a646.js";import"./index.6e61b516.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./index.fa6837be.js";import"./index.e1bb3c50.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./propTypes.6bd760c6.js";import"./download.47e0cd9b.js";import"./base64Conver.bb012c73.js";import"./index.ff321de2.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./useForm.e09ab490.js";import"./index.d0dc1aab.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const F=w({name:"MenuManagement",components:{ElButton:C,BasicTable:b,MenuDrawer:x},setup(){const[e,{openDrawer:t}]=g(),[c,{reload:p,expandAll:u}]=f({title:"\u83DC\u5355\u5217\u8868",api:j,columns:[...h,{actions:[{icon:"clarity:note-edit-line",callback:o},{icon:"ep:delete",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:s}}]}],formConfig:{labelWidth:120,schemas:k},useSearchForm:!0,border:!0});function m(){t(!0,{isUpdate:!1})}function o({row:n}){t(!0,{record:n,isUpdate:!0})}function s({row:n}){console.log(n)}function r(){p()}function l(){T(u)}return{registerTable:c,registerDrawer:e,handleCreate:m,handleEdit:o,handleDelete:s,handleSuccess:r,onFetchSuccess:l}}}),v=B(" \u65B0\u589E\u83DC\u5355 ");function M(e,t,c,p,u,m){const o=a("el-button"),s=a("BasicTable"),r=a("MenuDrawer");return D(),S("div",null,[i(s,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:d(()=>[i(o,{type:"primary",onClick:e.handleCreate},{default:d(()=>[v]),_:1},8,["onClick"])]),_:1},8,["onRegister","onFetchSuccess"]),i(r,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var re=_(F,[["render",M]]);export{re as default};
