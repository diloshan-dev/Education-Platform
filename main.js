/* ============================================================
   MAIN.JS — shared across every page
   - AL: tiny localStorage-backed "auth" layer (name/email only,
     no real backend — good enough for a static front-end demo)
   - theme toggle (light/dark), persisted
   - mobile nav burger
   - active nav-link highlighting
   - navbar auth slot (Login/Sign up vs. profile chip + dropdown)
   ============================================================ */

const AL = {
  KEY_USER: 'al_user',
  KEY_OWNED: 'al_owned',

  login(name, email){
    localStorage.setItem(this.KEY_USER, JSON.stringify({ name, email }));
  },
  logout(){
    localStorage.removeItem(this.KEY_USER);
  },
  getUser(){
    try{
      const raw = localStorage.getItem(this.KEY_USER);
      return raw ? JSON.parse(raw) : null;
    }catch(e){ return null; }
  },
  getOwned(){
    try{
      return JSON.parse(localStorage.getItem(this.KEY_OWNED) || '[]');
    }catch(e){ return []; }
  },
  addOwned(id){
    const owned = this.getOwned();
    if(!owned.includes(id)){
      owned.push(id);
      localStorage.setItem(this.KEY_OWNED, JSON.stringify(owned));
    }
  },
  initials(name){
    if(!name) return '?';
    return name.trim().split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  }
};

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- THEME TOGGLE ---------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('al_theme');
  if(savedTheme){
    root.setAttribute('data-theme', savedTheme);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }
  const themeBtn = document.querySelector('.theme-toggle');
  if(themeBtn){
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('al_theme', next);
    });
  }

  /* ---------- MOBILE BURGER ---------- */
  const burger = document.querySelector('.nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if(burger && navLinks){
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- ACTIVE NAV LINK ---------- */
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    const page = a.dataset.page;
    if(page === current || (page === 'about' && current === 'index.html' && location.hash === '#about')){
      if(page !== 'about') a.classList.toggle('active', page === current);
    }
  });
  if(location.hash === '#about'){
    document.querySelectorAll('.nav-links a[data-page="about"]').forEach(a => a.classList.add('active'));
  }

  /* ---------- SCROLL-CUE: click to jump to next slide ---------- */
  document.querySelectorAll('.scroll-cue').forEach(btn => {
    btn.addEventListener('click', () => {
      const slide = btn.closest('.slide');
      const next = slide && slide.nextElementSibling;
      if(next) next.scrollIntoView({ behavior:'smooth' });
    });
  });

  /* ---------- NAVBAR AUTH SLOT ---------- */
  const slot = document.getElementById('nav-auth-slot');
  if(slot){
    const user = AL.getUser();
    if(user){
      slot.innerHTML = `
        <div class="profile-chip" id="profileChip">
          <button class="profile-chip-btn" id="profileChipBtn" type="button">
            <span class="chip-avatar">${AL.initials(user.name)}</span>
            <span class="chip-name">${user.name}</span>
            <span class="chip-caret"></span>
          </button>
          <div class="profile-menu" id="profileMenu">
            <a href="profile.html">My profile</a>
            <a href="profile.html#settings">Settings</a>
            <hr>
            <button type="button" class="logout-item" id="logoutBtn">Log out</button>
          </div>
        </div>`;
      const chip = document.getElementById('profileChip');
      const chipBtn = document.getElementById('profileChipBtn');
      chipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        chip.classList.toggle('open');
      });
      document.addEventListener('click', (e) => {
        if(!chip.contains(e.target)) chip.classList.remove('open');
      });
      document.getElementById('logoutBtn').addEventListener('click', () => {
        AL.logout();
        location.href = 'index.html';
      });
    } else {
      const next = encodeURIComponent(location.pathname.split('/').pop() || 'index.html');
      slot.innerHTML = `
        <div class="auth-cta">
          <a class="link-in" href="login.html"><span class="link-in-text">Log in</span></a>
          <a class="link-up" href="signup.html">Sign up</a>
        </div>`;
    }
  }
});