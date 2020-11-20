import { Document } from "https://raw.githubusercontent.com/microsoft/TypeScript/master/lib/lib.dom.d.ts";

import { makeDraggable } from "./interact.js";
import { startMonaco } from "../../smart-monaco-editor/src/editor.ts";
import { importScript } from "./importScript.js";
import { starter } from "./starter.tsx";

const document = (window as { document: Document }).document;

let firstLoad = true;

let busy = 0;

let keystrokeTillNoError = 0;
let latestCode = "";
let errorReported = "";
let latestSavedCode = "";
let latestGoodCode = "";

export async function run() {
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
  //   "https://unpkg.com/jsframe.js@1.6.2/lib/jsframe.min.js",
  // );

  // const jsFrameLoader = importScript(
  // "https://unpkg.com/jsframe.js@1.6.2/lib/jsframe.min.js",
  // );

  // await importScript(
  //   "https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js",
  // );

  await importScript(
    "https://unpkg.com/react-dom@17.0.1/umd/react-dom-server.browser.production.min.js",
  );

  await importScript(
    "https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js",
  );
  await importScript(
    "https://unpkg.com/@emotion/styled@11.0.0/dist/emotion-styled.umd.min.js",
  );

  const workerDomImport = importScript(
    "https://unpkg.com/@ampproject/worker-dom@0.27.4/dist/main.js",
  );

  await importScript(
    "https://unpkg.com/@babel/standalone@7.12.6/babel.min.js",
  );

  (async () => {
    const example = getCodeToLoad();
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

      const modelUri = modules.monaco.Uri.parse("file:///main.tsx");

      //const model = window["monaco"].editor.getModel(modelUri);
      // getCodeToLoad;
      const tsWorker = await modules.monaco.languages.typescript
        .getTypeScriptWorker();

      const diag = await (await tsWorker(modelUri)).getSemanticDiagnostics(
        "file:///main.tsx",
      );
      const comp = await (await tsWorker(modelUri))
        .getCompilerOptionsDiagnostics("file:///main.tsx");

      const syntax = await (await tsWorker(modelUri)).getSyntacticDiagnostics(
        "file:///main.tsx",
      );

      return [...diag, ...comp, ...syntax];
    }

    async function runner(cd: string) {
      const { diff } = await import("../dist/diff.min.js");
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

          // document.getElementById("root")!.classList.add("transparent");
          const slices = diff(latestGoodCode, cd, 0);

          if (slices.length <= 3) {
            modules.monaco.editor.setTheme("hc-black");
            return;
          }

          errorDiv!.innerHTML = err[0].messageText.toString();

          // document.getElementById("root").style.setProperty(
          //   "dispay",
          //   "none",
          // );

          errorDiv!.style.display = "block";
          errorReported = cd;

          modules.monaco.editor.setTheme("vs-light");
          setTimeout(() => {
            modules.monaco.editor.setTheme("hc-black");
          }, keystrokeTillNoError++);

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
        }, 10);
        console.error(err);
      }
    }

    //
  })();
  restartCode(transpileCode(getCodeToLoad()));

  // document.getElementById("root")!.setAttribute("style", "display:block");
  // dragElement(document.getElementById("root"));
  await workerDomImport;
  async function restartCode(transpileCode: string) {
    const searchRegExp = /import/gi;
    const replaceWith = "///";

    const code = transpileCode.replaceAll(
      searchRegExp,
      replaceWith,
    ).replace("export default", "DefaultElement = ");
    // console.log(code);/
    // const url = createJSSourceBlob(code);
    // console.log(url);

    // const restart = new Function(
    //   "url",
    //   `return function(){

    const restart = async () => {
      const renderToString = new Function(
        "code",
        `return function(){  
          let DefaultElement;
        
        ${code}
        console.log(DefaultElement);
                return ReactDOMServer.renderToString(jsx(DefaultElement));
      }`,
      )();
      const HTML = renderToString();

      // console.log(HTML);

      // document.getElementById("root").innerHTML = HTML;

      const css = Array.from(
        document.querySelector("head > style[data-emotion=css]").sheet
          .cssRules,
      ).map((x: any) => x.cssText).filter((cssRule) =>
        HTML.includes(cssRule.substring(3, 8))
      ).join("\n  ");

      console.log(css);

      const iframe = `<!DOCTYPE html>
      <html lang="en">
      <head>
      <script crossorigin src="https://unpkg.com/react@17.0.1/umd/react.production.min.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js"></script>
      <script crossorigin src="https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js"></script>
      <script crossorigin src="https://unpkg.com/@emotion/styled@11.0.0/dist/emotion-styled.umd.min.js"></script>
      <link rel="icon" href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABFFBMVEX/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/Bwf/ZGT/l5f/lpb/WFj/AwP/Li7/6ur/////3d3/Hx//Nzf/8vL/5+f/Jyf/zMz/9/f/9vb/9fX/+fn/39//IiL/QED/Pj7/Vlb/1dX/n5//Bgb/FRX/pKT//f3/ubn/ICD/Fxf/qan//v7/trb/GBj/qqr/srL/HR3/GRn/q6v/rq7/Gxv/Ghr/ra3/r6//paX/Fhb/sLD/oaH/FBT/HBz/sbH/nZ3/EhL//Pz/mJj/EBD/+vr/kZH/DQ3/g4P/vb3/QUH/MzP/NTX/ysr/9PT/7+//8fH/8PD/ycn/1tb/PT3/ERH/zc3/AQH/U1P/o6P/oqL/dHT/CwsnXuIzAAAAB3RSTlMRie2K+ev+okjQYAAAAAFiS0dEEJWyDSwAAAAHdElNRQfkCw8HNStlcP8AAAABA0lEQVQ4y42T11ICQRBFhziIoLiiSBCVjEjOIqCikiSoRP3//7Cma6mix+odz+s9s1vdt5oxk5mTmE2MWazcAKuF2bghNmY3FuyMK/iv4DhwHmJcbiQcHXskTjQknHpl4ewcCZrvwq8TCIIQwl/gl2Gdq+sbECJRYopYPCHyZIoYM32bEfndLpeFbA7yfIFYVLEE/y9XiE1WayLO5LLEqqt1yBtNoovKvcgTrQeirHYH8u4j0WY7L/Kn5x5Rdxrev7y+EXXzPsw3GI7GOgUs9N5BmExnc2Dm/Ughofkp1z35QsJiKQvTMRJW69Zmu8/m+0cacyVBtPkX9eEoT095vKrz/wWYHD/qOZ0BPQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMS0xNVQwNzo1Mzo0MyswMTowMKnrqaIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTEtMTVUMDc6NTM6NDMrMDE6MDDYthEeAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC" />
    
      <style>
      html{
        background: white;
      }
      ${css}
      </style>
      </head>
      <body>
      <div id="root">
      ${HTML}
      </div>
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
      const iframeBlob = createHTMLSourceBlob(iframe);

      const target = document.getElementsByTagName("iframe").item(0);

      if (target) {
        const cloned = document.createElement("iframe");
        cloned.setAttribute("src", iframeBlob);
        cloned.onload = () => console.log("Loooooooaaaded");

        setTimeout(() => {
          window.requestAnimationFrame(() => {
            target.setAttribute(
              "src",
              iframeBlob,
            );
            cloned.remove();
          });
        }, 30);
      } else {
        await makeDraggable(iframeBlob);
      }

      // document.getElementById("root").innerHTML = "";

      // const rootEl = document.getElementById("main-root");
      // rootEl.setAttribute("src", url);
      // rootEl.src = "./eeee.js";
      // console.log(rootEl);

      // MainThread.upgradeElement(
      //   rootEl,
      //   "https://unpkg.com/@ampproject/worker-dom@0.27.4/dist/worker/worker.js",
      // );
    };

    if (!firstLoad) {
      const saveCode = async (latestCode: string) => {
        if (latestCode !== latestGoodCode) return;
        if (latestSavedCode === latestCode) return;
        latestSavedCode = latestCode;

        const body = {
          codeTranspiled: transpileCode,
          code: latestGoodCode,
        };

        const stringBody = JSON.stringify(body);
        const request = new Request(
          "https://code.zed.vision",
          {
            body: stringBody,
            method: "POST",
            headers: { "content-type": "application/json;charset=UTF-8" },
          },
        );

        const response = await fetch(request);

        const { hash } = await response.json();

        try {
          const localStorage: Storage = window.localStorage;

          const prevHash = localStorage.getItem("codeBoXHash");

          if (prevHash !== hash) {
            localStorage.setItem("codeBoXHash", hash);
            localStorage.setItem(hash, latestGoodCode);
            setQueryStringParameter("h", hash);
          }
        } catch (e) {
          console.log("no localStorage");
        }
      };

      const codeToSaveForSure = latestCode;

      setTimeout(() => saveCode(latestCode), 500);
    }
    firstLoad = false;
    restart();
  }
  function getCodeToLoad() {
    const search = new URLSearchParams(window.location.search);
    const h = search.get("h") || localStorage.getItem("codeBoXHash");

    return (h && window.localStorage.getItem(h)) ||
      window.localStorage.getItem("STARTER") || starter;
  }

  function transpileCode(code: string) {
    return Babel.transform(code, {
      plugins: [],
      presets: [
        "react",
        ["typescript", { isTSX: true, allExtensions: true }],
      ],
    }).code;
  }
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

function createJSSourceBlob(code: string) {
  const blob = new Blob([code], { type: "text/javascript" });

  const url = window.URL.createObjectURL(blob);
  return url;
}

function createHTMLSourceBlob(code: string) {
  const blob = new Blob([code], { type: "text/html" });

  const url = window.URL.createObjectURL(blob);
  return url;
}
