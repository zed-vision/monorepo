import { arrBuffSha256, sha256 } from "../../code/src/sha256.js";
import { getDbObj } from "../../shadb/src/getDbObj.ts";
import { handleAdmin } from "./admin.ts";
import { json, text } from "./utils/handleOptions.ts";
import { v4 } from "./dec.ts";

var SHAKV: KVNamespace;
var USERS: KVNamespace;

var LOGS: KVNamespace;
var USERKEYS: KVNamespace;
var API_KEY: string;

let now = 0;

function log(message: string, data: unknown = {}, type = "cf") {
  now = now || Date.now();
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const nowIso = today.toISOString();

  return LOGS.put(
    String(now++),
    JSON.stringify({ message, time: nowIso, type, data }),
  );
}

export async function handleCloudRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const { searchParams, pathname } = url;
  const psk = String(request.headers.get("API_KEY") || "");

  if (request.method === "GET" && psk && psk == API_KEY) {
    return handleAdmin(request, searchParams, pathname, SHAKV);
  } else if (request.method === "GET") {
    if (pathname === "/robots.txt") {
      return text("User-agent: * Disallow: /");
    }
    if (pathname === "/connect") {
      if (searchParams.get("key")) {
        const key = searchParams.get("key")!;

        const tokenKey = key.slice(0, 8);
        const userIdKey = key.slice(8, 16);
        const pass = key.slice(16, 24);
        const tokenPassUserId = key.slice(24, 32);

        const checkTokenPassUserId = await sha256(tokenKey + userIdKey);

        if (
          !tokenKey || !userIdKey || !pass ||
          (checkTokenPassUserId !== tokenPassUserId)
        ) {
          return json({ error: "auth error" });
        }

        const uuid = await USERKEYS.get(userIdKey);
        if (uuid === null) {
          return json({ error: 401 });
        }

        const tokenUuid = await USERKEYS.get(tokenKey);

        if (tokenUuid === null) {
          return json({
            error: 404,
            message: "token not found",
          });
        }
        const checkPass = await sha256(tokenKey + uuid);
        const checkPassToken = await sha256(tokenUuid + uuid);

        if (checkPass === pass) {
          await USERS.put(
            tokenUuid,
            JSON.stringify(
              {
                uuid,
                connected: searchParams.get("uuid"),
              },
            ),
            { expirationTtl: 60 },
          );

          return json({ success: true });
        } else if (checkPassToken === pass) {
          return json({ success: true });
        }
        return json({ error: 401 });
      }
    }

    if (pathname === "/check") {
      const key = searchParams.get("key");

      if (key === null) return new Response("500");

      const waitForChange = async () => {
        const uuid = await USERKEYS.get(
          key,
        );

        if (!uuid) return null;

        const data = await USERS.get<{ connected: boolean }>(
          uuid,
          "json",
        );
        if (!data || data.connected) {
          return data;
        }
        return new Promise((resolve) => {
          const clear = setInterval(async () => {
            const data = await USERS.get<{ connected: boolean }>(
              uuid,
              "json",
            );
            if (!data || data.connected) {
              clearInterval(clear);
              resolve(data);
            }
          }, 1000);
        });
      };

      const data = await waitForChange();

      return json({ expired: data === null });
    }

    if (pathname === "/register") {
      const uuid = v4();
      const uuidHash = await sha256(uuid);
      await USERS.put(
        uuid,
        JSON.stringify(
          { uuid, uuidHash, registered: Date.now(), cf: request.cf },
        ),
      );
      await log("register", { uuidHash });
      await USERKEYS.put(uuidHash, uuid);
      return json({ uuid });
    }
    if (pathname === "/token") {
      const uuid = v4();
      const uuidHash = await sha256(uuid);
      await USERS.put(
        uuid,
        JSON.stringify({ uuid, registered: Date.now(), cf: request.cf }),
        { expirationTtl: 60 },
      );
      await USERKEYS.put(uuidHash, uuid, { expirationTtl: 60 });

      return json({ uuid, key: uuidHash });
    }
    // if (pathname === "/uuids"){
    //   const list = await USERS.list();

    //   const work = list.keys.map( x=>x.name).map(async(uuid)=>{
    //     // if (uuid.length === 8) {
    //     //     await USERS.delete(uuid)
    //     // }

    //     const hash=await sha256(uuid);
    //     const hashHash = await sha256(hash)
    //     await USERKEYS.delete(hashHash);
    //   });

    //   await Promise.all(work);

    //   return json({uuids: list.keys});

    // }

    if (pathname === "/create-project") {
      const uuidHash = request.headers.get("TOKEN");
      const uuid = v4();
      await USERS.put(
        uuid,
        JSON.stringify({ uuid, registered: Date.now(), cf: request.cf }),
      );
      return json({ uuid });
    }

    const maybeRoute = pathname.substr(1);
    if (maybeRoute) {
      const shaDB = getDbObj(SHAKV);
      const result = (await shaDB.get(maybeRoute)) as string | null;
      if (result !== null) {
        return text(result);
      }
    }
    return Response.redirect("https://zed.vision/code", 301);
  } else if (request.method === "POST") {
    // this need restriction
    // such as:
    //    what are we saving - which projectID
    //    what will be the key
    //    and the data for the construction
    //         -- which is the parent sha id
    //         -- and what are we doing with it
    //             - for example, adding a new line
    //                - or babel it
    //                - or render it to html
    //                - then the result :)
    const maybeRoute = pathname.substr(1);
    const myBuffer = await request.arrayBuffer();
    const hash = await arrBuffSha256(myBuffer);
    const smallerKey = hash.substring(0, 8);

    await SHAKV.put(smallerKey, myBuffer);

    if (maybeRoute) {
      const shaDB = getDbObj(SHAKV);
      const result = await shaDB.put(maybeRoute, smallerKey);
    }

    return json({
      hash: smallerKey,
    });
  }

  return new Response("404");
}
