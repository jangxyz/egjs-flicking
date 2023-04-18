"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84967],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||l;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=f;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},66757:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const l={title:"Polyfills",id:"polyfills",slug:"/polyfills",custom_edit_url:null},i=void 0,s={unversionedId:"polyfills",id:"version-4.0.0/polyfills",title:"Polyfills",description:"Flicking is based on es5 and additionally needs es6 Promise to work properly.",source:"@site/versioned_docs/version-4.0.0/polyfills.mdx",sourceDirName:".",slug:"/polyfills",permalink:"/egjs-flicking/docs/4.0.0/polyfills",draft:!1,editUrl:null,tags:[],version:"4.0.0",frontMatter:{title:"Polyfills",id:"polyfills",slug:"/polyfills",custom_edit_url:null},sidebar:"version-4.0.0/docs",previous:{title:"Handling errors",permalink:"/egjs-flicking/docs/4.0.0/error-handling"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-flicking/docs/4.0.0/migration-from-v3"}},a={},c=[],p={toc:c},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Flicking is based on es5 and additionally needs es6 Promise to work properly.",(0,o.kt)("br",{parentName:"p"}),"\n","es5 is basically supported on IE9+ (",(0,o.kt)("a",{parentName:"p",href:"http://kangax.github.io/compat-table/es5/"},"Source"),")",(0,o.kt)("br",{parentName:"p"}),"\n","So, only es6 Promise is needed to run Flicking on the older browsers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.js"><\/script>\n')),(0,o.kt)("p",null,"Adding the above script will make Flicking run on the older browsers."))}d.isMDXComponent=!0}}]);