var f=(e,d,o)=>new Promise((p,r)=>{var m=s=>{try{a(o.next(s))}catch(n){r(n)}},t=s=>{try{a(o.throw(s))}catch(n){r(n)}},a=s=>s.done?p(s.value):Promise.resolve(s.value).then(m,t);a((o=o.apply(e,d)).next())});import{_ as y,e as C,u as F,h as b}from"./index.a180eed7.js";import{B as $,a as S}from"./index.2a498586.js";import{u as I}from"./lock.5cda1607.js";import{h as L}from"./header.837ca3c8.js";import{B as M}from"./BasicForm.b7b18809.js";import{u as x}from"./useForm.5f193a64.js";import{x as N,aI as R,y as _,X as u,z as E,Y as V,a2 as h,D as l,G as c,F as g,$ as k,aa as z}from"./vendor.5e678e09.js";import"./useAttrs.f893c8ed.js";import"./useWindowSizeFn.c212c501.js";import"./index.24c16315.js";import"./index.3e4f3c3c.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.86b751ed.js";import"./base64Conver.bb012c73.js";import"./index.056c9b24.js";const D=N({name:"LockModal",components:{ElButton:R,BasicModal:$,BasicForm:M},props:{visible:{type:Boolean,default:!1}},setup(){const{t:e}=C(),{prefixCls:d}=F("header-lock-modal"),o=b(),p=I(),r=_(()=>{var i;return(i=o.getUserInfo)==null?void 0:i.realName}),[m,{closeModal:t}]=S(),[a,{validateField:s,resetFields:n,getFieldsValue:v}]=x({showActionButtonGroup:!1,schemas:[{field:"password",label:"",component:"ElInput",componentProps:{type:"password",placeholder:e("layout.header.lockScreenPassword")},required:!0}]});function B(){return f(this,null,function*(){yield s();const w=v().password;t(),p.setLockInfo({isLock:!0,pwd:w}),yield n()})}const j=_(()=>{const{avatar:i}=o.getUserInfo;return i||L});return{prefixCls:d,getRealName:r,register:m,registerForm:a,avatar:j,t:e,handleLock:B}}}),U=["src"];function A(e,d,o,p,r,m){const t=u("BasicForm"),a=u("ElButton"),s=u("BasicModal");return E(),V(s,{title:e.t("layout.header.lockScreen"),onRegister:e.register,width:600,showFooter:!1,"custom-class":e.prefixCls},{default:h(()=>[l("div",{class:c(`${e.prefixCls}__entry`)},[l("div",{class:c(`${e.prefixCls}__header`)},[l("img",{src:e.avatar,class:c(`${e.prefixCls}__header-img`)},null,10,U),l("p",{class:c(`${e.prefixCls}__header-name`)},g(e.getRealName),3)],2),k(t,{onRegister:e.registerForm},null,8,["onRegister"]),l("div",{class:c(`${e.prefixCls}__footer`)},[k(a,{type:"primary",class:"mt-2",onClick:e.handleLock},{default:h(()=>[z(g(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},8,["title","onRegister","custom-class"])}var re=y(D,[["render",A]]);export{re as default};
