"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76950],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(v,o(o({ref:n},c),{},{components:t})):a.createElement(v,o({ref:n},c))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(86010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>E});var a=t(87462),r=t(67294),l=t(86010),o=t(12466),i=t(16550),u=t(91980),s=t(67392),c=t(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,s]=v({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var f=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:t,selectedValue:i,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==i&&(p(n),u(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function h(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function y(e){const n=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(k,(0,a.Z)({},e,n)),r.createElement(h,(0,a.Z)({},e,n)))}function E(e){const n=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(n)},e))}},11996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=t(87462),r=(t(67294),t(3905)),l=t(39960),o=t(44996),i=t(74866),u=t(85162);const s={title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},c=void 0,p={unversionedId:"listening-to-events",id:"version-4.1.1/listening-to-events",title:"Listening to Events",description:"<Tabs",source:"@site/versioned_docs/version-4.1.1/listening-to-events.mdx",sourceDirName:".",slug:"/listening-to-events",permalink:"/egjs-flicking/docs/4.1.1/listening-to-events",draft:!1,editUrl:null,tags:[],version:"4.1.1",frontMatter:{title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},sidebar:"version-4.1.1/docs",previous:{title:"Using the Methods",permalink:"/egjs-flicking/docs/4.1.1/using-the-methods"},next:{title:"Handling errors",permalink:"/egjs-flicking/docs/4.1.1/error-handling"}},d={},m=[],v={toc:m},g="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"}],mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("p",null,"You can listen to Flicking's events with ",(0,r.kt)("a",{parentName:"p",href:"api/Flicking#on"},"Flicking#on")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// If you're using a package manager\nimport { EVENTS } from \"@egjs/flicking\";\n// Or, if you're using a CDN\nconst EVENTS = Flicking.EVENTS;\n\nflicking.on(EVENTS.MOVE, evt => {\n  console.log(evt);\n})\n"))),(0,r.kt)(u.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("p",null,"All events are prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/react-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),(0,r.kt)(u.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("p",null,"All event names are renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(u.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("p",null,"All event names are renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(u.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("p",null,"You can listen events of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx-flicking")," using Angular's ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ needPanelThreshold: 50, renderOnlyVisible: true }"\n  (needPanel)="onNeedPanel($event)">\n  {{ ... }}\n</ngx-flicking>\n'))),(0,r.kt)(u.Z,{value:"preact",mdxType:"TabItem"},(0,r.kt)("p",null,"All events are prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/preact-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n')))),(0,r.kt)("p",null,"See all available events at ",(0,r.kt)(l.Z,{to:(0,o.Z)("docs/api/Flicking#events"),mdxType:"Link"},"Flicking#events"),"."))}f.isMDXComponent=!0}}]);