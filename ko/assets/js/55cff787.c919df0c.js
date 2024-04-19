"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34080],{15680:(e,n,a)=>{a.d(n,{xA:()=>p,yg:()=>m});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return a?t.createElement(m,r(r({ref:n},p),{},{components:a})):t.createElement(m,r({ref:n},p))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19365:(e,n,a)=>{a.d(n,{A:()=>r});var t=a(96540),i=a(20053);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:a,className:r}=e;return t.createElement("div",{role:"tabpanel",className:(0,i.A)(l.tabItem,r),hidden:a},n)}},11470:(e,n,a)=>{a.d(n,{A:()=>b});var t=a(58168),i=a(96540),l=a(20053),r=a(23104),o=a(56347),s=a(57485),c=a(31682),p=a(89466);function u(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:i}}=e;return{value:n,label:a,attributes:t,default:i}}))}function g(e){const{values:n,children:a}=e;return(0,i.useMemo)((()=>{const e=n??u(a);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function d(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function y(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,l=g(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[s,c]=m({queryString:a,groupId:t}),[u,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,p.Dv)(a);return[t,(0,i.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:t}),f=(()=>{const e=s??u;return d({value:e,tabValues:l})?e:null})();(0,i.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),y(e)}),[c,y,l]),tabValues:l}}var f=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:a,selectedValue:o,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),g=e=>{const n=e.currentTarget,a=p.indexOf(n),t=c[a].value;t!==o&&(u(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;n=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;n=p[a]??p[p.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},n)},c.map((e=>{let{value:n,label:a,attributes:r}=e;return i.createElement("li",(0,t.A)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>p.push(e),onKeyDown:d,onClick:g},r,{className:(0,l.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":o===n})}),a??n)})))}function k(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function N(e){const n=y(e);return i.createElement("div",{className:(0,l.A)("tabs-container",v.tabList)},i.createElement(h,(0,t.A)({},e,n)),i.createElement(k,(0,t.A)({},e,n)))}function b(e){const n=(0,f.A)();return i.createElement(N,(0,t.A)({key:String(n)},e))}},63113:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=a(58168),i=(a(96540),a(15680)),l=a(11470),r=a(19365);const o={title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null,sidebar_position:2},s=void 0,c={unversionedId:"tutorials/quick-start",id:"version-4.11.3/tutorials/quick-start",title:"Quick Start",description:"<Tabs",source:"@site/versioned_docs/version-4.11.3/tutorials/quick-start.mdx",sourceDirName:"tutorials",slug:"/quick-start",permalink:"/egjs-flicking/ko/docs/quick-start",draft:!1,editUrl:null,tags:[],version:"4.11.3",sidebarPosition:2,frontMatter:{title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null,sidebar_position:2},sidebar:"docs",previous:{title:"Installation",permalink:"/egjs-flicking/ko/docs/"},next:{title:"Using the Methods",permalink:"/egjs-flicking/ko/docs/using-the-methods"}},p={},u=[],g={toc:u},d="wrapper";function m(e){let{components:n,...a}=e;return(0,i.yg)(d,(0,t.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)(l.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,i.yg)(r.A,{value:"js",mdxType:"TabItem"},(0,i.yg)("p",null,"Add the script/CSS to the page."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />\n')),(0,i.yg)("p",null,"Or, you can rather import them if you're using a bundler like ",(0,i.yg)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,i.yg)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},'import Flicking from "@egjs/flicking";\nimport "@egjs/flicking/dist/flicking.css";\n')),(0,i.yg)("p",null,"Then, add some basic HTML layout of Flicking to your page."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Viewport element --\x3e\n<div id="carousel" class="flicking-viewport">\n  \x3c!-- Camera element --\x3e\n  <div class="flicking-camera">\n    \x3c!-- Panels, class names are your choice --\x3e\n    <div class="panel"></div>\n    <div class="panel"></div>\n    <div class="panel"></div>\n  </div>\n</div>\n')),(0,i.yg)("p",null,"You should add the ",(0,i.yg)("inlineCode",{parentName:"p"},"vertical")," class to viewport element, if you're making a vertical carousel."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<div class="flicking-viewport vertical">\n')),(0,i.yg)("p",null,"Then initialize Flicking instance with JavaScript after."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#carousel", {\n  align: "center",\n  circular: true,\n  bound: true,\n  renderOnlyVisible: true\n});\n'))),(0,i.yg)(r.A,{value:"react",mdxType:"TabItem"},(0,i.yg)("p",null,"You can import & use Flicking as a React Component."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import Flicking from "@egjs/react-flicking";\nimport "@egjs/react-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/react-flicking/dist/flicking-inline.css";\n\nexport default () => (\n  <Flicking\n    align="prev"\n    circular={true}\n    onMoveEnd={e => {\n      console.log(e);\n    }}>\n    <div className="panel">1</div>\n    <div className="panel">2</div>\n    <div className="panel">3</div>\n  </Flicking>\n)\n')),(0,i.yg)("h3",null,"React exclusive options"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"viewportTag: HTML tag for ",(0,i.yg)("inlineCode",{parentName:"li"},".flicking-viewport")," element. (default: ",(0,i.yg)("strong",{parentName:"li"},'"div"'),")"),(0,i.yg)("li",{parentName:"ul"},"cameraTag: HTML tag for ",(0,i.yg)("inlineCode",{parentName:"li"},".flicking-camera")," element. (default: ",(0,i.yg)("strong",{parentName:"li"},'"div"'),")"),(0,i.yg)("li",{parentName:"ul"},"cameraClass: ",(0,i.yg)("inlineCode",{parentName:"li"},"className")," for ",(0,i.yg)("inlineCode",{parentName:"li"},".flicking-camera")," element. (default: ",(0,i.yg)("strong",{parentName:"li"},'""'),")"),(0,i.yg)("li",{parentName:"ul"},"renderOnSameKey: Whether to always render children even they have the same keys (default: ",(0,i.yg)("strong",{parentName:"li"},"false"),")",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Flicking doesn't rerender when children have same length & keys for performance by default."),(0,i.yg)("li",{parentName:"ul"},"If you have to bypass this behavior, like when you have to update panel's innerHTML without changing the list of child elements, you can either set this option to ",(0,i.yg)("inlineCode",{parentName:"li"},"true"),", or you can call Flicking component's ",(0,i.yg)("inlineCode",{parentName:"li"},"forceUpdate()"),".")))),(0,i.yg)("h3",null,"Using the components as a panel"),(0,i.yg)("p",null,"If you're using the React Component as a panel, it should use a ",(0,i.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"ref forwarding")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Panel.jsx"',title:'"Panel.jsx"'},"// If you're using a functional component\nexport default React.forwardRef(({ index }, ref) => (<div ref={ref}>{ index + 1 }</div>));\n\n// Or... if you're using a class-based React component\nclass Panel extends React.Component {\n  public render() {\n    return <div ref={this.props.elRef}>{ index + 1 }</div>;\n  }\n}\n\nexport default React.forwardRef((props, ref) => <Panel elRef={ref} {...props} />);\n")),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"You can't use a React component that renders multiple elements"),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n\nconst Panels = () => <>\n  <div key={0}>0</div>\n  <div key={1}>1</div>\n  <div key={2}>2</div>\n</>;\n"))),(0,i.yg)("h3",null,"Bypassing ref forwarding"),(0,i.yg)("p",null,"If you don't like this behavior, there's a few ways to avoid it.",(0,i.yg)("br",{parentName:"p"}),"\n","The easiest way is wrapping each ",(0,i.yg)("inlineCode",{parentName:"p"},"Panel")," component with another element tag."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <div><Panel index={1} /></div>\n  <div><Panel index={2} /></div>\n  <div><Panel index={3} /></div>\n</Flicking>\n")),(0,i.yg)("p",null,"Or, you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"useFindDOMNode")," option of Flicking."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Flicking useFindDOMNode={true}>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Flicking will use ",(0,i.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#finddomnode"},"findDOMNode")," instead of using refs when the ",(0,i.yg)("inlineCode",{parentName:"p"},"useFindDOMNode")," option is enabled.",(0,i.yg)("br",{parentName:"p"}),"\n","So, if you're using the ",(0,i.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode"),", Flicking can show ",(0,i.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage"},"warning about deprecated findDOMNode usage")," at the developer console.",(0,i.yg)("br",{parentName:"p"}),"\n","And also, be aware that the component should always return a single DOM that never changes."),(0,i.yg)("blockquote",{parentName:"admonition"},(0,i.yg)("p",{parentName:"blockquote"},"Therefore findDOMNode only worked if components always return a single DOM node that never changes.")))),(0,i.yg)(r.A,{value:"vue",mdxType:"TabItem"},(0,i.yg)("p",null,"You can register Flicking either locally..."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeComponent.vue - <script>"',title:'"SomeComponent.vue',"-":!0,'<script>"':!0},'import { Flicking } from "@egjs/vue-flicking";\n\nexport default {\n  components: {\n    Flicking: Flicking\n  }\n}\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css",metastring:'title="SomeComponent.vue - <style>"',title:'"SomeComponent.vue',"-":!0,'<style>"':!0},'@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");\n// Or, if you have to support IE9\n@import url("node_modules/@egjs/vue-flicking/dist/flicking-inline.css");\n')),(0,i.yg)("p",null,"or globally."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'import Flicking from "@egjs/vue-flicking";\nimport "@egjs/vue-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/vue-flicking/dist/flicking-inline.css";\n\nVue.use(Flicking);\n')),(0,i.yg)("p",null,"Then use Flicking like the other Vue components."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<Flicking :options="{ align: \'prev\', circular: true }" @move-end="onMoveEnd">\n  <div class="panel">1</div>\n  <div class="panel">2</div>\n  <div class="panel">3</div>\n</Flicking>\n'))),(0,i.yg)(r.A,{value:"vue3",mdxType:"TabItem"},(0,i.yg)("p",null,"You can register Flicking either locally..."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeComponent.vue - <script>"',title:'"SomeComponent.vue',"-":!0,'<script>"':!0},'import Flicking from "@egjs/vue3-flicking";\n\nexport default {\n  components: {\n    Flicking: Flicking\n  }\n}\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-css",metastring:'title="SomeComponent.vue - <style>"',title:'"SomeComponent.vue',"-":!0,'<style>"':!0},'@import url("node_modules/@egjs/vue3-flicking/dist/flicking.css");\n// Or, if you have to support IE9\n@import url("node_modules/@egjs/vue3-flicking/dist/flicking-inline.css");\n')),(0,i.yg)("p",null,"or globally."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'import { createApp } from "vue"\nimport App from "./App.vue"\nimport Flicking from "../dist/flicking.esm";\nimport "@egjs/vue3-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/vue3-flicking/dist/flicking-inline.css";\n\nconst app = createApp(App);\n\napp.component("Flicking", Flicking);\napp.mount("#app");\n')),(0,i.yg)("p",null,"Then use Flicking like the other Vue components."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<Flicking :options="{ align: \'prev\', circular: true }" @move-end="onMoveEnd">\n  <div class="panel">1</div>\n  <div class="panel">2</div>\n  <div class="panel">3</div>\n</Flicking>\n')),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"You can't use a Vue component that uses fragments(a.k.a. multi-root node components) as a panel"),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n")),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="Panels.vue"',title:'"Panels.vue"'},'<template>\n  <div :key="0">0</div>\n  <div :key="1">1</div>\n  <div :key="2">2</div>\n</template>\n')))),(0,i.yg)(r.A,{value:"angular",mdxType:"TabItem"},(0,i.yg)("p",null,"You can add ",(0,i.yg)("inlineCode",{parentName:"p"},"NgxFlickingModule")," at ",(0,i.yg)("inlineCode",{parentName:"p"},"imports")," of your app module to use Flicking."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"import { NgxFlickingModule } from '@egjs/ngx-flicking';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxFlickingModule /* Add in imports */\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { } /* Your app */\n")),(0,i.yg)("p",null,"Now you can use the component ",(0,i.yg)("inlineCode",{parentName:"p"},"ngx-flicking")," and the directive ",(0,i.yg)("inlineCode",{parentName:"p"},"flicking-panel")," in your templates.",(0,i.yg)("br",{parentName:"p"}),"\n","You should add directive ",(0,i.yg)("inlineCode",{parentName:"p"},"flicking-panel")," to the panel elements you use"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ circular: true, duration: 500 }"\n  [plugins]="plugins"\n  (needPanel)="onNeedPanel($event)"\n  (moveEnd)="onMoveEnd($event)"\n>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg01.jpg" />\n  </div>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg02.jpg" />\n  </div>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg03.jpg" />\n  </div>\n</ngx-flicking>\n'))),(0,i.yg)(r.A,{value:"preact",mdxType:"TabItem"},(0,i.yg)("p",null,"You can import & use Flicking as a Preact Component."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import Flicking from "@egjs/preact-flicking";\nimport "@egjs/preact-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/preact-flicking/dist/flicking-inline.css";\n\nexport default () => (\n  <Flicking\n    align="prev"\n    circular={true}\n    onMoveEnd={e => {\n      console.log(e);\n    }}>\n    <div className="panel">1</div>\n    <div className="panel">2</div>\n    <div className="panel">3</div>\n  </Flicking>\n)\n')),(0,i.yg)("h3",null,"Using the components as a panel"),(0,i.yg)("p",null,"If you're using the React Component as a panel, it should use a ",(0,i.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"ref forwarding")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Panel.jsx"',title:'"Panel.jsx"'},"// If you're using a functional component\nexport default React.forwardRef(({ index }, ref) => (<div ref={ref}>{ index + 1 }</div>));\n\n// Or... if you're using a class-based React component\nclass Panel extends React.Component {\n  public render() {\n    return <div ref={this.props.elRef}>{ index + 1 }</div>;\n  }\n}\n\nexport default React.forwardRef((props, ref) => <Panel elRef={ref} {...props} />);\n")),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"You can't use a React component that renders multiple elements"),(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n\nconst Panels = () => <>\n  <div key={0}>0</div>\n  <div key={1}>1</div>\n  <div key={2}>2</div>\n</>;\n"))),(0,i.yg)("h3",null,"Bypassing ref forwarding"),(0,i.yg)("p",null,"If you don't like this behavior, there's a few ways to avoid it.",(0,i.yg)("br",{parentName:"p"}),"\n","The easiest way is wrapping each ",(0,i.yg)("inlineCode",{parentName:"p"},"Panel")," component with another element tag."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <div><Panel index={1} /></div>\n  <div><Panel index={2} /></div>\n  <div><Panel index={3} /></div>\n</Flicking>\n")),(0,i.yg)("p",null,"Or, you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"useFindDOMNode")," option of Flicking."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx"},"<Flicking useFindDOMNode={true}>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"Flicking will use ",(0,i.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#finddomnode"},"findDOMNode")," instead of using refs when the ",(0,i.yg)("inlineCode",{parentName:"p"},"useFindDOMNode")," option is enabled.",(0,i.yg)("br",{parentName:"p"}),"\n","So, if you're using the ",(0,i.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode"),", Flicking can show ",(0,i.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage"},"warning about deprecated findDOMNode usage")," at the developer console.",(0,i.yg)("br",{parentName:"p"}),"\n","And also, be aware that the component should always return a single DOM that never changes."),(0,i.yg)("blockquote",{parentName:"admonition"},(0,i.yg)("p",{parentName:"blockquote"},"Therefore findDOMNode only worked if components always return a single DOM node that never changes.")))),(0,i.yg)(r.A,{value:"svelte",mdxType:"TabItem"},(0,i.yg)("p",null,"You can import ",(0,i.yg)("inlineCode",{parentName:"p"},"Flicking")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"FlickingPanel"),' from the "@egjs/svelte-flicking" package.'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.svelte"',title:'"App.svelte"'},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n  // Or, if you have to support IE9\n  import "@egjs/svelte-flicking/dist/flicking-inline.css";\n<\/script>\n\n<Flicking options={{ align: "center", circular: true }}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n')))))}m.isMDXComponent=!0}}]);