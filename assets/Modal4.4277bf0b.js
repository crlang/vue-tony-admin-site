import{B as l,a as d}from"./index.e1f32d21.js";import{B as c}from"./BasicForm.a29f9983.js";import{u as m}from"./useForm.94072f41.js";import{_ as u}from"./index.ec0491db.js";import{y as f,a as j,U as b,Z as p,z as g,G as B,H as x,K as k,R as h,D as v}from"./ex-pkg-@vue.dfd8e273.js";import"./useAttrs.e78ff19a.js";import"./ex-pkg-element-plus.7627c250.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-vendor.0d33d667.js";import"./ex-pkg-xlsx.9db082f2.js";import"./ex-pkg-mockjs.907334ba.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./useWindowSizeFn.732207ab.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./index.51d433bf.js";import"./index.cb296287.js";import"./propTypes.525da5ca.js";import"./uuid.2b29000c.js";import"./download.de577928.js";import"./base64Conver.bb012c73.js";import"./index.b234c3eb.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./ex-pkg-@iconify.345c6dc9.js";const _=f({components:{BasicModal:l,BasicForm:c},props:{userData:{type:Object}},setup(o){const s=j({}),t=[{field:"field1",component:"ElInput",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"ElInput",label:"\u5B57\u6BB52",colProps:{span:24}}],[n]=m({labelWidth:120,schemas:t,showActionButtonGroup:!1,actionColOptions:{span:24}}),[a]=d(e=>{e&&i(e)});function i(e){console.log("Data Received",e),s.value={field2:e.data,field1:e.info}}function r(e){e&&o.userData&&b(()=>i(o.userData))}return{register:a,schemas:t,registerForm:n,model:s,handleVisibleChange:r}}}),C={class:"p-4"};function F(o,s,t,n,a,i){const r=p("BasicForm"),e=p("BasicModal");return g(),B(e,v(o.$attrs,{onRegister:o.register,title:"Modal Title",onVisibleChange:o.handleVisibleChange}),{default:x(()=>[k("div",C,[h(r,{onRegister:o.registerForm,model:o.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var J=u(_,[["render",F]]);export{J as default};
