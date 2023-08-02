"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},55999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={custom_edit_url:null},i=void 0,l={unversionedId:"api/MOVE_TYPE",id:"version-4.11.0/api/MOVE_TYPE",title:"MOVE_TYPE",description:"An object with all possible moveTypes",source:"@site/versioned_docs/version-4.11.0/api/MOVE_TYPE.mdx",sourceDirName:"api",slug:"/api/MOVE_TYPE",permalink:"/egjs-flicking/docs/api/MOVE_TYPE",draft:!1,editUrl:null,tags:[],version:"4.11.0",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"DIRECTION",permalink:"/egjs-flicking/docs/api/DIRECTION"},next:{title:"CIRCULAR_FALLBACK",permalink:"/egjs-flicking/docs/api/CIRCULAR_FALLBACK"}},c={},p=[],s={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const MOVE_TYPE\n")),(0,a.kt)("div",null),(0,a.kt)("p",null,"An object with all possible ",(0,a.kt)("a",{parentName:"p",href:"Flicking#moveType"},"moveType"),"s"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SNAP"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"snap"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"Flicking's ",(0,a.kt)("a",{parentName:"td",href:"Flicking#moveType"},"moveType")," that enables ",(0,a.kt)("a",{parentName:"td",href:"SnapControl"},"SnapControl")," as a Flicking's ",(0,a.kt)("a",{parentName:"td",href:"Flicking#control"},"control"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"FREE_SCROLL"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"freeScroll"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"Flicking's ",(0,a.kt)("a",{parentName:"td",href:"Flicking#moveType"},"moveType")," that enables ",(0,a.kt)("a",{parentName:"td",href:"FreeControl"},"FreeControl")," as a Flicking's ",(0,a.kt)("a",{parentName:"td",href:"Flicking#control"},"control"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"STRICT"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"strict"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"Flicking's ",(0,a.kt)("a",{parentName:"td",href:"Flicking#moveType"},"moveType")," that enables ",(0,a.kt)("a",{parentName:"td",href:"StrictControl"},"StrictControl")," as a Flicking's ",(0,a.kt)("a",{parentName:"td",href:"Flicking#control"},"control"))))))}u.isMDXComponent=!0}}]);