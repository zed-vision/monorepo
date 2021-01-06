"use strict";
importScripts("https://unpkg.com/workbox-sw@6.0.2/build/workbox-sw.js");
// This will trigger the importScripts() for workbox.strategies and its dependencies:
// deno-lint-ignore ban-ts-comment
//@ts-ignore
// deno-lint-ignore no-undef
const { strategies } = workbox;
// deno-lint-ignore ban-ts-comment
// @ts-ignore
self.addEventListener("fetch", /**
* @param {{ respondWith?: any; request?: any; }} event
*/ (event) => {
    const { request } = event;
    const { url } = request;
    if (!url.endsWith("sw.js") &&
        (url.endsWith(".js") && url.endsWith(".html") || url.endsWith(".woff") ||
            url.endsWith(".png") || url.endsWith(".ts"))) {
        // Using the previously-initialized strategies will work as expected.
        const cacheFirst = new strategies.CacheFirst();
        event.respondWith(cacheFirst.handle({ event, request }));
    }
});