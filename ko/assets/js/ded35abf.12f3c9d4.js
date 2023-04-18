"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55026],{85162:(e,n,t)=>{t.d(n,{Z:()=>s});var l=t(67294),a=t(86010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>h});var l=t(87462),a=t(67294),i=t(86010),s=t(12466),o=t(16550),r=t(91980),c=t(67392),u=t(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:a}}=e;return{value:n,label:t,attributes:l,default:a}}))}function $(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const l=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,r._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(l.location.search);n.set(i,e),l.replace({...l.location,search:n.toString()})}),[i,l])]}function d(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,i=$(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:i}))),[r,c]=m({queryString:t,groupId:l}),[p,d]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,i]=(0,u.Nk)(t);return[l,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:l}),f=(()=>{const e=r??p;return g({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),d(e)}),[c,d,i]),tabValues:i}}var f=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:t,selectedValue:o,selectValue:r,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),$=e=>{const n=e.currentTarget,t=u.indexOf(n),l=c[t].value;l!==o&&(p(n),r(l))},g=e=>{let n=null;switch(e.key){case"Enter":$(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:s}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>u.push(e),onKeyDown:g,onClick:$},s,{className:(0,i.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":o===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l}))))}function j(e){const n=d(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},a.createElement(k,(0,l.Z)({},e,n)),a.createElement(b,(0,l.Z)({},e,n)))}function h(e){const n=(0,f.Z)();return a.createElement(j,(0,l.Z)({key:String(n)},e))}},4220:(e,n,t)=>{t.d(n,{Z:()=>j});var l=t(67294),a=t(74866),i=t(85162),s=t(90814);const o=function(e,n){return void 0===n&&(n='"'),"string"==typeof e?`${n}${e}${n}`:e},r=function(e,n){return void 0===n&&(n="class"),e.class?` ${n}="${e.class}"`:""},c=function(e,n){return void 0===n&&(n=!1),e.style?n?` style={{ ${Object.keys(e.style).map((n=>`${n}: ${o(e.style[n])}`)).join(", ")} }}`:` style="${Object.keys(e.style).map((n=>`${n}: ${e.style[n]};`)).join(" ")}"`:""},u=e=>`${Object.keys(e).map((n=>`${n}: ${o(e[n],"'")}`)).join(", ")}`,p=function(e,n){let{prefix:t,includeFlicking:l=!0}=void 0===n?{}:n;const a=l?[["Flicking",`@egjs/${t?`${t}-`:""}flicking`]]:[];return e&&a.push(...e),`${a.map((e=>Array.isArray(e)?`import ${e[0]} from "${e[1]}";`:`import "${e}";`)).join("\n")}`},$=e=>`${e.map((e=>`new ${e[0]}(${e[1]?`{ ${u(e[1])} }`:""}`)).join(", ")})`,g=e=>{let{options:n,panels:t,events:a={},methods:i={},plugins:u=[],siblings:$=[],imports:g=[]}=e;const m=e=>`${Object.keys(e).map((n=>`${n}: ${o(e[n])}`)).join(",\n  ")}`,d=Object.keys(i).map((e=>`const ${e} = ${i[e]};\n`)).join(""),f=n?`const flicking = new Flicking("#flick", {\n  ${m(n)}\n});\n\n`:'const flicking = new Flicking("#flick")',v=u.length>0?`flicking.addPlugins(${u.map((e=>`new ${e[0]}(${e[1]?`{\n  ${m(e[1])}\n}`:""})`))});`:"",k=[...u.map((e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"])),...g],b=Object.keys(a).map((e=>`flicking.on("${e}", ${a[e]})\n`)).join(""),j=t.filter((e=>e.isSlot));return l.createElement(l.Fragment,null,l.createElement(s.Z,{className:"language-html",title:"html"},`<div id="flick" class="flicking-viewport${!1===n.horizontal?" vertical":""}">\n  <div class="flicking-camera">\n    ${t.filter((e=>!e.isSlot)).map((e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n    ")}\n  </div>${j.length?`\n  ${j.map((e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n  ")}`:""}\n</div>${$?"\n"+$.map((e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n"):""}`),l.createElement(s.Z,{className:"language-js",title:"js"},`${p(k)}\n\n${d}${f}${v}${b}`.trim()))},m=e=>{let{options:n,panels:t,events:a={},methods:i={},plugins:o,siblings:u,imports:g=[]}=e;const m=o?`\n  private _plugins = [${$(o)}];\n`:"",d=t.filter((e=>e.isSlot)),f=[["{ Component }","react"],[d.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]];let v=Object.keys(i).map((e=>`\nconst ${e} = ${i[e]};`)).join("");v&&(v+="\n"),o&&f.push([`{ ${o.map((e=>e[0]))} }`,"@egjs/flicking-plugins"]),f.push(...g);const k=d.length?`\n      <ViewportSlot>\n        ${d.map((e=>`<${e.tag}${r(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`)).join("\n        ")}\n      </ViewportSlot>`:"",b=Object.keys(a).map((e=>` on${e[0].toUpperCase()+e.slice(1)}={${a[e]}}`)).join("");return l.createElement(s.Z,{className:"language-jsx",title:"DemoComponent.jsx"},`${p(f,{includeFlicking:!1})}\n${v}\nexport default class DemoComponent extends Component {${m}\n  public render() {\n    return ${u?"<>\n    ":""}<Flicking${n?` ${Object.keys(n).map((e=>`${e}=${"string"==typeof n[e]?`"${n[e]}"`:`{${n[e]}}`}`)).join(" ")}`:""}${o?" plugins={this._plugins}":""}${b}>\n      ${t.filter((e=>!e.isSlot)).map((e=>`<${e.tag}${r(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`)).join("\n      ")}${k}\n    </Flicking>${u?`\n    ${u.map((e=>`<${e.tag}${r(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`)).join("\n    ")}\n    </>`:""};\n  }\n}`)},d=e=>{let{options:n,panels:t,events:a={},methods:i={},plugins:o,siblings:g=[],imports:m=[]}=e;const d=u(n),f=o?`,\n  data() {\n    return {\n      plugins: [${$(o)}]\n    }\n  }`:"",v=[...(o??[]).map((e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"])),...m],k=Object.keys(i),b=k.length>0?`,\n  methods: {\n    ${k.map((e=>`${e}: ${i[e].split("\n").map(((e,n)=>n>0?`    ${e}`:e)).join("\n")}`)).join(",\n")}\n  }`:"",j=Object.keys(a).map((e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${a[e]}"`)).join("");return l.createElement(l.Fragment,null,l.createElement(s.Z,{className:"language-html",title:"template"},`<Flicking${n?` :options="{ ${d} }"`:""}${o?' :plugins="plugins"':""}${j}>\n  ${t.map((e=>`<${e.tag}${e.isSlot?' slot="viewport"':""}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n  ")}\n</Flicking>${g?`\n${g.map((e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n")}`:""}`),l.createElement(s.Z,{className:"language-js",title:"script"},`${p(v,{prefix:"vue"})}\n\nexport default {\n  components: {\n    Flicking\n  }${f}${b}\n}`))},f=e=>{let{options:n,panels:t,events:a={},methods:i={},plugins:o,siblings:g=[],imports:m=[]}=e;const d=u(n),f=o?`\n  public plugins: Plugin[] = [${$(o)}];\n`:"",v=[["{ Component }","@angular/core"],[o?"Flicking, { Plugin }":"Flicking","@egjs/ngx-flicking"]];o&&v.push([`{ ${o.map((e=>e[0]))} }`,"@egjs/flicking-plugins"]);const k=Object.keys(i),b=k.length>0?`\n${k.map((e=>`${e} = ${i[e]}`.split("\n").map((e=>`  ${e}`)).join("\n")))}\n`:"",j=m.filter((e=>!Array.isArray(e))),h=j.length?`,\n  styleUrls: [\n${j.map((e=>`    "../node_modules/${e}"`))}\n  ]`:"";v.push(...m.filter((e=>Array.isArray(e))));const y=Object.keys(a).map((e=>` (${e})="${a[e]}($event)"`)).join("");return l.createElement(l.Fragment,null,l.createElement(s.Z,{className:"language-html",title:"demo.component.html"},`<ngx-flicking${n?` [options]="{ ${d} }"`:""}${o?' [plugins]="plugins"':""}${y}>\n  ${t.map((e=>`<${e.tag} ${e.isSlot?"in-viewport":"flicking-panel"}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n  ")}\n</ngx-flicking>${g?`\n${g.map((e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n")}`:""}`),l.createElement(s.Z,{className:"language-ts",title:"demo.component.ts"},`${p(v,{includeFlicking:!1})}\n\n@Component({\n  templateUrl: './demo.component.html'${h}\n})\nexport class DemoComponent {${f}${b}}`))},v=e=>{let{options:n,panels:t,events:a={},methods:i={},plugins:o,siblings:g=[],imports:m=[]}=e;const d=u(n),f=t.filter((e=>e.isSlot)),v=o?`,\n  data() {\n    return {\n      plugins: [${$(o)}]\n    }\n  }`:"",k=f.length?`\n  <template #viewport>\n    ${f.map((e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n    ")}\n  </template>`:"",b=[...(o??[]).map((e=>[`{ ${e[0]} }`,"@egjs/flicking-plugins"])),...m],j=Object.keys(i),h=j.length>0?`,\n  methods: {\n    ${j.map((e=>`${e}: ${i[e].split("\n").map(((e,n)=>n>0?`    ${e}`:e)).join("\n")}`)).join(",\n")}\n  }`:"",y=Object.keys(a).map((e=>` @${e.replace(/([A-Z])/g,"-$1").toLowerCase()}="${a[e]}"`)).join("");return l.createElement(l.Fragment,null,l.createElement(s.Z,{className:"language-html",title:"template"},`<Flicking${n?` :options="{ ${d} }"`:""}${o?' :plugins="plugins"':""}${y}>\n  ${t.filter((e=>!e.isSlot)).map((e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n  ")}${k}\n</Flicking>${g?`\n${g.map((e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n")}`:""}`),l.createElement(s.Z,{className:"language-js",title:"script"},`${p(b,{prefix:"vue3"})}\n\nexport default {\n  components: {\n    Flicking\n  }${v}${h}\n}`))},k=e=>{let{options:n,panels:t,events:a={},methods:i={},plugins:o,siblings:u,imports:g=[]}=e;const m=o?`\n  private _plugins = [${$(o)}];\n`:"",d=t.filter((e=>e.isSlot)),f=[["{ Component }","preact"],[d.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/preact-flicking"]];let v=Object.keys(i).map((e=>`\nconst ${e} = ${i[e]};`)).join("");v&&(v+="\n"),o&&f.push([`{ ${o.map((e=>e[0]))} }`,"@egjs/flicking-plugins"]),f.push(...g);const k=d.length?`\n      <ViewportSlot>\n        ${d.map((e=>`<${e.tag}${r(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`)).join("\n        ")}\n      </ViewportSlot>`:"",b=Object.keys(a).map((e=>` on${e[0].toUpperCase()+e.slice(1)}={${a[e]}}`)).join("");return l.createElement(s.Z,{className:"language-jsx",title:"DemoComponent.jsx"},`${p(f,{includeFlicking:!1})}\n${v}\nexport default class DemoComponent extends Component {${m}\n  public render() {\n    return ${u?"<>\n    ":""}<Flicking${n?` ${Object.keys(n).map((e=>`${e}=${"string"==typeof n[e]?`"${n[e]}"`:`{${n[e]}}`}`)).join(" ")}`:""}${o?" plugins={this._plugins}":""}${b}>\n      ${t.filter((e=>!e.isSlot)).map((e=>`<${e.tag}${r(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`)).join("\n      ")}${k}\n    </Flicking>${u?`\n    ${u.map((e=>`<${e.tag}${r(e,"className")}${c(e,!0)}>${e.content.replace(/class/g,"className")}</${e.tag}>`)).join("\n    ")}\n    </>`:""};\n  }\n}`)},b=e=>{let{options:n,panels:t,events:a={},methods:i={},plugins:o,siblings:g,imports:m=[]}=e;const d=u(n),f=o?`\n\nconst plugins = [${$(o)}];`:"",v=t.filter((e=>e.isSlot)),k=Object.keys(i).map((e=>`\nconst ${e} = ${i[e]};`)).join("").replace(/(\s+)e\./g,"$1e.detail."),b=[["Flicking, { FlickingPanel }","@egjs/svelte-flicking"]];o&&b.push([`{ ${o.map((e=>e[0]))} }`,"@egjs/flicking-plugins"]),b.push(...m);const j=Object.keys(a).map((e=>` on:${e}={${a[e]}}`)).join(""),h=v.length?`\n  <svelte:fragment slot="viewport">\n    ${v.map((e=>`<${e.tag}${r(e)}${c(e,!0)}>${e.content}</${e.tag}>`)).join("\n    ")}\n  </svelte:fragment>`:"";return l.createElement(s.Z,{className:"language-jsx",title:"DemoComponent.jsx"},`<script lang="ts">\n${p(b,{includeFlicking:!1})}${f}${k}\n<\/script>\n\n<Flicking${n?` options={{ ${d} }}`:""}${o?" plugins={plugins}":""}${j}>\n  ${t.filter((e=>!e.isSlot)).map((e=>`<FlickingPanel${r(e)}${c(e)}>${e.content}</FlickingPanel>`)).join("\n  ")}${h}\n</Flicking>${g?`\n${g.map((e=>`<${e.tag}${r(e)}${c(e)}>${e.content}</${e.tag}>`)).join("\n")}`:""}`)},j=e=>{let{js:n,react:t,vue:s,vue3:o,angular:r,preact:c,svelte:u,...p}=e;return l.createElement(a.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}]},l.createElement(i.Z,{value:"js"},n||l.createElement(g,p)),l.createElement(i.Z,{value:"react"},t||l.createElement(m,p)),l.createElement(i.Z,{value:"vue"},s||l.createElement(d,p)),l.createElement(i.Z,{value:"vue3"},o||l.createElement(v,p)),l.createElement(i.Z,{value:"angular"},r||l.createElement(f,p)),l.createElement(i.Z,{value:"preact"},c||l.createElement(k,p)),l.createElement(i.Z,{value:"svelte"},u||l.createElement(b,p)))}},62717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var l=t(87462),a=(t(67294),t(3905)),i=t(4220);const s={title:"Rendering elements inside the wrapper element",id:"viewport-slot",slug:"/viewport-slot",custom_edit_url:null,sidebar_position:8},o=void 0,r={unversionedId:"tutorials/viewport-slot",id:"version-4.7.3/tutorials/viewport-slot",title:"Rendering elements inside the wrapper element",description:"You can place elements inside the .flicking-viewport element like the following:",source:"@site/versioned_docs/version-4.7.3/tutorials/viewport-slot.mdx",sourceDirName:"tutorials",slug:"/viewport-slot",permalink:"/egjs-flicking/ko/docs/4.7.3/viewport-slot",draft:!1,editUrl:null,tags:[],version:"4.7.3",sidebarPosition:8,frontMatter:{title:"Rendering elements inside the wrapper element",id:"viewport-slot",slug:"/viewport-slot",custom_edit_url:null,sidebar_position:8},sidebar:"docs",previous:{title:"Server Side Rendering (SSR)",permalink:"/egjs-flicking/ko/docs/4.7.3/ssr"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-flicking/ko/docs/4.7.3/migration-from-v3"}},c={},u=[],p={toc:u},$="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)($,(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can place elements inside the ",(0,a.kt)("inlineCode",{parentName:"p"},".flicking-viewport")," element like the following:"),(0,a.kt)(i.Z,{options:{circular:!0},panels:[{tag:"div",class:"panel",content:"1"},{tag:"div",class:"panel",content:"2"},{tag:"div",class:"panel",content:"3"},{tag:"span",class:"item-inside-viewport",content:"",isSlot:!0},{tag:"span",class:"item-inside-viewport",content:"",isSlot:!0}],mdxType:"SourceCode"}))}g.isMDXComponent=!0}}]);