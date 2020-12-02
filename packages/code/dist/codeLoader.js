async function getKeys(apiKey, prefix) {
    try {
        const list = `https://code.zed.vision/keys/?prefix=${prefix}`;
        const req = await fetch(list, {
            headers: {
                "content-type": "application/json;charset=UTF-8",
                "API_KEY": apiKey
            }
        });
        const data = await req.json();
        return data.keys;
    } catch (e) {
        console.log(e);
        return [];
    }
}
const getKeys1 = getKeys;
const renderDraggableWindow = (onShare)=>{
    const DraggableWindow = ()=>{
        return jsx(React.Fragment, null, jsx(motion.div, {
            css: `\n            background: red;\n            border: 4px solid red;\n            border-radius: 8px;\n          `,
            animate: {
                scale: 1,
                top: 1,
                left: 600
            },
            dragElastic: 0.5,
            dragMomentum: false,
            initial: {
                top: 1,
                left: 0,
                scale: 0.7
            },
            transition: {
                duration: 0.5
            },
            drag: true,
            dragConstraints: {
                left: -window.innerWidth + 200,
                right: 0,
                bottom: window.innerHeight - 200,
                top: 0
            }
        }, jsx("div", {
            css: `\n      display: block;\n      with: 100%;\n      text-align: right;\n      background: linear-gradient(0deg, darkred, red);\n    `
        }, jsx("button", {
            css: `\n              background: darkred;\n              margin-top: -4px;\n              color: white;\n              cursor: pointer;\n              font-weight: bold;\n              font-family: Roboto;\n              padding: 8px 16px;\n              outline: none;\n              border: none;\n              border-radius: 0px 8px 0px 0px;\n            `,
            onClick: ()=>onShare()
        }, "🌎 SHARE")), jsx("div", {
            css: `  \n      min-width: 200px;\n      padding: 30px;\n      max-width: 600px;\n      background: white;\n      max-height: 800px;\n      border-radius: 0px 0px 8px 8px;\n      overflow-y: overlay;\n    `,
            id: "root"
        })));
    };
    ReactDOM.render(jsx(DraggableWindow), document.getElementById("dragabbleWindow"));
};
function renderDraggableEditor() {
    const jsFrame = new JSFrame();
    const frame = jsFrame.create({
        name: `Win`,
        title: `monaco`,
        width: window.innerWidth / 2 - 40,
        height: 600,
        minWidth: 300,
        minHeight: 300,
        appearanceName: "material",
        appearanceParam: {
            titleBar: {
                color: "white",
                height: 40,
                background: "red"
            }
        },
        style: {
            backgroundColor: "rgba(255,255,255,0.8)",
            overflow: "auto"
        },
        style: {
            backgroundColor: "rgba(0,0,0,0.8)",
            overflow: "hidden",
            width: "100%"
        },
        html: '<div id="container"></div>'
    });
    frame.setPosition(window.innerWidth - 32, 32, "RIGHT_TOP");
    frame.setControl({
        maximizeButton: "maximizeButton",
        demaximizeButton: "restoreButton",
        minimizeButton: "minimizeButton",
        deminimizeButton: "deminimizeButton",
        hideButton: "closeButton",
        animation: true,
        animationDuration: 150
    });
    frame.control.on("hid", (frame1, info)=>{
        frame1.closeFrame();
    });
    frame.control.on("maximized", (frame1, info)=>{
        jsFrame.showToast({
            text: "Maximized"
        });
    });
    frame.control.on("demaximized", (frame1, info)=>{
    });
    frame.control.on("minimized", (frame1, info)=>{
    });
    frame.control.on("dminimized", (frame1, info)=>{
    });
    frame.show();
    console.log(frame);
}
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        var s;
        s = window.document.createElement("script");
        s.src = src;
        s.onload = ()=>resolve(window)
        ;
        s.onerror = reject;
        window.document.head.appendChild(s);
    });
}
const importScript = async (src)=>document.querySelector(`script[src="${src}"]`) || new Promise(function(resolve, reject) {
        const s = window.document.createElement("script");
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        window.document.head.appendChild(s);
    })
;
const starter = `import { useState } from "react";\nimport { motion } from "framer-motion";\nimport { css, Global } from "@emotion/react";;\n\nconst Slider = () => {\n  const [sliderValue, setSlider] = useState(64);\n\n  return <>\n  <Global styles={css\`\n      body{\n          margin: 0;\n          background: rgb(\${sliderValue},\${255-sliderValue},255);\n          overflow: overlay;\n        }  \n    \`}/>\n    <input max="128"\n      css={\`\n        appearance: none;\n        width: 100%;\n        height: 40px; \n        background: rgb(\${sliderValue*2},\${255-2*sliderValue},0); \n        outline: none; \n    \`} type="range"\n      value={sliderValue} step="1"\n      onChangeCapture={(e) => setSlider(Number(e.currentTarget.value))}>\n    </input>\n    <motion.p\n      animate={{ fontSize: sliderValue + \`px\` }}>\n      Example when the text gets bigger...\n    </motion.p>\n      <motion.p animate={{fontSize:128-sliderValue+"px"}}>\n        ...or smaller\n    </motion.p>\n  </>\n}\n\nexport default () => <>\n  <Slider />\n</>\n`;
async function arrBuffSha256(msgBuffer) {
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b)=>("00" + b.toString(16)).slice(-2)
    ).join("");
    return hashHex;
}
const getDB = async ()=>{
    const { openDB  } = await import("https://unpkg.com/idb@5.0.8/build/esm/index.js");
    const dbPromise = openDB("localZedCodeStore", 1, {
        blocked () {
        },
        blocking () {
        },
        terminated () {
        },
        upgrade (db) {
            db.createObjectStore("codeStore");
        }
    });
    return {
        async get (key, format = "string") {
            const data = (await dbPromise).get("codeStore", key);
            if (!data) return null;
            if (format === "json") {
                return JSON.parse(data);
            }
            if (format === "string") {
                const allData = await data;
                if (typeof allData === format) return allData;
                const decoder = new TextDecoder();
                const text = decoder.decode(allData);
                return text;
            }
            return data;
        },
        async put (key, val) {
            let str;
            if (typeof val !== "string") {
                str = new TextDecoder().decode(val);
            } else {
                str = val;
            }
            return (await dbPromise).put("codeStore", str, key);
        },
        async delete (key) {
            return (await dbPromise).delete("codeStore", key);
        },
        async clear () {
            return (await dbPromise).clear("codeStore");
        },
        async keys () {
            return (await dbPromise).getAllKeys("codeStore");
        }
    };
};
const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c
    )
