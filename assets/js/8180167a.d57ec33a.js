"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53119],{15680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},g=Object.keys(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),y=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=y(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,g=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=y(n),c=r,s=d["".concat(p,".").concat(c)]||d[c]||m[c]||g;return n?a.createElement(s,l(l({ref:t},o),{},{components:n})):a.createElement(s,l({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var g=n.length,l=new Array(g);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var y=2;y<g;y++)l[y]=n[y];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>g,metadata:()=>i,toc:()=>y});var a=n(58168),r=(n(96540),n(15680));const g={custom_edit_url:null},l=void 0,i={unversionedId:"api/SnapControl",id:"version-4.10.8/api/SnapControl",title:"SnapControl",description:"A Control that uses a release momentum to choose destination panel",source:"@site/versioned_docs/version-4.10.8/api/SnapControl.mdx",sourceDirName:"api",slug:"/api/SnapControl",permalink:"/egjs-flicking/docs/4.10.8/api/SnapControl",draft:!1,editUrl:null,tags:[],version:"4.10.8",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FreeControl",permalink:"/egjs-flicking/docs/4.10.8/api/FreeControl"},next:{title:"StrictControl",permalink:"/egjs-flicking/docs/4.10.8/api/StrictControl"}},p={},y=[{value:"constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"count",id:"count",level:3},{value:"controller",id:"controller",level:3},{value:"activeIndex",id:"activeIndex",level:3},{value:"activePanel",id:"activePanel",level:3},{value:"animating",id:"animating",level:3},{value:"holding",id:"holding",level:3},{value:"Methods",id:"methods",level:2},{value:"moveToPosition",id:"moveToPosition",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"release",id:"release",level:3},{value:"updateAnimation",id:"updateAnimation",level:3},{value:"stopAnimation",id:"stopAnimation",level:3},{value:"updatePosition",id:"updatePosition",level:3},{value:"updateInput",id:"updateInput",level:3},{value:"resetActive",id:"resetActive",level:3},{value:"moveToPanel",id:"moveToPanel",level:3},{value:"setActive",id:"setActive",level:3},{value:"copy",id:"copy",level:3}],o={toc:y},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class SnapControl extends Control\n")),(0,r.yg)("div",null),(0,r.yg)("p",null,"A ",(0,r.yg)("a",{parentName:"p",href:"Control"},"Control")," that uses a release momentum to choose destination panel"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#count"},"count"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#controller"},"controller"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#activeIndex"},"activeIndex"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#activePanel"},"activePanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#animating"},"animating"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#holding"},"holding")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#moveToPosition"},"moveToPosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#enable"},"enable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#disable"},"disable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#release"},"release"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateAnimation"},"updateAnimation"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#stopAnimation"},"stopAnimation"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updatePosition"},"updatePosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateInput"},"updateInput"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#resetActive"},"resetActive"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#moveToPanel"},"moveToPanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#setActive"},"setActive"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#copy"},"copy")))),(0,r.yg)("h2",{id:"constructor"},"constructor"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"new SnapControl()\n")),(0,r.yg)("div",null),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Partial","<",(0,r.yg)("a",{parentName:"td",href:"SnapControlOptions"},"SnapControlOptions"),">"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"count"},"count"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Maximum number of panels can go after release"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": Infinity"),(0,r.yg)("h3",{id:"controller"},"controller"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"A controller that handles the ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/"},"@egjs/axes")," events"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,r.yg)("h3",{id:"activeIndex"},"activeIndex"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Index number of the ",(0,r.yg)("a",{parentName:"p",href:"Flicking#currentPanel"},"currentPanel")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": 0"),(0,r.yg)("h3",{id:"activePanel"},"activePanel"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"An active panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("h3",{id:"animating"},"animating"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Whether Flicking's animating"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"holding"},"holding"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Whether user is clicking or touching"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"moveToPosition"},"moveToPosition"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Move ",(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera")," to the given position"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Emits"),": ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"position"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The target position to move")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Duration of the panel movement animation (unit: ms).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," event of ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/"},"Axes"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,"|code|condition|",(0,r.yg)("br",null),"|---|---|",(0,r.yg)("br",null),"|",(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE"),"|When the given panel is already removed or not in the Camera's ",(0,r.yg)("a",{parentName:"p",href:"Camera#range"},"range"),"|",(0,r.yg)("br",null),"|",(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING"),"|When ",(0,r.yg)("a",{parentName:"p",href:"Control#init"},"init")," is not called before|",(0,r.yg)("br",null),"|",(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED"),"|When the animation is interrupted by user input|",(0,r.yg)("br",null),"|",(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"STOP_CALLED_BY_USER"),"|When the animation is interrupted by user input|"),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Initialize Control"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Destroy Control and return to initial state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"enable"},"enable"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Enable input from the user (mouse/touch)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"disable"},"disable"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Disable input from the user (mouse/touch)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"release"},"release"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Releases ongoing user input (mouse/touch)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"updateAnimation"},"updateAnimation"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Change the destination and duration of the animation currently playing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The target panel to move")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"direction"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Direction to move, only available in the ",(0,r.yg)("a",{parentName:"td",href:"Flicking#circular"},"circular")," mode")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")," When the given panel is already removed or not in the Camera's ",(0,r.yg)("a",{parentName:"p",href:"Camera#range"},"range")),(0,r.yg)("h3",{id:"stopAnimation"},"stopAnimation"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Stops the animation currently playing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"updatePosition"},"updatePosition"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Update position after resizing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"progressInPanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Previous camera's progress in active panel before resize")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.yg)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.yg)("h3",{id:"updateInput"},"updateInput"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Update ",(0,r.yg)("a",{parentName:"p",href:"Control#controller"},"controller"),"'s state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"resetActive"},"resetActive"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Reset ",(0,r.yg)("a",{parentName:"p",href:"Control#activePanel"},"activePanel")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"null")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"moveToPanel"},"moveToPanel"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited"),(0,r.yg)("span",{className:"badge badge--success"},"async")),(0,r.yg)("p",null,"Move ",(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera")," to the given panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target panel")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Emits"),": ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The target panel to move")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An options object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," event of ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/"},"Axes"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"direction"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DIRECTION.NONE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Direction to move, only available in the ",(0,r.yg)("a",{parentName:"td",href:"Flicking#circular"},"circular")," mode")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,"|code|condition|",(0,r.yg)("br",null),"|---|---|",(0,r.yg)("br",null),"|",(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE"),"|When the given panel is already removed or not in the Camera's ",(0,r.yg)("a",{parentName:"p",href:"Camera#range"},"range"),"|",(0,r.yg)("br",null),"|",(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING"),"|When ",(0,r.yg)("a",{parentName:"p",href:"Control#init"},"init")," is not called before|",(0,r.yg)("br",null),"|",(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED"),"|When the animation is interrupted by user input|",(0,r.yg)("br",null),"|",(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"STOP_CALLED_BY_USER"),"|When the animation is interrupted by user input|"),(0,r.yg)("h3",{id:"setActive"},"setActive"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"newActivePanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"prevActivePanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"isTrusted"),(0,r.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h3",{id:"copy"},"copy"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"control"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Control"},"Control")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))))}m.isMDXComponent=!0}}]);