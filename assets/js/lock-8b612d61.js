var k=(o,r,t)=>new Promise((n,s)=>{var c=e=>{try{i(t.next(e))}catch(f){s(f)}},a=e=>{try{i(t.throw(e))}catch(f){s(f)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(c,a);i((t=t.apply(o,r)).next())});import{cr as I}from"./ex-pkg-vendor-69b4619e.js";import{a1 as l,a2 as u,h as L}from"./index-91eee367.js";const p=I({id:"app-lock",state:()=>({lockInfo:l.getLocal(u)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(o){this.lockInfo=Object.assign({},this.lockInfo,o),l.setLocal(u,this.lockInfo,!0)},resetLockInfo(){l.removeLocal(u,!0),this.lockInfo=null},unLock(o){return k(this,null,function*(){var n;const r=L();return((n=this.lockInfo)==null?void 0:n.pwd)===o?(this.resetLockInfo(),!0):yield(()=>k(this,null,function*(){var s;try{const c=(s=r.getUserInfo)==null?void 0:s.username,a=yield r.login({username:c,password:o,goHome:!1,mode:"none"});return a&&this.resetLockInfo(),a}catch(c){return!1}}))()})}}});export{p as u};
