var k=(o,n,t)=>new Promise((r,s)=>{var c=e=>{try{a(t.next(e))}catch(f){s(f)}},i=e=>{try{a(t.throw(e))}catch(f){s(f)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(c,i);a((t=t.apply(o,n)).next())});import{ct as I}from"./ex-pkg-vendor-bb3f8859.js";import{X as l,Y as u,d as L}from"./index-26bedde3.js";const d=I({id:"app-lock",state:()=>({lockInfo:l.getLocal(u)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(o){this.lockInfo=Object.assign({},this.lockInfo,o),l.setLocal(u,this.lockInfo,!0)},resetLockInfo(){l.removeLocal(u,!0),this.lockInfo=null},unLock(o){return k(this,null,function*(){var r;const n=L();return((r=this.lockInfo)==null?void 0:r.pwd)===o?(this.resetLockInfo(),!0):yield(()=>k(this,null,function*(){var s;try{const c=(s=n.getUserInfo)==null?void 0:s.username,i=yield n.login({username:c,password:o,goHome:!1,mode:"none"});return i&&this.resetLockInfo(),i}catch(c){return!1}}))()})}}});export{d as u};
