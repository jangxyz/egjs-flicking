"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61103],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=d(n),s=a,g=k["".concat(o,".").concat(s)]||k[s]||m[s]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},67219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={custom_edit_url:null},o=void 0,d={unversionedId:"api/Viewport",id:"version-4.11.1/api/Viewport",title:"Viewport",description:"A component that manages viewport size",source:"@site/versioned_docs/version-4.11.1/api/Viewport.mdx",sourceDirName:"api",slug:"/api/Viewport",permalink:"/egjs-flicking/docs/api/Viewport",draft:!1,editUrl:null,tags:[],version:"4.11.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FlickingError",permalink:"/egjs-flicking/docs/api/FlickingError"},next:{title:"Panel",permalink:"/egjs-flicking/docs/api/Panel"}},c={},m=[{value:"constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"width",id:"width",level:3},{value:"height",id:"height",level:3},{value:"padding",id:"padding",level:3},{value:"Methods",id:"methods",level:2},{value:"setSize",id:"setSize",level:3},{value:"resize",id:"resize",level:3}],k={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class Viewport\n")),(0,i.kt)("div",null),(0,i.kt)("p",null,"A component that manages viewport size"),(0,i.kt)("div",{className:"container"},(0,i.kt)("div",{className:"row mb-2"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("strong",null,"Properties")),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("strong",null,"Methods"))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("a",{href:"#element"},"element"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#width"},"width"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#height"},"height"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#padding"},"padding")),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("a",{href:"#setSize"},"setSize"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#resize"},"resize")))),(0,i.kt)("h2",{id:"constructor"},"constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new Viewport(el, el)\n")),(0,i.kt)("div",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"el"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A viewport element")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"el"),(0,i.kt)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"element"},"element"),(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--warning"},"readonly")),(0,i.kt)("p",null,"A viewport(root) element"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--warning"},"readonly")),(0,i.kt)("p",null,"Viewport width, without paddings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": number"),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--warning"},"readonly")),(0,i.kt)("p",null,"Viewport height, without paddings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": number"),(0,i.kt)("h3",{id:"padding"},"padding"),(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--warning"},"readonly")),(0,i.kt)("p",null,"Viewport paddings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": object"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"left"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,i.kt)("inlineCode",{parentName:"td"},"padding-left"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"right"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,i.kt)("inlineCode",{parentName:"td"},"padding-right"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"top"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,i.kt)("inlineCode",{parentName:"td"},"padding-top"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"bottom"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,i.kt)("inlineCode",{parentName:"td"},"padding-bottom"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"setSize"},"setSize"),(0,i.kt)("div",null),(0,i.kt)("p",null,"Change viewport's size.",(0,i.kt)("br",null),"This will change the actual size of ",(0,i.kt)("inlineCode",{parentName:"p"},".flicking-viewport")," element by changing its CSS width/height property"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"size"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"New viewport size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"size.width"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"size.height"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")))),(0,i.kt)("h3",{id:"resize"},"resize"),(0,i.kt)("div",null),(0,i.kt)("p",null,"Update width/height to the current viewport element's size"))}s.isMDXComponent=!0}}]);