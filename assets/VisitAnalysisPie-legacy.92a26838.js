System.register(["./useECharts-legacy.7060bc9b.js","./props-legacy.c05789b3.js","./data-legacy.567c4cf5.js","./index-legacy.65fa1ffc.js","./useTimeout-legacy.fe277a35.js","./index-legacy.fe7248f5.js"],(function(e){"use strict";var t,n,r,i,a,u,c,s,f,o,l,d;return{setters:[function(e){t=e.u},function(e){n=e.b},function(e){r=e.g},function(e){i=e.d,a=e.r,u=e.w,c=e.c,s=e.Y,f=e._,o=e.o,l=e.f,d=e.J},function(){},function(){}],execute:function(){var g=i({props:n,setup:function(e){var n=a(null),i=t(n).setOptions;u((function(){return e.type}),(function(e){e&&f()}));var f=function(){var t=c((function(){var t=e.type;return r(t)}));i({tooltip:{trigger:"item"},series:[{name:"Tony",type:"pie",radius:"85%",center:["50%","50%"],data:t.value.vdata,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})};return s(f),{chartRef:n}}});e("default",f(g,[["render",function(e,t,n,r,i,a){return o(),l("div",{ref:"chartRef",style:d({height:e.height,width:e.width})},null,4)}]]))}}}));