var b=Object.defineProperty;var F=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(r,e,o)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,w=(r,e)=>{for(var o in e||(e={}))S.call(e,o)&&v(r,o,e[o]);if(F)for(var o of F(e))D.call(e,o)&&v(r,o,e[o]);return r};var E=(r,e,o)=>new Promise((u,R)=>{var m=l=>{try{a(o.next(l))}catch(s){R(s)}},g=l=>{try{a(o.throw(l))}catch(s){R(s)}},a=l=>l.done?u(l.value):Promise.resolve(l.value).then(m,g);a((o=o.apply(r,e)).next())});import{e as y}from"./index.c38c7de5.js";import{M as G,y as d,u as f}from"./vendor.041d4bc7.js";var h;(function(r){r[r.LOGIN=0]="LOGIN",r[r.REGISTER=1]="REGISTER",r[r.RESET_PASSWORD=2]="RESET_PASSWORD",r[r.MOBILE=3]="MOBILE",r[r.QR_CODE=4]="QR_CODE"})(h||(h={}));const P=G(0);function A(){function r(u){P.value=u}const e=d(()=>P.value);function o(){r(0)}return{setLoginState:r,getLoginState:e,handleBackLogin:o}}function B(r){function e(){return E(this,null,function*(){const o=f(r);return o?yield o.validate():void 0})}return{validForm:e}}function C(r){const{t:e}=y(),o=d(()=>p(e("sys.login.accountPlaceholder"))),u=d(()=>p(e("sys.login.passwordPlaceholder"))),R=d(()=>p(e("sys.login.smsPlaceholder"))),m=(s,t,n)=>n(t?null:new Error(e("sys.login.policyPlaceholder"))),g=(s,t,n,c)=>{const{t:i}=y();if(t)if(r[c]===t)n();else return n(new Error(i("sys.login.diffPwd")));else return n(new Error(i("sys.login.passwordPlaceholder")))},a=(s,t,n)=>{const{t:c}=y();if(t)if(/^1[3,4,5,6,7,8,9][0-9]{9}$/.test(t))n();else return n(new Error(c("sys.login.mobileError")));else return n(new Error(c("sys.login.mobilePlaceholder")))};return{getFormRules:d(()=>{const s=f(o),t=f(u),c={sms:f(R),mobile:[{required:!0,validator:a,trigger:"blur"}]};switch(f(P)){case 1:return w({account:s,password:t,confirmPassword:[{validator:(i,O,I)=>g(i,O,I,"password"),trigger:"blur"}],policy:[{validator:m,trigger:"change"}]},c);case 2:return w({account:s},c);case 3:return c;default:return{account:s,password:t}}})}}function p(r,e="blur"){return[{required:!0,message:r,trigger:e}]}export{h as L,C as a,B as b,A as u};
