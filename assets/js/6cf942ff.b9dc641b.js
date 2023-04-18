"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27621],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),k=p(a),c=r,u=k["".concat(o,".").concat(c)]||k[c]||d[c]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[k]="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23825:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={custom_edit_url:null},i=void 0,s={unversionedId:"api/AxesController",id:"version-4.4.2/api/AxesController",title:"AxesController",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.4.2/api/AxesController.mdx",sourceDirName:"api",slug:"/api/AxesController",permalink:"/egjs-flicking/docs/4.4.2/api/AxesController",draft:!1,editUrl:null,tags:[],version:"4.4.2",frontMatter:{custom_edit_url:null},sidebar:"version-4.4.2/api",previous:{title:"LinearCamera",permalink:"/egjs-flicking/docs/4.4.2/api/LinearCamera"},next:{title:"Control",permalink:"/egjs-flicking/docs/4.4.2/api/Control"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"axes",id:"axes",level:3},{value:"stateMachine",id:"stateMachine",level:3},{value:"state",id:"state",level:3},{value:"animatingContext",id:"animatingContext",level:3},{value:"controlParams",id:"controlParams",level:3},{value:"enabled",id:"enabled",level:3},{value:"position",id:"position",level:3},{value:"range",id:"range",level:3},{value:"bounce",id:"bounce",level:3},{value:"Methods",id:"methods",level:2},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"update",id:"update",level:3},{value:"addPreventClickHandler",id:"addPreventClickHandler",level:3},{value:"removePreventClickHandler",id:"removePreventClickHandler",level:3},{value:"animateTo",id:"animateTo",level:3}],m={toc:p},k="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,r.kt)("strong",null,"internal")," use only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class AxesController\n")),(0,r.kt)("p",null,"A controller that handles the ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes")," events"),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Properties")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#axes"},"axes"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#stateMachine"},"stateMachine"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#state"},"state"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#animatingContext"},"animatingContext"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#controlParams"},"controlParams"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#enabled"},"enabled"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#position"},"position"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#range"},"range"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#bounce"},"bounce")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#init"},"init"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#destroy"},"destroy"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#enable"},"enable"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#disable"},"disable"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#update"},"update"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#addPreventClickHandler"},"addPreventClickHandler"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#removePreventClickHandler"},"removePreventClickHandler"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#animateTo"},"animateTo")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"axes"},"axes"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": Axes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"},"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"))),(0,r.kt)("h3",{id:"stateMachine"},"stateMachine"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This member is for ",(0,r.kt)("strong",null,"internal")," use only."),(0,r.kt)("h3",{id:"state"},"state"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"A activated ",(0,r.kt)("a",{parentName:"p",href:"State"},"State")," that shows the current status of the user input or the animation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"State"},"State")),(0,r.kt)("h3",{id:"animatingContext"},"animatingContext"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"A context of the current animation playing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"start"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A start position of the animation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"end"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A end position of the animation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"offset"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"camera offset")))),(0,r.kt)("h3",{id:"controlParams"},"controlParams"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"A current control parameters of the Axes instance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),(0,r.kt)("h3",{id:"enabled"},"enabled"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"A Boolean indicating whether the user input is enabled"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h3",{id:"position"},"position"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Current position value in ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"range"},"range"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Current range value in ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": Array","<","number",">"),(0,r.kt)("h3",{id:"bounce"},"bounce"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Actual bounce size(px)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": Array","<","number",">"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Initialize AxesController"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"An instance of Flicking")))),(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Destroy AxesController and return to initial state"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("h3",{id:"enable"},"enable"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Enable input from the user (mouse/touch)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"disable"},"disable"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Disable input from the user (mouse/touch)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Update ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"'s state"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"controlParams"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"ControlParams"},"ControlParams")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.kt)("a",{parentName:"p",href:"AxesController#init"},"init")," is not called before"),(0,r.kt)("h3",{id:"addPreventClickHandler"},"addPreventClickHandler"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Attach a handler to the camera element to prevent click events during animation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"removePreventClickHandler"},"removePreventClickHandler"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Detach a handler to the camera element to prevent click events during animation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"animateTo"},"animateTo"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Run Axes's ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," using the given position"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"position"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"A position to move")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"If provided, it'll use its ",(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," method instead")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"condition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.kt)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))))}d.isMDXComponent=!0}}]);