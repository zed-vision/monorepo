function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var t=function(e,t){if(void 0===t&&(t=[]),"https://"===e.slice(0,8))return window.document.head.querySelector('script[src="'+e+'"]')||new Promise(function(n,o){var i=window.document.createElement("script");i.src=e,i.type="application/javascript",i.onload=function(){0===t.length&&n(window);var e={};t.forEach(function(t){return Object.assign(e,window[t])}),n(e)},i.onerror=o,window.document.head.appendChild(i)})},n=function(){return"undefined"!=typeof window&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)},o={};export default function(i){var s=i.onChange,r=i.code,a=i.language,c=i.options;try{var d=function(){return Promise.resolve(function(){try{return Promise.resolve(t("https://unpkg.com/monaco-editor@0.21.2/min/vs/loader.js")).then(function(e){var t=e.require;return t.config({paths:{vs:"https://unpkg.com/monaco-editor@0.21.2/min/vs"}}),Promise.resolve(new Promise(function(e){return t(["vs/editor/editor.main"],function(t){return e(t)})}))})}catch(e){return Promise.reject(e)}}()).then(function(t){function i(){var i={monaco:t,editor:t.editor.create(window.document.getElementById("container"),e({formatOnType:!1,scrollbar:{horizontal:"hidden",verticalHasArrows:!0,verticalScrollbarSize:20},minimap:{enabled:!1},folding:!1,glyphMargin:!1,wordWrap:"off",mouseWheelZoom:!1,wordWrapColumn:80,useTabStops:!1,dragAndDrop:!1,disableLayerHinting:!0,formatOnPaste:!1,disableMonospaceOptimizations:!0,showUnused:!0,automaticLayout:!0,scrollBeyondLastLine:!1,autoIndent:"full",accessibilitySupport:"off",autoClosingQuotes:"beforeWhitespace",padding:{bottom:300},lineNumbers:"on",autoClosingBrackets:"beforeWhitespace",autoClosingOvertype:"auto",suggest:{},codeLens:!0,autoSurround:"languageDefined",trimAutoWhitespace:!1,codeActionsOnSaveTimeout:100,model:d,value:r,language:a,theme:"vs-dark"},c))};return i.editor.onDidChangeModelContent(function(){return s(i.editor.getValue())}),n()&&(o&&o.session.on("change",function(){var e=o.getValue();i.editor.setValue(e),s(e)}),o&&p.getElementById("container").replaceWith(p.getElementById("ace"))),i.monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSuggestionDiagnostics:!0,noSemanticValidation:!0,noSyntaxValidation:!0}),function(){if("typescript"===a){var e=[{name:"react",url:"https://unpkg.com/@types/react@17.0.0/index.d.ts",depend:["global","csstype","react-dom","prop-types"]},{name:"global",url:"https://unpkg.com/@types/react@17.0.0/global.d.ts",depend:[]},{name:"prop-types",url:"https://unpkg.com/@types/prop-types@15.7.3/index.d.ts",depend:[]},{name:"react-dom",url:"https://unpkg.com/@types/react-dom@17.0.0/index.d.ts",depend:[]},{name:"csstype",url:"https://unpkg.com/csstype@3.0.5/index.d.ts",depend:[]},{name:"@emotion/styled/base.d.ts",url:"https://unpkg.com/@emotion/styled@11.0.0/types/base.d.ts",depend:["@emotion/react","@emotion/serialize","react"]},{name:"@emotion/styled/index.d.ts",url:"https://unpkg.com/@emotion/styled@11.0.0/types/index.d.ts",depend:["@emotion/react","@emotion/serialize","react"]},{name:"@emotion/cache/index.d.ts",url:"https://unpkg.com/@emotion/cache@11.0.0/types/index.d.ts",depend:["@emotion/utils"]},{name:"@emotion/react/index.d.ts",url:"https://unpkg.com/@emotion/react@11.1.4/types/index.d.ts",depend:["@emotion/cache"]},{name:"@emotion/react/jsx-namespace.d.ts",url:"https://unpkg.com/@emotion/react@11.1.4/types/jsx-namespace.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/css-prop.d.ts",url:"https://unpkg.com/@emotion/react@11.1.4/types/css-prop.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/helper.d.ts",url:"https://unpkg.com/@emotion/react@11.1.4/types/helper.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/react/theming.d.ts",url:"https://unpkg.com/@emotion/react@11.1.4/types/theming.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/serialize/index.d.ts",url:"https://unpkg.com/@emotion/serialize@1.0.0/types/index.d.ts",depend:["@emotion/utils","csstype"]},{name:"@emotion/utils/index.d.ts",url:"https://unpkg.com/@emotion/utils@1.0.0/types/index.d.ts",depend:[]},{name:"framer-motion",url:"https://unpkg.com/framer-motion@3.1.1/dist/framer-motion.d.ts",depend:[]},{name:"popmotion",url:"https://unpkg.com/popmotion@9.0.2/lib/index.d.ts"},{name:"@zedvision/qrious/index.d.ts",url:"https://unpkg.com/@zedvision/qrious@8.5.7/dist/qrious.d.ts"}].map(function(e){var t=e.name,n=e.url;return function(){try{var e=i.monaco.languages.typescript.typescriptDefaults,o=e.addExtraLib;return Promise.resolve(fetch(n)).then(function(n){return Promise.resolve(n.text()).then(function(n){return o.call(e,n,t.includes("@")?"file:///node_modules/"+t:"file:///node_modules/@types/"+t+"/index.d.ts")})})}catch(e){return Promise.reject(e)}}()});return i.monaco.languages.typescript.typescriptDefaults.setCompilerOptions({target:i.monaco.languages.typescript.ScriptTarget.ESNext,allowNonTsExtensions:!0,allowUmdGlobalAccess:!0,strict:!0,allowJs:!0,noEmitOnError:!0,allowSyntheticDefaultImports:!0,moduleResolution:i.monaco.languages.typescript.ModuleResolutionKind.Nodejs,module:i.monaco.languages.typescript.ModuleKind.CommonJS,noEmit:!0,typeRoots:["node_modules/@types"],jsx:"react-jsx",esModuleInterop:!0}),Promise.resolve(Promise.all(e)).then(function(){return i.monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSuggestionDiagnostics:!1,noSemanticValidation:!1,noSyntaxValidation:!1}),i})}}()}var d,u=function(e,n){try{var o=void((d=t.editor.getModel(m)).getValue()!==r&&d.setValue(r))}catch(e){return n()}return o&&o.then?o.then(void 0,n):o}(0,function(){return Promise.resolve(t.editor.createModel(r,a,t.Uri.parse(m))).then(function(e){d=e})});return u&&u.then?u.then(i):i()})},p=window.document,u=p.getElementById("container");u||((u=p.createElement("container")).id="container",p.body.appendChild(u));var m="typescript"===a?"file:///main.tsx":"file:///main.html",l=function(){if(n()){var e=window.document.createElement("div");return e.id="ace",window.document.body.appendChild(e),Promise.resolve(t("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.min.js")).then(function(){return Promise.resolve(t("typescript"===a?"https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-typescript.min.js":"https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-html.min.js")).then(function(e){return Promise.resolve(t("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/theme-monokai.min.js")).then(function(){window.document.getElementById("ace").style.setProperty("display","block"),u.style.setProperty("display","none"),(o=window.ace.edit("ace")).getSession().setMode("ace/mode/typescript"),function e(t){return setTimeout(function(){var n=(void 0).edit("ace");"ace/theme/monokai "!==n.getTheme()&&(n.setOptions({fontSize:"14pt"}),n.setTheme("ace/theme/monokai"),e(2*t))},t)}(100),o&&o.setValue(r),o&&o.blur()})})})}}();return Promise.resolve(l&&l.then?l.then(d):d())}catch(e){return Promise.reject(e)}}
//# sourceMappingURL=smart-monaco-editor.esm.js.map
