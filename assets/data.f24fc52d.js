import{r as e,g as t,a as s}from"./index.904f788a.js";const E=[{title:"\u8BBF\u95EE\u6570",subject:"\u5F53\u5929\u7684\u8BBF\u95EE\u6570\u91CF",desc:"\u65B0\u8BBF\u95EE\u6570",value:e(1e3,2e4),scale:e(-100,100),mix:e(1,100)},{title:"\u8BA2\u5355\u6570",subject:"\u5F53\u5929\u7684\u8BA2\u5355\u6570\u91CF",desc:"\u65B0\u8BA2\u5355\u6570",value:e(1e3,2e4),scale:e(-100,100),mix:e(1,100)},{title:"\u6210\u4EA4\u6570",subject:"\u5F53\u5929\u7684\u6210\u4EA4\u6570\u91CF",desc:"\u65B0\u6210\u4EA4\u6570",value:e(1e3,2e4),scale:e(-100,100),mix:e(1,100)}];function l(r="day"){const a={};let u=0;switch(r){case"week":u=7,a.xdata=["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D","\u5468\u65E5"];break;case"month":u=31,a.xdata=t(1,u,"","/12");break;case"quarter":u=3,a.xdata=t(1,u,"\u7B2C","\u5B63\u5EA6");break;case"year":u=12,a.xdata=t(1,u,"","\u6708");break;default:u=24,a.xdata=t(0,u-1,"",":00");break}return a.kdata={k1:s(u),k2:s(u),k3:s(u)},a.vdata=a.xdata.map((d,c)=>({value:a.kdata.k1[c],name:d})),a}export{E as C,l as g};
