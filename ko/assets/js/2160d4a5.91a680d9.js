"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24597],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=s(t,["components","mdxType","originalType","parentName"]),d=p(a),u=r,c=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(c,i(i({ref:e},k),{},{components:a})):n.createElement(c,i({ref:e},k))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31713:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={custom_edit_url:null},o=void 0,p={unversionedId:"api/AxesController",id:"version-4.2.5/api/AxesController",title:"AxesController",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.2.5/api/AxesController.mdx",sourceDirName:"api",slug:"/api/AxesController",permalink:"/egjs-flicking/ko/docs/4.2.5/api/AxesController",draft:!1,editUrl:null,tags:[],version:"4.2.5",frontMatter:{custom_edit_url:null},sidebar:"version-4.2.5/api",previous:{title:"LinearCamera",permalink:"/egjs-flicking/ko/docs/4.2.5/api/LinearCamera"},next:{title:"Control",permalink:"/egjs-flicking/ko/docs/4.2.5/api/Control"}},k={},m=[{value:"Properties",id:"properties",level:2},{value:"axes",id:"axes",level:3},{value:"stateMachine",id:"stateMachine",level:3},{value:"state",id:"state",level:3},{value:"animatingContext",id:"animatingContext",level:3},{value:"controlParams",id:"controlParams",level:3},{value:"enabled",id:"enabled",level:3},{value:"position",id:"position",level:3},{value:"range",id:"range",level:3},{value:"bounce",id:"bounce",level:3},{value:"Methods",id:"methods",level:2},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"update",id:"update",level:3},{value:"addPreventClickHandler",id:"addPreventClickHandler",level:3},{value:"removePreventClickHandler",id:"removePreventClickHandler",level:3},{value:"animateTo",id:"animateTo",level:3}],d={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class AxesController\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"\uc758 \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \ucee8\ud2b8\ub864\ub7ec \ucef4\ud3ec\ub10c\ud2b8"),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#axes"},"axes"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#stateMachine"},"stateMachine"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#state"},"state"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#animatingContext"},"animatingContext"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#controlParams"},"controlParams"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#enabled"},"enabled"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#position"},"position"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#range"},"range"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#bounce"},"bounce")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#init"},"init"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#enable"},"enable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#disable"},"disable"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#update"},"update"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#addPreventClickHandler"},"addPreventClickHandler"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#removePreventClickHandler"},"removePreventClickHandler"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#animateTo"},"animateTo")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"axes"},"axes"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes"),"\uc758 \uc778\uc2a4\ud134\uc2a4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Axes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"},"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"))),(0,l.kt)("h3",{id:"stateMachine"},"stateMachine"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This member is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"state"},"state"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud604\uc7ac \ud65c\uc131\ud654\ub41c ",(0,l.kt)("a",{parentName:"p",href:"State"},"State")," \uc778\uc2a4\ud134\uc2a4\ub85c \uc0ac\uc6a9\uc790 \uc785\ub825 \ub610\ub294 \uc560\ub2c8\uba54\uc774\uc158 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"State"},"State")),(0,l.kt)("h3",{id:"animatingContext"},"animatingContext"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\ud604\uc7ac \uc7ac\uc0dd\uc911\uc778 \uc560\ub2c8\uba54\uc774\uc158 \uc815\ubcf4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"start"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc2dc\uc791 \uc9c0\uc810")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"end"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \ub05d \uc9c0\uc810")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"offset"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uce74\uba54\ub77c \uc624\ud504\uc14b")))),(0,l.kt)("h3",{id:"controlParams"},"controlParams"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\ud65c\uc131\ud654\ub41c \ud604\uc7ac Axes \ud328\ub7ec\ubbf8\ud130\ub4e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"ControlParams"},"ControlParams")),(0,l.kt)("h3",{id:"enabled"},"enabled"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790 \uc785\ub825\uc774 \ud65c\uc131\ud654\ub418\uc5c8\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h3",{id:"position"},"position"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," \uc778\uc2a4\ud134\uc2a4 \ub0b4\ubd80\uc758 \ud604\uc7ac \uc88c\ud45c \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"range"},"range"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," \uc778\uc2a4\ud134\uc2a4 \ub0b4\ubd80\uc758 \ud604\uc7ac \uc774\ub3d9 \ubc94\uc704 \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<","number",">"),(0,l.kt)("h3",{id:"bounce"},"bounce"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,l.kt)("p",null,"\uc801\uc6a9\ub41c bounce \ud06c\uae30(px \ub2e8\uc704)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array","<","number",">"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"init"},"init"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"AxesController\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"An instance of Flicking")))),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"AxesController\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"enable"},"enable"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"disable"},"disable"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ub9c9\uc2b5\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"update"},"update"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"\uc758 \uc0c1\ud0dc\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"controlParams"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"ControlParams"},"ControlParams")),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"AxesController#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),(0,l.kt)("h3",{id:"addPreventClickHandler"},"addPreventClickHandler"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uc560\ub2c8\uba54\uc774\uc158 \ub3c4\uc911\uc5d0 \ud074\ub9ad \uc774\ubca4\ud2b8\ub97c \ubc29\uc9c0\ud558\ub294 \ud578\ub4e4\ub7ec\ub97c \ubd80\ucc29\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"removePreventClickHandler"},"removePreventClickHandler"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"\uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8\uc5d0 \uc560\ub2c8\uba54\uc774\uc158 \ub3c4\uc911\uc5d0 \ud074\ub9ad \uc774\ubca4\ud2b8\ub97c \ubc29\uc9c0\ud558\ub294 \ud578\ub4e4\ub7ec\ub97c \ud0c8\ucc29\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"animateTo"},"animateTo"),(0,l.kt)("div",{className:"bulma-tags"}),(0,l.kt)("p",null,"Axes\uc758 ",(0,l.kt)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," \uba54\uc18c\ub4dc\ub97c \uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub97c \uc774\uc6a9\ud558\uc5ec \uc218\ud589\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"position"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \uc88c\ud45c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc774 \uac12\uc774 \uc8fc\uc5b4\uc84c\uc744 \uacbd\uc6b0, \ud574\ub2f9 \uc774\ubca4\ud2b8\uc758 ",(0,l.kt)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," \uba54\uc18c\ub4dc\ub97c \ub300\uc2e0\ud574\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Throws"),": ",(0,l.kt)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"code"),(0,l.kt)("th",{parentName:"tr",align:null},"condition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"Control#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,l.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc758\ud574 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc911\ub2e8\ub41c \uacbd\uc6b0")))))}u.isMDXComponent=!0}}]);