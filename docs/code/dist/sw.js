if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let r = Promise.resolve();
      return s[e] || (r = new Promise(
        (async (r) => {
          if ("document" in self) {
            const s = document.createElement("script");
            s.src = e, document.head.appendChild(s), s.onload = r;
          } else importScripts(e), r();
        }),
      )),
        r.then(
          (() => {
            if (!s[e]) {
              throw new Error(`Module ${e} didn’t register its module`);
            }
            return s[e];
          }),
        );
    },
    r = (r, s) => {
      Promise.all(r.map(e)).then(((e) => s(1 === e.length ? e[0] : e)));
    },
    s = { require: Promise.resolve(r) };
  self.define = (r, i, o) => {
    s[r] || (s[r] = Promise.resolve().then(
      (() => {
        let s = {};
        const t = { uri: location.origin + r.slice(1) };
        return Promise.all(i.map(
          ((r) => {
            switch (r) {
              case "exports":
                return s;
              case "module":
                return t;
              default:
                return e(r);
            }
          }),
        )).then(
          ((e) => {
            const r = o(...e);
            return s.default || (s.default = r), s;
          }),
        );
      }),
    ));
  };
}
define(
  "./sw.js",
  ["./workbox-b6b06d23"],
  (function (e) {
    "use strict";
    self.addEventListener(
      "message",
      ((e) => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
      }),
    ),
      e.precacheAndRoute(
        [
          {
            url: "codeLoader.js",
            revision: "9ad1a4d09d19522983276a2b5309a3e6",
          },
          {
            url: "codeLoader.min.js",
            revision: "56a39924caedb3a7dd39310005ee526e",
          },
          {
            url: "DraggableEditor.js",
            revision: "8cace7baeadd60f578f59415227edd7e",
          },
          {
            url: "DraggableWindow.js",
            revision: "2030166d7f5b36e32b577dd86391385e",
          },
          {
            url: "importScript.js",
            revision: "f147fe902e0fa3f4c44ad0908054ee1b",
          },
          { url: "sha256.js", revision: "9257b7338e491d90946329e08fab00e0" },
        ],
        {},
      );
  }),
);
//# sourceMappingURL=sw.js.map
