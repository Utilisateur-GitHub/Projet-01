/* ============================================================
   RésidanatPro — Shared App Utilities
   ============================================================ */

// ---- Auth Helpers ----
const Auth = {
  getUser() {
    try { return JSON.parse(localStorage.getItem('rp_user')); } catch { return null; }
  },
  isLogged() { return !!localStorage.getItem('rp_logged'); },
  logout() {
    localStorage.removeItem('rp_logged');
    window.location.href = 'auth.html';
  },
  requireAuth() {
    if (!this.isLogged()) window.location.href = 'auth.html';
  },
  getAvatar() {
    const u = this.getUser();
    return u ? (u.avatar || u.firstName[0] + u.lastName[0]) : 'U';
  },
  getFullName() {
    const u = this.getUser();
    return u ? `${u.firstName} ${u.lastName}` : 'Utilisateur';
  }
};

// ---- Toast ----
function showToast(msg, type = 'info', duration = 4000) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span style="font-size:1.125rem;">${icons[type]||'ℹ️'}</span><span style="flex:1;">${msg}</span><button onclick="this.parentElement.remove()" style="background:none;border:none;cursor:pointer;color:var(--gray-400);font-size:1rem;line-height:1;">×</button>`;
  container.appendChild(toast);
  setTimeout(() => { if (toast.parentElement) toast.remove(); }, duration);
}

// ---- Modal ----
function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.style.display = 'flex';
  requestAnimationFrame(() => overlay.classList.add('open'));
}
function closeModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove('open');
  setTimeout(() => { overlay.style.display = 'none'; }, 250);
}
// Close modal on overlay click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal(e.target.id);
});

// ---- Dropdown ----
document.addEventListener('click', e => {
  document.querySelectorAll('.dropdown.open').forEach(d => {
    if (!d.contains(e.target)) d.classList.remove('open');
  });
  const trigger = e.target.closest('[data-dropdown]');
  if (trigger) {
    const dd = document.getElementById(trigger.dataset.dropdown);
    if (dd) dd.closest('.dropdown').classList.toggle('open');
  }
});

// ---- Sidebar (mobile) ----
function toggleSidebar() {
  document.querySelector('.sidebar')?.classList.toggle('open');
}
document.addEventListener('click', e => {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.getElementById('sidebarToggle');
  if (sidebar && window.innerWidth < 1024 && !sidebar.contains(e.target) && e.target !== toggle && !toggle?.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// ---- Navbar Scroll ----
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// ---- Render Navbar User ----
function renderNavUser() {
  const user = Auth.getUser();
  if (!user) return;
  const el = document.getElementById('navUserName');
  if (el) el.textContent = Auth.getFullName();
  const av = document.getElementById('navAvatar');
  if (av) av.textContent = Auth.getAvatar();
}

// ---- Sidebar active link ----
function setActiveSidebarLink() {
  const path = window.location.pathname.split('/').pop() || 'dashboard.html';
  document.querySelectorAll('.sidebar-item').forEach(link => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('active', href.includes(path));
  });
}

// ---- Number formatting ----
function fmt(n) { return n.toLocaleString('fr-FR'); }
function pct(n) { return Math.round(n) + '%'; }

// ---- Countdown to date ----
function getCountdown(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = target - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

// ---- Animate counter ----
function animateCounter(el, target, duration = 1200) {
  const start = parseInt(el.textContent) || 0;
  const diff = target - start;
  const startTime = performance.now();
  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + diff * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ---- SVG Donut Chart ----
function createDonut(container, value, max, color, size = 160, stroke = 16) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / max) * circ;
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="transform:rotate(-90deg);">
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="var(--gray-100)" stroke-width="${stroke}"/>
      <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
        stroke-dasharray="${circ}" stroke-dashoffset="${circ}" stroke-linecap="round"
        style="transition:stroke-dashoffset 1s ease;" data-offset="${offset}"/>
    </svg>`;
}

// Animate donuts after render
function animateDonuts() {
  document.querySelectorAll('[data-offset]').forEach(c => {
    setTimeout(() => { c.style.strokeDashoffset = c.dataset.offset; }, 100);
  });
}

