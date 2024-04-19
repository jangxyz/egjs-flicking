"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22220],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),y=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},d=function(e){var t=y(e.components);return r.createElement(p.Provider,{value:t},e.children)},o="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),o=y(n),m=a,s=o["".concat(p,".").concat(m)]||o[m]||c[m]||l;return n?r.createElement(s,g(g({ref:t},d),{},{components:n})):r.createElement(s,g({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,g=new Array(l);g[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[o]="string"==typeof e?e:a,g[1]=i;for(var y=2;y<l;y++)g[y]=n[y];return r.createElement.apply(null,g)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var r=n(58168),a=(n(96540),n(15680));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/Viewport",id:"version-4.9.3/api/Viewport",title:"Viewport",description:"\ubdf0\ud3ec\ud2b8 \ud06c\uae30 \uc815\ubcf4\ub97c \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.9.3/api/Viewport.mdx",sourceDirName:"api",slug:"/api/Viewport",permalink:"/egjs-flicking/ko/docs/4.9.3/api/Viewport",draft:!1,editUrl:null,tags:[],version:"4.9.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FlickingError",permalink:"/egjs-flicking/ko/docs/4.9.3/api/FlickingError"},next:{title:"Panel",permalink:"/egjs-flicking/ko/docs/4.9.3/api/Panel"}},p={},y=[{value:"constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"width",id:"width",level:3},{value:"height",id:"height",level:3},{value:"padding",id:"padding",level:3},{value:"Methods",id:"methods",level:2},{value:"setSize",id:"setSize",level:3},{value:"resize",id:"resize",level:3}],d={toc:y},o="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(o,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"class Viewport\n")),(0,a.yg)("div",null),(0,a.yg)("p",null,"\ubdf0\ud3ec\ud2b8 \ud06c\uae30 \uc815\ubcf4\ub97c \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8"),(0,a.yg)("div",{className:"container"},(0,a.yg)("div",{className:"row mb-2"},(0,a.yg)("div",{className:"col col--6"},(0,a.yg)("strong",null,"Properties")),(0,a.yg)("div",{className:"col col--6"},(0,a.yg)("strong",null,"Methods"))),(0,a.yg)("div",{className:"row"},(0,a.yg)("div",{className:"col col--6"},(0,a.yg)("a",{href:"#element"},"element"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#width"},"width"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#height"},"height"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#padding"},"padding")),(0,a.yg)("div",{className:"col col--6"},(0,a.yg)("a",{href:"#setSize"},"setSize"),(0,a.yg)("br",null),(0,a.yg)("a",{href:"#resize"},"resize")))),(0,a.yg)("h2",{id:"constructor"},"constructor"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"new Viewport(el, el)\n")),(0,a.yg)("div",null),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"el"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"\ubdf0\ud3ec\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"el"),(0,a.yg)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"})))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"element"},"element"),(0,a.yg)("div",null,(0,a.yg)("span",{className:"badge badge--warning"},"readonly")),(0,a.yg)("p",null,"\ubdf0\ud3ec\ud2b8(root) \uc5d8\ub9ac\uba3c\ud2b8"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,a.yg)("h3",{id:"width"},"width"),(0,a.yg)("div",null,(0,a.yg)("span",{className:"badge badge--warning"},"readonly")),(0,a.yg)("p",null,"\ubdf0\ud3ec\ud2b8 \ub108\ube44"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": number"),(0,a.yg)("h3",{id:"height"},"height"),(0,a.yg)("div",null,(0,a.yg)("span",{className:"badge badge--warning"},"readonly")),(0,a.yg)("p",null,"\ubdf0\ud3ec\ud2b8 \ub192\uc774"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": number"),(0,a.yg)("h3",{id:"padding"},"padding"),(0,a.yg)("div",null,(0,a.yg)("span",{className:"badge badge--warning"},"readonly")),(0,a.yg)("p",null,"\ubdf0\ud3ec\ud2b8 CSS padding \uac12"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Type"),": object"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"left"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.yg)("inlineCode",{parentName:"td"},"padding-left"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"right"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.yg)("inlineCode",{parentName:"td"},"padding-right"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"top"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.yg)("inlineCode",{parentName:"td"},"padding-top"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"bottom"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,a.yg)("inlineCode",{parentName:"td"},"padding-bottom"))))),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"setSize"},"setSize"),(0,a.yg)("div",null),(0,a.yg)("p",null,"\ubdf0\ud3ec\ud2b8 \ud06c\uae30\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4.",(0,a.yg)("br",null),(0,a.yg)("inlineCode",{parentName:"p"},".flicking-viewport")," \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ud574\ub2f9 \ud06c\uae30\uc758 CSS width/height\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"size"),(0,a.yg)("td",{parentName:"tr",align:"center"},"object"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"\uc0c8 \ubdf0\ud3ec\ud2b8 \ud06c\uae30")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"size.width"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS \ubb38\uc790\uc5f4 \ub610\ub294 \uc22b\uc790(px)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"size.height"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"CSS \ubb38\uc790\uc5f4 \ub610\ub294 \uc22b\uc790(px)")))),(0,a.yg)("h3",{id:"resize"},"resize"),(0,a.yg)("div",null),(0,a.yg)("p",null,"\ud604\uc7ac \ubdf0\ud3ec\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ud06c\uae30\ub85c \ub108\ube44/\ub192\uc774\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"))}c.isMDXComponent=!0}}]);