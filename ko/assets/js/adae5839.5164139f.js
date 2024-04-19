"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54357],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>s});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),y=p(r),u=a,s=y["".concat(c,".").concat(u)]||y[u]||m[u]||o;return r?n.createElement(s,i(i({ref:t},g),{},{components:r})):n.createElement(s,i({ref:t},g))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[y]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},87145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={custom_edit_url:null},i=void 0,l={unversionedId:"api/MOVE_TYPE",id:"version-4.8.1/api/MOVE_TYPE",title:"MOVE_TYPE",description:"MOVETYPE",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.8.1/api/MOVE_TYPE.mdx",sourceDirName:"api",slug:"/api/MOVE_TYPE",permalink:"/egjs-flicking/ko/docs/4.8.1/api/MOVE_TYPE",draft:!1,editUrl:null,tags:[],version:"4.8.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"DIRECTION",permalink:"/egjs-flicking/ko/docs/4.8.1/api/DIRECTION"},next:{title:"CIRCULAR_FALLBACK",permalink:"/egjs-flicking/ko/docs/4.8.1/api/CIRCULAR_FALLBACK"}},c={},p=[{value:"MOVE_TYPE",id:"MOVE_TYPE",level:3}],g={toc:p},y="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const MOVE_TYPE\n")),(0,a.yg)("h3",{id:"MOVE_TYPE"},"MOVE_TYPE"),(0,a.yg)("div",{className:"bulma-tags"}),(0,a.yg)("p",null,"Flicking\uc774 \uc81c\uacf5\ud558\ub294 ",(0,a.yg)("a",{parentName:"p",href:"Flicking#moveType"},"moveType"),"\ub4e4\uc744 \ub2f4\uace0 \uc788\ub294 \uac1d\uccb4"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": object"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"SNAP"),(0,a.yg)("td",{parentName:"tr",align:"center"},'"snap"'),(0,a.yg)("td",{parentName:"tr",align:"center"},"Flicking\uc758 ",(0,a.yg)("a",{parentName:"td",href:"Flicking#control"},"control"),"\uc744 ",(0,a.yg)("a",{parentName:"td",href:"SnapControl"},"SnapControl"),"\ub85c \uc124\uc815\ud558\uac8c \ud558\ub294 ",(0,a.yg)("a",{parentName:"td",href:"Flicking#moveType"},"moveType"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"FREE_SCROLL"),(0,a.yg)("td",{parentName:"tr",align:"center"},'"freeScroll"'),(0,a.yg)("td",{parentName:"tr",align:"center"},"Flicking\uc758 ",(0,a.yg)("a",{parentName:"td",href:"Flicking#control"},"control"),"\uc744 ",(0,a.yg)("a",{parentName:"td",href:"FreeControl"},"FreeControl"),"\ub85c \uc124\uc815\ud558\uac8c \ud558\ub294 ",(0,a.yg)("a",{parentName:"td",href:"Flicking#moveType"},"moveType"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"STRICT"),(0,a.yg)("td",{parentName:"tr",align:"center"},'"strict"'),(0,a.yg)("td",{parentName:"tr",align:"center"},"Flicking\uc758 ",(0,a.yg)("a",{parentName:"td",href:"Flicking#control"},"control"),"\uc744 ",(0,a.yg)("a",{parentName:"td",href:"StrictControl"},"StrictControl"),"\ub85c \uc124\uc815\ud558\uac8c \ud558\ub294 ",(0,a.yg)("a",{parentName:"td",href:"Flicking#moveType"},"moveType"))))))}m.isMDXComponent=!0}}]);