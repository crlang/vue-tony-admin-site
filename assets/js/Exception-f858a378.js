import{E as t,j as y,k as N,u as O,P as p,e as R}from"./index-91eee367.js";import{cJ as k}from"./ex-pkg-vendor-69b4619e.js";import{x as S,K as A}from"./ex-pkg-element-plus-6a2cfc13.js";import{y as G,a as P,l as g,u as s,R as r}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-mockjs-abb76a9d.js";var j="/vue-tony-admin-site/assets/no-data.15c5ccd1.svg",C="/vue-tony-admin-site/assets/net-error.23d314b7.svg",D="/vue-tony-admin-site/assets/403.a67ce326.svg",h="/vue-tony-admin-site/assets/404.f3a2336a.svg",I="/vue-tony-admin-site/assets/500.9ac4cbde.svg",U=G({name:"ErrorPage",props:{status:{type:Number,default:t.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=P(new Map),{query:T}=k(),o=y(),c=N(),{t:e}=R(),{prefixCls:x}=O("app-exception-page"),v=g(()=>{const{status:u}=T,{status:l}=n;return Number(u)||l}),f=g(()=>s(a).get(s(v))),d=e("sys.exception.backLogin"),i=e("sys.exception.backHome");return s(a).set(t.PAGE_NOT_ACCESS,{title:"403",status:`${t.PAGE_NOT_ACCESS}`,subTitle:e("sys.exception.subTitle403"),btnText:n.full?d:i,handler:()=>n.full?o(p.BASE_LOGIN):o(),icon:D}),s(a).set(t.PAGE_NOT_FOUND,{title:"404",status:`${t.PAGE_NOT_FOUND}`,subTitle:e("sys.exception.subTitle404"),btnText:n.full?d:i,handler:()=>n.full?o(p.BASE_LOGIN):o(),icon:h}),s(a).set(t.ERROR,{title:"500",status:`${t.ERROR}`,subTitle:e("sys.exception.subTitle500"),btnText:i,handler:()=>o(),icon:I}),s(a).set(t.PAGE_NOT_DATA,{title:e("sys.exception.noDataTitle"),subTitle:"",btnText:e("common.redo"),handler:()=>c(),icon:j}),s(a).set(t.NET_WORK_ERROR,{title:e("sys.exception.networkErrorTitle"),subTitle:e("sys.exception.networkErrorSubTitle"),btnText:e("common.redo"),handler:()=>c(),icon:C}),()=>{const{title:u,subTitle:l,btnText:m,icon:b,handler:_,status:E}=s(f)||{};return r(A,{class:x,status:E,title:n.title||u,"sub-title":n.subTitle||l},{icon:()=>b?r("img",{src:b},null):null,extra:()=>m&&r(S,{type:"primary",onClick:_},{default:()=>m})})}}});export{U as default};
