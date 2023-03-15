import{B as C}from"./index.7264ffb9.js";import{B as g,a as v}from"./index.afc9bffe.js";import{I as P}from"./index.d8175388.js";import{d as _}from"./system.6ca597c5.js";import{I as S}from"./index.c229c7c5.js";import{E as y}from"./index.68f69cb3.js";import{bX as b,d as I,r as V,c as R,b as F,_ as M,e as d,o as k,k as N,i as E,h,aD as $}from"./index.a812ffa9.js";import{u as G}from"./useForm.e1145b7d.js";const K=[{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName",width:200,align:"left"},{label:"\u56FE\u6807",prop:"icon",width:100,customRender:({record:e})=>b(S,{name:e.icon})},{label:"\u6743\u9650\u6807\u8BC6",prop:"permission",width:180},{label:"\u7EC4\u4EF6",prop:"component"},{label:"\u6392\u5E8F",prop:"orderNo",width:100},{label:"\u72B6\u6001",prop:"status",width:100,customRender:({record:e})=>{const o=~~e.status===0,t=o?"success":"danger",l=o?"\u542F\u7528":"\u505C\u7528";return b(y,{type:t},()=>l)}},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:180}],T=e=>e==="0",w=e=>e==="1",r=e=>e==="2",Q=[{field:"menuName",label:"\u83DC\u5355\u540D\u79F0",component:"ElInput",colProps:{span:8}},{field:"status",label:"\u72B6\u6001",component:"ElSelect",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u505C\u7528",value:"1"}]},colProps:{span:8}}],q=[{field:"type",label:"\u83DC\u5355\u7C7B\u578B",component:"ElRadioButton",defaultValue:"0",componentProps:{options:[{label:"\u76EE\u5F55",value:"0"},{label:"\u83DC\u5355",value:"1"},{label:"\u6309\u94AE",value:"2"}]}},{field:"menuName",label:"\u83DC\u5355\u540D\u79F0",component:"ElInput",required:!0},{field:"orderNo",label:"\u6392\u5E8F",component:"ElInputNumber",defaultValue:0,required:!0},{field:"icon",label:"\u56FE\u6807",component:"ElSelect",slot:"icon",required:!0,ifShow:({values:e})=>!r(e.type)},{field:"routePath",label:"\u8DEF\u7531\u5730\u5740",component:"ElInput",required:!0,ifShow:({values:e})=>!r(e.type)},{field:"component",label:"\u7EC4\u4EF6\u8DEF\u5F84",component:"ElInput",ifShow:({values:e})=>w(e.type)},{field:"permission",label:"\u6743\u9650\u6807\u8BC6",component:"ElInput",ifShow:({values:e})=>!T(e.type)},{field:"status",label:"\u72B6\u6001",component:"ElRadioGroup",defaultValue:"0",componentProps:{options:[{label:"\u542F\u7528",value:"0"},{label:"\u7981\u7528",value:"1"}]}},{field:"isExt",label:"\u662F\u5426\u5916\u94FE",component:"ElRadioGroup",defaultValue:"0",componentProps:{options:[{label:"\u5426",value:"0"},{label:"\u662F",value:"1"}]},ifShow:({values:e})=>!r(e.type)},{field:"keepalive",label:"\u662F\u5426\u7F13\u5B58",component:"ElRadioGroup",defaultValue:"0",componentProps:{options:[{label:"\u5426",value:"0"},{label:"\u662F",value:"1"}]},ifShow:({values:e})=>w(e.type)},{field:"show",label:"\u662F\u5426\u663E\u793A",component:"ElRadioGroup",defaultValue:"0",componentProps:{options:[{label:"\u662F",value:"0"},{label:"\u5426",value:"1"}]},ifShow:({values:e})=>!r(e.type)}],A=I({name:"MenuDrawer",components:{BasicDrawer:g,BasicForm:C,IconPicker:P},emits:["success","register"],setup(e,{emit:s}){const o=V(!0),[t,{resetFields:l,setFieldsValue:f,updateSchema:i,validate:p}]=G({labelWidth:100,schemas:q,showActionButtonGroup:!1,colProps:{span:24},actionColProps:{span:24}}),[c,{closeDrawer:a,changeConfirmLoading:u}]=v(async n=>{l(),u(!1),o.value=!!(n!=null&&n.isUpdate),F(o)&&f({...n.record});const B=await _();i({field:"parentMenu",componentProps:{treeData:B}})}),m=R(()=>F(o)?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355");async function D(){try{await p(),u(!0),a(),s("success")}finally{u(!1)}}return{registerDrawer:c,registerForm:t,getTitle:m,handleSubmit:D}}});function U(e,s,o,t,l,f){const i=d("IconPicker"),p=d("BasicForm"),c=d("BasicDrawer");return k(),N(c,$(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,size:"500px",onConfirm:e.handleSubmit}),{default:E(()=>[h(p,{onRegister:e.registerForm},{icon:E(({model:a,field:u})=>[h(i,{modelValue:a[u],"onUpdate:modelValue":m=>a[u]=m},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onConfirm"])}const j=M(A,[["render",U]]),Y=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{j as M,Y as a,K as c,Q as s};
