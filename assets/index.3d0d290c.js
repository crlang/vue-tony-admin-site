var Ne=Object.defineProperty,Te=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ae=(e,t,o)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,X=(e,t)=>{for(var o in t||(t={}))we.call(t,o)&&ae(e,o,t[o]);if(te)for(var o of te(t))Se.call(t,o)&&ae(e,o,t[o]);return e},Y=(e,t)=>Te(e,Pe(t));var L=(e,t,o)=>new Promise((y,s)=>{var g=u=>{try{r(o.next(u))}catch(c){s(c)}},p=u=>{try{r(o.throw(u))}catch(c){s(c)}},r=u=>u.done?y(u.value):Promise.resolve(u.value).then(g,p);r((o=o.apply(e,t)).next())});import{N as K,O as V,P as re,d as q,D as J,Q,F as W,r as C,w as k,R as Z,S as A,T as ce,o as ie,f as ue,n as de,b as B,J as Ce,C as be,U as ee,V as se,W as Ee,X as $e,c as D,Y as ve,Z as xe,h as f,$ as I,a0 as Be,a1 as ke,a2 as Oe,a3 as U,q as fe,a4 as Re,M as ze,a5 as Fe,I as me,a6 as pe,a7 as Ae,G as Me,a8 as ne,a9 as Le,aa as le,ab as Ve,s as De,v as Ie,k as Ue,L as Ke,ac as qe}from"./index.b263d89e.js";const j=Symbol("tabsRootContextKey"),We=K({tabs:{type:V(Array),default:()=>re([])}}),je={name:"ElTabBar"},He=q(Y(X({},je),{props:We,setup(e,{expose:t}){const o=e,y="ElTabBar",s=ee(),g=J(j);g||Q(y,"<el-tabs><el-tab-bar /></el-tabs>");const p=W("tabs"),r=C(),u=C(),c=()=>{let i=0,E=0;const _=["top","bottom"].includes(g.props.tabPosition)?"width":"height",d=_==="width"?"x":"y";return o.tabs.every(a=>{var N,h,$,O;const R=(h=(N=s.parent)==null?void 0:N.refs)==null?void 0:h[`tab-${a.paneName}`];if(!R)return!1;if(!a.active)return!0;E=R[`client${A(_)}`];const M=d==="x"?"left":"top";i=R.getBoundingClientRect()[M]-((O=($=R.parentElement)==null?void 0:$.getBoundingClientRect()[M])!=null?O:0);const z=window.getComputedStyle(R);return _==="width"&&(o.tabs.length>1&&(E-=Number.parseFloat(z.paddingLeft)+Number.parseFloat(z.paddingRight)),i+=Number.parseFloat(z.paddingLeft)),!1}),{[_]:`${E}px`,transform:`translate${A(d)}(${i}px)`}},m=()=>u.value=c();return k(()=>o.tabs,()=>L(this,null,function*(){yield Z(),m()}),{immediate:!0}),ce(r,()=>m()),t({ref:r,update:m}),(i,E)=>(ie(),ue("div",{ref_key:"barRef",ref:r,class:de([B(p).e("active-bar"),B(p).is(B(g).props.tabPosition)]),style:Ce(u.value)},null,6))}}));var Xe=be(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const Ye=K({panes:{type:V(Array),default:()=>re([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:V(Function),default:se},onTabRemove:{type:V(Function),default:se},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),oe="ElTabNav",Ge=q({name:oe,props:Ye,setup(e,{expose:t}){const o=ee(),y=J(j);y||Q(oe,"<el-tabs><tab-nav /></el-tabs>");const s=W("tabs"),g=Ee(),p=$e(),r=C(),u=C(),c=C(),m=C(!1),i=C(0),E=C(!1),_=C(!0),d=D(()=>["top","bottom"].includes(y.props.tabPosition)?"width":"height"),a=D(()=>({transform:`translate${d.value==="width"?"X":"Y"}(-${i.value}px)`})),N=()=>{if(!r.value)return;const n=r.value[`offset${A(d.value)}`],b=i.value;if(!b)return;const l=b>n?b-n:0;i.value=l},h=()=>{if(!r.value||!u.value)return;const n=u.value[`offset${A(d.value)}`],b=r.value[`offset${A(d.value)}`],l=i.value;if(n-l<=b)return;const w=n-l>b*2?l+b:n-b;i.value=w},$=()=>L(this,null,function*(){const n=u.value;if(!m.value||!c.value||!r.value||!n)return;yield Z();const b=c.value.querySelector(".is-active");if(!b)return;const l=r.value,w=["top","bottom"].includes(y.props.tabPosition),P=b.getBoundingClientRect(),T=l.getBoundingClientRect(),x=w?n.offsetWidth-T.width:n.offsetHeight-T.height,S=i.value;let v=S;w?(P.left<T.left&&(v=S-(T.left-P.left)),P.right>T.right&&(v=S+P.right-T.right)):(P.top<T.top&&(v=S-(T.top-P.top)),P.bottom>T.bottom&&(v=S+(P.bottom-T.bottom))),v=Math.max(v,0),i.value=Math.min(v,x)}),O=()=>{if(!u.value||!r.value)return;const n=u.value[`offset${A(d.value)}`],b=r.value[`offset${A(d.value)}`],l=i.value;if(b<n){const w=i.value;m.value=m.value||{},m.value.prev=w,m.value.next=w+b<n,n-w<b&&(i.value=n-b)}else m.value=!1,l>0&&(i.value=0)},R=n=>{const b=n.code,{up:l,down:w,left:P,right:T}=U;if(![l,w,P,T].includes(b))return;const x=Array.from(n.currentTarget.querySelectorAll("[role=tab]")),S=x.indexOf(n.target);let v;b===P||b===l?S===0?v=x.length-1:v=S-1:S<x.length-1?v=S+1:v=0,x[v].focus(),x[v].click(),M()},M=()=>{_.value&&(E.value=!0)},z=()=>E.value=!1;return k(g,n=>{n==="hidden"?_.value=!1:n==="visible"&&setTimeout(()=>_.value=!0,50)}),k(p,n=>{n?setTimeout(()=>_.value=!0,50):_.value=!1}),ce(c,O),ve(()=>setTimeout(()=>$(),0)),xe(()=>O()),t({scrollToActiveTab:$,removeFocus:z}),k(()=>e.panes,()=>o.update(),{flush:"post"}),()=>{const n=m.value?[f("span",{class:[s.e("nav-prev"),s.is("disabled",!m.value.prev)],onClick:N},[f(I,null,{default:()=>[f(Be,null,null)]})]),f("span",{class:[s.e("nav-next"),s.is("disabled",!m.value.next)],onClick:h},[f(I,null,{default:()=>[f(ke,null,null)]})])]:null,b=e.panes.map((l,w)=>{var P,T,x,S;const v=(T=(P=l.props.name)!=null?P:l.index)!=null?T:`${w}`,H=l.isClosable||e.editable;l.index=`${w}`;const ge=H?f(I,{class:"is-icon-close",onClick:F=>e.onTabRemove(l,F)},{default:()=>[f(Oe,null,null)]}):null,ye=((S=(x=l.slots).label)==null?void 0:S.call(x))||l.props.label,_e=l.active?0:-1;return f("div",{ref:`tab-${v}`,class:[s.e("item"),s.is(y.props.tabPosition),s.is("active",l.active),s.is("disabled",l.props.disabled),s.is("closable",H),s.is("focus",E.value)],id:`tab-${v}`,key:`tab-${v}`,"aria-controls":`pane-${v}`,role:"tab","aria-selected":l.active,tabindex:_e,onFocus:()=>M(),onBlur:()=>z(),onClick:F=>{z(),e.onTabClick(l,v,F)},onKeydown:F=>{H&&(F.code===U.delete||F.code===U.backspace)&&e.onTabRemove(l,F)}},[ye,ge])});return f("div",{ref:c,class:[s.e("nav-wrap"),s.is("scrollable",!!m.value),s.is(y.props.tabPosition)]},[n,f("div",{class:s.e("nav-scroll"),ref:r},[f("div",{class:[s.e("nav"),s.is(y.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(y.props.tabPosition))],ref:u,style:a.value,role:"tablist",onKeydown:R},[e.type?null:f(Xe,{tabs:[...e.panes]},null),b])])])}}}),Je=K({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:V(Function),default:()=>!0},stretch:Boolean}),G=e=>Ae(e)||Me(e),Qe={[pe]:e=>G(e),"tab-click":(e,t)=>t instanceof Event,"tab-change":e=>G(e),edit:(e,t)=>["remove","add"].includes(t),"tab-remove":e=>G(e),"tab-add":()=>!0};var Ze=q({name:"ElTabs",props:Je,emits:Qe,setup(e,{emit:t,slots:o,expose:y}){var s,g;const p=W("tabs"),r=C(),u=fe({}),c=C((g=(s=e.modelValue)!=null?s:e.activeName)!=null?g:"0"),m=a=>{c.value=a,t(pe,a),t("tab-change",a)},i=a=>L(this,null,function*(){var N,h,$;if(!(c.value===a||ne(a)))try{(yield(N=e.beforeLeave)==null?void 0:N.call(e,a,c.value))!==!1&&(m(a),($=(h=r.value)==null?void 0:h.removeFocus)==null||$.call(h))}catch(O){}}),E=(a,N,h)=>{a.props.disabled||(i(N),t("tab-click",a,h))},_=(a,N)=>{a.props.disabled||ne(a.props.name)||(N.stopPropagation(),t("edit",a.props.name,"remove"),t("tab-remove",a.props.name))},d=()=>{t("edit",void 0,"add"),t("tab-add")};return Re({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},D(()=>!!e.activeName)),k(()=>e.activeName,a=>i(a)),k(()=>e.modelValue,a=>i(a)),k(c,()=>L(this,null,function*(){var a;yield Z(),(a=r.value)==null||a.scrollToActiveTab()})),ze(j,{props:e,currentName:c,registerPane:h=>u[h.uid]=h,unregisterPane:h=>delete u[h]}),y({currentName:c}),()=>{const a=e.editable||e.addable?f("span",{class:p.e("new-tab"),tabindex:"0",onClick:d,onKeydown:$=>{$.code===U.enter&&d()}},[f(I,{class:p.is("icon-plus")},{default:()=>[f(Fe,null,null)]})]):null,N=f("div",{class:[p.e("header"),p.is(e.tabPosition)]},[a,f(Ge,{ref:r,currentName:c.value,editable:e.editable,type:e.type,panes:Object.values(u),stretch:e.stretch,onTabClick:E,onTabRemove:_},null)]),h=f("div",{class:p.e("content")},[me(o,"default")]);return f("div",{class:[p.b(),p.m(e.tabPosition),{[p.m("card")]:e.type==="card",[p.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[N,h]:[h,N]])}}});const et=K({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),tt=["id","aria-hidden","aria-labelledby"],at={name:"ElTabPane"},st=q(Y(X({},at),{props:et,setup(e){const t=e,o="ElTabPane",y=ee(),s=Le(),g=J(j);g||Q(o,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const p=W("tab-pane"),r=C(),u=D(()=>t.closable||g.props.closable),c=le(()=>{var d;return g.currentName.value===((d=t.name)!=null?d:r.value)}),m=C(c.value),i=D(()=>{var d;return(d=t.name)!=null?d:r.value}),E=le(()=>!t.lazy||m.value||c.value);k(c,d=>{d&&(m.value=!0)});const _=fe({uid:y.uid,slots:s,props:t,paneName:i,active:c,index:r,isClosable:u});return ve(()=>{g.registerPane(_)}),Ve(()=>{g.unregisterPane(_.uid)}),(d,a)=>B(E)?De((ie(),ue("div",{key:0,id:`pane-${B(i)}`,class:de(B(p).b()),role:"tabpanel","aria-hidden":!B(c),"aria-labelledby":`tab-${B(i)}`},[me(d.$slots,"default")],10,tt)),[[Ie,B(c)]]):Ue("v-if",!0)}}));var he=be(st,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const ot=Ke(Ze,{TabPane:he}),rt=qe(he);export{ot as E,rt as a};
