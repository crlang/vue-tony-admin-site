import{aJ as K,aK as q,aL as M,aM as H,aN as x,aO as D,aF as I,aP as $,aQ as G,aR as E,aS as J,aT as B}from"./index.a812ffa9.js";function Q(n,e){for(var a=-1,f=n==null?0:n.length;++a<f;)if(e(n[a],a,n))return!0;return!1}var X=1,Y=2;function F(n,e,a,f,g,r){var s=a&X,u=n.length,l=e.length;if(u!=l&&!(s&&l>u))return!1;var v=r.get(n),d=r.get(e);if(v&&d)return v==e&&d==n;var A=-1,i=!0,p=a&Y?new K:void 0;for(r.set(n,e),r.set(e,n);++A<u;){var T=n[A],O=e[A];if(f)var P=s?f(O,T,A,e,n,r):f(T,O,A,n,e,r);if(P!==void 0){if(P)continue;i=!1;break}if(p){if(!Q(e,function(t,L){if(!q(p,L)&&(T===t||g(T,t,a,f,r)))return p.push(L)})){i=!1;break}}else if(!(T===O||g(T,O,a,f,r))){i=!1;break}}return r.delete(n),r.delete(e),i}function Z(n){var e=-1,a=Array(n.size);return n.forEach(function(f,g){a[++e]=[g,f]}),a}function W(n){var e=-1,a=Array(n.size);return n.forEach(function(f){a[++e]=f}),a}var m=1,z=2,c="[object Boolean]",j="[object Date]",V="[object Error]",h="[object Map]",o="[object Number]",k="[object RegExp]",nn="[object Set]",en="[object String]",rn="[object Symbol]",an="[object ArrayBuffer]",fn="[object DataView]",N=M?M.prototype:void 0,R=N?N.valueOf:void 0;function sn(n,e,a,f,g,r,s){switch(a){case fn:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case an:return!(n.byteLength!=e.byteLength||!r(new x(n),new x(e)));case c:case j:case o:return H(+n,+e);case V:return n.name==e.name&&n.message==e.message;case k:case en:return n==e+"";case h:var u=Z;case nn:var l=f&m;if(u||(u=W),n.size!=e.size&&!l)return!1;var v=s.get(n);if(v)return v==e;f|=z,s.set(n,e);var d=F(u(n),u(e),f,g,r,s);return s.delete(n),d;case rn:if(R)return R.call(n)==R.call(e)}return!1}var gn=1,ln=Object.prototype,un=ln.hasOwnProperty;function vn(n,e,a,f,g,r){var s=a&gn,u=D(n),l=u.length,v=D(e),d=v.length;if(l!=d&&!s)return!1;for(var A=l;A--;){var i=u[A];if(!(s?i in e:un.call(e,i)))return!1}var p=r.get(n),T=r.get(e);if(p&&T)return p==e&&T==n;var O=!0;r.set(n,e),r.set(e,n);for(var P=s;++A<l;){i=u[A];var t=n[i],L=e[i];if(f)var S=s?f(L,t,i,e,n,r):f(t,L,i,n,e,r);if(!(S===void 0?t===L||g(t,L,a,f,r):S)){O=!1;break}P||(P=i=="constructor")}if(O&&!P){var _=n.constructor,w=e.constructor;_!=w&&"constructor"in n&&"constructor"in e&&!(typeof _=="function"&&_ instanceof _&&typeof w=="function"&&w instanceof w)&&(O=!1)}return r.delete(n),r.delete(e),O}var An=1,U="[object Arguments]",b="[object Array]",y="[object Object]",Tn=Object.prototype,C=Tn.hasOwnProperty;function On(n,e,a,f,g,r){var s=I(n),u=I(e),l=s?b:$(n),v=u?b:$(e);l=l==U?y:l,v=v==U?y:v;var d=l==y,A=v==y,i=l==v;if(i&&G(n)){if(!G(e))return!1;s=!0,d=!1}if(i&&!d)return r||(r=new E),s||J(n)?F(n,e,a,f,g,r):sn(n,e,l,a,f,g,r);if(!(a&An)){var p=d&&C.call(n,"__wrapped__"),T=A&&C.call(e,"__wrapped__");if(p||T){var O=p?n.value():n,P=T?e.value():e;return r||(r=new E),g(O,P,a,f,r)}}return i?(r||(r=new E),vn(n,e,a,f,g,r)):!1}function dn(n,e,a,f,g){return n===e?!0:n==null||e==null||!B(n)&&!B(e)?n!==n&&e!==e:On(n,e,a,f,dn,g)}export{Q as a,dn as b,Z as m,W as s};
