var V=(F,c,r)=>new Promise((p,d)=>{var o=t=>{try{n(r.next(t))}catch(i){d(i)}},f=t=>{try{n(r.throw(t))}catch(i){d(i)}},n=t=>t.done?p(t.value):Promise.resolve(t.value).then(o,f);n((r=r.apply(F,c)).next())});import{S as k}from"./index.12f428c0.js";import{C as _}from"./index.f7f1a62a.js";import{u as b,a as D,L as h,b as x}from"./useLogin.25f7dae0.js";import{d as R,r as g,s as v,c as A,b as e,o as S,j as U,i as s,h as l,E,z as y,k as L,m as C,B}from"./index.61be89a1.js";import{E as m,a as I}from"./index.1c463f4e.js";import{E as N}from"./index.bdf9eec6.js";import"./form-item.3a95dedf.js";import"./isEqual.755d4a14.js";import"./_baseIsEqual.3f9a7929.js";const P=C("\u6211\u540C\u610Fxxx\u9690\u79C1\u653F\u7B56"),T=C("\u6CE8\u518C"),j=C("\u8FD4\u56DE"),X=R({__name:"RegisterForm",setup(F){const{handleBackLogin:c,getLoginState:r}=b(),p=g(),d=g(!1),o=v({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:f}=D(o),{validForm:n}=x(p),t=A(()=>e(r)===h.REGISTER);function i(){return V(this,null,function*(){if(!!(yield n()))try{d.value=!0,B({title:"\u6CE8\u518C\u6210\u529F",message:"\u6B22\u8FCE\u52A0\u5165",type:"success"})}catch(u){B({title:"\u9519\u8BEF\u63D0\u793A",message:u.message||"\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38",type:"error"})}finally{d.value=!1}})}return(w,u)=>e(t)?(S(),U(e(I),{key:0,model:o,rules:e(f),ref_key:"formRef",ref:p},{default:s(()=>[l(e(m),{prop:"account"},{default:s(()=>[l(e(E),{modelValue:o.account,"onUpdate:modelValue":u[0]||(u[0]=a=>o.account=a),placeholder:"\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),l(e(m),{prop:"mobile"},{default:s(()=>[l(e(E),{modelValue:o.mobile,"onUpdate:modelValue":u[1]||(u[1]=a=>o.mobile=a),placeholder:"\u624B\u673A\u53F7\u7801"},null,8,["modelValue"])]),_:1}),l(e(m),{prop:"sms"},{default:s(()=>[l(e(_),{modelValue:o.sms,"onUpdate:modelValue":u[2]||(u[2]=a=>o.sms=a),placeholder:"\u77ED\u4FE1\u9A8C\u8BC1\u7801"},null,8,["modelValue"])]),_:1}),l(e(m),{prop:"password"},{default:s(()=>[l(e(k),{modelValue:o.password,"onUpdate:modelValue":u[3]||(u[3]=a=>o.password=a),placeholder:"\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),l(e(m),{prop:"confirmPassword"},{default:s(()=>[l(e(E),{modelValue:o.confirmPassword,"onUpdate:modelValue":u[4]||(u[4]=a=>o.confirmPassword=a),placeholder:"\u786E\u8BA4\u5BC6\u7801",clearable:"","show-password":""},null,8,["modelValue"])]),_:1}),l(e(m),{prop:"policy"},{default:s(()=>[l(e(N),{modelValue:o.policy,"onUpdate:modelValue":u[5]||(u[5]=a=>o.policy=a),checked:o.policy},{default:s(()=>[P]),_:1},8,["modelValue","checked"])]),_:1}),l(e(y),{type:"primary",class:"login--submit",onClick:i,loading:d.value,disabled:o.policy===!1},{default:s(()=>[T]),_:1},8,["loading","disabled"]),l(e(y),{onClick:e(c),class:"login--back"},{default:s(()=>[j]),_:1},8,["onClick"])]),_:1},8,["model","rules"])):L("",!0)}});export{X as default};
