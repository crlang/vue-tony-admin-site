var V=(n,t,d)=>new Promise((a,v)=>{var l=p=>{try{s(d.next(p))}catch(g){v(g)}},m=p=>{try{s(d.throw(p))}catch(g){v(g)}},s=p=>p.done?a(p.value):Promise.resolve(p.value).then(l,m);s((d=d.apply(n,t)).next())});import{x as F,z as y,A as k,D as i,$ as f,u as e,F as C,M as w,cD as Y,P as Z,ba as q,g as J,W,cE as D,y as G,O as Q,Y as ee,a2 as H,B as U,G as h,al as ne,bC as K,C as O,a7 as te,ao as se,b9 as oe,a9 as ae,Z as le,cF as re,a6 as ce,X as L}from"./vendor.1ced56aa.js";import{e as j,I as S,k as ie,bd as ue,H as de,be as pe,u as fe,_ as he}from"./index.b7d256c2.js";import{g as me,d as ve,C as _e}from"./index.dd73fa98.js";import"./index.1c6085be.js";import"./useWindowSizeFn.2e4c2b5e.js";import"./propTypes.13e00d90.js";import"./lock.c0c0dfa5.js";const ge=F({setup(n){const{t}=j();return(d,a)=>(y(),k("div",null,[i("div",null,[i("span",null,[f(e(S),{icon:"uil:enter"})]),i("span",null,C(e(t)("component.app.toSearch")),1)]),i("div",null,[i("span",null,[f(e(S),{icon:"ion:arrow-up-outline"})]),i("span",null,[f(e(S),{icon:"ion:arrow-down-outline"})]),i("span",null,C(e(t)("component.app.toNavigate")),1)]),i("div",null,[i("span",null,[f(e(S),{icon:"mdi:keyboard-esc"})]),i("span",null,C(e(t)("common.closeText")),1)])]))}});function $e(){const n=w([]);return Y(()=>{n.value=[]}),[n,d=>a=>{n.value[d]=a}]}function we(n){return["$","(",")","*","+",".","[","]","?","\\","^","{","}","|"].includes(n)?`\\${n}`:n}function xe(n){const t=[...n].map(a=>we(a)),d=["",...t,""].join(".*");return new RegExp(d)}function ye(n,t,d){const a=w([]),v=w(""),l=w(-1);let m=[];const{t:s}=j(),p=ie(),g=Z(B,200);q(()=>V(this,null,function*(){const r=yield me();m=J(r),ue(m,c=>{c.name=s(c.name)})}));function B(r){if(v.value=r.trim(),!r){a.value=[];return}const c=xe(e(v)),u=de(m,o=>c.test(o.name)&&!o.hideMenu);a.value=R(u,c),l.value=0}function R(r,c,u){const o=[];return r.forEach(_=>{const{name:$,path:x,icon:P,children:M,hideMenu:X,meta:b}=_;!X&&c.test($)&&(!(M==null?void 0:M.length)||(b==null?void 0:b.hideChildrenInMenu))&&o.push({name:(u==null?void 0:u.name)?`${u.name} > ${$}`:$,path:x,icon:P}),!(b==null?void 0:b.hideChildrenInMenu)&&Array.isArray(M)&&M.length&&o.push(...R(M,c,_))}),o}function E(r){const c=r.target.dataset.index;l.value=Number(c)}function N(){!a.value.length||(l.value--,l.value<0&&(l.value=a.value.length-1),A())}function z(){!a.value.length||(l.value++,l.value>a.value.length-1&&(l.value=0),A())}function A(){const r=e(n);if(!r||!Array.isArray(r)||r.length===0||!e(t))return;const c=e(l),u=r[c];if(!u)return;const o=e(t);if(!o)return;const _=u.offsetTop+u.offsetHeight,$=o.offsetHeight,{start:x}=pe({el:o,duration:100,to:_-$});x()}function I(){return V(this,null,function*(){if(!a.value.length)return;const r=e(a),c=e(l);if(r.length===0||c<0)return;const u=r[c];T(),yield W(),p(u.path)})}function T(){a.value=[],d("close")}return D("Enter",I),D("ArrowUp",N),D("ArrowDown",z),D("Escape",T),{handleSearch:g,searchResult:a,keyword:v,activeIndex:l,handleMouseenter:E,handleEnter:I}}const Me=["data-index"],be=F({props:{visible:{type:Boolean}},emits:["close"],setup(n,{emit:t}){const d=n,a=w(null),v=w(null),l=w(""),{t:m}=j(),{prefixCls:s}=fe("header-search-modal"),[p,g]=$e(),{getIsMobile:B}=ve(),{handleSearch:R,searchResult:E,keyword:N,activeIndex:z,handleEnter:A,handleMouseenter:I}=ye(p,a,t),T=G(()=>!N||e(E).length===0),r=G(()=>[s,{[`${s}--mobile`]:e(B)}]);Q(()=>d.visible,u=>{u&&W(()=>{var o;l.value="",(o=e(v))==null||o.focus()})});function c(){E.value=[],t("close")}return(u,o)=>(y(),ee(re,{to:"body"},[f(le,{name:"zoom-fade",mode:"out-in"},{default:H(()=>[n.visible?(y(),k("div",{key:0,class:h(e(r)),onClick:o[3]||(o[3]=oe(()=>{},["stop"]))},[U((y(),k("div",{class:h(`${e(s)}-content`)},[i("div",{class:h(`${e(s)}-input__wrapper`)},[f(e(ne),{class:h(`${e(s)}-input`),placeholder:e(m)("common.searchText"),ref_key:"inputRef",ref:v,clearable:"",modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=_=>l.value=_),onInput:e(R)},{prefix:H(()=>[f(e(K))]),_:1},8,["class","placeholder","modelValue","onInput"]),i("span",{class:h(`${e(s)}-cancel`),onClick:c},C(e(m)("common.cancelText")),3)],2),U(i("div",{class:h(`${e(s)}-nodata`)},C(e(m)("component.app.searchNotData")),3),[[O,e(T)]]),U(i("ul",{class:h(`${e(s)}-list`),ref_key:"scrollWrap",ref:a},[(y(!0),k(te,null,se(e(E),(_,$)=>(y(),k("li",{ref_for:!0,ref:e(g)($),key:_.path,"data-index":$,onMouseenter:o[1]||(o[1]=(...x)=>e(I)&&e(I)(...x)),onClick:o[2]||(o[2]=(...x)=>e(A)&&e(A)(...x)),class:h([`${e(s)}-list__item`,{[`${e(s)}-list__item--active`]:e(z)===$}])},[i("div",{class:h(`${e(s)}-list__item-icon`)},[f(e(S),{icon:_.icon||"mdi:form-select",size:20},null,8,["icon"])],2),i("div",{class:h(`${e(s)}-list__item-text`)},C(_.name),3),i("div",{class:h(`${e(s)}-list__item-enter`)},[f(e(S),{icon:"uil:enter",size:20})],2)],42,Me))),128))],2),[[O,!e(T)]]),f(ge,{class:h(`${e(s)}-footer`)},null,8,["class"])],2)),[[e(_e),c]])],2)):ae("",!0)]),_:1})]))}}),ke=F({name:"AppSearch",components:{ElTooltip:ce,AppSearchModal:be,Search:K},setup(){const n=w(!1),{t}=j();return{t,showModal:n}}});function Ce(n,t,d,a,v,l){const m=L("Search"),s=L("ElTooltip"),p=L("AppSearchModal");return y(),k("div",{onClick:t[1]||(t[1]=g=>n.showModal=!0)},[f(s,{effect:"dark",content:n.t("common.searchText"),placement:"bottom-end"},{default:H(()=>[i("span",null,[f(m)])]),_:1},8,["content"]),f(p,{onClose:t[0]||(t[0]=g=>n.showModal=!1),visible:n.showModal},null,8,["visible"])])}var Be=he(ke,[["render",Ce]]);export{Be as default};
