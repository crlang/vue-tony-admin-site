!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,s,l,o=[],c=!0,a=!1;try{if(s=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=s.call(n)).done)&&(o.push(i.value),o.length!==t);c=!0);}catch(u){a=!0,r=u}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(a)throw r}}return o}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}System.register(["./index-legacy-0e131055.js","./siteSetting-legacy-4ab1592f.js","./useDescription-legacy-f13a44b1.js","./index-legacy-db4b469e.js","./index-legacy-3727d8bb.js","./index-legacy-245a7501.js","./tsxHelper-legacy-72a536d4.js","./index-legacy-f70b3302.js","./index-legacy-8ca62a35.js","./index-legacy-01771a22.js","./index-legacy-cc3dabb0.js","./index-legacy-cc451a16.js","./index-legacy-f6f61119.js","./index-legacy-b43e5c5d.js","./strings-legacy-e281ffd0.js","./isEqual-legacy-514a4f4d.js","./_baseIsEqual-legacy-2c6e4922.js","./drawer-legacy-60685b30.js","./form-item-legacy-6c7d6708.js","./col-legacy-e475f9fd.js","./card-legacy-16f6168d.js","./dropdown-legacy-765f5420.js","./description-legacy-8fef8d70.js","./index-legacy-f5a44bdc.js"],(function(t){"use strict";var n,i,r,s,l,o,c,a,u,f,p,g,d,y,v;return{setters:[function(e){n=e.B},function(e){i=e.G,r=e.D,s=e.S},function(e){l=e.u},function(e){o=e.d,c=e.e,a=e.o,u=e.k,f=e.i,p=e.g,g=e.b,d=e.t,y=e.j,v=e.h},function(e,t){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var m=["href"];t("default",o({__name:"index",setup:function(t){var o={dependencies:{"@element-plus/icons-vue":"^2.1.0","@iconify/iconify":"^3.1.0","@vueuse/core":"^9.13.0","@zxcvbn-ts/core":"^2.2.1",axios:"^1.3.4",dayjs:"^1.11.7",echarts:"^5.4.1","element-plus":"^2.3.0","intro.js":"^6.0.0","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-to-regexp":"^6.2.1",pinia:"^2.0.33","print-js":"^1.6.0","resize-observer-polyfill":"^1.5.1",vue:"^3.2.47","vue-router":"^4.1.6"},devDependencies:{"@commitlint/cli":"^17.4.4","@commitlint/config-conventional":"^17.4.4","@iconify/json":"^2.2.34","@purge-icons/generated":"^0.9.0","@types/fs-extra":"^9.0.13","@types/intro.js":"^3.0.2","@types/lodash-es":"^4.17.6","@types/mockjs":"^1.0.4","@types/node":"^18.0.6","@types/nprogress":"^0.2.0","@typescript-eslint/eslint-plugin":"^5.45.0","@typescript-eslint/parser":"^5.45.0","@vitejs/plugin-legacy":"^4.0.1","@vitejs/plugin-vue":"2.3.2","@vitejs/plugin-vue-jsx":"1.3.10","@vue/eslint-config-prettier":"^7.0.0","@vue/test-utils":"^2.0.2",autoprefixer:"^10.4.14",browserslist:"^4.21.5","caniuse-lite":"^1.0.30001466",commitizen:"^4.3.0","conventional-changelog-cli":"^2.2.2","cross-env":"^7.0.3","css-properties-sorting":"^1.0.10",dotenv:"^10.0.0",eslint:"^8.20.0","eslint-config-prettier":"^8.5.0","eslint-plugin-import":"^2.26.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-vue":"^9.2.0",esno:"^0.13.0","fs-extra":"^10.0.0","http-server":"^14.0.0",husky:"^8.0.3","lint-staged":"^13.2.0",postcss:"^8.4.5","postcss-html":"^1.5.0","postcss-scss":"^4.0.2",prettier:"^2.7.1",rimraf:"^3.0.2","rollup-plugin-visualizer":"^5.5.2",sass:"^1.46.0",stylelint:"^14.9.1","stylelint-config-html":"^1.0.0","stylelint-config-prettier":"^9.0.3","stylelint-config-recommended-vue":"^1.4.0","stylelint-config-standard":"^26.0.0","stylelint-config-standard-scss":"^5.0.0","stylelint-order":"^5.0.0","stylelint-scss":"^4.3.0","ts-node":"^10.9.1",typescript:"^4.8.4",vite:"3.2.5","vite-plugin-compression":"^0.5.1","vite-plugin-html":"^3.2.0","vite-plugin-imagemin":"^0.6.1","vite-plugin-mock":"^2.9.6","vite-plugin-optimize-persist":"^0.1.2","vite-plugin-package-config":"^0.1.1","vite-plugin-purge-icons":"^0.8.1","vite-plugin-pwa":"^0.12.2","vite-plugin-style-import":"^2.0.0","vite-plugin-svg-icons":"^2.0.1","vue-component-meta":"^1.2.0","vue-eslint-parser":"^9.1.0","vue-tsc":"^1.2.0","workbox-build":"^6.5.4","workbox-window":"^6.5.4"},name:"tony-admin",version:"0.6.0"},b=o.dependencies,j=o.devDependencies,h=o.name,x=[],w=[],k={version:o.version,lastBuildTime:"2023-03-15 11:22:11",doc:r,preview:s,github:i};Object.keys(b).forEach((function(e){x.push({field:e,label:e})})),Object.keys(j).forEach((function(e){w.push({field:e,label:e})}));var S=e(l({title:"生产环境依赖",border:!0,data:b,schema:x,column:3}),1)[0],A=e(l({title:"开发环境依赖",border:!0,data:j,schema:w,column:3}),1)[0],O=e(l({title:"项目信息",border:!0,data:k,schema:[{label:"版本",field:"version"},{label:"最后编译时间",field:"lastBuildTime"},{label:"文档地址",field:"doc"},{label:"预览地址",field:"preview"},{label:"Github",field:"github"}],column:2}),1)[0];return function(e,t){var r=c("PageWrapper");return a(),u(r,{title:"关于"},{extra:f((function(){return[p("a",{href:g(i),target:"_blank",style:{color:"var(--primary-color)"}},d(g(h)),9,m),y(" 是一个基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。 ")]})),default:f((function(){return[v(g(n),{onRegister:g(O)},null,8,["onRegister"]),v(g(n),{onRegister:g(S),class:"my-4"},null,8,["onRegister"]),v(g(n),{onRegister:g(A)},null,8,["onRegister"])]})),_:1})}}}))}}}))}();