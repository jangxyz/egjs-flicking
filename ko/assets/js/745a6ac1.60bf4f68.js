"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60143],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,y=u["".concat(c,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={custom_edit_url:null},l=void 0,i={unversionedId:"api/ControlParams",id:"version-4.9.3/api/ControlParams",title:"ControlParams",description:"readonly",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.9.3/api/ControlParams.mdx",sourceDirName:"api",slug:"/api/ControlParams",permalink:"/egjs-flicking/ko/docs/4.9.3/api/ControlParams",draft:!1,editUrl:null,tags:[],version:"4.9.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Status",permalink:"/egjs-flicking/ko/docs/4.9.3/api/Status"},next:{title:"EVENT",permalink:"/egjs-flicking/ko/docs/4.9.3/api/EVENT"}},c={},p=[],s={toc:p},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"interface ControlParams\n")),(0,a.yg)("div",null,(0,a.yg)("span",{className:"badge badge--warning"},"readonly")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"AxesController"},"AxesController"),"\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uae30 \uc704\ud55c \ud604\uc7ac Camera \ud328\ub7ec\ubbf8\ud130\ub4e4"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"range"),(0,a.yg)("td",{parentName:"tr",align:"center"},"object"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Camera\uac00 \uc774\ub3d9 \uac00\ub2a5\ud55c \ubc94\uc704")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"position"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"\ud604\uc7ac \uce74\uba54\ub77c \uc88c\ud45c")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"circular"),(0,a.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("a",{parentName:"td",href:"Flicking#circular"},"circular"),"\uc635\uc158 \ud65c\uc131\ud654 \uc5ec\ubd80")))))}g.isMDXComponent=!0}}]);