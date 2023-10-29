const serviceWorkerVersion = "V1.1";
const CACHED_FILES = [
    "/",
    "/index.html",
    "/styles.css",
    "/script.js",
    "/assets/garage.svg",
    "/assets/gate.svg",
    "/assets/home-assistant-logo.png",
    "/assets/remote-controller-icon.ico"
]

self.addEventListener("install", (event) => {
    self.skipWaiting();
    event.waitUntil((async () => {
        const cache = await caches.open(serviceWorkerVersion);
        CACHED_FILES.map((path) => {
            cache.add(new Request(path));
        })
    })());
});

self.addEventListener("activate", (event) => {
    clients.claim();
    event.waitUntil((async () => {
        const keys = await caches.keys();
        // delete old caches
        await Promise.all(
            keys.map((key) => {
                if (!key.includes(serviceWorkerVersion)) {
                    return caches.delete(key);
                }
            })
        )
    })())
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
