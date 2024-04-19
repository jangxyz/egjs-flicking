"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20006],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=c(t),d=a,m=s["".concat(p,".").concat(d)]||s[d]||y[d]||o;return t?r.createElement(m,i(i({ref:n},g),{},{components:t})):r.createElement(m,i({ref:n},g))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},99778:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={custom_edit_url:null},i=void 0,l={unversionedId:"api/AnchorPoint",id:"version-4.9.3/api/AnchorPoint",title:"AnchorPoint",description:"A data component that has actual position where the camera should be stopped at",source:"@site/versioned_docs/version-4.9.3/api/AnchorPoint.mdx",sourceDirName:"api",slug:"/api/AnchorPoint",permalink:"/egjs-flicking/docs/4.9.3/api/AnchorPoint",draft:!1,editUrl:null,tags:[],version:"4.9.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"State",permalink:"/egjs-flicking/docs/4.9.3/api/State"},next:{title:"FlickingError",permalink:"/egjs-flicking/docs/4.9.3/api/FlickingError"}},p={},c=[{value:"constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"index",id:"index",level:3},{value:"position",id:"position",level:3},{value:"panel",id:"panel",level:3}],g={toc:c},s="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"class AnchorPoint\n")),(0,a.yg)("div",null),(0,a.yg)("p",null,"A data component that has actual position where the camera should be stopped at"),(0,a.yg)("div",{className:"container"},(0,a.yg)("div",{className:"row mb-2"},(0,a.yg)("div",{className:"col col--12"},(0,a.yg)("strong",null,"Properties"))),(0,a.yg)("div",{className:"row"},(0,a.yg)("div",{className:"col col--12"},(0,a.yg)("a",{href:"#index"},"index"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#position"},"position"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#panel"},"panel")))),(0,a.yg)("h2",{id:"constructor"},"constructor"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"new AnchorPoint(options, options.index, options.position, options.panel)\n")),(0,a.yg)("div",null),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"options"),(0,a.yg)("td",{parentName:"tr",align:"center"},"object"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"An options object")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"options.index"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"Index of AnchorPoint")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"options.position"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"Position of AnchorPoint")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"options.panel"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"A ",(0,a.yg)("a",{parentName:"td",href:"Panel"},"Panel")," instance AnchorPoint is referencing to")))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"index"},"index"),(0,a.yg)("div",null,(0,a.yg)("span",{className:"badge badge--warning"},"readonly")),(0,a.yg)("p",null,"Index of AnchorPoint"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": number"),(0,a.yg)("h3",{id:"position"},"position"),(0,a.yg)("div",null,(0,a.yg)("span",{className:"badge badge--warning"},"readonly")),(0,a.yg)("p",null,"Position of AnchorPoint"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": number"),(0,a.yg)("h3",{id:"panel"},"panel"),(0,a.yg)("div",null,(0,a.yg)("span",{className:"badge badge--warning"},"readonly")),(0,a.yg)("p",null,"A ",(0,a.yg)("a",{parentName:"p",href:"Panel"},"Panel")," instance AnchorPoint is referencing to"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": ",(0,a.yg)("a",{parentName:"p",href:"Panel"},"Panel")))}y.isMDXComponent=!0}}]);