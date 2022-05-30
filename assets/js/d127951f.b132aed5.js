"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84525],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=i,c=d["".concat(s,".").concat(k)]||d[k]||u[k]||r;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={title:"Migration Guide from v3 to v4",id:"migration-from-v3",slug:"/migration-from-v3",custom_edit_url:null},s=void 0,m={unversionedId:"tutorials/migration-from-v3",id:"version-4.8.0/tutorials/migration-from-v3",title:"Migration Guide from v3 to v4",description:"HTML structure",source:"@site/versioned_docs/version-4.8.0/tutorials/migration-from-v3.mdx",sourceDirName:"tutorials",slug:"/migration-from-v3",permalink:"/egjs-flicking/docs/migration-from-v3",draft:!1,editUrl:null,tags:[],version:"4.8.0",frontMatter:{title:"Migration Guide from v3 to v4",id:"migration-from-v3",slug:"/migration-from-v3",custom_edit_url:null},sidebar:"docs",previous:{title:"Rendering elements inside the wrapper element",permalink:"/egjs-flicking/docs/viewport-slot"}},p={},u=[{value:"HTML structure",id:"html-structure",level:2},{value:"Changes when using umd modules",id:"changes-when-using-umd-modules",level:2},{value:"Removed Options",id:"removed-options",level:2},{value:"Removed methods",id:"removed-methods",level:2},{value:"Option Changes",id:"option-changes",level:2},{value:"Option&#39;s default value changes",id:"options-default-value-changes",level:2},{value:"Method Changes",id:"method-changes",level:2},{value:"Event Changes",id:"event-changes",level:2}],d={toc:u};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"html-structure"},"HTML structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To support SSR(Server Side Rendering), Flicking no longer generates viewport & camera element."),(0,r.kt)("li",{parentName:"ul"},"So you have to create a viewport & camera element in your HTML template yourself."),(0,r.kt)("li",{parentName:"ul"},"Also, now you have to import CSS file we're providing and place a correct class names",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We're now using ",(0,r.kt)("inlineCode",{parentName:"li"},"flicking-viewport")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"flicking-camera")," instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"eg-flick-viewport")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"eg-flick-camera")))),(0,r.kt)("li",{parentName:"ul"},"All framework-based Flickings don't have to consider this change, as they're still generating inner elements for you.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"{2,5-6,10-11}","{2,5-6,10-11}":!0},'<head>\n  <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking@4.0.0/dist/flicking.css">\n</head>\n<body>\n  <div id="my-flicking" class="flicking-viewport">\n    <div class="flicking-camera">\n      <div>Panel 1</div>\n      <div>Panel 2</div>\n      <div>Panel 3</div>\n    </div>\n  </div>\n</body>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#my-flicking");\n')),(0,r.kt)("h2",{id:"changes-when-using-umd-modules"},"Changes when using umd modules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We've removed ",(0,r.kt)("inlineCode",{parentName:"li"},"eg")," namespace on umd modules.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eg.Flicking")," is now just ",(0,r.kt)("inlineCode",{parentName:"li"},"Flicking"))))),(0,r.kt)("h2",{id:"removed-options"},"Removed Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CSS-related options",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To support SSR, we've removed all CSS-related properties to guarantee UI when rendered in SSR frameworks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gap"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can now set gaps between panels with CSS margins like ",(0,r.kt)("inlineCode",{parentName:"li"},"margin-right")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"margin-bottom"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zIndex"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can now directly use CSS ",(0,r.kt)("inlineCode",{parentName:"li"},"z-index")," to viewport element(",(0,r.kt)("inlineCode",{parentName:"li"},".flicking-viewport"),") instead."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"overflow"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can set ",(0,r.kt)("inlineCode",{parentName:"li"},"overflow: visible")," to viewport element(",(0,r.kt)("inlineCode",{parentName:"li"},".flicking-viewport"),") instead."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"infinite")," and ",(0,r.kt)("strong",{parentName:"li"},"lastIndex"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"needPanel")," event is now always triggered without the option ",(0,r.kt)("strong",{parentName:"li"},"infinite")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"collectStatistics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"thresholdAngle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"isEqualSize")," and ",(0,r.kt)("strong",{parentName:"li"},"isConstantSize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"anchor")," and ",(0,r.kt)("strong",{parentName:"li"},"hanger")," is now merged into the new option named ",(0,r.kt)("strong",{parentName:"li"},"align"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"anchor: 20")," and ",(0,r.kt)("inlineCode",{parentName:"li"},'hanger: "40%"')," is same to ",(0,r.kt)("inlineCode",{parentName:"li"},'align: { panel: 20, camera: "40%" }')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"infiniteThreshold")," is now renamed to ",(0,r.kt)("strong",{parentName:"li"},"needPanelThreshold"))),(0,r.kt)("h2",{id:"removed-methods"},"Removed methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"replace"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"As Flicking no longer supports isolated indexes, we've removed Flicking's ",(0,r.kt)("strong",{parentName:"li"},"replace")," and added ",(0,r.kt)("strong",{parentName:"li"},"prepend")," and ",(0,r.kt)("strong",{parentName:"li"},"insert")," instead."))),(0,r.kt)("li",{parentName:"ul"},"Getters",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"We're now usinge a getter property instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"get-")," methods"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getIndex()")," > ",(0,r.kt)("strong",{parentName:"li"},"index")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getAllPanels()")," > ",(0,r.kt)("strong",{parentName:"li"},"panels")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getElement()")," > ",(0,r.kt)("strong",{parentName:"li"},"element")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"getCurrentPanel()")," > ",(0,r.kt)("strong",{parentName:"li"},"currentPanel"))))),(0,r.kt)("h2",{id:"option-changes"},"Option Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"adaptive")," is now only applicable when ",(0,r.kt)("inlineCode",{parentName:"li"},"horizontal: true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"moveType")," is now always a ",(0,r.kt)("inlineCode",{parentName:"li"},"string"))),(0,r.kt)("h2",{id:"options-default-value-changes"},"Option's default value changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default value of ",(0,r.kt)("strong",{parentName:"li"},"duration")," is now ",(0,r.kt)("inlineCode",{parentName:"li"},"500")," (was ",(0,r.kt)("inlineCode",{parentName:"li"},"100"),")"),(0,r.kt)("li",{parentName:"ul"},"Default value of ",(0,r.kt)("strong",{parentName:"li"},"bounce")," is now ",(0,r.kt)("inlineCode",{parentName:"li"},"20%")," (was ",(0,r.kt)("inlineCode",{parentName:"li"},"[10, 10]"),")"),(0,r.kt)("li",{parentName:"ul"},"Default value of ",(0,r.kt)("strong",{parentName:"li"},"autoResize")," is now ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," (was ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,r.kt)("h2",{id:"method-changes"},"Method Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"addPlugins")," and ",(0,r.kt)("strong",{parentName:"li"},"removePlugins")," do not longer accept arrays")),(0,r.kt)("h2",{id:"event-changes"},"Event Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"needPanel")," is now can be triggered on the index 0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It always has ",(0,r.kt)("inlineCode",{parentName:"li"},'direction: "PREV"')))),(0,r.kt)("li",{parentName:"ul"},"We don't longer provide the method ",(0,r.kt)("strong",{parentName:"li"},"fill()")," in ",(0,r.kt)("strong",{parentName:"li"},"needPanel")," event",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"As all panels now have continuous indexes, you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"prepend()")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"append()")," instead")))))}k.isMDXComponent=!0}}]);