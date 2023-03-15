import{Q as ue,as as se,L as d,fi as j,fI as k,cA as I,a7 as y,d as q,b7 as oe,C as ie,r as ce,s as de,au as me,c as V,a8 as E,ae as pe,at as be,w as fe,Z as ve,$ as Ne,o as b,f as z,v as W,b as t,n as K,y as _,h as M,i as Y,k as S,b6 as Ve,fO as ye,a0 as H,l as J,fs as Ie,a6 as he,b9 as P,E as ge,I as we,a9 as Ee,af as Q,J as _e}from"./index.a812ffa9.js";import{v as Z}from"./index.b98834c9.js";const Se=ue({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:se,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||d(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),Pe={[j]:(l,A)=>A!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[k]:l=>d(l)||I(l),[y]:l=>d(l)||I(l)},ke=["aria-label","onKeydown"],Ae=["aria-label","onKeydown"],Fe=q({name:"ElInputNumber"}),Ce=q({...Fe,props:Se,emits:Pe,setup(l,{expose:A,emit:c}){const r=l,{t:O}=oe(),m=ie("input-number"),v=ce(),s=de({currentValue:r.modelValue,userInput:null}),{formItem:f}=me(),U=V(()=>d(r.modelValue)&&r.modelValue<=r.min),$=V(()=>d(r.modelValue)&&r.modelValue>=r.max),X=V(()=>{const e=G(r.step);return E(r.precision)?Math.max(G(r.modelValue),e):(e>r.precision,r.precision)}),F=V(()=>r.controls&&r.controlsPosition==="right"),L=pe(),N=be(),C=V(()=>{if(s.userInput!==null)return s.userInput;let e=s.currentValue;if(I(e))return"";if(d(e)){if(Number.isNaN(e))return"";E(r.precision)||(e=e.toFixed(r.precision))}return e}),x=(e,n)=>{if(E(n)&&(n=X.value),n===0)return Math.round(e);let a=String(e);const o=a.indexOf(".");if(o===-1||!a.replace(".","").split("")[o+n])return e;const g=a.length;return a.charAt(g-1)==="5"&&(a=`${a.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(a).toFixed(n))},G=e=>{if(I(e))return 0;const n=e.toString(),a=n.indexOf(".");let o=0;return a!==-1&&(o=n.length-a-1),o},R=(e,n=1)=>d(e)?x(e+r.step*n):s.currentValue,B=()=>{if(r.readonly||N.value||$.value)return;const e=Number(C.value)||0,n=R(e);h(n),c(k,s.currentValue)},T=()=>{if(r.readonly||N.value||U.value)return;const e=Number(C.value)||0,n=R(e,-1);h(n),c(k,s.currentValue)},D=(e,n)=>{const{max:a,min:o,step:u,precision:p,stepStrictly:g,valueOnClear:w}=r;let i=Number(e);if(I(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=Ee(w)?{min:o,max:a}[w]:w}return g&&(i=x(Math.round(i/u)*u,p)),E(p)||(i=x(i,p)),(i>a||i<o)&&(i=i>a?a:o,n&&c(y,i)),i},h=(e,n=!0)=>{var a;const o=s.currentValue,u=D(e);if(o!==u){if(!n){c(y,u);return}s.userInput=null,c(y,u),c(j,u,o),r.validateEvent&&((a=f==null?void 0:f.validate)==null||a.call(f,"change").catch(p=>Q())),s.currentValue=u}},ee=e=>{s.userInput=e;const n=e===""?null:Number(e);c(k,n),h(n,!1)},ne=e=>{const n=e!==""?Number(e):"";(d(n)&&!Number.isNaN(n)||e==="")&&h(n),s.userInput=null},te=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},ae=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},re=e=>{c("focus",e)},le=e=>{var n;c("blur",e),r.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(a=>Q()))};return fe(()=>r.modelValue,e=>{const n=D(s.userInput),a=D(e,!0);!d(n)&&(!n||n!==a)&&(s.currentValue=a,s.userInput=null)},{immediate:!0}),ve(()=>{var e;const{min:n,max:a,modelValue:o}=r,u=(e=v.value)==null?void 0:e.input;if(u.setAttribute("role","spinbutton"),Number.isFinite(a)?u.setAttribute("aria-valuemax",String(a)):u.removeAttribute("aria-valuemax"),Number.isFinite(n)?u.setAttribute("aria-valuemin",String(n)):u.removeAttribute("aria-valuemin"),u.setAttribute("aria-valuenow",String(s.currentValue)),u.setAttribute("aria-disabled",String(N.value)),!d(o)&&o!=null){let p=Number(o);Number.isNaN(p)&&(p=null),c(y,p)}}),Ne(()=>{var e;const n=(e=v.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${s.currentValue}`)}),A({focus:te,blur:ae}),(e,n)=>(b(),z("div",{class:K([t(m).b(),t(m).m(t(L)),t(m).is("disabled",t(N)),t(m).is("without-controls",!e.controls),t(m).is("controls-right",t(F))]),onDragstart:n[1]||(n[1]=P(()=>{},["prevent"]))},[e.controls?W((b(),z("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:K([t(m).e("decrease"),t(m).is("disabled",t(U))]),onKeydown:_(T,["enter"])},[M(t(H),null,{default:Y(()=>[t(F)?(b(),S(t(Ve),{key:0})):(b(),S(t(ye),{key:1}))]),_:1})],42,ke)),[[t(Z),T]]):J("v-if",!0),e.controls?W((b(),z("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:K([t(m).e("increase"),t(m).is("disabled",t($))]),onKeydown:_(B,["enter"])},[M(t(H),null,{default:Y(()=>[t(F)?(b(),S(t(Ie),{key:0})):(b(),S(t(he),{key:1}))]),_:1})],42,Ae)),[[t(Z),B]]):J("v-if",!0),M(t(ge),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(C),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t(L),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:n[0]||(n[0]=P(()=>{},["prevent"])),onKeydown:[_(P(B,["prevent"]),["up"]),_(P(T,["prevent"]),["down"])],onBlur:le,onFocus:re,onInput:ee,onChange:ne},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var xe=we(Ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const De=_e(xe);export{De as E};
