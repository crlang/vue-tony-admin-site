import{B as u}from"./index.c941931d.js";import{d as c}from"./table.68f4ca20.js";import{_ as l,d,e as n,o as f,j as b,i as h,h as _,z as g}from"./index.a3be5a06.js";import{e as F}from"./data.64a3efbd.js";import{u as T}from"./useTable.1cb3667e.js";import"./index.595488ed.js";import"./index.dc1c91ef.js";import"./index.a49e7427.js";import"./row.2d75f628.js";import"./drawer.470a0bec.js";import"./card.6af47b45.js";import"./index.eb8ca85c.js";import"./index.92383e79.js";import"./index.f722e5a3.js";import"./index.99dc64d9.js";import"./isEqual.db5beb94.js";import"./_baseIsEqual.5fab7397.js";import"./form-item.7e3ec432.js";import"./dropdown.817d847e.js";import"./index.6215c19b.js";import"./tsxHelper.28d473f4.js";import"./useWindowSizeFn.2567e0b4.js";import"./index.2b6d2952.js";import"./index.80d0f5e3.js";import"./index.d49960e2.js";import"./refs.11e1edb5.js";import"./use-dialog.b591a60e.js";import"./index.a791c5bd.js";import"./index.2fc3658f.js";import"./_baseUniq.33ff9dfc.js";import"./index.c1f50941.js";import"./index.aaa68a5a.js";import"./index.e6855c9a.js";import"./index.21e5a1a6.js";import"./index.5461c74f.js";import"./index.c505a9d5.js";import"./domUtils.0dce6f1a.js";import"./index.4c86d7ee.js";import"./useForm.b48ee51d.js";const A=d({components:{BasicTable:u},setup(){const{createMessage:t}=g(),r=[...F(),{align:"right",actions:[{btnText:"\u542F\u7528",callback:o,auth:"admin"},{btnText:"\u7F16\u8F91",callback:a,auth:"other"},{btnText:"\u5220\u9664",callback:m,popConfirm:{title:"\u662F\u5426\u5220\u9664\uFF1F",type:"error"},auth:"admin"}]}],[i,{deleteTableDataRecord:p}]=T({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:r,border:!0});function a(){}function m({row:e},s){s==="confirm"&&(p(e.key),t.success("\u5220\u9664\u6210\u529F"))}function o(){}return{registerTable:i}}});function B(t,r,i,p,a,m){const o=n("BasicTable"),e=n("PageWrapper");return f(),b(e,null,{default:h(()=>[_(o,{onRegister:t.registerTable},null,8,["onRegister"])]),_:1})}var nt=l(A,[["render",B]]);export{nt as default};
