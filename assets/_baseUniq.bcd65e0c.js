import{cu as c,aE as S,cv as A,cw as g,aF as v}from"./index.12e2b36d.js";import{s as I}from"./_baseIsEqual.df6af5a3.js";function E(){}var R=1/0,b=c&&1/I(new c([,-0]))[1]==R?function(f){return new c(f)}:E,C=b,F=200;function Y(f,e,a){var t=-1,h=A,u=f.length,l=!0,i=[],n=i;if(a)l=!1,h=g;else if(u>=F){var w=e?null:C(f);if(w)return I(w);l=!1,h=v,n=new S}else n=e?[]:i;n:for(;++t<u;){var s=f[t],r=e?e(s):s;if(s=a||s!==0?s:0,l&&r===r){for(var o=n.length;o--;)if(n[o]===r)continue n;e&&n.push(r),i.push(s)}else h(n,r,a)||(n!==i&&n.push(r),i.push(s))}return i}export{Y as b};
