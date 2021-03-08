//import { version } from "@zedvision/code/package.json";
import { files } from "./files.ts";
import { shasums } from "./shasums.ts";
import {
  publicIpfsGateways,
  raceToSuccess,
} from "https://unpkg.com/@zedvision/ipfs@11.10.0/src/gateways.js";
import { cid } from "./cid.ts";
import { alterHeaders, sha256 } from "./alterHeaders.ts";

type KV = { [key: string]: string };

const reverseMap: KV = {};
const filteredFiles: KV = {};

const shasumsKV: KV = shasums;
const fileKV: KV = files;

Object.keys(fileKV).forEach((k) => {
  if (shasumsKV[k]) {
    filteredFiles[k] = fileKV[k];

    reverseMap[fileKV[k]] = k;
  } else {
    delete fileKV[k];
  }
});

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request}
 */
async function handleRequest(request: Request) {
  const url = new URL(request.url);
  const { pathname } = url;

  if (pathname.slice(0, 6) === `/ipfs/`) {
    let customCID = pathname.slice(6);
    const reversePath = reverseMap[customCID] ||
      (pathname.slice(0, 52) === `/ipfs/${cid}` && (pathname.slice(53) ||
        "index.html")) ||
      pathname;

    const sha = reversePath && shasumsKV[reversePath];

    if (
      pathname.slice(0, 52) === `/ipfs/${cid}`
    ) {
      const path = pathname.slice(53);
      customCID = fileKV[path];
    }

    if (reversePath) url.pathname = `/ipfs/${cid}/${reversePath}`;

    const cacheKey = new Request(url.toString());
    const cache = caches.default;

    let response = null;
    try {
      response = await cache.match(cacheKey);
    } catch {
      return text("unreliable cache, should be reported to CF");
    }

    if (response && response.status == 200) {
      if (sha) {
        const content = await response.arrayBuffer();
        const shaContent = await sha256(content);

        if (sha == shaContent) {
          return await alterHeaders(new Response(content), reversePath);
        }

        response = undefined;
        cache.delete(cacheKey);
      }
    }

    let content = await IPFS.get(customCID, "arrayBuffer");
    if (content !== null && sha) {
      const file = reverseMap[customCID];
      const contentSHA = await sha256(content);

      if (shasumsKV[file] === contentSHA) {
        await IPFS.put(customCID, content);
      } else {
        await IPFS.delete(customCID);
        content = null;
      }
    }

    if (content) {
      response = new Response(content);
    } else {
      response = await fetchCid("/ipfs/" + customCID);

      if (!response) {
        return text("Error, 404");
      }

      const contentToSave = await response.clone().arrayBuffer();
      if (sha) {
        const check = await sha256(contentToSave);
        if (check !== sha) {
          const textContent = new TextDecoder().decode(contentToSave);

          return text(`
        path: ${reversePath} 
        sha: ${sha}  
        sha-check: ${check}
        cid: /ipfs/${customCID}
        
        content: ${textContent}
        `);
        }
      }
      await IPFS.put(customCID, contentToSave);
    }

    await cache.put(request, response.clone());

    return await alterHeaders(response, reversePath);
  }

  if (pathname === `/cid.json`) {
    return json({ cid });
  }
  if (pathname === `/${cid}.js`) {
    return js(`export const files = ${JSON.stringify(files)}`);
  }
  if (pathname === `/ipfs.js`) {
    return js(
      getGlobalThis(),
    );
  }
  if (pathname === "/generated-sw.js") {
    return js(
      `self.importScripts("./sw.js");
      ${getGlobalThis()}
      globalThis.register();
      `,
    );
  }
  if (pathname === "/check") {
    const missing: String[] = [];
    const having: KV[] = [];

    await Promise.all(
      Object.keys(filteredFiles).map(async (file) => {
        const kvRes = await IPFS.get(fileKV[file], "arrayBuffer");
        if (kvRes === null) {
          missing.push(file);
        } else {
          const sha = await sha256(kvRes);
          if (shasumsKV[file] !== sha) {
            having.push({ [file]: await sha256(kvRes) });
          }
        }
      }),
    );

    return text(` 
      missing: ${missing.join(", ")}
      wrong sha: ${JSON.stringify(having)}
    `);
  }
  if (pathname === `/cid.js`) {
    return new Response(`export const cid = "${cid}"`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
        "Content-Type": "application/javascript;charset=UTF-8",
      },
    });
  }
  if (pathname === `/cid.umd.js`) {
    return new Response(`globalThis.cid = "${cid}"`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Max-Age": "86400",
        "Content-Type": "application/javascript;charset=UTF-8",
      },
    });
  }

  if (fileKV[pathname.slice(1)] || pathname === "/") {
    url.pathname = "/ipfs/" + cid + pathname === "/" ? "/index.html" : pathname;

    let fileCid = fileKV[pathname.slice(1)];
    if (pathname === "/") {
      fileCid = files["index.html"];
    }

    url.pathname = "/ipfs/" + fileCid;
    const req2 = new Request(url.toString());
    const resp = handleRequest(req2) as unknown as Response;

    return resp;
  }
  return text("Error: nop");
}

function js(resp: string) {
  return new Response(resp, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Content-Type": "application/javascript;charset=UTF-8",
    },
  });
}

function json(obj: Object) {
  return new Response(JSON.stringify(obj), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
}

function text(resp: string) {
  return new Response(resp, {
    headers: {
      "Cache-Control": "no-cache",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Content-Type": "text/html;charset=UTF-8",
    },
  });
}

async function fetchCid(path: string, retry = 3): Promise<Response> {
  const random5GatewaysFetch = publicIpfsGateways.sort(() =>
    0.5 - Math.random()
  )
    .slice(0, 5).map((gw: string) => gw.replace("/ipfs/:hash", path))
    .map((x: string) =>
      fetch(x).then((res) => {
        if (!res || res.status !== 200) {
          throw new Error("Not found");
        }
        return res.clone();
      }).catch((e) => console.log({ e }))
    );

  let res;

  try {
    res = await raceToSuccess(random5GatewaysFetch) as Response;
    if (res) return res;
  } catch {
    if (retry > 0) return await fetchCid(path, retry - 1) as Response;
    return text("404- cant fetch cid  ") as Response;
  }
  if (retry > 0) return await fetchCid(path, retry - 1);
  return text("404- cant fetch cid  ") as Response;
}

function getGlobalThis() {
  return `globalThis.cid = "${cid}";
  globalThis.files=JSON.parse('${JSON.stringify(filteredFiles)}'); 
  globalThis.shaSums = JSON.parse('${JSON.stringify(shasums)}');
  globalThis.reverseMap = {}; 
  Object.keys(globalThis.files).forEach(k=>globalThis.reverseMap[globalThis.files[k]]=k);`;
}
