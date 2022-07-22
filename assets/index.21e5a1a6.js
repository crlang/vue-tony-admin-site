var ue=Object.defineProperty,se=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var L=(t,i,s)=>i in t?ue(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,Y=(t,i)=>{for(var s in i||(i={}))oe.call(i,s)&&L(t,s,i[s]);if(G)for(var s of G(i))ce.call(i,s)&&L(t,s,i[s]);return t},j=(t,i)=>se(t,ie(i));import{N as de,at as me,G as p,cZ as pe,dE as be,cj as I,a6 as fe,d as ve,bc as Ne,F as Ve,r as he,q as Ie,dw as ge,c as h,a7 as _,af as ye,du as we,w as _e,Y as Ee,Z as Se,o as f,f as C,s as R,b as a,n as B,x as E,h as K,i as Z,j as S,bb as Pe,dK as ke,$ as q,k as H,c$ as Ae,a5 as Fe,bK as T,E as xe,C as Ce,a8 as Be,ag as W,L as Ke}from"./index.a3be5a06.js";import{v as J}from"./index.2fc3658f.js";const Te=de({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,disabled:Boolean,size:me,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:t=>t===null||p(t)||["min","max"].includes(t),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:t=>t>=0&&t===Number.parseInt(`${t}`,10)},validateEvent:{type:Boolean,default:!0}}),De={[pe]:(t,i)=>t!==i,blur:t=>t instanceof FocusEvent,focus:t=>t instanceof FocusEvent,[be]:t=>p(t)||I(t),[fe]:t=>p(t)||I(t)},ze=["aria-label","onKeydown"],Me=["aria-label","onKeydown"],Oe={name:"ElInputNumber"},$e=ve(j(Y({},Oe),{props:Te,emits:De,setup(t,{expose:i,emit:s}){const r=t,{t:D}=Ne(),m=Ve("input-number"),N=he(),o=Ie({currentValue:r.modelValue,userInput:null}),{formItem:v}=ge(),z=h(()=>p(r.modelValue)&&g(r.modelValue,-1)<r.min),M=h(()=>p(r.modelValue)&&g(r.modelValue)>r.max),Q=h(()=>{const e=$(r.step);return _(r.precision)?Math.max($(r.modelValue),e):(e>r.precision,r.precision)}),P=h(()=>r.controls&&r.controlsPosition==="right"),O=ye(),V=we(),X=h(()=>{if(o.userInput!==null)return o.userInput;let e=o.currentValue;if(I(e))return"";if(p(e)){if(Number.isNaN(e))return"";_(r.precision)||(e=e.toFixed(r.precision))}return e}),k=(e,n)=>{if(_(n)&&(n=Q.value),n===0)return Math.round(e);let l=String(e);const u=l.indexOf(".");if(u===-1||!l.replace(".","").split("")[u+n])return e;const y=l.length;return l.charAt(y-1)==="5"&&(l=`${l.slice(0,Math.max(0,y-1))}6`),Number.parseFloat(Number(l).toFixed(n))},$=e=>{if(I(e))return 0;const n=e.toString(),l=n.indexOf(".");let u=0;return l!==-1&&(u=n.length-l-1),u},g=(e,n=1)=>p(e)?k(e+r.step*n):o.currentValue,A=()=>{if(V.value||M.value)return;const e=r.modelValue||0,n=g(e);x(n)},F=()=>{if(V.value||z.value)return;const e=r.modelValue||0,n=g(e,-1);x(n)},U=(e,n)=>{const{max:l,min:u,step:c,precision:b,stepStrictly:y,valueOnClear:w}=r;let d=Number(e);if(I(e)||Number.isNaN(d))return null;if(e===""){if(w===null)return null;d=Be(w)?{min:u,max:l}[w]:w}return y&&(d=k(Math.round(d/c)*c,b)),_(b)||(d=k(d,b)),(d>l||d<u)&&(d=d>l?l:u,n&&s("update:modelValue",d)),d},x=e=>{var n;const l=o.currentValue,u=U(e);l!==u&&(o.userInput=null,s("update:modelValue",u),s("input",u),s("change",u,l),r.validateEvent&&((n=v==null?void 0:v.validate)==null||n.call(v,"change").catch(c=>W())),o.currentValue=u)},ee=e=>o.userInput=e,ne=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&x(n),o.userInput=null},te=()=>{var e,n;(n=(e=N.value)==null?void 0:e.focus)==null||n.call(e)},ae=()=>{var e,n;(n=(e=N.value)==null?void 0:e.blur)==null||n.call(e)},re=e=>{s("focus",e)},le=e=>{var n;s("blur",e),r.validateEvent&&((n=v==null?void 0:v.validate)==null||n.call(v,"blur").catch(l=>W()))};return _e(()=>r.modelValue,e=>{o.currentValue=U(e,!0),o.userInput=null},{immediate:!0}),Ee(()=>{var e;const{min:n,max:l,modelValue:u}=r,c=(e=N.value)==null?void 0:e.input;if(c.setAttribute("role","spinbutton"),Number.isFinite(l)?c.setAttribute("aria-valuemax",String(l)):c.removeAttribute("aria-valuemax"),Number.isFinite(n)?c.setAttribute("aria-valuemin",String(n)):c.removeAttribute("aria-valuemin"),c.setAttribute("aria-valuenow",String(o.currentValue)),c.setAttribute("aria-disabled",String(V.value)),!p(u)&&u!=null){let b=Number(u);Number.isNaN(b)&&(b=null),s("update:modelValue",b)}}),Se(()=>{var e;const n=(e=N.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${o.currentValue}`)}),i({focus:te,blur:ae}),(e,n)=>(f(),C("div",{class:B([a(m).b(),a(m).m(a(O)),a(m).is("disabled",a(V)),a(m).is("without-controls",!e.controls),a(m).is("controls-right",a(P))]),onDragstart:n[0]||(n[0]=T(()=>{},["prevent"]))},[e.controls?R((f(),C("span",{key:0,role:"button","aria-label":a(D)("el.inputNumber.decrease"),class:B([a(m).e("decrease"),a(m).is("disabled",a(z))]),onKeydown:E(F,["enter"])},[K(a(q),null,{default:Z(()=>[a(P)?(f(),S(a(Pe),{key:0})):(f(),S(a(ke),{key:1}))]),_:1})],42,ze)),[[a(J),F]]):H("v-if",!0),e.controls?R((f(),C("span",{key:1,role:"button","aria-label":a(D)("el.inputNumber.increase"),class:B([a(m).e("increase"),a(m).is("disabled",a(M))]),onKeydown:E(A,["enter"])},[K(a(q),null,{default:Z(()=>[a(P)?(f(),S(a(Ae),{key:0})):(f(),S(a(Fe),{key:1}))]),_:1})],42,Me)),[[a(J),A]]):H("v-if",!0),K(a(xe),{id:e.id,ref_key:"input",ref:N,type:"number",step:e.step,"model-value":a(X),placeholder:e.placeholder,disabled:a(V),size:a(O),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[E(T(A,["prevent"]),["up"]),E(T(F,["prevent"]),["down"])],onBlur:le,onFocus:re,onInput:ee,onChange:ne},null,8,["id","step","model-value","placeholder","disabled","size","max","min","name","label","onKeydown"])],34))}}));var Ue=Ce($e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const je=Ke(Ue);export{je as E};
