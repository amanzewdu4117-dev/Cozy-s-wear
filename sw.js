const CACHE_NAME = "cozy-wear-v1";
const urlsToCache = [
  "index.html",
  "owners.html",
  "products.html",
  "sales.html",
  "payments.html",
  "reports.html",
  "style.css",
  "app.js",
  "firebase.js"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
