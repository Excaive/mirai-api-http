/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2ba938169e6ad236748a5d9b323b1ffe"
  },
  {
    "url": "adapter/Adapter.html",
    "revision": "4f702b0ebb28513785f360fd25f78743"
  },
  {
    "url": "adapter/CustomizedAdapter.html",
    "revision": "b7981a95cadac5b694772a5a9f74328f"
  },
  {
    "url": "adapter/HttpAdapter.html",
    "revision": "a3ae6da83f55a5b3897f30e162993f97"
  },
  {
    "url": "adapter/ReverseWebsocketAdapter.html",
    "revision": "e9a93338feb6739449226bfc13198049"
  },
  {
    "url": "adapter/WebhookAdapter.html",
    "revision": "0a95d4ca86264366766e3a2acd1e0cf5"
  },
  {
    "url": "adapter/WebsocketAdapter.html",
    "revision": "58fd20c92327046d227de02ce802b3c9"
  },
  {
    "url": "api/API.html",
    "revision": "6940595fb0ee5ded79701b6f7b3b2fa4"
  },
  {
    "url": "api/EventType.html",
    "revision": "1ebb49621407ef8d5ba1bbacd3b8f792"
  },
  {
    "url": "api/MessageType.html",
    "revision": "e0d3ac933c0d906a6d5e981d009314d0"
  },
  {
    "url": "assets/css/0.styles.96f1c4e5.css",
    "revision": "b7f144b0330972e00049a38294438812"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.bf43f4e1.js",
    "revision": "376f11ecebfd9e93391ce6912d381ac4"
  },
  {
    "url": "assets/js/11.3c24e4da.js",
    "revision": "a538d11846019a04b50dfa9936709e1f"
  },
  {
    "url": "assets/js/12.3bfdd598.js",
    "revision": "f96d1e5998c6f5292551b409db097687"
  },
  {
    "url": "assets/js/13.473c6137.js",
    "revision": "4b5ac6bb72252db9aba26e041add8369"
  },
  {
    "url": "assets/js/14.dda00ec0.js",
    "revision": "07753787f822695f272e7bfee16a4a70"
  },
  {
    "url": "assets/js/15.259c972f.js",
    "revision": "d191447e4b31a1410104cc04ef74a246"
  },
  {
    "url": "assets/js/16.55543aff.js",
    "revision": "ffce4bb8272db2b19e52f820080ac2bf"
  },
  {
    "url": "assets/js/17.008167a6.js",
    "revision": "739a9cfed487959084ce282e16073e39"
  },
  {
    "url": "assets/js/2.c268b49a.js",
    "revision": "56f554bf5044e0ae3ffbef1a61eb8f1d"
  },
  {
    "url": "assets/js/3.d7b7466a.js",
    "revision": "b7e73b62e9ac2c0537385f623262f545"
  },
  {
    "url": "assets/js/4.0b584fb5.js",
    "revision": "6ee7b3a72cd38f7facc0fcaf96578ca3"
  },
  {
    "url": "assets/js/5.b3486ee3.js",
    "revision": "ed70bb45d7e695a1e441ff7808657771"
  },
  {
    "url": "assets/js/6.725f79ac.js",
    "revision": "8dc4ff80c5254b4a636421ad1eed5e6a"
  },
  {
    "url": "assets/js/7.1af437d3.js",
    "revision": "9c622675844004a23384f3a8714bad80"
  },
  {
    "url": "assets/js/8.7f3d32fb.js",
    "revision": "5097247512a29568a6187ab48861ca6f"
  },
  {
    "url": "assets/js/9.0d7836d2.js",
    "revision": "c0e75ae0c69fcfbb10667ed1e966d9f5"
  },
  {
    "url": "assets/js/app.86f78bf8.js",
    "revision": "e5484a5705a8353ad55eecbb792ceaf9"
  },
  {
    "url": "index.html",
    "revision": "8fc545525b61cd3247b6b9ae756e5e1b"
  },
  {
    "url": "misc/Migration2.html",
    "revision": "6637930f2792397e11f9a269c168fc09"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
