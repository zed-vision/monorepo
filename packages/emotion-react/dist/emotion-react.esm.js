import{forwardRef as e,useContext as n,createContext as r,createElement as t,useRef as o,useLayoutEffect as s}from"react";import a from"@zedvision/emotion-cache";import i from"@zedvision/emotion-weak-memoize";import c from"hoist-non-react-statics";import{getRegisteredStyles as l,insertStyles as u}from"@zedvision/emotion-utils";import{serializeStyles as m}from"@zedvision/emotion-serialize";import{StyleSheet as d}from"@zedvision/emotion-sheet";var f="undefined"!=typeof document,p=Object.prototype.hasOwnProperty,v=r("undefined"!=typeof HTMLElement?a({key:"css"}):null),y=v.Provider,E=function(r){return e(function(e,t){var o=n(v);return r(e,o,t)})};function _(){return(_=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}f||(E=function(e){return function(r){var t=n(v);return null===t?(t=a({key:"css"}),h(v.Provider,{value:t},e(r,t))):e(r,t)}});var N=r({}),g=function(){return n(N)},O=i(function(e){return i(function(n){return function(e,n){if("function"==typeof n){var r=n(e);if("production"!==process.env.NODE_ENV&&(null==r||"object"!=typeof r||Array.isArray(r)))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return r}if("production"!==process.env.NODE_ENV&&(null==n||"object"!=typeof n||Array.isArray(n)))throw new Error("[ThemeProvider] Please make your theme prop a plain object");return _({},e,n)}(e,n)})}),b=function(e){var r=n(N);return e.theme!==r&&(r=O(r)(e.theme)),h(N.Provider,{value:r},e.children)};function w(r){var t=r.displayName||r.name||"Component",o=e(function(e,t){var o=n(N);return h(r,_({theme:o,ref:t},e))});return o.displayName="WithTheme("+t+")",c(o,r)}var k="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",A="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",D=function(e,n){if("production"!==process.env.NODE_ENV&&"string"==typeof n.css&&-1!==n.css.indexOf(":"))throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@zedvision/emotion-react' like this: css`"+n.css+"`");var r={};for(var t in n)p.call(n,t)&&(r[t]=n[t]);if(r[k]=e,"production"!==process.env.NODE_ENV){var o=new Error;if(o.stack){var s=o.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /);s||(s=o.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/)),s&&(r[A]=s[1].replace(/\$/g,"-"))}}return r},x=E(function(e,r,o){var s=e.css;"string"==typeof s&&void 0!==r.registered[s]&&(s=r.registered[s]);var a=e[k],i=[s],c="";"string"==typeof e.className?c=l(r.registered,i,e.className):null!=e.className&&(c=e.className+" ");var d=m(i,void 0,"function"==typeof s||Array.isArray(s)?n(N):void 0);if("production"!==process.env.NODE_ENV&&-1===d.name.indexOf("-")){var v=e[A];v&&(d=m([d,"label:"+v+";"]))}var y=u(r,d,"string"==typeof a);c+=r.key+"-"+d.name;var E={};for(var _ in e)!p.call(e,_)||"css"===_||_===k||"production"!==process.env.NODE_ENV&&_===A||(E[_]=e[_]);E.ref=o,E.className=c;var g=t(a,E);if(!f&&void 0!==y){for(var O,b=d.name,w=d.next;void 0!==w;)b+=" "+w.name,w=w.next;return h(Fragment,null,h("style",((O={})["data-emotion"]=r.key+" "+b,O.dangerouslySetInnerHTML={__html:y},O.nonce=r.sheet.nonce,O)),g)}return g});"production"!==process.env.NODE_ENV&&(x.displayName="EmotionCssPropInternal");var T=function(e,n){var r=arguments;if(null==n||!p.call(n,"css"))return t.apply(void 0,r);var o=r.length,s=new Array(o);s[0]=x,s[1]=D(e,n);for(var a=2;a<o;a++)s[a]=r[a];return t.apply(null,s)},P=!1,V=E(function(e,r){"production"===process.env.NODE_ENV||P||!e.className&&!e.css||(console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"),P=!0);var t=e.styles,a=m([t],void 0,"function"==typeof t||Array.isArray(t)?n(N):void 0);if(!f){for(var i,c=a.name,l=a.styles,p=a.next;void 0!==p;)c+=" "+p.name,l+=p.styles,p=p.next;var v=!0===r.compat,y=r.insert("",{name:c,styles:l},r.sheet,v);return v?null:h("style",((i={})["data-emotion"]=r.key+"-global "+c,i.dangerouslySetInnerHTML={__html:y},i.nonce=r.sheet.nonce,i))}var E=o();return s(function(){var e=r.key+"-global",n=new d({key:e,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),t=document.querySelector('style[data-emotion="'+e+" "+a.name+'"]');return r.sheet.tags.length&&(n.before=r.sheet.tags[0]),null!==t&&n.hydrate([t]),E.current=n,function(){n.flush()}},[r]),s(function(){void 0!==a.next&&u(r,a.next,!0);var e=E.current;e.tags.length&&(e.before=e.tags[e.tags.length-1].nextElementSibling,e.flush()),r.insert("",a,e,!1)},[r,a.name]),null});function j(){return m([].slice.call(arguments))}"production"!==process.env.NODE_ENV&&(V.displayName="EmotionGlobal");var z=function(){var e=j.apply(void 0,[].slice.call(arguments)),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},S=function e(n){for(var r=n.length,t=0,o="";t<r;t++){var s=n[t];if(null!=s){var a=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))a=e(s);else for(var i in"production"!==process.env.NODE_ENV&&void 0!==s.styles&&void 0!==s.name&&console.error("You have passed styles created with `css` from `@zedvision/emotion-react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."),a="",s)s[i]&&i&&(a&&(a+=" "),a+=i);break;default:a=s}a&&(o&&(o+=" "),o+=a)}}return o};function M(e,n,r){var t=[],o=l(e,t,r);return t.length<2?r:o+n(t)}var I=E(function(e,r){var t,o="",s="",a=!1,i=function(){if(a&&"production"!==process.env.NODE_ENV)throw new Error("css can only be used during render");var e=m([].slice.call(arguments),r.registered);if(f)u(r,e,!1);else{var n=u(r,e,!1);void 0!==n&&(o+=n)}return f||(s+=" "+e.name),r.key+"-"+e.name},c={css:i,cx:function(){if(a&&"production"!==process.env.NODE_ENV)throw new Error("cx can only be used during render");return M(r.registered,i,S([].slice.call(arguments)))},theme:n(N)},l=e.children(c);return a=!0,f||0===o.length?l:h(Fragment,null,h("style",((t={})["data-emotion"]=r.key+" "+s.substring(1),t.dangerouslySetInnerHTML={__html:o},t.nonce=r.sheet.nonce,t)),l)});if("production"!==process.env.NODE_ENV&&(I.displayName="EmotionClassNames"),"production"!==process.env.NODE_ENV){var L="undefined"!=typeof document,C="undefined"!=typeof jest;if(L&&!C){var H=L?window:global,Z="__EMOTION_REACT_"+"10.10.24".split(".")[0]+"__";H[Z]&&console.warn("You are loading @zedvision/emotion-react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."),H[Z]=!0}}export{y as CacheProvider,I as ClassNames,V as Global,N as ThemeContext,b as ThemeProvider,T as createElement,j as css,T as jsx,z as keyframes,g as useTheme,E as withEmotionCache,w as withTheme};
//# sourceMappingURL=emotion-react.esm.js.map
