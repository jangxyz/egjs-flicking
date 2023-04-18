"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(r),k=a,g=m["".concat(o,".").concat(k)]||m[k]||s[k]||i;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},71158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={custom_edit_url:null},l=void 0,p={unversionedId:"api/Viewport",id:"version-4.2.5/api/Viewport",title:"Viewport",description:"A component that manages viewport size",source:"@site/versioned_docs/version-4.2.5/api/Viewport.mdx",sourceDirName:"api",slug:"/api/Viewport",permalink:"/egjs-flicking/docs/4.2.5/api/Viewport",draft:!1,editUrl:null,tags:[],version:"4.2.5",frontMatter:{custom_edit_url:null},sidebar:"version-4.2.5/api",previous:{title:"FlickingError",permalink:"/egjs-flicking/docs/4.2.5/api/FlickingError"},next:{title:"ElementPanel",permalink:"/egjs-flicking/docs/4.2.5/api/ElementPanel"}},o={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"width",id:"width",level:3},{value:"height",id:"height",level:3},{value:"padding",id:"padding",level:3},{value:"Methods",id:"methods",level:2},{value:"setSize",id:"setSize",level:3},{value:"resize",id:"resize",level:3}],c={toc:d},m="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Viewport\n")),(0,a.kt)("p",null,"A component that manages viewport size"),(0,a.kt)("div",{className:"container"},(0,a.kt)("div",{className:"row mb-2"},(0,a.kt)("div",{className:"col col--6"},(0,a.kt)("strong",null,"Properties")),(0,a.kt)("div",{className:"col col--6"},(0,a.kt)("strong",null,"Methods"))),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--6"},(0,a.kt)("a",{href:"#element"},"element"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#width"},"width"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#height"},"height"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#padding"},"padding")),(0,a.kt)("div",{className:"col col--6"},(0,a.kt)("a",{href:"#setSize"},"setSize"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#resize"},"resize")))),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new Viewport(el)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"el"),(0,a.kt)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"A viewport element")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"element"},"element"),(0,a.kt)("div",{className:"bulma-tags"},(0,a.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.kt)("p",null,"A viewport(root) element"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,a.kt)("h3",{id:"width"},"width"),(0,a.kt)("div",{className:"bulma-tags"},(0,a.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.kt)("p",null,"Viewport width, without paddings"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": number"),(0,a.kt)("h3",{id:"height"},"height"),(0,a.kt)("div",{className:"bulma-tags"},(0,a.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.kt)("p",null,"Viewport height, without paddings"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": number"),(0,a.kt)("h3",{id:"padding"},"padding"),(0,a.kt)("div",{className:"bulma-tags"},(0,a.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.kt)("p",null,"Viewport paddings"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"left"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.kt)("inlineCode",{parentName:"td"},"padding-left"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"right"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.kt)("inlineCode",{parentName:"td"},"padding-right"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"top"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.kt)("inlineCode",{parentName:"td"},"padding-top"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"bottom"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.kt)("inlineCode",{parentName:"td"},"padding-bottom"))))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"setSize"},"setSize"),(0,a.kt)("div",{className:"bulma-tags"}),(0,a.kt)("p",null,"Change viewport's size.",(0,a.kt)("br",{parentName:"p"}),"\n","This will change the actual size of ",(0,a.kt)("inlineCode",{parentName:"p"},".flicking-viewport")," element by changing its CSS width/height property"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"size"),(0,a.kt)("td",{parentName:"tr",align:"center"},"object"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"New viewport size")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"size.width"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"size.height"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")))),(0,a.kt)("h3",{id:"resize"},"resize"),(0,a.kt)("div",{className:"bulma-tags"}),(0,a.kt)("p",null,"Update width/height to the current viewport element's size"))}s.isMDXComponent=!0}}]);