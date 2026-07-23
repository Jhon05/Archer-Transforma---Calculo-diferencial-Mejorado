const CACHE_NAME = 'arcotransforma-v57-integridad-conquista';
const CODE_FILES = new Set(['/', '/index.html', '/game.js', '/styles.css', '/scorm.js', '/sw.js']);
const ANGLES = [-45,-35,-25,-15,-5,5,15,25,35,45,55,65,70];
const IDEAL_SHEETS = ANGLES.map(angle => `./avframes/explorador_sheets/row_${angle<0?`n${Math.abs(angle)}`:`p${angle}`}.png`);
const FANTASY_BACKGROUNDS = Array.from({length:10},(_,i)=>`./bg_progression/phase_${String(i+1).padStart(2,'0')}.png`);
const QUESTION_IMAGES = Array.from({length:10},(_,i)=>`./banco/q${i+31}.png`);
const STATIC_ASSETS = ['./manifest.webmanifest','./mathjax-tex-svg.js','./avframes/explorador/preview.png','./targets/target_medieval.png', ...IDEAL_SHEETS, ...FANTASY_BACKGROUNDS, ...QUESTION_IMAGES];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  const url=new URL(event.request.url);
  const path=url.pathname.replace(/\/+/g,'/');
  const isCode=[...CODE_FILES].some(file=>path.endsWith(file));
  if(isCode || event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(resp=>{
      const clone=resp.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,clone)).catch(()=>{}); return resp;
    }).catch(()=>caches.match(event.request).then(resp=>resp||caches.match('./index.html'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(resp=>{
    const clone=resp.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,clone)).catch(()=>{}); return resp;
  })));
});
