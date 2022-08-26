var ue=Object.defineProperty,se=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var L=(n,i,s)=>i in n?ue(n,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[i]=s,Y=(n,i)=>{for(var s in i||(i={}))oe.call(i,s)&&L(n,s,i[s]);if(G)for(var s of G(i))ce.call(i,s)&&L(n,s,i[s]);return n},R=(n,i)=>se(n,ie(i));import{N as de,at as me,G as p,cX as pe,dD as be,ct as I,a6 as fe,d as ve,bc as Ne,F as Ve,r as he,s as Ie,dv as ge,c as h,a7 as w,af as ye,dt as _e,w as we,Y as Ee,Z as Se,o as f,f as x,v as Z,b as a,n as B,y as E,h as D,i as j,j as S,bb as Pe,dJ as ke,$ as H,k as J,cZ as Ae,a5 as Fe,bI as T,E as Ce,C as xe,a8 as Be,ag as W,L as De}from"./index.61be89a1.js";import{v as X}from"./index.761cf9b9.js";const Te=de({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,disabled:Boolean,size:me,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:n=>n===null||p(n)||["min","max"].includes(n),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:n=>n>=0&&n===Number.parseInt(`${n}`,10)},validateEvent:{type:Boolean,default:!0}}),ze={[pe]:(n,i)=>n!==i,blur:n=>n instanceof FocusEvent,focus:n=>n instanceof FocusEvent,[be]:n=>p(n)||I(n),[fe]:n=>p(n)||I(n)},Ke=["aria-label","onKeydown"],Me=["aria-label","onKeydown"],Oe={name:"ElInputNumber"},Ue=ve(R(Y({},Oe),{props:Te,emits:ze,setup(n,{expose:i,emit:s}){const r=n,{t:z}=Ne(),m=Ve("input-number"),N=he(),o=Ie({currentValue:r.modelValue,userInput:null}),{formItem:v}=ge(),K=h(()=>p(r.modelValue)&&g(r.modelValue,-1)<r.min),M=h(()=>p(r.modelValue)&&g(r.modelValue)>r.max),q=h(()=>{const e=U(r.step);return w(r.precision)?Math.max(U(r.modelValue),e):(e>r.precision,r.precision)}),P=h(()=>r.controls&&r.controlsPosition==="right"),O=ye(),V=_e(),Q=h(()=>{if(o.userInput!==null)return o.userInput;let e=o.currentValue;if(I(e))return"";if(p(e)){if(Number.isNaN(e))return"";w(r.precision)||(e=e.toFixed(r.precision))}return e}),k=(e,t)=>{if(w(t)&&(t=q.value),t===0)return Math.round(e);let l=String(e);const u=l.indexOf(".");if(u===-1||!l.replace(".","").split("")[u+t])return e;const y=l.length;return l.charAt(y-1)==="5"&&(l=`${l.slice(0,Math.max(0,y-1))}6`),Number.parseFloat(Number(l).toFixed(t))},U=e=>{if(I(e))return 0;const t=e.toString(),l=t.indexOf(".");let u=0;return l!==-1&&(u=t.length-l-1),u},g=(e,t=1)=>p(e)?k(e+r.step*t):o.currentValue,A=()=>{if(V.value||M.value)return;const e=r.modelValue||0,t=g(e);C(t)},F=()=>{if(V.value||K.value)return;const e=r.modelValue||0,t=g(e,-1);C(t)},$=(e,t)=>{const{max:l,min:u,step:c,precision:b,stepStrictly:y,valueOnClear:_}=r;let d=Number(e);if(I(e)||Number.isNaN(d))return null;if(e===""){if(_===null)return null;d=Be(_)?{min:u,max:l}[_]:_}return y&&(d=k(Math.round(d/c)*c,b)),w(b)||(d=k(d,b)),(d>l||d<u)&&(d=d>l?l:u,t&&s("update:modelValue",d)),d},C=e=>{var t;const l=o.currentValue,u=$(e);l!==u&&(o.userInput=null,s("update:modelValue",u),s("input",u),s("change",u,l),r.validateEvent&&((t=v==null?void 0:v.validate)==null||t.call(v,"change").catch(c=>W())),o.currentValue=u)},ee=e=>o.userInput=e,te=e=>{const t=e!==""?Number(e):"";(p(t)&&!Number.isNaN(t)||e==="")&&C(t),o.userInput=null},ne=()=>{var e,t;(t=(e=N.value)==null?void 0:e.focus)==null||t.call(e)},ae=()=>{var e,t;(t=(e=N.value)==null?void 0:e.blur)==null||t.call(e)},re=e=>{s("focus",e)},le=e=>{var t;s("blur",e),r.validateEvent&&((t=v==null?void 0:v.validate)==null||t.call(v,"blur").catch(l=>W()))};return we(()=>r.modelValue,e=>{o.currentValue=$(e,!0),o.userInput=null},{immediate:!0}),Ee(()=>{var e;const{min:t,max:l,modelValue:u}=r,c=(e=N.value)==null?void 0:e.input;if(c.setAttribute("role","spinbutton"),Number.isFinite(l)?c.setAttribute("aria-valuemax",String(l)):c.removeAttribute("aria-valuemax"),Number.isFinite(t)?c.setAttribute("aria-valuemin",String(t)):c.removeAttribute("aria-valuemin"),c.setAttribute("aria-valuenow",String(o.currentValue)),c.setAttribute("aria-disabled",String(V.value)),!p(u)&&u!=null){let b=Number(u);Number.isNaN(b)&&(b=null),s("update:modelValue",b)}}),Se(()=>{var e;const t=(e=N.value)==null?void 0:e.input;t==null||t.setAttribute("aria-valuenow",`${o.currentValue}`)}),i({focus:ne,blur:ae}),(e,t)=>(f(),x("div",{class:B([a(m).b(),a(m).m(a(O)),a(m).is("disabled",a(V)),a(m).is("without-controls",!e.controls),a(m).is("controls-right",a(P))]),onDragstart:t[0]||(t[0]=T(()=>{},["prevent"]))},[e.controls?Z((f(),x("span",{key:0,role:"button","aria-label":a(z)("el.inputNumber.decrease"),class:B([a(m).e("decrease"),a(m).is("disabled",a(K))]),onKeydown:E(F,["enter"])},[D(a(H),null,{default:j(()=>[a(P)?(f(),S(a(Pe),{key:0})):(f(),S(a(ke),{key:1}))]),_:1})],42,Ke)),[[a(X),F]]):J("v-if",!0),e.controls?Z((f(),x("span",{key:1,role:"button","aria-label":a(z)("el.inputNumber.increase"),class:B([a(m).e("increase"),a(m).is("disabled",a(M))]),onKeydown:E(A,["enter"])},[D(a(H),null,{default:j(()=>[a(P)?(f(),S(a(Ae),{key:0})):(f(),S(a(Fe),{key:1}))]),_:1})],42,Me)),[[a(X),A]]):J("v-if",!0),D(a(Ce),{id:e.id,ref_key:"input",ref:N,type:"number",step:e.step,"model-value":a(Q),placeholder:e.placeholder,disabled:a(V),size:a(O),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[E(T(A,["prevent"]),["up"]),E(T(F,["prevent"]),["down"])],onBlur:le,onFocus:re,onInput:ee,onChange:te},null,8,["id","step","model-value","placeholder","disabled","size","max","min","name","label","onKeydown"])],34))}}));var $e=xe(Ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Re=De($e);export{Re as E};
