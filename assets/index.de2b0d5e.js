import{d as S,K as j,cI as O,ao as V,C as F,bX as D,cA as J,Q as L,b as n,o as l,f as m,g,al as y,bw as C,k as I,h as z,I as K,ae as Q,aa as T,D as U,c as X,n as w,F as B,j as P,t as R,l as q,O as G,J as H,ad as M}from"./index.a812ffa9.js";import{d as Y}from"./description.cf55f5f3.js";const A=Symbol("elDescriptions");var E=S({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup(){return{descriptions:j(A,{})}},render(){var v,i,t,N,s,d;const a=O(this.cell),{border:$,direction:e}=this.descriptions,c=e==="vertical",p=((t=(i=(v=this.cell)==null?void 0:v.children)==null?void 0:i.label)==null?void 0:t.call(i))||a.label,r=(d=(s=(N=this.cell)==null?void 0:N.children)==null?void 0:s.default)==null?void 0:d.call(s),u=a.span,_=a.align?`is-${a.align}`:"",b=a.labelAlign?`is-${a.labelAlign}`:_,h=a.className,k=a.labelClassName,f={width:V(a.width),minWidth:V(a.minWidth)},o=F("descriptions");switch(this.type){case"label":return D(this.tag,{style:f,class:[o.e("cell"),o.e("label"),o.is("bordered-label",$),o.is("vertical-label",c),b,k],colSpan:c?u:1},p);case"content":return D(this.tag,{style:f,class:[o.e("cell"),o.e("content"),o.is("bordered-content",$),o.is("vertical-content",c),_,h],colSpan:c?u:u*2-1},r);default:return D("td",{style:f,class:[o.e("cell"),_],colSpan:u},[J(p)?void 0:D("span",{class:[o.e("label"),k]},p),D("span",{class:[o.e("content"),h]},r)])}}});const Z=L({row:{type:Array,default:()=>[]}}),x={key:1},ee=S({name:"ElDescriptionsRow"}),te=S({...ee,props:Z,setup(v){const i=j(A,{});return(t,N)=>n(i).direction==="vertical"?(l(),m(y,{key:0},[g("tr",null,[(l(!0),m(y,null,C(t.row,(s,d)=>(l(),I(n(E),{key:`tr1-${d}`,cell:s,tag:"th",type:"label"},null,8,["cell"]))),128))]),g("tr",null,[(l(!0),m(y,null,C(t.row,(s,d)=>(l(),I(n(E),{key:`tr2-${d}`,cell:s,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(l(),m("tr",x,[(l(!0),m(y,null,C(t.row,(s,d)=>(l(),m(y,{key:`tr3-${d}`},[n(i).border?(l(),m(y,{key:0},[z(n(E),{cell:s,tag:"td",type:"label"},null,8,["cell"]),z(n(E),{cell:s,tag:"td",type:"content"},null,8,["cell"])],64)):(l(),I(n(E),{key:1,cell:s,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var se=K(te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const le=S({name:"ElDescriptions"}),ne=S({...le,props:Y,setup(v){const i=v,t=F("descriptions"),N=Q(),s=T();U(A,i);const d=X(()=>[t.b(),t.m(N.value)]),a=(e,c,p,r=!1)=>(e.props||(e.props={}),c>p&&(e.props.span=p),r&&(e.props.span=c),e),$=()=>{var e;const c=G((e=s.default)==null?void 0:e.call(s)).filter(b=>{var h;return((h=b==null?void 0:b.type)==null?void 0:h.name)==="ElDescriptionsItem"}),p=[];let r=[],u=i.column,_=0;return c.forEach((b,h)=>{var k;const f=((k=b.props)==null?void 0:k.span)||1;if(h<c.length-1&&(_+=f>u?u:f),h===c.length-1){const o=i.column-_%i.column;r.push(a(b,o,u,!0)),p.push(r);return}f<u?(u-=f,r.push(b)):(r.push(a(b,f,u)),p.push(r),u=i.column,r=[])}),p};return(e,c)=>(l(),m("div",{class:w(n(d))},[e.title||e.extra||e.$slots.title||e.$slots.extra?(l(),m("div",{key:0,class:w(n(t).e("header"))},[g("div",{class:w(n(t).e("title"))},[B(e.$slots,"title",{},()=>[P(R(e.title),1)])],2),g("div",{class:w(n(t).e("extra"))},[B(e.$slots,"extra",{},()=>[P(R(e.extra),1)])],2)],2)):q("v-if",!0),g("div",{class:w(n(t).e("body"))},[g("table",{class:w([n(t).e("table"),n(t).is("bordered",e.border)])},[g("tbody",null,[(l(!0),m(y,null,C($(),(p,r)=>(l(),I(se,{key:r,row:p},null,8,["row"]))),128))])],2)],2)],2))}});var ae=K(ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]),W=S({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const ie=H(ae,{DescriptionsItem:W}),ce=M(W);export{ie as E,ce as a};