// ---- Bar Chart ----
function createBarChart(container, data, maxVal) {
  container.innerHTML = '';
  data.forEach(item => {
    const pct = Math.round((item.value / maxVal) * 100);
    const div = document.createElement('div');
    div.className = 'chart-bar-wrap';
    div.innerHTML = `
      <div class="chart-bar-value">${item.value}%</div>
      <div class="chart-bar ${item.color||''}" style="height:0%;transition:height 0.8s ease;" data-height="${pct}%"></div>
      <div class="chart-bar-label">${item.label}</div>`;
    container.appendChild(div);
  });
  setTimeout(() => {
    container.querySelectorAll('.chart-bar').forEach(b => {
      b.style.height = b.dataset.height;
    });
  }, 100);
}

// ---- Storage helpers ----
const Store = {
  get(key, def = null) { try { return JSON.parse(localStorage.getItem('rp_' + key)) ?? def; } catch { return def; } },
  set(key, val) { localStorage.setItem('rp_' + key, JSON.stringify(val)); },
  push(key, item) {
    const arr = this.get(key, []);
    arr.push(item);
    this.set(key, arr);
  }
};

// ---- Demo data seed ----
function seedDemoData() {
  if (Store.get('seeded')) return;

  Store.set('stats', {
    totalAnswered: 1240,
    correctAnswers: 893,
    totalExams: 8,
    avgScore: 72,
    studyMinutes: 4200,
    streak: 14,
    savedQuestions: 47,
    reviewLater: 23
  });

  Store.set('specialty_scores', [
    { name: 'Cardiologie', emoji: '❤️', score: 81, answered: 180, total: 220, color: '#dc2626' },
    { name: 'Neurologie', emoji: '🧠', score: 65, answered: 130, total: 200, color: '#7c3aed' },
    { name: 'Pédiatrie', emoji: '👶', score: 58, answered: 140, total: 240, color: '#db2777' },
    { name: 'Gynécologie', emoji: '🤰', score: 74, answered: 110, total: 150, color: '#be185d' },
    { name: 'Chirurgie', emoji: '🔬', score: 69, answered: 200, total: 290, color: '#d97706' },
    { name: 'Médecine Interne', emoji: '🩺', score: 77, answered: 160, total: 210, color: '#0891b2' },
    { name: 'Maladies Infectieuses', emoji: '🦠', score: 83, answered: 100, total: 120, color: '#059669' },
    { name: 'Pharmacologie', emoji: '💊', score: 61, answered: 90, total: 150, color: '#2563bc' },
    { name: 'Urgences', emoji: '🚑', score: 70, answered: 130, total: 185, color: '#ea580c' },
  ]);

  Store.set('recent_exams', [
    { id: 1, date: '2026-04-28', specialty: 'Cardiologie', score: 78, total: 40, duration: 52 },
    { id: 2, date: '2026-04-25', specialty: 'Neurologie', score: 62, total: 40, duration: 58 },
    { id: 3, date: '2026-04-20', specialty: 'Mixte', score: 71, total: 60, duration: 82 },
    { id: 4, date: '2026-04-15', specialty: 'Pédiatrie', score: 55, total: 40, duration: 48 },
  ]);

  Store.set('weekly_scores', [
    { label: 'Lu', value: 68 },
    { label: 'Ma', value: 74 },
    { label: 'Me', value: 71 },
    { label: 'Je', value: 79 },
    { label: 'Ve', value: 75 },
    { label: 'Sa', value: 83 },
    { label: 'Di', value: 0 },
  ]);

  Store.set('plan', [
    { date: '2026-05-01', topic: 'Cardiologie — Insuffisance cardiaque', done: false, mins: 60 },
    { date: '2026-05-02', topic: 'Neurologie — AVC', done: false, mins: 90 },
    { date: '2026-05-03', topic: 'Pédiatrie — Infections respiratoires', done: false, mins: 60 },
    { date: '2026-05-04', topic: 'Simulation d\'examen #9', done: false, mins: 120 },
    { date: '2026-05-05', topic: 'Pharmacologie — Antibiotiques', done: false, mins: 75 },
  ]);

  Store.set('seeded', true);
}

// ---- Init on DOM ready ----
document.addEventListener('DOMContentLoaded', () => {
  seedDemoData();
  initNavbarScroll();
  renderNavUser();
  setActiveSidebarLink();
});
