import{u as o}from"./useECharts.3938c1ae.js";import{a as i}from"./index.904f788a.js";import{d as n,r as s,Y as p,_ as u,o as d,f as l,J as c}from"./index.b263d89e.js";import"./useTimeout.f7502887.js";const f=n({props:{width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(t){const e=s(null),{setOptions:r}=o(e);return p(()=>{r({tooltip:{trigger:"axis"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{left:"1%",right:"1%",top:"3%",bottom:"0",containLabel:!0},series:[{data:i(7),type:"line"}]})}),{chartRef:e}}});function h(t,e,r,a,m,g){return d(),l("div",{ref:"chartRef",style:c({width:t.width,height:t.height})},null,4)}var C=u(f,[["render",h]]);export{C as default};
