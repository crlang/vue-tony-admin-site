import{e as s,b0 as o}from"./index.16f9732e.js";import{ag as l}from"./ex-pkg-element-plus.e1a09009.js";import{R as t}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const{t:r}=s();function a(){return[{prop:"type",label:r("sys.errorLog.tableColumnType"),width:80,customRender:({text:e})=>{const p=e===o.VUE?"success":e===o.RESOURCE?"warning":e===o.PROMISE?"primary":o.AJAX?"danger":"info";return t(l,{type:p},{default:()=>e})}},{prop:"url",label:"URL",width:200},{prop:"time",label:r("sys.errorLog.tableColumnDate"),width:160},{prop:"file",label:r("sys.errorLog.tableColumnFile"),width:200},{prop:"name",label:"Name",width:200},{prop:"message",label:r("sys.errorLog.tableColumnMsg"),width:300},{prop:"stack",label:r("sys.errorLog.tableColumnStackMsg")}]}function j(){return a().map(e=>({field:e.prop,label:e.label}))}export{j as getDescSchema,a as getLogColumns};
