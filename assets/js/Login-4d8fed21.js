import{_ as h,A as N,a as P,b as B,u as M,c as R,d as I,e as D}from"./index-034694ef.js";import V from"./LoginForm-f0c4097d.js";import O from"./ForgetPasswordForm-5f77eea3.js";import G from"./RegisterForm-a1bf765f.js";import z from"./MobileForm-bbd215b3.js";import{u as Q,L as l}from"./useLogin-22db80bc.js";import{y as H,z as K,A as U,B as Z}from"./ex-pkg-element-plus-fdfdae45.js";import{y as q,a as J,l as W,u,b as X,Z as s,z as p,A as C,K as o,L as n,R as a,H as d,P as $,Q as t,G as v,O as f}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";import"./index-504d29a3.js";import"./index-7fc3c83a.js";import"./propTypes-7bd4f998.js";var Y="/vue-tony-admin-site/assets/login_bg_light.2c1c2b32.jpg",x="/vue-tony-admin-site/assets/login_bg_dark.9565f0da.jpg";const ee=q({components:{ElRow:H,ElCol:K,ElTabs:U,ElTabPane:Z,LoginForm:V,ForgetPasswordForm:O,RegisterForm:G,MobileForm:z,AppLogo:N,AppLocalePicker:P,AppDarkModeToggle:B},props:{sessionTimeout:{type:Boolean}},setup(){const{prefixCls:e}=M("login"),k=R().getShowPicker,{setLoginState:_,getLoginState:m}=Q(),{title:F}=I(),{t:g}=D(),c=J("account"),b={account:l.LOGIN,mobile:l.MOBILE},L=W(()=>u(m)===l.LOGIN||u(m)===l.MOBILE||u(m)===l.QR_CODE);return X(()=>u(c),r=>{r&&_(b[r])}),{prefixCls:e,t:g,title:F,showLocale:k,setLoginState:_,getShow:L,LoginStateEnum:l,activeName:c}}});function oe(e,i,k,_,m,F){const g=s("el-col"),c=s("AppLocalePicker"),b=s("AppDarkModeToggle"),L=s("AppLogo"),r=s("el-tab-pane"),w=s("el-tabs"),S=s("LoginForm"),j=s("ForgetPasswordForm"),T=s("RegisterForm"),A=s("MobileForm"),E=s("el-row");return p(),C("div",{class:n(e.prefixCls)},[o("div",{class:n(`${e.prefixCls}__bg`)},[o("img",{src:Y,class:n(`${e.prefixCls}__bg--light`)},null,2),o("img",{src:x,class:n(`${e.prefixCls}__bg--dark`)},null,2)],2),a(E,{class:n(`${e.prefixCls}__inner`)},{default:d(()=>[a(g,{span:14},{default:d(()=>[o("div",{class:n(`${e.prefixCls}__left`)},[o("h1",null,[$(t(e.t("sys.login.welcome"))+" ",1),o("span",null,t(e.title),1)]),o("p",null,t(e.title)+" "+t(e.t("sys.login.sloganTitle")),1),o("p",null,t(e.t("sys.login.sloganDesc")),1)],2)]),_:1}),a(g,{span:10},{default:d(()=>[o("div",{class:n(`${e.prefixCls}__right`)},[o("div",{class:n(`${e.prefixCls}__mode`)},[!e.sessionTimeout&&e.showLocale?(p(),v(c,{key:0,class:"mr-2",size:"24",showText:!1})):f("",!0),e.sessionTimeout?f("",!0):(p(),v(b,{key:1}))],2),o("div",{class:n(`${e.prefixCls}__logo`)},[a(L),o("p",null,t(e.t("sys.login.slogan")),1)],2),o("div",{class:n(`${e.prefixCls}__form`)},[e.getShow?(p(),v(w,{key:0,modelValue:e.activeName,"onUpdate:modelValue":i[0]||(i[0]=y=>e.activeName=y)},{default:d(()=>[a(r,{label:e.t("sys.login.signInFormTitle"),name:"account"},null,8,["label"]),a(r,{label:e.t("sys.login.mobileSignInFormTitle"),name:"mobile"},null,8,["label"])]),_:1},8,["modelValue"])):f("",!0),a(S),a(j),a(T),a(A)],2),e.getShow?(p(),C("div",{key:0,class:n(`${e.prefixCls}__regnew`)},[$(t(e.t("sys.login.noAccount"))+" ",1),o("span",{onClick:i[1]||(i[1]=y=>e.setLoginState(e.LoginStateEnum.REGISTER))},t(e.t("sys.login.registerButton")),1)],2)):f("",!0)],2)]),_:1})]),_:1},8,["class"])],2)}var fe=h(ee,[["render",oe]]);export{fe as default};
