import{B as d}from"./BasicForm.b4f64650.js";import{_ as l,aa as f,f as j}from"./index.16f9732e.js";import{T as b}from"./index.ad06afc0.js";import{P as x}from"./index.04776c9c.js";import{y as C,Z as o,z as g,G as _,H as i,R as p,a4 as k}from"./ex-pkg-@vue.dfd8e273.js";import"./index.265a67f3.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-element-plus.e1a09009.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./index.8c22b3cc.js";import"./index.83e77832.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./propTypes.6bd760c6.js";import"./uuid.2b29000c.js";import"./download.76630d52.js";import"./base64Conver.bb012c73.js";import"./index.944b2d86.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-tinymce.604649ee.js";import"./onMountedOrActivated.67461842.js";const h=C({components:{CollapseContainer:f,PageWrapper:x,BasicForm:d},setup(){const{createMessage:t}=j(),r=[{field:"title",component:"ElInput",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"ElInput",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:s})=>k(b,{modelValue:e[s],onChange:n=>{e[s]=n}})}];function a(e){t.success(JSON.stringify(e))}return{schemas:r,handleSubmit:a}}});function B(t,r,a,e,s,n){const m=o("BasicForm"),u=o("CollapseContainer"),c=o("PageWrapper");return g(),_(c,{title:"\u5BCC\u6587\u672C\u5D4C\u5165\u8868\u5355\u793A\u4F8B"},{default:i(()=>[p(u,{title:"\u5BCC\u6587\u672C\u8868\u5355"},{default:i(()=>[p(m,{labelWidth:100,schemas:t.schemas,actionColOptions:{span:24},onSubmit:t.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var L=l(h,[["render",B]]);export{L as default};
