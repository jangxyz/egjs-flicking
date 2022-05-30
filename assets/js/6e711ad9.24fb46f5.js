"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19478],{3905:function(e,n,a){a.d(n,{Zo:function(){return o},kt:function(){return d}});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=t.createContext({}),c=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},o=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=l,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return a?t.createElement(g,i(i({ref:n},o),{},{components:a})):t.createElement(g,i({ref:n},o))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72360:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(67294),l=a(86010),r="tabItem_OmH5";function i(e){var n=e.children,a=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},n)}},9877:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(87462),l=a(67294),r=a(72389),i=a(67392),s=a(7094),u=a(12466),c=a(86010),o="tabList_uSqn",p="tabItem_LplD";function m(e){var n,a,r,m=e.lazy,d=e.block,g=e.defaultValue,f=e.values,v=e.groupId,k=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.l)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var j=null===g?g:null!=(n=null!=g?g:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(r=b[0])?void 0:r.props.value;if(null!==j&&!h.some((function(e){return e.value===j})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+j+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),x=T.tabGroupChoices,N=T.setTabGroupChoices,w=(0,l.useState)(j),O=w[0],I=w[1],Z=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=x[v];null!=C&&C!==O&&h.some((function(e){return e.value===C}))&&I(C)}var S=function(e){var n=e.currentTarget,a=Z.indexOf(n),t=h[a].value;t!==O&&(E(n),I(t),null!=v&&N(v,t))},D=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=Z.indexOf(e.currentTarget)+1;a=Z[t]||Z[0];break;case"ArrowLeft":var l=Z.indexOf(e.currentTarget)-1;a=Z[l]||Z[Z.length-1]}null==(n=a)||n.focus()};return l.createElement("div",{className:(0,c.Z)("tabs-container",o)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},k)},h.map((function(e){var n=e.value,a=e.label,r=e.attributes;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return Z.push(e)},onKeyDown:D,onFocus:S,onClick:S},r,{className:(0,c.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":O===n})}),null!=a?a:n)}))),m?(0,l.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,r.Z)();return l.createElement(m,(0,t.Z)({key:String(n)},e))}},27127:function(e,n,a){a.r(n),a.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var t=a(87462),l=a(63366),r=(a(67294),a(3905)),i=a(9877),s=a(72360),u=["components"],c={title:"Installation",id:"installation",slug:"/",custom_edit_url:null},o=void 0,p={unversionedId:"installation",id:"version-4.5.1/installation",title:"Installation",description:"Using the package managers (recommended)",source:"@site/versioned_docs/version-4.5.1/installation.mdx",sourceDirName:".",slug:"/",permalink:"/egjs-flicking/docs/4.5.1/",draft:!1,editUrl:null,tags:[],version:"4.5.1",frontMatter:{title:"Installation",id:"installation",slug:"/",custom_edit_url:null},sidebar:"docs",next:{title:"Quick Start",permalink:"/egjs-flicking/docs/4.5.1/quick-start"}},m={},d=[{value:"Using the package managers (recommended)",id:"using-the-package-managers-recommended",level:2},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"CDN Links",id:"cdn-links",level:2},{value:"packaged(with dependencies)",id:"packagedwith-dependencies",level:3},{value:"CSS files",id:"css-files",level:3}],g={toc:d};function f(e){var n=e.components,a=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"using-the-package-managers-recommended"},"Using the package managers (recommended)"),(0,r.kt)("p",null,"You can easily install Flicking with package managers like ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," or ",(0,r.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"yarn")),(0,r.kt)("h3",{id:"npm"},"npm"),(0,r.kt)(i.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/flicking\n"))),(0,r.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/react-flicking\n"))),(0,r.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue-flicking\n"))),(0,r.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue3-flicking\n"))),(0,r.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/ngx-flicking\n"))),(0,r.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/preact-flicking\n"))),(0,r.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/svelte-flicking\n")))),(0,r.kt)("h3",{id:"yarn"},"yarn"),(0,r.kt)(i.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/flicking\n"))),(0,r.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/react-flicking\n"))),(0,r.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue-flicking\n"))),(0,r.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue3-flicking\n"))),(0,r.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/ngx-flicking\n"))),(0,r.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/preact-flicking\n"))),(0,r.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/svelte-flicking\n")))),(0,r.kt)("h2",{id:"cdn-links"},"CDN Links"),(0,r.kt)("h3",{id:"packagedwith-dependencies"},"packaged(with dependencies)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n\x3c!-- cdnjs --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n')),(0,r.kt)("h3",{id:"css-files"},"CSS files"),(0,r.kt)("p",null,"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"flicking-inline.css")," if you have to support IE9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- unpkg --\x3e\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking-inline.css" crossorigin="anonymous" />\n\x3c!-- cdnjs --\x3e\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.css" crossorigin="anonymous" />\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking-inline.css" crossorigin="anonymous" />\n')))}f.isMDXComponent=!0}}]);