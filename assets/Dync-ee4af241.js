import{dx as d}from"./useECharts-7a772744.js";import{r as m}from"./index-0d5f064e.js";import{E as u,r as h,W as g,o as y,p as x,q as b,Z as E}from"./vue-d691a816.js";import{_ as v}from"./index-795cdaa0.js";import"./useTimeout-ff985c90.js";import"./elementui-66980f2a.js";const D=u({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 110px)"}},setup(){const a=h(null),{setOptions:l,getInstance:o,echarts:f}=d(a),n=[0,0,0,0,0,0,0,0,0,0];let r=0;const i=g({xAxis:{max:"dataMax"},legend:{show:!1},color:["#f00000"],yAxis:{type:"category",data:["Tony","Mary","John","Linda","Ben","Lilly","Kevin","James","Paul","Lisa"],inverse:!0,animationDuration:300,animationDurationUpdate:300},series:[{realtimeSort:!0,name:"热度",type:"bar",data:n,itemStyle:{color:function(e){var t=[["#DCE35B","#45B649"],["#F5cF0D","#fa9203"],["#61dbe8","#0785de"],["#ff9717","#ff4518"],["#c0c0aa","#1cefff"],["#9CECFB","#0052D4"],["#3494E6","#EC6EAD"],["#ee0979","#ff6a00"],["#A770EF","#FDB99B"],["#fceabb","#f8b500"]],s=e.dataIndex;return e.dataIndex>=t.length&&(s=e.dataIndex-t.length),new f.graphic.LinearGradient(1,0,0,0,[{offset:0,color:t[s][0]},{offset:1,color:t[s][1]}])}},label:{show:!0,position:"right",valueAnimation:!0}}],animationDuration:0,animationDurationUpdate:3e3,animationEasing:"linear",animationEasingUpdate:"linear",graphic:{elements:[{type:"text",right:160,bottom:60,style:{text:r.toString(),font:"bolder 80px monospace",fill:"rgba(100, 100, 100, 0.25)"},z:100}]}});function c(){var t;for(var e=0;e<n.length;++e)n[e]+=m(1e3);(t=o())==null||t.setOption({series:[{type:"bar",data:n}]})}function p(e){var t;i.graphic.elements[0].style.text=e,(t=o())==null||t.setOption(i)}return y(()=>{l(i),setInterval(function(){c(),p(String(r+=1))},3e3)}),{chartRef:a}}});function B(a,l,o,f,n,r){return x(),b("div",{ref:"chartRef",style:E({height:a.height,width:a.width})},null,4)}const I=v(D,[["render",B]]);export{I as default};
