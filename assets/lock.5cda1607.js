var l=(o,n,t)=>new Promise((r,s)=>{var c=e=>{try{i(t.next(e))}catch(f){s(f)}},a=e=>{try{i(t.throw(e))}catch(f){s(f)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(c,a);i((t=t.apply(o,n)).next())});import{h as I}from"./vendor.5e678e09.js";import{a4 as u,a5 as k,h as L}from"./index.a180eed7.js";const d=I({id:"app-lock",state:()=>({lockInfo:u.getLocal(k)}),getters:{getLockInfo(){return this.lockInfo}},actions:{setLockInfo(o){this.lockInfo=Object.assign({},this.lockInfo,o),u.setLocal(k,this.lockInfo,!0)},resetLockInfo(){u.removeLocal(k,!0),this.lockInfo=null},unLock(o){return l(this,null,function*(){var r;const n=L();return((r=this.lockInfo)==null?void 0:r.pwd)===o?(this.resetLockInfo(),!0):yield(()=>l(this,null,function*(){var s;try{const c=(s=n.getUserInfo)==null?void 0:s.username,a=yield n.login({username:c,password:o,goHome:!1,mode:"none"});return a&&this.resetLockInfo(),a}catch(c){return!1}}))()})}}});export{d as u};
