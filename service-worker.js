const APP_PREFIX = 'Pwafect-Budget-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;
const DATA_CACHE_NAME = 'pwafect-data-cache'

const FILES_TO_CACHE = [
    "./server.js",
    "./public/index.html",
    "./public/css/styles.css",
    "./public/icons/icon-72x72.png",
    "./public/icons/icon-96x96.png",
    "./public/icons/icon-128x128.png",
    "./public/icons/icon-144x144.png",
    "./public/icons/icon-152x152.png",
    "./public/icons/icon-192x192.png",
    "./public/icons/icon-384x384.png",
    "./public/icons/icon-512x512.png",
    "./dist/index.bundle.js",
    "./dist/idb.bundle.js",
    "./routes/api.js",
    "./models/transaction.js"
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log('installing cache : ' + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (keyList) {
            let cacheKeeplist = keyList.filter(function (key) {
            return key.indexOf(APP_PREFIX);
            });
            cacheKeeplist.push(CACHE_NAME);

            return Promise.all(keyList.map(function (key, i) {
                if (cacheKeeplist.indexOf(key) === -1) {
                    console.log('deleting cache : ' + keyList[i] );
                    return caches.delete(keyList[i]);
                }
            }));
        })
    )
});

// self.addEventListener('fetch', function(evt) {
//     if (evt.request.url.includes('/api/')) {
//         evt.respondWith(
//             caches  
//                 .open(DATA_CACHE_NAME)
//                 .then(cache => {
//                     return fetch(evt.request)
//                         .then(response => {
//                             if (response.status === 200) {
//                                 cache.put(evt.request.url, response.clone());
//                             }
//                             return response;
//                         })
//                         .catch(err => {
//                             return cache.match(evt.request);
//                         });
//                 })
//                 .catch(err => console.log(err))
//         );
//         return;
//     }

//     evt.respondWith(
//         fetch(evt.request).catch(function() {
//             return caches.match(evt.request).then(function(response) {
//                 if (response) {
//                     return response;
//                 } else if (evt.request.headers.get('accept').includes('text/html')) {
//                     return caches.match('/');
//                 }
//             });
//         })
//     );
// });

self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url)
    e.respondWith(
        caches.match(e.request).then(function (request) {
            if (request) {
                console.log('responding with cache : ' + e.request.url)
                return request
            } else {
                console.log('file is not cached, fetching : ' + e.request.url)
                return fetch(e.request)
            }
    }))
})