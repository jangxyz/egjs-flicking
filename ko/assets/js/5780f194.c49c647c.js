"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2962],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71491:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={custom_edit_url:null},c=void 0,u={unversionedId:"api/Plugin",id:"version-4.7.0/api/Plugin",title:"Plugin",description:"Plugin",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.7.0/api/Plugin.mdx",sourceDirName:"api",slug:"/api/Plugin",permalink:"/egjs-flicking/ko/docs/api/Plugin",editUrl:null,tags:[],version:"4.7.0",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"StrictControlOptions",permalink:"/egjs-flicking/ko/docs/api/StrictControlOptions"},next:{title:"Status",permalink:"/egjs-flicking/ko/docs/api/Status"}},p={},s=[{value:"Plugin",id:"Plugin",level:3}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Plugin\n")),(0,i.kt)("h3",{id:"Plugin"},"Plugin"),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("p",null,"Flicking \ud50c\ub7ec\uadf8\uc778"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"undefined"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ud50c\ub7ec\uadf8\uc778\uc744 \ucd08\uae30\ud654\ud569\ub2c8\ub2e4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"undefined"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ud50c\ub7ec\uadf8\uc778\uc744 \uc81c\uac70\ud558\uace0 \ubd80\ucc29\ub41c \ubaa8\ub4e0 \uc774\ubca4\ud2b8\ub4e4\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"undefined"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ud604\uc7ac Flicking\uc758 \uc0c1\ud0dc\uc5d0 \ub300\uc751\ud558\ub3c4\ub85d \ud50c\ub7ec\uadf8\uc778\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4.")))))}f.isMDXComponent=!0}}]);