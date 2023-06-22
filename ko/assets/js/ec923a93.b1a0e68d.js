"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38233],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var k=a.createContext({}),c=function(t){var e=a.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(k.Provider,{value:e},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),o=c(n),g=r,s=o["".concat(k,".").concat(g)]||o[g]||m[g]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p[o]="string"==typeof t?t:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22662:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={custom_edit_url:null},i=void 0,p={unversionedId:"api/State",id:"version-4.10.8/api/State",title:"State",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.10.8/api/State.mdx",sourceDirName:"api",slug:"/api/State",permalink:"/egjs-flicking/ko/docs/api/State",draft:!1,editUrl:null,tags:[],version:"4.10.8",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"IdleState",permalink:"/egjs-flicking/ko/docs/api/IdleState"},next:{title:"AnchorPoint",permalink:"/egjs-flicking/ko/docs/api/AnchorPoint"}},k={},c=[{value:"Properties",id:"properties",level:2},{value:"holding",id:"holding",level:3},{value:"animating",id:"animating",level:3},{value:"delta",id:"delta",level:3},{value:"targetPanel",id:"targetPanel",level:3},{value:"Methods",id:"methods",level:2},{value:"onEnter",id:"onEnter",level:3},{value:"onHold",id:"onHold",level:3},{value:"onChange",id:"onChange",level:3},{value:"onRelease",id:"onRelease",level:3},{value:"onAnimationEnd",id:"onAnimationEnd",level:3},{value:"onFinish",id:"onFinish",level:3}],d={toc:c},o="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(o,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,r.kt)("strong",null,"internal")," use only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class State\n")),(0,r.kt)("div",null),(0,r.kt)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790 \uc785\ub825 \ub610\ub294 \uc560\ub2c8\uba54\uc774\uc158 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\ub294 \ucef4\ud3ec\ub10c\ud2b8"),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Properties")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#holding"},"holding"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#animating"},"animating"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#delta"},"delta"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#targetPanel"},"targetPanel")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#onEnter"},"onEnter"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#onHold"},"onHold"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#onChange"},"onChange"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#onRelease"},"onRelease"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#onFinish"},"onFinish")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"holding"},"holding"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ud074\ub9ad/\ud130\uce58\uc911\uc778\uc9c0 \uc5ec\ubd80"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h3",{id:"animating"},"animating"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\ud604\uc7ac \uc560\ub2c8\uba54\uc774\uc158 \ub3d9\uc791 \uc5ec\ubd80"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h3",{id:"delta"},"delta"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\uc774\uc804 hold\uc774\ubca4\ud2b8\ubd80\ud130 change\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ud55c \uc774\ub3d9 delta\uac12\uc758 \ud569\uc0b0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"targetPanel"},"targetPanel"),(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--warning"},"readonly")),(0,r.kt)("p",null,"\uc560\ub2c8\uba54\uc774\uc158 \uc885\ub8cc\uc2dc ",(0,r.kt)("a",{parentName:"p",href:"Control#activePanel"},"Control#activePanel"),"\ub85c \uc124\uc815\ud560 \ud328\ub110"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"onEnter"},"onEnter"),(0,r.kt)("div",null),(0,r.kt)("p",null,"\ud604\uc7ac \uc0c1\ud0dc\ub85c \ub3cc\uc785\ud588\uc744\ub54c \ud638\ucd9c\ub418\ub294 \ucf5c\ubc31 \ud568\uc218"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"prevState"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"State"},"State")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\uc804 \uc0c1\ud0dc\uac12")))),(0,r.kt)("h3",{id:"onHold"},"onHold"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:hold"},"hold")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:hold"},"hold")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.kt)("h3",{id:"onChange"},"onChange"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:change"},"change")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:change"},"change")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.kt)("h3",{id:"onRelease"},"onRelease"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.kt)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:animationEnd"},"animationEnd")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:animationEnd"},"animationEnd")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.kt)("h3",{id:"onFinish"},"onFinish"),(0,r.kt)("div",null),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:finish"},"finish")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:finish"},"finish")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))))}m.isMDXComponent=!0}}]);