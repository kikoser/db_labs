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
    "revision": "0942157db1b8aac0b3d5e5738bbb97f2"
  },
  {
    "url": "assets/css/0.styles.8c258a1e.css",
    "revision": "a894413f08cdba8362ec3daa325d654a"
  },
  {
    "url": "assets/img/ABAC.3bff2f92.svg",
    "revision": "3bff2f9297ca856420e5e97eefbfb2a8"
  },
  {
    "url": "assets/img/api.0bf79b5c.svg",
    "revision": "0bf79b5c520d7e8a2f23e8a1c94568d7"
  },
  {
    "url": "assets/img/data_life_cycle.e1765fc7.svg",
    "revision": "e1765fc745fc41be7f9fd5c4e8deebf9"
  },
  {
    "url": "assets/img/database_extraction.ba7a90f7.svg",
    "revision": "ba7a90f7cd1a0e8a59b749f7d9094dfe"
  },
  {
    "url": "assets/img/delete.e1df0c33.jpg",
    "revision": "e1df0c338219c4aea51cbc442f43c1f3"
  },
  {
    "url": "assets/img/get.15caab3f.jpg",
    "revision": "15caab3fff61b4a8b937b2095c5b79f1"
  },
  {
    "url": "assets/img/get2.3916b339.jpg",
    "revision": "3916b3397f971463aa544b528fc58f28"
  },
  {
    "url": "assets/img/post.520cb0e7.jpg",
    "revision": "520cb0e70f2d44b8127a8c1d0f1fb024"
  },
  {
    "url": "assets/img/relation_diagram.202b7c0d.svg",
    "revision": "202b7c0de84220d829d154fa65aba32a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/webscraping.9ede8463.svg",
    "revision": "9ede84639db62d16f9fa5264bbfabc3c"
  },
  {
    "url": "assets/js/1.9f0b1ae6.js",
    "revision": "91598eb1a7c3b481ad28b2c15569f023"
  },
  {
    "url": "assets/js/10.08909c54.js",
    "revision": "e065eca5ea686ec9f05f4e15eeee584a"
  },
  {
    "url": "assets/js/13.19546f81.js",
    "revision": "36d591167c407da67dd2cd2bddcf0075"
  },
  {
    "url": "assets/js/14.a54ff9b3.js",
    "revision": "918b3d14a0297b45e7f7b4a2a1dadc6a"
  },
  {
    "url": "assets/js/15.3a7aba1a.js",
    "revision": "7d637805584ead450dd6d0c5491817fb"
  },
  {
    "url": "assets/js/16.a702eb6d.js",
    "revision": "7a186b590b89850ce49120999619de57"
  },
  {
    "url": "assets/js/17.c6cf99cf.js",
    "revision": "274fbfe6f042ca6e6f515783a57f12a7"
  },
  {
    "url": "assets/js/18.ae49ccc8.js",
    "revision": "01b984cd1598200678d88ba910b67125"
  },
  {
    "url": "assets/js/19.0a9851a5.js",
    "revision": "dd1f4c4aea192fcf0ea52edc40631f61"
  },
  {
    "url": "assets/js/2.2d0160f0.js",
    "revision": "d0a65bf02e76d0d302579b7a6b823629"
  },
  {
    "url": "assets/js/20.7d49b17b.js",
    "revision": "3e9b9b25decec3871cb91a319cbf5f0b"
  },
  {
    "url": "assets/js/21.85eeef52.js",
    "revision": "b8d0c62f773cf6d8deb382e18a84663e"
  },
  {
    "url": "assets/js/22.a8221b20.js",
    "revision": "f17f1b3d1d62679d66de405fecc9b3fc"
  },
  {
    "url": "assets/js/23.58f58ca1.js",
    "revision": "b00cae5f4b856508cd2347a0887e146e"
  },
  {
    "url": "assets/js/24.3529e98c.js",
    "revision": "ede587200ad35ae7ff610f903ba79bb8"
  },
  {
    "url": "assets/js/25.46a5fa3f.js",
    "revision": "194016aae0fb1eedee33e4b05979955f"
  },
  {
    "url": "assets/js/26.824637aa.js",
    "revision": "ec31877c917f450d7c9d79ef06229c14"
  },
  {
    "url": "assets/js/27.6ca45c9a.js",
    "revision": "02582a3c26ccb388d744b5ebdcdfee64"
  },
  {
    "url": "assets/js/28.af68b7d1.js",
    "revision": "e2bceb3d707423be8385792108119bad"
  },
  {
    "url": "assets/js/29.918b485e.js",
    "revision": "2f752170e4097fe58faeab44b601a042"
  },
  {
    "url": "assets/js/3.19415d39.js",
    "revision": "97ad2b45f469fde528b03464ed4e2da6"
  },
  {
    "url": "assets/js/30.25ca867b.js",
    "revision": "9082dce4b1aedbe28dfa55bcba0a679a"
  },
  {
    "url": "assets/js/31.222570a0.js",
    "revision": "9328832d07ec329e34171074837cc3fa"
  },
  {
    "url": "assets/js/32.dfd7f01b.js",
    "revision": "a2b886c742334bbceaa7bef4d3f0a7a9"
  },
  {
    "url": "assets/js/33.feb3da06.js",
    "revision": "55ed3f91ad21f22990ebc790ed845b85"
  },
  {
    "url": "assets/js/34.a01d9c99.js",
    "revision": "50fff8c59357f43399a1881359ab8e46"
  },
  {
    "url": "assets/js/35.60b7d165.js",
    "revision": "e5d014d5cb7e76393f0c4367a3ec8636"
  },
  {
    "url": "assets/js/36.d9b0594c.js",
    "revision": "65b0b43fa6fc0db9b51eef449405f002"
  },
  {
    "url": "assets/js/37.6a732564.js",
    "revision": "6f70cf52f6ca6660925e711c084c8b1e"
  },
  {
    "url": "assets/js/38.ab78dae5.js",
    "revision": "e20b31aabd38bcecdf0c0b9a56c4599c"
  },
  {
    "url": "assets/js/39.abdb7d90.js",
    "revision": "dbb94e18b88808f4e5ea9f36d7adea6f"
  },
  {
    "url": "assets/js/4.61188884.js",
    "revision": "d40440182e53065a09a57b0e0d586047"
  },
  {
    "url": "assets/js/41.3fe40e51.js",
    "revision": "d33b8fe489e7938b5294cab96d1a7faf"
  },
  {
    "url": "assets/js/5.42adbcad.js",
    "revision": "ca782f91d7b29430760f6676b7a72946"
  },
  {
    "url": "assets/js/6.4604af66.js",
    "revision": "401895fe6e72f081e6b406001fb5d81a"
  },
  {
    "url": "assets/js/7.ee077f5d.js",
    "revision": "d0806c30e7610ab661618325b8e41fc3"
  },
  {
    "url": "assets/js/8.b58b024c.js",
    "revision": "dc4bb3234c07be5e6d3618e6b5e2fdd4"
  },
  {
    "url": "assets/js/9.88d32077.js",
    "revision": "b344120c5d163a728ce559cce35eac92"
  },
  {
    "url": "assets/js/app.8b63de2a.js",
    "revision": "64b24d449122f76113ce7117e60ad8b2"
  },
  {
    "url": "assets/js/vendors~docsearch.2d737b4b.js",
    "revision": "294b247c6ab62b4e7e84055aafee5eb6"
  },
  {
    "url": "conclusion/index.html",
    "revision": "3e29e74d42bac5c0ba6b94bca4783032"
  },
  {
    "url": "design/index.html",
    "revision": "ce283426bda5aa35aa3362398a049078"
  },
  {
    "url": "index.html",
    "revision": "883c394b1f32362b118d7632db20e47b"
  },
  {
    "url": "intro/index.html",
    "revision": "74c984c1c2c8e7e6d8d06107fcfa6a43"
  },
  {
    "url": "license.html",
    "revision": "77437445bb85c970b31609014ff5e559"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "394af4e0e18a5629bb53b357b143b902"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "80a2525286fcdbf206aeb1bd90369a42"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9aaebea1868be4d3b6102ccfbf2295bb"
  },
  {
    "url": "software/index.html",
    "revision": "f19af5ac1509fe737bb44a8797a04da6"
  },
  {
    "url": "test/index.html",
    "revision": "44483f38f2157b7a59f011ce9dc7d7b0"
  },
  {
    "url": "use cases/index.html",
    "revision": "dc8f87e599c68a74ccd1b9f445e6a328"
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
