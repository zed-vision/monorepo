if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return r[e]||(c=new Promise((async c=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=c}else importScripts(e),c()}))),c.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},c=(c,r)=>{Promise.all(c.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(c)};self.define=(c,s,a)=>{r[c]||(r[c]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+c.slice(1)};return Promise.all(s.map((c=>{switch(c){case"exports":return r;case"module":return i;default:return e(c)}}))).then((e=>{const c=a(...e);return r.default||(r.default=c),r}))})))}}define("./service-worker.js",["./workbox-18e5658c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/074f2641ce9955922a73ffc2dcd7c76a22a82d0e.js",revision:"36481ec1b42f6ae88888c430b5f78e6f"},{url:"/5975eeed2d2f335a2d10697b2f6f90ad8b3390ca.js",revision:"f655630629cbae3cc33d883c9e7caab3"},{url:"/a3336d3c033a5ec9d59a088cb032c68b95c64a61.js",revision:"6f3eb274c28ae63508c8815cd03c6bed"},{url:"/app.js",revision:"f9bcf3a6b09ef63981c11cfc0bb3eb4f"},{url:"/app.js.LICENSE.txt",revision:"a132a411173507cc7e308c078456c62f"},{url:"/baedf866.js",revision:"1bfcd1f68876dcecc22c8cf78edcf3e9"},{url:"/built-renderer.a2437c.worker.js",revision:null},{url:"/built-renderer.a2437c.worker.js.LICENSE.txt",revision:"589a6833a008fc233713d382918ca752"},{url:"/built-sha256.0343c8.worker.js",revision:null},{url:"/commons.js",revision:"11cb5d6a66a3b45732a2f6f13234a842"},{url:"/commons.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/component---src-pages-404-tsx.js",revision:"693519eddd897e5aec09a148ead7df8e"},{url:"/component---src-pages-codebox-tsx.js",revision:"dea4dc980b3b77dd4e87a41e5e6d8c56"},{url:"/component---src-pages-example-tsx.js",revision:"91fcc811863fab4164bb4c82c90a32a0"},{url:"/component---src-pages-index-tsx.js",revision:"ea5dbe8a7afe90c446031d924c1953a3"},{url:"/component---src-pages-offline-plugin-app-shell-fallback-tsx.js",revision:"0120336918a42ce878ab274a3c47fb57"},{url:"/component---src-pages-using-typescript-tsx.js",revision:"60a872bd53680cc9bf2593d284f963e4"},{url:"/component---src-templates-blog-post-tsx.js",revision:"4631acf3bbf01751d1b35b3ccc5670a6"},{url:"/f45620896e764e562bc09d27e8604e16dc4e935a.js",revision:"0a64f7c029ab72726ac3b6835e94fcb6"},{url:"/f45620896e764e562bc09d27e8604e16dc4e935a.js.LICENSE.txt",revision:"783f14fa45b10e088e68f98251448010"},{url:"/framework.js",revision:"9af359c2e57b92ae629ef36875e62297"},{url:"/framework.js.LICENSE.txt",revision:"f1d523c904ebbd453f563f0acfae6349"},{url:"/polyfill.js",revision:"908253a4b90c182754a84129c802e606"},{url:"/static/forkMe-1a2bcb7dd2c870c3afe5d50466500c18.png",revision:"1a2bcb7dd2c870c3afe5d50466500c18"},{url:"/static/zed-profile-pic-cd941e033fafca9e98b23dae7e5a0ccc.jpg",revision:"cd941e033fafca9e98b23dae7e5a0ccc"},{url:"/webpack-runtime.js",revision:"62aade703a5dc1cea63681f390d8ad49"}],{})}));
