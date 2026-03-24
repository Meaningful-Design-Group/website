/* ═══════════════════════════════════════════════════
   MDG — Shared background + UI utilities
   Balinese batik polygon patterns, nav scroll, fade-in
   ═══════════════════════════════════════════════════ */
(function(){

  /* ── BATIK SVG BACKGROUND ─────────────────────────── */
  const BATIK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
  <defs>
    <pattern id="p-parang" x="0" y="0" width="72" height="72" patternUnits="userSpaceOnUse">
      <polygon points="36,2 66,18 66,54 36,70 6,54 6,18" fill="none" stroke="#b85c38" stroke-width="0.5" opacity="0.22"/>
      <polygon points="36,10 58,22 58,50 36,62 14,50 14,22" fill="none" stroke="#b85c38" stroke-width="0.35" opacity="0.15"/>
      <polygon points="36,20 52,29 52,43 36,52 20,43 20,29" fill="none" stroke="#b85c38" stroke-width="0.28" opacity="0.12"/>
      <circle cx="36" cy="36" r="5" fill="none" stroke="#b85c38" stroke-width="0.4" opacity="0.16"/>
      <circle cx="36" cy="36" r="10" fill="none" stroke="#b85c38" stroke-width="0.22" opacity="0.09"/>
      <line x1="36" y1="2"  x2="36" y2="10" stroke="#b85c38" stroke-width="0.3" opacity="0.13"/>
      <line x1="36" y1="62" x2="36" y2="70" stroke="#b85c38" stroke-width="0.3" opacity="0.13"/>
      <line x1="6"  y1="54" x2="14" y2="50" stroke="#b85c38" stroke-width="0.3" opacity="0.13"/>
      <line x1="58" y1="22" x2="66" y2="18" stroke="#b85c38" stroke-width="0.3" opacity="0.13"/>
      <line x1="6"  y1="18" x2="66" y2="54" stroke="#b85c38" stroke-width="0.18" opacity="0.07"/>
      <line x1="6"  y1="54" x2="66" y2="18" stroke="#b85c38" stroke-width="0.18" opacity="0.07"/>
    </pattern>
    <pattern id="p-kawung" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
      <polygon points="28,1 51,10 55,28 51,46 28,55 5,46 1,28 5,10" fill="none" stroke="#4ef0c4" stroke-width="0.45" opacity="0.16"/>
      <polygon points="28,8 46,15 50,28 46,41 28,48 10,41 6,28 10,15" fill="none" stroke="#4ef0c4" stroke-width="0.32" opacity="0.11"/>
      <ellipse cx="28" cy="17" rx="6"  ry="11" fill="none" stroke="#4ef0c4" stroke-width="0.45" opacity="0.17"/>
      <ellipse cx="28" cy="39" rx="6"  ry="11" fill="none" stroke="#4ef0c4" stroke-width="0.45" opacity="0.17"/>
      <ellipse cx="17" cy="28" rx="11" ry="6"  fill="none" stroke="#4ef0c4" stroke-width="0.45" opacity="0.17"/>
      <ellipse cx="39" cy="28" rx="11" ry="6"  fill="none" stroke="#4ef0c4" stroke-width="0.45" opacity="0.17"/>
      <circle cx="28" cy="28" r="3.5" fill="none" stroke="#4ef0c4" stroke-width="0.45" opacity="0.2"/>
      <circle cx="28" cy="28" r="7"   fill="none" stroke="#4ef0c4" stroke-width="0.22" opacity="0.1"/>
      <circle cx="1"  cy="1"  r="1" fill="#4ef0c4" opacity="0.08"/>
      <circle cx="55" cy="1"  r="1" fill="#4ef0c4" opacity="0.08"/>
      <circle cx="1"  cy="55" r="1" fill="#4ef0c4" opacity="0.08"/>
      <circle cx="55" cy="55" r="1" fill="#4ef0c4" opacity="0.08"/>
    </pattern>
    <pattern id="p-ceplok" x="0" y="0" width="88" height="88" patternUnits="userSpaceOnUse">
      <polygon points="44,3 48,20 60,8 57,25 72,18 62,32 78,32 65,42 78,52 62,52 72,66 57,59 60,76 48,68 44,85 40,68 28,76 31,59 16,66 26,52 10,52 23,42 10,32 26,32 16,18 31,25 28,8 40,20"
        fill="none" stroke="#f0ebe0" stroke-width="0.45" opacity="0.1"/>
      <polygon points="44,16 52,28 64,28 56,38 60,52 44,46 28,52 32,38 24,28 36,28"
        fill="none" stroke="#f0ebe0" stroke-width="0.35" opacity="0.08"/>
      <polygon points="44,30 50,36 50,44 44,50 38,44 38,36" fill="none" stroke="#f0ebe0" stroke-width="0.35" opacity="0.09"/>
      <circle cx="44" cy="44" r="5"  fill="none" stroke="#f0ebe0" stroke-width="0.4" opacity="0.11"/>
      <circle cx="44" cy="44" r="11" fill="none" stroke="#f0ebe0" stroke-width="0.22" opacity="0.07"/>
    </pattern>
    <pattern id="p-mega" x="0" y="0" width="180" height="90" patternUnits="userSpaceOnUse">
      <polyline points="0,85 22,62 44,52 66,58 88,64 110,58 132,50 154,56 180,48" fill="none" stroke="#b85c38" stroke-width="0.55" opacity="0.18"/>
      <polyline points="0,73 22,52 44,42 66,48 88,54 110,48 132,40 154,46 180,38" fill="none" stroke="#b85c38" stroke-width="0.42" opacity="0.13"/>
      <polyline points="0,61 22,42 44,32 66,38 88,44 110,38 132,30 154,36 180,28" fill="none" stroke="#b85c38" stroke-width="0.32" opacity="0.09"/>
      <polyline points="0,49 22,32 44,22 66,28 88,34 110,28 132,20 154,26 180,18" fill="none" stroke="#f0ebe0" stroke-width="0.25" opacity="0.06"/>
      <polygon points="28,10 52,2 76,10 72,28 32,28" fill="none" stroke="#b85c38" stroke-width="0.42" opacity="0.14"/>
      <polygon points="36,14 52,8 68,14 65,24 39,24" fill="none" stroke="#b85c38" stroke-width="0.28" opacity="0.1"/>
      <polygon points="108,8 132,0 156,8 152,26 112,26" fill="none" stroke="#b85c38" stroke-width="0.42" opacity="0.14"/>
      <polygon points="52,16 58,10 64,16 58,22" fill="none" stroke="#b85c38" stroke-width="0.32" opacity="0.12"/>
      <polygon points="132,14 138,8 144,14 138,20" fill="none" stroke="#b85c38" stroke-width="0.32" opacity="0.12"/>
    </pattern>
    <pattern id="p-truntum" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
      <polygon points="22,10 24.5,19 33,22 24.5,25 22,34 19.5,25 11,22 19.5,19"
        fill="none" stroke="#a8e63d" stroke-width="0.5" opacity="0.18"/>
      <polygon points="22,14 25,22 22,30 19,22" fill="none" stroke="#a8e63d" stroke-width="0.28" opacity="0.1"/>
      <circle cx="22" cy="22" r="3" fill="none" stroke="#a8e63d" stroke-width="0.45" opacity="0.18"/>
      <circle cx="22" cy="22" r="6" fill="none" stroke="#a8e63d" stroke-width="0.2" opacity="0.09"/>
      <circle cx="22" cy="10" r="0.8" fill="#a8e63d" opacity="0.14"/>
      <circle cx="33" cy="22" r="0.8" fill="#a8e63d" opacity="0.14"/>
      <circle cx="22" cy="34" r="0.8" fill="#a8e63d" opacity="0.14"/>
      <circle cx="11" cy="22" r="0.8" fill="#a8e63d" opacity="0.14"/>
      <polygon points="5,5 6.2,9 10,10 6.2,11 5,15 3.8,11 0,10 3.8,9" fill="none" stroke="#a8e63d" stroke-width="0.32" opacity="0.12"/>
      <polygon points="39,5 40.2,9 44,10 40.2,11 39,15 37.8,11 34,10 37.8,9" fill="none" stroke="#a8e63d" stroke-width="0.32" opacity="0.12"/>
    </pattern>
    <pattern id="p-sidomukti" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
      <polygon points="32,2 62,32 32,62 2,32"  fill="none" stroke="#b85c38" stroke-width="0.45" opacity="0.17"/>
      <polygon points="32,12 52,32 32,52 12,32" fill="none" stroke="#f0ebe0" stroke-width="0.3" opacity="0.09"/>
      <polygon points="32,22 42,32 32,42 22,32" fill="none" stroke="#b85c38" stroke-width="0.38" opacity="0.14"/>
      <circle cx="32" cy="32" r="4"  fill="none" stroke="#f0ebe0" stroke-width="0.4" opacity="0.12"/>
      <circle cx="32" cy="32" r="1.5" fill="#f0ebe0" opacity="0.1"/>
      <line x1="32" y1="2"  x2="32" y2="10" stroke="#b85c38" stroke-width="0.3" opacity="0.1"/>
      <line x1="32" y1="54" x2="32" y2="62" stroke="#b85c38" stroke-width="0.3" opacity="0.1"/>
      <line x1="2"  y1="32" x2="10" y2="32" stroke="#b85c38" stroke-width="0.3" opacity="0.1"/>
      <line x1="54" y1="32" x2="62" y2="32" stroke="#b85c38" stroke-width="0.3" opacity="0.1"/>
    </pattern>
    <pattern id="p-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <polygon points="0,0 40,0 20,34.6"  fill="none" stroke="#4ef0c4" stroke-width="0.22" opacity="0.08"/>
      <polygon points="0,40 40,40 20,5.4" fill="none" stroke="#4ef0c4" stroke-width="0.22" opacity="0.08"/>
      <line x1="0" y1="20" x2="40" y2="20" stroke="#4ef0c4" stroke-width="0.18" opacity="0.06"/>
      <line x1="20" y1="0" x2="20" y2="40" stroke="#4ef0c4" stroke-width="0.18" opacity="0.06"/>
    </pattern>
    <radialGradient id="vig" cx="50%" cy="50%" r="65%">
      <stop offset="0%"   stop-color="#0f0e0c" stop-opacity="0.75"/>
      <stop offset="100%" stop-color="#0f0e0c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vig-edge" cx="50%" cy="50%" r="80%">
      <stop offset="60%"  stop-color="#0f0e0c" stop-opacity="0"/>
      <stop offset="100%" stop-color="#0f0e0c" stop-opacity="0.6"/>
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#p-grid)"/>
  <rect x="0"   y="0" width="28%" height="100%" fill="url(#p-parang)"/>
  <rect x="74%" y="0" width="26%" height="100%" fill="url(#p-parang)"/>
  <rect x="66%" y="0" width="34%" height="100%" fill="url(#p-kawung)"/>
  <rect x="18%" y="0" width="22%" height="50%" fill="url(#p-kawung)" opacity="0.7"/>
  <rect x="0"   y="0"   width="100%" height="38%" fill="url(#p-ceplok)"/>
  <rect x="20%" y="68%" width="60%" height="32%" fill="url(#p-ceplok)" opacity="0.8"/>
  <rect x="0"   y="35%" width="100%" height="32%" fill="url(#p-mega)"/>
  <rect x="0"   y="78%" width="100%" height="22%" fill="url(#p-mega)" opacity="0.85"/>
  <rect x="0"   y="0"   width="100%" height="100%" fill="url(#p-truntum)" opacity="0.6"/>
  <rect x="25%" y="25%" width="50%" height="50%" fill="url(#p-sidomukti)" opacity="0.55"/>
  <rect x="0"   y="0"   width="18%" height="18%" fill="url(#p-sidomukti)"/>
  <rect x="82%" y="0"   width="18%" height="18%" fill="url(#p-sidomukti)"/>
  <rect x="0"   y="82%" width="18%" height="18%" fill="url(#p-sidomukti)"/>
  <rect x="82%" y="82%" width="18%" height="18%" fill="url(#p-sidomukti)"/>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#vig)"/>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#vig-edge)"/>
</svg>`;

  /* ── INJECT BACKGROUND ─────────────────────────────── */
  function initBg(){
    document.querySelectorAll('.batik-bg').forEach(el=>{
      var layer = document.createElement('div');
      layer.setAttribute('aria-hidden','true');
      layer.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;';
      layer.innerHTML = BATIK_SVG;
      el.prepend(layer);
    });
  }

  /* ── NAVIGATION SCROLL BEHAVIOUR ──────────────────── */
  function initNav(){
    const nav = document.querySelector('.nav');
    if(!nav) return;
    window.addEventListener('scroll',()=>{
      nav.style.background = window.scrollY > 40
        ? 'rgba(15,14,12,0.96)'
        : 'rgba(15,14,12,0.88)';
    },{passive:true});

    // Mark active link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a=>{
      if(a.getAttribute('href')===path) a.classList.add('active');
    });
  }

  /* ── INTERSECTION FADE-UP ──────────────────────────── */
  function initFade(){
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    },{threshold:0.08});
    document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
  }

  /* ── INIT ──────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded',()=>{
    initBg();
    initNav();
    initFade();
  });

})();
