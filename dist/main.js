(()=>{"use strict";var n={574:(n,e,t)=>{t.d(e,{A:()=>un});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),s=t(417),l=t.n(s),f=new URL(t(290),t.b),c=new URL(t(584),t.b),d=new URL(t(94),t.b),m=new URL(t(316),t.b),u=new URL(t(599),t.b),p=new URL(t(367),t.b),h=new URL(t(537),t.b),b=new URL(t(929),t.b),g=new URL(t(152),t.b),w=new URL(t(950),t.b),y=new URL(t(472),t.b),v=new URL(t(606),t.b),x=new URL(t(586),t.b),C=new URL(t(648),t.b),R=new URL(t(694),t.b),S=new URL(t(916),t.b),L=new URL(t(95),t.b),A=new URL(t(511),t.b),E=new URL(t(89),t.b),U=new URL(t(913),t.b),$=new URL(t(613),t.b),z=new URL(t(45),t.b),k=new URL(t(737),t.b),T=new URL(t(649),t.b),F=new URL(t(246),t.b),M=new URL(t(780),t.b),I=new URL(t(866),t.b),j=new URL(t(616),t.b),_=i()(r()),N=l()(f),P=l()(c),B=l()(d),O=l()(m),q=l()(u),H=l()(p),V=l()(h),D=l()(b),G=l()(g),J=l()(w),Q=l()(y),Y=l()(v),K=l()(x),W=l()(C),X=l()(R),Z=l()(S),nn=l()(L),en=l()(A),tn=l()(E),on=l()(U),rn=l()($),an=l()(z),sn=l()(k),ln=l()(T),fn=l()(F),cn=l()(M),dn=l()(I),mn=l()(j);_.push([n.id,`/* Arvo Fonts */\n@font-face {\n  font-family: "arvobold";\n  src: url(${N}) format("woff2"),\n    url(${P}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "arvobold_italic";\n  src: url(${B}) format("woff2"),\n    url(${O}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "arvoitalic";\n  src: url(${q}) format("woff2"),\n    url(${H}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "arvoregular";\n  src: url(${V}) format("woff2"),\n    url(${D}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* Lato Fonts */\n\n@font-face {\n  font-family: "latoblack";\n  src: url(${G}) format("woff2"),\n    url(${J}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "latoblack_italic";\n  src: url(${Q})\n      format("woff2"),\n    url(${Y}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "latobold";\n  src: url(${K}) format("woff2"),\n    url(${W}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "latobold_italic";\n  src: url(${X}) format("woff2"),\n    url(${Z}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "latoitalic";\n  src: url(${nn}) format("woff2"),\n    url(${en}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "latolight";\n  src: url(${tn}) format("woff2"),\n    url(${on}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "latolight_italic";\n  src: url(${rn})\n      format("woff2"),\n    url(${an}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "latoregular";\n  src: url(${sn}) format("woff2"),\n    url(${ln}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "latohairline";\n  src: url(${fn}) format("woff2"),\n    url(${cn}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "latohairline_italic";\n  src: url(${dn}) format("woff2"),\n    url(${mn}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n`,""]);const un=_},208:(n,e,t)=>{t.d(e,{A:()=>f});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),s=t(574),l=i()(r());l.i(s.A),l.push([n.id,'/* Variables */\n:root {\n  /*Color Variables*/\n  --white: #eee;\n  --orange: #e56b6f;\n\n  /* Font Size Variables */\n  --text-heading: 2rem;\n  --text-subheading: 1.5rem;\n  --text-body: 1rem;\n\n  /* Spacing Variables */\n  --biggest-spacing: 2.5rem;\n  --big-spacing: 2rem;\n  --medium-spacing: 1.5rem;\n  --small-spacing: 1rem;\n  --smallest-spacing: 0.5rem;\n\n  /* Font Family Variables */\n  --font-family-body: "arvoregular", system-ui, Arial;\n  --font-family-heading: "latobold", Arial, Helvetica, sans-serif;\n\n  font-size: 1em;\n}\n\nbody {\n  background-color: var(--white);\n  font-family: var(--font-family-body);\n}\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader nav {\n  padding: var(--smallest-spacing);\n}\nbutton {\n  background-color: var(--orange);\n  color: var(--white);\n  border: none;\n  border-radius: 5px;\n  padding: var(--smallest-spacing) var(--small-spacing);\n}\nbutton:hover {\n  cursor: pointer;\n}\n.menuCard {\n  width: 200px;\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: var(--smallest-spacing);\n}\n.hero-img {\n  width: 100vw;\n}\n\nform ul li {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: var(--small-spacing);\n}\ninput,\ntextarea {\n  border-radius: 5px;\n}\n\n.contactH1 {\n  margin: var(--medium-spacing);\n}\n/* Text Elements */\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: var(--font-family-heading);\n}\nh1 {\n  font-size: var(--text-heading);\n}\nh2 {\n  font-size: var(--text-subheading);\n}\np {\n  font-size: var(--text-body);\n}\nul {\n  padding: 0;\n}\n',""]);const f=l},901:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/* Used rules from https://www.joshwcomeau.com/css/custom-css-reset/ */\n\n/*\nDocument\n========\n*/\n\n:root {\n    line-height: 1.5;\n}\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    /* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n    font-family:\n        system-ui,\n        'Segoe UI',\n        Roboto,\n        Helvetica,\n        Arial,\n        sans-serif,\n        'Apple Color Emoji',\n        'Segoe UI Emoji';\n    line-height: 1.15;\n    /* 1. Correct the line height in all browsers. */\n    -webkit-text-size-adjust: 100%;\n    /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n    -moz-tab-size: 4;\n    /* 3. Use a more readable tab size (opinionated). */\n    tab-size: 4;\n    /* 3 */\n}\n\n/*\nSections\n========\n*/\n\n/* body {\n    margin: 0;\n    /* Remove the margin in all browsers.\n}\n*/\n\n/*\nCustom Styles\n========\n*/\n\n* {\n    margin: 0;\n    /* Remove the margin in all browsers. */\n}\n\n/* Reduces text contrast on Mac */\nbody {\n    -webkit-font-smoothing: antialiased;\n}\n\n/* Resetting heading typography */\nh1,\nh2,\nh3,\nh4,\nh5 {\n    font-size: inherit;\n    font-weight: inherit;\n}\n\n/* Breaks words even without whitespace and hyphens for more common word wrapping */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n/* Remove heading styles inside an article element */\n.article :where(h1, h2, h3, h4, h5) {\n    all: revert;\n}\n\n/* Remove default list styling */\nol[role=\"list\"],\nul[role=\"list\"] {\n    list-style: none;\n    padding-inline: 0;\n}\n\n/* Prevents images from overflowing */\nimg {\n    display: block;\n    max-width: 100%;\n}\n\n/* Matches form typography to parent elements */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n    height: 0;\n    /* 1 */\n    color: inherit;\n    /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n    text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n    font-family:\n        ui-monospace,\n        SFMono-Regular,\n        Consolas,\n        'Liberation Mono',\n        Menlo,\n        monospace;\n    /* 1 */\n    font-size: 1em;\n    /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n    font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n}\n\nsub {\n    bottom: -0.25em;\n}\n\nsup {\n    top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n    text-indent: 0;\n    /* 1 */\n    border-color: inherit;\n    /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n    font-family: inherit;\n    /* 1 */\n    font-size: 100%;\n    /* 1 */\n    line-height: 1.15;\n    /* 1 */\n    margin: 0;\n    /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n    -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n    box-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n    padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n    vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n    height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n    -webkit-appearance: textfield;\n    /* 1 */\n    outline-offset: -2px;\n    /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n    -webkit-appearance: button;\n    /* 1 */\n    font: inherit;\n    /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n    display: list-item;\n}",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var f=0;f<n.length;f++){var c=[].concat(n[f]);o&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],f=o.base?l[0]+o.base:l[0],c=a[f]||0,d="".concat(f," ").concat(c);a[f]=c+1;var m=t(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var p=r(u,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=o(n,r),f=0;f<a.length;f++){var c=t(a[f]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}a=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},584:(n,e,t)=>{n.exports=t.p+"313cb1c305c47ce8e341.woff"},290:(n,e,t)=>{n.exports=t.p+"cb86b5a396ec79153302.woff2"},316:(n,e,t)=>{n.exports=t.p+"f2d1777242da33e1a81d.woff"},94:(n,e,t)=>{n.exports=t.p+"96e7538b43840856ab83.woff2"},367:(n,e,t)=>{n.exports=t.p+"dbb7f59593101f94c4f3.woff"},599:(n,e,t)=>{n.exports=t.p+"c53cc5a14bfae61bfab4.woff2"},929:(n,e,t)=>{n.exports=t.p+"ae2cb74901fab8d41b32.woff"},537:(n,e,t)=>{n.exports=t.p+"f9f5cd126c4de765dc36.woff2"},950:(n,e,t)=>{n.exports=t.p+"be2c0689cfda744cacc7.woff"},152:(n,e,t)=>{n.exports=t.p+"9b0e3728df2d95890775.woff2"},606:(n,e,t)=>{n.exports=t.p+"8453ebf58a5449e5d14c.woff"},472:(n,e,t)=>{n.exports=t.p+"8513a7741f33acc64ffc.woff2"},648:(n,e,t)=>{n.exports=t.p+"49882f665794c2550af8.woff"},586:(n,e,t)=>{n.exports=t.p+"71940b96bd556dc63ac6.woff2"},916:(n,e,t)=>{n.exports=t.p+"183bb36821c4e29095fe.woff"},694:(n,e,t)=>{n.exports=t.p+"17b7ef9683bf2542ca62.woff2"},511:(n,e,t)=>{n.exports=t.p+"ea992eabda6c0d0f3211.woff"},95:(n,e,t)=>{n.exports=t.p+"836db30025f99eba4a59.woff2"},913:(n,e,t)=>{n.exports=t.p+"4a1432935810cfb52aba.woff"},89:(n,e,t)=>{n.exports=t.p+"136c417888615b47be6d.woff2"},45:(n,e,t)=>{n.exports=t.p+"7c5d8bd5c23779f6f94b.woff"},613:(n,e,t)=>{n.exports=t.p+"9bcaf9e3de07bda87cf3.woff2"},649:(n,e,t)=>{n.exports=t.p+"bcefcce2cdad5efb056e.woff"},737:(n,e,t)=>{n.exports=t.p+"2314d19b215cf99f9fbd.woff2"},780:(n,e,t)=>{n.exports=t.p+"a1aa0164d7f0d4d90d59.woff"},246:(n,e,t)=>{n.exports=t.p+"eac728cb1624f523157a.woff2"},616:(n,e,t)=>{n.exports=t.p+"00eb119e1e65aebea49f.woff"},866:(n,e,t)=>{n.exports=t.p+"ed55bff30dbce536da44.woff2"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),s=t(659),l=t.n(s),f=t(56),c=t.n(f),d=t(540),m=t.n(d),u=t(113),p=t.n(u),h=t(901),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=l().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=m(),r()(h.A,b),h.A&&h.A.locals&&h.A.locals;var g=t(208),w={};w.styleTagTransform=p(),w.setAttributes=c(),w.insert=l().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=m(),r()(g.A,w),g.A&&g.A.locals&&g.A.locals;const y=t.p+"d3fecccc977424808a77.jpg",v=function(){const n=document.createElement("img"),e=document.createElement("h1"),t=document.createElement("h2"),o=document.createElement("p"),r=document.createElement("ul"),a=document.createElement("li"),i=document.querySelector("#content");return n.src=y,e.textContent="Odin Restaurant",t.textContent="Your local vegan eatery",o.textContent="Featured Dishes",a.textContent="Beyond Burger",r.appendChild(a),{render:function(){i.appendChild(n),i.appendChild(e),i.appendChild(t),i.appendChild(o),i.appendChild(r)}}}(),x=t.p+"28d5f47a9c2b3638ae7a.jpg",C=function(){function n(n,e,t,o){const r=document.createElement("div"),a=document.createElement("img"),i=document.createElement("h3"),s=document.createElement("p"),l=document.querySelector("#content");r.className="menuCard",a.src=n,a.setAttribute("alt",e),i.textContent=t,s.textContent=o,r.appendChild(a),r.appendChild(i),r.appendChild(s),l.appendChild(r)}return{createCard:n,render:function(){n(x,"Beyond Burger","Beyond Burger","Vegan burger topped with grilled onions, tomatoes, lettuce, and special house sauce.")}}}(),R=function(){const n=document.querySelector("#content");return{render:function(){!function(){const e=document.createElement("h1");e.textContent="Send a Message",e.className="contactH1",n.appendChild(e)}(),function(){const e=document.createElement("form"),t=document.createElement("ul"),o=document.createElement("button");function r(n,e,t,o="textarea"){const r=document.createElement("li"),a=document.createElement("label");a.setAttribute("for",e),a.textContent=t,r.appendChild(a);{const n=document.createElement("textarea");n.setAttribute("name",e),n.setAttribute("id",e),r.appendChild(n)}n.appendChild(r)}e.setAttribute("action",""),o.setAttribute("type","submit"),o.textContent="Submit",r(t,"senderName","Name","text"),r(t,"senderEmail","Email","email"),r(t,"senderMessage","Message"),e.appendChild(t),e.appendChild(o),n.appendChild(e)}()}}}();function S(n){for(;content.firstChild;)content.removeChild(content.firstChild);n()}const L=document.querySelector("#home"),A=document.querySelector("#menu"),E=document.querySelector("#contact");L.addEventListener("click",(()=>{S(v.render)})),A.addEventListener("click",(()=>{S(C.render)})),E.addEventListener("click",(()=>{S(R.render)})),S(v.render)})();