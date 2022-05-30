"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42088],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),m=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(k.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,k=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),c=m(a),d=r,N=c["".concat(k,".").concat(d)]||c[d]||s[d]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},46815:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return k},default:function(){return d},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={custom_edit_url:null},k=void 0,m={unversionedId:"api/SnapControl",id:"version-4.5.1/api/SnapControl",title:"SnapControl",description:"\uc785\ub825\uc744 \uc911\ub2e8\ud55c \uc2dc\uc810\uc758 \uac00\uc18d\ub3c4\uc5d0 \uc601\ud5a5\ubc1b\uc544 \ub3c4\ub2ec\ud560 \ud328\ub110\uc744 \uacc4\uc0b0\ud558\ub294 \uc774\ub3d9 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 Control",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.5.1/api/SnapControl.mdx",sourceDirName:"api",slug:"/api/SnapControl",permalink:"/egjs-flicking/ko/docs/4.5.1/api/SnapControl",draft:!1,editUrl:null,tags:[],version:"4.5.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FreeControl",permalink:"/egjs-flicking/ko/docs/4.5.1/api/FreeControl"},next:{title:"StrictControl",permalink:"/egjs-flicking/ko/docs/4.5.1/api/StrictControl"}},o={},s=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"count",id:"count",level:3},{value:"controller",id:"controller",level:3},{value:"activeIndex",id:"activeIndex",level:3},{value:"activePanel",id:"activePanel",level:3},{value:"animating",id:"animating",level:3},{value:"holding",id:"holding",level:3},{value:"Methods",id:"methods",level:2},{value:"moveToPosition",id:"moveToPosition",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"updatePosition",id:"updatePosition",level:3},{value:"updateInput",id:"updateInput",level:3},{value:"resetActive",id:"resetActive",level:3},{value:"moveToPanel",id:"moveToPanel",level:3},{value:"setActive",id:"setActive",level:3}],c={toc:s};function d(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class SnapControl extends Control\n")),(0,l.kt)("p",null,"\uc785\ub825\uc744 \uc911\ub2e8\ud55c \uc2dc\uc810\uc758 \uac00\uc18d\ub3c4\uc5d0 \uc601\ud5a5\ubc1b\uc544 \ub3c4\ub2ec\ud560 \ud328\ub110\uc744 \uacc4\uc0b0\ud558\ub294 \uc774\ub3d9 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 ",(0,l.kt)("a",{parentName:"p",href:"Control"},"Control")),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#count"},"count"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#controller"},"controller"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#activeIndex"},"activeIndex"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#activePanel"},"activePanel"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#animating"},"animating"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#holding"},"holding")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#moveToPosition"},"moveToPosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#enable"},"enable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#disable"},"disable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updatePosition"},"updatePosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateInput"},"updateInput"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#resetActive"},"resetActive"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#moveToPanel"},"moveToPanel"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#setActive"},"setActive")))),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new SnapControl()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Partial","<",(0,l.kt)("a",{parentName:"td",href:"SnapControlOptions"},"SnapControlOptions"),">"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"{}"),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"count"},"count"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc785\ub825 \uc911\ub2e8 \uc774\ud6c4 \ud1b5\uacfc\ud558\uc5ec \uc774\ub3d9\ud560 \uc218 \uc788\ub294 \ud328\ub110\uc758 \ucd5c\ub300 \uac2f\uc218"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default"),": Infinity"),(0,l.kt)("h3",{id:"controller"},"controller"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"\uc758 \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \ucee8\ud2b8\ub864\ub7ec \ucef4\ud3ec\ub10c\ud2b8"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,l.kt)("h3",{id:"activeIndex"},"activeIndex"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Flicking#currentPanel"},"currentPanel"),"\uc758 \uc778\ub371\uc2a4 \ubc88\ud638"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default"),": 0"),(0,l.kt)("h3",{id:"activePanel"},"activePanel"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud604\uc7ac \uc120\ud0dd\ub41c \ud328\ub110"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,l.kt)("h3",{id:"animating"},"animating"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud604\uc7ac \uc560\ub2c8\uba54\uc774\uc158 \ub3d9\uc791 \uc5ec\ubd80"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h3",{id:"holding"},"holding"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ud074\ub9ad/\ud130\uce58\uc911\uc778\uc9c0 \uc5ec\ubd80"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"moveToPosition"},"moveToPosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-success"},"async")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Camera"},"Camera"),"\ub97c \uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Emits"),": ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \uc88c\ud45c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc774\ub3d9 \uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"),"\uc758 ",(0,l.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," \uc774\ubca4\ud2b8")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"condition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \ud328\ub110\uc774 \uc81c\uac70\ub418\uc5c8\uac70\ub098, Camera\uc758 ",(0,l.kt)("a",{parentName:"td",href:"Camera#range"},"range")," \ubc16\uc5d0 \uc788\uc744 \uacbd\uc6b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"Control#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc758\ud574 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc911\ub2e8\ub41c \uacbd\uc6b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,l.kt)("td",{parentName:"tr",align:null},"\ubc1c\uc0dd\ub41c \uc774\ubca4\ud2b8\ub4e4 \uc911 \ud558\ub098\ub77c\ub3c4 ",(0,l.kt)("inlineCode",{parentName:"td"},"stop()"),"\uc774 \ud638\ucd9c\ub41c \uacbd\uc6b0")))),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Control\uc744 \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Flicking\uc758 \uc778\uc2a4\ud134\uc2a4")))),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"Control\uc744 \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"enable"},"enable"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"disable"},"disable"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ub9c9\uc2b5\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"updatePosition"},"updatePosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"resize \uc774\ud6c4\uc5d0 position\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"progressInPanel"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"Resize \uc774\uc804 \ud604\uc7ac \uc120\ud0dd\ub41c \ud328\ub110 \ub0b4\uc5d0\uc11c\uc758 \uce74\uba54\ub77c progress \uac12")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",(0,l.kt)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),(0,l.kt)("h3",{id:"updateInput"},"updateInput"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Control#controller"},"controller"),"\uc758 \ub0b4\ubd80 \uc0c1\ud0dc\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"resetActive"},"resetActive"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Control#activePanel"},"activePanel"),"\uc744 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\ub85c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"moveToPanel"},"moveToPanel"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited"),(0,l.kt)("span",{className:"bulma-tag is-success"},"async")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Camera"},"Camera"),"\ub97c \ud574\ub2f9 \ud328\ub110 \uc704\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ud328\ub110 \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Emits"),": ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,l.kt)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"panel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \ud328\ub110")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uc624\ube0c\uc81d\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"),"\uc758 ",(0,l.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," \uc774\ubca4\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"direction"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"DIRECTION.NONE"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \ubc29\ud5a5. ",(0,l.kt)("a",{parentName:"td",href:"Flicking#circular"},"circular")," \uc635\uc158 \ud65c\uc131\ud654\uc2dc\uc5d0\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"condition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \ud328\ub110\uc774 \uc81c\uac70\ub418\uc5c8\uac70\ub098, Camera\uc758 ",(0,l.kt)("a",{parentName:"td",href:"Camera#range"},"range")," \ubc16\uc5d0 \uc788\uc744 \uacbd\uc6b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"Control#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc758\ud574 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc911\ub2e8\ub41c \uacbd\uc6b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,l.kt)("td",{parentName:"tr",align:null},"\ubc1c\uc0dd\ub41c \uc774\ubca4\ud2b8\ub4e4 \uc911 \ud558\ub098\ub77c\ub3c4 ",(0,l.kt)("inlineCode",{parentName:"td"},"stop()"),"\uc774 \ud638\ucd9c\ub41c \uacbd\uc6b0")))),(0,l.kt)("h3",{id:"setActive"},"setActive"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"newActivePanel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"prevActivePanel"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Panel"},"Panel")," ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"isTrusted"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."))}d.isMDXComponent=!0}}]);