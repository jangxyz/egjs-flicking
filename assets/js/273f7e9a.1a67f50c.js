"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52567],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,m=s["".concat(p,".").concat(d)]||s[d]||y[d]||o;return n?r.createElement(m,i(i({ref:t},g),{},{components:n})):r.createElement(m,i({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={custom_edit_url:null},i=void 0,l={unversionedId:"api/AnchorPoint",id:"version-4.1.1/api/AnchorPoint",title:"AnchorPoint",description:"A data component that has actual position where the camera should be stopped at",source:"@site/versioned_docs/version-4.1.1/api/AnchorPoint.mdx",sourceDirName:"api",slug:"/api/AnchorPoint",permalink:"/egjs-flicking/docs/4.1.1/api/AnchorPoint",draft:!1,editUrl:null,tags:[],version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"State",permalink:"/egjs-flicking/docs/4.1.1/api/State"},next:{title:"FlickingError",permalink:"/egjs-flicking/docs/4.1.1/api/FlickingError"}},p={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"index",id:"index",level:3},{value:"position",id:"position",level:3},{value:"panel",id:"panel",level:3}],g={toc:c},s="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"class AnchorPoint\n")),(0,a.yg)("p",null,"A data component that has actual position where the camera should be stopped at"),(0,a.yg)("div",{className:"container"},(0,a.yg)("div",{className:"row mb-2"},(0,a.yg)("div",{className:"col col--12"},(0,a.yg)("strong",null,"Properties"))),(0,a.yg)("div",{className:"row"},(0,a.yg)("div",{className:"col col--12"},(0,a.yg)("a",{href:"#index"},"index"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#position"},"position"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#panel"},"panel")))),(0,a.yg)("h2",{id:"constructor"},"Constructor"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"new AnchorPoint(options, options.index, options.position, options.panel)\n")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"options"),(0,a.yg)("td",{parentName:"tr",align:"center"},"object"),(0,a.yg)("td",{parentName:"tr",align:"center"},"no"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"An options object")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"options.index"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"Index of AnchorPoint")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"options.position"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"Position of AnchorPoint")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"options.panel"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,a.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"A ",(0,a.yg)("a",{parentName:"td",href:"Panel"},"Panel")," instance AnchorPoint is referencing to")))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"index"},"index"),(0,a.yg)("div",{className:"bulma-tags"},(0,a.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.yg)("p",null,"Index of AnchorPoint"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": number"),(0,a.yg)("h3",{id:"position"},"position"),(0,a.yg)("div",{className:"bulma-tags"},(0,a.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.yg)("p",null,"Position of AnchorPoint"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": number"),(0,a.yg)("h3",{id:"panel"},"panel"),(0,a.yg)("div",{className:"bulma-tags"},(0,a.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.yg)("p",null,"A ",(0,a.yg)("a",{parentName:"p",href:"Panel"},"Panel")," instance AnchorPoint is referencing to"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": ",(0,a.yg)("a",{parentName:"p",href:"Panel"},"Panel")))}y.isMDXComponent=!0}}]);