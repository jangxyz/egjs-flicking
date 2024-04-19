"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16592],{15680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>f});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45888:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(58168),a=(t(96540),t(15680));const o={custom_edit_url:null},i=void 0,l={unversionedId:"api/CircularCameraMode",id:"version-4.7.3/api/CircularCameraMode",title:"CircularCameraMode",description:"A Camera mode that connects the last panel and the first panel, enabling continuous loop",source:"@site/versioned_docs/version-4.7.3/api/CircularCameraMode.mdx",sourceDirName:"api",slug:"/api/CircularCameraMode",permalink:"/egjs-flicking/docs/4.7.3/api/CircularCameraMode",draft:!1,editUrl:null,tags:[],version:"4.7.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"CameraMode",permalink:"/egjs-flicking/docs/4.7.3/api/CameraMode"},next:{title:"AxesController",permalink:"/egjs-flicking/docs/4.7.3/api/AxesController"}},c={},p=[],s={toc:p},u="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"class CircularCameraMode extends CameraMode\n")),(0,a.yg)("p",null,"A ",(0,a.yg)("a",{parentName:"p",href:"Camera"},"Camera")," mode that connects the last panel and the first panel, enabling continuous loop"))}m.isMDXComponent=!0}}]);