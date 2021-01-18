import {
  CID,
  fromHexString,
  IpfsClient,
  raceToSuccess,
} from "./workers/ipfs/dist/ipfs.client.js";

import { v } from "./versions.js";

const workerSrc = `${v.workerPrefix}/ipfsWorker.js`;

/** @type {MessagePort} */
let port;

if (typeof SharedWorker !== "undefined") {
  const ipfsWorker = new SharedWorker(
    workerSrc,
  );
  port = ipfsWorker.port;
} else {
  const worker = new Worker(workerSrc);

  const { port1, port2 } = new MessageChannel();
  const msg = {
    clientInit: true,
    port: port1,
  };

  worker.postMessage(msg, [port1]);

  port = port2;
}
export const ipfsClient = IpfsClient.from(port);

export { CID };
export { raceToSuccess };
export { fromHexString };
