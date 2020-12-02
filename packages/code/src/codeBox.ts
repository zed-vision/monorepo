/// <reference lib="dom" />

import { getKeys } from "./maintenance/maintenance.ts";
import { renderDraggableWindow } from "./DraggableWindow.js";
import { renderDraggableEditor } from "./DraggableEditor.js";
import { startMonaco } from "../../smart-monaco-editor/src/editor.ts";
import { importScript } from "./importScript.js";
import { starter } from "./starter.tsx";
import { sha256 } from "./sha256.ts";
import { getDB } from "./idb.ts";
import { diff } from "../../diff/diff.ts";

//@ts-ignore
var ReactDOM: { unmountComponentAtNode: (node: any) => void } = window.ReactDOM;

const getUrl = () => {
  if (document.location.href.includes("zed.dev")) {
    return "https://code.zed.dev";
  }
  return "https://code.zed.vision";
};

export const getProjects = async () => {
  const uuid = await getUserId();
  const codeDB = await getDB();
  const projects = await codeDB.get(uuid, "json");

  if (!projects) {
    await codeDB.put(uuid, JSON.stringify([]));
    return [];
  }

  return projects;
};

interface Babel {
  transform: (
    code: string,
    options: {
      plugins: string[];
      presets: (string | [string, { [key: string]: boolean }])[];
    },
  ) => { code: string };
}
// const document = (window as { document: Document }).document;
let firstLoad = true;

let latestCode = "";
let busy = 0;
let keystrokeTillNoError = 0;

let errorReported = "";
let latestSavedCode = "";
let latestGoodCode = "";

let shareItAsHtml: () => void;

