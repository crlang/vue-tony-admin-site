var d=(e,r,t)=>new Promise((o,n)=>{var s=a=>{try{p(t.next(a))}catch(c){n(c)}},i=a=>{try{p(t.throw(a))}catch(c){n(c)}},p=a=>a.done?o(a.value):Promise.resolve(a.value).then(s,i);p((t=t.apply(e,r)).next())});import{u}from"./useScript.07659218.js";import{_ as f}from"./index.b7d256c2.js";import{x as l,M as m,V as h,z as w,A as _,S as M,W as g,u as v}from"./vendor.1ced56aa.js";const B="https://map.qq.com/api/gljs?v=1.exp&key=HRBBZ-Z7NRP-ENVDD-LRRMT-GUK2E-PGBW2",R=l({name:"BaiduMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=m(null),{toPromise:r}=u({src:B});function t(){return d(this,null,function*(){yield r(),yield g();const o=v(e);if(!o)return;const n=window.TMap;var s=new n.LatLng(39.915,116.404),i=new n.Map(o,{rotation:0,pitch:0,zoom:12,center:s});i.on("tilesloaded",function(){})})}return h(()=>{t()}),{wrapRef:e}}});function x(e,r,t,o,n,s){return w(),_("div",{ref:"wrapRef",style:M({height:e.height,width:e.width})},null,4)}var k=f(R,[["render",x]]);export{k as default};
