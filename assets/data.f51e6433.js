import{ed as r,h as l}from"./index.b263d89e.js";import{E as p}from"./index.ef26d884.js";function o(){return[{prop:"type",label:"\u7C7B\u578B",width:80,customRender:({text:e})=>{const a=e===r.VUE?"success":e===r.RESOURCE?"warning":e===r.PROMISE?"primary":r.AJAX?"danger":"info";return l(p,{type:a},{default:()=>e})}},{prop:"url",label:"URL",width:200},{prop:"time",label:"\u65F6\u95F4",width:160},{prop:"file",label:"\u6587\u4EF6",width:200},{prop:"name",label:"Name",width:200},{prop:"message",label:"\u9519\u8BEF\u4FE1\u606F",width:300},{prop:"stack",label:"stack\u4FE1\u606F"}]}function n(){return o().map(e=>({field:e.prop,label:e.label}))}export{n as getDescSchema,o as getLogColumns};
