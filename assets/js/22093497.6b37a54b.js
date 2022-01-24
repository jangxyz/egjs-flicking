"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6414],{58215:function(e,n,t){var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,l=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(87462),l=t(67294),r=t(72389),a=t(79443);var o=function(){var e=(0,l.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(63616),u=t(86010),c="tabItem_vU9c";function d(e){var n,t,r,a=e.lazy,d=e.block,p=e.defaultValue,m=e.values,f=e.groupId,v=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(n=null!=p?p:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=k[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=o(),S=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,l.useState)(b),T=w[0],x=w[1],I=[],Z=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var z=S[f];null!=z&&z!==T&&h.some((function(e){return e.value===z}))&&x(z)}var E=function(e){var n=e.currentTarget,t=I.indexOf(n),i=h[t].value;i!==T&&(Z(n),x(i),null!=f&&N(f,i))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=I.indexOf(e.currentTarget)+1;t=I[i]||I[0];break;case"ArrowLeft":var l=I.indexOf(e.currentTarget)-1;t=I[l]||I[I.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},v)},h.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return I.push(e)},onKeyDown:C,onFocus:E,onClick:E},r,{className:(0,u.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),a?(0,l.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function p(e){var n=(0,r.Z)();return l.createElement(d,(0,i.Z)({key:String(n)},e))}},1057:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return f},default:function(){return k}});var i=t(87462),l=t(63366),r=(t(67294),t(3905)),a=t(26396),o=t(58215),s=t(19055),u=t(44996),c=["components"],d={title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},p=void 0,m={unversionedId:"ssr",id:"version-4.3.1/ssr",title:"Server Side Rendering (SSR)",description:'As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you\'re using the "prev" align or using the bound option.',source:"@site/versioned_docs/version-4.3.1/ssr.mdx",sourceDirName:".",slug:"/ssr",permalink:"/egjs-flicking/docs/4.3.1/ssr",editUrl:null,tags:[],version:"4.3.1",frontMatter:{title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},sidebar:"version-4.3.1/docs",previous:{title:"Polyfills",permalink:"/egjs-flicking/docs/4.3.1/polyfills"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-flicking/docs/4.3.1/migration-from-v3"}},f=[{value:"firstPanelSize",id:"firstpanelsize",children:[],level:3},{value:"hideBeforeInit",id:"hidebeforeinit",children:[],level:3},{value:"How to use",id:"how-to-use",children:[],level:3}],v={toc:f};function k(e){var n=e.components,t=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you're using the ",(0,r.kt)("inlineCode",{parentName:"p"},'"prev"')," align or using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bound")," option."),(0,r.kt)("p",null,"To solve this problem, Flicking offers 2 options for the frameworks, ",(0,r.kt)("inlineCode",{parentName:"p"},"firstPanelSize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hideBeforeInit"),"."),(0,r.kt)("h3",{id:"firstpanelsize"},"firstPanelSize"),(0,r.kt)("p",null,"If you know the exact size of the first panel element, like ",(0,r.kt)("inlineCode",{parentName:"p"},'"200px"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"50%"'),", you can use that value to correctly place the panel elements before Flicking's mounted."),(0,r.kt)("img",{src:(0,u.Z)("/img/firstPanelSize.png")}),(0,r.kt)("p",null,"But if the panel's size is responsive for the screen size or you're using a ",(0,r.kt)("inlineCode",{parentName:"p"},"circular")," option, this won't work well as Flicking doesn't know about other panel sizes.",(0,r.kt)("br",{parentName:"p"}),"\n","In that case, please use ",(0,r.kt)("inlineCode",{parentName:"p"},"hideBeforeInit")," instead."),(0,r.kt)("img",{src:(0,u.Z)("/img/firstPanelSize-circular.gif")}),(0,r.kt)("h3",{id:"hidebeforeinit"},"hideBeforeInit"),(0,r.kt)("p",null,"Enabling this option will hide panel elements until it's mounted.",(0,r.kt)("br",{parentName:"p"}),"\n","This will show empty screen before it's mounted, so use this option only when you're okay with that."),(0,r.kt)("img",{src:(0,u.Z)("/img/hideBeforeInit.gif")}),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)(a.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},"In native JS, you can attach class `flicking-hidden` to the viewport element and remove that on `ready` event to mimic the behavior of `hideBeforeInit`.",(0,r.kt)(s.Z,{className:"html",title:"html",mdxType:"CodeBlock"},'<div id="flicking" class="flicking-viewport flicking-hidden">\n  <div class="flicking-camera">\n    ...\n  </div>\n</div>'),(0,r.kt)(s.Z,{className:"js",title:"js",mdxType:"CodeBlock"},'import Flicking, { EVENTS } from "@egjs/flicking";\n\nconst flicking = new Flicking("#flicking");\nflicking.once(EVENTS.READY, () => {\n  flicking.element.classList.remove("flicking-hidden");\n}')),(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,r.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking [hideBeforeInit]="true" [firstPanelSize]="\'200px\'">\n  {{ ... }}\n</ngx-flicking>\n'))),(0,r.kt)(o.Z,{value:"preact",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,r.kt)(o.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n')))))}k.isMDXComponent=!0}}]);