import{B as g,a as _}from"./index-b5118db3.js";import{_ as j}from"./index-c76c27a8.js";import{u as h}from"./ex-pkg-element-plus-387a9e67.js";import{y as k,a as c,b as B,Z as m,z as t,G as b,H as i,R as v,A as s,O as f,F as M,a3 as x,Q as y,D as C,P as F}from"./ex-pkg-@vue-6f720869.js";import"./useAttrs-fe96f36e.js";import"./ex-pkg-vendor-ad21d406.js";import"./ex-pkg-mockjs-d5ed3ada.js";import"./useWindowSizeFn-e2bb9137.js";import"./ex-pkg-@vueuse-7c1f2694.js";import"./index-c26878d4.js";import"./index-b5c2dac5.js";import"./tsxHelper-6b2f4741.js";import"./index-5b1d7164.js";import"./ex-pkg-@element-plus-8be47ecc.js";import"./useTimeout-a639f925.js";import"./ex-pkg-@iconify-9ec765d0.js";import"./ex-pkg-@popperjs-d61e97fc.js";const D=k({components:{ElButton:h,BasicModal:g},props:{modalValue:Boolean},setup(){const e=c(!0),o=c(10),[u,{setModalProps:a,redoModalHeight:d}]=_();B(()=>o.value,()=>{d()});function l(r){r&&(e.value=!0,a({loading:!0,confirmButton:{loading:!0}}),setTimeout(()=>{o.value=Math.round(Math.random()*30+5),e.value=!1,a({loading:!1,confirmButton:{loading:!1}})},3e3))}function n(){o.value=Math.round(Math.random()*20+10)}return{register:u,loading:e,handleShow:l,lines:o,setLines:n}}}),A=F("\u70B9\u6211\u66F4\u65B0\u5185\u5BB9"),V={key:0,class:"empty-tips"},w={key:1};function $(e,o,u,a,d,l){const n=m("el-button"),r=m("BasicModal");return t(),b(r,C(e.$attrs,{destroyOnClose:"",onRegister:e.register,title:"Modal Title",helpMessage:["\u63D0\u793A1","\u63D0\u793A2"],onVisibleChange:e.handleShow}),{insertFooter:i(()=>[v(n,{type:"danger",onClick:e.setLines,disabled:e.loading},{default:i(()=>[A]),_:1},8,["onClick","disabled"])]),default:i(()=>[e.loading?(t(),s("div",V,"\u52A0\u8F7D\u4E2D\uFF0C\u7A0D\u7B493\u79D2\u2026\u2026")):f("",!0),e.loading?f("",!0):(t(),s("ul",w,[(t(!0),s(M,null,x(e.lines,p=>(t(),s("li",{key:p},"\u52A0\u8F7D\u5B8C\u6210"+y(p)+"\uFF01",1))),128))]))]),_:1},16,["onRegister","onVisibleChange"])}var K=j(D,[["render",$],["__scopeId","data-v-2a5cecb6"]]);export{K as default};
