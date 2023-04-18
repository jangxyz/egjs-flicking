"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),i=t(86010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l.tabItem,r),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(87462),i=t(67294),l=t(86010),r=t(12466),o=t(16550),s=t(91980),c=t(67392),p=t(50012);function u(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}function d(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,c]=g({queryString:t,groupId:a}),[u,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,p.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),f=(()=>{const e=s??u;return m({value:e,tabValues:l})?e:null})();(0,i.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),k(e)}),[c,k,l]),tabValues:l}}var f=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=c[t].value;a!==o&&(u(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>p.push(e),onKeyDown:m,onClick:d},r,{className:(0,l.Z)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":o===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=k(e);return i.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},i.createElement(h,(0,a.Z)({},e,n)),i.createElement(b,(0,a.Z)({},e,n)))}function y(e){const n=(0,f.Z)();return i.createElement(N,(0,a.Z)({key:String(n)},e))}},32377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(87462),i=(t(67294),t(3905)),l=t(74866),r=t(85162);const o={title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null,sidebar_position:2},s=void 0,c={unversionedId:"tutorials/quick-start",id:"version-4.7.3/tutorials/quick-start",title:"Quick Start",description:"<Tabs",source:"@site/versioned_docs/version-4.7.3/tutorials/quick-start.mdx",sourceDirName:"tutorials",slug:"/quick-start",permalink:"/egjs-flicking/docs/4.7.3/quick-start",draft:!1,editUrl:null,tags:[],version:"4.7.3",sidebarPosition:2,frontMatter:{title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null,sidebar_position:2},sidebar:"docs",previous:{title:"Installation",permalink:"/egjs-flicking/docs/4.7.3/"},next:{title:"Using the Methods",permalink:"/egjs-flicking/docs/4.7.3/using-the-methods"}},p={},u=[],d={toc:u},m="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("p",null,"Add the script/CSS to the page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />\n')),(0,i.kt)("p",null,"Or, you can rather import them if you're using a bundler like ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",(0,i.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import Flicking from "@egjs/flicking";\nimport "@egjs/flicking/dist/flicking.css";\n')),(0,i.kt)("p",null,"Then, add some basic HTML layout of Flicking to your page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Viewport element --\x3e\n<div id="carousel" class="flicking-viewport">\n  \x3c!-- Camera element --\x3e\n  <div class="flicking-camera">\n    \x3c!-- Panels, class names are your choice --\x3e\n    <div class="panel"></div>\n    <div class="panel"></div>\n    <div class="panel"></div>\n  </div>\n</div>\n')),(0,i.kt)("p",null,"You should add the ",(0,i.kt)("inlineCode",{parentName:"p"},"vertical")," class to viewport element, if you're making a vertical carousel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="flicking-viewport vertical">\n')),(0,i.kt)("p",null,"Then initialize Flicking instance with JavaScript after."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#carousel", {\n  align: "center",\n  circular: true,\n  bound: true,\n  renderOnlyVisible: true\n});\n'))),(0,i.kt)(r.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("p",null,"You can import & use Flicking as a React Component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import Flicking from "@egjs/react-flicking";\nimport "@egjs/react-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/react-flicking/dist/flicking-inline.css";\n\nexport default () => (\n  <Flicking\n    align="prev"\n    circular={true}\n    onMoveEnd={e => {\n      console.log(e);\n    }}>\n    <div className="panel">1</div>\n    <div className="panel">2</div>\n    <div className="panel">3</div>\n  </Flicking>\n)\n')),(0,i.kt)("h3",null,"Using the components as a panel"),(0,i.kt)("p",null,"If you're using the React Component as a panel, it should use a ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"ref forwarding")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Panel.jsx"',title:'"Panel.jsx"'},"// If you're using a functional component\nexport default React.forwardRef(({ index }, ref) => (<div ref={ref}>{ index + 1 }</div>));\n\n// Or... if you're using a class-based React component\nclass Panel extends React.Component {\n  public render() {\n    return <div ref={this.props.elRef}>{ index + 1 }</div>;\n  }\n}\n\nexport default React.forwardRef((props, ref) => <Panel elRef={ref} {...props} />);\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"You can't use a React component that renders multiple elements"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n\nconst Panels = () => <>\n  <div key={0}>0</div>\n  <div key={1}>1</div>\n  <div key={2}>2</div>\n</>;\n"))),(0,i.kt)("h3",null,"Bypassing ref forwarding"),(0,i.kt)("p",null,"If you don't like this behavior, there's a few ways to avoid it.",(0,i.kt)("br",{parentName:"p"}),"\n","The easiest way is wrapping each ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," component with another element tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <div><Panel index={1} /></div>\n  <div><Panel index={2} /></div>\n  <div><Panel index={3} /></div>\n</Flicking>\n")),(0,i.kt)("p",null,"Or, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFindDOMNode")," option of Flicking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking useFindDOMNode={true}>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Flicking will use ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#finddomnode"},"findDOMNode")," instead of using refs when the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFindDOMNode")," option is enabled.",(0,i.kt)("br",{parentName:"p"}),"\n","So, if you're using the ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode"),", Flicking can show ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage"},"warning about deprecated findDOMNode usage")," at the developer console.",(0,i.kt)("br",{parentName:"p"}),"\n","And also, be aware that the component should always return a single DOM that never changes."),(0,i.kt)("blockquote",{parentName:"admonition"},(0,i.kt)("p",{parentName:"blockquote"},"Therefore findDOMNode only worked if components always return a single DOM node that never changes.")))),(0,i.kt)(r.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("p",null,"You can register Flicking either locally..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeComponent.vue - <script>"',title:'"SomeComponent.vue',"-":!0,'<script>"':!0},'import { Flicking } from "@egjs/vue-flicking";\n\nexport default {\n  components: {\n    Flicking: Flicking\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="SomeComponent.vue - <style>"',title:'"SomeComponent.vue',"-":!0,'<style>"':!0},'@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");\n// Or, if you have to support IE9\n@import url("node_modules/@egjs/vue-flicking/dist/flicking-inline.css");\n')),(0,i.kt)("p",null,"or globally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'import Flicking from "@egjs/vue-flicking";\nimport "@egjs/vue-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/vue-flicking/dist/flicking-inline.css";\n\nVue.use(Flicking);\n')),(0,i.kt)("p",null,"Then use Flicking like the other Vue components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :options="{ align: \'prev\', circular: true }" @move-end="onMoveEnd">\n  <div class="panel">1</div>\n  <div class="panel">2</div>\n  <div class="panel">3</div>\n</Flicking>\n'))),(0,i.kt)(r.Z,{value:"vue3",mdxType:"TabItem"},(0,i.kt)("p",null,"You can register Flicking either locally..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeComponent.vue - <script>"',title:'"SomeComponent.vue',"-":!0,'<script>"':!0},'import Flicking from "@egjs/vue3-flicking";\n\nexport default {\n  components: {\n    Flicking: Flicking\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="SomeComponent.vue - <style>"',title:'"SomeComponent.vue',"-":!0,'<style>"':!0},'@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");\n// Or, if you have to support IE9\n@import url("node_modules/@egjs/vue-flicking/dist/flicking-inline.css");\n')),(0,i.kt)("p",null,"or globally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'import { createApp } from "vue"\nimport App from "./App.vue"\nimport Flicking from "../dist/flicking.esm";\nimport "@egjs/vue3-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/vue3-flicking/dist/flicking-inline.css";\n\nconst app = createApp(App);\n\napp.component("Flicking", Flicking);\napp.mount("#app");\n')),(0,i.kt)("p",null,"Then use Flicking like the other Vue components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :options="{ align: \'prev\', circular: true }" @move-end="onMoveEnd">\n  <div class="panel">1</div>\n  <div class="panel">2</div>\n  <div class="panel">3</div>\n</Flicking>\n')),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"You can't use a Vue component that uses fragments(a.k.a. multi-root node components) as a panel"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n")),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="Panels.vue"',title:'"Panels.vue"'},'<template>\n  <div :key="0">0</div>\n  <div :key="1">1</div>\n  <div :key="2">2</div>\n</template>\n')))),(0,i.kt)(r.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("p",null,"You can add ",(0,i.kt)("inlineCode",{parentName:"p"},"NgxFlickingModule")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"imports")," of your app module to use Flicking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { NgxFlickingModule } from '@egjs/ngx-flicking';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxFlickingModule /* Add in imports */\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { } /* Your app */\n")),(0,i.kt)("p",null,"Now you can use the component ",(0,i.kt)("inlineCode",{parentName:"p"},"ngx-flicking")," and the directive ",(0,i.kt)("inlineCode",{parentName:"p"},"flicking-panel")," in your templates.",(0,i.kt)("br",{parentName:"p"}),"\n","You should add directive ",(0,i.kt)("inlineCode",{parentName:"p"},"flicking-panel")," to the panel elements you use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ circular: true, duration: 500 }"\n  [plugins]="plugins"\n  (needPanel)="onNeedPanel($event)"\n  (moveEnd)="onMoveEnd($event)"\n>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg01.jpg" />\n  </div>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg02.jpg" />\n  </div>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg03.jpg" />\n  </div>\n</ngx-flicking>\n'))),(0,i.kt)(r.Z,{value:"preact",mdxType:"TabItem"},(0,i.kt)("p",null,"You can import & use Flicking as a Preact Component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import Flicking from "@egjs/preact-flicking";\nimport "@egjs/preact-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/preact-flicking/dist/flicking-inline.css";\n\nexport default () => (\n  <Flicking\n    align="prev"\n    circular={true}\n    onMoveEnd={e => {\n      console.log(e);\n    }}>\n    <div className="panel">1</div>\n    <div className="panel">2</div>\n    <div className="panel">3</div>\n  </Flicking>\n)\n')),(0,i.kt)("h3",null,"Using the components as a panel"),(0,i.kt)("p",null,"If you're using the React Component as a panel, it should use a ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"ref forwarding")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Panel.jsx"',title:'"Panel.jsx"'},"// If you're using a functional component\nexport default React.forwardRef(({ index }, ref) => (<div ref={ref}>{ index + 1 }</div>));\n\n// Or... if you're using a class-based React component\nclass Panel extends React.Component {\n  public render() {\n    return <div ref={this.props.elRef}>{ index + 1 }</div>;\n  }\n}\n\nexport default React.forwardRef((props, ref) => <Panel elRef={ref} {...props} />);\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"You can't use a React component that renders multiple elements"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n\nconst Panels = () => <>\n  <div key={0}>0</div>\n  <div key={1}>1</div>\n  <div key={2}>2</div>\n</>;\n"))),(0,i.kt)("h3",null,"Bypassing ref forwarding"),(0,i.kt)("p",null,"If you don't like this behavior, there's a few ways to avoid it.",(0,i.kt)("br",{parentName:"p"}),"\n","The easiest way is wrapping each ",(0,i.kt)("inlineCode",{parentName:"p"},"Panel")," component with another element tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <div><Panel index={1} /></div>\n  <div><Panel index={2} /></div>\n  <div><Panel index={3} /></div>\n</Flicking>\n")),(0,i.kt)("p",null,"Or, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFindDOMNode")," option of Flicking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Flicking useFindDOMNode={true}>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Flicking will use ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#finddomnode"},"findDOMNode")," instead of using refs when the ",(0,i.kt)("inlineCode",{parentName:"p"},"useFindDOMNode")," option is enabled.",(0,i.kt)("br",{parentName:"p"}),"\n","So, if you're using the ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode"),", Flicking can show ",(0,i.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage"},"warning about deprecated findDOMNode usage")," at the developer console.",(0,i.kt)("br",{parentName:"p"}),"\n","And also, be aware that the component should always return a single DOM that never changes."),(0,i.kt)("blockquote",{parentName:"admonition"},(0,i.kt)("p",{parentName:"blockquote"},"Therefore findDOMNode only worked if components always return a single DOM node that never changes.")))),(0,i.kt)(r.Z,{value:"svelte",mdxType:"TabItem"},(0,i.kt)("p",null,"You can import ",(0,i.kt)("inlineCode",{parentName:"p"},"Flicking")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FlickingPanel"),' from the "@egjs/svelte-flicking" package.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.svelte"',title:'"App.svelte"'},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n  // Or, if you have to support IE9\n  import "@egjs/svelte-flicking/dist/flicking-inline.css";\n<\/script>\n\n<Flicking options={{ align: "center", circular: true }}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n')))))}g.isMDXComponent=!0}}]);