import{useContext as e,createElement as o}from"react";import t from"@zedvision/emotion-is-prop-valid";import{withEmotionCache as r,ThemeContext as n}from"@zedvision/emotion-react";import{getRegisteredStyles as i,insertStyles as a}from"@zedvision/emotion-utils";import{serializeStyles as s}from"@zedvision/emotion-serialize";function l(){return(l=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}const d=t,p=e=>"theme"!==e,c=e=>"string"==typeof e&&e.charCodeAt(0)>96?d:p,m=(e,o,t)=>{let r;if(o){const t=o.shouldForwardProp;r=e.__emotion_forwardProp&&t?o=>e.__emotion_forwardProp(o)&&t(o):t}return"function"!=typeof r&&t&&(r=e.__emotion_forwardProp),r},u="You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";let f="undefined"!=typeof document,_=(t,d)=>{if("production"!==process.env.NODE_ENV&&void 0===t)throw new Error("You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.");const p=t.__emotion_real===t,v=p&&t.__emotion_base||t;let y,g;void 0!==d&&(y=d.label,g=d.target);const b=m(t,d,p),N=b||c(v),w=!N("as");return function(){let E=arguments,O=p&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==y&&O.push(`label:${y};`),null==E[0]||void 0===E[0].raw)O.push.apply(O,E);else{"production"!==process.env.NODE_ENV&&void 0===E[0][0]&&console.error(u),O.push(E[0][0]);let e=E.length,o=1;for(;o<e;o++)"production"!==process.env.NODE_ENV&&void 0===E[0][o]&&console.error(u),O.push(E[o],E[0][o])}const P=r((t,r,l)=>{const d=w&&t.as||v;let p="",m=[],u=t;if(null==t.theme){u={};for(let e in t)u[e]=t[e];u.theme=e(n)}"string"==typeof t.className?p=i(r.registered,m,t.className):null!=t.className&&(p=`${t.className} `);const _=s(O.concat(m),r.registered,u),y=a(r,_,"string"==typeof d);p+=`${r.key}-${_.name}`,void 0!==g&&(p+=` ${g}`);const E=w&&void 0===b?c(d):N;let P={};for(let e in t)w&&"as"===e||E(e)&&(P[e]=t[e]);P.className=p,P.ref=l;const k=o(d,P);if(!f&&void 0!==y){let e=_.name,o=_.next;for(;void 0!==o;)e+=" "+o.name,o=o.next;return h(Fragment,null,h("style",{"data-emotion":`${r.key} ${e}`,dangerouslySetInnerHTML:{__html:y},nonce:r.sheet.nonce}),k)}return k});return P.displayName=void 0!==y?y:`Styled(${"string"==typeof v?v:v.displayName||v.name||"Component"})`,P.defaultProps=t.defaultProps,P.__emotion_real=P,P.__emotion_base=v,P.__emotion_styles=O,P.__emotion_forwardProp=b,Object.defineProperty(P,"toString",{value:()=>void 0===g&&"production"!==process.env.NODE_ENV?"NO_COMPONENT_SELECTOR":`.${g}`}),P.withComponent=(e,o)=>_(e,l({},d,o,{shouldForwardProp:m(P,o,!0)}))(...O),P}};const v=_.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(e=>{v[e]=v(e)});export default v;
//# sourceMappingURL=emotion-styled.modern.js.map
