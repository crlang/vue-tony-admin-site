import{B as c}from"./BasicTable-e73bdb7a.js";import{u as l}from"./useTable-6618d992.js";import{d as b}from"./data-4cf2bd84.js";import{d as f}from"./table-0ce279e7.js";import{_ as j}from"./index-94a7e7e0.js";import{y as x,Z as T,z as g,A as _,R as y}from"./ex-pkg-@vue-6f720869.js";import"./BasicForm-d9c6bead.js";import"./index-4a8d1af3.js";import"./ex-pkg-vendor-69b4619e.js";import"./ex-pkg-element-plus-6a2cfc13.js";import"./ex-pkg-mockjs-abb76a9d.js";import"./index-2543fa86.js";import"./index-9fa4e1de.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-414339e6.js";import"./index-874009eb.js";import"./index-230bee16.js";import"./tsxHelper-f8a518c2.js";import"./index-55f6df6d.js";import"./useTimeout-dc9cc03d.js";import"./propTypes-fbd6d81b.js";import"./download-844ebaa9.js";import"./base64Conver-6d09fa87.js";import"./index-753cabc5.js";import"./index-f5b6bf30.js";import"./useCopyToClipboard-83ab3f80.js";import"./useForm-2317b26a.js";import"./index-daa1bcd9.js";const B=x({components:{BasicTable:c},setup(){function t(a){console.log("summary table",a);const{columns:m,data:p}=a,o=[];return m.forEach((e,r)=>{if(r===0){o[r]="\u7EDF\u8BA1";return}console.log("column++++++",e,e.property);const n=p.map(s=>Number(s[e.property]));!n.every(s=>Number.isNaN(s))&&e.property!=="sex"?o[r]=`${n.reduce((s,d)=>{const u=Number(d);return Number.isNaN(u)?s:s+d},0)}`:o[r]="--"}),o}const[i]=l({title:"\u8868\u5C3E\u884C\u5408\u8BA1\u793A\u4F8B",api:f,columns:b(),height:350,showSummary:!0,summaryMethod:t});return{registerTable:i}}}),N={class:"p-4"};function h(t,i,a,m,p,o){const e=T("BasicTable");return g(),_("div",N,[y(e,{onRegister:t.registerTable},null,8,["onRegister"])])}var Y=j(B,[["render",h]]);export{Y as default};
