System.register(["./index-legacy.fe7248f5.js"],(function(e){"use strict";var a,t,c;return{setters:[function(e){a=e.r,t=e.g,c=e.a}],execute:function(){e("g",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"day",a={},s=0;switch(e){case"week":s=7,a.xdata=["周一","周二","周三","周四","周五","周六","周日"];break;case"month":s=31,a.xdata=t(1,s,"","/12");break;case"quarter":s=3,a.xdata=t(1,s,"第","季度");break;case"year":s=12,a.xdata=t(1,s,"","月");break;default:s=24,a.xdata=t(0,s-1,"",":00")}return a.kdata={k1:c(s),k2:c(s),k3:c(s)},a.vdata=a.xdata.map((function(e,t){return{value:a.kdata.k1[t],name:e}})),a})),e("C",[{title:"访问数",subject:"当天的访问数量",desc:"新访问数",value:a(1e3,2e4),scale:a(-100,100),mix:a(1,100)},{title:"订单数",subject:"当天的订单数量",desc:"新订单数",value:a(1e3,2e4),scale:a(-100,100),mix:a(1,100)},{title:"成交数",subject:"当天的成交数量",desc:"新成交数",value:a(1e3,2e4),scale:a(-100,100),mix:a(1,100)}])}}}));