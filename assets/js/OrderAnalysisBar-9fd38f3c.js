import{u as i}from"./useECharts-a0de299e.js";import{b as p}from"./props-8fda8f6c.js";import{g as n}from"./data-3f4173ed.js";import{_ as d}from"./index-034694ef.js";import{y as c,a as m,b as f,l as u,q as l,z as h,A as g,Y as k}from"./ex-pkg-@vue-6f720869.js";import"./useTimeout-deb974d8.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";import"./ex-pkg-echarts-c02c4717.js";import"./index-96ac3a29.js";import"./ex-pkg-element-plus-fdfdae45.js";const x=c({props:p,setup(t){const a=m(null),{setOptions:r}=i(a);f(()=>t.type,e=>{e&&s()});const s=()=>{const e=u(()=>{const{type:o}=t;return n(o)});r({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"category",data:e.value.xdata},yAxis:{type:"value"},grid:{left:"1%",right:"1%",top:"2%",bottom:0,containLabel:!0},series:[{data:e.value.kdata.k1,type:"bar",emphasis:{focus:"series"}},{data:e.value.kdata.k2,type:"bar",emphasis:{focus:"series"}},{data:e.value.kdata.k3,type:"bar",emphasis:{focus:"series"}}]})};return l(s),{chartRef:a}}});function y(t,a,r,s,e,o){return h(),g("div",{ref:"chartRef",style:k({height:t.height,width:t.width})},null,4)}var D=d(x,[["render",y]]);export{D as default};
