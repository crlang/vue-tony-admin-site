import{r as d,aB as C,b as c,d as w,E as g,z as B,c as V,aC as v,w as E,_ as I,m as h,e as f,o as y,k as S,i as p,h as D,j as b,t as $,aD as k,aE as _}from"./index.a812ffa9.js";function A(e){const t=d(e),o=d(!1);let n;function u(){n&&window.clearInterval(n)}function l(){o.value=!1,u(),n=null}function s(){c(o)||!!n||(o.value=!0,n=setInterval(()=>{c(t)===1?(l(),t.value=e):t.value-=1},1e3))}function a(){t.value=e,l()}function r(){a(),s()}return C(()=>{a()}),{currentCount:t,isStart:o,start:s,reset:a,restart:r,clear:u,stop:l}}const N=w({name:"CountdownInput",components:{ElInput:g,ElButton:B},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},emits:["change","update:modelValue"],setup(e,{emit:t}){const{prefixCls:o}=h("basic-countdown-input"),n=d(!1),u=d(),{currentCount:l,isStart:s,start:a}=A(e.count),r=V(()=>c(s)?`${c(l)}\u79D2\u540E\u91CD\u65B0\u83B7\u53D6`:"\u83B7\u53D6\u9A8C\u8BC1\u7801");async function m(){const{sendCodeApi:i}=e;if(typeof i=="function"){n.value=!0;try{await i()&&a()}finally{n.value=!1}}else a()}return v(()=>{u.value=e.modelValue||""}),E(()=>c(u),i=>{t("update:modelValue",i),t("change",i)}),{prefixCls:o,loading:n,isStart:s,innerValueRef:u,getButtonText:r,handleStart:m}}});function R(e,t,o,n,u,l){const s=f("ElButton"),a=f("ElInput");return y(),S(a,k(e.$attrs,{class:e.prefixCls,modelValue:e.innerValueRef,"onUpdate:modelValue":t[0]||(t[0]=r=>e.innerValueRef=r)}),{append:p(()=>[D(s,{disabled:e.isStart,onClick:e.handleStart,loading:e.loading},{default:p(()=>[b($(e.getButtonText),1)]),_:1},8,["disabled","onClick","loading"])]),_:1},16,["class","modelValue"])}const T=I(N,[["render",R]]),x=_(T);export{x as C};
