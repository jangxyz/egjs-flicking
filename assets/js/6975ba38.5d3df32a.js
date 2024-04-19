"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79818],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,y=g["".concat(c,".").concat(d)]||g[d]||s[d]||i;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={custom_edit_url:null},l=void 0,o={unversionedId:"api/Plugin",id:"version-4.9.3/api/Plugin",title:"Plugin",description:"Flicking Plugin",source:"@site/versioned_docs/version-4.9.3/api/Plugin.mdx",sourceDirName:"api",slug:"/api/Plugin",permalink:"/egjs-flicking/docs/4.9.3/api/Plugin",draft:!1,editUrl:null,tags:[],version:"4.9.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"StrictControlOptions",permalink:"/egjs-flicking/docs/4.9.3/api/StrictControlOptions"},next:{title:"Status",permalink:"/egjs-flicking/docs/4.9.3/api/Status"}},c={},p=[],u={toc:p},g="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"interface Plugin\n")),(0,a.yg)("div",null),(0,a.yg)("p",null,"Flicking Plugin"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,a.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"undefined"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"Initialize the plugin")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"undefined"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"Destroy plugin and detach all events binded")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"undefined"),(0,a.yg)("td",{parentName:"tr",align:"center"}),(0,a.yg)("td",{parentName:"tr",align:"center"},"Update plugin to match current Flicking's status")))))}s.isMDXComponent=!0}}]);