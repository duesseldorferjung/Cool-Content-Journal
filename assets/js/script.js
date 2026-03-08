
(function(){const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();})();
(function(){
  const btn=document.getElementById('menuToggle');
  const nav=document.querySelector('.nav-links');
  if(!btn||!nav) return;
  btn.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape' && nav.classList.contains('open')){
      nav.classList.remove('open'); btn.setAttribute('aria-expanded','false');
    }
  });
})();
(function(){
  const root=document.documentElement; const btn=document.getElementById('themeToggle');
  const KEY='ccj-theme'; const saved=localStorage.getItem(KEY);
  if(saved==='light') root.setAttribute('data-theme','light');
  const setIcon=()=>{ if(!btn) return; btn.textContent = root.getAttribute('data-theme')==='light' ? '🌙' : '☀️'; };
  setIcon();
  btn?.addEventListener('click',()=>{
    const isLight=root.getAttribute('data-theme')==='light';
    if(isLight){ root.removeAttribute('data-theme'); localStorage.setItem(KEY,'dark'); }
    else { root.setAttribute('data-theme','light'); localStorage.setItem(KEY,'light'); }
    btn.setAttribute('aria-pressed', String(!isLight)); setIcon();
  });
})();
(function(){
  for(const a of document.querySelectorAll('a[href^="#"]')){
    a.addEventListener('click', e=>{
      const id=a.getAttribute('href').slice(1); const el=document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  }
})();
