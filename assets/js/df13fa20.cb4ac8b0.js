"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65368],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=l,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return a?n.createElement(g,s(s({ref:t},o),{},{components:a})):n.createElement(g,s({ref:t},o))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),l=a(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(87462),l=a(67294),r=a(86010),s=a(12466),i=a(16550),u=a(91980),c=a(67392),o=a(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function d(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[u,c]=g({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,o.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=u??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var k=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=o.indexOf(t),n=c[a].value;n!==i&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>o.push(e),onKeyDown:m,onClick:d},s,{className:(0,r.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",v.tabList)},l.createElement(b,(0,n.Z)({},e,t)),l.createElement(h,(0,n.Z)({},e,t)))}function j(e){const t=(0,k.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},56671:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),l=(a(67294),a(3905)),r=a(74866),s=a(85162);const i={title:"Installation",id:"installation",slug:"/",custom_edit_url:null,sidebar_position:1},u=void 0,c={unversionedId:"tutorials/installation",id:"version-4.6.3/tutorials/installation",title:"Installation",description:"Using the package managers (recommended)",source:"@site/versioned_docs/version-4.6.3/tutorials/installation.mdx",sourceDirName:"tutorials",slug:"/",permalink:"/egjs-flicking/docs/4.6.3/",draft:!1,editUrl:null,tags:[],version:"4.6.3",sidebarPosition:1,frontMatter:{title:"Installation",id:"installation",slug:"/",custom_edit_url:null,sidebar_position:1},sidebar:"docs",next:{title:"Quick Start",permalink:"/egjs-flicking/docs/4.6.3/quick-start"}},o={},p=[{value:"Using the package managers (recommended)",id:"using-the-package-managers-recommended",level:2},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"CDN Links",id:"cdn-links",level:2},{value:"packaged(with dependencies)",id:"packagedwith-dependencies",level:3},{value:"CSS files",id:"css-files",level:3}],d={toc:p},m="wrapper";function g(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"using-the-package-managers-recommended"},"Using the package managers (recommended)"),(0,l.kt)("p",null,"You can easily install Flicking with package managers like ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," or ",(0,l.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"yarn")),(0,l.kt)("h3",{id:"npm"},"npm"),(0,l.kt)(r.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/flicking\n"))),(0,l.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/react-flicking\n"))),(0,l.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue-flicking\n"))),(0,l.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue3-flicking\n"))),(0,l.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/ngx-flicking\n"))),(0,l.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/preact-flicking\n"))),(0,l.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/svelte-flicking\n")))),(0,l.kt)("h3",{id:"yarn"},"yarn"),(0,l.kt)(r.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/flicking\n"))),(0,l.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/react-flicking\n"))),(0,l.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue-flicking\n"))),(0,l.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue3-flicking\n"))),(0,l.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/ngx-flicking\n"))),(0,l.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/preact-flicking\n"))),(0,l.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/svelte-flicking\n")))),(0,l.kt)("h2",{id:"cdn-links"},"CDN Links"),(0,l.kt)("h3",{id:"packagedwith-dependencies"},"packaged(with dependencies)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n\x3c!-- cdnjs --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n')),(0,l.kt)("h3",{id:"css-files"},"CSS files"),(0,l.kt)("p",null,"Choose ",(0,l.kt)("inlineCode",{parentName:"p"},"flicking-inline.css")," if you have to support IE9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- unpkg --\x3e\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking-inline.css" crossorigin="anonymous" />\n\x3c!-- cdnjs --\x3e\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.css" crossorigin="anonymous" />\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking-inline.css" crossorigin="anonymous" />\n')))}g.isMDXComponent=!0}}]);