import{B as a,a as n}from"./index.d08a4a2f.js";import{B as c}from"./index.595488ed.js";import{d as l,_ as u,e as p,o as f,j as d,i as B,g as _,h as g,aB as w}from"./index.a3be5a06.js";import{u as F}from"./useForm.b48ee51d.js";import"./index.2b6d2952.js";import"./index.80d0f5e3.js";import"./index.6215c19b.js";import"./tsxHelper.28d473f4.js";import"./index.f722e5a3.js";import"./index.a49e7427.js";import"./row.2d75f628.js";import"./drawer.470a0bec.js";import"./card.6af47b45.js";import"./index.eb8ca85c.js";import"./index.92383e79.js";import"./index.99dc64d9.js";import"./isEqual.db5beb94.js";import"./_baseIsEqual.5fab7397.js";import"./form-item.7e3ec432.js";import"./dropdown.817d847e.js";import"./index.019e5707.js";import"./use-dialog.b591a60e.js";import"./index.d49960e2.js";import"./index.dc1c91ef.js";import"./useWindowSizeFn.2567e0b4.js";import"./refs.11e1edb5.js";import"./index.a791c5bd.js";import"./index.2fc3658f.js";import"./_baseUniq.33ff9dfc.js";import"./index.c1f50941.js";import"./index.aaa68a5a.js";import"./index.e6855c9a.js";import"./index.21e5a1a6.js";import"./index.5461c74f.js";import"./index.c505a9d5.js";const h=l({components:{BasicDrawer:a,BasicForm:c},setup(){const o=[{field:"field1",component:"ElInput",label:"\u5B57\u6BB51",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"ElInput",label:"\u5B57\u6BB52",colProps:{span:12}}],[t,{setFieldsValue:e}]=F({schemas:o,showActionButtonGroup:!1,actionColProps:{span:24}}),[i]=n(r=>{e({field2:r.data,field1:r.info})});return{register:i,schemas:o,registerForm:t}}});function D(o,t,e,i,r,$){const s=p("BasicForm"),m=p("BasicDrawer");return f(),d(m,w(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:B(()=>[_("div",null,[g(s,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}var io=u(h,[["render",D]]);export{io as default};
