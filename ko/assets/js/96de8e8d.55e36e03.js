"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62373],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),m=d(n),u=a,s=m["".concat(o,".").concat(u)]||m[u]||k[u]||l;return n?r.createElement(s,i(i({ref:e},c),{},{components:n})):r.createElement(s,i({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38145:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return k}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],p={custom_edit_url:null},o=void 0,d={unversionedId:"api/Viewport",id:"version-4.8.0/api/Viewport",title:"Viewport",description:"\ubdf0\ud3ec\ud2b8 \ud06c\uae30 \uc815\ubcf4\ub97c \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.8.0/api/Viewport.mdx",sourceDirName:"api",slug:"/api/Viewport",permalink:"/egjs-flicking/ko/docs/api/Viewport",draft:!1,editUrl:null,tags:[],version:"4.8.0",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FlickingError",permalink:"/egjs-flicking/ko/docs/api/FlickingError"},next:{title:"Panel",permalink:"/egjs-flicking/ko/docs/api/Panel"}},c={},k=[{value:"constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"width",id:"width",level:3},{value:"height",id:"height",level:3},{value:"padding",id:"padding",level:3},{value:"Methods",id:"methods",level:2},{value:"setSize",id:"setSize",level:3},{value:"resize",id:"resize",level:3}],m={toc:k};function u(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Viewport\n")),(0,l.kt)("div",null),(0,l.kt)("p",null,"\ubdf0\ud3ec\ud2b8 \ud06c\uae30 \uc815\ubcf4\ub97c \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8"),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#element"},"element"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#width"},"width"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#height"},"height"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#padding"},"padding")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#setSize"},"setSize"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#resize"},"resize")))),(0,l.kt)("h2",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new Viewport(el)\n")),(0,l.kt)("div",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"el"),(0,l.kt)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ubdf0\ud3ec\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"element"},"element"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly")),(0,l.kt)("p",null,"\ubdf0\ud3ec\ud2b8(root) \uc5d8\ub9ac\uba3c\ud2b8"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,l.kt)("h3",{id:"width"},"width"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly")),(0,l.kt)("p",null,"\ubdf0\ud3ec\ud2b8 \ub108\ube44"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"height"},"height"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly")),(0,l.kt)("p",null,"\ubdf0\ud3ec\ud2b8 \ub192\uc774"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"padding"},"padding"),(0,l.kt)("div",null,(0,l.kt)("span",{className:"badge badge--warning"},"readonly")),(0,l.kt)("p",null,"\ubdf0\ud3ec\ud2b8 CSS padding \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"left"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,l.kt)("inlineCode",{parentName:"td"},"padding-left"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"right"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,l.kt)("inlineCode",{parentName:"td"},"padding-right"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"top"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,l.kt)("inlineCode",{parentName:"td"},"padding-top"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"bottom"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"CSS ",(0,l.kt)("inlineCode",{parentName:"td"},"padding-bottom"))))),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"setSize"},"setSize"),(0,l.kt)("div",null),(0,l.kt)("p",null,"\ubdf0\ud3ec\ud2b8 \ud06c\uae30\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4.",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"p"},".flicking-viewport")," \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ud574\ub2f9 \ud06c\uae30\uc758 CSS width/height\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"size"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc0c8 \ubdf0\ud3ec\ud2b8 \ud06c\uae30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"size.width"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"CSS \ubb38\uc790\uc5f4 \ub610\ub294 \uc22b\uc790(px)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"size.height"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"CSS \ubb38\uc790\uc5f4 \ub610\ub294 \uc22b\uc790(px)")))),(0,l.kt)("h3",{id:"resize"},"resize"),(0,l.kt)("div",null),(0,l.kt)("p",null,"\ud604\uc7ac \ubdf0\ud3ec\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud06c\uae30\ub85c \ub108\ube44/\ub192\uc774\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"))}u.isMDXComponent=!0}}]);