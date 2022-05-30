"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9648],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),k=a,u=s["".concat(o,".").concat(k)]||s[k]||m[k]||i;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},34731:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],p={custom_edit_url:null},o=void 0,c={unversionedId:"api/Viewport",id:"version-4.0.0/api/Viewport",title:"Viewport",description:"A component that manages viewport size",source:"@site/versioned_docs/version-4.0.0/api/Viewport.mdx",sourceDirName:"api",slug:"/api/Viewport",permalink:"/egjs-flicking/docs/4.0.0/api/Viewport",draft:!1,editUrl:null,tags:[],version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"FlickingError",permalink:"/egjs-flicking/docs/4.0.0/api/FlickingError"},next:{title:"ElementPanel",permalink:"/egjs-flicking/docs/4.0.0/api/ElementPanel"}},d={},m=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"width",id:"width",level:3},{value:"height",id:"height",level:3},{value:"padding",id:"padding",level:3},{value:"Methods",id:"methods",level:2},{value:"setSize",id:"setSize",level:3},{value:"resize",id:"resize",level:3}],s={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class Viewport\n")),(0,i.kt)("p",null,"A component that manages viewport size"),(0,i.kt)("div",{className:"container"},(0,i.kt)("div",{className:"row mb-2"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("strong",null,"Properties")),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("strong",null,"Methods"))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("a",{href:"#element"},"element"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#width"},"width"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#height"},"height"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#padding"},"padding")),(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("a",{href:"#setSize"},"setSize"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"#resize"},"resize")))),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"new Viewport(el)\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"el"),(0,i.kt)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,i.kt)("td",{parentName:"tr",align:"center"},"no"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"A viewport element")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"element"},"element"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,i.kt)("p",null,"A viewport(root) element"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,i.kt)("p",null,"Viewport width, without paddings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": number"),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,i.kt)("p",null,"Viewport height, without paddings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": number"),(0,i.kt)("h3",{id:"padding"},"padding"),(0,i.kt)("div",{className:"bulma-tags"},(0,i.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,i.kt)("p",null,"Viewport paddings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Type"),": object"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"left"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,i.kt)("inlineCode",{parentName:"td"},"padding-left"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"right"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,i.kt)("inlineCode",{parentName:"td"},"padding-right"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"top"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,i.kt)("inlineCode",{parentName:"td"},"padding-top"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"bottom"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,i.kt)("inlineCode",{parentName:"td"},"padding-bottom"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"setSize"},"setSize"),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("p",null,"Change viewport's size.",(0,i.kt)("br",{parentName:"p"}),"\n","This will change the actual size of ",(0,i.kt)("inlineCode",{parentName:"p"},".flicking-viewport")," element by changing its CSS width/height property"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"size"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"New viewport size")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"size.width"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"size.height"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")))),(0,i.kt)("h3",{id:"resize"},"resize"),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("p",null,"Update width/height to the current viewport element's size"))}k.isMDXComponent=!0}}]);