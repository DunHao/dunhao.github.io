"use strict";var precacheConfig=[["/index.html","68b7265583bf9b8bba1b69fbcd8a7cf6"],["/static/js/main.03370b43.js","0a2b0869a234c987ae83f646c977bbf4"],["/static/media/coin.0f9bff85.png","0f9bff85943780fb4f2dfbd0a88606cb"],["/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/static/media/helveticaneueltstd-bd.9ac7e2ff.otf","9ac7e2ff6b9792291e65269b982efa35"],["/static/media/helveticaneueltstd-lt.06137036.otf","06137036ee2d59941c9bda383866b943"],["/static/media/icon-facebook.08083597.svg","08083597f545914315062beebd0e7400"],["/static/media/icon-instagram.a1718cf4.svg","a1718cf4eef8dd91bfe71982cf9f9621"],["/static/media/icon-twitter.52db0778.svg","52db0778406d985e039186a480b05336"],["/static/media/landing-bg-offering.4dd288d9.jpg","4dd288d92dee35b821c65ba3df437efa"],["/static/media/landing-bg-partners.151485db.jpg","151485db32550a55c6984ab08a6ac524"],["/static/media/landing-bg-roadmap.1c3eadc7.jpg","1c3eadc715308092977c502a1bb8154d"],["/static/media/landing-bg-team.f4de9b84.jpg","f4de9b84e6dead18b93003561426e71e"],["/static/media/landing-bg-tokenallocation.f6700224.jpg","f6700224a880f59466348026998e0493"],["/static/media/logo-artplant.689cd0d2.png","689cd0d2d7dd13a487b133b13b60b627"],["/static/media/logo-main.bd33e280.svg","bd33e280bb2550f656e61e96651028f6"],["/static/media/logo-status.08f7bd30.png","08f7bd301c70f2341b18161edb8422d5"],["/static/media/nasalization-rg.82987827.ttf","82987827f2526914f03f1488ebda55a2"],["/static/media/nav-glow-down.67257d39.png","67257d39e95a79f3ed9f40efe59f56d5"],["/static/media/nav-glow-up.c3b3f38d.png","c3b3f38dce0278530b1c95c7b8de0638"],["/static/media/onomber.99a66e42.otf","99a66e42ca653aca3146dffd79d8b0cc"],["/static/media/partners-amigo.3ea864fc.png","3ea864fc91f73ef715a7995a32cd9bfa"],["/static/media/progressbar-effect-1.b592a8d4.png","b592a8d43fc54b19f1d09e41df4aa71f"],["/static/media/roadmap.d2448ce1.png","d2448ce12e23b2c9f5de0dfd18204dde"],["/static/media/ship-resize.b77f6661.png","b77f666117e52ebc3f5337a60efb2bee"],["/static/media/use-of-proceeds.9b1baca7.png","9b1baca7931577cd2fcfa9fb608b00e6"],["/static/media/wp-ribbon-left.57daa8c6.svg","57daa8c66f30886c124ed24d5d9678be"],["/static/media/wp-ribbon-right.37b854be.svg","37b854beef7c7cb42367f991e3015935"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});