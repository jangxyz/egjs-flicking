"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={custom_edit_url:null},i=void 0,l={unversionedId:"api/AnchorPoint",id:"version-4.8.1/api/AnchorPoint",title:"AnchorPoint",description:"\uce74\uba54\ub77c\uac00 \uc815\uc9c0\ud574\uc57c\ud558\ub294 \uc2e4\uc81c \uc704\uce58\ub97c \ub2f4\uace0 \uc788\ub294 \ub370\uc774\ud130 \ucef4\ud3ec\ub10c\ud2b8",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.8.1/api/AnchorPoint.mdx",sourceDirName:"api",slug:"/api/AnchorPoint",permalink:"/egjs-flicking/ko/docs/4.8.1/api/AnchorPoint",draft:!1,editUrl:null,tags:[],version:"4.8.1",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"State",permalink:"/egjs-flicking/ko/docs/4.8.1/api/State"},next:{title:"FlickingError",permalink:"/egjs-flicking/ko/docs/4.8.1/api/FlickingError"}},p={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"index",id:"index",level:3},{value:"position",id:"position",level:3},{value:"panel",id:"panel",level:3}],s={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class AnchorPoint\n")),(0,a.kt)("p",null,"\uce74\uba54\ub77c\uac00 \uc815\uc9c0\ud574\uc57c\ud558\ub294 \uc2e4\uc81c \uc704\uce58\ub97c \ub2f4\uace0 \uc788\ub294 \ub370\uc774\ud130 \ucef4\ud3ec\ub10c\ud2b8"),(0,a.kt)("div",{className:"container"},(0,a.kt)("div",{className:"row mb-2"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("strong",null,"Properties"))),(0,a.kt)("div",{className:"row"},(0,a.kt)("div",{className:"col col--12"},(0,a.kt)("a",{href:"#index"},"index"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#position"},"position"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#panel"},"panel")))),(0,a.kt)("h2",{id:"constructor"},"Constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"new AnchorPoint(options, options.index, options.position, options.panel)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,a.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options"),(0,a.kt)("td",{parentName:"tr",align:"center"},"object"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uac1d\uccb4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options.index"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"AnchorPoint\uc758 \uc778\ub371\uc2a4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options.position"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"AnchorPoint\uc758 \uc88c\ud45c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"options.panel"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"Panel"},"Panel")),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"AnchorPoint\uac00 \ucc38\uc870\ud558\uace0 \uc788\ub294 ",(0,a.kt)("a",{parentName:"td",href:"Panel"},"Panel"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"index"},"index"),(0,a.kt)("div",{className:"bulma-tags"},(0,a.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.kt)("p",null,"AnchorPoint\uc758 \uc778\ub371\uc2a4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": number"),(0,a.kt)("h3",{id:"position"},"position"),(0,a.kt)("div",{className:"bulma-tags"},(0,a.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.kt)("p",null,"AnchorPoint\uc758 \uc88c\ud45c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": number"),(0,a.kt)("h3",{id:"panel"},"panel"),(0,a.kt)("div",{className:"bulma-tags"},(0,a.kt)("span",{className:"bulma-tag is-warning"},"readonly")),(0,a.kt)("p",null,"AnchorPoint\uac00 \ucc38\uc870\ud558\uace0 \uc788\ub294 ",(0,a.kt)("a",{parentName:"p",href:"Panel"},"Panel")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"Panel"},"Panel")))}d.isMDXComponent=!0}}]);