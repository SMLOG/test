/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "precache-manifest.js?_v=0924464ba5b0cc6f3dd5ae4d25f9c0ae"
);

workbox.core.setCacheNameDetails({prefix: "my"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("index.html"));

workbox.routing.registerRoute(/.*?.html/, new workbox.strategies.NetworkFirst({ "cacheName":"index","networkTimeoutSeconds":5, plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*?.json/, new workbox.strategies.NetworkFirst({ "cacheName":"index","networkTimeoutSeconds":5, plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*?workbox.*?\.js$/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*?(js|css|\/video|\/media).*/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*?\.mp[34]/, new workbox.strategies.CacheFirst({ "cacheName":"media", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*?\.(vtt|db_xml)/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*?baidu.*/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*?\?cache=\d+$/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxAgeSeconds: 1209600, maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/.*?(\?t=|%3Ft%3D)\d+$/, new workbox.strategies.CacheFirst({ "cacheName":"cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200, 502 ] }), new workbox.expiration.Plugin({ maxAgeSeconds: 3600000, maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
