const timestamp = {
  toString: () => {
    throw new Error("`timestamp` has been removed from $service-worker. Use `version` instead");
  }
};
const build = [
  "/jsdoc-generator/_app/start-c548ecc1.js",
  "/jsdoc-generator/_app/pages/__layout.svelte-aa436e60.js",
  "/jsdoc-generator/_app/assets/pages/__layout.svelte-4f87cdf8.css",
  "/jsdoc-generator/_app/error.svelte-b249458e.js",
  "/jsdoc-generator/_app/pages/index.svelte-996a7bcf.js",
  "/jsdoc-generator/_app/assets/pages/index.svelte-219e95a4.css",
  "/jsdoc-generator/_app/chunks/vendor-453749c7.js"
];
const files = [
  "/jsdoc-generator/android-chrome-192x192.png",
  "/jsdoc-generator/android-chrome-512x512.png",
  "/jsdoc-generator/apple-touch-icon.png",
  "/jsdoc-generator/favicon-16x16.png",
  "/jsdoc-generator/favicon-32x32.png",
  "/jsdoc-generator/favicon.ico",
  "/jsdoc-generator/google2ee7c597b8c66979.html",
  "/jsdoc-generator/robots.txt",
  "/jsdoc-generator/site.webmanifest"
];
const worker = self;
const FILES = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