async function deleteHash(apiKey: string, hash: string) {
  try {
    const url = `https://code.zed.vision/keys/delete/?hash=${hash}`;
    const req = await fetch(url, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
        "API_KEY": apiKey,
      },
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function getCode(hash: string) {
  try {
    const list = `https://code.zed.vision/?h=${hash}`;
    const req = await fetch(list, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await req.json();
    if (data.code) return data.code as string;
    return "";
  } catch (e) {
    console.log(e);
    return "";
  }
}
async function getTranspiledCode(hash: string) {
  try {
    const list = `https://code.zed.vision/?h=${hash}`;
    const req = await fetch(list, {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
    const data = await req.json();
    if (data.codeTranspiled) return data.codeTranspiled as string;
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
    ReactDOM.unmountComponentAtNode(
      rootEl,
    );
  } catch (e) {
    console.error("Error in un-mount", e);
  }

  if (rootEl) rootEl.replaceWith(el);
  else {
    document.body.appendChild(el);
  }

  el.id = elementId;
}

export async function run(mode = "window") {
  const codeDB = await getDB();

  const uuid = await getUserId();

  async function regenerate(
    apiKey: string,
    prefix: string,
    deleteIfRenderedHTmlDiffers = false,
  ) {
    const keys = await getKeys(apiKey, prefix);
    keys.map((x) => x.name).map(async (hash) => {
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

          ReactDOM.unmountComponentAtNode(
            document.getElementById("root"),
          );
          restartCode(
            transpiled.replaceAll(searchRegExp, replaceWith).replaceAll(
              searchRegExp2,
              replaceWith2,
            ),
          );
          const html2 = document.getElementById("root")!.innerHTML;
          replaceWithEmpty("root");
          restartCode(
            codeTranspiled.replaceAll(searchRegExp, replaceWith).replaceAll(
              searchRegExp2,
              replaceWith2,
            ),
          );
          const html = document.getElementById("root")!.innerHTML;
          if (html !== html2) {
            console.log(
              {
                hash,
                code,
                html1: html,
                html2,
                transpiled1: codeTranspiled,
                transpiled2: transpiled,
              },
            );
            deleteIfRenderedHTmlDiffers && await deleteHash(apiKey, hash);
          }
        }
      } catch (e) {
        console.error({ hash, code, transpiled });
      }
      //      console.log(transpileCode(code))
    });
  }

  Object.assign(window, { getKeys, getCode, restartCode, regenerate });

  // await importScript(
  //   "https://unpkg.com/react@17.0.1/umd/react.production.min.js",
  // );
  // await importScript(
  //   "https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js",
  // );

  // await importScript(
  //   "https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js",
  // );
  // await importScript(
  //   "https://unpkg.com/@emotion/styled@11.0.0/dist/emotion-styled.umd.min.js",
  // );
  // await importScript(
  //   "https://unpkg.com/react-dom@17.0.1/umd/react-dom-server.browser.production.min.js",
  // );

  // await importScript(
  //   "https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js",
  // );
  // await importScript(
  //   "https://unpkg.com/framer-motion@2.9.5/dist/framer-motion.js",
  // );

  // const workerDomImport = importScript(
  //   "https://unpkg.com/@ampproject/worker-dom@0.27.4/dist/main.js",
  // );

  if (mode === "editor") {
    renderDraggableEditor();
  }

  if (mode == "window") {
    renderDraggableWindow(async () => {
      const link = await shareItAsHtml();
      window.open(link as unknown as string);
    });
  }

  await importScript(
    "https://unpkg.com/@babel/standalone@7.12.9/babel.min.js",
  );

  (async () => {
    const example = await getCodeToLoad();
    latestGoodCode = example;

    const modules = await startMonaco({
      language: "typescript",
      code: example,
      onChange,
    });

    function onChange(code: string) {
      if (!modules) return;
      latestCode = code;

      if (!busy) {
        runner(latestCode);
      } else {
        const myCode = code;
        const cl = setInterval(() => {
          if (myCode !== latestCode || !busy) {
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

      const modelUri = modules.monaco.Uri.parse(
        "file:///main.tsx",
      );

      //const model = window["monaco"].editor.getModel(modelUri);
      // getCodeToLoad;
      const tsWorker = await modules.monaco.languages.typescript
        .getTypeScriptWorker();

      const diag = await (await tsWorker(modelUri)).getSemanticDiagnostics(
        "file:///main.tsx",
      );
      const comp = await (await tsWorker(modelUri))
        .getCompilerOptionsDiagnostics(
          "file:///main.tsx",
        );

      const syntax = await (await tsWorker(modelUri)).getSyntacticDiagnostics(
        "file:///main.tsx",
      );

      return [...diag, ...comp, ...syntax];
    }

    async function runner(cd: string) {
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

          errorDiv!.innerHTML = err[0].messageText.toString();

          errorDiv!.style.display = "block";
          errorReported = cd;

          return;
        }

        latestGoodCode = cd;

        errorDiv!.style!.display = "none";

        modules.monaco.editor.setTheme("vs-dark");

        // document.getElementById("root").classList.remove("transparent");
        keystrokeTillNoError = 0;

        busy = 0;
        restartCode(transpileCode(cd));
      } catch (err) {
        busy = 0;
        if (cd !== latestCode) {
          return;
        }

        modules.monaco.editor.setTheme("vs-light");
        setTimeout(() => {
          modules.monaco.editor.setTheme("hc-black");
        }, 50);
        console.error(err);
      }
    }

    //
  })();
  restartCode(transpileCode(await getCodeToLoad()));

  // document.getElementById("root")!.setAttribute("style", "display:block");
  // dragElement(document.getElementById("root"));
  // await workerDomImport;
  async function restartCode(transPiled: string) {
    const searchRegExp = /import/gi;
    const replaceWith = "///";

    const code = `
    Object.assign(window, React);
    if (window.Motion) {
        Object.assign(window, window.Motion);
    }
    if (window.emotionStyled){
      window.styled= window.emotionStyled;
    }
    ;
    ` + transPiled.replaceAll(
      searchRegExp,
      replaceWith,
    ).replace("export default", "DefaultElement = ");

    // console.log(code);

    // console.log(code);/
    // const url = createJSSourceBlob(code);
    // console.log(url);

    // const restart = new Function(
    //   "url",
    //   `return function(){

    const restart = async () => {
      //     console.log(code);
      const hydrate = new Function(
        "code",
        `return function(){  
          let DefaultElement;
        
        ${code}

                return ReactDOM.render(jsx(DefaultElement), document.getElementById("root"));
      }`,
      )();

      hydrate();

      shareItAsHtml = async () => {
        const renderToString = new Function(
          "code",
          `return function(){
            let DefaultElement;
  
          ${code}
  
                  return ReactDOMServer.renderToString(jsx(DefaultElement));
        }`,
        )();
        const HTML = renderToString();

        const css = Array.from(
          //@ts-ignore
          document.querySelector("head > style[data-emotion=css]").sheet
            .cssRules,
        ).map((x: any) => x.cssText).filter((cssRule) =>
          HTML.includes(cssRule.substring(3, 8))
        ).join("\n  ");

        //
        // For some reason, pre-rendering doesn't care about global styles, the site flickers without this patch
        //
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
          motionDep =
            `<script crossorigin src="https://unpkg.com/framer-motion@2.9.5/dist/framer-motion.js"></script>`;

          motionScript = "const {motion} = Motion";
        }

        const iframe = `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <head profile="http://www.w3.org/2005/10/profile">
        <link rel="icon" 
              type="image/png"
              href="https://zed.vision/favicon.ico">
        <style>
        ${bodyStylesFix}
        ${css}
        </style>
        </head>
        <body>
        <div id="root">
        ${HTML}
        </div>
        <script crossorigin src="https://unpkg.com/react@17.0.1/umd/react.production.min.js"></script>
        ${motionDep}
        <script crossorigin src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js"></script>
        <script crossorigin src="https://unpkg.com/@emotion/styled@11.0.0/dist/emotion-styled.umd.min.js"></script>
        <script type="module">
        Object.assign(window, emotionReact);

       const styled = window["emotionStyled"];

        let DefaultElement;

        ${code}

        ReactDOM.hydrate(jsx(DefaultElement), document.body.children[0]);
        </script>
        </body>
        </html>
        `;
        const iframeBlob = await createHTMLSourceBlob(iframe);
        const link = await saveHtml(iframeBlob);
        return link;
      };
    };

    if (!firstLoad) {
      const saveCode = async (latestCode: string) => {
        if (!location.origin.includes("zed.")) {
          return;
        }
        if (latestCode !== latestGoodCode) return;
        if (latestSavedCode === latestCode) return;
        latestSavedCode = latestCode;

        const body = {
          codeTranspiled: transpileCode(latestGoodCode),
          code: latestGoodCode,
        };

        const stringBody = JSON.stringify(body);
        const request = new Request(
          getUrl(),
          {
            body: stringBody,
            method: "POST",
            headers: { "content-type": "application/json;charset=UTF-8" },
          },
        );

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
    const keyToLoad = search.get("h") ||
      await codeDB.get("codeBoXHash2");

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

  function setQueryStringParameter(name: string, value: string) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState(
      {},
      "",
      decodeURIComponent(`${window.location.pathname}?${params}`),
    );
  }

  function createHTMLSourceBlob(code: string) {
    const blob = new Blob([code], { type: "text/html" });
    return blob;
  }

  async function saveHtml(htmlBlob: Blob) {
    const cfUrl = getUrl();
    const request = new Request(
      cfUrl,
      {
        body: htmlBlob,
        method: "POST",
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "SHARE": "true",
        },
      },
    );

    const response = await fetch(request);

    const { hash } = await response.json();
    return `${cfUrl}/${hash}`;
  }

  function transpileCode(code: string) {
    const { transform } = (window as unknown as { Babel: Babel })["Babel"];
    return transform(
      "/** @jsx jsx */\n" + `
  Object.assign(window, React);
  ` + code,
      {
        plugins: [],
        presets: [
          "react",
          ["typescript", { isTSX: true, allExtensions: true }],
        ],
      },
    ).code;
  }
}
