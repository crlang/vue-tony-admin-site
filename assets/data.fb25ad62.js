var c=(e,u,l)=>new Promise((n,a)=>{var r=o=>{try{p(l.next(o))}catch(t){a(t)}},B=o=>{try{p(l.throw(o))}catch(t){a(t)}},p=o=>o.done?n(o.value):Promise.resolve(o.value).then(r,B);p((l=l.apply(e,u)).next())});import{ar as f}from"./index.dea57c76.js";var i;(function(e){e.OPTIONS_LIST="/select/getDemoOptions"})(i||(i={}));const E=e=>f.get({url:i.OPTIONS_LIST,params:e}),s=[{id:"guangdong",label:"\u5E7F\u4E1C\u7701",value:"1",key:"1"},{id:"jiangsu",label:"\u6C5F\u82CF\u7701",value:"2",key:"2"}],d={guangdong:[{label:"\u73E0\u6D77\u5E02",value:"1",key:"1"},{label:"\u6DF1\u5733\u5E02",value:"2",key:"2"},{label:"\u5E7F\u5DDE\u5E02",value:"3",key:"3"}],jiangsu:[{label:"\u5357\u4EAC\u5E02",value:"1",key:"1"},{label:"\u65E0\u9521\u5E02",value:"2",key:"2"},{label:"\u82CF\u5DDE\u5E02",value:"3",key:"3"}]},P=[{field:"divider-basic",component:"ElDivider",label:"\u57FA\u7840\u5B57\u6BB5"},{field:"field1",component:"ElInput",label:"\u5B57\u6BB51",required:!0,colProps:{span:8},subLabel:"( \u9009\u586B )",componentProps:()=>({placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:e=>{console.log(e)}}),renderComponentContent:()=>({prefix:()=>"Be",suffix:()=>"Af"})},{field:"field2",component:"ElInput",label:"\u5B57\u6BB52",required:!0,defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{console.log(e)}},prepend:"\u7B2C",append:"\u5929"},{field:"field3",component:"ElDatePicker",label:"\u5B57\u6BB53",colProps:{span:8},componentProps:{type:"date"}},{field:"field4",component:"ElSelect",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"ElCheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field6",component:"ElRadio",label:"\u5B57\u6BB56",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"ElRadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"ElCheckbox",label:"\u5B57\u6BB58",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"ElSwitch",label:"\u5B57\u6BB59",colProps:{span:8}},{field:"field10",component:"ElRadioButton",label:"\u5B57\u6BB510",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field11",component:"ElCascader",label:"\u5B57\u6BB511",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"divider-api-select",component:"ElDivider",label:"\u8FDC\u7A0B\u4E0B\u62C9\u6F14\u793A"},{field:"field30",component:"ApiSelect",label:"\u61D2\u52A0\u8F7D\u8FDC\u7A0B\u4E0B\u62C9",required:!0,componentProps:{api:E,params:{id:1},resultField:"list",labelField:"name",valueField:"id",immediate:!1,onChange:e=>{console.log("selected:",e)},onOptionsChange:e=>{console.log("get options",e.length,e)}},colProps:{span:8},defaultValue:"0"},{field:"field31",component:"ApiSelect",label:"\u4E0B\u62C9\u672C\u5730\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u8FDC\u7A0B\u6570\u636E\u6E90\u672C\u5730\u641C\u7D22","\u53EA\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42\u83B7\u53D6\u6240\u6709\u9009\u9879"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0"},{field:"field32",component:"ApiSelect",label:"\u4E0B\u62C9\u8FDC\u7A0B\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u5C06\u5173\u952E\u8BCD\u53D1\u9001\u5230\u63A5\u53E3\u8FDB\u884C\u8FDC\u7A0B\u641C\u7D22"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"divider-linked",component:"ElDivider",label:"\u5B57\u6BB5\u8054\u52A8"},{field:"province",component:"ElSelect",label:"\u7701\u4EFD",colProps:{span:8},componentProps:({formModel:e,formActionType:u})=>({options:s,placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8",onChange:l=>{let n=l===1?d[s[0].id]:d[s[1].id];l===void 0&&(n=[]),e.city=void 0;const{updateSchema:a}=u;a({field:"city",componentProps:{options:n}})}})},{field:"city",component:"ElSelect",label:"\u57CE\u5E02",colProps:{span:8},componentProps:{options:[],placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8"}},{field:"divider-selects",component:"ElDivider",label:"\u4E92\u65A5\u591A\u9009",helpMessage:["\u4E24\u4E2ASelect\u5171\u7528\u6570\u636E\u6E90","\u4F46\u4E0D\u53EF\u9009\u62E9\u5BF9\u65B9\u5DF2\u9009\u4E2D\u7684\u9879\u76EE"]},{field:"selectA",component:"ElSelect",label:"\u4E92\u65A5SelectA",slot:"selectA",defaultValue:[],colProps:{span:8}},{field:"selectB",component:"ElSelect",label:"\u4E92\u65A5SelectB",slot:"selectB",defaultValue:[],colProps:{span:8}},{field:"divider-others",component:"ElDivider",label:"\u5176\u5B83"},{field:"field21",component:"ElInputNumber",label:"\u5B57\u6BB521",required:!0,colProps:{span:8}},{field:"field22",component:"ElSlider",label:"\u5B57\u6BB522",componentProps:{min:0,max:100,range:!0,marks:{20:"20\xB0C",60:"60\xB0C"}},colProps:{span:8}},{field:"field23",component:"ElRate",label:"\u5B57\u6BB523",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}}],h=[{field:"field1",component:"ElInput",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:e=>{console.log(e)}}},{field:"field2",component:"ElInput",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"ElDatePicker",label:"\u5B57\u6BB53",colProps:{span:8},componentProps:{type:"date"}},{field:"field4",component:"ElSelect",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"ElCheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"ElRadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],C=[{field:"field5",component:"ElSwitch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB51(css\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field1",component:"ElInput",label:"\u5B57\u6BB51",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field6",component:"ElSwitch",label:"\u662F\u5426\u663E\u793A\u5B57\u6BB52(dom\u63A7\u5236)",colProps:{span:8},labelWidth:200},{field:"field2",component:"ElInput",label:"\u5B57\u6BB52",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"ElDatePicker",label:"\u5B57\u6BB53",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"ElSelect",label:"\u5B57\u6BB54",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"\u5B57\u6BB54\u5FC5\u586B"}]:[],componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field11",component:"ElDatePicker",label:"\u5B57\u6BB511",colProps:{span:8}},{field:"field7",component:"ElSwitch",label:"\u662F\u5426\u7981\u7528\u5B57\u6BB53",colProps:{span:8},labelWidth:200},{field:"field8",component:"ElSwitch",label:"\u5B57\u6BB54\u662F\u5426\u5FC5\u586B",colProps:{span:8},labelWidth:200}],v=[{field:"f1",component:"ElInput",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"\u540C\u6B65f2\u7684\u503C\u4E3Af1",onChange:u=>{e.f2=u}})},{field:"f2",component:"ElInput",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"ElInput",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"\u503C\u6539\u53D8\u65F6\u6267\u884C\u67E5\u8BE2,\u67E5\u770B\u63A7\u5236\u53F0",onChange:()=>c(void 0,null,function*(){const{validate:u}=e,l=yield u();console.log(l)})})}];export{h as U,v as a,P as b,C as d,E as o};
