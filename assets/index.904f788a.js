function d(r,e=void 0,n=void 0){let t=0,a=0;switch(r<=e?(a=r,t=e):(a=e,t=r),arguments.length){case 1:return Math.floor(Math.random()*(t+1));case 2:return Math.floor(Math.random()*(t-a+1)+a);case 3:return parseFloat((Math.random()*(t-a)+a).toFixed(n));default:return Math.random()}}function s(r){return Array(...Array(r)).map(()=>d(1,1e5))}function u(r=0,e=10,n="",t=""){const a=[];for(let o=r;o<=e;o++)a.push(n+o+t);return a}export{s as a,u as g,d as r};
