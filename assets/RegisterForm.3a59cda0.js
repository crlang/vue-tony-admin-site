var b=(V,s,n)=>new Promise((f,p)=>{var m=d=>{try{u(n.next(d))}catch(c){p(c)}},o=d=>{try{u(n.throw(d))}catch(c){p(c)}},u=d=>d.done?f(d.value):Promise.resolve(d.value).then(m,o);u((n=n.apply(V,s)).next())});import{S}from"./index.bca35d58.js";import{C as E}from"./index.a1d19e61.js";import{e as h}from"./index.b3c9ad7f.js";import{u as R,a as F,L as I,b as L}from"./useLogin.3e155596.js";import{C as g,D as i,F as P,u as x,G as U,b as w}from"./ex-pkg-element-plus.1726aa79.js";import{y as _,a as j,_ as B,l as N,u as e,z as T,G as D,H as r,R as a,P as y,Q as k,O as G}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./propTypes.a1efa9e6.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@element-plus.3c8245e2.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const oe=_({setup(V){const{t:s}=h(),{handleBackLogin:n,getLoginState:f}=R(),p=j(),m=j(!1),o=B({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:u}=F(o),{validForm:d}=L(p),c=N(()=>e(f)===I.REGISTER);function v(){return b(this,null,function*(){if(!!(yield d()))try{m.value=!0,w({title:s("sys.login.registerSuccessTitle"),message:s("sys.login.registerSuccessDesc"),type:"success"})}catch(l){w({title:s("sys.api.errorTip"),message:l.message||s("sys.api.networkExceptionMsg"),type:"error"})}finally{m.value=!1}})}return(C,l)=>e(c)?(T(),D(e(U),{key:0,model:e(o),rules:e(u),ref_key:"formRef",ref:p},{default:r(()=>[a(e(i),{prop:"account"},{default:r(()=>[a(e(g),{modelValue:e(o).account,"onUpdate:modelValue":l[0]||(l[0]=t=>e(o).account=t),placeholder:e(s)("sys.login.userName")},null,8,["modelValue","placeholder"])]),_:1}),a(e(i),{prop:"mobile"},{default:r(()=>[a(e(g),{modelValue:e(o).mobile,"onUpdate:modelValue":l[1]||(l[1]=t=>e(o).mobile=t),placeholder:e(s)("sys.login.mobile")},null,8,["modelValue","placeholder"])]),_:1}),a(e(i),{prop:"sms"},{default:r(()=>[a(e(E),{modelValue:e(o).sms,"onUpdate:modelValue":l[2]||(l[2]=t=>e(o).sms=t),placeholder:e(s)("sys.login.smsCode")},null,8,["modelValue","placeholder"])]),_:1}),a(e(i),{prop:"password"},{default:r(()=>[a(e(S),{modelValue:e(o).password,"onUpdate:modelValue":l[3]||(l[3]=t=>e(o).password=t),placeholder:e(s)("sys.login.password")},null,8,["modelValue","placeholder"])]),_:1}),a(e(i),{prop:"confirmPassword"},{default:r(()=>[a(e(g),{modelValue:e(o).confirmPassword,"onUpdate:modelValue":l[4]||(l[4]=t=>e(o).confirmPassword=t),placeholder:e(s)("sys.login.confirmPassword"),clearable:"","show-password":""},null,8,["modelValue","placeholder"])]),_:1}),a(e(i),{prop:"policy"},{default:r(()=>[a(e(P),{modelValue:e(o).policy,"onUpdate:modelValue":l[5]||(l[5]=t=>e(o).policy=t),checked:e(o).policy},{default:r(()=>[y(k(e(s)("sys.login.policy")),1)]),_:1},8,["modelValue","checked"])]),_:1}),a(e(x),{type:"primary",class:"login--submit",onClick:v,loading:m.value,disabled:e(o).policy===!1},{default:r(()=>[y(k(e(s)("sys.login.registerButton")),1)]),_:1},8,["loading","disabled"]),a(e(x),{onClick:e(n),class:"login--back"},{default:r(()=>[y(k(e(s)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1},8,["model","rules"])):G("",!0)}});export{oe as default};
