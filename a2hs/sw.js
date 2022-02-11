self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('fox-store').then((cache) => cache.addAll([
            '/pwa-example/a2hs/',
            '/pwa-example/a2hs/index.html',
            '/pwa-example/a2hs/index.js',
            '/pwa-example/a2hs/style.css'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});