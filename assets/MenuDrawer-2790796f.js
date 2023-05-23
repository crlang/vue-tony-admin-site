var B=Object.defineProperty;var h=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var w=(e,t,o)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,g=(e,t)=>{for(var o in t||(t={}))D.call(t,o)&&w(e,o,t[o]);if(h)for(var o of h(t))V.call(t,o)&&w(e,o,t[o]);return e};var f=(e,t,o)=>new Promise((s,n)=>{var c=l=>{try{r(o.next(l))}catch(a){n(a)}},p=l=>{try{r(o.throw(l))}catch(a){n(a)}},r=l=>l.done?s(l.value):Promise.resolve(l.value).then(c,p);r((o=o.apply(e,t)).next())});import{B as R}from"./index-a82db265.js";import{B as F,a as M}from"./index-9d19a498.js";import{I as C}from"./index-e344f07d.js";import{d as N}from"./system-58567010.js";import{I as $}from"./index-a2d8523e.js";import{$ as k}from"./elementui-66980f2a.js";import{ab as v,E as G,r as T,f as q,u as P,ac as b,p as U,I as j,J as S,S as _,G as x}from"./vue-d691a816.js";import{u as z}from"./useForm-af19a7b1.js";import{_ as L}from"./index-795cdaa0.js";const ne=[{label:"菜单名称",prop:"menuName",width:200,align:"left"},{label:"图标",prop:"icon",width:100,customRender:({record:e})=>v($,{name:e.icon})},{label:"权限标识",prop:"permission",width:180},{label:"组件",prop:"component"},{label:"排序",prop:"orderNo",width:100},{label:"状态",prop:"status",width:100,customRender:({record:e})=>{const o=~~e.status===0,s=o?"success":"danger",n=o?"启用":"停用";return v(k,{type:s},()=>n)}},{label:"创建时间",prop:"createTime",width:180}],O=e=>e==="0",E=e=>e==="1",m=e=>e==="2",re=[{field:"menuName",label:"菜单名称",component:"ElInput",colProps:{span:8}},{field:"status",label:"状态",component:"ElSelect",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],A=[{field:"type",label:"菜单类型",component:"ElRadioButton",defaultValue:"0",componentProps:{options:[{label:"目录",value:"0"},{label:"菜单",value:"1"},{label:"按钮",value:"2"}]}},{field:"menuName",label:"菜单名称",component:"ElInput",required:!0},{field:"orderNo",label:"排序",component:"ElInputNumber",defaultValue:0,required:!0},{field:"icon",label:"图标",component:"ElSelect",slot:"icon",required:!0,ifShow:({values:e})=>!m(e.type)},{field:"routePath",label:"路由地址",component:"ElInput",required:!0,ifShow:({values:e})=>!m(e.type)},{field:"component",label:"组件路径",component:"ElInput",ifShow:({values:e})=>E(e.type)},{field:"permission",label:"权限标识",component:"ElInput",ifShow:({values:e})=>!O(e.type)},{field:"status",label:"状态",component:"ElRadioGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"禁用",value:"1"}]}},{field:"isExt",label:"是否外链",component:"ElRadioGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>!m(e.type)},{field:"keepalive",label:"是否缓存",component:"ElRadioGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>E(e.type)},{field:"show",label:"是否显示",component:"ElRadioGroup",defaultValue:"0",componentProps:{options:[{label:"是",value:"0"},{label:"否",value:"1"}]},ifShow:({values:e})=>!m(e.type)}],J=G({name:"MenuDrawer",components:{BasicDrawer:F,BasicForm:R,IconPicker:C},emits:["success","register"],setup(e,{emit:t}){const o=T(!0),[s,{resetFields:n,setFieldsValue:c,updateSchema:p,validate:r}]=z({labelWidth:100,schemas:A,showActionButtonGroup:!1,colProps:{span:24},actionColProps:{span:24}}),[l,{closeDrawer:a,changeConfirmLoading:i}]=M(u=>f(this,null,function*(){n(),i(!1),o.value=!!(u!=null&&u.isUpdate),P(o)&&c(g({},u.record));const I=yield N();p({field:"parentMenu",componentProps:{treeData:I}})})),d=q(()=>P(o)?"编辑菜单":"新增菜单");function y(){return f(this,null,function*(){try{yield r(),i(!0),a(),t("success")}finally{i(!1)}})}return{registerDrawer:l,registerForm:s,getTitle:d,handleSubmit:y}}});function W(e,t,o,s,n,c){const p=b("IconPicker"),r=b("BasicForm"),l=b("BasicDrawer");return U(),j(l,x(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,size:"500px",onConfirm:e.handleSubmit}),{default:S(()=>[_(r,{onRegister:e.registerForm},{icon:S(({model:a,field:i})=>[_(p,{modelValue:a[i],"onUpdate:modelValue":d=>a[i]=d},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onConfirm"])}const H=L(J,[["render",W]]),se=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));export{H as M,se as a,ne as c,re as s};
