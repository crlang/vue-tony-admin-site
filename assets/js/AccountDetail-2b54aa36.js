import{cI as j}from"./ex-pkg-vendor-bb3f8859.js";import{P as T}from"./index-103ae9c6.js";import{_ as B,V as K}from"./index-26bedde3.js";import{u as P,y as x,z as C}from"./ex-pkg-element-plus-f609432a.js";import{y as I,a as i,Z as r,z as l,G as h,H as t,R as o,K as p,A as _,a3 as b,Q as f,F as y,O as g,P as k}from"./ex-pkg-@vue-feb543c0.js";import"./ex-pkg-mockjs-ec7a233b.js";const z=I({name:"AccountDetail",components:{ElButton:P,ElTabs:x,ElTabPane:C,PageWrapper:T},setup(){var n;const e=j(),a=i((n=e.params)==null?void 0:n.id),c=i("detail"),{setTitle:d}=K();return d("\u8BE6\u60C5\uFF1A\u7528\u6237"+a.value),{userId:a,currentKey:c}}}),E=k("\u7981\u7528\u8D26\u53F7"),N=k("\u4FEE\u6539\u5BC6\u7801"),$={class:"pt-4 m-4"};function A(e,a,c,d,n,D){const u=r("el-button"),m=r("el-tab-pane"),v=r("el-tabs"),V=r("PageWrapper");return l(),h(V,{title:"\u7528\u6237"+e.userId+"\u7684\u8D44\u6599",description:"\u8FD9\u662F\u7528\u6237\u8D44\u6599\u8BE6\u60C5\u9875\u9762\u3002\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u6F14\u793A\u76F8\u540C\u8DEF\u7531\u5728tab\u4E2D\u6253\u5F00\u591A\u4E2A\u9875\u9762\u5E76\u4E14\u663E\u793A\u4E0D\u540C\u7684\u6570\u636E",headerClass:"py-0-imp",contentBackground:""},{toolbar:t(()=>[o(u,{size:"small",type:"danger"},{default:t(()=>[E]),_:1}),o(u,{size:"small",type:"primary"},{default:t(()=>[N]),_:1})]),extra:t(()=>[o(v,{type:"card",class:"mt-4",modelValue:e.currentKey,"onUpdate:modelValue":a[0]||(a[0]=s=>e.currentKey=s)},{default:t(()=>[o(m,{name:"detail",label:"\u7528\u6237\u8D44\u6599"}),o(m,{name:"logs",label:"\u64CD\u4F5C\u65E5\u5FD7"})]),_:1},8,["modelValue"])]),default:t(()=>[p("div",$,[e.currentKey=="detail"?(l(),_(y,{key:0},b(10,s=>p("div",{key:s},"\u8FD9\u662F\u7528\u6237"+f(e.userId)+"\u8D44\u6599Tab",1)),64)):g("",!0),e.currentKey=="logs"?(l(),_(y,{key:1},b(10,s=>p("div",{key:s},"\u8FD9\u662F\u7528\u6237"+f(e.userId)+"\u64CD\u4F5C\u65E5\u5FD7Tab",1)),64)):g("",!0)])]),_:1},8,["title"])}var L=B(z,[["render",A]]);export{L as default};
