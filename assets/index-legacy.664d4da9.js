System.register(["./index-legacy.eb618289.js","./index-legacy.cd308252.js","./index-legacy.cdf18f3b.js","./tsxHelper-legacy.185109f0.js","./index-legacy.81dff364.js","./index-legacy.31fc35dc.js","./index-legacy.0f3671f3.js"],(function(e){"use strict";var n,t,l,r,c,i,u,o,s,f,a,d,g,m;return{setters:[function(e){n=e.C},function(e){t=e._,l=e.d,r=e.z,c=e.r,i=e.dP,u=e.e,o=e.o,s=e.j,f=e.i,a=e.h,d=e.m,g=e.t,m=e.g},function(){},function(){},function(){},function(){},function(){}],execute:function(){var y=l({components:{ElButton:r,CollapseContainer:n},setup:function(){var e=c(null),n=i(),t=n.enter,l=n.toggle,r=n.exit,u=n.isFullscreen;return{enter:t,toggleDom:i(e).toggle,toggle:l,isFullscreen:u,exit:r,domRef:e}}}),C=d("Enter Window Full Screen"),p=d("Toggle Window Full Screen"),x=d("Exit Window Full Screen"),k=d("Enter Dom Full Screen"),w={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},F=d("Exit Dom Full Screen");e("default",t(y,[["render",function(e,n,t,l,r,c){var i=u("el-button"),y=u("CollapseContainer"),j=u("PageWrapper");return o(),s(j,{title:"全屏示例"},{default:f((function(){return[a(y,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:f((function(){return[a(i,{type:"primary",onClick:e.enter,class:"mr-2"},{default:f((function(){return[C]})),_:1},8,["onClick"]),a(i,{type:"success",onClick:e.toggle,class:"mr-2"},{default:f((function(){return[p]})),_:1},8,["onClick"]),a(i,{type:"danger",onClick:e.exit,class:"mr-2"},{default:f((function(){return[x]})),_:1},8,["onClick"]),d(" Current State: "+g(e.isFullscreen),1)]})),_:1}),a(y,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:f((function(){return[a(i,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:f((function(){return[k]})),_:1},8,["onClick"])]})),_:1}),m("div",w,[a(i,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:f((function(){return[F]})),_:1},8,["onClick"])],512)]})),_:1})}]]))}}}));