"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,k=d["".concat(o,".").concat(g)]||d[g]||N[g]||l;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={custom_edit_url:null},i=void 0,p={unversionedId:"api/EVENTS",id:"version-4.3.1/api/EVENTS",title:"EVENTS",description:"EVENTS",source:"@site/versioned_docs/version-4.3.1/api/EVENTS.mdx",sourceDirName:"api",slug:"/api/EVENTS",permalink:"/egjs-flicking/docs/4.3.1/api/EVENTS",draft:!1,editUrl:null,tags:[],version:"4.3.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.3.1/api",previous:{title:"ERROR_CODE",permalink:"/egjs-flicking/docs/4.3.1/api/ERROR_CODE"},next:{title:"ALIGN",permalink:"/egjs-flicking/docs/4.3.1/api/ALIGN"}},o={},c=[{value:"EVENTS",id:"EVENTS",level:3}],m={toc:c},d="wrapper";function N(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const EVENTS\n")),(0,a.kt)("h3",{id:"EVENTS"},"EVENTS"),(0,a.kt)("div",{className:"bulma-tags"}),(0,a.kt)("p",null,"Event type object with event name strings of ",(0,a.kt)("a",{parentName:"p",href:"Flicking"},"Flicking")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"HOLD_START"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"holdStart"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"holdStart event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"HOLD_END"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"holdEnd"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"holdEnd event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MOVE_START"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"moveStart"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"moveStart event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MOVE"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"move"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"move event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MOVE_END"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"moveEnd"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"moveEnd event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WILL_CHANGE"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"willChange"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"willChange event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CHANGED"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"changed"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"changed event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"WILL_RESTORE"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"willRestore"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"willRestore event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"RESTORED"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"restored"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"restored event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SELECT"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"select"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"select event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"NEED_PANEL"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"needPanel"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"needPanel event")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"PANEL_CHANGE"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"panelChange"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"panelChange event")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { EVENTS } from "@egjs/flicking";\nEVENTS.MOVE_START; // "moveStart"\n')))}N.isMDXComponent=!0}}]);