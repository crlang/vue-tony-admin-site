System.register(["./index-legacy-db4b469e.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.w,n=t.r,r=t.aB}],execute:function(t,i){function o(t){var e,i=n(!1);function o(){i.value=!1,e&&window.clearTimeout(e)}function u(){o(),e=setTimeout((function(){i.value=!0}),t)}return u(),r(o),{readyRef:i,stop:o,start:u}}t("u",(function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("function"!=typeof t)throw new Error("handle is not Function!");var i=o(n),u=i.readyRef,a=i.stop,c=i.start;return r?t():e(u,(function(e){e&&t()}),{immediate:!1}),{readyRef:u,stop:a,start:c}}))}}}));