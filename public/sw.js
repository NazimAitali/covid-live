const PREFIX = "Covid-live-cache";
const CACHED_FILES = [
  "./offline.html",
  "./style.css",
  "./icons/no-wifi.png",
  "./icons/github.png",
  "./icons/twitter.png",
  "./icons/linkedin.png",
];

this.addEventListener("install", (event) => {
  this.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PREFIX);
      await Promise.all(
        CACHED_FILES.map((path) => {
          return cache.add(new Request(path));
        })
      );
    })()
  );
});

this.addEventListener("fetch", (event) => {
  //console.log(event.request);
  event.respondWith(
    (async () => {
      let cache = await caches.open(PREFIX);
      try {
        return await fetch(event.request);
      } catch (e) {
        let response = await cache.match(event.request);
        if (!response) {
          response = await cache.match("offline.html");
        }
        return response;
      }
    })()
  );
});

this.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!key.includes(PREFIX)) {
            return caches.delete(key);
          }
        })
      );
    })()
  );
  this.clients.claim();
});
