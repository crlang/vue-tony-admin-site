System.register(["./useECharts-legacy.7060bc9b.js","./index-legacy.fe7248f5.js","./index-legacy.65fa1ffc.js","./useTimeout-legacy.fe277a35.js"],(function(e){"use strict";var t,a,i,n,o,l,r,s,f;return{setters:[function(e){t=e.u},function(e){a=e.a},function(e){i=e._,n=e.d,o=e.r,l=e.Y,r=e.o,s=e.f,f=e.J},function(){}],execute:function(){var c=n({props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 110px)"}},setup:function(){var e=o(null),i=t(e).setOptions,n=a(10),r=["原因1","原因2","原因3","原因4","原因5","原因6","原因7","原因8","原因9","原因10"];return l((function(){i({backgroundColor:"#0f375f",title:[{text:"各渠道投诉占比",left:"2%",top:"1%",textStyle:{color:"#fff",fontSize:14}},{text:"投诉原因TOP10",left:"40%",top:"1%",textStyle:{color:"#fff",fontSize:14}},{text:"各级别投诉占比",left:"2%",top:"50%",textStyle:{color:"#fff",fontSize:14}}],grid:[{left:"50%",top:"7%",width:"45%",height:"90%"}],tooltip:{formatter:"{b} ({c})"},xAxis:[{gridIndex:0,axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},axisLine:{show:!1}}],yAxis:[{gridIndex:0,interval:0,data:r.reverse(),axisTick:{show:!1},axisLabel:{show:!0},splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#6173a3"}}}],series:[{name:"各渠道投诉占比",type:"pie",radius:"30%",center:["22%","25%"],data:[{value:335,name:"客服电话"},{value:310,name:"奥迪官网"},{value:234,name:"媒体曝光"},{value:135,name:"质检总局"},{value:105,name:"其他"}],labelLine:{show:!1},label:{show:!0,formatter:"{b} \n ({d}%)",color:"#B1B9D3"}},{name:"各级别投诉占比",type:"pie",radius:"30%",center:["22%","75%"],labelLine:{show:!1},data:[{value:335,name:"A级"},{value:310,name:"B级"},{value:234,name:"C级"},{value:135,name:"D级"}],label:{show:!0,formatter:"{b} \n ({d}%)",color:"#B1B9D3"}},{name:"投诉原因TOP10",type:"bar",xAxisIndex:0,yAxisIndex:0,barWidth:"45%",itemStyle:{color:"#86c9f4"},label:{show:!0,position:"right",color:"#9EA7C4"},data:n.sort()}]})})),{chartRef:e}}});e("default",i(c,[["render",function(e,t,a,i,n,o){return r(),s("div",{ref:"chartRef",style:f({height:e.height,width:e.width})},null,4)}]]))}}}));