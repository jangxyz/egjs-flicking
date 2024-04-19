"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51663],{15680:(e,a,t)=>{t.d(a,{xA:()=>m,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),y=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},m=function(e){var a=y(e.components);return n.createElement(p.Provider,{value:a},e.children)},o="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),o=y(t),c=r,d=o["".concat(p,".").concat(c)]||o[c]||s[c]||l;return t?n.createElement(d,g(g({ref:a},m),{},{components:t})):n.createElement(d,g({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,g=new Array(l);g[0]=c;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[o]="string"==typeof e?e:r,g[1]=i;for(var y=2;y<l;y++)g[y]=t[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58779:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>g,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=t(58168),r=(t(96540),t(15680));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/SnapControl",id:"version-4.4.2/api/SnapControl",title:"SnapControl",description:"\uc785\ub825\uc744 \uc911\ub2e8\ud55c \uc2dc\uc810\uc758 \uac00\uc18d\ub3c4\uc5d0 \uc601\ud5a5\ubc1b\uc544 \ub3c4\ub2ec\ud560 \ud328\ub110\uc744 \uacc4\uc0b0\ud558\ub294 \uc774\ub3d9 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 Control",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.4.2/api/SnapControl.mdx",sourceDirName:"api",slug:"/api/SnapControl",permalink:"/egjs-flicking/ko/docs/4.4.2/api/SnapControl",draft:!1,editUrl:null,tags:[],version:"4.4.2",frontMatter:{custom_edit_url:null},sidebar:"version-4.4.2/api",previous:{title:"FreeControl",permalink:"/egjs-flicking/ko/docs/4.4.2/api/FreeControl"},next:{title:"StrictControl",permalink:"/egjs-flicking/ko/docs/4.4.2/api/StrictControl"}},p={},y=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"count",id:"count",level:3},{value:"controller",id:"controller",level:3},{value:"activeIndex",id:"activeIndex",level:3},{value:"activePanel",id:"activePanel",level:3},{value:"animating",id:"animating",level:3},{value:"holding",id:"holding",level:3},{value:"Methods",id:"methods",level:2},{value:"moveToPosition",id:"moveToPosition",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"updatePosition",id:"updatePosition",level:3},{value:"updateInput",id:"updateInput",level:3},{value:"resetActive",id:"resetActive",level:3},{value:"moveToPanel",id:"moveToPanel",level:3},{value:"setActive",id:"setActive",level:3}],m={toc:y},o="wrapper";function s(e){let{components:a,...t}=e;return(0,r.yg)(o,(0,n.A)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class SnapControl extends Control\n")),(0,r.yg)("p",null,"\uc785\ub825\uc744 \uc911\ub2e8\ud55c \uc2dc\uc810\uc758 \uac00\uc18d\ub3c4\uc5d0 \uc601\ud5a5\ubc1b\uc544 \ub3c4\ub2ec\ud560 \ud328\ub110\uc744 \uacc4\uc0b0\ud558\ub294 \uc774\ub3d9 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\ub294 ",(0,r.yg)("a",{parentName:"p",href:"Control"},"Control")),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#count"},"count"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#controller"},"controller"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#activeIndex"},"activeIndex"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#activePanel"},"activePanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#animating"},"animating"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#holding"},"holding")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#moveToPosition"},"moveToPosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#enable"},"enable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#disable"},"disable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updatePosition"},"updatePosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateInput"},"updateInput"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#resetActive"},"resetActive"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#moveToPanel"},"moveToPanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#setActive"},"setActive")))),(0,r.yg)("h2",{id:"constructor"},"Constructor"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"new SnapControl()\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Partial","<",(0,r.yg)("a",{parentName:"td",href:"SnapControlOptions"},"SnapControlOptions"),">"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"count"},"count"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\uc785\ub825 \uc911\ub2e8 \uc774\ud6c4 \ud1b5\uacfc\ud558\uc5ec \uc774\ub3d9\ud560 \uc218 \uc788\ub294 \ud328\ub110\uc758 \ucd5c\ub300 \uac2f\uc218"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": Infinity"),(0,r.yg)("h3",{id:"controller"},"controller"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"\uc758 \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \ucee8\ud2b8\ub864\ub7ec \ucef4\ud3ec\ub10c\ud2b8"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,r.yg)("h3",{id:"activeIndex"},"activeIndex"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"Flicking#currentPanel"},"currentPanel"),"\uc758 \uc778\ub371\uc2a4 \ubc88\ud638"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": 0"),(0,r.yg)("h3",{id:"activePanel"},"activePanel"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"\ud604\uc7ac \uc120\ud0dd\ub41c \ud328\ub110"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("h3",{id:"animating"},"animating"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"\ud604\uc7ac \uc560\ub2c8\uba54\uc774\uc158 \ub3d9\uc791 \uc5ec\ubd80"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"holding"},"holding"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ud074\ub9ad/\ud130\uce58\uc911\uc778\uc9c0 \uc5ec\ubd80"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"moveToPosition"},"moveToPosition"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-success"},"async")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera"),"\ub97c \uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Emits"),": ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"position"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \uc88c\ud45c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc774\ub3d9 \uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"),"\uc758 ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," \uc774\ubca4\ud2b8")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"condition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,r.yg)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \ud328\ub110\uc774 \uc81c\uac70\ub418\uc5c8\uac70\ub098, Camera\uc758 ",(0,r.yg)("a",{parentName:"td",href:"Camera#range"},"range")," \ubc16\uc5d0 \uc788\uc744 \uacbd\uc6b0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"Control#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.yg)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc758\ud574 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc911\ub2e8\ub41c \uacbd\uc6b0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,r.yg)("td",{parentName:"tr",align:null},"\ubc1c\uc0dd\ub41c \uc774\ubca4\ud2b8\ub4e4 \uc911 \ud558\ub098\ub77c\ub3c4 ",(0,r.yg)("inlineCode",{parentName:"td"},"stop()"),"\uc774 \ud638\ucd9c\ub41c \uacbd\uc6b0")))),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Control\uc744 \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Flicking\uc758 \uc778\uc2a4\ud134\uc2a4")))),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Control\uc744 \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"enable"},"enable"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"disable"},"disable"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ub9c9\uc2b5\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"updatePosition"},"updatePosition"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"resize \uc774\ud6c4\uc5d0 position\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"progressInPanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Resize \uc774\uc804 \ud604\uc7ac \uc120\ud0dd\ub41c \ud328\ub110 \ub0b4\uc5d0\uc11c\uc758 \uce74\uba54\ub77c progress \uac12")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," ",(0,r.yg)("a",{parentName:"p",href:"Camera#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),(0,r.yg)("h3",{id:"updateInput"},"updateInput"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"Control#controller"},"controller"),"\uc758 \ub0b4\ubd80 \uc0c1\ud0dc\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"resetActive"},"resetActive"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"Control#activePanel"},"activePanel"),"\uc744 ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"\ub85c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"moveToPanel"},"moveToPanel"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited"),(0,r.yg)("span",{className:"bulma-tag is-success"},"async")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera"),"\ub97c \ud574\ub2f9 \ud328\ub110 \uc704\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ud574\ub2f9 \ud328\ub110 \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Emits"),": ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \ud328\ub110")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uc624\ube0c\uc81d\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"),"\uc758 ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," \uc774\ubca4\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"direction"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DIRECTION.NONE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \ubc29\ud5a5. ",(0,r.yg)("a",{parentName:"td",href:"Flicking#circular"},"circular")," \uc635\uc158 \ud65c\uc131\ud654\uc2dc\uc5d0\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"condition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,r.yg)("td",{parentName:"tr",align:null},"\uc8fc\uc5b4\uc9c4 \ud328\ub110\uc774 \uc81c\uac70\ub418\uc5c8\uac70\ub098, Camera\uc758 ",(0,r.yg)("a",{parentName:"td",href:"Camera#range"},"range")," \ubc16\uc5d0 \uc788\uc744 \uacbd\uc6b0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"Control#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.yg)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc758\ud574 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc911\ub2e8\ub41c \uacbd\uc6b0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,r.yg)("td",{parentName:"tr",align:null},"\ubc1c\uc0dd\ub41c \uc774\ubca4\ud2b8\ub4e4 \uc911 \ud558\ub098\ub77c\ub3c4 ",(0,r.yg)("inlineCode",{parentName:"td"},"stop()"),"\uc774 \ud638\ucd9c\ub41c \uacbd\uc6b0")))),(0,r.yg)("h3",{id:"setActive"},"setActive"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"newActivePanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"prevActivePanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"isTrusted"),(0,r.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."))}s.isMDXComponent=!0}}]);