import{B as u}from"./index.36cc6f18.js";import{c as d}from"./system.6ca597c5.js";import{u as f}from"./index.afc9bffe.js";import{R as b,c as h,s as _}from"./RoleDrawer.3744d5b0.js";import{_ as g,d as D,z as R,e as n,o as B,f as C,h as m,i as l,j as T}from"./index.a812ffa9.js";import{u as w}from"./useTable.2023cbe4.js";import"./index.7264ffb9.js";import"./index.80078828.js";import"./index.fbd5cbb3.js";import"./index.1a2dfbe3.js";import"./index.48be7fd2.js";import"./index.f3e99c90.js";import"./index.68f69cb3.js";import"./strings.2b325842.js";import"./isEqual.f6c0098b.js";import"./_baseIsEqual.bce9394a.js";import"./drawer.55be0fb4.js";import"./form-item.7fe87d07.js";import"./col.93f66016.js";import"./card.bf554046.js";import"./dropdown.01d4c192.js";import"./description.cf55f5f3.js";import"./index.6c72c066.js";import"./tsxHelper.25cd2f92.js";import"./useWindowSizeFn.1725b147.js";import"./index.ba82fa59.js";import"./index.00e0b22a.js";import"./index.fb19ae5d.js";import"./refs.7c70278f.js";import"./use-dialog.8523a096.js";import"./index.c76667f6.js";import"./index.b98834c9.js";import"./index.6808290a.js";import"./index.a7c381f2.js";import"./index.2b992e0e.js";import"./index.09c51ff0.js";import"./index.510e3cb5.js";import"./index.c6940f23.js";import"./domUtils.0dce6f1a.js";import"./index.c229c7c5.js";import"./useForm.e1145b7d.js";import"./index.6bf5f43d.js";import"./index.8e3037cc.js";import"./index.e4429517.js";const F=D({name:"RoleManagement",components:{ElButton:R,BasicTable:u,RoleDrawer:b},setup(){const[e,{openDrawer:o}]=f(),[p,{reload:s}]=w({title:"\u89D2\u8272\u5217\u8868",api:d,columns:[...h,{actions:[{iconName:"clarity:note-edit-line",btnText:"\u7F16\u8F91",callback:r},{iconName:"ep:delete",type:"danger",btnText:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u5220\u9664\uFF1F",type:"error"},callback:t}]}],formConfig:{labelWidth:120,schemas:_},useSearchForm:!0,border:!0});function c(){o(!0,{isUpdate:!1})}function r({row:a}){o(!0,{record:a,isUpdate:!0})}function t(){}function i(){s()}return{registerTable:p,registerDrawer:e,handleCreate:c,handleEdit:r,handleDelete:t,handleSuccess:i}}});function k(e,o,p,s,c,r){const t=n("el-button"),i=n("BasicTable"),a=n("RoleDrawer");return B(),C("div",null,[m(i,{onRegister:e.registerTable},{toolbar:l(()=>[m(t,{type:"primary",onClick:e.handleCreate},{default:l(()=>[T("\u65B0\u589E\u89D2\u8272")]),_:1},8,["onClick"])]),_:1},8,["onRegister"]),m(a,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const _e=g(F,[["render",k]]);export{_e as default};
