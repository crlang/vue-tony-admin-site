var m=(t,n,e)=>new Promise((s,u)=>{var l=o=>{try{r(e.next(o))}catch(c){u(c)}},a=o=>{try{r(e.throw(o))}catch(c){u(c)}},r=o=>o.done?s(o.value):Promise.resolve(o.value).then(l,a);r((e=e.apply(t,n)).next())});import{_ as v,i as F,e as _,u as E,w as C}from"./index.c38c7de5.js";import{af as h,I as T,J as V,ak as S,y as I,aY as k,X as N,M as p,u as d,aj as j,x as w,aI as A,Y as f,z as g,Z as $,a3 as b,ab as x,F as D,a1 as y,am as O,a0 as U}from"./vendor.041d4bc7.js";function Y(t,n="modelValue",e="change",s){const u=h(),l=u==null?void 0:u.emit,a=T({value:t[n]}),r=V(a),o=i=>{a.value=i};return S(()=>{a.value=t[n]}),[I({get(){return a.value},set(i){k(i,r.value)||(a.value=i,N(()=>{l==null||l(e,i,s)}))}}),o,r]}function q(t){const n=p(t),e=p(!1);let s;function u(){s&&window.clearInterval(s)}function l(){e.value=!1,u(),s=null}function a(){d(e)||!!s||(e.value=!0,s=setInterval(()=>{d(n)===1?(l(),n.value=t):n.value-=1},1e3))}function r(){n.value=t,l()}function o(){r(),a()}return j(()=>{r()}),{start:a,reset:r,restart:o,clear:u,stop:l,currentCount:n,isStart:e}}const z={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},J=w({name:"CountButton",components:{ElButton:A},props:z,setup(t){const n=p(!1),{currentCount:e,isStart:s,start:u,reset:l}=q(t.count),{t:a}=_(),r=I(()=>d(s)?a("component.countdown.sendText",[d(e)]):a("component.countdown.normalText"));S(()=>{t.value===void 0&&l()});function o(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&F(c)){n.value=!0;try{(yield c())&&u()}finally{n.value=!1}}else u()})}return{handleStart:o,currentCount:e,loading:n,getButtonText:r,isStart:s}}});function M(t,n,e,s,u,l){const a=f("ElButton");return g(),$(a,y(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:b(()=>[x(D(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var B=v(J,[["render",M]]);const P={count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},R=w({name:"CountDownInput",components:{ElInput:O,CountButton:B},inheritAttrs:!1,props:P,setup(t){const{prefixCls:n}=E("countdown-input"),[e]=Y(t);return{prefixCls:n,state:e}}});function X(t,n,e,s,u,l){const a=f("CountButton"),r=f("ElInput");return g(),$(r,y(t.$attrs,{class:t.prefixCls,modelValue:t.state,"onUpdate:modelValue":n[0]||(n[0]=o=>t.state=o)}),{append:b(()=>[U(a,{count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["count","value","beforeStartFunc"])]),_:1},16,["class","modelValue"])}var Z=v(R,[["render",X]]);const L=C(Z);C(B);export{L as C,Y as u};
