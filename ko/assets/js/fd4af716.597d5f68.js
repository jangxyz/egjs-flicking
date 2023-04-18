"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),s=n(91980),c=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,c]=f({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),k=(()=>{const e=s??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,l]),tabValues:l}}var k=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(p(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function x(e){const t=(0,k.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},11112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),l=n(39960),i=n(44996),o=n(74866),s=n(85162);const c={title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null,sidebar_position:3},u=void 0,p={unversionedId:"tutorials/using-the-methods",id:"version-4.8.1/tutorials/using-the-methods",title:"Using the Methods",description:"<Tabs",source:"@site/versioned_docs/version-4.8.1/tutorials/using-the-methods.mdx",sourceDirName:"tutorials",slug:"/using-the-methods",permalink:"/egjs-flicking/ko/docs/4.8.1/using-the-methods",draft:!1,editUrl:null,tags:[],version:"4.8.1",sidebarPosition:3,frontMatter:{title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null,sidebar_position:3},sidebar:"docs",previous:{title:"Quick Start",permalink:"/egjs-flicking/ko/docs/4.8.1/quick-start"},next:{title:"Listening to Events",permalink:"/egjs-flicking/ko/docs/4.8.1/listening-to-events"}},m={},d=[],f={toc:d},g="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("p",null,"You can call methods directly from the Flicking instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#el", options);\n\nflicking.next();\n'))),(0,a.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)("p",null,"You can call methods of Flicking by getting a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," of Flicking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, Component } from "react";\nimport Flicking, { FlickingError } from "@egjs/react-flicking";\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.flicking = createRef();\n    this.panels = [0, 1, 2];\n  }\n  render() {\n    return <Flicking ref={this.flicking}>\n      { this.panels.map(idx => <div className="panel" key={idx}>{idx}</div>) }\n    </Flicking>;\n  }\n  async moveToNextPanel() {\n    try {\n      await this.flicking.next();\n    } catch (e) {\n      console.log(e instanceof FlickingError); // true\n      console.log(e.code);\n    }\n  }\n}\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,a.kt)(s.Z,{value:"vue",mdxType:"TabItem"},(0,a.kt)("p",null,"You can access instance of Flicking component with the ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),(0,a.kt)("p",null,"Then call methods of it like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),(0,a.kt)(s.Z,{value:"vue3",mdxType:"TabItem"},(0,a.kt)("p",null,"You can access instance of Flicking component with the ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),(0,a.kt)("p",null,"Then call methods of it like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),(0,a.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)("p",null,"There're few ways to interact with child component in Angular.",(0,a.kt)("br",{parentName:"p"}),"\n","See ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Flicking."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'@Component({\n  selector: \'flicking-parent\',\n  template: `\n    <button (click)="flick.prev()">Prev</button>\n    <button (click)="flick.next()">Next</button>\n    <ngx-flicking #flick></ngx-flicking>\n  `\n})\nexport class FlickingParent { }\n'))),(0,a.kt)(s.Z,{value:"preact",mdxType:"TabItem"},(0,a.kt)("p",null,"You can call methods of Flicking by getting a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," of Flicking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, render } from "preact";\nimport Flicking, { FlickingError } from "@egjs/preact-flicking";\n\nconst ref = createRef();\nrender(<Flicking ref={ref}>{...}</Flicking>, dom);\n\nconst flicking = ref.current;\nflicking.next();\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,a.kt)(s.Z,{value:"svelte",mdxType:"TabItem"},(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/bind-this"},"bind:this")," syntax of svelte to get the reference of Flicking."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n\n  let flicking: Flicking;\n<\/script>\n\n<Flicking bind:this={flicking}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n<button on:click{() => { flicking.next(); }} />\n')))),(0,a.kt)("p",null,"See all available methods at our ",(0,a.kt)(l.Z,{to:(0,i.Z)("docs/api/Flicking#methods"),mdxType:"Link"},"API")," page."))}k.isMDXComponent=!0}}]);