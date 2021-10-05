const staticSample = "sample-site-v1"
const assets = [
  "/",
  "/index.html",
  "/main.css",
  "/app.js",
  "/images/Apple_shreds.jpg", 
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSample).then(cache => {
      cache.addAll(assets)
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});