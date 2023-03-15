import{_ as w,d as D,bC as h,q as v,c as E,e as i,o as d,f as I,h as e,i as t,n as m,k as C,l as k,g as r,t as S,m as U,bI as L,bG as A}from"./index.a812ffa9.js";import{D as M}from"./siteSetting.42982d03.js";import{E as $,d as b,e as y,c as B,u as N}from"./index.bb96a6b7.js";import{a as F}from"./index.80078828.js";import{h as P}from"./header.0b104db2.js";import"./lock.f9dff9cb.js";import"./index.c229c7c5.js";import"./index.2271c5c3.js";import"./index.e4429517.js";import"./index.48be7fd2.js";import"./useTimeout.3debf569.js";import"./drawer.55be0fb4.js";import"./_baseIsEqual.bce9394a.js";import"./index.c7ff1079.js";import"./dropdown.01d4c192.js";import"./index.ba82fa59.js";import"./index.00e0b22a.js";import"./index.e07eb570.js";import"./useWindowSizeFn.1725b147.js";import"./index.fb19ae5d.js";import"./index.6bf5f43d.js";import"./use-dialog.8523a096.js";import"./index.f3e99c90.js";import"./refs.7c70278f.js";import"./index.3f8d4f49.js";import"./strings.2b325842.js";import"./index.fbd5cbb3.js";import"./index.1a2dfbe3.js";import"./index.68f69cb3.js";import"./isEqual.f6c0098b.js";import"./form-item.7fe87d07.js";import"./col.93f66016.js";import"./card.bf554046.js";import"./description.cf55f5f3.js";import"./index.6c72c066.js";import"./tsxHelper.25cd2f92.js";const R=D({name:"UserDropdown",components:{ElDropdown:$,ElDropdownItem:b,ElDropdownMenu:y,LockAction:B(()=>A(()=>import("./LockModal.8bf87dee.js"),["assets/LockModal.8bf87dee.js","assets/index.a812ffa9.js","assets/index.80078828.js","assets/index.fbd5cbb3.js","assets/index.1a2dfbe3.js","assets/index.48be7fd2.js","assets/index.f3e99c90.js","assets/index.68f69cb3.js","assets/strings.2b325842.js","assets/isEqual.f6c0098b.js","assets/_baseIsEqual.bce9394a.js","assets/drawer.55be0fb4.js","assets/form-item.7fe87d07.js","assets/col.93f66016.js","assets/card.bf554046.js","assets/dropdown.01d4c192.js","assets/description.cf55f5f3.js","assets/index.6c72c066.js","assets/tsxHelper.25cd2f92.js","assets/useWindowSizeFn.1725b147.js","assets/index.ba82fa59.js","assets/index.00e0b22a.js","assets/index.fb19ae5d.js","assets/refs.7c70278f.js","assets/use-dialog.8523a096.js","assets/lock.f9dff9cb.js","assets/index.7264ffb9.js","assets/index.c76667f6.js","assets/index.b98834c9.js","assets/index.6808290a.js","assets/index.a7c381f2.js","assets/index.2b992e0e.js","assets/index.09c51ff0.js","assets/index.510e3cb5.js","assets/index.c6940f23.js","assets/header.0b104db2.js","assets/useForm.e1145b7d.js"])),SvgIcon:h},props:{itemClass:String},setup(){const{prefixCls:o}=U("header-user-dropdown"),{getShowDoc:u,getUseLockPage:_}=N(),p=v(),f=E(()=>{const{realName:a="",avatar:c,desc:l}=p.getUserInfo||{};return{realName:a,avatar:c||P,desc:l}}),[g,{openModal:n}]=F();function s(a){switch(a){case"logout":p.confirmLoginOut();break;case"doc":L(M);break;case"lock":n(!0);break}}return{prefixCls:o,getUserInfo:f,handleMenuClick:s,getShowDoc:u,register:g,getUseLockPage:_}}}),V=["src"],O=r("span",null,"\u6587\u6863",-1),x=r("span",null,"\u9501\u5B9A\u5C4F\u5E55",-1),q=r("span",null,"\u9000\u51FA\u7CFB\u7EDF",-1);function z(o,u,_,p,f,g){const n=i("SvgIcon"),s=i("ElDropdownItem"),a=i("ElDropdownMenu"),c=i("ElDropdown"),l=i("LockAction");return d(),I("div",null,[e(c,{onCommand:o.handleMenuClick},{dropdown:t(()=>[e(a,{class:m(`${o.prefixCls}-menulist`)},{default:t(()=>[o.getShowDoc?(d(),C(s,{key:0,command:"doc"},{default:t(()=>[e(n,{class:"mr-2",name:"filetext"}),O]),_:1})):k("",!0),o.getUseLockPage?(d(),C(s,{key:1,divided:o.getShowDoc,command:"lock"},{default:t(()=>[e(n,{class:"mr-2",name:"lock"}),x]),_:1},8,["divided"])):k("",!0),e(s,{command:"logout"},{default:t(()=>[e(n,{class:"mr-2",name:"poweroff"}),q]),_:1})]),_:1},8,["class"])]),default:t(()=>[r("div",{class:m(o.prefixCls)},[r("img",{class:m(`${o.prefixCls}__avatar`),src:o.getUserInfo.avatar},null,10,V),r("span",{class:m(`${o.prefixCls}__name`)},S(o.getUserInfo.realName),3)],2)]),_:1},8,["onCommand"]),e(l,{onRegister:o.register},null,8,["onRegister"])])}const Uo=w(R,[["render",z]]);export{Uo as default};
