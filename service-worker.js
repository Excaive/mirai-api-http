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
    "revision": "62283b68e25adba2d20124e30837fcd7"
  },
  {
    "url": "adapter/Adapter.html",
    "revision": "9e03150d5cb5ff1c013b5a2307512fb1"
  },
  {
    "url": "adapter/CustomizedAdapter.html",
    "revision": "22f3e9339ca2060ef90d31ac62d8892a"
  },
  {
    "url": "adapter/HttpAdapter.html",
    "revision": "7321074e83ce0e383fd7a9833d4ab207"
  },
  {
    "url": "adapter/ReverseWebsocketAdapter.html",
    "revision": "8c3094b6ad7f43b42a50e2bcf7f792f1"
  },
  {
    "url": "adapter/WebhookAdapter.html",
    "revision": "0481f182f891286f55636b430555f5de"
  },
  {
    "url": "adapter/WebsocketAdapter.html",
    "revision": "aab8645e84079698c8b762bf82157bea"
  },
  {
    "url": "api/API.html",
    "revision": "c8088721bc8a6a056691dba2d6c05cd7"
  },
  {
    "url": "api/EventType.html",
    "revision": "37c81da3d51c7c641b2c5419efc391be"
  },
  {
    "url": "api/MessageType.html",
    "revision": "1fc44068a8fb015986a3a3dce8b8eba7"
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
    "url": "assets/js/14.d422f989.js",
    "revision": "55f1d0fb034809be293ba15f517e16c5"
  },
  {
    "url": "assets/js/15.bbe08107.js",
    "revision": "1c41164ea3737dcc4920b0ca99674fe5"
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
    "url": "assets/js/9.58f680b7.js",
    "revision": "23961bd611fdf5555746472f50a444c7"
  },
  {
    "url": "assets/js/app.b67dea66.js",
    "revision": "99d5519bc2e3a60902117450973f2352"
  },
  {
    "url": "index.html",
    "revision": "3c68edb3d0d937eb5163ecd5aa8395bf"
  },
  {
    "url": "misc/Migration2.html",
    "revision": "921aa4c5f23c5a055a4677019f888745"
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
