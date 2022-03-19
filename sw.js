const cacheName = "v3"; // Cahce Stroage 白名单
const offlineUrl = "index.html";

this.addEventListener("install", function (event) {
  console.log("install");
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      // 更换 Cache Stroage
      return cache.addAll([
        "js/chunk-common.js",
        "css/chunk-common.css",
        "js/index.js",
        "css/index.css",
        "css/chunk-vendors.css",
        "js/chunk-vendors.js",
        offlineUrl,
      ]);
    })
  );
});

this.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all[
        keys.map((key) => {
          if (cacheName != key) {
            console.log(key);
            return caches.delete(key); // 删除不在白名单中的 Cache Stroage
          }
        })
      ];
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (
    event.request.mode === "navigate" &&
    event.request.method === "GET" &&
    event.request.headers.get("accept").includes("text/html")
  ) {
    event.respondWith(
      fetch(event.request.url).catch((error) => {
        // Return the offline page
        console.error(error);
        return caches.match(offlineUrl);
      })
    );
  } /* else {
    event.respondWith(
      caches.open(cacheName).then(function (cache) {
        return cache
          .match(event.request, { ignoreVary: true, ignoreSearch: true })
          .then(function (response) {
            return response || fetch(event.request);
          });
      })
    );
  }*/
});
