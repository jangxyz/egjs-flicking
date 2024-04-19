"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13734],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),y=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},o=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=y(a),d=r,c=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return a?n.createElement(c,g(g({ref:t},o),{},{components:a})):n.createElement(c,g({ref:t},o))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,g[1]=i;for(var y=2;y<l;y++)g[y]=a[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74254:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=a(58168),r=(a(96540),a(15680));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/FreeControl",id:"version-4.5.1/api/FreeControl",title:"FreeControl",description:"A Control that can be scrolled freely without alignment",source:"@site/versioned_docs/version-4.5.1/api/FreeControl.mdx",sourceDirName:"api",slug:"/api/FreeControl",permalink:"/egjs-flicking/docs/4.5.1/api/FreeControl",draft:!1,editUrl:null,tags:[],version:"4.5.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Control",permalink:"/egjs-flicking/docs/4.5.1/api/Control"},next:{title:"SnapControl",permalink:"/egjs-flicking/docs/4.5.1/api/SnapControl"}},p={},y=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"stopAtEdge",id:"stopAtEdge",level:3},{value:"controller",id:"controller",level:3},{value:"activeIndex",id:"activeIndex",level:3},{value:"activePanel",id:"activePanel",level:3},{value:"animating",id:"animating",level:3},{value:"holding",id:"holding",level:3},{value:"Methods",id:"methods",level:2},{value:"updatePosition",id:"updatePosition",level:3},{value:"moveToPosition",id:"moveToPosition",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"updateInput",id:"updateInput",level:3},{value:"resetActive",id:"resetActive",level:3},{value:"moveToPanel",id:"moveToPanel",level:3},{value:"setActive",id:"setActive",level:3}],o={toc:y},m="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class FreeControl extends Control\n")),(0,r.yg)("p",null,"A ",(0,r.yg)("a",{parentName:"p",href:"Control"},"Control")," that can be scrolled freely without alignment"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#stopAtEdge"},"stopAtEdge"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#controller"},"controller"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#activeIndex"},"activeIndex"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#activePanel"},"activePanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#animating"},"animating"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#holding"},"holding")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#updatePosition"},"updatePosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#moveToPosition"},"moveToPosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#enable"},"enable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#disable"},"disable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateInput"},"updateInput"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#resetActive"},"resetActive"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#moveToPanel"},"moveToPanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#setActive"},"setActive")))),(0,r.yg)("h2",{id:"constructor"},"Constructor"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"new FreeControl()\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Partial","<",(0,r.yg)("a",{parentName:"td",href:"FreeControlOptions"},"FreeControlOptions"),">"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"stopAtEdge"},"stopAtEdge"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Make scroll animation to stop at the start/end of the scroll area, not going out the bounce area"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": true"),(0,r.yg)("h3",{id:"controller"},"controller"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"A controller that handles the ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes")," events"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,r.yg)("h3",{id:"activeIndex"},"activeIndex"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Index number of the ",(0,r.yg)("a",{parentName:"p",href:"Flicking#currentPanel"},"currentPanel")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": 0"),(0,r.yg)("h3",{id:"activePanel"},"activePanel"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"An active panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("h3",{id:"animating"},"animating"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Whether Flicking's animating"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"holding"},"holding"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Whether user is clicking or touching"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"updatePosition"},"updatePosition"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Update position after resizing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"progressInPanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Previous camera's progress in active panel before resize")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.yg)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.yg)("h3",{id:"moveToPosition"},"moveToPosition"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-success"},"async")),(0,r.yg)("p",null,"Move ",(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera")," to the given position"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Emits"),": ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"position"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The target position to move")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Duration of the panel movement animation (unit: ms).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"condition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,r.yg)("td",{parentName:"tr",align:null},"When the given panel is already removed or not in the Camera's ",(0,r.yg)("a",{parentName:"td",href:"Camera#range"},"range"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.yg)("td",{parentName:"tr",align:null},"When ",(0,r.yg)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.yg)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,r.yg)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Initialize Control"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Destroy Control and return to initial state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"enable"},"enable"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Enable input from the user (mouse/touch)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"disable"},"disable"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Disable input from the user (mouse/touch)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"updateInput"},"updateInput"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Update ",(0,r.yg)("a",{parentName:"p",href:"Control#controller"},"controller"),"'s state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"resetActive"},"resetActive"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Reset ",(0,r.yg)("a",{parentName:"p",href:"Control#activePanel"},"activePanel")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"null")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"moveToPanel"},"moveToPanel"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited"),(0,r.yg)("span",{className:"bulma-tag is-success"},"async")),(0,r.yg)("p",null,"Move ",(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera")," to the given panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target panel")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Emits"),": ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The target panel to move")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An options object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"direction"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DIRECTION.NONE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Direction to move, only available in the ",(0,r.yg)("a",{parentName:"td",href:"Flicking#circular"},"circular")," mode")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"condition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,r.yg)("td",{parentName:"tr",align:null},"When the given panel is already removed or not in the Camera's ",(0,r.yg)("a",{parentName:"td",href:"Camera#range"},"range"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.yg)("td",{parentName:"tr",align:null},"When ",(0,r.yg)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.yg)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,r.yg)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))),(0,r.yg)("h3",{id:"setActive"},"setActive"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"newActivePanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"prevActivePanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"isTrusted"),(0,r.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."))}s.isMDXComponent=!0}}]);