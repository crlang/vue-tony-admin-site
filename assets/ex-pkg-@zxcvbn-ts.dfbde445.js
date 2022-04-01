var Q=Object.defineProperty,tt=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var st=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var E=Math.pow,L=(r,t,e)=>t in r?Q(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,m=(r,t)=>{for(var e in t||(t={}))st.call(t,e)&&L(r,e,t[e]);if(R)for(var e of R(t))nt.call(t,e)&&L(r,e,t[e]);return r},b=(r,t)=>tt(r,et(t));const rt=r=>Object.keys(r).length===0,T=(r,t)=>r.push.apply(r,t),at=(r,t)=>r.split("").map(s=>t[s]||s).join(""),k=r=>r.sort((t,e)=>t.i-e.i||t.j-e.j),P=r=>{const t={};let e=1;return r.forEach(s=>{t[s]=e,e+=1}),t};var it={4:[[1,2],[2,3]],5:[[1,3],[2,3]],6:[[1,2],[2,4],[4,5]],7:[[1,3],[2,3],[4,5],[4,6]],8:[[2,4],[4,6]]};const C=2050,N=1e3,ot=it,ct=10,lt=1e4,O=10,_=50,G=20,Y=/^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,ut=/^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,ht=/^[A-Z\xbf-\xdf]+$/,W=/^[^a-z\xdf-\xff]+$/,ft=/^[a-z\xdf-\xff]+$/,gt=/^[^A-Z\xbf-\xdf]+$/,dt=/[a-z\xdf-\xff]/,pt=/[A-Z\xbf-\xdf]/,mt=/[^A-Za-z\xbf-\xdf]/gi,bt=/^\d+$/,x=new Date().getFullYear(),yt={recentYear:/19\d\d|200\d|201\d|202\d/g};class Mt{match({password:t}){const e=[...this.getMatchesWithoutSeparator(t),...this.getMatchesWithSeparator(t)],s=this.filterNoise(e);return k(s)}getMatchesWithSeparator(t){const e=[],s=/^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;for(let n=0;n<=Math.abs(t.length-6);n+=1)for(let a=n+5;a<=n+9&&!(a>=t.length);a+=1){const i=t.slice(n,+a+1||9e9),o=s.exec(i);if(o!=null){const c=this.mapIntegersToDayMonthYear([parseInt(o[1],10),parseInt(o[3],10),parseInt(o[4],10)]);c!=null&&e.push({pattern:"date",token:i,i:n,j:a,separator:o[2],year:c.year,month:c.month,day:c.day})}}return e}getMatchesWithoutSeparator(t){const e=[],s=/^\d{4,8}$/,n=a=>Math.abs(a.year-x);for(let a=0;a<=Math.abs(t.length-4);a+=1)for(let i=a+3;i<=a+7&&!(i>=t.length);i+=1){const o=t.slice(a,+i+1||9e9);if(s.exec(o)){const c=[],u=o.length;if(ot[u].forEach(([f,g])=>{const p=this.mapIntegersToDayMonthYear([parseInt(o.slice(0,f),10),parseInt(o.slice(f,g),10),parseInt(o.slice(g),10)]);p!=null&&c.push(p)}),c.length>0){let f=c[0],g=n(c[0]);c.slice(1).forEach(p=>{const M=n(p);M<g&&(f=p,g=M)}),e.push({pattern:"date",token:o,i:a,j:i,separator:"",year:f.year,month:f.month,day:f.day})}}}return e}filterNoise(t){return t.filter(e=>{let s=!1;const n=t.length;for(let a=0;a<n;a+=1){const i=t[a];if(e!==i&&i.i<=e.i&&i.j>=e.j){s=!0;break}}return!s})}mapIntegersToDayMonthYear(t){if(t[1]>31||t[1]<=0)return null;let e=0,s=0,n=0;for(let a=0,i=t.length;a<i;a+=1){const o=t[a];if(o>99&&o<N||o>C)return null;o>31&&(s+=1),o>12&&(e+=1),o<=0&&(n+=1)}return s>=2||e===3||n>=2?null:this.getDayMonth(t)}getDayMonth(t){const e=[[t[2],t.slice(0,2)],[t[0],t.slice(1,3)]],s=e.length;for(let n=0;n<s;n+=1){const[a,i]=e[n];if(N<=a&&a<=C){const o=this.mapIntegersToDayMonth(i);return o!=null?{year:a,month:o.month,day:o.day}:null}}for(let n=0;n<s;n+=1){const[a,i]=e[n],o=this.mapIntegersToDayMonth(i);if(o!=null)return{year:this.twoToFourDigitYear(a),month:o.month,day:o.day}}return null}mapIntegersToDayMonth(t){const e=[t,t.slice().reverse()];for(let s=0;s<e.length;s+=1){const n=e[s],a=n[0],i=n[1];if(a>=1&&a<=31&&i>=1&&i<=12)return{day:a,month:i}}return null}twoToFourDigitYear(t){return t>99?t:t>50?t+1900:t+2e3}}var kt={a:["4","@"],b:["8"],c:["(","{","[","<"],e:["3"],g:["6","9"],i:["1","!","|"],l:["1","|","7"],o:["0"],s:["$","5"],t:["+","7"],x:["%"],z:["2"]},D={warnings:{straightRow:"straightRow",keyPattern:"keyPattern",simpleRepeat:"simpleRepeat",extendedRepeat:"extendedRepeat",sequences:"sequences",recentYears:"recentYears",dates:"dates",topTen:"topTen",topHundred:"topHundred",common:"common",similarToCommon:"similarToCommon",wordByItself:"wordByItself",namesByThemselves:"namesByThemselves",commonNames:"commonNames",userInputs:"userInputs"},suggestions:{l33t:"l33t",reverseWords:"reverseWords",allUppercase:"allUppercase",capitalization:"capitalization",dates:"dates",recentYears:"recentYears",associatedYears:"associatedYears",sequences:"sequences",repeated:"repeated",longerKeyboardPattern:"longerKeyboardPattern",anotherWord:"anotherWord",useWords:"useWords",noNeed:"noNeed"},timeEstimation:{ltSecond:"ltSecond",second:"second",seconds:"seconds",minute:"minute",minutes:"minutes",hour:"hour",hours:"hours",day:"day",days:"days",month:"month",months:"months",year:"year",years:"years",centuries:"centuries"}};class Et{constructor(){this.matchers={},this.l33tTable=kt,this.dictionary={userInputs:[]},this.rankedDictionaries={},this.translations=D,this.graphs={},this.availableGraphs=[],this.setRankedDictionaries()}setOptions(t={}){t.l33tTable&&(this.l33tTable=t.l33tTable),t.dictionary&&(this.dictionary=t.dictionary,this.setRankedDictionaries()),t.translations&&this.setTranslations(t.translations),t.graphs&&(this.graphs=t.graphs)}setTranslations(t){if(this.checkCustomTranslations(t))this.translations=t;else throw new Error("Invalid translations object fallback to keys")}checkCustomTranslations(t){let e=!0;return Object.keys(D).forEach(s=>{if(s in t){const n=s;Object.keys(D[n]).forEach(a=>{a in t[n]||(e=!1)})}else e=!1}),e}setRankedDictionaries(){const t={};Object.keys(this.dictionary).forEach(e=>{t[e]=this.getRankedDictionary(e)}),this.rankedDictionaries=t}getRankedDictionary(t){const e=this.dictionary[t];if(t==="userInputs"){const s=[];return e.forEach(n=>{const a=typeof n;(a==="string"||a==="number"||a==="boolean")&&s.push(n.toString().toLowerCase())}),P(s)}return P(e)}extendUserInputsDictionary(t){this.dictionary.userInputs?this.dictionary.userInputs=[...this.dictionary.userInputs,...t]:this.dictionary.userInputs=t,this.rankedDictionaries.userInputs=this.getRankedDictionary("userInputs")}addMatcher(t,e){this.matchers[t]?console.info("Matcher already exists"):this.matchers[t]=e}}var l=new Et;class St{constructor(t){this.defaultMatch=t}match({password:t}){const e=t.split("").reverse().join("");return this.defaultMatch({password:e}).map(s=>b(m({},s),{token:s.token.split("").reverse().join(""),reversed:!0,i:t.length-1-s.j,j:t.length-1-s.i}))}}class Tt{constructor(t){this.defaultMatch=t}match({password:t}){const e=[],s=this.enumerateL33tSubs(this.relevantL33tSubtable(t,l.l33tTable));for(let n=0;n<s.length;n+=1){const a=s[n];if(rt(a))break;const i=at(t,a);this.defaultMatch({password:i}).forEach(c=>{const u=t.slice(c.i,+c.j+1||9e9);if(u.toLowerCase()!==c.matchedWord){const h={};Object.keys(a).forEach(g=>{const p=a[g];u.indexOf(g)!==-1&&(h[g]=p)});const f=Object.keys(h).map(g=>`${g} -> ${h[g]}`).join(", ");e.push(b(m({},c),{l33t:!0,token:u,sub:h,subDisplay:f}))}})}return e.filter(n=>n.token.length>1)}relevantL33tSubtable(t,e){const s={},n={};return t.split("").forEach(a=>{s[a]=!0}),Object.keys(e).forEach(a=>{const o=e[a].filter(c=>c in s);o.length>0&&(n[a]=o)}),n}enumerateL33tSubs(t){const e=Object.keys(t);return this.getSubs(e,[[]],t).map(n=>{const a={};return n.forEach(([i,o])=>{a[i]=o}),a})}getSubs(t,e,s){if(!t.length)return e;const n=t[0],a=t.slice(1),i=[];s[n].forEach(c=>{e.forEach(u=>{let h=-1;for(let f=0;f<u.length;f+=1)if(u[f][0]===c){h=f;break}if(h===-1){const f=u.concat([[c,n]]);i.push(f)}else{const f=u.slice(0);f.splice(h,1),f.push([c,n]),i.push(u),i.push(f)}})});const o=this.dedup(i);return a.length?this.getSubs(a,o,s):o}dedup(t){const e=[],s={};return t.forEach(n=>{const a=n.map((o,c)=>[o,c]);a.sort();const i=a.map(([o,c])=>`${o},${c}`).join("-");i in s||(s[i]=!0,e.push(n))}),e}}class xt{constructor(){this.l33t=new Tt(this.defaultMatch),this.reverse=new St(this.defaultMatch)}match({password:t}){const e=[...this.defaultMatch({password:t}),...this.reverse.match({password:t}),...this.l33t.match({password:t})];return k(e)}defaultMatch({password:t}){const e=[],s=t.length,n=t.toLowerCase();return Object.keys(l.rankedDictionaries).forEach(a=>{const i=l.rankedDictionaries[a];for(let o=0;o<s;o+=1)for(let c=o;c<s;c+=1)if(n.slice(o,+c+1||9e9)in i){const u=n.slice(o,+c+1||9e9),h=i[u];e.push({pattern:"dictionary",i:o,j:c,token:t.slice(o,+c+1||9e9),matchedWord:u,rank:h,dictionaryName:a,reversed:!1,l33t:!1})}}),e}}class Dt{match({password:t,regexes:e=yt}){const s=[];return Object.keys(e).forEach(n=>{const a=e[n];a.lastIndex=0;const i=a.exec(t);if(i){const o=i[0];s.push({pattern:"regex",token:o,i:i.index,j:i.index+i[0].length-1,regexName:n,regexMatch:i})}}),k(s)}}var y={nCk(r,t){let e=r;if(t>e)return 0;if(t===0)return 1;let s=1;for(let n=1;n<=t;n+=1)s*=e,s/=n,e-=1;return s},log10(r){return Math.log(r)/Math.log(10)},log2(r){return Math.log(r)/Math.log(2)},factorial(r){let t=1;for(let e=2;e<=r;e+=1)t*=e;return t}},At=({token:r})=>{let t=E(ct,r.length);t===Number.POSITIVE_INFINITY&&(t=Number.MAX_VALUE);let e;return r.length===1?e=O+1:e=_+1,Math.max(t,e)},It=({year:r,separator:t})=>{let s=Math.max(Math.abs(r-x),G)*365;return t&&(s*=4),s};const vt=r=>{const t=r.split(""),e=t.filter(i=>i.match(dt)).length,s=t.filter(i=>i.match(pt)).length;let n=0;const a=Math.min(e,s);for(let i=1;i<=a;i+=1)n+=y.nCk(e+s,i);return n};var wt=r=>{const t=r.replace(mt,"");if(t.match(gt)||t.toLowerCase()===t)return 1;const e=[Y,ut,W],s=e.length;for(let n=0;n<s;n+=1){const a=e[n];if(t.match(a))return 2}return vt(t)};const jt=({subs:r,subbed:t,token:e})=>{const s=r[t],n=e.toLowerCase().split(""),a=n.filter(o=>o===t).length,i=n.filter(o=>o===s).length;return{subbedCount:a,unsubbedCount:i}};var Rt=({l33t:r,sub:t,token:e})=>{if(!r)return 1;let s=1;const n=t;return Object.keys(n).forEach(a=>{const{subbedCount:i,unsubbedCount:o}=jt({subs:n,subbed:a,token:e});if(i===0||o===0)s*=2;else{const c=Math.min(o,i);let u=0;for(let h=1;h<=c;h+=1)u+=y.nCk(o+i,h);s*=u}}),s},Lt=({rank:r,reversed:t,l33t:e,sub:s,token:n})=>{const a=r,i=wt(n),o=Rt({l33t:e,sub:s,token:n}),c=t&&2||1,u=a*i*o*c;return{baseGuesses:a,uppercaseVariations:i,l33tVariations:o,calculation:u}},Pt=({regexName:r,regexMatch:t,token:e})=>{const s={alphaLower:26,alphaUpper:26,alpha:52,alphanumeric:62,digits:10,symbols:33};if(r in s)return E(s[r],e.length);switch(r){case"recentYear":return Math.max(Math.abs(parseInt(t[0],10)-x),G)}return 0},Ct=({baseGuesses:r,repeatCount:t})=>r*t,Nt=({token:r,ascending:t})=>{const e=r.charAt(0);let s=0;return["a","A","z","Z","0","1","9"].includes(e)?s=4:e.match(/\d/)?s=10:s=26,t||(s*=2),s*r.length};const Ot=r=>{let t=0;return Object.keys(r).forEach(e=>{t+=r[e].filter(n=>!!n).length}),t/=Object.entries(r).length,t},_t=({token:r,graph:t,turns:e})=>{const s=Object.keys(l.graphs[t]).length,n=Ot(l.graphs[t]);let a=0;const i=r.length;for(let o=2;o<=i;o+=1){const c=Math.min(e,o-1);for(let u=1;u<=c;u+=1)a+=y.nCk(o-1,u-1)*s*E(n,u)}return a};var Gt=({graph:r,token:t,shiftedCount:e,turns:s})=>{let n=_t({token:t,graph:r,turns:s});if(e){const a=t.length-e;if(e===0||a===0)n*=2;else{let i=0;for(let o=1;o<=Math.min(e,a);o+=1)i+=y.nCk(e+a,o);n*=i}}return Math.round(n)};const Yt=(r,t)=>{let e=1;return r.token.length<t.length&&(r.token.length===1?e=O:e=_),e},U={bruteforce:At,date:It,dictionary:Lt,regex:Pt,repeat:Ct,sequence:Nt,spatial:Gt},Wt=(r,t)=>U[r]?U[r](t):l.matchers[r]&&"scoring"in l.matchers[r]?l.matchers[r].scoring(t):0;var Ut=(r,t)=>{const e={};if("guesses"in r&&r.guesses!=null)return r;const s=Yt(r,t),n=Wt(r.pattern,r);let a=0;typeof n=="number"?a=n:r.pattern==="dictionary"&&(a=n.calculation,e.baseGuesses=n.baseGuesses,e.uppercaseVariations=n.uppercaseVariations,e.l33tVariations=n.l33tVariations);const i=Math.max(a,s);return b(m(m({},r),e),{guesses:i,guessesLog10:y.log10(i)})};const d={password:"",optimal:{},excludeAdditive:!1,fillArray(r,t){const e=[];for(let s=0;s<r;s+=1){let n=[];t==="object"&&(n={}),e.push(n)}return e},makeBruteforceMatch(r,t){return{pattern:"bruteforce",token:this.password.slice(r,+t+1||9e9),i:r,j:t}},update(r,t){const e=r.j,s=Ut(r,this.password);let n=s.guesses;t>1&&(n*=this.optimal.pi[s.i-1][t-1]);let a=y.factorial(t)*n;this.excludeAdditive||(a+=E(lt,t-1));let i=!1;Object.keys(this.optimal.g[e]).forEach(o=>{const c=this.optimal.g[e][o];parseInt(o,10)<=t&&c<=a&&(i=!0)}),i||(this.optimal.g[e][t]=a,this.optimal.m[e][t]=s,this.optimal.pi[e][t]=n)},bruteforceUpdate(r){let t=this.makeBruteforceMatch(0,r);this.update(t,1);for(let e=1;e<=r;e+=1){t=this.makeBruteforceMatch(e,r);const s=this.optimal.m[e-1];Object.keys(s).forEach(n=>{s[n].pattern!=="bruteforce"&&this.update(t,parseInt(n,10)+1)})}},unwind(r){const t=[];let e=r-1,s=0,n=1/0;const a=this.optimal.g[e];for(a&&Object.keys(a).forEach(i=>{const o=a[i];o<n&&(s=parseInt(i,10),n=o)});e>=0;){const i=this.optimal.m[e][s];t.unshift(i),e=i.i-1,s-=1}return t}};var A={mostGuessableMatchSequence(r,t,e=!1){d.password=r,d.excludeAdditive=e;const s=r.length;let n=d.fillArray(s,"array");t.forEach(c=>{n[c.j].push(c)}),n=n.map(c=>c.sort((u,h)=>u.i-h.i)),d.optimal={m:d.fillArray(s,"object"),pi:d.fillArray(s,"object"),g:d.fillArray(s,"object")};for(let c=0;c<s;c+=1)n[c].forEach(u=>{u.i>0?Object.keys(d.optimal.m[u.i-1]).forEach(h=>{d.update(u,parseInt(h,10)+1)}):d.update(u,1)}),d.bruteforceUpdate(c);const a=d.unwind(s),i=a.length,o=this.getGuesses(r,i);return{password:r,guesses:o,guessesLog10:y.log10(o),sequence:a}},getGuesses(r,t){const e=r.length;let s=0;return r.length===0?s=1:s=d.optimal.g[e-1][t],s}};class $t{match({password:t,omniMatch:e}){const s=[];let n=0;for(;n<t.length;){const i=this.getGreedyMatch(t,n),o=this.getLazyMatch(t,n);if(i==null)break;const{match:c,baseToken:u}=this.setMatchToken(i,o);if(c){const h=c.index+c[0].length-1,f=this.getBaseGuesses(u,e);s.push(this.normalizeMatch(u,h,c,f)),n=h+1}}return s.some(i=>i instanceof Promise)?Promise.all(s):s}normalizeMatch(t,e,s,n){const a={pattern:"repeat",i:s.index,j:e,token:s[0],baseToken:t,baseGuesses:0,repeatCount:s[0].length/t.length};return n instanceof Promise?n.then(i=>b(m({},a),{baseGuesses:i})):b(m({},a),{baseGuesses:n})}getGreedyMatch(t,e){const s=/(.+)\1+/g;return s.lastIndex=e,s.exec(t)}getLazyMatch(t,e){const s=/(.+?)\1+/g;return s.lastIndex=e,s.exec(t)}setMatchToken(t,e){const s=/^(.+?)\1+$/;let n,a="";if(e&&t[0].length>e[0].length){n=t;const i=s.exec(n[0]);i&&(a=i[1])}else n=e,n&&(a=n[1]);return{match:n,baseToken:a}}getBaseGuesses(t,e){const s=e.match(t);return s instanceof Promise?s.then(a=>A.mostGuessableMatchSequence(t,a).guesses):A.mostGuessableMatchSequence(t,s).guesses}}class Ft{constructor(){this.MAX_DELTA=5}match({password:t}){const e=[];if(t.length===1)return[];let s=0,n=null;const a=t.length;for(let i=1;i<a;i+=1){const o=t.charCodeAt(i)-t.charCodeAt(i-1);if(n==null&&(n=o),o!==n){const c=i-1;this.update({i:s,j:c,delta:n,password:t,result:e}),s=c,n=o}}return this.update({i:s,j:a-1,delta:n,password:t,result:e}),e}update({i:t,j:e,delta:s,password:n,result:a}){if(e-t>1||Math.abs(s)===1){const i=Math.abs(s);if(i>0&&i<=this.MAX_DELTA){const o=n.slice(t,+e+1||9e9),{sequenceName:c,sequenceSpace:u}=this.getSequence(o);return a.push({pattern:"sequence",i:t,j:e,token:n.slice(t,+e+1||9e9),sequenceName:c,sequenceSpace:u,ascending:s>0})}}return null}getSequence(t){let e="unicode",s=26;return ft.test(t)?(e="lower",s=26):ht.test(t)?(e="upper",s=26):bt.test(t)&&(e="digits",s=10),{sequenceName:e,sequenceSpace:s}}}class qt{constructor(){this.SHIFTED_RX=/[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/}match({password:t}){const e=[];return Object.keys(l.graphs).forEach(s=>{const n=l.graphs[s];T(e,this.helper(t,n,s))}),k(e)}checkIfShifted(t,e,s){return!t.includes("keypad")&&this.SHIFTED_RX.test(e.charAt(s))?1:0}helper(t,e,s){let n;const a=[];let i=0;const o=t.length;for(;i<o-1;){let c=i+1,u=0,h=0;for(n=this.checkIfShifted(s,t,i);;){const f=t.charAt(c-1),g=e[f]||[];let p=!1,M=-1,v=-1;if(c<o){const X=t.charAt(c),J=g.length;for(let S=0;S<J;S+=1){const w=g[S];if(v+=1,w){const j=w.indexOf(X);if(j!==-1){p=!0,M=v,j===1&&(n+=1),u!==M&&(h+=1,u=M);break}}}}if(p)c+=1;else{c-i>2&&a.push({pattern:"spatial",i,j:c-1,token:t.slice(i,c),graph:s,turns:h,shiftedCount:n}),i=c;break}}}return a}}class Ht{constructor(){this.matchers={date:Mt,dictionary:xt,regex:Dt,repeat:$t,sequence:Ft,spatial:qt}}match(t){const e=[],s=[];return[...Object.keys(this.matchers),...Object.keys(l.matchers)].forEach(a=>{if(!this.matchers[a]&&!l.matchers[a])return;const i=this.matchers[a]?this.matchers[a]:l.matchers[a].Matching,c=new i().match({password:t,omniMatch:this});c instanceof Promise?(c.then(u=>{T(e,u)}),s.push(c)):T(e,c)}),s.length>0?new Promise(a=>{Promise.all(s).then(()=>{a(k(e))})}):k(e)}}const $=1,F=$*60,q=F*60,H=q*24,B=H*31,V=B*12,Bt=V*100,I={second:$,minute:F,hour:q,day:H,month:B,year:V,century:Bt};class Vt{translate(t,e){let s=t;e!==void 0&&e!==1&&(s+="s");const{timeEstimation:n}=l.translations;return n[s].replace("{base}",`${e}`)}estimateAttackTimes(t){const e={onlineThrottling100PerHour:t/(100/3600),onlineNoThrottling10PerSecond:t/10,offlineSlowHashing1e4PerSecond:t/1e4,offlineFastHashing1e10PerSecond:t/1e10},s={onlineThrottling100PerHour:"",onlineNoThrottling10PerSecond:"",offlineSlowHashing1e4PerSecond:"",offlineFastHashing1e10PerSecond:""};return Object.keys(e).forEach(n=>{const a=e[n];s[n]=this.displayTime(a)}),{crackTimesSeconds:e,crackTimesDisplay:s,score:this.guessesToScore(t)}}guessesToScore(t){const e=5;return t<1e3+e?0:t<1e6+e?1:t<1e8+e?2:t<1e10+e?3:4}displayTime(t){let e="centuries",s;const n=Object.keys(I),a=n.findIndex(i=>t<I[i]);return a>-1&&(e=n[a-1],a!==0?s=Math.round(t/I[e]):e="ltSecond"),this.translate(e,s)}}var zt=()=>null,Zt=()=>({warning:l.translations.warnings.dates,suggestions:[l.translations.suggestions.dates]});const Kt=(r,t)=>{let e="";return t&&!r.l33t&&!r.reversed?r.rank<=10?e=l.translations.warnings.topTen:r.rank<=100?e=l.translations.warnings.topHundred:e=l.translations.warnings.common:r.guessesLog10<=4&&(e=l.translations.warnings.similarToCommon),e},Xt=(r,t)=>{let e="";return t&&(e=l.translations.warnings.wordByItself),e},Jt=(r,t)=>t?l.translations.warnings.namesByThemselves:l.translations.warnings.commonNames,Qt=(r,t)=>{let e="";const s=r.dictionaryName,n=s==="lastnames"||s.toLowerCase().includes("firstnames");return s==="passwords"?e=Kt(r,t):s.includes("wikipedia")?e=Xt(r,t):n?e=Jt(r,t):s==="userInputs"&&(e=l.translations.warnings.userInputs),e};var te=(r,t)=>{const e=Qt(r,t),s=[],n=r.token;return n.match(Y)?s.push(l.translations.suggestions.capitalization):n.match(W)&&n.toLowerCase()!==n&&s.push(l.translations.suggestions.allUppercase),r.reversed&&r.token.length>=4&&s.push(l.translations.suggestions.reverseWords),r.l33t&&s.push(l.translations.suggestions.l33t),{warning:e,suggestions:s}},ee=r=>r.regexName==="recentYear"?{warning:l.translations.warnings.recentYears,suggestions:[l.translations.suggestions.recentYears,l.translations.suggestions.associatedYears]}:{warning:"",suggestions:[]},se=r=>{let t=l.translations.warnings.extendedRepeat;return r.baseToken.length===1&&(t=l.translations.warnings.simpleRepeat),{warning:t,suggestions:[l.translations.suggestions.repeated]}},ne=()=>({warning:l.translations.warnings.sequences,suggestions:[l.translations.suggestions.sequences]}),re=r=>{let t=l.translations.warnings.keyPattern;return r.turns===1&&(t=l.translations.warnings.straightRow),{warning:t,suggestions:[l.translations.suggestions.longerKeyboardPattern]}};const z={warning:"",suggestions:[]};class ae{constructor(){this.matchers={bruteforce:zt,date:Zt,dictionary:te,regex:ee,repeat:se,sequence:ne,spatial:re},this.defaultFeedback={warning:"",suggestions:[]},this.setDefaultSuggestions()}setDefaultSuggestions(){this.defaultFeedback.suggestions.push(l.translations.suggestions.useWords,l.translations.suggestions.noNeed)}getFeedback(t,e){if(e.length===0)return this.defaultFeedback;if(t>2)return z;const s=l.translations.suggestions.anotherWord,n=this.getLongestMatch(e);let a=this.getMatchFeedback(n,e.length===1);return a!=null?(a.suggestions.unshift(s),a.warning==null&&(a.warning="")):a={warning:"",suggestions:[s]},a}getLongestMatch(t){let e=t[0];return t.slice(1).forEach(n=>{n.token.length>e.token.length&&(e=n)}),e}getMatchFeedback(t,e){return this.matchers[t.pattern]?this.matchers[t.pattern](t,e):l.matchers[t.pattern]&&"feedback"in l.matchers[t.pattern]?l.matchers[t.pattern].feedback(t,e):z}}const Z=()=>new Date().getTime(),K=(r,t,e)=>{const s=new ae,n=new Vt,a=A.mostGuessableMatchSequence(t,r),i=Z()-e,o=n.estimateAttackTimes(a.guesses);return b(m(m({calcTime:i},a),o),{feedback:s.getFeedback(o.score,a.sequence)})},oe=(r,t)=>{t&&l.extendUserInputsDictionary(t);const e=new Ht,s=Z(),n=e.match(r);return n instanceof Promise?n.then(a=>K(a,r,s)):K(n,r,s)};export{oe as z};
