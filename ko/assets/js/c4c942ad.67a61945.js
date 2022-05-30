"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41665],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),o=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(k.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=o(a),N=r,u=c["".concat(k,".").concat(N)]||c[N]||s[N]||l;return a?n.createElement(u,i(i({ref:e},m),{},{components:a})):n.createElement(u,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22120:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return k},default:function(){return N},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={custom_edit_url:null},k=void 0,o={unversionedId:"api/Camera",id:"version-4.4.2/api/Camera",title:"Camera",description:"\ubdf0\ud3ec\ud2b8 \ub0b4\uc5d0\uc11c\uc758 \uc2e4\uc81c \uc6c0\uc9c1\uc784\uc744 \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.4.2/api/Camera.mdx",sourceDirName:"api",slug:"/api/Camera",permalink:"/egjs-flicking/ko/docs/4.4.2/api/Camera",draft:!1,editUrl:null,tags:[],version:"4.4.2",frontMatter:{custom_edit_url:null},sidebar:"version-4.4.2/api",previous:{title:"BoundCamera",permalink:"/egjs-flicking/ko/docs/4.4.2/api/BoundCamera"},next:{title:"CircularCamera",permalink:"/egjs-flicking/ko/docs/4.4.2/api/CircularCamera"}},m={},s=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"children",id:"children",level:3},{value:"position",id:"position",level:3},{value:"alignPosition",id:"alignPosition",level:3},{value:"offset",id:"offset",level:3},{value:"range",id:"range",level:3},{value:"rangeDiff",id:"rangeDiff",level:3},{value:"visiblePanels",id:"visiblePanels",level:3},{value:"visibleRange",id:"visibleRange",level:3},{value:"anchorPoints",id:"anchorPoints",level:3},{value:"controlParams",id:"controlParams",level:3},{value:"atEdge",id:"atEdge",level:3},{value:"size",id:"size",level:3},{value:"progress",id:"progress",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"updateRange",id:"updateRange",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"lookAt",id:"lookAt",level:3},{value:"getPrevAnchor",id:"getPrevAnchor",level:3},{value:"getNextAnchor",id:"getNextAnchor",level:3},{value:"getProgressInPanel",id:"getProgressInPanel",level:3},{value:"findAnchorIncludePosition",id:"findAnchorIncludePosition",level:3},{value:"findNearestAnchor",id:"findNearestAnchor",level:3},{value:"findActiveAnchor",id:"findActiveAnchor",level:3},{value:"clampToReachablePosition",id:"clampToReachablePosition",level:3},{value:"canReach",id:"canReach",level:3},{value:"canSee",id:"canSee",level:3},{value:"updateAlignPos",id:"updateAlignPos",level:3},{value:"updateAnchors",id:"updateAnchors",level:3},{value:"updateAdaptiveHeight",id:"updateAdaptiveHeight",level:3},{value:"updateOffset",id:"updateOffset",level:3},{value:"resetNeedPanelHistory",id:"resetNeedPanelHistory",level:3},{value:"applyTransform",id:"applyTransform",level:3}],c={toc:s};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class Camera\n")),(0,l.kt)("p",null,"\ubdf0\ud3ec\ud2b8 \ub0b4\uc5d0\uc11c\uc758 \uc2e4\uc81c \uc6c0\uc9c1\uc784\uc744 \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8"),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#element"},"element"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#children"},"children"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#position"},"position"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#alignPosition"},"alignPosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#offset"},"offset"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#range"},"range"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#rangeDiff"},"rangeDiff"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#visiblePanels"},"visiblePanels"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#visibleRange"},"visibleRange"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#anchorPoints"},"anchorPoints"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#controlParams"},"controlParams"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#atEdge"},"atEdge"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#size"},"size"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#progress"},"progress"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#align"},"align")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#updateRange"},"updateRange"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#lookAt"},"lookAt"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getPrevAnchor"},"getPrevAnchor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getNextAnchor"},"getNextAnchor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#getProgressInPanel"},"getProgressInPanel"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#findAnchorIncludePosition"},"findAnchorIncludePosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#findNearestAnchor"},"findNearestAnchor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#findActiveAnchor"},"findActiveAnchor"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#clampToReachablePosition"},"clampToReachablePosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#canReach"},"canReach"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#canSee"},"canSee"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateAlignPos"},"updateAlignPos"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateAnchors"},"updateAnchors"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateAdaptiveHeight"},"updateAdaptiveHeight"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateOffset"},"updateOffset"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#resetNeedPanelHistory"},"resetNeedPanelHistory"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#applyTransform"},"applyTransform")))),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new Camera()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Partial","<","CameraOptions",">"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"element"},"element"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8(",(0,l.kt)("inlineCode",{parentName:"p"},".flicking-camera"),")"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,l.kt)("h3",{id:"children"},"children"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8(",(0,l.kt)("inlineCode",{parentName:"p"},".flicking-camera"),")\uc758 \uc790\uc2dd \uc5d8\ub9ac\uba3c\ud2b8 \ubc30\uc5f4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<","HTMLElement",">"),(0,l.kt)("h3",{id:"position"},"position"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"Camera\uc758 \ud604\uc7ac \uc88c\ud45c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"alignPosition"},"alignPosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \uc815\ub82c \uae30\uc900 \uc704\uce58. \ubdf0\ud3ec\ud2b8 \ub0b4\uc5d0\uc11c ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc758 ",(0,l.kt)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition"),"\uc774 \uc704\uce58\ud574\uc57c \ud558\ub294 \uacf3\uc785\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"offset"},"offset"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"Camera\uc758 \uc88c\ud45c \uc624\ud504\uc14b. ",(0,l.kt)("a",{parentName:"p",href:"Flicking#renderOnlyVisible"},"renderOnlyVisible")," \uc635\uc158\uc744 \uc704\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default"),": 0"),(0,l.kt)("h3",{id:"range"},"range"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"Camera\uc758 ",(0,l.kt)("a",{parentName:"p",href:"Camera#position"},"position"),"\uc774 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"min"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ucd5c\uc18c \uc704\uce58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"max"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ucd5c\ub300 \uc704\uce58")))),(0,l.kt)("h3",{id:"rangeDiff"},"rangeDiff"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"Camera\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ucd5c\uc18c/\ucd5c\ub300 \uc88c\ud45c\uc758 \ucc28\uc774"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"visiblePanels"},"visiblePanels"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\ud604\uc7ac \ubcf4\uc774\ub294 \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,l.kt)("h3",{id:"visibleRange"},"visibleRange"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\ud604\uc7ac \uc704\uce58\uc5d0\uc11c \ubcf4\uc774\ub294 \ubc94\uc704"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"min"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ucd5c\uc18c \uc704\uce58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"min"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ucd5c\ub300 \uc704\uce58")))),(0,l.kt)("h3",{id:"anchorPoints"},"anchorPoints"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\uce74\uba54\ub77c\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uc758 \ubaa9\ub85d"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),">"),(0,l.kt)("h3",{id:"controlParams"},"controlParams"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"AxesController"},"AxesController"),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud55c \ud604\uc7ac Camera \ud328\ub7ec\ubbf8\ud130\ub4e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),(0,l.kt)("h3",{id:"atEdge"},"atEdge"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\ud604\uc7ac \uce74\uba54\ub77c\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704\uc758 \ucd5c\uc18c \ud639\uc740 \ucd5c\ub300\uc810\uc744 \ub118\uc5b4\uc130\ub294\uc9c0\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h3",{id:"size"},"size"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\ubdf0\ud3ec\ud2b8 \ud06c\uae30\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"progress"},"progress"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\uccab\ubc88\uc9f8 \ud328\ub110\ub85c\ubd80\ud130 \ub9c8\uc9c0\ub9c9 \ud328\ub110\uae4c\uc9c0\uc758 \uce74\uba54\ub77c \uc704\uce58\uc758 \uc9c4\ud589\ub3c4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\ubc94\uc704\ub294 0\ubd80\ud130 \ub9c8\uc9c0\ub9c9 \ud328\ub110\uc758 \uc778\ub371\uc2a4\uae4c\uc9c0\uc785\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"align"},"align"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition"),"\uc774 \ubdf0\ud3ec\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\uc758 \uc5b4\ub514\uc5d0 \uc704\uce58\ud574\uc57c \ud558\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"ALIGN"},"ALIGN")," ","|"," string ","|"," number"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"updateRange"},"updateRange"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Camera\uc758 ",(0,l.kt)("a",{parentName:"p",href:"Camera#range"},"range"),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Camera\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Flicking\uc758 \uc778\uc2a4\ud134\uc2a4")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"VAL_MUST_NOT_NULL")," \ubdf0\ud3ec\ud2b8 \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\ubd80\uc5d0 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8(",(0,l.kt)("inlineCode",{parentName:"p"},".flicking-camera"),")\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0"),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Camera\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"lookAt"},"lookAt"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud574\ub2f9 \uc88c\ud45c\ub85c \uc774\ub3d9\ud558\uace0, CSS transform\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc6c0\uc9c1\uc77c \uc704\uce58")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),(0,l.kt)("h3",{id:"getPrevAnchor"},"getPrevAnchor"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uc758 \uc774\uc804 ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\uc804 ",(0,l.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"anchor"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uae30\uc900 ",(0,l.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),(0,l.kt)("h3",{id:"getNextAnchor"},"getNextAnchor"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uc758 \ub2e4\uc74c ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c ",(0,l.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"anchor"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uae30\uc900 ",(0,l.kt)("a",{parentName:"td",href:"AnchorPoint"},"AnchorPoint"))))),(0,l.kt)("h3",{id:"getProgressInPanel"},"getProgressInPanel"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud604\uc7ac \uce74\uba54\ub77c \uc544\ub798 \ud328\ub110\uc5d0\uc11c\uc758 \uc704\uce58 \uc9c4\ud589\ub3c4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\ubc18\ud658\uac12\uc740 \uce74\uba54\ub77c\uac00 \ud328\ub110 \ub0b4\ubd80\uc5d0 \uc788\uc744 \uacbd\uc6b0 0\ubd80\ud130 1\uae4c\uc9c0\uc758 \uac12\uc744 \uac16\uc2b5\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\ud328\ub110\uc758 margin \uc601\uc5ed\uc5d0 \uc788\uc744 \uacbd\uc6b0 0\ubcf4\ub2e4 \uc791\uac70\ub098 1\ubcf4\ub2e4 \ud070 \uac12\uc744 \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"findAnchorIncludePosition"},"findAnchorIncludePosition"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub97c \ud3ec\ud568\ud558\ub294 ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n","\uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub97c \ud3ec\ud568\ud558\ub294 ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uac00 \uc5c6\uc744 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c\ub97c \ud3ec\ud568\ud558\ub294 ",(0,l.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud560 \uc88c\ud45c")))),(0,l.kt)("h3",{id:"findNearestAnchor"},"findNearestAnchor"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud574\ub2f9 \uc88c\ud45c\uc5d0\uc11c \uac00\uc7a5 \uac00\uae4c\uc6b4 ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\uac00 \ud558\ub098\ub3c4 \uc5c6\uc744 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c\uc5d0 \uac00\uc7a5 \uc778\uc811\ud55c ",(0,l.kt)("a",{parentName:"li",href:"AnchorPoint"},"AnchorPoint"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud560 \uc88c\ud45c")))),(0,l.kt)("h3",{id:"findActiveAnchor"},"findActiveAnchor"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud604\uc7ac ",(0,l.kt)("a",{parentName:"p",href:"Flicking#currentPanel"},"Flicking#currentPanel"),"\uc5d0 \ud574\ub2f9\ud558\ub294 ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint"),"\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"AnchorPoint"},"AnchorPoint")," ","|"," null"),(0,l.kt)("h3",{id:"clampToReachablePosition"},"clampToReachablePosition"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub97c Camera\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704 \uc0ac\uc774\uc758 \uac12\uc73c\ub85c \ub9cc\ub4ed\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": number"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubc94\uc704 \uc81c\ud55c\ub41c \uc88c\ud45c")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ubc94\uc704\ub97c \uc81c\ud55c\ud560 \uc88c\ud45c")))),(0,l.kt)("h3",{id:"canReach"},"canReach"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud574\ub2f9 ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc774 Camera\uac00 \ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704 \ub0b4\uc5d0 \uc788\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub3c4\ub2ec \uac00\ub2a5\ud55c \ubc94\uc704 \ub0b4\uc5d0 \ud574\ub2f9 \ud328\ub110\uc774 \uc874\uc7ac\ud558\ub294\uc9c0 \uc5ec\ubd80")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud560 ",(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel"),"\uc758 \uc778\uc2a4\ud134\uc2a4")))),(0,l.kt)("h3",{id:"canSee"},"canSee"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud604\uc7ac \uc88c\ud45c\uc5d0\uc11c \ud574\ub2f9 \ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ubcfc \uc218 \uc788\ub294\uc9c0 \uc5ec\ubd80\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud604\uc7ac \uc704\uce58\uc5d0\uc11c \ud574\ub2f9 \ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \ubcf4\uc774\ub294\uc9c0 \uc5ec\ubd80")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud560 ",(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel"),"\uc758 \uc778\uc2a4\ud134\uc2a4")))),(0,l.kt)("h3",{id:"updateAlignPos"},"updateAlignPos"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Camera\uc758 ",(0,l.kt)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition"),"\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"updateAnchors"},"updateAnchors"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Camera\uc758 ",(0,l.kt)("a",{parentName:"p",href:"Camera#anchorPoints"},"anchorPoints"),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),(0,l.kt)("h3",{id:"updateAdaptiveHeight"},"updateAdaptiveHeight"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud604\uc7ac \uc120\ud0dd\ub41c \ud328\ub110\uc758 \ub192\uc774\uc640 \ub3d9\uc77c\ud558\ub3c4\ub85d \ubdf0\ud3ec\ud2b8\uc758 \ub192\uc774\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),(0,l.kt)("h3",{id:"updateOffset"},"updateOffset"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud604\uc7ac \uce74\uba54\ub77c\uc758 \uc624\ud504\uc14b\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"resetNeedPanelHistory"},"resetNeedPanelHistory"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ubc1c\uc0dd\ud55c ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-needPanel"},"needPanel")," \uc774\ubca4\ud2b8\ub4e4\uc744 \ucd08\uae30\ud654\ud558\uc5ec \ub2e4\uc2dc \ubc1c\uc0dd\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"applyTransform"},"applyTransform"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud604\uc7ac \uc704\uce58\ub97c \uae30\uc900\uc73c\ub85c\ud55c transform \uc2a4\ud0c0\uc77c\uc744 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uc801\uc6a9\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"))}N.isMDXComponent=!0}}]);