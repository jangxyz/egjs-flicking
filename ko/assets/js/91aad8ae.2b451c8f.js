"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75623],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=m(n),g=r,d=s["".concat(p,".").concat(g)]||s[g]||k[g]||l;return n?a.createElement(d,o(o({ref:e},c),{},{components:n})):a.createElement(d,o({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},48322:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={custom_edit_url:null},o=void 0,i={unversionedId:"api/Component",id:"version-4.2.5/api/Component",title:"Component",description:"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc774\ubca4\ud2b8\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ud074\ub798\uc2a4",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.2.5/api/Component.mdx",sourceDirName:"api",slug:"/api/Component",permalink:"/egjs-flicking/ko/docs/4.2.5/api/Component",draft:!1,editUrl:null,tags:[],version:"4.2.5",frontMatter:{custom_edit_url:null},sidebar:"version-4.2.5/api",previous:{title:"VanillaRenderer",permalink:"/egjs-flicking/ko/docs/4.2.5/api/VanillaRenderer"},next:{title:"FlickingEvents",permalink:"/egjs-flicking/ko/docs/4.2.5/api/FlickingEvents"}},p={},m=[{value:"Properties",id:"properties",level:2},{value:"VERSION",id:"VERSION",level:3},{value:"Methods",id:"methods",level:2},{value:"trigger",id:"trigger",level:3},{value:"once",id:"once",level:3},{value:"hasOn",id:"hasOn",level:3},{value:"on",id:"on",level:3},{value:"off",id:"off",level:3}],c={toc:m},s="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Component\n")),(0,r.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc774\ubca4\ud2b8\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ud074\ub798\uc2a4"),(0,r.kt)("div",{className:"container"},(0,r.kt)("div",{className:"row mb-2"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Properties")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("strong",null,"Methods"))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#VERSION"},"VERSION"),(0,r.kt)("span",{className:"bulma-tag is-info ml-2"},"static")),(0,r.kt)("div",{className:"col col--6"},(0,r.kt)("a",{href:"#trigger"},"trigger"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#once"},"once"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#hasOn"},"hasOn"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#on"},"on"),(0,r.kt)("br",null),(0,r.kt)("a",{href:"#off"},"off")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"VERSION"},"VERSION"),(0,r.kt)("div",{className:"bulma-tags"},(0,r.kt)("span",{className:"bulma-tag is-info"},"static")),(0,r.kt)("p",null,"\ubc84\uc804\uc815\ubcf4 \ubb38\uc790\uc5f4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type"),": string"),(0,r.kt)("p",null,"Component.VERSION;  // ex) 3.0.0"),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"trigger"},"trigger"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\ub97c \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"event"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string ","|"," ComponentEvent"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ubc1c\uc0dd\ud560 \ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\uc758 \uc774\ub984 \ub610\ub294 ComponentEvent\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"params"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Array","<","any",">"," ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c \uc804\ub2ec\ud560 \ub370\uc774\ud130")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  beforeHi: ComponentEvent<{ foo: number; bar: string }>;\n  hi: { foo: { a: number; b: boolean } };\n  someEvent: (foo: number, bar: string) => void;\n  someOtherEvent: void; // When there\'s no event argument\n}> {\n  some(){\n    if(this.trigger("beforeHi")){ // When event call to stop return false.\n      this.trigger("hi");// fire hi event.\n    }\n  }\n}\n\nconst some = new Some();\nsome.on("beforeHi", e => {\n  if(condition){\n    e.stop(); // When event call to stop, `hi` event not call.\n  }\n  // `currentTarget` is component instance.\n  console.log(some === e.currentTarget); // true\n\n  typeof e.foo; // number\n  typeof e.bar; // string\n});\nsome.on("hi", e => {\n  typeof e.foo.b; // boolean\n});\n// If you want to more know event design. You can see article.\n// https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F\n')),(0,r.kt)("h3",{id:"once"},"once"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"\uc774\ubca4\ud2b8\uac00 \ud55c\ubc88\ub9cc \uc2e4\ud589\ub41c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984 \ub610\ub294 \uc774\ubca4\ud2b8 \uc774\ub984-\ud578\ub4e4\ub7ec \uc624\ube0c\uc81d\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \ud578\ub4e4\ub7ec \ud568\uc218")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: ComponentEvent;\n}> {\n  hi() {\n    alert("hi");\n  }\n  thing() {\n    this.once("hi", this.hi);\n  }\n}\n\nvar some = new Some();\nsome.thing();\nsome.trigger(new ComponentEvent("hi"));\n// fire alert("hi");\nsome.trigger(new ComponentEvent("hi"));\n// Nothing happens\n')),(0,r.kt)("h3",{id:"hasOn"},"hasOn"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc774\ubca4\ud2b8\uac00 \ub4f1\ub85d\ub410\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ub4f1\ub85d \uc5ec\ubd80")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d \uc5ec\ubd80\ub97c \ud655\uc778\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  some() {\n    this.hasOn("hi");// check hi event.\n  }\n}\n')),(0,r.kt)("h3",{id:"on"},"on"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc774\ubca4\ud2b8\ub97c \ub4f1\ub85d\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984 \ub610\ub294 \uc774\ubca4\ud2b8 \uc774\ub984-\ud578\ub4e4\ub7ec \uc624\ube0c\uc81d\ud2b8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \ud578\ub4e4\ub7ec \ud568\uc218")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.on("hi",this.hi); //attach event\n  }\n}\n')),(0,r.kt)("h3",{id:"off"},"off"),(0,r.kt)("div",{className:"bulma-tags"}),(0,r.kt)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub4f1\ub85d\ub41c \uc774\ubca4\ud2b8\ub97c \ud574\uc81c\ud55c\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),"\uc774 \uc8fc\uc5b4\uc9c0\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc81c\uac70\ud55c\ub2e4.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"p"},"handlerToAttach"),"\uac00 \uc8fc\uc5b4\uc9c0\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc81c\uac70\ud55c\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud574\uc81c\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"handlerToDetach"),(0,r.kt)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\ud574\uc81c\ud560 \uc774\ubca4\ud2b8\uc758 \ud578\ub4e4\ub7ec \ud568\uc218")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.off("hi",this.hi); //detach event\n  }\n}\n')))}k.isMDXComponent=!0}}]);