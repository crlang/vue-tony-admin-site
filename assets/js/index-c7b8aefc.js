import{u as c,I as x,a7 as B,a8 as v,w as p}from"./index-034694ef.js";import{y as i,l as _,z as u,A as m,R as r,u as l,L as d,F as b,E as h,B as w,G as $,O as k}from"./ex-pkg-@vue-6f720869.js";import{g as S}from"./tsxHelper-97245be0.js";import{d5 as g}from"./ex-pkg-vendor-a94c680b.js";import{M as C}from"./ex-pkg-element-plus-fdfdae45.js";const A={expand:{type:Boolean},direction:{type:String,default:"down"}},I={showIndex:{type:Boolean},effect:{type:String,default:"dark"},placement:{type:String,default:"right"},text:{type:[Array,String]}},j={helpMessage:{type:[String,Array],default:""},span:{type:Boolean},bold:{type:Boolean}};const H=i({props:A,setup(a){const n=a,{prefixCls:e}=c("basic-arrow"),o=_(()=>{const{expand:s,direction:t}=n;return[e,`${e}--${t}`,{"is-actived":s}]});return(s,t)=>(u(),m("span",{class:d(l(o))},[r(l(x),{icon:"ion:chevron-forward"})],2))}});var y=i({name:"BasicHelp",components:{InfoFilled:g},props:I,setup(a,{slots:n}){const{prefixCls:e}=c("basic-help");function o(){const s=a.text||"";return B(s)?s:v(s)?s.map((t,f)=>r("p",{key:t},[r(b,null,[a.showIndex?`${f+1}. `:"",t])])):null}return()=>r(C,{"popper-class":`${e}__wrap`,effect:a.effect,placement:a.placement},{content:()=>o(),default:()=>r("span",{class:e},[S(n)||r(g,null,null)])})}});const T=i({props:j,setup(a){const n=a,{prefixCls:e}=c("basic-title"),o=h(),s=_(()=>[e,{[`${e}--span`]:n.span&&o.default},{[`${e}--bold`]:n.bold}]);return(t,f)=>(u(),m("span",{class:d(l(s))},[w(t.$slots,"default"),t.helpMessage?(u(),$(y,{key:0,class:d(`${l(e)}-help`),text:t.helpMessage},null,8,["class","text"])):k("",!0)],2))}}),L=p(H),N=p(T),V=p(y);export{L as B,N as a,V as b};
