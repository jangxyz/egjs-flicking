"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20705],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},g=Object.keys(e);for(a=0;a<g.length;a++)t=g[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(a=0;a<g.length;a++)t=g[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,g=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=p(t),s=r,d=y["".concat(i,".").concat(s)]||y[s]||c[s]||g;return t?a.createElement(d,l(l({ref:n},m),{},{components:t})):a.createElement(d,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var g=t.length,l=new Array(g);l[0]=s;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[y]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<g;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},69352:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>g,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const g={custom_edit_url:null},l=void 0,o={unversionedId:"api/Component",id:"version-4.2.5/api/Component",title:"Component",description:"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc774\ubca4\ud2b8\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ud074\ub798\uc2a4",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.2.5/api/Component.mdx",sourceDirName:"api",slug:"/api/Component",permalink:"/egjs-flicking/ko/docs/4.2.5/api/Component",draft:!1,editUrl:null,tags:[],version:"4.2.5",frontMatter:{custom_edit_url:null},sidebar:"version-4.2.5/api",previous:{title:"VanillaRenderer",permalink:"/egjs-flicking/ko/docs/4.2.5/api/VanillaRenderer"},next:{title:"FlickingEvents",permalink:"/egjs-flicking/ko/docs/4.2.5/api/FlickingEvents"}},i={},p=[{value:"Properties",id:"properties",level:2},{value:"VERSION",id:"VERSION",level:3},{value:"Methods",id:"methods",level:2},{value:"trigger",id:"trigger",level:3},{value:"once",id:"once",level:3},{value:"hasOn",id:"hasOn",level:3},{value:"on",id:"on",level:3},{value:"off",id:"off",level:3}],m={toc:p},y="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class Component\n")),(0,r.yg)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc758 \uc774\ubca4\ud2b8\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ud074\ub798\uc2a4"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#VERSION"},"VERSION"),(0,r.yg)("span",{className:"bulma-tag is-info ml-2"},"static")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#trigger"},"trigger"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#once"},"once"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#hasOn"},"hasOn"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#on"},"on"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#off"},"off")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"VERSION"},"VERSION"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-info"},"static")),(0,r.yg)("p",null,"\ubc84\uc804\uc815\ubcf4 \ubb38\uc790\uc5f4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": string"),(0,r.yg)("p",null,"Component.VERSION;  // ex) 3.0.0"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"trigger"},"trigger"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\ub97c \ubc1c\uc0dd\uc2dc\ud0a8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"event"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string ","|"," ComponentEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ubc1c\uc0dd\ud560 \ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\uc758 \uc774\ub984 \ub610\ub294 ComponentEvent\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"params"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Array","<","any",">"," ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ucee4\uc2a4\ud140 \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud560 \ub54c \uc804\ub2ec\ud560 \ub370\uc774\ud130")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  beforeHi: ComponentEvent<{ foo: number; bar: string }>;\n  hi: { foo: { a: number; b: boolean } };\n  someEvent: (foo: number, bar: string) => void;\n  someOtherEvent: void; // When there\'s no event argument\n}> {\n  some(){\n    if(this.trigger("beforeHi")){ // When event call to stop return false.\n      this.trigger("hi");// fire hi event.\n    }\n  }\n}\n\nconst some = new Some();\nsome.on("beforeHi", e => {\n  if(condition){\n    e.stop(); // When event call to stop, `hi` event not call.\n  }\n  // `currentTarget` is component instance.\n  console.log(some === e.currentTarget); // true\n\n  typeof e.foo; // number\n  typeof e.bar; // string\n});\nsome.on("hi", e => {\n  typeof e.foo.b; // boolean\n});\n// If you want to more know event design. You can see article.\n// https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F\n')),(0,r.yg)("h3",{id:"once"},"once"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\uc774\ubca4\ud2b8\uac00 \ud55c\ubc88\ub9cc \uc2e4\ud589\ub41c\ub2e4."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984 \ub610\ub294 \uc774\ubca4\ud2b8 \uc774\ub984-\ud578\ub4e4\ub7ec \uc624\ube0c\uc81d\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \ud578\ub4e4\ub7ec \ud568\uc218")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: ComponentEvent;\n}> {\n  hi() {\n    alert("hi");\n  }\n  thing() {\n    this.once("hi", this.hi);\n  }\n}\n\nvar some = new Some();\nsome.thing();\nsome.trigger(new ComponentEvent("hi"));\n// fire alert("hi");\nsome.trigger(new ComponentEvent("hi"));\n// Nothing happens\n')),(0,r.yg)("h3",{id:"hasOn"},"hasOn"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc774\ubca4\ud2b8\uac00 \ub4f1\ub85d\ub410\ub294\uc9c0 \ud655\uc778\ud55c\ub2e4."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\uc774\ubca4\ud2b8 \ub4f1\ub85d \uc5ec\ubd80")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d \uc5ec\ubd80\ub97c \ud655\uc778\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  some() {\n    this.hasOn("hi");// check hi event.\n  }\n}\n')),(0,r.yg)("h3",{id:"on"},"on"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc774\ubca4\ud2b8\ub97c \ub4f1\ub85d\ud55c\ub2e4."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984 \ub610\ub294 \uc774\ubca4\ud2b8 \uc774\ub984-\ud578\ub4e4\ub7ec \uc624\ube0c\uc81d\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"handlerToAttach"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ub4f1\ub85d\ud560 \uc774\ubca4\ud2b8\uc758 \ud578\ub4e4\ub7ec \ud568\uc218")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.on("hi",this.hi); //attach event\n  }\n}\n')),(0,r.yg)("h3",{id:"off"},"off"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub4f1\ub85d\ub41c \uc774\ubca4\ud2b8\ub97c \ud574\uc81c\ud55c\ub2e4.",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"p"},"eventName"),"\uc774 \uc8fc\uc5b4\uc9c0\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc81c\uac70\ud55c\ub2e4.",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"p"},"handlerToAttach"),"\uac00 \uc8fc\uc5b4\uc9c0\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 ",(0,r.yg)("inlineCode",{parentName:"p"},"eventName"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \ubaa8\ub4e0 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub97c \uc81c\uac70\ud55c\ub2e4."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ucef4\ud3ec\ub10c\ud2b8 \uc790\uc2e0\uc758 \uc778\uc2a4\ud134\uc2a4")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"eventName"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ud574\uc81c\ud560 \uc774\ubca4\ud2b8\uc758 \uc774\ub984")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"handlerToDetach"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\ud574\uc81c\ud560 \uc774\ubca4\ud2b8\uc758 \ud578\ub4e4\ub7ec \ud568\uc218")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.off("hi",this.hi); //detach event\n  }\n}\n')))}c.isMDXComponent=!0}}]);