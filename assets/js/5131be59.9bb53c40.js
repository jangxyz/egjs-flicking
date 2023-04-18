"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(n),N=a,k=d["".concat(o,".").concat(N)]||d[N]||g[N]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},29310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={custom_edit_url:null},i=void 0,p={unversionedId:"api/EVENTS",id:"version-4.9.3/api/EVENTS",title:"EVENTS",description:"Event type object with event name strings of Flicking",source:"@site/versioned_docs/version-4.9.3/api/EVENTS.mdx",sourceDirName:"api",slug:"/api/EVENTS",permalink:"/egjs-flicking/docs/4.9.3/api/EVENTS",draft:!1,editUrl:null,tags:[],version:"4.9.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"ERROR_CODE",permalink:"/egjs-flicking/docs/4.9.3/api/ERROR_CODE"},next:{title:"ALIGN",permalink:"/egjs-flicking/docs/4.9.3/api/ALIGN"}},o={},c=[],m={toc:c},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const EVENTS\n")),(0,a.kt)("div",null),(0,a.kt)("p",null,"Event type object with event name strings of ",(0,a.kt)("a",{parentName:"p",href:"Flicking"},"Flicking")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"HOLD_START"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"holdStart"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"holdStart event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"HOLD_END"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"holdEnd"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"holdEnd event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MOVE_START"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"moveStart"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"moveStart event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MOVE"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"move"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"move event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MOVE_END"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"moveEnd"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"moveEnd event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WILL_CHANGE"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"willChange"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"willChange event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CHANGED"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"changed"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"changed event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WILL_RESTORE"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"willRestore"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"willRestore event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"RESTORED"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"restored"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"restored event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SELECT"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"select"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"select event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NEED_PANEL"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"needPanel"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"needPanel event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PANEL_CHANGE"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"panelChange"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"panelChange event")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { EVENTS } from "@egjs/flicking";\nEVENTS.MOVE_START; // "moveStart"\n')))}g.isMDXComponent=!0}}]);