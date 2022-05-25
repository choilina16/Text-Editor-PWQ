const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');
// const { StaleWhileRevalidate } = require('workbox-strategies');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
// parameter to cache assets
// google: caching files / workbox-cacheable-response

// Set up asset cache
// registerRoute(
//   // Here we define the callback function that will filter the requests we want to cache (in this case, JS and CSS files)
//   ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
//   new StaleWhileRevalidate({
//     // Name of the cache storage.
//     cacheName: 'asset-cache',
//     plugins: [
//       // This plugin will cache responses with these headers to a maximum-age of 30 days
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//     ],
//   })
// );

// went on a zoom call with BCS - Mananjoshi because I was having an unknown error!
// he told me to:
// comment out this function call
// restart server, but don't refresh the page
// go to application tab browser
// go to service workers on the right
// click unregister
// and then refresh the page
// and it works perfectly now!

// registerRoute();
