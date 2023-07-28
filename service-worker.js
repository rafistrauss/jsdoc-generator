const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), l = [
  a + "/_app/immutable/entry/app.f5f23664.js",
  a + "/_app/immutable/assets/0.a6c6d75a.css",
  a + "/_app/immutable/nodes/0.d9a16503.js",
  a + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/nodes/1.8e89f28b.js",
  a + "/_app/immutable/assets/2.0b7b2da1.css",
  a + "/_app/immutable/nodes/2.c0a883f5.js",
  a + "/_app/immutable/assets/jsdoc-gen.15a9837a.jpg",
  a + "/_app/immutable/chunks/index.f66fde55.js",
  a + "/_app/immutable/chunks/paths.85844460.js",
  a + "/_app/immutable/chunks/scheduler.e108d1fd.js",
  a + "/_app/immutable/chunks/singletons.b23b7aa2.js",
  a + "/_app/immutable/entry/start.d295feff.js"
], m = [
  a + "/android-chrome-192x192.png",
  a + "/android-chrome-512x512.png",
  a + "/apple-touch-icon.png",
  a + "/favicon-16x16.png",
  a + "/favicon-32x32.png",
  a + "/favicon.ico",
  a + "/google2ee7c597b8c66979.html",
  a + "/robots.txt",
  a + "/site.webmanifest"
], p = "1690567418261", i = `cache-${p}`, c = [
  ...l,
  // the app itself
  ...m
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(i)).addAll(c);
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const s of await caches.keys())
      s !== i && await caches.delete(s);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(e.request.url), n = await caches.open(i);
    if (c.includes(s.pathname))
      return n.match(s.pathname);
    try {
      const o = await fetch(e.request);
      return o.status === 200 && n.put(e.request, o.clone()), o;
    } catch {
      return n.match(e.request);
    }
  }
  e.respondWith(t());
});
