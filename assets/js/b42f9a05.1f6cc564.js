"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78470],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),v=s(t),d=l,m=v["".concat(u,".").concat(d)]||v[d]||p[d]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=v;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},72360:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(67294),l=t(86010),r="tabItem_OmH5";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),l=t(67294),r=t(72389),i=t(67392),o=t(7094),u=t(12466),s=t(86010),c="tabList_uSqn",p="tabItem_LplD";function v(e){var n,t,r,v=e.lazy,d=e.block,m=e.defaultValue,g=e.values,f=e.groupId,k=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,i.l)(h,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(n=null!=m?m:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=b[0])?void 0:r.props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,o.U)(),T=E.tabGroupChoices,x=E.setTabGroupChoices,O=(0,l.useState)(N),j=O[0],w=O[1],P=[],F=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=T[f];null!=C&&C!==j&&h.some((function(e){return e.value===C}))&&w(C)}var Z=function(e){var n=e.currentTarget,t=P.indexOf(n),a=h[t].value;a!==j&&(F(n),w(a),null!=f&&x(f,a))},I=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;t=P[a]||P[0];break;case"ArrowLeft":var l=P.indexOf(e.currentTarget)-1;t=P[l]||P[P.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},k)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":j===n})}),null!=t?t:n)}))),v?(0,l.cloneElement)(b.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}function d(e){var n=(0,r.Z)();return l.createElement(v,(0,a.Z)({key:String(n)},e))}},11307:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return v},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return g}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),i=t(39960),o=t(44996),u=t(9877),s=t(72360),c=["components"],p={title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},v=void 0,d={unversionedId:"listening-to-events",id:"version-4.5.1/listening-to-events",title:"Listening to Events",description:"<Tabs",source:"@site/versioned_docs/version-4.5.1/listening-to-events.mdx",sourceDirName:".",slug:"/listening-to-events",permalink:"/egjs-flicking/docs/4.5.1/listening-to-events",draft:!1,editUrl:null,tags:[],version:"4.5.1",frontMatter:{title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},sidebar:"docs",previous:{title:"Using the Methods",permalink:"/egjs-flicking/docs/4.5.1/using-the-methods"},next:{title:"Handling errors",permalink:"/egjs-flicking/docs/4.5.1/error-handling"}},m={},g=[],f={toc:g};function k(e){var n=e.components,t=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(u.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("p",null,"You can listen to Flicking's events with ",(0,r.kt)("a",{parentName:"p",href:"api/Flicking#on"},"Flicking#on")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// If you're using a package manager\nimport { EVENTS } from \"@egjs/flicking\";\n// Or, if you're using a CDN\nconst EVENTS = Flicking.EVENTS;\n\nflicking.on(EVENTS.MOVE, evt => {\n  console.log(evt);\n})\n"))),(0,r.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("p",null,"All events are prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/react-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),(0,r.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("p",null,"All event names are renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("p",null,"All event names are renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",(0,r.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("p",null,"You can listen events of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx-flicking")," using Angular's ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ needPanelThreshold: 50, renderOnlyVisible: true }"\n  (needPanel)="onNeedPanel($event)">\n  {{ ... }}\n</ngx-flicking>\n'))),(0,r.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,r.kt)("p",null,"All events are prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"on-"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),"d."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/preact-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),(0,r.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"on:eventName")," syntax to listen Flicking events.",(0,r.kt)("br",{parentName:"p"}),"\n","All event properties are available in the event's ",(0,r.kt)("inlineCode",{parentName:"p"},"detail")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n<\/script>\n\n<Flicking on:ready={e => {\n  console.log("READY!");\n}} on:move={e => {\n  // Event properties are placed in "detail"\n  console.log(e.detail);\n}}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n')))),(0,r.kt)("p",null,"See all available events at ",(0,r.kt)(i.Z,{to:(0,o.Z)("docs/api/Flicking#events"),mdxType:"Link"},"Flicking#events"),"."))}k.isMDXComponent=!0}}]);