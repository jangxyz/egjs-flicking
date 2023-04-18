"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3618],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),k=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=k(a),h=r,d=s["".concat(o,".").concat(h)]||s[h]||c[h]||l;return a?n.createElement(d,i(i({ref:e},m),{},{components:a})):n.createElement(d,i({ref:e},m))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=h;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},50916:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>k});var n=a(87462),r=(a(67294),a(3905));const l={custom_edit_url:null},i=void 0,p={unversionedId:"api/Camera",id:"version-4.3.1/api/Camera",title:"Camera",description:"A component that manages actual movement inside the viewport",source:"@site/versioned_docs/version-4.3.1/api/Camera.mdx",sourceDirName:"api",slug:"/api/Camera",permalink:"/egjs-flicking/docs/4.3.1/api/Camera",draft:!1,editUrl:null,tags:[],version:"4.3.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.3.1/api",previous:{title:"BoundCamera",permalink:"/egjs-flicking/docs/4.3.1/api/BoundCamera"},next:{title:"CircularCamera",permalink:"/egjs-flicking/docs/4.3.1/api/CircularCamera"}},o={},k=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"position",id:"position",level:3},{value:"alignPosition",id:"alignPosition",level:3},{value:"offset",id:"offset",level:3},{value:"range",id:"range",level:3},{value:"rangeDiff",id:"rangeDiff",level:3},{value:"visiblePanels",id:"visiblePanels",level:3},{value:"visibleRange",id:"visibleRange",level:3},{value:"anchorPoints",id:"anchorPoints",level:3},{value:"controlParams",id:"controlParams",level:3},{value:"atEdge",id:"atEdge",level:3},{value:"size",id:"size",level:3},{value:"progress",id:"progress",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"updateRange",id:"updateRange",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"lookAt",id:"lookAt",level:3},{value:"getPrevAnchor",id:"getPrevAnchor",level:3},{value:"getNextAnchor",id:"getNextAnchor",level:3},{value:"getProgressInPanel",id:"getProgressInPanel",level:3},{value:"findAnchorIncludePosition",id:"findAnchorIncludePosition",level:3},{value:"findNearestAnchor",id:"findNearestAnchor",level:3},{value:"findActiveAnchor",id:"findActiveAnchor",level:3},{value:"clampToReachablePosition",id:"clampToReachablePosition",level:3},{value:"canReach",id:"canReach",level:3},{value:"canSee",id:"canSee",level:3},{value:"updateAlignPos",id:"updateAlignPos",level:3},{value:"updateAnchors",id:"updateAnchors",level:3},{value:"updateAdaptiveHeight",id:"updateAdaptiveHeight",level:3},{value:"resetNeedPanelHistory",id:"resetNeedPanelHistory",level:3}],m={toc:k},s="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Camera\n")),(0,r.kt)("p",null,"A component that manages actual movement inside the viewport"),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Properties")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#element"},"element"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#position"},"position"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#alignPosition"},"alignPosition"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#offset"},"offset"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#range"},"range"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#rangeDiff"},"rangeDiff"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#visiblePanels"},"visiblePanels"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#visibleRange"},"visibleRange"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#anchorPoints"},"anchorPoints"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#controlParams"},"controlParams"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#atEdge"},"atEdge"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#size"},"size"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#progress"},"progress"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#align"},"align")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#updateRange"},"updateRange"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#init"},"init"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#destroy"},"destroy"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#lookAt"},"lookAt"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#getPrevAnchor"},"getPrevAnchor"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#getNextAnchor"},"getNextAnchor"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#getProgressInPanel"},"getProgressInPanel"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#findAnchorIncludePosition"},"findAnchorIncludePosition"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#findNearestAnchor"},"findNearestAnchor"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#findActiveAnchor"},"findActiveAnchor"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#clampToReachablePosition"},"clampToReachablePosition"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#canReach"},"canReach"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#canSee"},"canSee"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#updateAlignPos"},"updateAlignPos"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#updateAnchors"},"updateAnchors"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#updateAdaptiveHeight"},"updateAdaptiveHeight"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#resetNeedPanelHistory"},"resetNeedPanelHistory")))),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"new Camera()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"Partial","<","CameraOptions",">"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"element"},"element"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"The camera(",(0,r.kt)("inlineCode",{parentName:"p"},".flicking-camera"),") element"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,r.kt)("h3",{id:"position"},"position"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Current position of the camera"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"alignPosition"},"alignPosition"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Align position inside the viewport where ",(0,r.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"'s ",(0,r.kt)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")," should be located at"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"offset"},"offset"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Position offset, used for the ",(0,r.kt)("a",{parentName:"p",href:"Flicking#renderOnlyVisible"},"renderOnlyVisible")," option"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": 0"),(0,r.kt)("h3",{id:"range"},"range"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"A range that Camera's ",(0,r.kt)("a",{parentName:"p",href:"Camera#position"},"position")," can reach"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A minimum position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A maximum position")))),(0,r.kt)("h3",{id:"rangeDiff"},"rangeDiff"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"A difference between Camera's minimum and maximum position that can reach"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"visiblePanels"},"visiblePanels"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"An array of visible panels from the current position"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": Array","<",(0,r.kt)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,r.kt)("h3",{id:"visibleRange"},"visibleRange"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"A range of the visible area from the current position"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A minimum position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"min"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"},"A maximum position")))),(0,r.kt)("h3",{id:"anchorPoints"},"anchorPoints"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"An array of ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"s that Camera can be stopped at"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": Array","<",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),">"),(0,r.kt)("h3",{id:"controlParams"},"controlParams"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"A current parameters of the Camera for updating ",(0,r.kt)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),(0,r.kt)("h3",{id:"atEdge"},"atEdge"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"A Boolean value indicating whether Camera's over the minimum or maximum position reachable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.kt)("h3",{id:"size"},"size"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Return the size of the viewport"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"progress"},"progress"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.kt)("p",null,"Return the camera's position progress from the first panel to last panel",(0,r.kt)("br",{parentName:"p"}),"\n","Range is from 0 to last panel's index"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": number"),(0,r.kt)("h3",{id:"align"},"align"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"A value indicating where the ",(0,r.kt)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")," should be located at inside the viewport element"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("a",{parentName:"p",href:"ALIGN"},"ALIGN")," ","|"," string ","|"," number"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"updateRange"},"updateRange"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Update ",(0,r.kt)("a",{parentName:"p",href:"Camera#range"},"range")," of Camera"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.kt)("h3",{id:"init"},"init"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Initialize Camera"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.kt)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ERROR_CODE"},"VAL_MUST_NOT_NULL")," If the camera element(",(0,r.kt)("inlineCode",{parentName:"p"},".flicking-camera"),") does not exist inside viewport element"),(0,r.kt)("h3",{id:"destroy"},"destroy"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Destroy Camera and return to initial state"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,r.kt)("h3",{id:"lookAt"},"lookAt"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Move to the given position and apply CSS transform"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"A new position")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.kt)("h3",{id:"getPrevAnchor"},"getPrevAnchor"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Return a previous ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," of given ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),(0,r.kt)("br",{parentName:"p"}),"\n","If it does not exist, return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," instead"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The previous ",(0,r.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"anchor"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"A reference ",(0,r.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),(0,r.kt)("h3",{id:"getNextAnchor"},"getNextAnchor"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Return a next ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," of given ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),(0,r.kt)("br",{parentName:"p"}),"\n","If it does not exist, return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," instead"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The next ",(0,r.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"anchor"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"A reference ",(0,r.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),(0,r.kt)("h3",{id:"getProgressInPanel"},"getProgressInPanel"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Return the camera's position progress in the panel below",(0,r.kt)("br",{parentName:"p"}),"\n","Value is from 0 to 1 when the camera's inside panel",(0,r.kt)("br",{parentName:"p"}),"\n","Value can be lower than 0 or bigger than 1 when it's in the margin area"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h3",{id:"findAnchorIncludePosition"},"findAnchorIncludePosition"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Return ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that includes given position",(0,r.kt)("br",{parentName:"p"}),"\n","If there's no ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that includes the given position, return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," instead"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint")," that includes the given position")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"position"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"A position to check")))),(0,r.kt)("h3",{id:"findNearestAnchor"},"findNearestAnchor"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Return ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," nearest to given position",(0,r.kt)("br",{parentName:"p"}),"\n","If there're no ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"s, return ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," instead"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint")," nearest to the given position")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"position"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"A position to check")))),(0,r.kt)("h3",{id:"findActiveAnchor"},"findActiveAnchor"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Return ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that matches ",(0,r.kt)("a",{parentName:"p",href:"Flicking#currentPanel"},"Flicking#currentPanel")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.kt)("h3",{id:"clampToReachablePosition"},"clampToReachablePosition"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Clamp the given position between camera's range"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": number"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A clamped position")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"position"),(0,r.kt)("td",{parentName:"tr",align:"center"},"number"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"A position to clamp")))),(0,r.kt)("h3",{id:"canReach"},"canReach"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Check whether the given panel is inside of the Camera's range"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Whether the panel's inside Camera's range")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.kt)("a",{parentName:"td",href:"Panel"},"Panel")," to check")))),(0,r.kt)("h3",{id:"canSee"},"canSee"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Check whether the given panel element is visible at the current position"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Whether the panel element is visible at the current position")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.kt)("a",{parentName:"td",href:"Panel"},"Panel")," to check")))),(0,r.kt)("h3",{id:"updateAlignPos"},"updateAlignPos"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Update Camera's ",(0,r.kt)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("h3",{id:"updateAnchors"},"updateAnchors"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Update Camera's ",(0,r.kt)("a",{parentName:"p",href:"Camera#anchorPoints"},"anchorPoints")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.kt)("h3",{id:"updateAdaptiveHeight"},"updateAdaptiveHeight"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Update Viewport's height to active panel's height"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws"),": ",(0,r.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.kt)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.kt)("h3",{id:"resetNeedPanelHistory"},"resetNeedPanelHistory"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"Reset the history of ",(0,r.kt)("a",{parentName:"p",href:"Flicking#event-needPanel"},"needPanel")," events so it can be triggered again"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"))}c.isMDXComponent=!0}}]);