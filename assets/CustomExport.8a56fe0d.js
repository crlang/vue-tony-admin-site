import{B as c}from"./TableImg.092e6b25.js";import{E as b}from"./index.e1595796.js";import{P as f}from"./index.7797d51f.js";import{c as j,d,j as x}from"./data.0e7b4f23.js";import{_ as F}from"./index.ecb3b302.js";import{x as E,aI as B,M as _,Y as t,z as C,Z as v,a3 as a,a0 as n,ab as S}from"./vendor.041d4bc7.js";import"./BasicForm.ba24868b.js";import"./index.83a8d175.js";import"./index.46fbf970.js";import"./index.4bc9f650.js";import"./useAttrs.374c949f.js";import"./useWindowSizeFn.b4a2eb84.js";import"./uuid.2b29000c.js";import"./download.c9817825.js";import"./base64Conver.bb012c73.js";import"./index.3c94a11b.js";import"./useForm.7069ef8b.js";import"./clickOutside.233dba34.js";import"./useMenuSetting.29b8db62.js";const g=E({components:{ElButton:B,PageWrapper:f,BasicTable:c,ExpExcelModal:b},setup(){const e=_(!1);function o({filename:i,bookType:r}){x({data:d,filename:i,write2excelOpts:{bookType:r}})}return{modalVisible:e,columns:j,data:d,defaultHeader:o}}}),A=S("\u5BFC\u51FA");function T(e,o,i,r,V,M){const u=t("el-button"),l=t("BasicTable"),p=t("ExpExcelModal"),m=t("PageWrapper");return C(),v(m,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:a(()=>[n(l,{title:"\u57FA\u7840\u8868\u683C",columns:e.columns,dataSource:e.data},{toolbar:a(()=>{var s;return[n(u,{onClick:o[0]||(o[0]=$=>e.modalVisible=!0),disabled:!((s=e.data)==null?void 0:s.length)},{default:a(()=>[A]),_:1},8,["disabled"])]}),_:1},8,["columns","dataSource"]),n(p,{visible:e.modalVisible,"onUpdate:visible":o[1]||(o[1]=s=>e.modalVisible=s),onSuccess:e.defaultHeader},null,8,["visible","onSuccess"])]),_:1})}var K=F(g,[["render",T]]);export{K as default};
