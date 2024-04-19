"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36528],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},g=Object.keys(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),y=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=y(e.components);return a.createElement(c.Provider,{value:t},e.children)},o="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,g=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),o=y(n),m=r,d=o["".concat(c,".").concat(m)]||o[m]||p[m]||g;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var g=n.length,i=new Array(g);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[o]="string"==typeof e?e:r,i[1]=l;for(var y=2;y<g;y++)i[y]=n[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>g,metadata:()=>l,toc:()=>y});var a=n(58168),r=(n(96540),n(15680));const g={custom_edit_url:null},i=void 0,l={unversionedId:"api/DisabledState",id:"version-4.1.1/api/DisabledState",title:"DisabledState",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.1.1/api/DisabledState.mdx",sourceDirName:"api",slug:"/api/DisabledState",permalink:"/egjs-flicking/docs/4.1.1/api/DisabledState",draft:!1,editUrl:null,tags:[],version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"AnimatingState",permalink:"/egjs-flicking/docs/4.1.1/api/AnimatingState"},next:{title:"DraggingState",permalink:"/egjs-flicking/docs/4.1.1/api/DraggingState"}},c={},y=[{value:"Properties",id:"properties",level:2},{value:"holding",id:"holding",level:3},{value:"animating",id:"animating",level:3},{value:"Methods",id:"methods",level:2},{value:"onHold",id:"onHold",level:3},{value:"onChange",id:"onChange",level:3},{value:"onRelease",id:"onRelease",level:3},{value:"onAnimationEnd",id:"onAnimationEnd",level:3},{value:"onFinish",id:"onFinish",level:3}],s={toc:y},o="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(o,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class DisabledState extends State\n")),(0,r.yg)("p",null,"A state that activates when Flicking is stopped by event's ",(0,r.yg)("inlineCode",{parentName:"p"},"stop")," method"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#holding"},"holding"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#animating"},"animating")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#onHold"},"onHold"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onChange"},"onChange"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onRelease"},"onRelease"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onFinish"},"onFinish")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"holding"},"holding"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Whether user is clicking or touching"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": false"),(0,r.yg)("h3",{id:"animating"},"animating"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Whether Flicking's animating"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": true"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"onHold"},"onHold"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-hold"},"hold")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,r.yg)("h3",{id:"onChange"},"onChange"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-change"},"change")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,r.yg)("h3",{id:"onRelease"},"onRelease"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,r.yg)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-animationEnd"},"animationEnd")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,r.yg)("h3",{id:"onFinish"},"onFinish"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-finish"},"finish")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))))}p.isMDXComponent=!0}}]);