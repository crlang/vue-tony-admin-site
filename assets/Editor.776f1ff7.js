import{B as l}from"./BasicForm.5b4e187b.js";import{_ as d,ab as f,f as b}from"./index.c38c7de5.js";import{M as j}from"./index.b5794734.js";import{P as _}from"./index.14ff926d.js";import{x as C,Y as t,z as h,Z as g,a3 as i,a0 as u,k as x}from"./vendor.041d4bc7.js";import"./index.8a676b72.js";import"./index.a0c3ab5a.js";import"./index.724f1992.js";import"./useAttrs.374c949f.js";import"./useWindowSizeFn.b4a2eb84.js";import"./uuid.2b29000c.js";import"./download.0159c5b0.js";import"./base64Conver.bb012c73.js";import"./index.eae7ea3e.js";import"./onMountedOrActivated.0709ef3e.js";import"./useMenuSetting.8bd75ac6.js";const k=C({components:{CollapseContainer:f,PageWrapper:_,BasicForm:l},setup(){const{createMessage:o}=b(),s=[{field:"title",component:"ElInput",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"ElInput",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:e,field:a})=>x(j,{value:e[a],onChange:n=>{e[a]=n}})}];function r(e){o.success("click search,values:"+JSON.stringify(e))}return{schemas:s,handleSubmit:r}}});function w(o,s,r,e,a,n){const c=t("BasicForm"),p=t("CollapseContainer"),m=t("PageWrapper");return h(),g(m,{title:"MarkDown\u7EC4\u4EF6\u7EC4\u5408Form\u793A\u4F8B"},{default:i(()=>[u(p,{title:"MarkDown\u8868\u5355"},{default:i(()=>[u(c,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var N=d(k,[["render",w]]);export{N as default};
