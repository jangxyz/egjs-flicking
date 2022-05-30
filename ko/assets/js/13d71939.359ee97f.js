"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81059],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,y=f["".concat(a,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},88843:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],s={title:"Polyfills",id:"polyfills",slug:"/polyfills",custom_edit_url:null,sidebar_position:6},a=void 0,c={unversionedId:"tutorials/polyfills",id:"tutorials/polyfills",title:"Polyfills",description:"Flicking is based on es5 and additionally needs es6 Promise to work properly.",source:"@site/docs/tutorials/polyfills.mdx",sourceDirName:"tutorials",slug:"/polyfills",permalink:"/egjs-flicking/ko/docs/next/polyfills",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Polyfills",id:"polyfills",slug:"/polyfills",custom_edit_url:null,sidebar_position:6},sidebar:"docs",previous:{title:"Handling errors",permalink:"/egjs-flicking/ko/docs/next/error-handling"},next:{title:"Server Side Rendering (SSR)",permalink:"/egjs-flicking/ko/docs/next/ssr"}},p={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Flicking is based on es5 and additionally needs es6 Promise to work properly.",(0,i.kt)("br",{parentName:"p"}),"\n","es5 is basically supported on IE9+ (",(0,i.kt)("a",{parentName:"p",href:"http://kangax.github.io/compat-table/es5/"},"Source"),")",(0,i.kt)("br",{parentName:"p"}),"\n","So, only es6 Promise is needed to run Flicking on the older browsers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.js"><\/script>\n')),(0,i.kt)("p",null,"Adding the above script will make Flicking run on the older browsers."))}d.isMDXComponent=!0}}]);