<<<<<<<< HEAD:assets/data.3ca71dd2.js
import{E as t}from"./index.6adb7f1a.js";import{c2 as o}from"./index.12e2b36d.js";function s(){return[{label:"ID",prop:"id",width:100},{label:"\u59D3\u540D",prop:"nickname",width:100},{label:"\u6027\u522B",prop:"sex",width:100,filters:[{text:"\u7537",value:"1"},{text:"\u5973",value:"2"}],customRender:({record:e})=>{const l=e.sex===1?"success":"danger",u=e.sex===1?"\u7537":"\u5973";return o(t,{type:l},()=>u)}},{label:"\u7F16\u53F7",prop:"no",width:100,sortable:!0},{label:"\u5730\u5740",prop:"address"},{label:"\u63CF\u8FF0",prop:"description",align:"left"},{label:"\u5F00\u59CB\u65F6\u95F4",width:180,sortable:!0,prop:"beginTime"},{label:"\u7ED3\u675F\u65F6\u95F4",width:180,sortable:!0,prop:"endTime"}]}function n(){return[{label:"ID",width:150,prop:"id",sortable:!0,sortOrder:"ascend"},{label:"\u59D3\u540D",prop:"name",width:120},{label:"\u5730\u5740",prop:"address"},{label:"\u7F16\u53F7",prop:"no",width:80}]}function i(){return[{label:"ID",prop:"id",isSlot:!0},{label:"\u5934\u50CF",prop:"avatar",width:100,isSlot:!0},{label:"\u5206\u7C7B",prop:"category",width:80,defaultHidden:!0,isSlot:!0},{label:"\u59D3\u540D",prop:"name",width:120},{label:"\u56FE\u7247\u5217\u88681",prop:"photos",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140,isSlot:!0},{label:"\u7167\u7247\u5217\u88682",prop:"imgs",width:160,isSlot:!0},{label:"\u5730\u5740",helpMessage:["\u8FD9\u662F\u5730\u5740"],prop:"address"},{label:"\u7F16\u53F7",prop:"no",isSlot:!0},{label:"\u5F00\u59CB\u65F6\u95F4",prop:"beginTime"},{label:"\u7ED3\u675F\u65F6\u95F4",prop:"endTime"}]}const r=(e=6)=>{const l=[];for(let u=0;u<e;u++)l.push({field:`field${u}`,label:`\u5B57\u6BB5${u}`,component:"ElInput",colProps:{lg:12,xl:8}});return l};function d(){return{labelWidth:100,showAdvancedButton:!0,alwaysShowLines:1,schemas:[...r(5),{field:"field9",label:"Slot\u793A\u4F8B9",component:"ElInput",colProps:{lg:12,xl:8}},{field:"field10",label:"Slot\u793A\u4F8B10",component:"ElInput",slot:"field10",colProps:{lg:12,xl:8}}]}}function F(){return[{label:"\u59D3\u540D",prop:"nickname"},{label:"ID",prop:"id"},{label:"\u6027\u522B",prop:"sex",filters:[{text:"\u7537",value:"1"},{text:"\u5973",value:"2"}],customRender:({record:e})=>{const l=e.sex===1?"success":"danger",u=e.sex===1?"\u7537":"\u5973";return o(t,{type:l},()=>u)}},{label:"\u5E74\u9F84",prop:"age"},{label:"\u7F16\u53F7",prop:"no"},{label:"\u5730\u5740",prop:"address"}]}function b(){return[{label:"\u7F16\u53F7",prop:"no",width:100},{label:"\u59D3\u540D",prop:"name",auth:"test"},{label:"\u72B6\u6001",prop:"status"},{label:"\u5730\u5740",prop:"address",auth:"admin",ifShow:!0},{label:"\u5F00\u59CB\u65F6\u95F4",prop:"beginTime"},{label:"\u7ED3\u675F\u65F6\u95F4",prop:"endTime"}]}export{i as a,d as b,n as c,F as d,b as e,s as g};
========
import{E as t}from"./index.7fce1749.js";import{c1 as o}from"./index.61be89a1.js";function s(){return[{label:"ID",prop:"id",width:100},{label:"\u59D3\u540D",prop:"nickname",width:100},{label:"\u6027\u522B",prop:"sex",width:100,filters:[{text:"\u7537",value:"1"},{text:"\u5973",value:"2"}],customRender:({record:e})=>{const l=e.sex===1?"success":"danger",u=e.sex===1?"\u7537":"\u5973";return o(t,{type:l},()=>u)}},{label:"\u7F16\u53F7",prop:"no",width:100,sortable:!0},{label:"\u5730\u5740",prop:"address"},{label:"\u63CF\u8FF0",prop:"description",align:"left"},{label:"\u5F00\u59CB\u65F6\u95F4",width:180,sortable:!0,prop:"beginTime"},{label:"\u7ED3\u675F\u65F6\u95F4",width:180,sortable:!0,prop:"endTime"}]}function n(){return[{label:"ID",width:150,prop:"id",sortable:!0,sortOrder:"ascend"},{label:"\u59D3\u540D",prop:"name",width:120},{label:"\u5730\u5740",prop:"address"},{label:"\u7F16\u53F7",prop:"no",width:80}]}function i(){return[{label:"ID",prop:"id",isSlot:!0},{label:"\u5934\u50CF",prop:"avatar",width:100,isSlot:!0},{label:"\u5206\u7C7B",prop:"category",width:80,defaultHidden:!0,isSlot:!0},{label:"\u59D3\u540D",prop:"name",width:120},{label:"\u56FE\u7247\u5217\u88681",prop:"photos",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140,isSlot:!0},{label:"\u7167\u7247\u5217\u88682",prop:"imgs",width:160,isSlot:!0},{label:"\u5730\u5740",helpMessage:["\u8FD9\u662F\u5730\u5740"],prop:"address"},{label:"\u7F16\u53F7",prop:"no",isSlot:!0},{label:"\u5F00\u59CB\u65F6\u95F4",prop:"beginTime"},{label:"\u7ED3\u675F\u65F6\u95F4",prop:"endTime"}]}const r=(e=6)=>{const l=[];for(let u=0;u<e;u++)l.push({field:`field${u}`,label:`\u5B57\u6BB5${u}`,component:"ElInput",colProps:{lg:12,xl:8}});return l};function d(){return{labelWidth:100,showAdvancedButton:!0,alwaysShowLines:1,schemas:[...r(5),{field:"field9",label:"Slot\u793A\u4F8B9",component:"ElInput",colProps:{lg:12,xl:8}},{field:"field10",label:"Slot\u793A\u4F8B10",component:"ElInput",slot:"field10",colProps:{lg:12,xl:8}}]}}function F(){return[{label:"\u59D3\u540D",prop:"nickname"},{label:"ID",prop:"id"},{label:"\u6027\u522B",prop:"sex",filters:[{text:"\u7537",value:"1"},{text:"\u5973",value:"2"}],customRender:({record:e})=>{const l=e.sex===1?"success":"danger",u=e.sex===1?"\u7537":"\u5973";return o(t,{type:l},()=>u)}},{label:"\u5E74\u9F84",prop:"age"},{label:"\u7F16\u53F7",prop:"no"},{label:"\u5730\u5740",prop:"address"}]}function b(){return[{label:"\u7F16\u53F7",prop:"no",width:100},{label:"\u59D3\u540D",prop:"name",auth:"test"},{label:"\u72B6\u6001",prop:"status"},{label:"\u5730\u5740",prop:"address",auth:"admin",ifShow:!0},{label:"\u5F00\u59CB\u65F6\u95F4",prop:"beginTime"},{label:"\u7ED3\u675F\u65F6\u95F4",prop:"endTime"}]}export{i as a,d as b,n as c,F as d,b as e,s as g};
>>>>>>>> 8639c16ee1bdf131236610745881512f6ca8b8ca:assets/data.e1d9065b.js
