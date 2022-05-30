"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73665],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?t.createElement(g,a(a({ref:r},p),{},{components:n})):t.createElement(g,a({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7930:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Handling errors",id:"error-handling",slug:"/error-handling",custom_edit_url:null},c=void 0,s={unversionedId:"error-handling",id:"version-4.0.0/error-handling",title:"Handling errors",description:"All known Flicking errors are thrown as FlickingError with a code property set as listed on the ERRORCODE.",source:"@site/versioned_docs/version-4.0.0/error-handling.mdx",sourceDirName:".",slug:"/error-handling",permalink:"/egjs-flicking/ko/docs/4.0.0/error-handling",draft:!1,editUrl:null,tags:[],version:"4.0.0",frontMatter:{title:"Handling errors",id:"error-handling",slug:"/error-handling",custom_edit_url:null},sidebar:"version-4.0.0/docs",previous:{title:"Listening to Events",permalink:"/egjs-flicking/ko/docs/4.0.0/listening-to-events"},next:{title:"Polyfills",permalink:"/egjs-flicking/ko/docs/4.0.0/polyfills"}},p={},u=[],f={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All known Flicking errors are thrown as ",(0,i.kt)("a",{parentName:"p",href:"api/FlickingError"},"FlickingError")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," property set as listed on the ",(0,i.kt)("a",{parentName:"p",href:"api/ERROR_CODE"},"ERROR_CODE"),"."),(0,i.kt)("p",null,"A common use-case for this is when you're calling a ",(0,i.kt)("a",{parentName:"p",href:"api/Flicking#prev"},"prev")," / ",(0,i.kt)("a",{parentName:"p",href:"api/Flicking#next"},"next")," / ",(0,i.kt)("a",{parentName:"p",href:"api/Flicking#moveTo"},"moveTo")," of Flicking which can throw an error when Flicking's already animating."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { FlickingError, ERROR_CODE } from "@egjs/flicking";\n\ntry {\n  await flicking.next();\n} catch (err) {\n  if (err instanceof FlickingError) {\n    if (err.code === ERROR_CODE.ANIMATION_ALREADY_PLAYING) {\n      console.error("Animation is already playing!");\n    } else if (err.code === ERROR_CODE.ANIMATION_INTERRUPTED) {\n      console.error("Animation is interrupted by user.");\n    }\n  }\n}\n')),(0,i.kt)("p",null,"See all possible error codes at ",(0,i.kt)("a",{parentName:"p",href:"api/ERROR_CODE"},"ERROR_CODE"),"."))}d.isMDXComponent=!0}}]);