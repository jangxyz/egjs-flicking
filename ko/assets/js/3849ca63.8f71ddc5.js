"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=k(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,u=m["".concat(p,".").concat(c)]||m[c]||g[c]||l;return n?a.createElement(u,i(i({ref:t},o),{},{components:n})):a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var k={};for(var p in t)hasOwnProperty.call(t,p)&&(k[p]=t[p]);k.originalType=e,k[m]="string"==typeof e?e:r,i[1]=k;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>k,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={custom_edit_url:null},i=void 0,k={unversionedId:"api/Panel",id:"version-4.11.0/api/Panel",title:"Panel",description:"\uc2ac\ub77c\uc774\ub4dc \ub370\uc774\ud130 \ucef4\ud3ec\ub10c\ud2b8\ub85c, \ub2e8\uc77c HTMLElement\uc758 \uc815\ubcf4\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.11.0/api/Panel.mdx",sourceDirName:"api",slug:"/api/Panel",permalink:"/egjs-flicking/ko/docs/api/Panel",draft:!1,editUrl:null,tags:[],version:"4.11.0",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Viewport",permalink:"/egjs-flicking/ko/docs/api/Viewport"},next:{title:"VirtualPanel",permalink:"/egjs-flicking/ko/docs/api/VirtualPanel"}},p={},d=[{value:"constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"elementProvider",id:"elementProvider",level:3},{value:"index",id:"index",level:3},{value:"position",id:"position",level:3},{value:"size",id:"size",level:3},{value:"sizeIncludingMargin",id:"sizeIncludingMargin",level:3},{value:"height",id:"height",level:3},{value:"margin",id:"margin",level:3},{value:"alignPosition",id:"alignPosition",level:3},{value:"removed",id:"removed",level:3},{value:"rendered",id:"rendered",level:3},{value:"loading",id:"loading",level:3},{value:"range",id:"range",level:3},{value:"toggled",id:"toggled",level:3},{value:"toggleDirection",id:"toggleDirection",level:3},{value:"offset",id:"offset",level:3},{value:"progress",id:"progress",level:3},{value:"outsetProgress",id:"outsetProgress",level:3},{value:"visibleRatio",id:"visibleRatio",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"markForShow",id:"markForShow",level:3},{value:"markForHide",id:"markForHide",level:3},{value:"resize",id:"resize",level:3},{value:"setSize",id:"setSize",level:3},{value:"contains",id:"contains",level:3},{value:"destroy",id:"destroy",level:3},{value:"includePosition",id:"includePosition",level:3},{value:"includeRange",id:"includeRange",level:3},{value:"isVisibleOnRange",id:"isVisibleOnRange",level:3},{value:"focus",id:"focus",level:3},{value:"prev",id:"prev",level:3},{value:"next",id:"next",level:3},{value:"increaseIndex",id:"increaseIndex",level:3},{value:"decreaseIndex",id:"decreaseIndex",level:3},{value:"updatePosition",id:"updatePosition",level:3},{value:"toggle",id:"toggle",level:3},{value:"updateCircularToggleDirection",id:"updateCircularToggleDirection",level:3}],o={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Panel\n")),(0,r.kt)("div",null),(0,r.kt)("p",null,"\uc2ac\ub77c\uc774\ub4dc \ub370\uc774\ud130 \ucef4\ud3ec\ub10c\ud2b8\ub85c, \ub2e8\uc77c HTMLElement\uc758 \uc815\ubcf4\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4"),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Properties")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#element"},"element"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#elementProvider"},"elementProvider"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#index"},"index"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#position"},"position"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#size"},"size"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#sizeIncludingMargin"},"sizeIncludingMargin"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#height"},"height"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#margin"},"margin"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#alignPosition"},"alignPosition"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#removed"},"removed"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#rendered"},"rendered"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#loading"},"loading"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#range"},"range"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#toggled"},"toggled"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#toggleDirection"},"toggleDirection"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#offset"},"offset"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#progress"},"progress"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#outsetProgress"},"outsetProgress"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#visibleRatio"},"visibleRatio"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#align"},"align")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#markForShow"},"markForShow"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#markForHide"},"markForHide"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#resize"},"resize"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#setSize"},"setSize"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#contains"},"contains"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#destroy"},"destroy"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#includePosition"},"includePosition"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#includeRange"},"includeRange"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#isVisibleOnRange"},"isVisibleOnRange"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#focus"},"focus"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#prev"},"prev"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#next"},"next"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#increaseIndex"},"increaseIndex"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#decreaseIndex"},"decreaseIndex"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#updatePosition"},"updatePosition"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#toggle"},"toggle"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#updateCircularToggleDirection"},"updateCircularToggleDirection")))),(0,r.kt)("h2",{id:"constructor"},"constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new Panel(options, options.index, options.align, options.flicking, options.elementProvider)\n")),(0,r.kt)("div",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"options"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uc624\ube0c\uc81d\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"options.index"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \ucd08\uae30 \uc778\ub371\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"options.align"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \ucd08\uae30 ",(0,r.kt)("a",{parentName:"td",href:"Flicking#align"},"align"),"\uac12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"options.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc774 \ucc38\uc870\ud558\ub294 ",(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")," \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"options.elementProvider"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc2e4\uc81c \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ubc18\ud658\ud558\ub294 \uc5d8\ub9ac\uba3c\ud2b8 \uacf5\uae09\uc790\uc758 \uc778\uc2a4\ud134\uc2a4")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"element"},"element"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110\uc774 \ucc38\uc870\ud558\uace0 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"HTMLElement")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,r.kt)("h3",{id:"elementProvider"},"elementProvider"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("h3",{id:"index"},"index"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110\uc758 \uc778\ub371\uc2a4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"position"},"position"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110\uc758 \ud604\uc7ac \uc88c\ud45c, ",(0,r.kt)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition"),"\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"size"},"size"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uce90\uc2dc\ub41c \ud06c\uae30",(0,r.kt)("br",null),"\uc774 \uac12\uc740 ",(0,r.kt)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc77c \uacbd\uc6b0 ",(0,r.kt)("a",{parentName:"p",href:"Panel#element"},"element"),"\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"offsetWidth"),"\uc640 \ub3d9\uc77c\ud558\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uc77c \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"offsetHeight"),"\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"sizeIncludingMargin"},"sizeIncludingMargin"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"CSS ",(0,r.kt)("inlineCode",{parentName:"p"},"margin"),"\uc744 \ud3ec\ud568\ud55c \ud328\ub110\uc758 \ud06c\uae30",(0,r.kt)("br",null),"\uc774 \uac12\uc740 ",(0,r.kt)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uc77c \uacbd\uc6b0 margin left/right\uc744 \ud3ec\ud568\ud558\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uc77c \uacbd\uc6b0 margin top/bottom\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"height"},"height"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ub192\uc774"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"margin"},"margin"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 CSS ",(0,r.kt)("inlineCode",{parentName:"p"},"margin")," \uac12"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"prev"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uc77c \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"td"},"margin-left"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\uc77c \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"td"},"margin-top"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"next"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uc77c \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"td"},"margin-right"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),"\uc77c \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"td"},"margin-bottom"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12")))),(0,r.kt)("h3",{id:"alignPosition"},"alignPosition"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110\uc758 \uc815\ub82c \uae30\uc900 \uc704\uce58. ",(0,r.kt)("a",{parentName:"p",href:"Camera"},"Camera"),"\uc758 \ubdf0\ud3ec\ud2b8 \ub0b4\uc5d0\uc11c\uc758 ",(0,r.kt)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition"),"\uc774 \uc704\uce58\ud574\uc57c \ud558\ub294 \uacf3\uc785\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"removed"},"removed"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110\uc774 ",(0,r.kt)("a",{parentName:"p",href:"Flicking#remove"},"remove"),"\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h3",{id:"rendered"},"rendered"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110\uc758 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ud654\uba74\uc0c1\uc5d0 \ub80c\ub354\ub9c1\ub418\uace0\uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h3",{id:"loading"},"loading"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110 \ub0b4\ubd80\uc758 \uc774\ubbf8\uc9c0/\ube44\ub514\uc624\uac00 \uc544\uc9c1 \ub85c\ub4dc\ub418\uc9c0 \uc54a\uc544 ",(0,r.kt)("a",{parentName:"p",href:"Panel#resize"},"resize"),"\ub420 \uac83\uc778\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h3",{id:"range"},"range"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 Bounding box \ubc94\uc704"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Bounding box's left(",(0,r.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / top(",(0,r.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"max"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Bounding box's right(",(0,r.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / bottom(",(0,r.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")))),(0,r.kt)("h3",{id:"toggled"},"toggled"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110\uc758 \uc704\uce58\uac00 circular \ub3d9\uc791\uc5d0 \uc758\ud574 \ud1a0\uae00\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h3",{id:"toggleDirection"},"toggleDirection"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud328\ub110\uc758 \uc704\uce58\uac00 circular \ub3d9\uc791\uc5d0 \uc758\ud574 \ud1a0\uae00\ub418\ub294 \ubc29\ud5a5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"DIRECTION"},"DIRECTION")),(0,r.kt)("h3",{id:"offset"},"offset"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Panel#order"},"Panel#order"),"\uc5d0 \uc758\ud55c \uc2e4\uc81c \uc704\uce58 \ubcc0\uacbd\uac12"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"progress"},"progress"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\uc774 \ud328\ub110\ub85c\ubd80\ud130 \uc774\uc804/\ub2e4\uc74c \ud328\ub110\uc73c\ub85c\uc758 \uc774\ub3d9 \uc9c4\ud589\ub960"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"outsetProgress"},"outsetProgress"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud604\uc7ac \ud328\ub110\uc774 \ubdf0\ud3ec\ud2b8 \uc601\uc5ed \ubc16\uc73c\ub85c \uc644\uc804\ud788 \uc0ac\ub77c\uc9c0\ub294 \uc9c0\uc810\uc744 \uae30\uc900\uc73c\ub85c \ud558\ub294 \uc9c4\ud589\ub3c4(prev\ubc29\ud5a5: -1, \uc120\ud0dd \uc9c0\uc810: 0, next\ubc29\ud5a5: 1)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"visibleRatio"},"visibleRatio"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ubdf0\ud3ec\ud2b8 \uc548\uc5d0\uc11c \ud328\ub110\uc774 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ube44\uc728"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"align"},"align"),(0,r.kt)("div",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition"),"\uc774 \ud328\ub110 \ub0b4\uc758 \uc5b4\ub514\uc5d0 \uc704\uce58\ud574\uc57c \ud558\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"markForShow"},"markForShow"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Mark panel element to be appended on the camera element"),(0,r.kt)("h3",{id:"markForHide"},"markForHide"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Mark panel element to be removed from the camera element"),(0,r.kt)("h3",{id:"resize"},"resize"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\ud328\ub110\uc758 \ud06c\uae30\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"cached"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc0ac\uc804\uc5d0 \uce90\uc2dc\ub41c \ud328\ub110\uc758 \ud06c\uae30 \uc815\ubcf4")))),(0,r.kt)("h3",{id:"setSize"},"setSize"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\ud328\ub110 \ud06c\uae30\ub97c \ubcc0\uacbd\ud569\ub2c8\ub2e4. \ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \ud574\ub2f9 \ud06c\uae30\uc758 CSS width/height\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc0c8 \ud328\ub110 \ud06c\uae30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"size.width"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"CSS \ubb38\uc790\uc5f4 \ub610\ub294 \uc22b\uc790(px)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"size.height"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"CSS \ubb38\uc790\uc5f4 \ub610\ub294 \uc22b\uc790(px)")))),(0,r.kt)("h3",{id:"contains"},"contains"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc774 \ud328\ub110\uc758 ",(0,r.kt)("a",{parentName:"p",href:"Panel#element"},"element")," \ub0b4\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud328\ub110\uc758 ",(0,r.kt)("a",{parentName:"li",href:"Panel#element"},"element"),"\ub0b4\uc5d0 \ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8 \ud3ec\ud568 \uc5ec\ubd80")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"element"),(0,r.kt)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 HTMLElement")))),(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\ub0b4\ubd80 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud558\uace0 ",(0,r.kt)("a",{parentName:"p",href:"Panel#removed"},"removed"),"\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("h3",{id:"includePosition"},"includePosition"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc88c\ud45c\uac00 \ud604\uc7ac \ud328\ub110\uc758 ",(0,r.kt)("a",{parentName:"p",href:"Panel#range"},"range"),"\ub0b4\uc5d0 \uc18d\ud574\uc788\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c\uac00 \ud328\ub110 \uc601\uc5ed \ub0b4\uc5d0 \uc18d\ud574\uc788\ub294\uc9c0 \uc5ec\ubd80")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \uc88c\ud45c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"includeMargin"),(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc601\uc5ed\uc5d0 ",(0,r.kt)("a",{parentName:"td",href:"Panel#margin"},"margin"),"\uac12\uc744 \ud3ec\ud568\uc2dc\ud0b5\ub2c8\ub2e4")))),(0,r.kt)("h3",{id:"includeRange"},"includeRange"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \ubc94\uc704\uac00 \uc774 \ud328\ub110 \ub0b4\ubd80\uc5d0 \uc644\uc804\ud788 \ud3ec\ud568\ub418\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ubc94\uc704\uac00 \ud328\ub110 \uc601\uc5ed \ub0b4\uc5d0 \uc644\uc804\ud788 \uc18d\ud574\uc788\ub294\uc9c0 \uc5ec\ubd80")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \ucd5c\uc18c \ubc94\uc704")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"max"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \ucd5c\ub300 \ubc94\uc704")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"includeMargin"),(0,r.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc601\uc5ed\uc5d0 ",(0,r.kt)("a",{parentName:"td",href:"Panel#margin"},"margin"),"\uac12\uc744 \ud3ec\ud568\uc2dc\ud0b5\ub2c8\ub2e4")))),(0,r.kt)("h3",{id:"isVisibleOnRange"},"isVisibleOnRange"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \ubc94\uc704 \ub0b4\uc5d0\uc11c \uc774 \ud328\ub110\uc758 \uc77c\ubd80\uac00 \ubcf4\uc5ec\uc9c0\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ubc94\uc704 \ub0b4\uc5d0\uc11c \ud328\ub110\uc744 \ubcfc \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \ucd5c\uc18c \ubc94\uc704")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"max"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \ucd5c\ub300 \ubc94\uc704")))),(0,r.kt)("h3",{id:"focus"},"focus"),(0,r.kt)("div",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Camera"},"Camera"),"\ub97c \uc774 \ud328\ub110\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud328\ub110 \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")))),(0,r.kt)("h3",{id:"prev"},"prev"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\uc774\uc804(",(0,r.kt)("inlineCode",{parentName:"p"},"index - 1"),") \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774\uc804 \ud328\ub110\uc774 \uc5c6\uc744 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," \ubaa8\ub4dc\uac00 \ud65c\uc131\ud654\ub418\uc5c8\uc744 \ub54c \uccab\ubc88\uc9f8 \ud328\ub110\uc5d0\uc11c \uc774 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud560 \uacbd\uc6b0 \ub9c8\uc9c0\ub9c9 \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\uc804 \ud328\ub110")),(0,r.kt)("h3",{id:"next"},"next"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\ub2e4\uc74c(",(0,r.kt)("inlineCode",{parentName:"p"},"index + 1"),") \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \ub2e4\uc74c \ud328\ub110\uc774 \uc5c6\uc744 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," \ubaa8\ub4dc\uac00 \ud65c\uc131\ud654\ub418\uc5c8\uc744 \ub54c \ub9c8\uc9c0\ub9c9 \ud328\ub110\uc5d0\uc11c \uc774 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud560 \uacbd\uc6b0 \uccab\ubc88\uc9f8 \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e4\uc74c \ud328\ub110")),(0,r.kt)("h3",{id:"increaseIndex"},"increaseIndex"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\ud328\ub110\uc758 \uc778\ub371\uc2a4\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"val"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),(0,r.kt)("h3",{id:"decreaseIndex"},"decreaseIndex"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\ud328\ub110\uc758 \uc778\ub371\uc2a4\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uac10\uc18c\uc2dc\ud0b5\ub2c8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"val"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),(0,r.kt)("h3",{id:"updatePosition"},"updatePosition"),(0,r.kt)("div",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"toggle"},"toggle"),(0,r.kt)("div",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"toggled")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"prevPos"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"newPos"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"updateCircularToggleDirection"},"updateCircularToggleDirection"),(0,r.kt)("div",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"))}g.isMDXComponent=!0}}]);