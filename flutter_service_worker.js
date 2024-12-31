'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"appIcon.png": "5ecd6661536bd0017a777d9c2c87fbee",
"assets/AssetManifest.bin": "d959e6f40853d2c5a385475c2bdb1e32",
"assets/AssetManifest.bin.json": "262634be483b983d5ef17bb19363c4f3",
"assets/AssetManifest.json": "40a6cb66f2ce636fff86ab2d5ed42728",
"assets/assets/fonts/Almarai-Bold.ttf": "1c7b8f3e50a7ca693dc27d3f1314167f",
"assets/assets/fonts/Almarai-ExtraBold.ttf": "5270f5e7ab01259e282604276871946f",
"assets/assets/fonts/Almarai-Light.ttf": "5b0dec05feae02fef51afd517af94d4c",
"assets/assets/fonts/Almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/assets/fonts/Beeaty.ttf": "0faff24fc05661c6e6e7128bbbde4b49",
"assets/assets/fonts/BIGX.otf": "6df246e24fb83053893f3f38eb34e652",
"assets/assets/icons/appIcon.png": "5ecd6661536bd0017a777d9c2c87fbee",
"assets/assets/icons/appIcon.svg": "05b64759e6dceaf13e51686c8b24ff7c",
"assets/assets/icons/appIconCharacter.png": "1cf1db1380dc3fecc7effe802aba1350",
"assets/assets/icons/birthdate.svg": "ea67025f81a1e51d67330fd16cb31d59",
"assets/assets/icons/createGameFormLabel.svg": "137b5cbddfb786527427b8a5e9d6dbdb",
"assets/assets/icons/createGameLabel.svg": "bf86765ad418bb20cf67d7a46a6a8792",
"assets/assets/icons/errorIcon.svg": "77906b5f0e3f418a21571c93f98bb824",
"assets/assets/icons/gamePageSelectedIcon.svg": "dddfdd3c36be6d93d8255da523edcb64",
"assets/assets/icons/logo.svg": "47ddab9b1e07b15ea1595126674ba7ca",
"assets/assets/icons/nativeSplash.png": "95e54a68a52ceeb774dcae30e2830816",
"assets/assets/icons/nl3b.svg": "1ed1fa3ece96437e8e4ce5fdc21432f1",
"assets/assets/icons/ooredooLogo.png": "10935c09f0ab21696ddfa42fd9dc6665",
"assets/assets/icons/passwordVisibilityOff.svg": "31683ab51ab5f1c37e71d876624313cd",
"assets/assets/icons/passwordVisibilityOn.svg": "f8d6d9ec353ac4cca46a5e16dfa729ce",
"assets/assets/icons/selectedIcon.svg": "6116308e0f640b48aa5bf60858d0147a",
"assets/assets/icons/shloon.svg": "6f0b7ee87f6440eb8595a3376db0febe",
"assets/assets/icons/shloonNl3b.svg": "d72e4e75e04287a0201cd2983ce6e24e",
"assets/assets/icons/varIcon.svg": "11342ee5587c5877c98becfe9cba17c3",
"assets/assets/images/buttonBackgroundPattern.png": "193a151397e157b325712393211941b0",
"assets/assets/images/buttonBackgroundPatternCompressed.png": "2c58860eb507aa1485eb815bc189739e",
"assets/assets/images/character.png": "f075e542a5b300170aee3061e29a5e75",
"assets/assets/images/characterCompressed.png": "140bdafdbf4863f25ec351bcb3ef1747",
"assets/assets/images/questionImage.png": "bb0a5e5a478014c191e2cdfd781e3cab",
"assets/assets/lotties/emptyLottie.json": "fa5417adbe3b0f24066b789674835ed6",
"assets/FontManifest.json": "8e5221d48fe2297b7b77ca15e3a2e7a2",
"assets/fonts/MaterialIcons-Regular.otf": "3f2ae61f148dd6bcf18c5e33294b3bf1",
"assets/NOTICES": "7455dfdfa25f6e156e1567621c488973",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8521152765ac463fb43cc71bb7a89163",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "29154d8260b60657e92db7e3f9003518",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "a2023f2e6ebf4b9fc99a8371297f0265",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "d8984bdaada3bfac387c9482c753047c",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "387a24f9bb688cbb6bdadafb2473a3e5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "37419c5c69713030c647bc5b8460b06c",
"/": "37419c5c69713030c647bc5b8460b06c",
"main.dart.js": "e120f74d79b6f9be2c6b992acc06b401",
"manifest.json": "b2857796ea5cb3c1ba65a324cb785d0c",
"splash/img/dark-1x.png": "43ff10d3d1ecf70af8f8fbc472025bd5",
"splash/img/dark-2x.png": "e749ee555e116bb7437fdc78ac878e67",
"splash/img/dark-3x.png": "77f137e9db4e55032faa20825687b3ef",
"splash/img/dark-4x.png": "be47c36333e4ec98e0bd03e435a82339",
"splash/img/light-1x.png": "43ff10d3d1ecf70af8f8fbc472025bd5",
"splash/img/light-2x.png": "e749ee555e116bb7437fdc78ac878e67",
"splash/img/light-3x.png": "77f137e9db4e55032faa20825687b3ef",
"splash/img/light-4x.png": "be47c36333e4ec98e0bd03e435a82339",
"version.json": "b7d1c94f6f06725d42ef9968dfcdc79c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
