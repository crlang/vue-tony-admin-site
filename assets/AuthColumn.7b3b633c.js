import{B as p}from"./TableImg.150d635b.js";import{u as n}from"./useTable.1425b7cb.js";import{d as c}from"./table.089cdee9.js";import{_ as m,f as l}from"./index.b3c9ad7f.js";import{y as d,Z as b,z as j,A as f,R as F}from"./ex-pkg-@vue.dfd8e273.js";import"./BasicForm.e23a97e1.js";import"./index.a1d19e61.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-element-plus.1726aa79.js";import"./ex-pkg-@element-plus.3c8245e2.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./index.ec087bd6.js";import"./index.46c5c8ac.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./index.4cd5987a.js";import"./index.755f7294.js";import"./tsxHelper.88158ea5.js";import"./index.cd4e42f7.js";import"./useTimeout.be9115ef.js";import"./propTypes.a1efa9e6.js";import"./download.37b1865e.js";import"./base64Conver.bb012c73.js";import"./index.bca35d58.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./index.b685e481.js";import"./useCopyToClipboard.b484edcb.js";import"./useForm.48835dfb.js";import"./index.2db0f4ce.js";import"./ex-pkg-@iconify.345c6dc9.js";const x=d({components:{BasicTable:p},setup(){const{createConfirm:t,createMessage:o}=l(),u=[{label:"\u7F16\u53F7",prop:"no",width:100},{label:"\u59D3\u540D",prop:"name",auth:"test"},{label:"\u72B6\u6001",prop:"status"},{label:"\u5730\u5740",prop:"address",auth:"admin",ifShow:!0},{label:"\u5F00\u59CB\u65F6\u95F4",prop:"beginTime"},{label:"\u7ED3\u675F\u65F6\u95F4",prop:"endTime"},{actions:[{text:"\u542F\u7528",callback:s,auth:"admin"},{text:"\u7F16\u8F91",callback:i,auth:"other"},{text:"\u5220\u9664",callback:r,auth:"admin"}]}],[a]=n({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:u,border:!0});function i({row:e}){console.table("\u70B9\u51FB\u4E86\u7F16\u8F91",e)}function r({row:e}){console.table("\u70B9\u51FB\u4E86\u5220\u9664",e),t({title:"\u6E29\u99A8\u63D0\u793A",content:"\u662F\u5426\u5220\u9664\u5F53\u524D\u6587\u4EF6\uFF1F",type:"warning"}).then(()=>{o.success("\u5220\u9664\u5B8C\u6210")}).catch(()=>{o.info("\u53D6\u6D88\u5220\u9664")})}function s({row:e}){console.table("\u70B9\u51FB\u4E86\u542F\u7528",e)}return{registerTable:a}}}),g={class:"p-4"};function B(t,o,u,a,i,r){const s=b("BasicTable");return j(),f("div",g,[F(s,{onRegister:t.registerTable},null,8,["onRegister"])])}var Y=m(x,[["render",B]]);export{Y as default};
