var B=(_,m,n)=>new Promise((p,i)=>{var f=o=>{try{l(n.next(o))}catch(s){i(s)}},c=o=>{try{l(n.throw(o))}catch(s){i(s)}},l=o=>o.done?p(o.value):Promise.resolve(o.value).then(f,c);l((n=n.apply(_,m)).next())});import{y as D,a as g,_ as S,l as b,u as e,I as R,J as L,z as h,G as j,H as u,R as a,a9 as A,P as F,ak as I}from"./ex-pkg-@vue-feb543c0.js";import{c as N,d as U}from"./index-26bedde3.js";import{u as K,a as z,L as C,b as G}from"./useLogin-68a7c7de.js";import{A as x,B as E,x as k,C as M,u as v,w as O,D as P}from"./ex-pkg-element-plus-f609432a.js";import"./ex-pkg-vendor-bb3f8859.js";import"./ex-pkg-mockjs-ec7a233b.js";const T=F(" \u8BB0\u4F4F\u6211"),$=F("\u5FD8\u8BB0\u5BC6\u7801?"),H=F("\u767B\u5F55"),ee=D({setup(_){const{notification:m}=N(),n=U(),{setLoginState:p,getLoginState:i}=K(),{getFormRules:f}=z(),c=g(),l=g(!1),o=g(!1),s=S({account:"admin",password:"123456"}),{validForm:y}=G(c),V=b(()=>e(i)===C.LOGIN);function w(){return B(this,null,function*(){yield y();try{l.value=!0;const d=yield n.login(I({password:s.password,username:s.account,mode:"none"}));d&&m.success({title:"	\u767B\u5F55\u6210\u529F",message:`\u6B22\u8FCE\u56DE\u6765: ${d.realName}`,duration:3e3})}catch(d){m.error({title:"\u9519\u8BEF\u63D0\u793A",message:d.message||"\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38"})}finally{l.value=!1}})}return(d,t)=>R((h(),j(e(P),{model:e(s),rules:e(f),ref_key:"formRef",ref:c},{default:u(()=>[a(e(E),{prop:"account"},{default:u(()=>[a(e(x),{modelValue:e(s).account,"onUpdate:modelValue":t[0]||(t[0]=r=>e(s).account=r),placeholder:"\u8D26\u53F7 admin/tony"},null,8,["modelValue"])]),_:1}),a(e(E),{prop:"password",class:"mb-1"},{default:u(()=>[a(e(x),{modelValue:e(s).password,"onUpdate:modelValue":t[1]||(t[1]=r=>e(s).password=r),placeholder:"\u5BC6\u7801 123456",onKeypress:A(w,["enter"])},null,8,["modelValue","onKeypress"])]),_:1}),a(e(O),{class:"mt-3"},{default:u(()=>[a(e(k),{span:12},{default:u(()=>[a(e(M),{modelValue:o.value,"onUpdate:modelValue":t[2]||(t[2]=r=>o.value=r),size:"small"},{default:u(()=>[T]),_:1},8,["modelValue"])]),_:1}),a(e(k),{span:12,class:"text-right"},{default:u(()=>[a(e(v),{type:"text",onClick:t[3]||(t[3]=r=>e(p)(e(C).RESET_PASSWORD))},{default:u(()=>[$]),_:1})]),_:1})]),_:1}),a(e(E),null,{default:u(()=>[a(e(v),{type:"primary",class:"login--submit",loading:l.value,onClick:w},{default:u(()=>[H]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])),[[L,e(V)]])}});export{ee as default};
