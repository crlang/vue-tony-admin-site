import{u as s}from"./useECharts.f4123a5a.js";import{a}from"./index.904f788a.js";import{_ as i}from"./index.16f9732e.js";import{y as p,a as n,q as c,z as d,A as u,Y as m}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-echarts.948b204b.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-element-plus.e1a09009.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./ex-pkg-@iconify.345c6dc9.js";const f=p({props:{width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=n(null),{setOptions:r}=s(t);return c(()=>{r({tooltip:{trigger:"item"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{left:"1%",right:"1%",top:"3%",bottom:"0",containLabel:!0},series:[{data:a(7),type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}]})}),{chartRef:t}}});function g(e,t,r,o,l,h){return d(),u("div",{ref:"chartRef",style:m({width:e.width,height:e.height})},null,4)}var A=i(f,[["render",g]]);export{A as default};