;
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction, 
    ]);
}
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey, 
    ]);
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    transactionDoneMap.set(tx, done);
}
const unwrap = (value)=>reverseTransformCache.get(value)
;
const readMethods = [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
];
const writeMethods = [
    'put',
    'add',
    'delete',
    'clear'
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (!(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function(storeName, ...args) {
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target1 = tx.store;
        if (useIndex) target1 = target1.index(args.shift());
        const returnVal = await target1[targetFuncName](...args);
        if (isWrite) await tx.done;
        return returnVal;
    };
    cachedMethods.set(prop, method);
    return method;
}
const DIFF_DELETE = -1;
function isSurrogatePairStart(charCode) {
    return charCode >= 55296 && charCode <= 56319;
}
function isSurrogatePairEnd(charCode) {
    return charCode >= 56320 && charCode <= 57343;
}
function startsWithPairEnd(str) {
    return isSurrogatePairEnd(str.charCodeAt(0));
}
function endsWithPairStart(str) {
    return isSurrogatePairStart(str.charCodeAt(str.length - 1));
}
function removeEmptyTuples(tuples) {
    const ret = [];
    for(let i = 0; i < tuples.length; i++){
        if (tuples[i][1].length > 0) {
            ret.push(tuples[i]);
        }
    }
    return ret;
}
function makeEditSplice(before, oldMiddle, newMiddle, after) {
    if (endsWithPairStart(before) || startsWithPairEnd(after)) {
        return null;
    }
    return removeEmptyTuples([
        [
            0,
            before
        ],
        [
            DIFF_DELETE,
            oldMiddle
        ],
        [
            1,
            newMiddle
        ],
        [
            0,
            after
        ], 
    ]);
}
function findCursorEditDiff(oldText, newText, cursorPos) {
    const oldRange = typeof cursorPos === "number" ? {
        index: cursorPos,
        length: 0
    } : cursorPos.oldRange;
    const newRange = typeof cursorPos === "number" ? null : cursorPos.newRange;
    const oldLength = oldText.length;
    const newLength = newText.length;
    if (oldRange.length === 0 && (newRange === null || newRange.length === 0)) {
        const oldCursor = oldRange.index;
        const oldBefore = oldText.slice(0, oldCursor);
        const oldAfter = oldText.slice(oldCursor);
        const maybeNewCursor = newRange ? newRange.index : null;
        editBefore: {
            const newCursor = oldCursor + newLength - oldLength;
            if (maybeNewCursor !== null && maybeNewCursor !== newCursor) {
                break editBefore;
            }
            if (newCursor < 0 || newCursor > newLength) {
                break editBefore;
            }
            const newBefore = newText.slice(0, newCursor);
            const newAfter = newText.slice(newCursor);
            if (newAfter !== oldAfter) {
                break editBefore;
            }
            const prefixLength = Math.min(oldCursor, newCursor);
            const oldPrefix = oldBefore.slice(0, prefixLength);
            const newPrefix = newBefore.slice(0, prefixLength);
            if (oldPrefix !== newPrefix) {
                break editBefore;
            }
            const oldMiddle = oldBefore.slice(prefixLength);
            const newMiddle = newBefore.slice(prefixLength);
            return makeEditSplice(oldPrefix, oldMiddle, newMiddle, oldAfter);
        }
        editAfter: {
            if (maybeNewCursor !== null && maybeNewCursor !== oldCursor) {
                break editAfter;
            }
            const cursor = oldCursor;
            const newBefore = newText.slice(0, oldCursor);
            const newAfter = newText.slice(oldCursor);
            if (newBefore !== oldBefore) {
                break editAfter;
            }
            const suffixLength = Math.min(oldLength - oldCursor, newLength - oldCursor);
            const oldSuffix = oldAfter.slice(oldAfter.length - suffixLength);
            const newSuffix = newAfter.slice(newAfter.length - suffixLength);
            if (oldSuffix !== newSuffix) {
                break editAfter;
            }
            const oldMiddle = oldAfter.slice(0, oldAfter.length - suffixLength);
            const newMiddle = newAfter.slice(0, newAfter.length - suffixLength);
            return makeEditSplice(oldBefore, oldMiddle, newMiddle, oldSuffix);
        }
    }
    if (oldRange.length > 0 && newRange && newRange.length === 0) {
        replaceRange: {
            const oldPrefix = oldText.slice(0, oldRange.index);
            const oldSuffix = oldText.slice(oldRange.index + oldRange.length);
            const prefixLength = oldPrefix.length;
            const suffixLength = oldSuffix.length;
            if (newLength < prefixLength + suffixLength) {
                break replaceRange;
            }
            const newPrefix = newText.slice(0, prefixLength);
            const newSuffix = newText.slice(newLength - suffixLength);
            if (oldPrefix !== newPrefix || oldSuffix !== newSuffix) {
                break replaceRange;
            }
            const oldMiddle = oldText.slice(prefixLength, oldLength - suffixLength);
            const newMiddle = newText.slice(prefixLength, newLength - suffixLength);
            return makeEditSplice(oldPrefix, oldMiddle, newMiddle, oldSuffix);
        }
    }
    return null;
}
diff.INSERT = 1;
diff.DELETE = DIFF_DELETE;
diff.EQUAL = 0;
var ReactDOM = window.ReactDOM;
const getUrl = ()=>{
    if (document.location.href.includes("zed.dev")) {
        return "https://code.zed.dev";
    }
    return "https://code.zed.vision";
};
let firstLoad = true;
let latestCode = "";
let busy = 0;
let keystrokeTillNoError = 0;
let errorReported = "";
let latestSavedCode = "";
let latestGoodCode = "";
let shareItAsHtml;
async function deleteHash(apiKey, hash) {
    try {
        const url = `https://code.zed.vision/keys/delete/?hash=${hash}`;
        const req = await fetch(url, {
            headers: {
                "content-type": "application/json;charset=UTF-8",
                "API_KEY": apiKey
            }
        });
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}
async function getCode(hash) {
    try {
        const list = `https://code.zed.vision/?h=${hash}`;
        const req = await fetch(list, {
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
        const data = await req.json();
        if (data.code) return data.code;
        return "";
    } catch (e) {
        console.log(e);
        return "";
    }
}
async function getTranspiledCode(hash) {
    try {
        const list = `https://code.zed.vision/?h=${hash}`;
        const req = await fetch(list, {
            headers: {
                "content-type": "application/json;charset=UTF-8"
            }
        });
        const data = await req.json();
        if (data.codeTranspiled) return data.codeTranspiled;
        return "";
    } catch (e) {
        console.log(e);
        return "";
    }
}
async function getUserId() {
    const codeDB = await getDB();
    const uuid = await codeDB.get("uuid");
    if (!uuid) {
        if (!window.location.href.includes("zed.dev")) {
            const resp = await fetch("https://code.zed.vision/register");
            const data = await resp.json();
            codeDB.put("uuid", data.uuid);
            return data.uuid;
        } else {
            codeDB.put("uuid", "1234");
        }
    }
    return uuid;
}
function replaceWithEmpty(elementId = "root") {
    const el = document.createElement("div");
    const rootEl = document.getElementById(elementId);
    try {
        ReactDOM.unmountComponentAtNode(rootEl);
    } catch (e) {
        console.error("Error in un-mount", e);
    }
    if (rootEl) rootEl.replaceWith(el);
    else {
        document.body.appendChild(el);
    }
    el.id = elementId;
}
const startMonaco = async ({ onChange , code , language  })=>{
    const container = window.document.getElementById("container");
    if (!container) {
        const el = document.getElementById("container");
        el.id = "container";
        document.body.appendChild(el);
    }
    const modelUri = language === "typescript" ? "file:///main.tsx" : "file:///main.html";
    let aceEditor;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent)) {
        const aceEl = window.document.createElement("div");
        aceEl.id = "ace";
        window.document.body.appendChild(aceEl);
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/ace.min.js");
        language === "typescript" ? await loadScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-typescript.min.js") : await loadScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/mode-html.min.js");
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.12/theme-monokai.min.js");
        window.document.getElementById("ace").style.setProperty("display", "block");
        container.style.setProperty("display", "none");
        aceEditor = window["ace"].edit("ace");
        aceEditor.getSession().setMode("ace/mode/typescript");
        const setThemeForAce = (wait)=>setTimeout(()=>{
                let aceEditor1 = window["ace"].edit("ace");
                let theme = aceEditor1.getTheme();
                if (theme !== "ace/theme/monokai ") {
                    aceEditor1.setOptions({
                        fontSize: "14pt"
                    });
                    aceEditor1.setTheme("ace/theme/monokai");
                    setThemeForAce(2 * wait);
                }
            }, wait)
        ;
        setThemeForAce(100);
        aceEditor.setValue(code);
        aceEditor.blur();
    }
    if (window["monaco"] === undefined) {
        const vsPath = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.21.2/min/vs";
        const { require  } = await loadScript(`${vsPath}/loader.min.js`);
        require.config({
            paths: {
                "vs": vsPath
            }
        });
        await new Promise((resolve)=>require([
                "vs/editor/editor.main"
            ], (monaco)=>{
                resolve(monaco);
            })
        );
    }
    const monaco = window["monaco"];
    const modules = {
        monaco: monaco,
        editor: monaco.editor.create(window.document.getElementById("container"), {
            formatOnType: true,
            scrollbar: {
                horizontal: "hidden",
                verticalHasArrows: true,
                verticalScrollbarSize: 20
            },
            minimap: {
                enabled: false
            },
            folding: false,
            multiCursorModifier: "alt",
            wordWrap: "on",
            wordWrapBreakAfterCharacters: ">([{]))],;}",
            mouseWheelZoom: false,
            wordWrapColumn: 80,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            autoIndent: "brackets",
            autoClosingQuotes: "always",
            padding: {
                bottom: 300
            },
            lineNumbers: "on",
            autoClosingBrackets: "always",
            autoClosingOvertype: "always",
            suggest: {
            },
            codeLens: true,
            autoSurround: "languageDefined",
            trimAutoWhitespace: true,
            codeActionsOnSaveTimeout: 100,
            model: monaco.editor.getModel(modelUri) || monaco.editor.createModel(code, language, monaco.Uri.parse(modelUri)),
            value: code,
            language: language,
            theme: "vs-dark"
        })
    };
    modules.editor.onDidChangeModelContent(()=>onChange(modules.editor.getValue())
    );
    aceEditor && aceEditor.session.on("change", function() {
        const value = aceEditor.getValue();
        modules.editor.setValue(value);
        onChange(value);
    });
    aceEditor && document.getElementById("container").replaceWith(document.getElementById("ace"));
    modules.monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSuggestionDiagnostics: true,
        noSemanticValidation: true,
        noSyntaxValidation: true
    });
    if (language === "typescript") {
        const importHelper = [
            {
                name: "react",
                url: "https://unpkg.com/@types/react@17.0.0/index.d.ts",
                depend: [
                    "global",
                    "csstype",
                    "react-dom",
                    "prop-types"
                ]
            },
            {
                name: "global",
                url: "https://unpkg.com/@types/react@17.0.0/global.d.ts",
                depend: []
            },
            {
                name: "prop-types",
                url: "https://unpkg.com/@types/prop-types@15.7.3/index.d.ts",
                depend: []
            },
            {
                name: "react-dom",
                url: "https://unpkg.com/@types/react-dom@17.0.0/index.d.ts",
                depend: []
            },
            {
                name: "csstype",
                url: "https://unpkg.com/csstype@3.0.5/index.d.ts",
                depend: []
            },
            {
                name: "@emotion/styled/base.d.ts",
                url: "https://unpkg.com/@emotion/styled@11.0.0/types/base.d.ts",
                depend: [
                    "@emotion/react",
                    "@emotion/serialize",
                    "react"
                ]
            },
            {
                name: "@emotion/styled/index.d.ts",
                url: "https://unpkg.com/@emotion/styled@11.0.0/types/index.d.ts",
                depend: [
                    "@emotion/react",
                    "@emotion/serialize",
                    "react"
                ]
            },
            {
                name: "@emotion/cache/index.d.ts",
                url: "https://unpkg.com/@emotion/cache@11.0.0/types/index.d.ts",
                depend: [
                    "@emotion/utils"
                ]
            },
            {
                name: "@emotion/react/index.d.ts",
                url: "https://unpkg.com/@emotion/react@11.1.1/types/index.d.ts",
                depend: [
                    "@emotion/cache"
                ]
            },
            {
                name: "@emotion/react/jsx-namespace.d.ts",
                url: "https://unpkg.com/@emotion/react@11.1.1/types/jsx-namespace.d.ts",
                depend: [
                    "@emotion/utils",
                    "csstype"
                ]
            },
            {
                name: "@emotion/react/css-prop.d.ts",
                url: "https://unpkg.com/@emotion/react@11.1.1/types/css-prop.d.ts",
                depend: [
                    "@emotion/utils",
                    "csstype"
                ]
            },
            {
                name: "@emotion/react/helper.d.ts",
                url: "https://unpkg.com/@emotion/react@11.1.1/types/helper.d.ts",
                depend: [
                    "@emotion/utils",
                    "csstype"
                ]
            },
            {
                name: "@emotion/react/theming.d.ts",
                url: "https://unpkg.com/@emotion/react@11.1.1/types/theming.d.ts",
                depend: [
                    "@emotion/utils",
                    "csstype"
                ]
            },
            {
                name: "@emotion/serialize/index.d.ts",
                url: "https://unpkg.com/@emotion/serialize@1.0.0/types/index.d.ts",
                depend: [
                    "@emotion/utils",
                    "csstype"
                ]
            },
            {
                name: "@emotion/utils/index.d.ts",
                url: "https://unpkg.com/@emotion/utils@1.0.0/types/index.d.ts",
                depend: []
            },
            {
                name: "framer-motion",
                url: "https://unpkg.com/framer-motion@2.9.5/dist/framer-motion.d.ts",
                depend: []
            },
            {
                name: "popmotion",
                url: "https://unpkg.com/browse/popmotion@9.0.1/lib/index.d.ts"
            }, 
        ];
        const dts = importHelper.map(({ name , url  })=>(async ()=>modules.monaco.languages.typescript.typescriptDefaults.addExtraLib(await (await fetch(url)).text(), name.includes("@emotion") ? `file:///node_modules/${name}` : `file:///node_modules/@types/${name}/index.d.ts`)
            )()
        );
        modules.monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: modules.monaco.languages.typescript.ScriptTarget.ESNext,
            allowNonTsExtensions: true,
            allowUmdGlobalAccess: true,
            strict: true,
            allowJs: true,
            noEmitOnError: true,
            allowSyntheticDefaultImports: true,
            moduleResolution: modules.monaco.languages.typescript.ModuleResolutionKind.Nodejs,
            module: modules.monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            typeRoots: [
                "node_modules/@types"
            ],
            jsx: "react-jsx",
            esModuleInterop: true
        });
        await Promise.all(dts);
        modules.monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            noSuggestionDiagnostics: false,
            noSemanticValidation: false,
            noSyntaxValidation: false
        });
        return modules;
    }
};
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashHex = await arrBuffSha256(msgBuffer);
    return hashHex.substr(0, 8);
}
function diffCommonPrefix(text1, text2) {
    if (!text1 || !text2 || text1.charAt(0) !== text2.charAt(0)) {
        return 0;
    }
    let pointerMin = 0;
    let pointerMax = Math.min(text1.length, text2.length);
    let pointerMid = pointerMax;
    let pointerStart = 0;
    while(pointerMin < pointerMid){
        if (text1.substring(pointerStart, pointerMid) == text2.substring(pointerStart, pointerMid)) {
            pointerMin = pointerMid;
            pointerStart = pointerMin;
        } else {
            pointerMax = pointerMid;
        }
        pointerMid = Math.floor((pointerMax - pointerMin) / 2 + pointerMin);
    }
    if (isSurrogatePairStart(text1.charCodeAt(pointerMid - 1))) {
        pointerMid--;
    }
    return pointerMid;
}
function diffCommonSuffix(text1, text2) {
    if (!text1 || !text2 || text1.slice(-1) !== text2.slice(-1)) {
        return 0;
    }
    let pointerMin = 0;
    let pointerMax = Math.min(text1.length, text2.length);
    let pointerMid = pointerMax;
    let pointerEnd = 0;
    while(pointerMin < pointerMid){
        if (text1.substring(text1.length - pointerMid, text1.length - pointerEnd) == text2.substring(text2.length - pointerMid, text2.length - pointerEnd)) {
            pointerMin = pointerMid;
            pointerEnd = pointerMin;
        } else {
            pointerMax = pointerMid;
        }
        pointerMid = Math.floor((pointerMax - pointerMin) / 2 + pointerMin);
    }
    if (isSurrogatePairEnd(text1.charCodeAt(text1.length - pointerMid))) {
        pointerMid--;
    }
    return pointerMid;
}
function diffHalfMatch_(text1, text2) {
    const longtext = text1.length > text2.length ? text1 : text2;
    const shorttext = text1.length > text2.length ? text2 : text1;
    if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
        return null;
    }
    function diffHalfMatchI_(longtext1, shorttext1, i) {
        const seed = longtext1.substring(i, i + Math.floor(longtext1.length / 4));
        let j = -1;
        let bestCommon = "";
        let bestLongtextA, bestLongtextB, bestShorttextA, bestShorttextB;
        while((j = shorttext1.indexOf(seed, j + 1)) !== -1){
            const prefixLength = diffCommonPrefix(longtext1.substring(i), shorttext1.substring(j));
            const suffixLength = diffCommonSuffix(longtext1.substring(0, i), shorttext1.substring(0, j));
            if (bestCommon.length < suffixLength + prefixLength) {
                bestCommon = shorttext1.substring(j - suffixLength, j) + shorttext1.substring(j, j + prefixLength);
                bestLongtextA = longtext1.substring(0, i - suffixLength);
                bestLongtextB = longtext1.substring(i + prefixLength);
                bestShorttextA = shorttext1.substring(0, j - suffixLength);
                bestShorttextB = shorttext1.substring(j + prefixLength);
            }
        }
        if (bestCommon.length * 2 >= longtext1.length) {
            return [
                bestLongtextA,
                bestLongtextB,
                bestShorttextA,
                bestShorttextB,
                bestCommon, 
            ];
        } else {
            return null;
        }
    }
    const hm1 = diffHalfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
    const hm2 = diffHalfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
    let hm;
    if (hm2 === null && hm1 === null) return null;
    else if (hm2 === null) {
        if (hm1 === null) {
            return null;
        }
        hm = hm1;
    } else if (hm1 === null) {
        if (hm2 === null) {
            return null;
        }
        hm = hm2;
    } else {
        hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
    }
    let text1A, text1B, text2A, text2B;
    if (text1.length > text2.length) {
        text1A = hm[0];
        text1B = hm[1];
        text2A = hm[2];
        text2B = hm[3];
    } else {
        text2A = hm[0];
        text2B = hm[1];
        text1A = hm[2];
        text1B = hm[3];
    }
    const midCommon = hm[4];
    return [
        text1A,
        text1B,
        text2A,
        text2B,
        midCommon
    ];
}
function diffCleanupMerge(Diffs) {
    const diffs = [
        ...Diffs
    ];
    diffs.push([
        0,
        ""
    ]);
    let pointer = 0;
    let countDelete = 0;
    let countInsert = 0;
    let textDelete = "";
    let textInsert = "";
    let commonlength;
    let previousEquality;
    while(pointer < diffs.length){
        if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
            diffs.splice(pointer, 1);
            continue;
        }
        switch(diffs[pointer][0]){
            case 1:
                countInsert++;
                textInsert += diffs[pointer][1];
                pointer++;
                break;
            case DIFF_DELETE:
                countDelete++;
                textDelete += diffs[pointer][1];
                pointer++;
                break;
            case 0:
                previousEquality = pointer - countInsert - countDelete - 1;
                if (pointer < diffs.length - 1 && !diffs[pointer][1]) {
                    diffs.splice(pointer, 1);
                    break;
                }
                if (textDelete.length > 0 || textInsert.length > 0) {
                    if (textDelete.length > 0 && textInsert.length > 0) {
                        commonlength = diffCommonPrefix(textInsert, textDelete);
                        if (commonlength !== 0) {
                            if (previousEquality >= 0) {
                                diffs[previousEquality][1] += textInsert.substring(0, commonlength);
                            } else {
                                diffs.splice(0, 0, [
                                    0,
                                    textInsert.substring(0, commonlength)
                                ]);
                                pointer++;
                            }
                            textInsert = textInsert.substring(commonlength);
                            textDelete = textDelete.substring(commonlength);
                        }
                        commonlength = diffCommonSuffix(textInsert, textDelete);
                        if (commonlength !== 0) {
                            diffs[pointer][1] = textInsert.substring(textInsert.length - commonlength) + diffs[pointer][1];
                            textInsert = textInsert.substring(0, textInsert.length - commonlength);
                            textDelete = textDelete.substring(0, textDelete.length - commonlength);
                        }
                    }
                    const n = countInsert + countDelete;
                    if (textDelete.length === 0 && textInsert.length === 0) {
                        diffs.splice(pointer - n, n);
                        pointer = pointer - n;
                    } else if (textDelete.length === 0) {
                        diffs.splice(pointer - n, n, [
                            1,
                            textInsert
                        ]);
                        pointer = pointer - n + 1;
                    } else if (textInsert.length === 0) {
                        diffs.splice(pointer - n, n, [
                            DIFF_DELETE,
                            textDelete
                        ]);
                        pointer = pointer - n + 1;
                    } else {
                        diffs.splice(pointer - n, n, [
                            DIFF_DELETE,
                            textDelete
                        ], [
                            1,
                            textInsert
                        ]);
                        pointer = pointer - n + 2;
                    }
                }
                if (pointer !== 0 && diffs[pointer - 1][0] === 0) {
                    diffs[pointer - 1][1] += diffs[pointer][1];
                    diffs.splice(pointer, 1);
                } else {
                    pointer++;
                }
                countInsert = 0;
                countDelete = 0;
                textDelete = "";
                textInsert = "";
                break;
        }
    }
    if (diffs[diffs.length - 1][1] === "") {
        diffs.pop();
    }
    let changes = false;
    pointer = 1;
    while(pointer < diffs.length - 1){
        if (diffs[pointer - 1][0] === 0 && diffs[pointer + 1][0] === 0) {
            if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) === diffs[pointer - 1][1]) {
                diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
                diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
                diffs.splice(pointer - 1, 1);
                changes = true;
            } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
                diffs[pointer - 1][1] += diffs[pointer + 1][1];
                diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
                diffs.splice(pointer + 1, 1);
                changes = true;
            }
        }
        pointer++;
        isSurrogatePairStart;
    }
    if (changes) {
        ``;
        return diffCleanupMerge(diffs);
    }
    return diffs;
}
export const getProjects = async ()=>{
    const uuid = await getUserId();
    const codeDB = await getDB();
    const projects = await codeDB.get(uuid, "json");
    if (!projects) {
        await codeDB.put(uuid, JSON.stringify([]));
        return [];
    }
    return projects;
};
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise.then((value)=>{
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
    }).catch(()=>{
    });
    reverseTransformCache.set(promise, request);
    return promise;
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            if (prop === 'done') return transactionDoneMap.get(target);
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            if (prop === 'store') {
                return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
        return function(storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [
                storeNames
            ]);
            return wrap(tx);
        };
    }
    if (getCursorAdvanceMethods().includes(func)) {
        return function(...args) {
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function(...args) {
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function') return wrapFunction(value);
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    return value;
}
function wrap(value) {
    if (value instanceof IDBRequest) return promisifyRequest(value);
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver)
        ,
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    })
);
function diffMain({ text1 , text2 , cursorPos  }) {
    if (text1 === text2) {
        if (text1) {
            return [
                [
                    0,
                    text1
                ]
            ];
        }
        return [];
    }
    if (cursorPos) {
        const editdiff = findCursorEditDiff(text1, text2, cursorPos);
        if (editdiff) {
            return editdiff;
        }
    }
    let commonlength = diffCommonPrefix(text1, text2);
    const commonprefix = text1.substring(0, commonlength);
    text1 = text1.substring(commonlength);
    text2 = text2.substring(commonlength);
    commonlength = diffCommonSuffix(text1, text2);
    const commonsuffix = text1.substring(text1.length - commonlength);
    text1 = text1.substring(0, text1.length - commonlength);
    text2 = text2.substring(0, text2.length - commonlength);
    const diffs = diffCompute_(text1, text2);
    if (commonprefix) {
        diffs.unshift([
            0,
            commonprefix
        ]);
    }
    if (commonsuffix) {
        diffs.push([
            0,
            commonsuffix
        ]);
    }
    diffCleanupMerge(diffs);
    return diffs;
}
function diffCompute_(text1, text2) {
    let diffs;
    if (!text1) {
        return [
            [
                1,
                text2
            ]
        ];
    }
    if (!text2) {
        return [
            [
                DIFF_DELETE,
                text1
            ]
        ];
    }
    const longtext = text1.length > text2.length ? text1 : text2;
    const shorttext = text1.length > text2.length ? text2 : text1;
    const i = longtext.indexOf(shorttext);
    if (i !== -1) {
        diffs = [
            [
                1,
                longtext.substring(0, i)
            ],
            [
                0,
                shorttext
            ],
            [
                1,
                longtext.substring(i + shorttext.length)
            ], 
        ];
        if (text1.length > text2.length) {
            diffs[0][0] = diffs[2][0] = DIFF_DELETE;
        }
        return diffs;
    }
    if (shorttext.length === 1) {
        return [
            [
                DIFF_DELETE,
                text1
            ],
            [
                1,
                text2
            ]
        ];
    }
    const hm = diffHalfMatch_(text1, text2);
    if (hm) {
        const text1C = hm[0] || "";
        const text1B = hm[1] || "";
        const text2C = hm[2] || "";
        const text2B = hm[3] || "";
        const midCommon = hm[4] || "";
        const diffsA = diffMain({
            text1: text1C,
            text2: text2C,
            cursorPos: 0
        });
        const diffsB = diffMain({
            text1: text1B,
            text2: text2B,
            cursorPos: 0
        });
        return diffsA.concat([
            [
                0,
                midCommon[1]
            ]
        ], diffsB);
    }
    return diffBisect_(text1, text2);
}
function diffBisect_(text1, text2) {
    const text1Length = text1.length;
    const text2Length = text2.length;
    const maxD = Math.ceil((text1Length + text2Length) / 2);
    const vOffset = maxD;
    const vLength = 2 * maxD;
    const v1 = new Array(vLength);
    const v2 = new Array(vLength);
    for(let x = 0; x < vLength; x++){
        v1[x] = -1;
        v2[x] = -1;
    }
    v1[maxD + 1] = 0;
    v2[maxD + 1] = 0;
    const delta = text1Length - text2Length;
    const front = delta % 2 !== 0;
    let k1start = 0;
    let k1end = 0;
    let k2start = 0;
    let k2end = 0;
    for(let d = 0; d < maxD; d++){
        for(let k1 = -d + k1start; k1 <= d - k1end; k1 += 2){
            const k1Offset = maxD + k1;
            let x1;
            if (k1 === -d || k1 !== d && v1[k1Offset - 1] < v1[k1Offset + 1]) {
                x1 = v1[k1Offset + 1];
            } else {
                x1 = v1[k1Offset - 1] + 1;
            }
            let y1 = x1 - k1;
            while(x1 < text1Length && y1 < text2Length && text1.charAt(x1) === text2.charAt(y1)){
                x1++;
                y1++;
            }
            v1[k1Offset] = x1;
            if (x1 > text1Length) {
                k1end += 2;
            } else if (y1 > text2Length) {
                k1start += 2;
            } else if (front) {
                const k2Offset = maxD + delta - k1;
                if (k2Offset >= 0 && k2Offset < vLength && v2[k2Offset] !== -1) {
                    const x2 = text1Length - v2[k2Offset];
                    if (x1 >= x2) {
                        return diffBisectSplit_(text1, text2, x1, y1);
                    }
                }
            }
        }
        let x2;
        for(let k2 = -d + k2start; k2 <= d - k2end; k2 += 2){
            const k2Offset = maxD + k2;
            if (k2 === -d || k2 !== d && v2[k2Offset - 1] < v2[k2Offset + 1]) {
                x2 = v2[k2Offset + 1];
            } else {
                x2 = v2[k2Offset - 1] + 1;
            }
            let y2 = x2 - k2;
            while(x2 < text1Length && y2 < text2Length && text1.charAt(text1Length - x2 - 1) === text2.charAt(text2Length - y2 - 1)){
                x2++;
                y2++;
            }
            v2[k2Offset] = x2;
            if (x2 > text1Length) {
                k2end += 2;
            } else if (y2 > text2Length) {
                k2start += 2;
            } else if (!front) {
                const k1Offset = maxD + delta - k2;
                if (k1Offset >= 0 && k1Offset < vLength && v1[k1Offset] !== -1) {
                    const x1 = v1[k1Offset];
                    const y1 = maxD + x1 - k1Offset;
                    x2 = text1Length - x2;
                    if (x1 >= x2) {
                        return diffBisectSplit_(text1, text2, x1, y1);
                    }
                }
            }
        }
    }
    return [
        [
            DIFF_DELETE,
            text1
        ],
        [
            1,
            text2
        ]
    ];
}
function diffBisectSplit_(text1, text2, x, y) {
    const text1a = text1.substring(0, x);
    const text2a = text2.substring(0, y);
    const text1b = text1.substring(x);
    const text2b = text2.substring(y);
    const diffs = diffMain({
        text1: text1a,
        text2: text2a,
        cursorPos: 0
    });
    const diffsB = diffMain({
        text1: text1b,
        text2: text2b,
        cursorPos: 0
    });
    return diffs.concat(diffsB);
}
function diff(text1, text2, cursorPos) {
    return diffMain({
        text1,
        text2,
        cursorPos
    });
}
export async function run(mode = "window") {
    const codeDB = await getDB();
    const uuid = await getUserId();
    async function regenerate(apiKey, prefix, deleteIfRenderedHTmlDiffers = false) {
        const keys = await getKeys(apiKey, prefix);
        keys.map((x)=>x.name
        ).map(async (hash)=>{
            const code = await getCode(hash);
            if (!code) return "";
            const codeTranspiled = await getTranspiledCode(hash);
            replaceWithEmpty("root");
            let transpiled;
            try {
                transpiled = transpileCode(code);
                if (transpiled !== codeTranspiled) {
                    const searchRegExp = /setInterval/gi;
                    const replaceWith = "///";
                    const searchRegExp2 = /debugger/gi;
                    const replaceWith2 = "///";
                    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
                    restartCode(transpiled.replaceAll(searchRegExp, replaceWith).replaceAll(searchRegExp2, replaceWith2));
                    const html2 = document.getElementById("root").innerHTML;
                    replaceWithEmpty("root");
                    restartCode(codeTranspiled.replaceAll(searchRegExp, replaceWith).replaceAll(searchRegExp2, replaceWith2));
                    const html = document.getElementById("root").innerHTML;
                    if (html !== html2) {
                        console.log({
                            hash,
                            code,
                            html1: html,
                            html2,
                            transpiled1: codeTranspiled,
                            transpiled2: transpiled
                        });
                        deleteIfRenderedHTmlDiffers && await deleteHash(apiKey, hash);
                    }
                }
            } catch (e) {
                console.error({
                    hash,
                    code,
                    transpiled
                });
            }
        });
    }
    Object.assign(window, {
        getKeys: getKeys,
        getCode,
        restartCode,
        regenerate
    });
    if (mode === "editor") {
        renderDraggableEditor();
    }
    if (mode == "window") {
        renderDraggableWindow(async ()=>{
            const link = await shareItAsHtml();
            window.open(link);
        });
    }
    await importScript("https://unpkg.com/@babel/standalone@7.12.9/babel.min.js");
    (async ()=>{
        const example = await getCodeToLoad();
        latestGoodCode = example;
        const modules = await startMonaco({
            language: "typescript",
            code: example,
            onChange
        });
        function onChange(code) {
            if (!modules) return;
            latestCode = code;
            if (!busy) {
                runner(latestCode);
            } else {
                const myCode = code;
                const cl = setInterval(()=>{
                    if (code !== latestCode || !busy) {
                        clearInterval(cl);
                    }
                    if (!busy) {
                        runner(latestCode);
                    }
                }, 100);
            }
        }
        async function getErrors() {
            if (!modules || !modules.monaco) return;
            const modelUri = modules.monaco.Uri.parse("file:///main.tsx");
            const tsWorker = await modules.monaco.languages.typescript.getTypeScriptWorker();
            const diag = await (await tsWorker(modelUri)).getSemanticDiagnostics("file:///main.tsx");
            const comp = await (await tsWorker(modelUri)).getCompilerOptionsDiagnostics("file:///main.tsx");
            const syntax = await (await tsWorker(modelUri)).getSyntacticDiagnostics("file:///main.tsx");
            return [
                ...diag,
                ...comp,
                ...syntax
            ];
        }
        async function runner(cd) {
            if (busy === 1) {
                return;
            }
            try {
                busy = 1;
                const err = await getErrors();
                const errorDiv = document.getElementById("error");
                busy = 0;
                if (cd !== latestCode) {
                    return;
                }
                if (err && err.length) {
                    if (latestCode != cd) {
                        return;
                    }
                    if (errorReported === cd) {
                        return;
                    }
                    const slices = diff(latestGoodCode, cd, 0);
                    if (slices.length <= 3) {
                        modules.monaco.editor.setTheme("hc-black");
                        return;
                    }
                    errorDiv.innerHTML = err[0].messageText.toString();
                    errorDiv.style.display = "block";
                    errorReported = cd;
                    return;
                }
                latestGoodCode = cd;
                errorDiv.style.display = "none";
                modules.monaco.editor.setTheme("vs-dark");
                keystrokeTillNoError = 0;
                busy = 0;
                restartCode(transpileCode(cd));
            } catch (err) {
                busy = 0;
                if (cd !== latestCode) {
                    return;
                }
                modules.monaco.editor.setTheme("vs-light");
                setTimeout(()=>{
                    modules.monaco.editor.setTheme("hc-black");
                }, 50);
                console.error(err);
            }
        }
    })();
    restartCode(transpileCode(await getCodeToLoad()));
    async function restartCode(transPiled) {
        const searchRegExp = /import/gi;
        const replaceWith = "///";
        const code = `\n    Object.assign(window, React);\n    if (window.Motion) {\n        Object.assign(window, window.Motion);\n    }\n    if (window.emotionStyled){\n      window.styled= window.emotionStyled;\n    }\n    ;\n    ` + transPiled.replaceAll(searchRegExp, replaceWith).replace("export default", "DefaultElement = ");
        const restart = async ()=>{
            const hydrate = new Function("code", `return function(){  \n          let DefaultElement;\n        \n        ${code}\n\n                return ReactDOM.render(jsx(DefaultElement), document.getElementById("root"));\n      }`)();
            hydrate();
            shareItAsHtml = async ()=>{
                const renderToString = new Function("code", `return function(){\n            let DefaultElement;\n  \n          ${code}\n  \n                  return ReactDOMServer.renderToString(jsx(DefaultElement));\n        }`)();
                const HTML = renderToString();
                const css = Array.from(document.querySelector("head > style[data-emotion=css]").sheet.cssRules).map((x)=>x.cssText
                ).filter((cssRule)=>HTML.includes(cssRule.substring(3, 8))
                ).join("\n  ");
                let bodyStylesFix;
                if (code.includes("body{")) {
                    const start = code.indexOf("body{");
                    const firstBit = code.slice(start);
                    const last = firstBit.indexOf("}");
                    bodyStylesFix = firstBit.slice(0, last + 1);
                }
                let motionDep = "";
                let motionScript = "";
                if (code.includes("Motion")) {
                    motionDep = `<script crossorigin src="https://unpkg.com/framer-motion@2.9.4/dist/framer-motion.js"></script>`;
                    motionScript = "const {motion} = Motion";
                }
                const iframe = `<!DOCTYPE html>\n        <html lang="en">\n        <head>\n        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n        <head profile="http://www.w3.org/2005/10/profile">\n        <link rel="icon" \n              type="image/png"\n              href="https://zed.vision/favicon.ico">\n        <style>\n        ${bodyStylesFix}\n        ${css}\n        </style>\n        </head>\n        <body>\n        <div id="root">\n        ${HTML}\n        </div>\n        <script crossorigin src="https://unpkg.com/react@17.0.1/umd/react.production.min.js"></script>\n        ${motionDep}\n        <script crossorigin src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js"></script>\n        <script crossorigin src="https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js"></script>\n        <script crossorigin src="https://unpkg.com/@emotion/styled@11.0.0/dist/emotion-styled.umd.min.js"></script>\n        <script type="module">\n        Object.assign(window, emotionReact);\n\n       const styled = window["emotionStyled"];\n\n        let DefaultElement;\n\n        ${code}\n\n        ReactDOM.hydrate(jsx(DefaultElement), document.body.children[0]);\n        </script>\n        </body>\n        </html>\n        `;
                const iframeBlob = await createHTMLSourceBlob(iframe);
                const link = await saveHtml(iframeBlob);
                return link;
            };
        };
        if (!firstLoad) {
            const saveCode = async (latestCode1)=>{
                if (!location.origin.includes("zed.")) {
                    return;
                }
                if (latestCode1 !== latestGoodCode) return;
                if (latestSavedCode === latestCode1) return;
                latestSavedCode = latestCode1;
                const body = {
                    codeTranspiled: transpileCode(latestGoodCode),
                    code: latestGoodCode
                };
                const stringBody = JSON.stringify(body);
                const request = new Request(getUrl(), {
                    body: stringBody,
                    method: "POST",
                    headers: {
                        "content-type": "application/json;charset=UTF-8"
                    }
                });
                const response = fetch(request);
                const hash = await sha256(stringBody);
                try {
                    const prevHash = await codeDB.get("codeBoXHash2");
                    if (prevHash !== hash) {
                        await codeDB.put("codeBoXHash2", hash);
                        await codeDB.put(hash, latestGoodCode);
                        setQueryStringParameter("h", hash);
                    }
                } catch (e) {
                }
                await response;
            };
            saveCode(latestCode);
        }
        firstLoad = false;
        restart();
    }
    async function getCodeToLoad() {
        const search = new URLSearchParams(window.location.search);
        const keyToLoad = search.get("h") || await codeDB.get("codeBoXHash2");
        if (keyToLoad) {
            const content = await codeDB.get(keyToLoad);
            if (content) return content;
            let text;
            try {
                const resp = await fetch(getUrl() + "/?h=" + keyToLoad);
                text = await resp.json();
            } catch (e) {
                console.error(e);
                return starter;
            }
            return text.code;
        }
        return starter;
    }
    function setQueryStringParameter(name, value) {
        const params = new URLSearchParams(window.location.search);
        params.set(name, value);
        window.history.replaceState({
        }, "", decodeURIComponent(`${window.location.pathname}?${params}`));
    }
    function createHTMLSourceBlob(code) {
        const blob = new Blob([
            code
        ], {
            type: "text/html"
        });
        return blob;
    }
    async function saveHtml(htmlBlob) {
        const request = new Request(getUrl(), {
            body: htmlBlob,
            method: "POST",
            headers: {
                "content-type": "text/html;charset=UTF-8",
                "SHARE": "true"
            }
        });
        const response = await fetch(request);
        const { hash  } = await response.json();
        return getUrl() + `/?r=${hash}`;
    }
    function transpileCode(code) {
        const { transform  } = window["Babel"];
        return transform("/** @jsx jsx */\n" + `\n  Object.assign(window, React);\n  ` + code, {
            plugins: [],
            presets: [
                "react",
                [
                    "typescript",
                    {
                        isTSX: true,
                        allExtensions: true
                    }
                ], 
            ]
        }).code;
    }
}

