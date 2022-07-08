var _=Object.defineProperty,$=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var E=(e,a,t)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,S=(e,a)=>{for(var t in a||(a={}))R.call(a,t)&&E(e,t,a[t]);if(F)for(var t of F(a))j.call(a,t)&&E(e,t,a[t]);return e},A=(e,a)=>$(e,k(a));var g=(e,a,t)=>new Promise((u,o)=>{var s=l=>{try{r(t.next(l))}catch(d){o(d)}},c=l=>{try{r(t.throw(l))}catch(d){o(d)}},r=l=>l.done?u(l.value):Promise.resolve(l.value).then(s,c);r((t=t.apply(e,a)).next())});import{d as L,r as p,c as V,b as f,cA as T,aA as D,w as B,b0 as I,Y as M,_ as N,e as C,o as y,j as w,i as P,f as U,bm as Y,am as q,aB as z,aC as G}from"./index.b263d89e.js";import{a as H,E as J}from"./index.2486a222.js";const K=L({name:"ApiSelect",components:{ElSelect:H,ElOption:J},inheritAttrs:!1,props:{modelValue:{type:[Array,String,Number],default:""},api:{type:Function,default:null},params:{type:Object,default:()=>({})},resultField:{type:String,default:""},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},valueToString:{type:Boolean},immediate:{type:Boolean,default:!1}},emits:["option-change","change","update:modelValue"],setup(e,{emit:a}){const t=p([]),u=p(!1),o=p(!0),s=p(),c=V(()=>{const{labelField:n,valueField:i,valueToString:O}=e;return f(t).reduce((v,m)=>{if(m){const b=m[i];v.push(A(S({},T(m,[n,i])),{label:m[n],value:O?`${b}`:b}))}return v},[])}),r=V(()=>f(u)?"\u8BF7\u7B49\u5F85\u6570\u636E\u52A0\u8F7D\u5B8C\u6210...":"\u6570\u636E\u4E3A\u7A7A");D(()=>{s.value=e.modelValue||"",e.immediate&&l()}),B(()=>e.params,()=>{!f(o)&&l()},{deep:!0}),B(()=>f(s),n=>{a("update:modelValue",n),a("change",n)});function l(){return g(this,null,function*(){const n=e.api;if(!(!n||typeof n!="function")){t.value=[];try{u.value=!0;const i=yield n(e.params);if(Array.isArray(i)){t.value=i,h();return}e.resultField&&(t.value=I(i,e.resultField)||[]),h()}catch(i){}finally{u.value=!1}}})}function d(){return g(this,null,function*(){!e.immediate&&f(o)&&(yield l(),o.value=!1)})}function h(){a("option-change",f(c))}return M(()=>{d()}),{innerValueRef:s,getOptions:c,loading:u,getSelectEmpty:r,handleFetch:d}}});function Q(e,a,t,u,o,s){const c=C("ElOption"),r=C("ElSelect");return y(),w(r,z({onVisibleChange:e.handleFetch,clearable:""},e.$attrs,{"no-data-text":e.getSelectEmpty,modelValue:e.innerValueRef,"onUpdate:modelValue":a[0]||(a[0]=l=>e.innerValueRef=l)}),{default:P(()=>[(y(!0),U(q,null,Y(e.getOptions,l=>(y(),w(c,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},16,["onVisibleChange","no-data-text","modelValue"])}var W=N(K,[["render",Q]]);const ee=G(W);export{ee as A};
