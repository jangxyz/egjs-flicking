"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96901],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(r),y=a,m=g["".concat(c,".").concat(y)]||g[y]||u[y]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},18180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const i={custom_edit_url:null},o=void 0,l={unversionedId:"api/DIRECTION",id:"version-4.0.0/api/DIRECTION",title:"DIRECTION",description:"DIRECTION",source:"@site/versioned_docs/version-4.0.0/api/DIRECTION.mdx",sourceDirName:"api",slug:"/api/DIRECTION",permalink:"/egjs-flicking/docs/4.0.0/api/DIRECTION",draft:!1,editUrl:null,tags:[],version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"ALIGN",permalink:"/egjs-flicking/docs/4.0.0/api/ALIGN"},next:{title:"MOVE_TYPE",permalink:"/egjs-flicking/docs/4.0.0/api/MOVE_TYPE"}},c={},p=[{value:"DIRECTION",id:"DIRECTION",level:3}],s={toc:p},g="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(g,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const DIRECTION\n")),(0,a.yg)("h3",{id:"DIRECTION"},"DIRECTION"),(0,a.yg)("div",{className:"bulma-tags"}),(0,a.yg)("p",null,"An object of directions"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": object"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"PREV"),(0,a.yg)("td",{parentName:"tr",align:"center"},'"PREV"'),(0,a.yg)("td",{parentName:"tr",align:"center"},'"left" when ',(0,a.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),' is true, and "top" when ',(0,a.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"NEXT"),(0,a.yg)("td",{parentName:"tr",align:"center"},'"NEXT"'),(0,a.yg)("td",{parentName:"tr",align:"center"},'"right" when ',(0,a.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),' is true, and "bottom" when ',(0,a.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"NONE"),(0,a.yg)("td",{parentName:"tr",align:"center"},"null"),(0,a.yg)("td",{parentName:"tr",align:"center"},"This value usually means it's the same position")))))}u.isMDXComponent=!0}}]);