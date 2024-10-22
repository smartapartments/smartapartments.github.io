'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3799d2592b2b609101a22d22c82c195f",
"assets/AssetManifest.bin.json": "95fd2ff6ac0c1ada690f93b6453491d0",
"assets/AssetManifest.json": "04fc4ce589a9ebe564f057b113c135f3",
"assets/FontManifest.json": "4362449819ceb1647155d88e122ce344",
"assets/fonts/MaterialIcons-Regular.otf": "9a4f592229ccf054f5000b032853c519",
"assets/lib/assets/clients/burgerking.jpg": "c669adcbe2bc1a6ffc0bdc2d6a03c98a",
"assets/lib/assets/clients/crowne.jpg": "ca5e80b3bb1d4a26b938424ac7a8ebf0",
"assets/lib/assets/clients/eka.jpg": "4383cadc2874843fd4e18825cf217edd",
"assets/lib/assets/clients/hillcrest.jpg": "163e78ecd781b570a0b89f120f4018fd",
"assets/lib/assets/clients/hilton.jpg": "eb3b6ca75b3d150d985e5237597218eb",
"assets/lib/assets/clients/ibis.jpg": "3299c21cb57532e6e1e532e39f007377",
"assets/lib/assets/clients/java.jpg": "ddb43fdffe71bcd90cd8284278efefef",
"assets/lib/assets/clients/nairobihospital.jpg": "071e33e9a5d543e2b2093147e00cd97c",
"assets/lib/assets/clients/radisson.jpg": "c1186a7e2aed34e9c1ddca0153888dcc",
"assets/lib/assets/clients/strathmore.jpg": "e19701ab806b5eb6b8042b2876378e58",
"assets/lib/assets/houses/1.jpeg": "867ad71c60ab7af005a980d609df90a6",
"assets/lib/assets/houses/2.jpeg": "c7a262bf5e281099bfbe2318e91f7dbc",
"assets/lib/assets/houses/2.webp": "fcfb64455e1dc21866905b913d347c89",
"assets/lib/assets/houses/3.jpeg": "66090e8b7fe3d7cce5e717739aebb323",
"assets/lib/assets/houses/4.jpg": "18ca6965c37c829e8c9bb3ff68757217",
"assets/lib/assets/houses/4a.jpg": "b0ffe45e5ee091e0952e4fff77cb29fe",
"assets/lib/assets/houses/4b.webp": "3047b6e42f4458fd9cec2ab3c2fc4bd9",
"assets/lib/assets/houses/4c.jpg": "8b52077bcdb2ea81132f812c825dbb94",
"assets/lib/assets/houses/5.jpeg": "b7e56e0aee52125b5882636daf87a1e4",
"assets/lib/assets/houses/5a.webp": "ff231d0c5d51eecbe9944a247c310d5f",
"assets/lib/assets/houses/5b.jpeg": "099f096e00dc539c5a7030a703f73d09",
"assets/lib/assets/houses/5c.webp": "63f990fb715dbab04b4b2a2814e6bf50",
"assets/lib/assets/houses/6.jpeg": "575e734cda4c5acf04fd46ce4f3ef32b",
"assets/lib/assets/houses/6a.jpeg": "e1efe782dc9cb3079553dd07e1d3f632",
"assets/lib/assets/houses/6b.jpeg": "e0990f4cc1da1c1f79db0489ba4c3855",
"assets/lib/assets/houses/6c.jpg": "e2a1f8464b8b1b504c2e3e0b2e74d224",
"assets/lib/assets/houses/7.jpg": "3fc3e9af3f04ade62c6d03040e1489ae",
"assets/lib/assets/houses/7a.webp": "990fdc70ea56e20e8427dd36471dba5b",
"assets/lib/assets/houses/7b.webp": "990fdc70ea56e20e8427dd36471dba5b",
"assets/lib/assets/houses/7c.webp": "a2ec6fe10c8c89b062e58ddfe75b5380",
"assets/lib/assets/houses/8.jpeg": "0f6dd56b9b38bf30ab6a70ccaf5fbc95",
"assets/lib/assets/houses/8a.jpeg": "4c184d1a0268f700133b66dc835a2e69",
"assets/lib/assets/houses/8b.webp": "979347639377f9671810367340943ccb",
"assets/lib/assets/houses/8c.jpeg": "bc4f1c4159e2bb4d0d41d19361a7d6fe",
"assets/lib/assets/houses/9a.jpeg": "867ad71c60ab7af005a980d609df90a6",
"assets/lib/assets/houses/9b.jpeg": "bf60840474f532f6683751425c639261",
"assets/lib/assets/houses/9c.jpeg": "aa7a31c4c799c094aacf0083c6ff6c56",
"assets/lib/assets/houses/land1.jpg": "1af259f82f789c1fafd82f4a0ec3c707",
"assets/lib/assets/houses/poster.jpg": "fa29557488c2bad824ad1c21ca0c8bdc",
"assets/lib/assets/icons/logo.jpg": "57f50376a03b5cd9ed3593cecfc3b5c1",
"assets/NOTICES": "f800fa0d0b1b6ae806a4916af505db7b",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "718743e266a76b04047e3aae77f5e0df",
"/": "718743e266a76b04047e3aae77f5e0df",
"main.dart.js": "6d8cd4ef43d0210e727f2b381bff6320",
"manifest.json": "79c4c6cd170920c3a5aae2efe5816fde",
"version.json": "0275b35c4eb07e54e2a30bd7f8dae3dc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
