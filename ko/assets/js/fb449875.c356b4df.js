"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35136],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(r),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(k,o(o({ref:e},s),{},{components:r})):n.createElement(k,o({ref:e},s))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},22454:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={custom_edit_url:null},o=void 0,l={unversionedId:"api/Status",id:"version-4.3.1/api/Status",title:"Status",description:"Status",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.3.1/api/Status.mdx",sourceDirName:"api",slug:"/api/Status",permalink:"/egjs-flicking/ko/docs/4.3.1/api/Status",draft:!1,editUrl:null,tags:[],version:"4.3.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.3.1/api",previous:{title:"Plugin",permalink:"/egjs-flicking/ko/docs/4.3.1/api/Plugin"},next:{title:"ControlParams",permalink:"/egjs-flicking/ko/docs/4.3.1/api/ControlParams"}},p={},c=[{value:"Status",id:"Status",level:3}],s={toc:c},u="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Status\n")),(0,a.kt)("h3",{id:"Status"},"Status"),(0,a.kt)("div",{className:"bulma-tags"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Flicking#getStatus"},"Flicking#getStatus"),"\uc5d0 \uc758\ud574 \ubc18\ud658\ub41c Flicking \uc0c1\ud0dc \uac1d\uccb4"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"index"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud65c\uc131\ud654\ub41c \ud328\ub110\uc758 \uc778\ub371\uc2a4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"position"),(0,a.kt)("td",{parentName:"tr",align:"center"},"object"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uce74\uba54\ub77c ",(0,a.kt)("a",{parentName:"td",href:"Camera#position"},"position"),"\uc744 \uc124\uc815\ud558\uae30 \uc704\ud55c \uc815\ubcf4\ub4e4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"position.panel"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uce74\uba54\ub77c\uac00 \uc704\uce58\ud55c \ud328\ub110\uc758 \uc778\ub371\uc2a4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"position.progressInPanel"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \ub0b4\uc5d0\uc11c\uc758 \uce74\uba54\ub77c \uc704\uce58\uc758 \uc9c4\ud589\ub3c4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"visibleOffset"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud604\uc7ac \ubcf4\uc774\ub294 \ud328\ub110\ub4e4\uc744 \uc800\uc7a5\ud588\uc744 \ub54c, \uc6d0\ub798\uc758 \uc778\ub371\uc2a4 \ub300\ube44 offset. ",(0,a.kt)("inlineCode",{parentName:"td"},"visiblePanelsOnly")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud588\uc744 \ub54c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"panels"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \uc815\ubcf4\ub97c \ub2f4\uc740 \ubc30\uc5f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"panels.index"),(0,a.kt)("td",{parentName:"tr",align:"center"},"index"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \uc778\ub371\uc2a4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"panels.html"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string ","|"," undefined"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 ",(0,a.kt)("inlineCode",{parentName:"td"},"outerHTML"))))))}m.isMDXComponent=!0}}]);