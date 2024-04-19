"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94594],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},y=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),p=o(a),d=r,c=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(c,g(g({ref:t},y),{},{components:a})):n.createElement(c,g({ref:t},y))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,g[1]=i;for(var o=2;o<l;o++)g[o]=a[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(58168),r=(a(96540),a(15680));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/AxesController",id:"version-4.7.3/api/AxesController",title:"AxesController",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.7.3/api/AxesController.mdx",sourceDirName:"api",slug:"/api/AxesController",permalink:"/egjs-flicking/docs/4.7.3/api/AxesController",draft:!1,editUrl:null,tags:[],version:"4.7.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"CircularCameraMode",permalink:"/egjs-flicking/docs/4.7.3/api/CircularCameraMode"},next:{title:"Control",permalink:"/egjs-flicking/docs/4.7.3/api/Control"}},s={},o=[{value:"Properties",id:"properties",level:2},{value:"axes",id:"axes",level:3},{value:"stateMachine",id:"stateMachine",level:3},{value:"state",id:"state",level:3},{value:"animatingContext",id:"animatingContext",level:3},{value:"controlParams",id:"controlParams",level:3},{value:"enabled",id:"enabled",level:3},{value:"position",id:"position",level:3},{value:"range",id:"range",level:3},{value:"bounce",id:"bounce",level:3},{value:"Methods",id:"methods",level:2},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"update",id:"update",level:3},{value:"addPreventClickHandler",id:"addPreventClickHandler",level:3},{value:"removePreventClickHandler",id:"removePreventClickHandler",level:3},{value:"animateTo",id:"animateTo",level:3}],y={toc:o},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class AxesController\n")),(0,r.yg)("p",null,"A controller that handles the ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes")," events"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#axes"},"axes"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#stateMachine"},"stateMachine"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#state"},"state"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#animatingContext"},"animatingContext"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#controlParams"},"controlParams"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#enabled"},"enabled"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#position"},"position"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#range"},"range"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#bounce"},"bounce")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#enable"},"enable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#disable"},"disable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#update"},"update"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#addPreventClickHandler"},"addPreventClickHandler"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#removePreventClickHandler"},"removePreventClickHandler"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#animateTo"},"animateTo")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"axes"},"axes"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"An ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Axes"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"},"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"))),(0,r.yg)("h3",{id:"stateMachine"},"stateMachine"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This member is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("h3",{id:"state"},"state"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"A activated ",(0,r.yg)("a",{parentName:"p",href:"State"},"State")," that shows the current status of the user input or the animation"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"State"},"State")),(0,r.yg)("h3",{id:"animatingContext"},"animatingContext"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"A context of the current animation playing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": object"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"start"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"A start position of the animation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"end"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"A end position of the animation")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"offset"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"camera offset")))),(0,r.yg)("h3",{id:"controlParams"},"controlParams"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"A current control parameters of the Axes instance"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),(0,r.yg)("h3",{id:"enabled"},"enabled"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"A Boolean indicating whether the user input is enabled"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"position"},"position"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Current position value in ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"range"},"range"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Current range value in ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," instance"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Array","<","number",">"),(0,r.yg)("h3",{id:"bounce"},"bounce"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Actual bounce size(px)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Array","<","number",">"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Initialize AxesController"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")))),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Destroy AxesController and return to initial state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"enable"},"enable"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Enable input from the user (mouse/touch)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"disable"},"disable"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Disable input from the user (mouse/touch)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"update"},"update"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Update ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"'s state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"controlParams"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"ControlParams"},"ControlParams")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.yg)("a",{parentName:"p",href:"AxesController#init"},"init")," is not called before"),(0,r.yg)("h3",{id:"addPreventClickHandler"},"addPreventClickHandler"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Attach a handler to the camera element to prevent click events during animation"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"removePreventClickHandler"},"removePreventClickHandler"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Detach a handler to the camera element to prevent click events during animation"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"animateTo"},"animateTo"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Run Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," using the given position"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"position"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A position to move")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"If provided, it'll use its ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," method instead")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"condition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.yg)("td",{parentName:"tr",align:null},"When ",(0,r.yg)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.yg)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))))}m.isMDXComponent=!0}}]);