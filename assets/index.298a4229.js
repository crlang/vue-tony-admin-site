import{B as P}from"./index.fcad4ece.js";import{C as R}from"./index.d6eee18e.js";import{dg as y,_ as E,r as m,c as d,dh as C,b as i,d as L,e as n,o as r,j as c,i as l,h as s,f as A,bm as _,am as B,z as O}from"./index.b263d89e.js";import{A as w}from"./index.00874e64.js";import{b as W}from"./data.8aa5f3f1.js";import{a as D,E as H}from"./index.2486a222.js";import"./index.528a2bb8.js";import"./index.1c7c0cd7.js";import"./row.e3bb9b75.js";import"./drawer.95bcb9ff.js";import"./card.86ff9530.js";import"./index.ef26d884.js";import"./isEqual.2e3b6ef4.js";import"./_baseIsEqual.0e612cfa.js";import"./index.ee4e75a5.js";import"./form-item.337e4360.js";import"./dropdown.109c4d5b.js";import"./index.b8d50620.js";import"./tsxHelper.c64d0d27.js";import"./useWindowSizeFn.159736d7.js";import"./index.b816e23f.js";import"./index.80d0f5e3.js";import"./index.53cddd5b.js";import"./refs.63e616a9.js";import"./use-dialog.adf6f7df.js";import"./index.0bf11fad.js";import"./index.7bce58f8.js";import"./index.6970fc55.js";import"./_baseUniq.82ba82ab.js";import"./index.2866cdc9.js";import"./index.dfd5a36d.js";import"./index.3bb3a281.js";import"./index.2609c49e.js";import"./index.1cc837a8.js";import"./index.a766b686.js";import"./index.a77e9094.js";import"./index.2540fdd7.js";const M=e=>y.get({url:"/select/getDemoOptions",params:e}),F=m([]),g=m([]),b=m([]);for(let e=1;e<10;e++)b.value.push({label:"\u9009\u9879"+e,value:`${e}`});const j=d(()=>C(i(b)).map(e=>(e.disabled=i(g).indexOf(e.value)!==-1,e))),z=d(()=>C(i(b)).map(e=>(e.disabled=i(F).indexOf(e.value)!==-1,e))),N=L({components:{ElSelect:D,ElOption:H,BasicForm:P,CollapseContainer:R,ApiSelect:w},setup(){const{createMessage:e}=O(),p=m(""),h=d(()=>({keyword:i(p)}));function v(u){u!==""&&(p.value=u)}return{basicSchemas:W,optionsListApi:M,optionsA:j,optionsB:z,valueSelectA:F,valueSelectB:g,handleRemoteSearch:v,searchParams:h,handleReset:()=>{p.value=""},handleSubmit:()=>{e.success("submit success!")}}}});function q(e,p,h,v,u,G){const f=n("el-option"),S=n("el-select"),V=n("ApiSelect"),U=n("BasicForm"),k=n("CollapseContainer"),$=n("PageWrapper");return r(),c($,{title:"\u8868\u5355\u57FA\u7840\u793A\u4F8B",contentFullHeight:""},{default:l(()=>[s(k,{title:"\u57FA\u7840\u793A\u4F8B"},{default:l(()=>[s(U,{labelWidth:200,schemas:e.basicSchemas,colProps:{span:16},actionColProps:{span:16},onSubmit:e.handleSubmit,onReset:e.handleReset},{selectA:l(({model:a,field:t})=>[s(S,{multiple:"",modelValue:a[t],"onUpdate:modelValue":o=>a[t]=o,onChange:o=>e.valueSelectA=a[t],clearable:""},{default:l(()=>[(r(!0),A(B,null,_(e.optionsA,o=>(r(),c(f,{key:o.value,label:o.label,disabled:o.disabled,value:o.value},null,8,["label","disabled","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),selectB:l(({model:a,field:t})=>[s(S,{options:e.optionsB,multiple:"",modelValue:a[t],"onUpdate:modelValue":o=>a[t]=o,onChange:o=>e.valueSelectB=a[t],clearable:""},{default:l(()=>[(r(!0),A(B,null,_(e.optionsB,o=>(r(),c(f,{key:o.value,label:o.label,disabled:o.disabled,value:o.value},null,8,["label","disabled","value"]))),128))]),_:2},1032,["options","modelValue","onUpdate:modelValue","onChange"])]),localSearch:l(({model:a,field:t})=>[s(V,{api:e.optionsListApi,filterable:"",modelValue:a[t],"onUpdate:modelValue":o=>a[t]=o,resultField:"list",labelField:"name",valueField:"id"},null,8,["api","modelValue","onUpdate:modelValue"])]),remoteSearch:l(({model:a,field:t})=>[s(V,{api:e.optionsListApi,remote:"",filterable:"",modelValue:a[t],"onUpdate:modelValue":o=>a[t]=o,resultField:"list",labelField:"name",valueField:"id",params:e.searchParams,"remote-method":e.handleRemoteSearch},null,8,["api","modelValue","onUpdate:modelValue","params","remote-method"])]),_:1},8,["schemas","onSubmit","onReset"])]),_:1})]),_:1})}var $e=E(N,[["render",q]]);export{$e as default};
