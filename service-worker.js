const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), p = [
  a + "/_app/immutable/entry/app.8ff6c3fc.js",
  a + "/_app/immutable/chunks/0.15994b3e.js",
  a + "/_app/immutable/chunks/1.54ea6cd1.js",
  a + "/_app/immutable/chunks/2.387c3d34.js",
  a + "/_app/immutable/chunks/_page.da46b06b.js",
  a + "/_app/immutable/chunks/index.19ea207c.js",
  a + "/_app/immutable/chunks/paths.d996dec5.js",
  a + "/_app/immutable/chunks/singletons.fe98ede2.js",
  a + "/_app/immutable/assets/fira-mono-all-400-normal.1e3b098c.woff",
  a + "/_app/immutable/assets/fira-mono-cyrillic-400-normal.c7d433fd.woff2",
  a + "/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal.3df7909e.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-400-normal.a8be01ce.woff2",
  a + "/_app/immutable/assets/fira-mono-greek-ext-400-normal.9e2fe623.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-400-normal.e43b3538.woff2",
  a + "/_app/immutable/assets/fira-mono-latin-ext-400-normal.6bfabd30.woff2",
  a + "/_app/immutable/entry/start.8ed6a0dd.js",
  a + "/_app/immutable/entry/error.svelte.b1c7315c.js",
  a + "/_app/immutable/assets/svelte-logo.87df40b8.svg",
  a + "/_app/immutable/assets/jsdoc-gen.15a9837a.jpg",
  a + "/_app/immutable/assets/_layout.8e074d8d.css",
  a + "/_app/immutable/entry/_layout.svelte.3452a977.js",
  a + "/_app/immutable/assets/_page.0b7b2da1.css",
  a + "/_app/immutable/entry/_page.js.9c5eea7e.js",
  a + "/_app/immutable/entry/_page.svelte.a88a06d5.js"
], l = [
  a + "/android-chrome-192x192.png",
  a + "/android-chrome-512x512.png",
  a + "/apple-touch-icon.png",
  a + "/favicon-16x16.png",
  a + "/favicon-32x32.png",
  a + "/favicon.ico",
  a + "/google2ee7c597b8c66979.html",
  a + "/robots.txt",
  a + "/site.webmanifest"
], m = "1689914388255", i = `cache-${m}`, o = [
  ...p,
  // the app itself
  ...l
  // everything in `static`
];
self.addEventListener("install", (e) => {
  async function s() {
    await (await caches.open(i)).addAll(o);
  }
  e.waitUntil(s());
});
self.addEventListener("activate", (e) => {
  async function s() {
    for (const t of await caches.keys())
      t !== i && await caches.delete(t);
  }
  e.waitUntil(s());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function s() {
    const t = new URL(e.request.url), n = await caches.open(i);
    if (o.includes(t.pathname))
      return n.match(t.pathname);
    try {
      const c = await fetch(e.request);
      return c.status === 200 && n.put(e.request, c.clone()), c;
    } catch {
      return n.match(e.request);
    }
  }
  e.respondWith(s());
});
