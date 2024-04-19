"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61630],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),y=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},m=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},o="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),o=y(a),d=r,c=o["".concat(p,".").concat(d)]||o[d]||s[d]||l;return a?n.createElement(c,g(g({ref:t},m),{},{components:a})):n.createElement(c,g({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[o]="string"==typeof e?e:r,g[1]=i;for(var y=2;y<l;y++)g[y]=a[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25736:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>y});var n=a(58168),r=(a(96540),a(15680));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/Renderer",id:"version-4.3.1/api/Renderer",title:"Renderer",description:"A component that manages Panel and its elements",source:"@site/versioned_docs/version-4.3.1/api/Renderer.mdx",sourceDirName:"api",slug:"/api/Renderer",permalink:"/egjs-flicking/docs/4.3.1/api/Renderer",draft:!1,editUrl:null,tags:[],version:"4.3.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.3.1/api",previous:{title:"ExternalRenderer",permalink:"/egjs-flicking/docs/4.3.1/api/ExternalRenderer"},next:{title:"VanillaRenderer",permalink:"/egjs-flicking/docs/4.3.1/api/VanillaRenderer"}},p={},y=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"panels",id:"panels",level:3},{value:"panelCount",id:"panelCount",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"render",id:"render",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"getPanel",id:"getPanel",level:3},{value:"updatePanelSize",id:"updatePanelSize",level:3},{value:"batchInsert",id:"batchInsert",level:3},{value:"batchRemove",id:"batchRemove",level:3},{value:"checkPanelContentsReady",id:"checkPanelContentsReady",level:3}],m={toc:y},o="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(o,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class Renderer\n")),(0,r.yg)("p",null,"A component that manages ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," and its elements"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#panels"},"panels"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#panelCount"},"panelCount"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#align"},"align")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#render"},"render"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#getPanel"},"getPanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updatePanelSize"},"updatePanelSize"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#batchInsert"},"batchInsert"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#batchRemove"},"batchRemove"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#checkPanelContentsReady"},"checkPanelContentsReady")))),(0,r.yg)("h2",{id:"constructor"},"Constructor"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"new Renderer(options, options.align)\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"An options object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options.align"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An ",(0,r.yg)("a",{parentName:"td",href:"Flicking#align"},"align")," value that will be applied to all panels")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"panels"},"panels"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Array of panels"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Array","<",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,r.yg)("h3",{id:"panelCount"},"panelCount"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Count of panels"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"align"},"align"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"A ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),"'s ",(0,r.yg)("a",{parentName:"p",href:"Panel#align"},"align")," value that applied to all panels"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"render"},"render"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Render panel elements inside the camera element"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Initialize Renderer"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Destroy Renderer and return to initial state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"getPanel"},"getPanel"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Return the ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," at the given index. ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if it doesn't exists."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Panel at the given index")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,r.yg)("h3",{id:"updatePanelSize"},"updatePanelSize"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Update all panel sizes"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"batchInsert"},"batchInsert"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Insert new panels at given index",(0,r.yg)("br",{parentName:"p"}),"\n","This will increase index of panels after by the number of panels added"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Array","<",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"An array of prepended panels")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Index to insert new panels at")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"elements"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Array","<","any",">"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An array of element or framework component with element in it")))),(0,r.yg)("h3",{id:"batchRemove"},"batchRemove"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Remove the panel at the given index",(0,r.yg)("br",{parentName:"p"}),"\n","This will decrease index of panels after by the number of panels removed"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),"[]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"An array of removed panels")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Index of panel to remove")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"deleteCount"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Number of panels to remove from index")))),(0,r.yg)("h3",{id:"checkPanelContentsReady"},"checkPanelContentsReady"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"checkingPanels"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."))}s.isMDXComponent=!0}}]);