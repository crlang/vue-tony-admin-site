import{_ as E,I as k,f as v}from"./index-034694ef.js";import{B as F}from"./BasicForm-7e56ab34.js";import{y as $,Z as n,z as t,G as u,H as r,L as s,R as x,K as a,A as m,a3 as d,F as f,Q as l,P as j,O as S}from"./ex-pkg-@vue-6f720869.js";import{d9 as A}from"./ex-pkg-vendor-a94c680b.js";import{P as L}from"./index-fe480704.js";import{a as I,L as T}from"./index-925e2872.js";import{af as P}from"./ex-pkg-element-plus-fdfdae45.js";import"./ex-pkg-mockjs-2c72399a.js";import"./index-504d29a3.js";import"./index-ccc912f1.js";import"./index-ff107243.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-f8d8829f.js";import"./index-d0007c65.js";import"./index-4566a42e.js";import"./tsxHelper-97245be0.js";import"./index-c7b8aefc.js";import"./useTimeout-deb974d8.js";import"./propTypes-7bd4f998.js";import"./download-1f1abd5f.js";import"./base64Conver-6d09fa87.js";import"./index-7fc3c83a.js";import"./index-c7eaf852.js";import"./useCopyToClipboard-963b5f35.js";const V=(()=>{const e=[];for(let i=0;i<6;i++)e.push({id:i,title:i+"-Tony Admin",description:["Tony","Vue3","Typescript"],content:"\u57FA\u4E8E Vue3, Vite2, TypeScript, Element Plus \u5B9E\u73B0\u7684\u4E00\u5957\u5B8C\u6574\u7684\u4F01\u4E1A\u7EA7\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",time:"2020-11-14 11:20"});return e})(),N=[{field:"field1",component:"ElInput",label:"\u9879\u76EE\u540D",colProps:{span:8},componentProps:{"prefix-icon":A,onChange:e=>{console.log(e)}}}];const W=$({components:{ElTag:P,Icon:k,PageWrapper:L,BasicForm:F,List:I,ListItem:T},setup(){const{createMessage:e}=v(),i=[{icon:"clarity:star-line",text:"156",color:"#018ffb"},{icon:"bx:bxs-like",text:"156",color:"#459ae8"},{icon:"bx:bxs-message-dots",text:"2",color:"#42d27d"}];function _(p){p.field1?e.success(JSON.stringify(p)):e.error(JSON.stringify(p))}return{prefixCls:"list-search",list:V,schemas:N,metaActions:i,handleSubmit:_}}});function w(e,i,_,p,z,D){const b=n("BasicForm"),C=n("el-tag"),g=n("Icon"),y=n("ListItem"),h=n("List"),B=n("PageWrapper");return t(),u(B,{class:s(e.prefixCls),title:"\u641C\u7D22\u5217\u8868"},{extra:r(()=>[x(b,{class:s(`${e.prefixCls}__header-form`),labelWidth:100,schemas:e.schemas,showActionButtonGroup:!1,autoSubmitOnEnter:"",onSubmit:e.handleSubmit},null,8,["class","schemas","onSubmit"])]),default:r(()=>[a("div",{class:s(`${e.prefixCls}__container`)},[x(h,null,{default:r(()=>[(t(!0),m(f,null,d(e.list,c=>(t(),u(y,{key:c.id},{title:r(()=>[a("p",{class:s(`${e.prefixCls}__title`)},l(c.title),3),a("div",null,[(t(!0),m(f,null,d(c.description,o=>(t(),u(C,{key:o,class:"mb-2 mr-2",size:"small"},{default:r(()=>[j(l(o),1)]),_:2},1024))),128))])]),description:r(()=>[a("div",{class:s(`${e.prefixCls}__content`)},l(c.content),3),a("div",{class:s(`${e.prefixCls}__action`)},[(t(!0),m(f,null,d(e.metaActions,o=>(t(),m("div",{key:o.icon,class:s(`${e.prefixCls}__action-item`)},[o.icon?(t(),u(g,{key:0,class:s(`${e.prefixCls}__action-icon`),icon:o.icon,color:o.color},null,8,["class","icon","color"])):S("",!0),j(" "+l(o.text),1)],2))),128)),a("span",{class:s(`${e.prefixCls}__time`)},l(c.time),3)],2)]),_:2},1024))),128))]),_:1})],2)]),_:1},8,["class"])}var ue=E(W,[["render",w],["__scopeId","data-v-4e45b53e"]]);export{ue as default};
