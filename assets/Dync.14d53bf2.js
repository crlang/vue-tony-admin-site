import{u as d}from"./useECharts.f4123a5a.js";import{r as m}from"./index.904f788a.js";import{_ as u}from"./index.16f9732e.js";import{y as g,a as h,_ as x,q as y,z as b,A as j,Y as v}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-echarts.948b204b.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-element-plus.e1a09009.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./ex-pkg-@iconify.345c6dc9.js";const E=g({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 110px)"}},setup(){const a=h(null),{setOptions:p,getInstance:r,echarts:f}=d(a),n=[0,0,0,0,0,0,0,0,0,0];let o=0;const i=x({xAxis:{max:"dataMax"},legend:{show:!1},color:["#f00000"],yAxis:{type:"category",data:["Tony","Mary","John","Linda","Ben","Lilly","Kevin","James","Paul","Lisa"],inverse:!0,animationDuration:300,animationDurationUpdate:300},series:[{realtimeSort:!0,name:"\u70ED\u5EA6",type:"bar",data:n,itemStyle:{color:function(t){var e=[["#DCE35B","#45B649"],["#F5cF0D","#fa9203"],["#61dbe8","#0785de"],["#ff9717","#ff4518"],["#c0c0aa","#1cefff"],["#9CECFB","#0052D4"],["#3494E6","#EC6EAD"],["#ee0979","#ff6a00"],["#A770EF","#FDB99B"],["#fceabb","#f8b500"]],s=t.dataIndex;return t.dataIndex>=e.length&&(s=t.dataIndex-e.length),new f.graphic.LinearGradient(1,0,0,0,[{offset:0,color:e[s][0]},{offset:1,color:e[s][1]}])}},label:{show:!0,position:"right",valueAnimation:!0}}],animationDuration:0,animationDurationUpdate:3e3,animationEasing:"linear",animationEasingUpdate:"linear",graphic:{elements:[{type:"text",right:160,bottom:60,style:{text:o.toString(),font:"bolder 80px monospace",fill:"rgba(100, 100, 100, 0.25)"},z:100}]}});function c(){var e;for(var t=0;t<n.length;++t)n[t]+=m(1e3);(e=r())==null||e.setOption({series:[{type:"bar",data:n}]})}function l(t){var e;i.graphic.elements[0].style.text=t,(e=r())==null||e.setOption(i)}return y(()=>{p(i),setInterval(function(){c(),l(String(o+=1))},3e3)}),{chartRef:a}}});function k(a,p,r,f,n,o){return b(),j("div",{ref:"chartRef",style:v({height:a.height,width:a.width})},null,4)}var M=u(E,[["render",k]]);export{M as default};
