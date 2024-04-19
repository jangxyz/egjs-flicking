"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96127],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,m=s["".concat(p,".").concat(d)]||s[d]||y[d]||i;return n?r.createElement(m,l(l({ref:t},g),{},{components:n})):r.createElement(m,l({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={custom_edit_url:null},l=void 0,o={unversionedId:"api/Status",id:"version-4.8.1/api/Status",title:"Status",description:"Status",source:"@site/versioned_docs/version-4.8.1/api/Status.mdx",sourceDirName:"api",slug:"/api/Status",permalink:"/egjs-flicking/docs/4.8.1/api/Status",draft:!1,editUrl:null,tags:[],version:"4.8.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Plugin",permalink:"/egjs-flicking/docs/4.8.1/api/Plugin"},next:{title:"ControlParams",permalink:"/egjs-flicking/docs/4.8.1/api/ControlParams"}},p={},c=[{value:"Status",id:"Status",level:3}],g={toc:c},s="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"interface Status\n")),(0,a.yg)("h3",{id:"Status"},"Status"),(0,a.yg)("div",{className:"bulma-tags"}),(0,a.yg)("p",null,"Flicking Status returned by ",(0,a.yg)("a",{parentName:"p",href:"Flicking#getStatus"},"Flicking#getStatus")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"index"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"An index of the active panel")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"position"),(0,a.yg)("td",{parentName:"tr",align:"center"},"object"),(0,a.yg)("td",{parentName:"tr",align:"center"},"A info to restore camera ",(0,a.yg)("a",{parentName:"td",href:"Camera#position"},"position"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"position.panel"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"An index of the panel camera is located at")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"position.progressInPanel"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"A progress of the camera position inside the panel")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"visibleOffset"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"center"},"An offset to visible panel's original index. This value is available only when ",(0,a.yg)("inlineCode",{parentName:"td"},"visiblePanelsOnly")," is ",(0,a.yg)("inlineCode",{parentName:"td"},"true"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"panels"),(0,a.yg)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,a.yg)("td",{parentName:"tr",align:"center"},"A data array of panels")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"panels.index"),(0,a.yg)("td",{parentName:"tr",align:"center"},"index"),(0,a.yg)("td",{parentName:"tr",align:"center"},"An index of the panel")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"panels.html"),(0,a.yg)("td",{parentName:"tr",align:"center"},"string ","|"," undefined"),(0,a.yg)("td",{parentName:"tr",align:"center"},"An ",(0,a.yg)("inlineCode",{parentName:"td"},"outerHTML")," of the panel element")))))}y.isMDXComponent=!0}}]);