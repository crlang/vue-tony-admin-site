import{B as l}from"./index.f91d038a.js";import{d as f}from"./data.3ca71dd2.js";import{d}from"./table.498ba4ce.js";import{_,d as b,e as h,o as B,f as N,h as T}from"./index.12e2b36d.js";import{u as g}from"./useTable.47f3d1fa.js";import"./index.4ad4c889.js";import"./index.f6b9c428.js";import"./index.69a95a3c.js";import"./row.8fd2210e.js";import"./drawer.06fffbf8.js";import"./card.a2e976ce.js";import"./index.6adb7f1a.js";import"./index.fb2559fd.js";import"./index.77e99735.js";import"./index.b028bbcd.js";import"./isEqual.1822c1b9.js";import"./_baseIsEqual.df6af5a3.js";import"./form-item.c3bc9277.js";import"./dropdown.28433873.js";import"./index.f2256943.js";import"./tsxHelper.a491e40f.js";import"./useWindowSizeFn.5d430d85.js";import"./index.e79189fa.js";import"./index.00e0b22a.js";import"./index.9cb3f094.js";import"./refs.b779a62e.js";import"./use-dialog.24721d6a.js";import"./index.7980a1b4.js";import"./index.a5c4e050.js";import"./_baseUniq.bcd65e0c.js";import"./index.9dc62547.js";import"./index.a88b8150.js";import"./index.76a9ee93.js";import"./index.ec8e6641.js";import"./index.02016e21.js";import"./index.a2a3be95.js";import"./domUtils.0dce6f1a.js";import"./index.e7a25dd6.js";import"./useForm.e1560826.js";const y=b({components:{BasicTable:l},setup(){function m(p){const{columns:s,data:a}=p,r=[];return s.forEach((t,e)=>{if(e===0){r[e]="\u7EDF\u8BA1";return}const n=a.map(o=>Number(o[t.property]));!n.every(o=>Number.isNaN(o))&&t.property!=="sex"?r[e]=`${n.reduce((o,u)=>{const c=Number(u);return Number.isNaN(c)?o:o+u},0)}`:r[e]="--"}),r}const[i]=g({title:"\u8868\u5C3E\u884C\u5408\u8BA1\u793A\u4F8B",api:d,columns:f(),height:350,showSummary:!0,summaryMethod:m});return{registerTable:i}}}),v={class:"p-4"};function C(m,i,p,s,a,r){const t=h("BasicTable");return B(),N("div",v,[T(t,{onRegister:m.registerTable},null,8,["onRegister"])])}var uo=_(y,[["render",C]]);export{uo as default};
