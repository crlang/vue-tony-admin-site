import{cp as Bt,R as M,c as A,ai as De,w as _,Z as qe,W as vn,c8 as Oe,ap as It,b as c,N as gn,r as j,ak as Se,cq as ht,cr as mn,bD as hn,cs as yn,ct as bn,Q as ee,L as wn,D as Ce,d as L,F as ie,I as se,C as ke,K as le,o as Z,f as $e,n as jt,G as On,cu as Ze,v as Ft,cv as Tn,M as En,al as Cn,cw as Rn,cx as An,h as Re,cy as _t,cz as He,cA as Dt,k as ce,i as te,aD as Ge,l as Ae,c6 as xn,aj as yt,bV as Pn,J as Lt,a4 as bt,av as Sn,b2 as we,x as kn,bF as Mn,bW as Bn,cB as In,am as jn,b1 as Fn,cC as _n,t as Dn}from"./index.a812ffa9.js";const Y=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)},Kr=e=>t=>t.pointerType==="mouse"?e(t):void 0;function Ln(e){return e===void 0}const Nn=Bt({type:M(Boolean),default:null}),$n=Bt({type:M(Function)}),Hn=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t],r={[e]:Nn,[n]:$n};return{useModelToggle:({indicator:s,toggleReason:u,shouldHideWhenRouteChanges:l,shouldProceed:i,onShow:f,onHide:v})=>{const h=vn(),{emit:g}=h,m=h.props,d=A(()=>De(m[n])),T=A(()=>m[e]===null),p=O=>{s.value!==!0&&(s.value=!0,u&&(u.value=O),De(f)&&f(O))},w=O=>{s.value!==!1&&(s.value=!1,u&&(u.value=O),De(v)&&v(O))},E=O=>{if(m.disabled===!0||De(i)&&!i())return;const R=d.value&&Oe;R&&g(t,!0),(T.value||!R)&&p(O)},y=O=>{if(m.disabled===!0||!Oe)return;const R=d.value&&Oe;R&&g(t,!1),(T.value||!R)&&w(O)},C=O=>{!It(O)||(m.disabled&&O?d.value&&g(t,!1):s.value!==O&&(O?p():w()))},x=()=>{s.value?y():E()};return _(()=>m[e],C),l&&h.appContext.config.globalProperties.$route!==void 0&&_(()=>({...h.proxy.$route}),()=>{l.value&&s.value&&y()}),qe(()=>{C(m[e])}),{hide:y,show:E,toggle:x,hasUpdateHandler:d}},useModelToggleProps:r,useModelToggleEmits:o}};var H="top",K="bottom",U="right",W="left",Xe="auto",Me=[H,K,U,W],fe="start",xe="end",Wn="clippingParents",Nt="viewport",be="popper",qn="reference",wt=Me.reduce(function(e,t){return e.concat([t+"-"+fe,t+"-"+xe])},[]),Ye=[].concat(Me,[Xe]).reduce(function(e,t){return e.concat([t,t+"-"+fe,t+"-"+xe])},[]),Kn="beforeRead",Un="read",zn="afterRead",Vn="beforeMain",Zn="main",Jn="afterMain",Gn="beforeWrite",Xn="write",Yn="afterWrite",Qn=[Kn,Un,zn,Vn,Zn,Jn,Gn,Xn,Yn];function G(e){return e?(e.nodeName||"").toLowerCase():null}function z(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=z(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=z(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Qe(e){if(typeof ShadowRoot>"u")return!1;var t=z(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function eo(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!q(a)||!G(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(s){var u=r[s];u===!1?a.removeAttribute(s):a.setAttribute(s,u===!0?"":u)}))})}function to(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},s=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),u=s.reduce(function(l,i){return l[i]="",l},{});!q(r)||!G(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(l){r.removeAttribute(l)}))})}}var $t={name:"applyStyles",enabled:!0,phase:"write",fn:eo,effect:to,requires:["computeStyles"]};function J(e){return e.split("-")[0]}var ae=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(q(e)&&t){var a=e.offsetHeight,s=e.offsetWidth;s>0&&(o=ve(n.width)/s||1),a>0&&(r=ve(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function et(e){var t=ge(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Ht(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Qe(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Q(e){return z(e).getComputedStyle(e)}function no(e){return["table","td","th"].indexOf(G(e))>=0}function ne(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ke(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(Qe(e)?e.host:null)||ne(e)}function Ot(e){return!q(e)||Q(e).position==="fixed"?null:e.offsetParent}function oo(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&q(e)){var o=Q(e);if(o.position==="fixed")return null}var r=Ke(e);for(Qe(r)&&(r=r.host);q(r)&&["html","body"].indexOf(G(r))<0;){var a=Q(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Be(e){for(var t=z(e),n=Ot(e);n&&no(n)&&Q(n).position==="static";)n=Ot(n);return n&&(G(n)==="html"||G(n)==="body"&&Q(n).position==="static")?t:n||oo(e)||t}function tt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Te(e,t,n){return ae(e,We(t,n))}function ro(e,t,n){var o=Te(e,t,n);return o>n?n:o}function Wt(){return{top:0,right:0,bottom:0,left:0}}function qt(e){return Object.assign({},Wt(),e)}function Kt(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var ao=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,qt(typeof e!="number"?e:Kt(e,Me))};function io(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,s=n.modifiersData.popperOffsets,u=J(n.placement),l=tt(u),i=[W,U].indexOf(u)>=0,f=i?"height":"width";if(!(!a||!s)){var v=ao(r.padding,n),h=et(a),g=l==="y"?H:W,m=l==="y"?K:U,d=n.rects.reference[f]+n.rects.reference[l]-s[l]-n.rects.popper[f],T=s[l]-n.rects.reference[l],p=Be(a),w=p?l==="y"?p.clientHeight||0:p.clientWidth||0:0,E=d/2-T/2,y=v[g],C=w-h[f]-v[m],x=w/2-h[f]/2+E,O=Te(y,x,C),R=l;n.modifiersData[o]=(t={},t[R]=O,t.centerOffset=O-x,t)}}function so(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Ht(t.elements.popper,r)||(t.elements.arrow=r))}var lo={name:"arrow",enabled:!0,phase:"main",fn:io,effect:so,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var uo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function po(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(n*r)/r||0}}function Tt(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,s=e.offsets,u=e.position,l=e.gpuAcceleration,i=e.adaptive,f=e.roundOffsets,v=e.isFixed,h=s.x,g=h===void 0?0:h,m=s.y,d=m===void 0?0:m,T=typeof f=="function"?f({x:g,y:d}):{x:g,y:d};g=T.x,d=T.y;var p=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),E=W,y=H,C=window;if(i){var x=Be(n),O="clientHeight",R="clientWidth";if(x===z(n)&&(x=ne(n),Q(x).position!=="static"&&u==="absolute"&&(O="scrollHeight",R="scrollWidth")),x=x,r===H||(r===W||r===U)&&a===xe){y=K;var I=v&&x===C&&C.visualViewport?C.visualViewport.height:x[O];d-=I-o.height,d*=l?1:-1}if(r===W||(r===H||r===K)&&a===xe){E=U;var P=v&&x===C&&C.visualViewport?C.visualViewport.width:x[R];g-=P-o.width,g*=l?1:-1}}var k=Object.assign({position:u},i&&uo),D=f===!0?po({x:g,y:d}):{x:g,y:d};if(g=D.x,d=D.y,l){var S;return Object.assign({},k,(S={},S[y]=w?"0":"",S[E]=p?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+d+"px)":"translate3d("+g+"px, "+d+"px, 0)",S))}return Object.assign({},k,(t={},t[y]=w?d+"px":"",t[E]=p?g+"px":"",t.transform="",t))}function co(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,s=a===void 0?!0:a,u=n.roundOffsets,l=u===void 0?!0:u,i={placement:J(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Tt(Object.assign({},i,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Tt(Object.assign({},i,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Ut={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:co,data:{}},Le={passive:!0};function fo(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,s=o.resize,u=s===void 0?!0:s,l=z(t.elements.popper),i=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&i.forEach(function(f){f.addEventListener("scroll",n.update,Le)}),u&&l.addEventListener("resize",n.update,Le),function(){a&&i.forEach(function(f){f.removeEventListener("scroll",n.update,Le)}),u&&l.removeEventListener("resize",n.update,Le)}}var zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fo,data:{}},vo={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(e){return e.replace(/left|right|bottom|top/g,function(t){return vo[t]})}var go={start:"end",end:"start"};function Et(e){return e.replace(/start|end/g,function(t){return go[t]})}function nt(e){var t=z(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function ot(e){return ge(ne(e)).left+nt(e).scrollLeft}function mo(e){var t=z(e),n=ne(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,s=0,u=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,u=o.offsetTop)),{width:r,height:a,x:s+ot(e),y:u}}function ho(e){var t,n=ne(e),o=nt(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ae(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=ae(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-o.scrollLeft+ot(e),l=-o.scrollTop;return Q(r||n).direction==="rtl"&&(u+=ae(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:s,x:u,y:l}}function rt(e){var t=Q(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Vt(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:q(e)&&rt(e)?e:Vt(Ke(e))}function Ee(e,t){var n;t===void 0&&(t=[]);var o=Vt(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=z(o),s=r?[a].concat(a.visualViewport||[],rt(o)?o:[]):o,u=t.concat(s);return r?u:u.concat(Ee(Ke(s)))}function Je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yo(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ct(e,t){return t===Nt?Je(mo(e)):de(t)?yo(t):Je(ho(ne(e)))}function bo(e){var t=Ee(Ke(e)),n=["absolute","fixed"].indexOf(Q(e).position)>=0,o=n&&q(e)?Be(e):e;return de(o)?t.filter(function(r){return de(r)&&Ht(r,o)&&G(r)!=="body"}):[]}function wo(e,t,n){var o=t==="clippingParents"?bo(e):[].concat(t),r=[].concat(o,[n]),a=r[0],s=r.reduce(function(u,l){var i=Ct(e,l);return u.top=ae(i.top,u.top),u.right=We(i.right,u.right),u.bottom=We(i.bottom,u.bottom),u.left=ae(i.left,u.left),u},Ct(e,a));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Zt(e){var t=e.reference,n=e.element,o=e.placement,r=o?J(o):null,a=o?me(o):null,s=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,l;switch(r){case H:l={x:s,y:t.y-n.height};break;case K:l={x:s,y:t.y+t.height};break;case U:l={x:t.x+t.width,y:u};break;case W:l={x:t.x-n.width,y:u};break;default:l={x:t.x,y:t.y}}var i=r?tt(r):null;if(i!=null){var f=i==="y"?"height":"width";switch(a){case fe:l[i]=l[i]-(t[f]/2-n[f]/2);break;case xe:l[i]=l[i]+(t[f]/2-n[f]/2);break}}return l}function Pe(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,s=a===void 0?Wn:a,u=n.rootBoundary,l=u===void 0?Nt:u,i=n.elementContext,f=i===void 0?be:i,v=n.altBoundary,h=v===void 0?!1:v,g=n.padding,m=g===void 0?0:g,d=qt(typeof m!="number"?m:Kt(m,Me)),T=f===be?qn:be,p=e.rects.popper,w=e.elements[h?T:f],E=wo(de(w)?w:w.contextElement||ne(e.elements.popper),s,l),y=ge(e.elements.reference),C=Zt({reference:y,element:p,strategy:"absolute",placement:r}),x=Je(Object.assign({},p,C)),O=f===be?x:y,R={top:E.top-O.top+d.top,bottom:O.bottom-E.bottom+d.bottom,left:E.left-O.left+d.left,right:O.right-E.right+d.right},I=e.modifiersData.offset;if(f===be&&I){var P=I[r];Object.keys(R).forEach(function(k){var D=[U,K].indexOf(k)>=0?1:-1,S=[H,K].indexOf(k)>=0?"y":"x";R[k]+=P[S]*D})}return R}function Oo(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,s=n.padding,u=n.flipVariations,l=n.allowedAutoPlacements,i=l===void 0?Ye:l,f=me(o),v=f?u?wt:wt.filter(function(m){return me(m)===f}):Me,h=v.filter(function(m){return i.indexOf(m)>=0});h.length===0&&(h=v);var g=h.reduce(function(m,d){return m[d]=Pe(e,{placement:d,boundary:r,rootBoundary:a,padding:s})[J(d)],m},{});return Object.keys(g).sort(function(m,d){return g[m]-g[d]})}function To(e){if(J(e)===Xe)return[];var t=Ne(e);return[Et(e),t,Et(t)]}function Eo(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,s=n.altAxis,u=s===void 0?!0:s,l=n.fallbackPlacements,i=n.padding,f=n.boundary,v=n.rootBoundary,h=n.altBoundary,g=n.flipVariations,m=g===void 0?!0:g,d=n.allowedAutoPlacements,T=t.options.placement,p=J(T),w=p===T,E=l||(w||!m?[Ne(T)]:To(T)),y=[T].concat(E).reduce(function(oe,X){return oe.concat(J(X)===Xe?Oo(t,{placement:X,boundary:f,rootBoundary:v,padding:i,flipVariations:m,allowedAutoPlacements:d}):X)},[]),C=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,I=y[0],P=0;P<y.length;P++){var k=y[P],D=J(k),S=me(k)===fe,N=[H,K].indexOf(D)>=0,F=N?"width":"height",B=Pe(t,{placement:k,boundary:f,rootBoundary:v,altBoundary:h,padding:i}),b=N?S?U:W:S?K:H;C[F]>x[F]&&(b=Ne(b));var $=Ne(b),V=[];if(a&&V.push(B[D]<=0),u&&V.push(B[b]<=0,B[$]<=0),V.every(function(oe){return oe})){I=k,R=!1;break}O.set(k,V)}if(R)for(var Ie=m?3:1,Ue=function(oe){var X=y.find(function(Fe){var ye=O.get(Fe);if(ye)return ye.slice(0,oe).every(function(ue){return ue})});if(X)return I=X,"break"},he=Ie;he>0;he--){var je=Ue(he);if(je==="break")break}t.placement!==I&&(t.modifiersData[o]._skip=!0,t.placement=I,t.reset=!0)}}var Co={name:"flip",enabled:!0,phase:"main",fn:Eo,requiresIfExists:["offset"],data:{_skip:!1}};function Rt(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function At(e){return[H,U,K,W].some(function(t){return e[t]>=0})}function Ro(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,s=Pe(t,{elementContext:"reference"}),u=Pe(t,{altBoundary:!0}),l=Rt(s,o),i=Rt(u,r,a),f=At(l),v=At(i);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:i,isReferenceHidden:f,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":v})}var Ao={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ro};function xo(e,t,n){var o=J(e),r=[W,H].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,s=a[0],u=a[1];return s=s||0,u=(u||0)*r,[W,U].indexOf(o)>=0?{x:u,y:s}:{x:s,y:u}}function Po(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,s=Ye.reduce(function(f,v){return f[v]=xo(v,t.rects,a),f},{}),u=s[t.placement],l=u.x,i=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=i),t.modifiersData[o]=s}var So={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Po};function ko(e){var t=e.state,n=e.name;t.modifiersData[n]=Zt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Jt={name:"popperOffsets",enabled:!0,phase:"read",fn:ko,data:{}};function Mo(e){return e==="x"?"y":"x"}function Bo(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,s=n.altAxis,u=s===void 0?!1:s,l=n.boundary,i=n.rootBoundary,f=n.altBoundary,v=n.padding,h=n.tether,g=h===void 0?!0:h,m=n.tetherOffset,d=m===void 0?0:m,T=Pe(t,{boundary:l,rootBoundary:i,padding:v,altBoundary:f}),p=J(t.placement),w=me(t.placement),E=!w,y=tt(p),C=Mo(y),x=t.modifiersData.popperOffsets,O=t.rects.reference,R=t.rects.popper,I=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,P=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(x){if(a){var S,N=y==="y"?H:W,F=y==="y"?K:U,B=y==="y"?"height":"width",b=x[y],$=b+T[N],V=b-T[F],Ie=g?-R[B]/2:0,Ue=w===fe?O[B]:R[B],he=w===fe?-R[B]:-O[B],je=t.elements.arrow,oe=g&&je?et(je):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Wt(),Fe=X[N],ye=X[F],ue=Te(0,O[B],oe[B]),sn=E?O[B]/2-Ie-ue-Fe-P.mainAxis:Ue-ue-Fe-P.mainAxis,ln=E?-O[B]/2+Ie+ue+ye+P.mainAxis:he+ue+ye+P.mainAxis,ze=t.elements.arrow&&Be(t.elements.arrow),un=ze?y==="y"?ze.clientTop||0:ze.clientLeft||0:0,lt=(S=k==null?void 0:k[y])!=null?S:0,pn=b+sn-lt-un,cn=b+ln-lt,ut=Te(g?We($,pn):$,b,g?ae(V,cn):V);x[y]=ut,D[y]=ut-b}if(u){var pt,fn=y==="x"?H:W,dn=y==="x"?K:U,re=x[C],_e=C==="y"?"height":"width",ct=re+T[fn],ft=re-T[dn],Ve=[H,W].indexOf(p)!==-1,dt=(pt=k==null?void 0:k[C])!=null?pt:0,vt=Ve?ct:re-O[_e]-R[_e]-dt+P.altAxis,gt=Ve?re+O[_e]+R[_e]-dt-P.altAxis:ft,mt=g&&Ve?ro(vt,re,gt):Te(g?vt:ct,re,g?gt:ft);x[C]=mt,D[C]=mt-re}t.modifiersData[o]=D}}var Io={name:"preventOverflow",enabled:!0,phase:"main",fn:Bo,requiresIfExists:["offset"]};function jo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Fo(e){return e===z(e)||!q(e)?nt(e):jo(e)}function _o(e){var t=e.getBoundingClientRect(),n=ve(t.width)/e.offsetWidth||1,o=ve(t.height)/e.offsetHeight||1;return n!==1||o!==1}function Do(e,t,n){n===void 0&&(n=!1);var o=q(t),r=q(t)&&_o(t),a=ne(t),s=ge(e,r),u={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&((G(t)!=="body"||rt(a))&&(u=Fo(t)),q(t)?(l=ge(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=ot(a))),{x:s.left+u.scrollLeft-l.x,y:s.top+u.scrollTop-l.y,width:s.width,height:s.height}}function Lo(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var s=[].concat(a.requires||[],a.requiresIfExists||[]);s.forEach(function(u){if(!n.has(u)){var l=t.get(u);l&&r(l)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function No(e){var t=Lo(e);return Qn.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function $o(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Ho(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var xt={placement:"bottom",modifiers:[],strategy:"absolute"};function Pt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function at(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?xt:r;return function(s,u,l){l===void 0&&(l=a);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},xt,a),modifiersData:{},elements:{reference:s,popper:u},attributes:{},styles:{}},f=[],v=!1,h={state:i,setOptions:function(d){var T=typeof d=="function"?d(i.options):d;m(),i.options=Object.assign({},a,i.options,T),i.scrollParents={reference:de(s)?Ee(s):s.contextElement?Ee(s.contextElement):[],popper:Ee(u)};var p=No(Ho([].concat(o,i.options.modifiers)));return i.orderedModifiers=p.filter(function(w){return w.enabled}),g(),h.update()},forceUpdate:function(){if(!v){var d=i.elements,T=d.reference,p=d.popper;if(Pt(T,p)){i.rects={reference:Do(T,Be(p),i.options.strategy==="fixed"),popper:et(p)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(R){return i.modifiersData[R.name]=Object.assign({},R.data)});for(var w=0;w<i.orderedModifiers.length;w++){if(i.reset===!0){i.reset=!1,w=-1;continue}var E=i.orderedModifiers[w],y=E.fn,C=E.options,x=C===void 0?{}:C,O=E.name;typeof y=="function"&&(i=y({state:i,options:x,name:O,instance:h})||i)}}}},update:$o(function(){return new Promise(function(d){h.forceUpdate(),d(i)})}),destroy:function(){m(),v=!0}};if(!Pt(s,u))return h;h.setOptions(l).then(function(d){!v&&l.onFirstUpdate&&l.onFirstUpdate(d)});function g(){i.orderedModifiers.forEach(function(d){var T=d.name,p=d.options,w=p===void 0?{}:p,E=d.effect;if(typeof E=="function"){var y=E({state:i,name:T,instance:h,options:w}),C=function(){};f.push(y||C)}})}function m(){f.forEach(function(d){return d()}),f=[]}return h}}at();var Wo=[zt,Jt,Ut,$t];at({defaultModifiers:Wo});var qo=[zt,Jt,Ut,$t,So,Co,Io,lo,Ao],Ko=at({defaultModifiers:qo});const Uo=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:l})=>{const i=zo(l);Object.assign(s.value,i)},requires:["computeStyles"]},r=A(()=>{const{onFirstUpdate:l,placement:i,strategy:f,modifiers:v}=c(n);return{onFirstUpdate:l,placement:i||"bottom",strategy:f||"absolute",modifiers:[...v||[],o,{name:"applyStyles",enabled:!1}]}}),a=gn(),s=j({styles:{popper:{position:c(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{!a.value||(a.value.destroy(),a.value=void 0)};return _(r,l=>{const i=c(a);i&&i.setOptions(l)},{deep:!0}),_([e,t],([l,i])=>{u(),!(!l||!i)&&(a.value=Ko(l,i,c(r)))}),Se(()=>{u()}),{state:A(()=>{var l;return{...((l=c(a))==null?void 0:l.state)||{}}}),styles:A(()=>c(s).styles),attributes:A(()=>c(s).attributes),update:()=>{var l;return(l=c(a))==null?void 0:l.update()},forceUpdate:()=>{var l;return(l=c(a))==null?void 0:l.forceUpdate()},instanceRef:A(()=>c(a))}};function zo(e){const t=Object.keys(e.elements),n=ht(t.map(r=>[r,e.styles[r]||{}])),o=ht(t.map(r=>[r,e.attributes[r]]));return{styles:n,attributes:o}}function St(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return mn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let kt;const Gt=()=>{const e=yn(),t=bn(),n=A(()=>`${e.value}-popper-container-${t.prefix}`),o=A(()=>`#${n.value}`);return{id:n,selector:o}},Vo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Zo=()=>{const{id:e,selector:t}=Gt();return hn(()=>{!Oe||!kt&&!document.body.querySelector(t.value)&&(kt=Vo(e.value))}),{id:e,selector:t}},Jo=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Go=({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=St(),{registerTimeout:s}=St();return{onOpen:i=>{a(()=>{o(i);const f=c(n);wn(f)&&f>0&&s(()=>{r(i)},f)},c(e))},onClose:i=>{a(()=>{r(i)},c(t))}}},Xt=Symbol("elForwardRef"),Xo=e=>{Ce(Xt,{setForwardRef:n=>{e.value=n}})},Yo=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),it=Symbol("popper"),Yt=Symbol("popperContent"),Qo=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],Qt=ee({role:{type:String,values:Qo,default:"tooltip"}}),er=L({name:"ElPopper",inheritAttrs:!1}),tr=L({...er,props:Qt,setup(e,{expose:t}){const n=e,o=j(),r=j(),a=j(),s=j(),u=A(()=>n.role),l={triggerRef:o,popperInstanceRef:r,contentRef:a,referenceRef:s,role:u};return t(l),Ce(it,l),(i,f)=>ie(i.$slots,"default")}});var nr=se(tr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const en=ee({arrowOffset:{type:Number,default:5}}),or=L({name:"ElPopperArrow",inheritAttrs:!1}),rr=L({...or,props:en,setup(e,{expose:t}){const n=e,o=ke("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:s}=le(Yt,void 0);return _(()=>n.arrowOffset,u=>{r.value=u}),Se(()=>{a.value=void 0}),t({arrowRef:a}),(u,l)=>(Z(),$e("span",{ref_key:"arrowRef",ref:a,class:jt(c(o).e("arrow")),style:On(c(s)),"data-popper-arrow":""},null,6))}});var ar=se(rr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const ir="ElOnlyChild",sr=L({name:ir,setup(e,{slots:t,attrs:n}){var o;const r=le(Xt),a=Yo((o=r==null?void 0:r.setForwardRef)!=null?o:Ze);return()=>{var s;const u=(s=t.default)==null?void 0:s.call(t,n);if(!u||u.length>1)return null;const l=tn(u);return l?Ft(Tn(l,n),[[a]]):null}}});function tn(e){if(!e)return null;const t=e;for(const n of t){if(En(n))switch(n.type){case An:continue;case Rn:case"svg":return Mt(n);case Cn:return tn(n.children);default:return n}return Mt(n)}return null}function Mt(e){const t=ke("only-child");return Re("span",{class:t.e("content")},[e])}const nn=ee({virtualRef:{type:M(Object)},virtualTriggering:Boolean,onMouseenter:{type:M(Function)},onMouseleave:{type:M(Function)},onClick:{type:M(Function)},onKeydown:{type:M(Function)},onFocus:{type:M(Function)},onBlur:{type:M(Function)},onContextmenu:{type:M(Function)},id:String,open:Boolean}),lr=L({name:"ElPopperTrigger",inheritAttrs:!1}),ur=L({...lr,props:nn,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=le(it,void 0);Xo(r);const a=A(()=>u.value?n.id:void 0),s=A(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=A(()=>{if(o&&o.value!=="tooltip")return o.value}),l=A(()=>u.value?`${n.open}`:void 0);let i;return qe(()=>{_(()=>n.virtualRef,f=>{f&&(r.value=_t(f))},{immediate:!0}),_(r,(f,v)=>{i==null||i(),i=void 0,He(f)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(h=>{var g;const m=n[h];m&&(f.addEventListener(h.slice(2).toLowerCase(),m),(g=v==null?void 0:v.removeEventListener)==null||g.call(v,h.slice(2).toLowerCase(),m))}),i=_([a,s,u,l],h=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,m)=>{Dt(h[m])?f.removeAttribute(g):f.setAttribute(g,h[m])})},{immediate:!0})),He(v)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(h=>v.removeAttribute(h))},{immediate:!0})}),Se(()=>{i==null||i(),i=void 0}),t({triggerRef:r}),(f,v)=>f.virtualTriggering?Ae("v-if",!0):(Z(),ce(c(sr),Ge({key:0},f.$attrs,{"aria-controls":c(a),"aria-describedby":c(s),"aria-expanded":c(l),"aria-haspopup":c(u)}),{default:te(()=>[ie(f.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var pr=se(ur,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);const cr=["fixed","absolute"],fr=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:M(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ye,default:"bottom"},popperOptions:{type:M(Object),default:()=>({})},strategy:{type:String,values:cr,default:"absolute"}}),on=ee({...fr,id:String,style:{type:M([String,Array,Object])},className:{type:M([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:M([String,Array,Object])},popperStyle:{type:M([String,Array,Object])},referenceEl:{type:M(Object)},triggerTargetEl:{type:M(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),dr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},vr=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...mr(e),...t]};return hr(a,r==null?void 0:r.modifiers),a},gr=e=>{if(!!Oe)return _t(e)};function mr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t!=null?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function hr(e,t){t&&(e.modifiers=[...e.modifiers,...t!=null?t:[]])}const yr=0,br=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:r}=le(it,void 0),a=j(),s=j(),u=A(()=>({name:"eventListeners",enabled:!!e.visible})),l=A(()=>{var p;const w=c(a),E=(p=c(s))!=null?p:yr;return{name:"arrow",enabled:!Ln(w),options:{element:w,padding:E}}}),i=A(()=>({onFirstUpdate:()=>{m()},...vr(e,[c(l),c(u)])})),f=A(()=>gr(e.referenceEl)||c(o)),{attributes:v,state:h,styles:g,update:m,forceUpdate:d,instanceRef:T}=Uo(f,n,i);return _(T,p=>t.value=p),qe(()=>{_(()=>{var p;return(p=c(f))==null?void 0:p.getBoundingClientRect()},()=>{m()})}),{attributes:v,arrowRef:a,contentRef:n,instanceRef:T,state:h,styles:g,role:r,forceUpdate:d,update:m}},wr=(e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:r}=xn(),a=ke("popper"),s=A(()=>c(t).popper),u=j(e.zIndex||r()),l=A(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),i=A(()=>[{zIndex:c(u)},e.popperStyle||{},c(n).popper]),f=A(()=>o.value==="dialog"?"false":void 0),v=A(()=>c(n).arrow||{});return{ariaModal:f,arrowStyle:v,contentAttrs:s,contentClass:l,contentStyle:i,contentZIndex:u,updateZIndex:()=>{u.value=e.zIndex||r()}}},Or=(e,t)=>{const n=j(!1),o=j();return{focusStartRef:o,trapped:n,onFocusAfterReleased:i=>{var f;((f=i.detail)==null?void 0:f.focusReason)!=="pointer"&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:i=>{e.visible&&!n.value&&(i.target&&(o.value=i.target),n.value=!0)},onFocusoutPrevented:i=>{e.trapping||(i.detail.focusReason==="pointer"&&i.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},Tr=L({name:"ElPopperContent"}),Er=L({...Tr,props:on,emits:dr,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:s,onFocusAfterTrapped:u,onFocusInTrap:l,onFocusoutPrevented:i,onReleaseRequested:f}=Or(o,n),{attributes:v,arrowRef:h,contentRef:g,styles:m,instanceRef:d,role:T,update:p}=br(o),{ariaModal:w,arrowStyle:E,contentAttrs:y,contentClass:C,contentStyle:x,updateZIndex:O}=wr(o,{styles:m,attributes:v,role:T}),R=le(yt,void 0),I=j();Ce(Yt,{arrowStyle:E,arrowRef:h,arrowOffset:I}),R&&(R.addInputId||R.removeInputId)&&Ce(yt,{...R,addInputId:Ze,removeInputId:Ze});let P;const k=(S=!0)=>{p(),S&&O()},D=()=>{k(!1),o.visible&&o.focusOnShow?a.value=!0:o.visible===!1&&(a.value=!1)};return qe(()=>{_(()=>o.triggerTargetEl,(S,N)=>{P==null||P(),P=void 0;const F=c(S||g.value),B=c(N||g.value);He(F)&&(P=_([T,()=>o.ariaLabel,w,()=>o.id],b=>{["role","aria-label","aria-modal","id"].forEach(($,V)=>{Dt(b[V])?F.removeAttribute($):F.setAttribute($,b[V])})},{immediate:!0})),B!==F&&He(B)&&["role","aria-label","aria-modal","id"].forEach(b=>{B.removeAttribute(b)})},{immediate:!0}),_(()=>o.visible,D,{immediate:!0})}),Se(()=>{P==null||P(),P=void 0}),t({popperContentRef:g,popperInstanceRef:d,updatePopper:k,contentStyle:x}),(S,N)=>(Z(),$e("div",Ge({ref_key:"contentRef",ref:g},c(y),{style:c(x),class:c(C),tabindex:"-1",onMouseenter:N[0]||(N[0]=F=>S.$emit("mouseenter",F)),onMouseleave:N[1]||(N[1]=F=>S.$emit("mouseleave",F))}),[Re(c(Pn),{trapped:c(a),"trap-on-focus-in":!0,"focus-trap-el":c(g),"focus-start-el":c(r),onFocusAfterTrapped:c(u),onFocusAfterReleased:c(s),onFocusin:c(l),onFocusoutPrevented:c(i),onReleaseRequested:c(f)},{default:te(()=>[ie(S.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Cr=se(Er,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const Rr=Lt(nr),st=Symbol("elTooltip"),rn=ee({...Jo,...on,appendTo:{type:M([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:M(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean}),an=ee({...nn,disabled:Boolean,trigger:{type:M([String,Array]),default:"hover"},triggerKeys:{type:M(Array),default:()=>[bt.enter,bt.space]}}),{useModelToggleProps:Ar,useModelToggleEmits:xr,useModelToggle:Pr}=Hn("visible"),Sr=ee({...Qt,...Ar,...rn,...an,...en,showArrow:{type:Boolean,default:!0}}),kr=[...xr,"before-show","before-hide","show","hide","open","close"],Mr=(e,t)=>Sn(e)?e.includes(t):e===t,pe=(e,t,n)=>o=>{Mr(c(e),t)&&n(o)},Br=L({name:"ElTooltipTrigger"}),Ir=L({...Br,props:an,setup(e,{expose:t}){const n=e,o=ke("tooltip"),{controlled:r,id:a,open:s,onOpen:u,onClose:l,onToggle:i}=le(st,void 0),f=j(null),v=()=>{if(c(r)||n.disabled)return!0},h=we(n,"trigger"),g=Y(v,pe(h,"hover",u)),m=Y(v,pe(h,"hover",l)),d=Y(v,pe(h,"click",y=>{y.button===0&&i(y)})),T=Y(v,pe(h,"focus",u)),p=Y(v,pe(h,"focus",l)),w=Y(v,pe(h,"contextmenu",y=>{y.preventDefault(),i(y)})),E=Y(v,y=>{const{code:C}=y;n.triggerKeys.includes(C)&&(y.preventDefault(),i(y))});return t({triggerRef:f}),(y,C)=>(Z(),ce(c(pr),{id:c(a),"virtual-ref":y.virtualRef,open:c(s),"virtual-triggering":y.virtualTriggering,class:jt(c(o).e("trigger")),onBlur:c(p),onClick:c(d),onContextmenu:c(w),onFocus:c(T),onMouseenter:c(g),onMouseleave:c(m),onKeydown:c(E)},{default:te(()=>[ie(y.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var jr=se(Ir,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const Fr=L({name:"ElTooltipContent",inheritAttrs:!1}),_r=L({...Fr,props:rn,setup(e,{expose:t}){const n=e,{selector:o}=Gt(),r=ke("tooltip"),a=j(null),s=j(!1),{controlled:u,id:l,open:i,trigger:f,onClose:v,onOpen:h,onShow:g,onHide:m,onBeforeShow:d,onBeforeHide:T}=le(st,void 0),p=A(()=>n.transition||`${r.namespace.value}-fade-in-linear`),w=A(()=>n.persistent);Se(()=>{s.value=!0});const E=A(()=>c(w)?!0:c(i)),y=A(()=>n.disabled?!1:c(i)),C=A(()=>n.appendTo||o.value),x=A(()=>{var b;return(b=n.style)!=null?b:{}}),O=A(()=>!c(i)),R=()=>{m()},I=()=>{if(c(u))return!0},P=Y(I,()=>{n.enterable&&c(f)==="hover"&&h()}),k=Y(I,()=>{c(f)==="hover"&&v()}),D=()=>{var b,$;($=(b=a.value)==null?void 0:b.updatePopper)==null||$.call(b),d==null||d()},S=()=>{T==null||T()},N=()=>{g(),B=In(A(()=>{var b;return(b=a.value)==null?void 0:b.popperContentRef}),()=>{if(c(u))return;c(f)!=="hover"&&v()})},F=()=>{n.virtualTriggering||v()};let B;return _(()=>c(i),b=>{b||B==null||B()},{flush:"post"}),_(()=>n.content,()=>{var b,$;($=(b=a.value)==null?void 0:b.updatePopper)==null||$.call(b)}),t({contentRef:a}),(b,$)=>(Z(),ce(Bn,{disabled:!b.teleported,to:c(C)},[Re(Mn,{name:c(p),onAfterLeave:R,onBeforeEnter:D,onAfterEnter:N,onBeforeLeave:S},{default:te(()=>[c(E)?Ft((Z(),ce(c(Cr),Ge({key:0,id:c(l),ref_key:"contentRef",ref:a},b.$attrs,{"aria-label":b.ariaLabel,"aria-hidden":c(O),"boundaries-padding":b.boundariesPadding,"fallback-placements":b.fallbackPlacements,"gpu-acceleration":b.gpuAcceleration,offset:b.offset,placement:b.placement,"popper-options":b.popperOptions,strategy:b.strategy,effect:b.effect,enterable:b.enterable,pure:b.pure,"popper-class":b.popperClass,"popper-style":[b.popperStyle,c(x)],"reference-el":b.referenceEl,"trigger-target-el":b.triggerTargetEl,visible:c(y),"z-index":b.zIndex,onMouseenter:c(P),onMouseleave:c(k),onBlur:F,onClose:c(v)}),{default:te(()=>[s.value?Ae("v-if",!0):ie(b.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[kn,c(y)]]):Ae("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var Dr=se(_r,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Lr=["innerHTML"],Nr={key:1},$r=L({name:"ElTooltip"}),Hr=L({...$r,props:Sr,emits:kr,setup(e,{expose:t,emit:n}){const o=e;Zo();const r=jn(),a=j(),s=j(),u=()=>{var p;const w=c(a);w&&((p=w.popperInstanceRef)==null||p.update())},l=j(!1),i=j(),{show:f,hide:v,hasUpdateHandler:h}=Pr({indicator:l,toggleReason:i}),{onOpen:g,onClose:m}=Go({showAfter:we(o,"showAfter"),hideAfter:we(o,"hideAfter"),autoClose:we(o,"autoClose"),open:f,close:v}),d=A(()=>It(o.visible)&&!h.value);Ce(st,{controlled:d,id:r,open:Fn(l),trigger:we(o,"trigger"),onOpen:p=>{g(p)},onClose:p=>{m(p)},onToggle:p=>{c(l)?m(p):g(p)},onShow:()=>{n("show",i.value)},onHide:()=>{n("hide",i.value)},onBeforeShow:()=>{n("before-show",i.value)},onBeforeHide:()=>{n("before-hide",i.value)},updatePopper:u}),_(()=>o.disabled,p=>{p&&l.value&&(l.value=!1)});const T=()=>{var p,w;const E=(w=(p=s.value)==null?void 0:p.contentRef)==null?void 0:w.popperContentRef;return E&&E.contains(document.activeElement)};return _n(()=>l.value&&v()),t({popperRef:a,contentRef:s,isFocusInsideContent:T,updatePopper:u,onOpen:g,onClose:m,hide:v}),(p,w)=>(Z(),ce(c(Rr),{ref_key:"popperRef",ref:a,role:p.role},{default:te(()=>[Re(jr,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:te(()=>[p.$slots.default?ie(p.$slots,"default",{key:0}):Ae("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Re(Dr,{ref_key:"contentRef",ref:s,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:te(()=>[ie(p.$slots,"content",{},()=>[p.rawContent?(Z(),$e("span",{key:0,innerHTML:p.content},null,8,Lr)):(Z(),$e("span",Nr,Dn(p.content),1))]),p.showArrow?(Z(),ce(c(ar),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):Ae("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Wr=se(Hr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const Ur=Lt(Wr);export{Ur as E,sr as O,st as T,rn as a,Ye as b,Y as c,Go as d,Ln as i,an as u,Kr as w,Ko as y};
