(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3011],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(a,".").concat(f)]||d[f]||s[f]||c;return t?n.createElement(m,u(u({ref:r},l),{},{components:t})):n.createElement(m,u({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,u=new Array(c);u[0]=d;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var p=2;p<c;p++)u[p]=t[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7164:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return a},Highlight:function(){return p},default:function(){return s}});var n=t(2122),o=t(9756),c=(t(7294),t(3905)),u={id:"mdx",title:"Propuls\xe9 par MDX"},i={unversionedId:"mdx",id:"mdx",isDocsHomePage:!1,title:"Propuls\xe9 par MDX",description:"Vous pouvez \xe9crire du JSX et utiliser des composants React dans votre Markdown grace \xe0 MDX.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/mdx.md",sourceDirName:".",slug:"/mdx",permalink:"/fr/docs/mdx",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/mdx.md",version:"current",frontMatter:{id:"mdx",title:"Propuls\xe9 par MDX"}},a=[],p=function(e){var r=e.children,t=e.color;return(0,c.kt)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}}," ",r," ")},l={toc:a,Highlight:p};function s(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Vous pouvez \xe9crire du JSX et utiliser des composants React dans votre Markdown grace \xe0 ",(0,c.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),"."),(0,c.kt)(p,{color:"#25c2a0",mdxType:"Highlight"},"Vert Docusaurus")," et ",(0,c.kt)(p,{color:"#1877F2",mdxType:"Highlight"},"blue Facebook")," sont mes couleures favorites.",(0,c.kt)("p",null,"Je peux utiliser du ",(0,c.kt)("strong",{parentName:"p"},"Markdown")," dans mon ",(0,c.kt)("em",{parentName:"p"},"JSX"),"!"))}s.isMDXComponent=!0}}]);