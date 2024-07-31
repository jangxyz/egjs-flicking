"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75878],{15680:(e,n,a)=>{a.d(n,{xA:()=>y,yg:()=>s});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function g(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),o=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):g(g({},n),e)),a},y=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),d=o(a),c=r,s=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?t.createElement(s,g(g({ref:n},y),{},{components:a})):t.createElement(s,g({ref:n},y))}));function s(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:r,g[1]=i;for(var o=2;o<l;o++)g[o]=a[o];return t.createElement.apply(null,g)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39232:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=a(58168),r=(a(96540),a(15680));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/Camera",id:"version-4.11.4/api/Camera",title:"Camera",description:"A component that manages actual movement inside the viewport",source:"@site/versioned_docs/version-4.11.4/api/Camera.mdx",sourceDirName:"api",slug:"/api/Camera",permalink:"/egjs-flicking/docs/api/Camera",draft:!1,editUrl:null,tags:[],version:"4.11.4",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Flicking",permalink:"/egjs-flicking/docs/api/Flicking"},next:{title:"CameraMode",permalink:"/egjs-flicking/docs/api/CameraMode"}},p={},o=[{value:"constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"children",id:"children",level:3},{value:"position",id:"position",level:3},{value:"alignPosition",id:"alignPosition",level:3},{value:"offset",id:"offset",level:3},{value:"circularEnabled",id:"circularEnabled",level:3},{value:"mode",id:"mode",level:3},{value:"range",id:"range",level:3},{value:"rangeDiff",id:"rangeDiff",level:3},{value:"visiblePanels",id:"visiblePanels",level:3},{value:"visibleRange",id:"visibleRange",level:3},{value:"anchorPoints",id:"anchorPoints",level:3},{value:"controlParams",id:"controlParams",level:3},{value:"atEdge",id:"atEdge",level:3},{value:"size",id:"size",level:3},{value:"progress",id:"progress",level:3},{value:"panelOrder",id:"panelOrder",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"lookAt",id:"lookAt",level:3},{value:"getPrevAnchor",id:"getPrevAnchor",level:3},{value:"getNextAnchor",id:"getNextAnchor",level:3},{value:"getProgressInPanel",id:"getProgressInPanel",level:3},{value:"findAnchorIncludePosition",id:"findAnchorIncludePosition",level:3},{value:"findNearestAnchor",id:"findNearestAnchor",level:3},{value:"findActiveAnchor",id:"findActiveAnchor",level:3},{value:"clampToReachablePosition",id:"clampToReachablePosition",level:3},{value:"canReach",id:"canReach",level:3},{value:"canSee",id:"canSee",level:3},{value:"updateRange",id:"updateRange",level:3},{value:"updateAlignPos",id:"updateAlignPos",level:3},{value:"updateAnchors",id:"updateAnchors",level:3},{value:"updateAdaptiveHeight",id:"updateAdaptiveHeight",level:3},{value:"updateOffset",id:"updateOffset",level:3},{value:"updatePanelOrder",id:"updatePanelOrder",level:3},{value:"resetNeedPanelHistory",id:"resetNeedPanelHistory",level:3},{value:"applyTransform",id:"applyTransform",level:3}],y={toc:o},d="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class Camera\n")),(0,r.yg)("div",null),(0,r.yg)("p",null,"A component that manages actual movement inside the viewport"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#element"},"element"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#children"},"children"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#position"},"position"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#alignPosition"},"alignPosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#offset"},"offset"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#circularEnabled"},"circularEnabled"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#mode"},"mode"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#range"},"range"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#rangeDiff"},"rangeDiff"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#visiblePanels"},"visiblePanels"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#visibleRange"},"visibleRange"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#anchorPoints"},"anchorPoints"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#controlParams"},"controlParams"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#atEdge"},"atEdge"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#size"},"size"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#progress"},"progress"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#panelOrder"},"panelOrder"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#align"},"align")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#lookAt"},"lookAt"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#getPrevAnchor"},"getPrevAnchor"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#getNextAnchor"},"getNextAnchor"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#getProgressInPanel"},"getProgressInPanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#findAnchorIncludePosition"},"findAnchorIncludePosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#findNearestAnchor"},"findNearestAnchor"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#findActiveAnchor"},"findActiveAnchor"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#clampToReachablePosition"},"clampToReachablePosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#canReach"},"canReach"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#canSee"},"canSee"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateRange"},"updateRange"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateAlignPos"},"updateAlignPos"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateAnchors"},"updateAnchors"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateAdaptiveHeight"},"updateAdaptiveHeight"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateOffset"},"updateOffset"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updatePanelOrder"},"updatePanelOrder"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#resetNeedPanelHistory"},"resetNeedPanelHistory"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#applyTransform"},"applyTransform")))),(0,r.yg)("h2",{id:"constructor"},"constructor"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"new Camera(flicking, )\n")),(0,r.yg)("div",null),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Partial","<","CameraOptions",">"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"element"},"element"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"The camera element(",(0,r.yg)("inlineCode",{parentName:"p"},".flicking-camera"),")"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,r.yg)("h3",{id:"children"},"children"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"An array of the child elements of the camera element(",(0,r.yg)("inlineCode",{parentName:"p"},".flicking-camera"),")"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Array","<","HTMLElement",">"),(0,r.yg)("h3",{id:"position"},"position"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Current position of the camera"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"alignPosition"},"alignPosition"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Align position inside the viewport where ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),"'s ",(0,r.yg)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")," should be located at"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"offset"},"offset"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Position offset, used for the ",(0,r.yg)("a",{parentName:"p",href:"Flicking#renderOnlyVisible"},"renderOnlyVisible")," option"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": 0"),(0,r.yg)("h3",{id:"circularEnabled"},"circularEnabled"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Whether the ",(0,r.yg)("inlineCode",{parentName:"p"},"circular")," option is enabled.",(0,r.yg)("br",null),"The ",(0,r.yg)("a",{parentName:"p",href:"Flicking#circular"},"circular")," option can't be enabled when sum of the panel sizes are too small."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": false"),(0,r.yg)("h3",{id:"mode"},"mode"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"A current camera mode"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"CameraMode"},"CameraMode")),(0,r.yg)("h3",{id:"range"},"range"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"A range that Camera's ",(0,r.yg)("a",{parentName:"p",href:"Camera#position"},"position")," can reach"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": object"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"min"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"A minimum position")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"max"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"A maximum position")))),(0,r.yg)("h3",{id:"rangeDiff"},"rangeDiff"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"A difference between Camera's minimum and maximum position that can reach"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"visiblePanels"},"visiblePanels"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"An array of visible panels from the current position"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Array","<",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,r.yg)("h3",{id:"visibleRange"},"visibleRange"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"A range of the visible area from the current position"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": object"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"min"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"A minimum position")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"min"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"A maximum position")))),(0,r.yg)("h3",{id:"anchorPoints"},"anchorPoints"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"An array of ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"s that Camera can be stopped at"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Array","<",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),">"),(0,r.yg)("h3",{id:"controlParams"},"controlParams"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"A current parameters of the Camera for updating ",(0,r.yg)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),(0,r.yg)("h3",{id:"atEdge"},"atEdge"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"A Boolean value indicating whether Camera's over the minimum or maximum position reachable"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"size"},"size"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Return the size of the viewport"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"progress"},"progress"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Return the camera's position progress from the first panel to last panel",(0,r.yg)("br",null),"Range is from 0 to last panel's index"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"panelOrder"},"panelOrder"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/direction"},"direction")," CSS property applied to the camera element(",(0,r.yg)("inlineCode",{parentName:"p"},".flicking-camera"),")"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": string"),(0,r.yg)("h3",{id:"align"},"align"),(0,r.yg)("div",null),(0,r.yg)("p",null,"A value indicating where the ",(0,r.yg)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")," should be located at inside the viewport element"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"ALIGN"},"ALIGN")," ","|"," string ","|"," number"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Initialize Camera"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"VAL_MUST_NOT_NULL")," If the camera element(",(0,r.yg)("inlineCode",{parentName:"p"},".flicking-camera"),") does not exist inside viewport element"),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Destroy Camera and return to initial state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"lookAt"},"lookAt"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Move to the given position and apply CSS transform"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"pos"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A new position")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.yg)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.yg)("h3",{id:"getPrevAnchor"},"getPrevAnchor"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Return a previous ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," of given ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),(0,r.yg)("br",null),"If it does not exist, return ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," instead"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The previous ",(0,r.yg)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"anchor"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A reference ",(0,r.yg)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),(0,r.yg)("h3",{id:"getNextAnchor"},"getNextAnchor"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Return a next ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," of given ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),(0,r.yg)("br",null),"If it does not exist, return ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," instead"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The next ",(0,r.yg)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"anchor"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A reference ",(0,r.yg)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),(0,r.yg)("h3",{id:"getProgressInPanel"},"getProgressInPanel"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Return the camera's position progress in the panel below",(0,r.yg)("br",null),"Value is from 0 to 1 when the camera's inside panel",(0,r.yg)("br",null),"Value can be lower than 0 or bigger than 1 when it's in the margin area"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h3",{id:"findAnchorIncludePosition"},"findAnchorIncludePosition"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Return ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that includes given position",(0,r.yg)("br",null),"If there's no ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that includes the given position, return ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," instead"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint")," that includes the given position")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"position"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A position to check")))),(0,r.yg)("h3",{id:"findNearestAnchor"},"findNearestAnchor"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Return ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," nearest to given position",(0,r.yg)("br",null),"If there're no ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"s, return ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," instead"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint")," nearest to the given position")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"position"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A position to check")))),(0,r.yg)("h3",{id:"findActiveAnchor"},"findActiveAnchor"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Return ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," that matches ",(0,r.yg)("a",{parentName:"p",href:"Flicking#currentPanel"},"Flicking#currentPanel")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,r.yg)("h3",{id:"clampToReachablePosition"},"clampToReachablePosition"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Clamp the given position between camera's range"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": number"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A clamped position")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"position"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A position to clamp")))),(0,r.yg)("h3",{id:"canReach"},"canReach"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Check whether the given panel is inside of the Camera's range"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Whether the panel's inside Camera's range")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")," to check")))),(0,r.yg)("h3",{id:"canSee"},"canSee"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Check whether the given panel element is visible at the current position"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Whether the panel element is visible at the current position")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")," to check")))),(0,r.yg)("h3",{id:"updateRange"},"updateRange"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Update ",(0,r.yg)("a",{parentName:"p",href:"Camera#range"},"range")," of Camera"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.yg)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.yg)("h3",{id:"updateAlignPos"},"updateAlignPos"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Update Camera's ",(0,r.yg)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"updateAnchors"},"updateAnchors"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Update Camera's ",(0,r.yg)("a",{parentName:"p",href:"Camera#anchorPoints"},"anchorPoints")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.yg)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.yg)("h3",{id:"updateAdaptiveHeight"},"updateAdaptiveHeight"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Update Viewport's height to active panel's height"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.yg)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.yg)("h3",{id:"updateOffset"},"updateOffset"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Update current offset of the camera"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"updatePanelOrder"},"updatePanelOrder"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Update direction to match the ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/direction"},"direction")," CSS property applied to the camera element"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"resetNeedPanelHistory"},"resetNeedPanelHistory"),(0,r.yg)("div",null),(0,r.yg)("p",null,"Reset the history of ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-needPanel"},"needPanel")," events so it can be triggered again"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"applyTransform"},"applyTransform"),(0,r.yg)("div",null),(0,r.yg)("p",null,'Apply "transform" style with the current position to camera element'),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"))}m.isMDXComponent=!0}}]);