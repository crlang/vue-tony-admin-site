System.register(["./useECharts-legacy-dc968bd7.js","./index-legacy-7aa4d791.js","./index-legacy-db4b469e.js","./useTimeout-legacy-ae97b676.js"],(function(t){"use strict";var e,i,n,r,u,a,s,o,c;return{setters:[function(t){e=t.u},function(t){i=t.a},function(t){n=t.d,r=t.r,u=t.Z,a=t._,s=t.o,o=t.f,c=t.G},function(t,e){}],execute:function(){var d=n({props:{width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup:function(t){var n=r(null),a=e(n).setOptions;return u((function(){a({tooltip:{trigger:"axis"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{left:"1%",right:"1%",top:"3%",bottom:"0",containLabel:!0},series:[{data:i(7),type:"line"}]})})),{chartRef:n}}});t("default",a(d,[["render",function(t,e,i,n,r,u){return s(),o("div",{ref:"chartRef",style:c({width:t.width,height:t.height})},null,4)}]]))}}}));