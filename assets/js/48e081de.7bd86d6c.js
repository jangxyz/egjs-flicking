"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50084],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>y});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var g=t.createContext({}),s=function(e){var n=t.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(g.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(a),d=i,y=p["".concat(g,".").concat(d)]||p[d]||u[d]||r;return a?t.createElement(y,l(l({ref:n},m),{},{components:a})):t.createElement(y,l({ref:n},m))}));function y(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97478:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var t=a(58168),i=(a(96540),a(15680));const r={title:"Migration Guide from v3 to v4",id:"migration-from-v3",slug:"/migration-from-v3",custom_edit_url:null},l=void 0,o={unversionedId:"tutorials/migration-from-v3",id:"version-4.10.8/tutorials/migration-from-v3",title:"Migration Guide from v3 to v4",description:"HTML structure",source:"@site/versioned_docs/version-4.10.8/tutorials/migration-from-v3.mdx",sourceDirName:"tutorials",slug:"/migration-from-v3",permalink:"/egjs-flicking/docs/4.10.8/migration-from-v3",draft:!1,editUrl:null,tags:[],version:"4.10.8",frontMatter:{title:"Migration Guide from v3 to v4",id:"migration-from-v3",slug:"/migration-from-v3",custom_edit_url:null},sidebar:"docs",previous:{title:"Rendering elements inside the wrapper element",permalink:"/egjs-flicking/docs/4.10.8/viewport-slot"}},g={},s=[{value:"HTML structure",id:"html-structure",level:2},{value:"Changes when using umd modules",id:"changes-when-using-umd-modules",level:2},{value:"Removed Options",id:"removed-options",level:2},{value:"Removed methods",id:"removed-methods",level:2},{value:"Option Changes",id:"option-changes",level:2},{value:"Option&#39;s default value changes",id:"options-default-value-changes",level:2},{value:"Method Changes",id:"method-changes",level:2},{value:"Event Changes",id:"event-changes",level:2}],m={toc:s},p="wrapper";function u(e){let{components:n,...a}=e;return(0,i.yg)(p,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"html-structure"},"HTML structure"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"To support SSR(Server Side Rendering), Flicking no longer generates viewport & camera element."),(0,i.yg)("li",{parentName:"ul"},"So you have to create a viewport & camera element in your HTML template yourself."),(0,i.yg)("li",{parentName:"ul"},"Also, now you have to import CSS file we're providing and place a correct class names",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"We're now using ",(0,i.yg)("inlineCode",{parentName:"li"},"flicking-viewport")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"flicking-camera")," instead of ",(0,i.yg)("inlineCode",{parentName:"li"},"eg-flick-viewport")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"eg-flick-camera")))),(0,i.yg)("li",{parentName:"ul"},"All framework-based Flickings don't have to consider this change, as they're still generating inner elements for you.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-html",metastring:"{2,5-6,10-11}","{2,5-6,10-11}":!0},'<head>\n  <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking@4.0.0/dist/flicking.css">\n</head>\n<body>\n  <div id="my-flicking" class="flicking-viewport">\n    <div class="flicking-camera">\n      <div>Panel 1</div>\n      <div>Panel 2</div>\n      <div>Panel 3</div>\n    </div>\n  </div>\n</body>\n')),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#my-flicking");\n')),(0,i.yg)("h2",{id:"changes-when-using-umd-modules"},"Changes when using umd modules"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"We've removed ",(0,i.yg)("inlineCode",{parentName:"li"},"eg")," namespace on umd modules.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"eg.Flicking")," is now just ",(0,i.yg)("inlineCode",{parentName:"li"},"Flicking"))))),(0,i.yg)("h2",{id:"removed-options"},"Removed Options"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"CSS-related options",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"To support SSR, we've removed all CSS-related properties to guarantee UI when rendered in SSR frameworks."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"gap"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"You can now set gaps between panels with CSS margins like ",(0,i.yg)("inlineCode",{parentName:"li"},"margin-right")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"margin-bottom"),"."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"zIndex"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"You can now directly use CSS ",(0,i.yg)("inlineCode",{parentName:"li"},"z-index")," to viewport element(",(0,i.yg)("inlineCode",{parentName:"li"},".flicking-viewport"),") instead."))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"overflow"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"You can set ",(0,i.yg)("inlineCode",{parentName:"li"},"overflow: visible")," to viewport element(",(0,i.yg)("inlineCode",{parentName:"li"},".flicking-viewport"),") instead."))))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"infinite")," and ",(0,i.yg)("strong",{parentName:"li"},"lastIndex"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"needPanel")," event is now always triggered without the option ",(0,i.yg)("strong",{parentName:"li"},"infinite")))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"collectStatistics")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"thresholdAngle")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"isEqualSize")," and ",(0,i.yg)("strong",{parentName:"li"},"isConstantSize")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"anchor")," and ",(0,i.yg)("strong",{parentName:"li"},"hanger")," is now merged into the new option named ",(0,i.yg)("strong",{parentName:"li"},"align"),".",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"anchor: 20")," and ",(0,i.yg)("inlineCode",{parentName:"li"},'hanger: "40%"')," is same to ",(0,i.yg)("inlineCode",{parentName:"li"},'align: { panel: 20, camera: "40%" }')))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"infiniteThreshold")," is now renamed to ",(0,i.yg)("strong",{parentName:"li"},"needPanelThreshold"))),(0,i.yg)("h2",{id:"removed-methods"},"Removed methods"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"replace"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"As Flicking no longer supports isolated indexes, we've removed Flicking's ",(0,i.yg)("strong",{parentName:"li"},"replace")," and added ",(0,i.yg)("strong",{parentName:"li"},"prepend")," and ",(0,i.yg)("strong",{parentName:"li"},"insert")," instead."))),(0,i.yg)("li",{parentName:"ul"},"Getters",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"We're now usinge a getter property instead of ",(0,i.yg)("inlineCode",{parentName:"li"},"get-")," methods"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"getIndex()")," > ",(0,i.yg)("strong",{parentName:"li"},"index")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"getAllPanels()")," > ",(0,i.yg)("strong",{parentName:"li"},"panels")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"getElement()")," > ",(0,i.yg)("strong",{parentName:"li"},"element")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"getCurrentPanel()")," > ",(0,i.yg)("strong",{parentName:"li"},"currentPanel"))))),(0,i.yg)("h2",{id:"option-changes"},"Option Changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"adaptive")," is now only applicable when ",(0,i.yg)("inlineCode",{parentName:"li"},"horizontal: true")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"moveType")," is now always a ",(0,i.yg)("inlineCode",{parentName:"li"},"string"))),(0,i.yg)("h2",{id:"options-default-value-changes"},"Option's default value changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Default value of ",(0,i.yg)("strong",{parentName:"li"},"duration")," is now ",(0,i.yg)("inlineCode",{parentName:"li"},"500")," (was ",(0,i.yg)("inlineCode",{parentName:"li"},"100"),")"),(0,i.yg)("li",{parentName:"ul"},"Default value of ",(0,i.yg)("strong",{parentName:"li"},"bounce")," is now ",(0,i.yg)("inlineCode",{parentName:"li"},"20%")," (was ",(0,i.yg)("inlineCode",{parentName:"li"},"[10, 10]"),")"),(0,i.yg)("li",{parentName:"ul"},"Default value of ",(0,i.yg)("strong",{parentName:"li"},"autoResize")," is now ",(0,i.yg)("inlineCode",{parentName:"li"},"true")," (was ",(0,i.yg)("inlineCode",{parentName:"li"},"false"),")")),(0,i.yg)("h2",{id:"method-changes"},"Method Changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"addPlugins")," and ",(0,i.yg)("strong",{parentName:"li"},"removePlugins")," do not longer accept arrays")),(0,i.yg)("h2",{id:"event-changes"},"Event Changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"needPanel")," is now can be triggered on the index 0",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"It always has ",(0,i.yg)("inlineCode",{parentName:"li"},'direction: "PREV"')))),(0,i.yg)("li",{parentName:"ul"},"We don't longer provide the method ",(0,i.yg)("strong",{parentName:"li"},"fill()")," in ",(0,i.yg)("strong",{parentName:"li"},"needPanel")," event",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"As all panels now have continuous indexes, you can use ",(0,i.yg)("inlineCode",{parentName:"li"},"prepend()")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"append()")," instead")))))}u.isMDXComponent=!0}}]);