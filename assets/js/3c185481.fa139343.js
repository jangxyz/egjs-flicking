"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99588],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),k=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=k(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=k(a),d=r,g=s["".concat(p,".").concat(d)]||s[d]||c[d]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58420:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={custom_edit_url:null},i=void 0,o={unversionedId:"api/Control",id:"version-4.1.1/api/Control",title:"Control",description:"A component that manages inputs and animation of Flicking",source:"@site/versioned_docs/version-4.1.1/api/Control.mdx",sourceDirName:"api",slug:"/api/Control",permalink:"/egjs-flicking/docs/4.1.1/api/Control",draft:!1,editUrl:null,tags:[],version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"AxesController",permalink:"/egjs-flicking/docs/4.1.1/api/AxesController"},next:{title:"FreeControl",permalink:"/egjs-flicking/docs/4.1.1/api/FreeControl"}},p={},k=[{value:"Properties",id:"properties",level:2},{value:"controller",id:"controller",level:3},{value:"activeIndex",id:"activeIndex",level:3},{value:"activePanel",id:"activePanel",level:3},{value:"animating",id:"animating",level:3},{value:"holding",id:"holding",level:3},{value:"Methods",id:"methods",level:2},{value:"moveToPosition",id:"moveToPosition",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"updatePosition",id:"updatePosition",level:3},{value:"updateInput",id:"updateInput",level:3},{value:"resetActive",id:"resetActive",level:3},{value:"moveToPanel",id:"moveToPanel",level:3}],m={toc:k},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Control\n")),(0,r.kt)("p",null,"A component that manages inputs and animation of Flicking"),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Properties")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#controller"},"controller"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#activeIndex"},"activeIndex"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#activePanel"},"activePanel"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#animating"},"animating"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#holding"},"holding")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#moveToPosition"},"moveToPosition"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#init"},"init"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#destroy"},"destroy"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#enable"},"enable"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#disable"},"disable"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#updatePosition"},"updatePosition"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#updateInput"},"updateInput"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#resetActive"},"resetActive"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#moveToPanel"},"moveToPanel")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"controller"},"controller"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"A controller that handles the ",(0,r.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes")," events"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,r.kt)("h3",{id:"activeIndex"},"activeIndex"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Index number of the ",(0,r.kt)("a",{parentName:"p",href:"Flicking#currentPanel"},"currentPanel")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": 0"),(0,r.kt)("h3",{id:"activePanel"},"activePanel"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"An active panel"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.kt)("h3",{id:"animating"},"animating"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Whether Flicking's animating"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h3",{id:"holding"},"holding"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Whether user is clicking or touching"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"moveToPosition"},"moveToPosition"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Move ",(0,r.kt)("a",{parentName:"p",href:"Camera"},"Camera")," to the given position"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Emits"),": ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"position"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The target position to move")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Duration of the panel movement animation (unit: ms).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of ",(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"condition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,r.kt)("td",{parentName:"tr",align:null},"When the given panel is already removed or not in the Camera's ",(0,r.kt)("a",{parentName:"td",href:"Camera#range"},"range"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.kt)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,r.kt)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Initialize Control"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Destroy Control and return to initial state"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("h3",{id:"enable"},"enable"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Enable input from the user (mouse/touch)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"disable"},"disable"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Disable input from the user (mouse/touch)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"updatePosition"},"updatePosition"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-success"},"async")),(0,r.kt)("p",null,"Update position after resizing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"progressInPanel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Previous camera's progress in active panel before resize")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.kt)("h3",{id:"updateInput"},"updateInput"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Update ",(0,r.kt)("a",{parentName:"p",href:"Control#controller"},"controller"),"'s state"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"resetActive"},"resetActive"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Reset ",(0,r.kt)("a",{parentName:"p",href:"Control#activePanel"},"activePanel")," and ",(0,r.kt)("a",{parentName:"p",href:"Control#activeAnchor"},"activeAnchor")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"moveToPanel"},"moveToPanel"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-success"},"async")),(0,r.kt)("p",null,"Move ",(0,r.kt)("a",{parentName:"p",href:"Camera"},"Camera")," to the given panel"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target panel")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Emits"),": ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"The target panel to move")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"options"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"An options object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"object"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of ",(0,r.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"direction"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"DIRECTION.NONE"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Direction to move, only available in the ",(0,r.kt)("a",{parentName:"td",href:"Flicking#circular"},"circular")," mode")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"code"),(0,r.kt)("th",{parentName:"tr",align:null},"condition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,r.kt)("td",{parentName:"tr",align:null},"When the given panel is already removed or not in the Camera's ",(0,r.kt)("a",{parentName:"td",href:"Camera#range"},"range"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.kt)("td",{parentName:"tr",align:null},"When ",(0,r.kt)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.kt)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,r.kt)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))))}c.isMDXComponent=!0}}]);