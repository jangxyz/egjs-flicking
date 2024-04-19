"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18681],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>s});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=y(e,["components","mdxType","originalType","parentName"]),c=i(a),d=r,s=c["".concat(p,".").concat(d)]||c[d]||o[d]||l;return a?n.createElement(s,g(g({ref:t},m),{},{components:a})):n.createElement(s,g({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=d;var y={};for(var p in t)hasOwnProperty.call(t,p)&&(y[p]=t[p]);y.originalType=e,y[c]="string"==typeof e?e:r,g[1]=y;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},50613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>o,frontMatter:()=>l,metadata:()=>y,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={custom_edit_url:null},g=void 0,y={unversionedId:"api/Renderer",id:"version-4.0.0/api/Renderer",title:"Renderer",description:"Panel\uacfc \uadf8 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uad00\ub9ac\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.0.0/api/Renderer.mdx",sourceDirName:"api",slug:"/api/Renderer",permalink:"/egjs-flicking/ko/docs/4.0.0/api/Renderer",draft:!1,editUrl:null,tags:[],version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"ExternalRenderer",permalink:"/egjs-flicking/ko/docs/4.0.0/api/ExternalRenderer"},next:{title:"VanillaRenderer",permalink:"/egjs-flicking/ko/docs/4.0.0/api/VanillaRenderer"}},p={},i=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"panels",id:"panels",level:3},{value:"panelCount",id:"panelCount",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"render",id:"render",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"getPanel",id:"getPanel",level:3},{value:"updatePanelSize",id:"updatePanelSize",level:3},{value:"batchInsert",id:"batchInsert",level:3},{value:"batchRemove",id:"batchRemove",level:3}],m={toc:i},c="wrapper";function o(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class Renderer\n")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),"\uacfc \uadf8 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uad00\ub9ac\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#panels"},"panels"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#panelCount"},"panelCount"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#align"},"align")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#render"},"render"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#getPanel"},"getPanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updatePanelSize"},"updatePanelSize"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#batchInsert"},"batchInsert"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#batchRemove"},"batchRemove")))),(0,r.yg)("h2",{id:"constructor"},"Constructor"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"new Renderer(options, options.align)\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uc624\ube0c\uc81d\ud2b8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options.align"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc804\uccb4 \ud328\ub110\uc5d0 \uc801\uc6a9\ub420 ",(0,r.yg)("a",{parentName:"td",href:"Flicking#align"},"align")," \uac12")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"panels"},"panels"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"\uc804\uccb4 \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Array","<",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,r.yg)("h3",{id:"panelCount"},"panelCount"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"\uc804\uccb4 \ud328\ub110\uc758 \uac1c\uc218"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"align"},"align"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc5d0 \uacf5\ud1b5\uc801\uc73c\ub85c \uc801\uc6a9\ud560 ",(0,r.yg)("a",{parentName:"p",href:"Panel#align"},"align")," \uac12"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"render"},"render"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\ub4e4\uc744 \uce74\uba54\ub77c \uc5d8\ub9ac\uba3c\ud2b8 \ub0b4\ubd80\uc5d0 \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Renderer\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Flicking\uc758 \uc778\uc2a4\ud134\uc2a4")))),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Renderer\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"getPanel"},"getPanel"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 \ud328\ub110\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,r.yg)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \ud574\ub2f9\ud558\ub294 \ud328\ub110")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,r.yg)("h3",{id:"updatePanelSize"},"updatePanelSize"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\ubaa8\ub4e0 \ud328\ub110\uc758 \ud06c\uae30\ub97c \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"batchInsert"},"batchInsert"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc5d0 \uc0c8\ub85c\uc6b4 \ud328\ub110\ub4e4\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4",(0,r.yg)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \uc778\ub371\uc2a4\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc778\ub371\uc2a4\ub97c \uac00\uc9c4 \uae30\uc874 \ud328\ub110\ub4e4\uc740 \ucd94\uac00\ud55c \ud328\ub110\uc758 \uac1c\uc218\ub9cc\ud07c \uc778\ub371\uc2a4\uac00 \uc99d\uac00\ud569\ub2c8\ub2e4."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Array","<",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\ucd94\uac00\ub41c \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc0c8\ub85c \ud328\ub110\ub4e4\uc744 \ucd94\uac00\ud560 \uc778\ub371\uc2a4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"elements"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Array","<","any",">"),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc5d8\ub9ac\uba3c\ud2b8\uc758 \ubc30\uc5f4 \ud639\uc740 \ud504\ub808\uc784\uc6cc\ud06c\uc5d0\uc11c \uc5d8\ub9ac\uba3c\ud2b8\ub97c \ud3ec\ud568\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc758 \ubc30\uc5f4")))),(0,r.yg)("h3",{id:"batchRemove"},"batchRemove"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"\uc8fc\uc5b4\uc9c4 \uc778\ub371\uc2a4\uc758 \ud328\ub110\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4",(0,r.yg)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \uc778\ub371\uc2a4\ubcf4\ub2e4 \ud070 \uc778\ub371\uc2a4\ub97c \uac00\uc9c4 \uae30\uc874 \ud328\ub110\ub4e4\uc740 \uc81c\uac70\ud55c \ud328\ub110\uc758 \uac1c\uc218\ub9cc\ud07c \uc778\ub371\uc2a4\uac00 \uac10\uc18c\ud569\ub2c8\ub2e4"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),"[]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\uc81c\uac70\ub41c \ud328\ub110\ub4e4\uc758 \ubc30\uc5f4")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"\uc81c\uac70\ud560 \ud328\ub110\uc758 \uc778\ub371\uc2a4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"deleteCount"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"index")," \uc774\ud6c4\ub85c \uc81c\uac70\ud560 \ud328\ub110\uc758 \uac1c\uc218")))))}o.isMDXComponent=!0}}]);