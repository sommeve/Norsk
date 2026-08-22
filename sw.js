/* Side om side — service worker (offline-cache) */
const CACHE = 'sos-v11-29';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './data/words.js',
  './data/grammar.js',
  './data/ep01.js',
  './data/ep02.js',
  './data/ep03.js',
  './data/themes.js',
  './data/nils.js',
  './data/somme.js',
  './data/conv.js',
  './data/home.js',
  './data/tid.js',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{}));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* cache-first, met netwerk-fallback die de cache bijwerkt */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit => {
      const net = fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
