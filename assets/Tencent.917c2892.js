var d=(e,r,t)=>new Promise((o,a)=>{var s=n=>{try{p(t.next(n))}catch(c){a(c)}},i=n=>{try{p(t.throw(n))}catch(c){a(c)}},p=n=>n.done?o(n.value):Promise.resolve(n.value).then(s,i);p((t=t.apply(e,r)).next())});import{u}from"./useScript.3a7d7302.js";import{_ as f}from"./index.ecb3b302.js";import{x as l,M as m,W as h,z as w,A as _,S as M,X as g,u as v}from"./vendor.041d4bc7.js";const B="https://map.qq.com/api/gljs?v=1.exp&key=HRBBZ-Z7NRP-ENVDD-LRRMT-GUK2E-PGBW2",R=l({name:"BaiduMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:r}=u({src:B});function t(){return d(this,null,function*(){yield r(),yield g();const o=v(e);if(!o)return;const a=window.TMap;var s=new a.LatLng(39.915,116.404),i=new a.Map(o,{rotation:0,pitch:0,zoom:12,center:s});i.on("tilesloaded",function(){})})}return h(()=>{t()}),{wrapRef:e}}});function x(e,r,t,o,a,s){return w(),_("div",{ref:"wrapRef",style:M({height:e.height,width:e.width})},null,4)}var k=f(R,[["render",x]]);export{k as default};
