import{P as B}from"./index.2db0f4ce.js";import{e as C,aw as E,ax as x,ak as F,_ as j,ab as w,j as h,O as k,w as N}from"./index.b3c9ad7f.js";import{g as $}from"./ex-pkg-@vueuse.e5d644bd.js";import{y as D,a as O,b as y,z as T,A,Q as S,Z as m,G as I,H as u,R as o,K as M}from"./ex-pkg-@vue.dfd8e273.js";import{C as H}from"./index.4cd5987a.js";import{V as Y,U as P}from"./ex-pkg-element-plus.1726aa79.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./ex-pkg-@element-plus.3c8245e2.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./index.755f7294.js";import"./tsxHelper.88158ea5.js";import"./index.cd4e42f7.js";import"./useTimeout.be9115ef.js";const d=1e3,f=d*60,_=f*60,b=_*24,U=D({name:"Time",props:{value:{type:[String,Number,Date],required:!0},step:{type:Number,default:60},mode:{type:String,default:"relative"}},setup(t){const r=O(""),{t:i}=C();$(p,t.step*d),y(()=>t.value,()=>{p()},{immediate:!0});function v(){const{value:e}=t;let a=0;if(w(e)){const s=e.toString().length>10?e:e*1e3;a=new Date(s).getTime()}else h(e)?a=new Date(e).getTime():k(e)&&(a=e.getTime());return a}function p(){const{mode:e,value:a}=t,s=v();e==="relative"?r.value=g(s):e==="datetime"?r.value=E(a):e==="date"&&(r.value=x(a))}function g(e){const a=new Date().getTime(),s=F(e).isBefore(a);let n=a-e;s||(n=-n);let l="";const c=i(s?"component.time.before":"component.time.after");return n<d?l=i("component.time.just"):n<f?l=parseInt(n/d)+i("component.time.seconds")+c:n>=f&&n<_?l=Math.floor(n/f)+i("component.time.minutes")+c:n>=_&&n<b?l=Math.floor(n/_)+i("component.time.hours")+c:n>=b&&n<262386e4?l=Math.floor(n/b)+i("component.time.days")+c:n>=262386e4&&n<=3156786e4&&s?l=F(e).format("MM-DD-HH-mm"):l=F(e).format("YYYY"),l}return{date:r}}});function R(t,r,i,v,p,g){return T(),A("span",null,S(t.date),1)}var V=j(U,[["render",R]]);const W=N(V),q=D({components:{ElDescriptions:Y,ElDescriptionsItem:P,PageWrapper:B,Time:W,CollapseContainer:H},setup(){const t=new Date().getTime();function r(i){console.table(i)}return{now:t,time1:t-60*3*1e3,time2:t-86400*3*1e3,handleExpand:r}}}),z=M("br",null,null,-1);function G(t,r,i,v,p,g){const e=m("Time"),a=m("CollapseContainer"),s=m("el-descriptions-item"),n=m("el-descriptions"),l=m("PageWrapper");return T(),I(l,{title:"\u65F6\u95F4\u7EC4\u4EF6\u793A\u4F8B"},{default:u(()=>[o(a,{title:"\u57FA\u7840\u793A\u4F8B"},{default:u(()=>[o(e,{value:t.time1},null,8,["value"]),z,o(e,{value:t.time2},null,8,["value"])]),_:1}),o(a,{title:"\u5B9A\u65F6\u66F4\u65B0",onExpand:t.handleExpand,class:"mt-4"},{default:u(()=>[o(n,{column:1,border:""},{default:u(()=>[o(s,{label:"\u6BCF60\u79D2\u66F4\u65B0(\u9ED8\u8BA4)"},{default:u(()=>[o(e,{value:t.now},null,8,["value"])]),_:1}),o(s,{label:"\u683C\u5F0F\u5316\u65E5\u671F"},{default:u(()=>[o(e,{value:t.now,mode:"date"},null,8,["value"])]),_:1}),o(s,{label:"\u683C\u5F0F\u5316\u65F6\u95F4"},{default:u(()=>[o(e,{value:t.now,mode:"datetime"},null,8,["value"])]),_:1}),o(s,{label:"\u6BCF\u79D2\u66F4\u65B0"},{default:u(()=>[o(e,{value:t.now,step:1},null,8,["value"])]),_:1}),o(s,{label:"\u6BCF5\u79D2\u66F4\u65B0"},{default:u(()=>[o(e,{value:t.now,step:5},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["onExpand"])]),_:1})}var re=j(q,[["render",G]]);export{re as default};
