var E=(v,a,n)=>new Promise((m,c)=>{var f=o=>{try{u(n.next(o))}catch(i){c(i)}},p=o=>{try{u(n.throw(o))}catch(i){c(i)}},u=o=>o.done?m(o.value):Promise.resolve(o.value).then(f,p);u((n=n.apply(v,a)).next())});import{x as F,M as g,I as h,y as I,u as e,B,C as D,z as M,Y as N,a2 as l,$ as t,al as V,aW as y,aT as x,aX as T,aa as w,F as S,aK as _,aS as U,aY as $,t as j}from"./vendor.edbe4fa8.js";import{e as z,f as O,h as P}from"./index.ccefc80e.js";import{u as W,a as Y,L as b,b as A}from"./useLogin.74c623eb.js";const H=F({setup(v){const{t:a}=z(),{notification:n}=O(),m=P(),{setLoginState:c,getLoginState:f}=W(),{getFormRules:p}=Y(),u=g(),o=g(!1),i=g(!1),r=h({account:"",password:""}),{validForm:L}=A(u),R=I(()=>e(f)===b.LOGIN);function k(){return E(this,null,function*(){if(!!(yield L()))try{o.value=!0;const s=yield m.login(j({password:r.password,username:r.account,mode:"none"}));s&&n.success({title:a("sys.login.loginSuccessTitle"),message:`${a("sys.login.loginSuccessDesc")}: ${s.realName}`,duration:3e3})}catch(s){n.error({title:a("sys.api.errorTip"),message:s.message||a("sys.api.networkExceptionMsg")})}finally{o.value=!1}})}return(C,s)=>B((M(),N(e($),{model:e(r),rules:e(p),ref_key:"formRef",ref:u},{default:l(()=>[t(e(y),{prop:"account"},{default:l(()=>[t(e(V),{modelValue:e(r).account,"onUpdate:modelValue":s[0]||(s[0]=d=>e(r).account=d),placeholder:e(a)("sys.login.userNameEg")},null,8,["modelValue","placeholder"])]),_:1}),t(e(y),{prop:"password",class:"mb-1"},{default:l(()=>[t(e(V),{modelValue:e(r).password,"onUpdate:modelValue":s[1]||(s[1]=d=>e(r).password=d),placeholder:e(a)("sys.login.passwordEg")},null,8,["modelValue","placeholder"])]),_:1}),t(e(U),{class:"mt-3"},{default:l(()=>[t(e(x),{span:12},{default:l(()=>[t(e(T),{modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=d=>i.value=d),size:"small"},{default:l(()=>[w(S(e(a)("sys.login.rememberMe")),1)]),_:1},8,["modelValue"])]),_:1}),t(e(x),{span:12,class:"text-right"},{default:l(()=>[t(e(_),{type:"text",onClick:s[3]||(s[3]=d=>e(c)(e(b).RESET_PASSWORD))},{default:l(()=>[w(S(e(a)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1}),t(e(y),null,{default:l(()=>[t(e(_),{type:"primary",class:"login--submit",loading:o.value,onClick:k},{default:l(()=>[w(S(e(a)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])),[[D,e(R)]])}});export{H as default};
