import{M as w,a as j}from"./index.727dde26.js";import{P as v}from"./index.79d904a0.js";import{_ as h}from"./index.ec0491db.js";import{X as x}from"./ex-pkg-element-plus.7627c250.js";import{y as C,a as u,Z as a,z as V,G as D,H as s,K as c,R as t,u as M,P as m}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-vditor.dd7bd09a.js";import"./ex-pkg-vendor.0d33d667.js";import"./ex-pkg-xlsx.9db082f2.js";import"./ex-pkg-mockjs.907334ba.js";import"./index.e1f32d21.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./onMountedOrActivated.67461842.js";import"./ex-pkg-showdown.bacf86d2.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const b=C({components:{ElCard:x,MarkDown:w,PageWrapper:v,MarkdownViewer:j},setup(){const e=u(null),n=u(`
# title

# content
`),r=u("dark");function p(){const o=M(e);if(!o)return;const d=o.getVditor();r.value=r.value==="dark"?"classic":"dark",d.setTheme(r.value)}function i(o){n.value=o}function l(){n.value=""}return{markdownValue:n,toggleTheme:p,markDownRef:e,handleChange:i,clearValue:l}}}),B={class:"mb-6"},E=m("\u9ED1\u6697\u4E3B\u9898"),F=m("\u6E05\u7A7A\u5185\u5BB9"),A={class:"mt-4"};function P(e,n,r,p,i,l){const o=a("Button"),d=a("MarkDown"),k=a("MarkdownViewer"),f=a("el-card"),_=a("PageWrapper");return V(),D(_,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:s(()=>[c("div",B,[t(o,{onClick:e.toggleTheme},{default:s(()=>[E]),_:1},8,["onClick"]),t(o,{onClick:e.clearValue},{default:s(()=>[F]),_:1},8,["onClick"])]),t(d,{value:e.markdownValue,"onUpdate:value":n[0]||(n[0]=g=>e.markdownValue=g),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"]),c("div",A,[t(f,{header:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:s(()=>[t(k,{value:e.markdownValue},null,8,["value"])]),_:1})])]),_:1})}var L=h(b,[["render",P]]);export{L as default};
