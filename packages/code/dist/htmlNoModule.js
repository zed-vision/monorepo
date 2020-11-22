const version = `7.7.2`; const html = `  <!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">


  
  <script crossorigin src="https://unpkg.com/react@17.0.1/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17.0.1/umd/react-dom-server.browser.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/@emotion/react@11.1.1/dist/emotion-react.umd.min.js"></script>
  <script crossorigin src="https://unpkg.com/@emotion/styled@11.0.0/dist/emotion-styled.umd.min.js"></script>
  <script crossorigin src="https://unpkg.com/jsframe.js@1.6.2/lib/jsframe.min.js"></script>
  <script crossorigin src="https://unpkg.com/framer-motion@2.9.4/dist/framer-motion.js"></script>


  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" crossorigin="anonymous">  
  <style>

    body{
      overflow: hidden;
    }

    
    #container,  #ace {
      background-color: #1e1e1e;
      width: 100%;
      height: 100vh;
    }

    #ace {
      display: none;
    }


    #error {
      display: none;
      background-color: red;
      opacity: 0.7;
    }

    #dragabbleWindow {
      position: fixed;
      z-index: 900;
      height: 1px;
    }




    .almosthidden {
      opacity: 0.5;
    }

    button {
      font-size: large;
    }
  </style>
</head>

<body>
  <div id="dragabbleWindow"></div>
  <div id="error"></div>
  <div id="container"></div>
  <div id="ace"></div>
  <script type="module">
    import * as Comlink from "https://unpkg.com/comlink@4.3.0/dist/esm/comlink.mjs";




    async function initComlink() {
      const { port1, port2 } = new MessageChannel();
      const msg = {
        comlinkInit: true,
        port: port1,
      };

      navigator.serviceWorker.ready.then(registration => {
        registration.active.postMessage(msg, [port1]);
      });


      const swProxy = Comlink.wrap(port2);

      window["SHATEST"] = {
        get: async (key) => await swProxy.get(key),
        put: async (key, value) => await swProxy.put(key, value)
      }

      await swProxy.inc();
    }

    if (!window.location.href.includes("zed.dev"))  {
      if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener("controllerchange", initComlink);
      navigator.serviceWorker.register("sw.js");
     initComlink()
    }
  }


// navigator.serviceWorker.getRegistrations().then(function (registrations) {
//     for (let registration of registrations) {
//       registration.unregister();
//     }
//   });

  </script>

  <script type="module">
    // window["motion"] = window["Motion"].motion;
    Object.assign(window, emotionReact);

    window["styled"] = window["emotionStyled"];

    //inject

    //inject



    async function restartCode(transpileCode) {

      //  console.log(replaced);
      const restart = new Function(
        "transpileCode",
        \`return function() {  
        \${transpileCode}
      }\`,
      )()
      restart();
    }


  </script>
  <script type="module">

  const runner = async () => {
    if (window.location.href.includes("zed.dev")) {
      const { run } = await import("/code/dist/codeLoader.js");
      run();
      return;
    }

    if (window.location.href.includes("0.0.0.0")) {
      const { run } = await import("/dist/codeLoader.js");
      run();
      return;
    }

    try {
        const { run } = await import("/code/dist/codeLoader.min.js");
        run();
      } catch (e) {
        const { run } = await import( "https://unpkg.com/@zedvision/code@7.7.2/dist/codeLoader.min.js" );
        run();
      }
  }
  

  runner();
  </script>
</body>

</html>`; const sw = `importScripts("https://unpkg.com/comlink@4.3.0/dist/umd/comlink.min.js");
importScripts(
  "https://unpkg.com/idb@5.0.7/build/iife/with-async-ittr-min.js",
);

// importScripts(
//   "https://unpkg.com/@zedvision/code@7.7.2/dist/htmlNoModule.js",
// );

(({ Comlink, idb, location, caches, addEventListener }) => {
  const dbPromise = idb.openDB("localZedCodeStore", 1, {
    upgrade(db) {
      db.createObjectStore("codeStore");
    },
  });

  const SHATEST = {
    async get(key, format = "text") {
      const data = (await dbPromise).get("codeStore", key);
      if (!data) return null;
      if (format === "text") {
        const allData = await data;
        const decoder = new TextDecoder();
        const text = decoder.decode(allData);
        return text;
      }
      return data;
    },
    async put(key, val) {
      let str = val;
      if (typeof val !== "string") {
        str = new TextDecoder().decode(val);
      }

      return (await dbPromise).put("codeStore", key, str);
    },
    async delete(key) {
      return (await dbPromise).delete("codeStore", key);
    },
    async clear() {
      return (await dbPromise).clear("codeStore");
    },
    async keys() {
      return (await dbPromise).getAllKeys("codeStore");
    },
  };

  var cacheKey = "7.7.2-1";

  addEventListener("install", function (e) {
    e.waitUntil(
      caches.open(cacheKey).then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
        ]);
      }),
    );
  });

  addEventListener("fetch", function (e) {
    self.runner = "browser-sw";

    if (e.request.method === "POST") {
      e.respondWith(
        (async () => {
          const data = (await e.request.arrayBuffer());

          if (location.origin.includes("zed.vision")) {
            const request = new Request(
              "https://code.zed.vision",
              {
                body: data,
                method: "POST",
                headers: { "content-type": "text/html;charset=UTF-8" },
              },
            );

            fetch(request)
              .then((response) => response.json())
              .then((data) =>
                console.log("SERVER HASH: " + JSON.stringify(data))
              )
              .catch(function failureCallback(error) {
                console.error("Error" + error);
              });
          }

          const myDigest = await crypto.subtle.digest(
            {
              name: "SHA-256",
            },
            data,
          );

          const hashArray = Array.from(new Uint8Array(myDigest));

          // convert bytes to hex string
          const hash = hashArray.map((b) => ("00" + b.toString(16)).slice(-2))
            .join(
              "",
            );
          const smallerKey = hash.substring(0, 8);
          await SHATEST.put(smallerKey, data);

          return new Response(JSON.stringify({ hash: smallerKey }), {
            headers: { "Content-Type": "application/json" },
          });
        })(),
      );
      return;

      // e.res

      // const resp = new Response();
      // return
    }
    // if (e.request.url==="code.zed.vision" && req)

    const tryInCachesFirst = caches.open(cacheKey).then((cache) => {
      return cache.match(e.request).then((response) => {
        if (!response) {
          // console.log("NO CACHE MATCH");
          return handleNoCacheMatch(e);
        }

        fetchFromNetworkAndCache(e);

        return response;
      });
    });

    e.respondWith(tryInCachesFirst);
  });

  addEventListener("activate", function (e) {
    e.waitUntil(
      caches.keys().then((keys) => {
        return Promise.all(keys.map((key) => {
          if (key !== cacheKey) {
            return caches.delete(key);
          }
        }));
      }),
    );
  });

  function fetchFromNetworkAndCache(e) {
    // DevTools opening will trigger these o-i-c requests, which this SW can't handle.
    // There's probably more going on here, but I'd rather just ignore this problem. :)
    // https://github.com/paulirish/caltrainschedule.io/issues/49
    if (
      e.request.cache === "only-if-cached" // && e.request.mode !== "same-origin"
    ) {
      console.log("NO CACHE!", e);
      return;
    }

    return fetch(e.request).then((res) => {
      if (
        res.type === "opaque" || //new URL(res.url) !== location.origin ||
        location.search !== ""
      ) {
        return res;
      }

      return caches.open(cacheKey).then((cache) => {
        // TODO: figure out if the content is new and therefore the page needs a reload.

        if (e.request.method !== "POST") {
          cache.put(e.request, res.clone());
        }
        return res;
      });
    }).catch((err) => console.error(e.request.url, err));
  }

  function handleNoCacheMatch(e) {
    return fetchFromNetworkAndCache(e);
  }

  const obj = {
    counter: 0,
    put(key, val) {
      return SHATEST.put(key, val);
    },
    get(key) {
      return SHATEST.get(key);
    },
    inc() {
      this.counter++;
    },
  };

  self.addEventListener("message", (event) => {
    if (event.data.comlinkInit) {
      Comlink.expose(obj, event.data.port);
    }
  });
})(self);
`; 
function inject(
  html,
  startKey,
  code,
  codeTranspiled,
) {
  const res = html.split("//inject");
  return [
    res[0],
    `localStorage.setItem("${startKey}", unescape("${escape(code)}"));`,
    `restartCode(
      unescape("${escape(codeTranspiled)}")
      );`,
    res[2],
  ].join("\n");
}
