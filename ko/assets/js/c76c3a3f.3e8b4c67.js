"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86548],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),k=m(a),o=r,g=k["".concat(p,".").concat(o)]||k[o]||d[o]||i;return a?n.createElement(g,l(l({ref:e},s),{},{components:a})):n.createElement(g,l({ref:e},s))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=o;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c[k]="string"==typeof t?t:r,l[1]=c;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},88412:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={custom_edit_url:null},l=void 0,c={unversionedId:"api/AnimatingState",id:"version-4.1.1/api/AnimatingState",title:"AnimatingState",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.1.1/api/AnimatingState.mdx",sourceDirName:"api",slug:"/api/AnimatingState",permalink:"/egjs-flicking/ko/docs/4.1.1/api/AnimatingState",draft:!1,editUrl:null,tags:[],version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"SnapControl",permalink:"/egjs-flicking/ko/docs/4.1.1/api/SnapControl"},next:{title:"DisabledState",permalink:"/egjs-flicking/ko/docs/4.1.1/api/DisabledState"}},p={},m=[{value:"Properties",id:"properties",level:2},{value:"holding",id:"holding",level:3},{value:"animating",id:"animating",level:3},{value:"Methods",id:"methods",level:2},{value:"onHold",id:"onHold",level:3},{value:"onChange",id:"onChange",level:3},{value:"onRelease",id:"onRelease",level:3},{value:"onAnimationEnd",id:"onAnimationEnd",level:3},{value:"onFinish",id:"onFinish",level:3}],s={toc:m},k="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,r.kt)("strong",null,"internal")," use only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class AnimatingState extends State\n")),(0,r.kt)("p",null,"\uc0ac\uc6a9\uc790 \uc785\ub825\uc774\ub098 \uba54\uc18c\ub4dc \ud638\ucd9c\uc5d0 \uc758\ud574 Flicking\uc758 \uc560\ub2c8\uba54\uc774\uc158\uc774 \ub3d9\uc791\uc911\uc778 \uc0c1\ud0dc"),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Properties")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#holding"},"holding"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#animating"},"animating")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#onHold"},"onHold"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#onChange"},"onChange"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#onRelease"},"onRelease"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#onFinish"},"onFinish")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"holding"},"holding"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ud074\ub9ad/\ud130\uce58\uc911\uc778\uc9c0 \uc5ec\ubd80"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": false"),(0,r.kt)("h3",{id:"animating"},"animating"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"\ud604\uc7ac \uc560\ub2c8\uba54\uc774\uc158 \ub3d9\uc791 \uc5ec\ubd80"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": true"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"onHold"},"onHold"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.kt)("h3",{id:"onChange"},"onChange"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.kt)("h3",{id:"onRelease"},"onRelease"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.kt)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.kt)("h3",{id:"onFinish"},"onFinish"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.kt)("p",null,"Axes\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," \uc774\ubca4\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))))}d.isMDXComponent=!0}}]);