"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6876],{15680:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>s});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},y=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,y=g(e,["components","mdxType","originalType","parentName"]),d=o(r),m=a,s=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(s,l(l({ref:t},y),{},{components:r})):n.createElement(s,l({ref:t},y))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g[d]="string"==typeof e?e:a,l[1]=g;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>g,toc:()=>o});var n=r(58168),a=(r(96540),r(15680));const i={custom_edit_url:null},l=void 0,g={unversionedId:"api/Viewport",id:"version-4.5.1/api/Viewport",title:"Viewport",description:"A component that manages viewport size",source:"@site/versioned_docs/version-4.5.1/api/Viewport.mdx",sourceDirName:"api",slug:"/api/Viewport",permalink:"/egjs-flicking/docs/4.5.1/api/Viewport",draft:!1,editUrl:null,tags:[],version:"4.5.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FlickingError",permalink:"/egjs-flicking/docs/4.5.1/api/FlickingError"},next:{title:"Panel",permalink:"/egjs-flicking/docs/4.5.1/api/Panel"}},p={},o=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"width",id:"width",level:3},{value:"height",id:"height",level:3},{value:"padding",id:"padding",level:3},{value:"Methods",id:"methods",level:2},{value:"setSize",id:"setSize",level:3},{value:"resize",id:"resize",level:3}],y={toc:o},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"class Viewport\n")),(0,a.yg)("p",null,"A component that manages viewport size"),(0,a.yg)("div",{className:"container"},(0,a.yg)("div",{className:"row mb-2"},(0,a.yg)("div",{className:"col col--6"},(0,a.yg)("strong",null,"Properties")),(0,a.yg)("div",{className:"col col--6"},(0,a.yg)("strong",null,"Methods"))),(0,a.yg)("div",{className:"row"},(0,a.yg)("div",{className:"col col--6"},(0,a.yg)("a",{href:"#element"},"element"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#width"},"width"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#height"},"height"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#padding"},"padding")),(0,a.yg)("div",{className:"col col--6"},(0,a.yg)("a",{href:"#setSize"},"setSize"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#resize"},"resize")))),(0,a.yg)("h2",{id:"constructor"},"Constructor"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"new Viewport(el)\n")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"el"),(0,a.yg)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"A viewport element")))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"element"},"element"),(0,a.yg)("div",{className:"bulma-tags"},(0,a.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.yg)("p",null,"A viewport(root) element"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,a.yg)("h3",{id:"width"},"width"),(0,a.yg)("div",{className:"bulma-tags"},(0,a.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.yg)("p",null,"Viewport width, without paddings"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": number"),(0,a.yg)("h3",{id:"height"},"height"),(0,a.yg)("div",{className:"bulma-tags"},(0,a.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.yg)("p",null,"Viewport height, without paddings"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": number"),(0,a.yg)("h3",{id:"padding"},"padding"),(0,a.yg)("div",{className:"bulma-tags"},(0,a.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.yg)("p",null,"Viewport paddings"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": object"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"left"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.yg)("inlineCode",{parentName:"td"},"padding-left"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"right"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.yg)("inlineCode",{parentName:"td"},"padding-right"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"top"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.yg)("inlineCode",{parentName:"td"},"padding-top"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"bottom"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.yg)("inlineCode",{parentName:"td"},"padding-bottom"))))),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"setSize"},"setSize"),(0,a.yg)("div",{className:"bulma-tags"}),(0,a.yg)("p",null,"Change viewport's size.",(0,a.yg)("br",{parentName:"p"}),"\n","This will change the actual size of ",(0,a.yg)("inlineCode",{parentName:"p"},".flicking-viewport")," element by changing its CSS width/height property"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"size"),(0,a.yg)("td",{parentName:"tr",align:"center"},"object"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"New viewport size")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"size.width"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"size.height"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")))),(0,a.yg)("h3",{id:"resize"},"resize"),(0,a.yg)("div",{className:"bulma-tags"}),(0,a.yg)("p",null,"Update width/height to the current viewport element's size"))}c.isMDXComponent=!0}}]);