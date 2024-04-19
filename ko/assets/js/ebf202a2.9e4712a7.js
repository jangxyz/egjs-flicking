"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40697],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},g=Object.keys(e);for(n=0;n<g.length;n++)a=g[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(n=0;n<g.length;n++)a=g[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=n.createContext({}),d=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(y.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},o=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,g=e.originalType,y=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),o=r,s=c["".concat(y,".").concat(o)]||c[o]||m[o]||g;return a?n.createElement(s,l(l({ref:t},p),{},{components:a})):n.createElement(s,l({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var g=a.length,l=new Array(g);l[0]=o;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<g;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},97759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>l,default:()=>m,frontMatter:()=>g,metadata:()=>i,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const g={custom_edit_url:null},l=void 0,i={unversionedId:"api/IdleState",id:"api/IdleState",title:"IdleState",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api/IdleState.mdx",sourceDirName:"api",slug:"/api/IdleState",permalink:"/egjs-flicking/ko/docs/next/api/IdleState",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"HoldingState",permalink:"/egjs-flicking/ko/docs/next/api/HoldingState"},next:{title:"State",permalink:"/egjs-flicking/ko/docs/next/api/State"}},y={},d=[{value:"Properties",id:"properties",level:2},{value:"holding",id:"holding",level:3},{value:"animating",id:"animating",level:3},{value:"delta",id:"delta",level:3},{value:"targetPanel",id:"targetPanel",level:3},{value:"Methods",id:"methods",level:2},{value:"onEnter",id:"onEnter",level:3},{value:"onHold",id:"onHold",level:3},{value:"onChange",id:"onChange",level:3},{value:"onRelease",id:"onRelease",level:3},{value:"onAnimationEnd",id:"onAnimationEnd",level:3},{value:"onFinish",id:"onFinish",level:3}],p={toc:d},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class IdleState extends State\n")),(0,r.yg)("div",null),(0,r.yg)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825\uc774 \uc5c6\uace0, \uc560\ub2c8\uba54\uc774\uc158\uc774 \ub3d9\uc791\ud558\uace0\uc788\uc9c0 \uc54a\uc740 \uae30\ubcf8 \uc0c1\ud0dc"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#holding"},"holding"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#animating"},"animating"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#delta"},"delta"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#targetPanel"},"targetPanel")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#onEnter"},"onEnter"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onHold"},"onHold"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onChange"},"onChange"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onRelease"},"onRelease"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onFinish"},"onFinish")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"holding"},"holding"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ud074\ub9ad/\ud130\uce58\uc911\uc778\uc9c0 \uc5ec\ubd80"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": false"),(0,r.yg)("h3",{id:"animating"},"animating"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"\ud604\uc7ac \uc560\ub2c8\uba54\uc774\uc158 \ub3d9\uc791 \uc5ec\ubd80"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": false"),(0,r.yg)("h3",{id:"delta"},"delta"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"\uc774\uc804 hold\uc774\ubca4\ud2b8\ubd80\ud130 change\uc5d0 \uc758\ud574 \ubc1c\uc0dd\ud55c \uc774\ub3d9 delta\uac12\uc758 \ud569\uc0b0"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"targetPanel"},"targetPanel"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"\uc560\ub2c8\uba54\uc774\uc158 \uc885\ub8cc\uc2dc ",(0,r.yg)("a",{parentName:"p",href:"Control#activePanel"},"Control#activePanel"),"\ub85c \uc124\uc815\ud560 \ud328\ub110"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"onEnter"},"onEnter"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"\ud604\uc7ac \uc0c1\ud0dc\ub85c \ub3cc\uc785\ud588\uc744\ub54c \ud638\ucd9c\ub418\ub294 \ucf5c\ubc31 \ud568\uc218"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"prevState"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"State"},"State")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc774\uc804 \uc0c1\ud0dc\uac12")))),(0,r.yg)("h3",{id:"onHold"},"onHold"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Axes\uc758 ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:hold"},"hold")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:hold"},"hold")," \uc774\ubca4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.yg)("h3",{id:"onChange"},"onChange"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Axes\uc758 ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:change"},"change")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:change"},"change")," \uc774\ubca4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.yg)("h3",{id:"onRelease"},"onRelease"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Axes\uc758 ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," \uc774\ubca4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.yg)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Axes\uc758 ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:animationEnd"},"animationEnd")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:animationEnd"},"animationEnd")," \uc774\ubca4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))),(0,r.yg)("h3",{id:"onFinish"},"onFinish"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Axes\uc758 ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:finish"},"finish")," \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc774\ubca4\ud2b8 \ucf58\ud14d\uc2a4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Flicking \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Axes\uc758 ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:finish"},"finish")," \uc774\ubca4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub2e4\ub978 \uc0c1\ud0dc\ub85c \ubcc0\uacbd\ud558\uae30 \uc704\ud55c \ud568\uc218")))))}m.isMDXComponent=!0}}]);