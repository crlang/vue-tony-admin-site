var _=(t,p,r)=>new Promise((s,a)=>{var e=o=>{try{n(r.next(o))}catch(l){a(l)}},i=o=>{try{n(r.throw(o))}catch(l){a(l)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(e,i);n((r=r.apply(t,p)).next())});import{B as h}from"./index.595488ed.js";import{C as v}from"./index.27ff97b2.js";import{_ as $,d as k,y,r as E,e as u,o as d,j as f,i as m,h as B,k as b,m as C}from"./index.a3be5a06.js";import{u as P}from"./useForm.b48ee51d.js";import"./index.dc1c91ef.js";import"./index.a49e7427.js";import"./row.2d75f628.js";import"./drawer.470a0bec.js";import"./card.6af47b45.js";import"./index.eb8ca85c.js";import"./index.92383e79.js";import"./index.f722e5a3.js";import"./index.99dc64d9.js";import"./isEqual.db5beb94.js";import"./_baseIsEqual.5fab7397.js";import"./form-item.7e3ec432.js";import"./dropdown.817d847e.js";import"./index.6215c19b.js";import"./tsxHelper.28d473f4.js";import"./useWindowSizeFn.2567e0b4.js";import"./index.2b6d2952.js";import"./index.80d0f5e3.js";import"./index.d49960e2.js";import"./refs.11e1edb5.js";import"./use-dialog.b591a60e.js";import"./index.a791c5bd.js";import"./index.2fc3658f.js";import"./_baseUniq.33ff9dfc.js";import"./index.c1f50941.js";import"./index.aaa68a5a.js";import"./index.e6855c9a.js";import"./index.21e5a1a6.js";import"./index.5461c74f.js";import"./index.c505a9d5.js";import"./index.588faf9f.js";import"./index.82227f26.js";const F=k({components:{CollapseContainer:v,BasicForm:h,ElButton:y},setup(){const[t,{appendSchemaByField:p,removeSchemaByField:r,validate:s}]=P({schemas:[{field:"field0a",component:"ElInput",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"ElInput",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"ElInput",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColProps:{span:24}});function a(){return _(this,null,function*(){try{yield s()}catch(o){}})}const e=E(1);function i(){p({field:`field${e.value}a`,component:"ElInput",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),p({field:`field${e.value}b`,component:"ElInput",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),p({field:`${e.value}`,component:"ElInput",label:" ",colProps:{span:8},slot:"add"},""),e.value++}function n(o){r([`field${o}a`,`field${o}b`,`${o}`]),e.value--}return{register:t,handleSubmit:a,add:i,del:n}}}),g=C(" + "),I=C(" - ");function S(t,p,r,s,a,e){const i=u("el-button"),n=u("BasicForm"),o=u("CollapseContainer"),l=u("PageWrapper");return d(),f(l,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:m(()=>[B(o,{title:"\u8868\u5355\u589E\u5220"},{default:m(()=>[B(n,{onRegister:t.register,onSubmit:t.handleSubmit},{add:m(({field:c})=>[Number(c)===0?(d(),f(i,{key:0,style:{width:"42px"},onClick:t.add},{default:m(()=>[g]),_:1},8,["onClick"])):b("",!0),c>0?(d(),f(i,{key:1,style:{width:"42px"},onClick:q=>t.del(c)},{default:m(()=>[I]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var _o=$(F,[["render",S]]);export{_o as default};
