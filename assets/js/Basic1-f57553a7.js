import{u as s}from"./useECharts-a0de299e.js";import{a as o}from"./index-96ac3a29.js";import{_ as i}from"./index-034694ef.js";import{y as n,a as p,q as d,z as c,A as u,Y as m}from"./ex-pkg-@vue-6f720869.js";import"./useTimeout-deb974d8.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";import"./ex-pkg-echarts-c02c4717.js";import"./ex-pkg-element-plus-fdfdae45.js";const f=n({props:{width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const t=p(null),{setOptions:a}=s(t);return d(()=>{a({tooltip:{trigger:"axis"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{left:"1%",right:"1%",top:"3%",bottom:"0",containLabel:!0},series:[{data:o(7),type:"line"}]})}),{chartRef:t}}});function l(e,t,a,r,h,g){return c(),u("div",{ref:"chartRef",style:m({width:e.width,height:e.height})},null,4)}var $=i(f,[["render",l]]);export{$ as default};
