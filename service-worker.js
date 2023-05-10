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
    "revision": "8ee5b51fa6005ea64f9d39e7afa79d20"
  },
  {
    "url": "assets/css/0.styles.7af2af56.css",
    "revision": "099d38a9318bb22544c4369fba2ff245"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.81037b9d.js",
    "revision": "ede132d3860095d761bd0486adf06e23"
  },
  {
    "url": "assets/js/11.c9d22151.js",
    "revision": "5c7082fe53ae0a809d6b10ec5238e733"
  },
  {
    "url": "assets/js/12.59c9c52c.js",
    "revision": "5b08be22605d4de2e54dd516bcde6b02"
  },
  {
    "url": "assets/js/13.ed3e8d41.js",
    "revision": "7758c9fff1bc61705a1d713a840e3381"
  },
  {
    "url": "assets/js/14.16cf6059.js",
    "revision": "53854dc871001658f6ee437ec3ee96e8"
  },
  {
    "url": "assets/js/15.4f441e80.js",
    "revision": "90c3edfcbd0036bfcb4a3e6d838c50ed"
  },
  {
    "url": "assets/js/16.4061b8d9.js",
    "revision": "5c6ac246ecce1ef5a92544739955980b"
  },
  {
    "url": "assets/js/17.94fd69cb.js",
    "revision": "307e4842ce8efd1c7d103a1b5a1605ef"
  },
  {
    "url": "assets/js/18.a50f87f2.js",
    "revision": "793a2f8bbdfd913e4c493b464188ebff"
  },
  {
    "url": "assets/js/19.36df4a8f.js",
    "revision": "514d0b04f7f45ba07a98a0abafd01d29"
  },
  {
    "url": "assets/js/20.3ac63f5d.js",
    "revision": "53694c65bd68aa283af289bd8c910065"
  },
  {
    "url": "assets/js/21.bfd295c4.js",
    "revision": "ad656d61880079f38812b6a3cd4d00d2"
  },
  {
    "url": "assets/js/22.fc530588.js",
    "revision": "67d33c7af22445e3f6fb9ac849fc588b"
  },
  {
    "url": "assets/js/23.a79d7138.js",
    "revision": "afd6680bfced80c3af319aa167d2d14a"
  },
  {
    "url": "assets/js/24.e2b3990b.js",
    "revision": "bf06fbbfbb2133178e7017faa6449a0b"
  },
  {
    "url": "assets/js/25.a2d449ca.js",
    "revision": "7a2b90b45e1a0a1a4a8065757c6ab59b"
  },
  {
    "url": "assets/js/26.dae34326.js",
    "revision": "e14757af6cec9584dba1c469f526c895"
  },
  {
    "url": "assets/js/27.d6110d6b.js",
    "revision": "6d7d92b3d67795ff8258961ddb738d9c"
  },
  {
    "url": "assets/js/28.38213637.js",
    "revision": "46790743e31db0d2068d9b4b802bd83f"
  },
  {
    "url": "assets/js/29.b0c5df6c.js",
    "revision": "5535710e3d66c121852d3c14fec1df7e"
  },
  {
    "url": "assets/js/3.b1d6ac8c.js",
    "revision": "a3f24752b64e6a2255329d75ab853424"
  },
  {
    "url": "assets/js/30.8c5c4736.js",
    "revision": "499f833bc3af7646de405f3abc056281"
  },
  {
    "url": "assets/js/31.4a57f70e.js",
    "revision": "0ba7e5b061319783cf651ae81ed88219"
  },
  {
    "url": "assets/js/32.be80e5ac.js",
    "revision": "99cb690704bb6da7afb6f7b8eb003523"
  },
  {
    "url": "assets/js/33.45cbc648.js",
    "revision": "b20d3e58ec8130bfea5bdee98fbe02eb"
  },
  {
    "url": "assets/js/34.7701c5c5.js",
    "revision": "2c582aa30faf374aab59e15caea8de8a"
  },
  {
    "url": "assets/js/35.8e31f679.js",
    "revision": "a7c6cdace67e0c3f0a277b46f5acfc06"
  },
  {
    "url": "assets/js/36.dde589aa.js",
    "revision": "46c267b548d74c8161c58d93d81daaa9"
  },
  {
    "url": "assets/js/37.18871a7e.js",
    "revision": "7144eb2224917ae4f09b7a07f5b04762"
  },
  {
    "url": "assets/js/38.970cfbb6.js",
    "revision": "e672fe5f5b1fa9072d2cb651d0e78446"
  },
  {
    "url": "assets/js/39.065e6344.js",
    "revision": "0c23ea535eefb4fb730969ed979d0f14"
  },
  {
    "url": "assets/js/4.e70bc8c6.js",
    "revision": "f480dcc13ce10ebf93a61890853bf55a"
  },
  {
    "url": "assets/js/40.dad114d8.js",
    "revision": "f8967d793f0089c65b483bae117a9762"
  },
  {
    "url": "assets/js/41.f3c87996.js",
    "revision": "bec3499f1b0cdd9c0330b5f454e49491"
  },
  {
    "url": "assets/js/5.c30f959f.js",
    "revision": "48f5f138dc1dc5d7d60cff112dd2864a"
  },
  {
    "url": "assets/js/6.b8dd4c54.js",
    "revision": "abef2c615473255cc94cc93a9dfdae76"
  },
  {
    "url": "assets/js/7.2035234a.js",
    "revision": "9093827393f89384dd002e27bd1145ed"
  },
  {
    "url": "assets/js/8.13ec205c.js",
    "revision": "d859c1a8f00b50df67dfcab3287263e6"
  },
  {
    "url": "assets/js/9.710524ce.js",
    "revision": "69c3dbbfa74e8efcf8d282351d6201a6"
  },
  {
    "url": "assets/js/app.7c2fb340.js",
    "revision": "020aaead2591312e76b16687703218d8"
  },
  {
    "url": "assets/js/vendors~docsearch.8f557a18.js",
    "revision": "ef662aaa91359e958c134d8a0632def3"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "cebafbcae1311b379ed137356124d67b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "e3314430165538a51c04ea3624febe43"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "22b94595e5e59042c5c19bbf9f0c9d23"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "0cee0c4830ceb1967fd8e19056f88548"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "cba51d299840b20d4cd9315b59e8aadf"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "4bfeef14075a1c0ecf0d566b49a5c486"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "73dcdce49497006dc5c147c25eae4899"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "c8413f5854f401a746a0b561015fd584"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "0d4f7f9a1d34b101e1c1947605ac57f7"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "fd4ee2990caf8adb103df989cdc5eb77"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "1657b2768732a1b49ddce63eba664607"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "ef679f4f45c7362a809cb79a8c29d6e1"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "84d672eac047359e92c4b9b2137fe219"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "6ff83e72d28c8ebca2cc880008bdc0b7"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "f12798d821704535f6a06a8a73adabc9"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "ea396a5a8e2c526196f94e2a88d8d2cc"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "6934e0a4efaa3a281d486532102f43ae"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "6634129f68e2b1cf34daaded83da39c8"
  },
  {
    "url": "resources/books.html",
    "revision": "edb6c5f7ff2b5fb06f9cc1ff1c15d4dc"
  },
  {
    "url": "resources/community.html",
    "revision": "bef4bccc50cf7b86281654bedffb2e50"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c91be171baf9a78cc1ecd8b13a6de10d"
  },
  {
    "url": "resources/courses.html",
    "revision": "c399ad630061d59cb9412d7b9854ad81"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "b25ce6722bda36fc1805a81eb0e190c4"
  },
  {
    "url": "resources/examples.html",
    "revision": "7f2018a849e9763ceac6e3aaa544a86f"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "3356abb58ce932364360ca0f5bc1eef2"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "35dae85ccb39d0f3a1cbcb56d3ca475c"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "794e0c1a2cf2911ebc067a0d3445f776"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "3ddbafd8aaaafb16b5dfe26e2c7de45a"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "0e832896cc17b16d2cb2d6640d9286cf"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "34d829fbbec6c4c1e759ec851bdfcebe"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "0fc1bc62ab40e1c330286fc54b359a5c"
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
