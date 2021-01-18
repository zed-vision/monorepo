//import { version } from "@zedvision/code/package.json";
import CID from "cids";
import {
  publicIpfsGateways,
  raceToSuccess,
} from "@zedvision/ipfs/src/gateways.js";
import { cid } from "./ipfs";

//@ts-ignore
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request: Request) {
  const publicIpfsGW = [...publicIpfsGateways];
  const url = new URL(request.url);
  const { searchParams, pathname } = url;
  const maybeRoute = pathname.slice(1, 9);
  const isKey =
    [...maybeRoute].filter((x) => x < "0" || x > "f").length === 0 &&
    maybeRoute.length === 8;

  const contentPath = isKey ? pathname.slice(9) : pathname;

  if (contentPath.slice(0, 6) === "/ipfs/") {
    //@ts-ignore
    const cache = caches.default;
    let response: Response | undefined = await cache.match(request);

    if (response === undefined) {
      //https://ipfs.github.io/public-gateway-checker/gateways.json
      const random5GatewaysFetch = publicIpfsGateways.sort(() =>
        0.5 - Math.random()
      ).slice(0, 5).map((gw: string) => gw.replace("/ipfs/:hash", contentPath))
        .map((x: string) =>
          fetch(x).then((res) =>
            res.status === 200 ? res : (() => {
              res.arrayBuffer();
              throw new Error("Not found");
            })()
          )
        );

      response = await raceToSuccess(random5GatewaysFetch);
      await cache.put(request, response!.clone());
    }
    // const resp = new Response(response.body, response);
    const arrBuff = await response!.clone().arrayBuffer();
    const resp = new Response(arrBuff, response);
    const respCID = await getCID(arrBuff);

    resp.headers.set("access-control-allow-origin", "*");
    resp.headers.set(
      "access-control-allow-methods",
      "GET,HEAD,POST,OPTIONS",
    );
    resp.headers.set("access-control-max-age", "86400");
    resp.headers.delete("content-security-policy");
    resp.headers.delete("feature-policy");
    resp.headers.set("x-cid", respCID);
    return resp;
  }
  return text(`<!doctype html>
  <html>
  <head>
    <script type="text/javascript">
    window.location = "https://code.zed.vision/ipfs/${cid}/";
    </script>
  </head>
  <body>
    <h1> Code....
    </h1>
  </body>
  </html>`);
}

export function js(resp: string) {
  return new Response(resp, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Content-Type": "application/javascript;charset=UTF-8",
    },
  });
}

function text(resp: string) {
  return new Response(resp, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
      "Content-Type": "text/html;charset=UTF-8",
    },
  });
}

const getCID = async (buff: ArrayBuffer) => {
  const myDigest = await crypto.subtle.digest(
    {
      name: "SHA-256",
    },
    buff, // The data you want to hash as an ArrayBuffer
  );

  const uintArr = new Uint8Array(myDigest);

  let cid;
  try {
    cid = new CID("base58btc", "dag-pb", uintArr);
    return cid.toString();
  } catch {
    const fromHexString = (hexString: string) =>
      new Uint8Array(
        (hexString.match(/.{1,2}/g) || []).map((byte) => parseInt(byte, 16)),
      );

    const shaStr = Array.from(uintArr).map((b) =>
      ("00" + b.toString(16)).slice(-2)
    )
      .join("");
    return shaStr;
  }
};