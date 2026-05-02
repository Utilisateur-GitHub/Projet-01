/* ============================================================
   RésidanatPro — Shared App Layout Renderer
   ============================================================ */

const SIDEBAR_ITEMS = [
  { href: 'dashboard.html',  icon: '🏠', label: 'Tableau de bord' },
  { href: 'questions.html',  icon: '📚', label: 'Banque de questions', badge: '8.5k' },
  { href: 'exam.html',       icon: '⏱️', label: 'Examens simulés' },
  { href: 'flashcards.html', icon: '🃏', label: 'Flashcards' },
  { href: 'planner.html',    icon: '📅', label: 'Planning' },
  { href: 'analytics.html',  icon: '📊', label: 'Analytics' },
  { href: 'resources.html',  icon: '📄', label: 'Ressources' },
];

function renderLayout(opts = {}) {
  const user = Auth.getUser();
  const examDate = user?.examDate || '2026-06-15';
  const cd = getCountdown(examDate);
  const page = window.location.pathname.split('/').pop() || 'dashboard.html';
  const isAdmin = opts.admin || false;

  const sidebarHtml = SIDEBAR_ITEMS.map(item => `
    <a href="${item.href}" class="sidebar-item${page === item.href ? ' active' : ''}">
      <span class="sidebar-icon">${item.icon}</span>
      <span>${item.label}</span>
      ${item.badge ? `<span class="sidebar-badge">${item.badge}</span>` : ''}
    </a>
  `).join('');

  const navbarHtml = `
    <nav class="navbar" id="appNavbar">
      <div class="navbar-inner container-lg" style="max-width:100%;">
        <div style="display:flex;align-items:center;gap:1rem;">
          <button id="sidebarToggle" onclick="toggleSidebar()" class="btn btn-ghost btn-icon" style="display:none;">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <a href="dashboard.html" class="navbar-brand">
            <div class="logo-icon">R</div>
            <span>RésidanatPro</span>
          </a>
        </div>

        <!-- Countdown -->
        <div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;background:var(--primary-50);border-radius:var(--radius-xl);border:1px solid var(--primary-100);" id="navCountdown">
          <span style="font-size:0.875rem;">⏳</span>
          <span style="font-size:0.8125rem;font-weight:600;color:var(--primary-700);">Résidanat dans <strong id="cdDays">${cd.days}</strong>j <strong id="cdHours">${cd.hours}</strong>h <strong id="cdMins">${cd.minutes}</strong>m</span>
        </div>

        <div style="display:flex;align-items:center;gap:0.75rem;">
          <!-- Notifications -->
          <div class="dropdown" style="position:relative;">
            <button data-dropdown="notifMenu" class="btn btn-ghost btn-icon" style="position:relative;">
              🔔
              <span class="notif-dot"></span>
            </button>
            <div class="dropdown-menu" id="notifMenu" style="width:320px;">
              <div style="padding:0.75rem 1rem;font-weight:700;color:var(--gray-800);border-bottom:1px solid var(--gray-100);">Notifications</div>
              <div class="dropdown-item" style="flex-direction:column;align-items:flex-start;gap:0.125rem;">
                <span style="font-weight:600;font-size:0.875rem;">📅 Rappel de planning</span>
                <span style="font-size:0.8125rem;color:var(--gray-500);">Vous avez une session de révision aujourd'hui</span>
              </div>
              <div class="dropdown-item" style="flex-direction:column;align-items:flex-start;gap:0.125rem;">
                <span style="font-weight:600;font-size:0.875rem;">🃏 Flashcards à réviser</span>
                <span style="font-size:0.8125rem;color:var(--gray-500);">23 cartes à revoir aujourd'hui</span>
              </div>
              <div class="dropdown-item" style="flex-direction:column;align-items:flex-start;gap:0.125rem;">
                <span style="font-weight:600;font-size:0.875rem;">🎉 Nouveau badge obtenu</span>
                <span style="font-size:0.8125rem;color:var(--gray-500);">Série de 14 jours consécutifs !</span>
              </div>
            </div>
          </div>

          <!-- User menu -->
          <div class="dropdown">
            <button data-dropdown="userMenu" style="display:flex;align-items:center;gap:0.625rem;padding:0.375rem 0.75rem;border-radius:var(--radius-xl);border:1.5px solid var(--gray-200);background:var(--white);cursor:pointer;transition:var(--transition);" onmouseover="this.style.background='var(--gray-50)'" onmouseout="this.style.background='var(--white)'">
              <div class="avatar avatar-sm" style="background:linear-gradient(135deg,var(--primary-600),var(--cyan-500));color:white;font-weight:700;font-size:0.8125rem;" id="navAvatar">${user?.avatar || 'U'}</div>
              <span style="font-size:0.875rem;font-weight:600;color:var(--gray-700);" id="navUserName">${user ? user.firstName : 'Utilisateur'}</span>
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="dropdown-menu" id="userMenu">
              <div style="padding:0.75rem 1rem;border-bottom:1px solid var(--gray-100);">
                <div style="font-weight:700;color:var(--gray-800);">${user ? user.firstName + ' ' + user.lastName : 'Utilisateur'}</div>
                <div style="font-size:0.8125rem;color:var(--gray-500);">${user?.email || ''}</div>
                <span class="badge badge-cyan" style="margin-top:0.25rem;">${user?.plan === 'pro' ? '⭐ Pro' : 'Gratuit'}</span>
              </div>
              <a href="dashboard.html" class="dropdown-item">🏠 Tableau de bord</a>
              <a href="#" class="dropdown-item">👤 Mon profil</a>
              <a href="#" class="dropdown-item">⚙️ Paramètres</a>
              ${user?.email?.includes('admin') ? '<a href="admin.html" class="dropdown-item">🛡️ Administration</a>' : ''}
              <div class="dropdown-divider"></div>
              <div class="dropdown-item danger" onclick="Auth.logout()">🚪 Déconnexion</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;

  const sidebarMarkup = `
    <aside class="sidebar" id="appSidebar">
      <div class="sidebar-section">
        <p class="sidebar-label">Navigation</p>
        ${sidebarHtml}
      </div>
      <div class="sidebar-section">
        <p class="sidebar-label">Outils</p>
        <a href="planner.html" class="sidebar-item${page==='planner.html'?' active':''}">
          <span class="sidebar-icon">📅</span><span>Planning</span>
        </a>
        <a href="analytics.html" class="sidebar-item${page==='analytics.html'?' active':''}">
          <span class="sidebar-icon">📊</span><span>Analytics</span>
        </a>
        <a href="resources.html" class="sidebar-item${page==='resources.html'?' active':''}">
          <span class="sidebar-icon">📄</span><span>Ressources</span>
        </a>
      </div>
      <div class="sidebar-section">
        <p class="sidebar-label">Administration</p>
        <a href="admin.html" class="sidebar-item${page==='admin.html'?' active':''}">
          <span class="sidebar-icon">🛡️</span><span>Admin</span>
        </a>
      </div>
      <!-- Sidebar bottom: plan status -->
      <div style="margin:1rem;padding:1rem;background:linear-gradient(135deg,var(--primary-700),var(--cyan-600));border-radius:var(--radius-xl);">
        <p style="font-size:0.75rem;color:rgba(255,255,255,0.7);margin-bottom:0.25rem;">${user?.plan === 'pro' ? '⭐ Plan Pro' : '🆓 Plan Gratuit'}</p>
        ${user?.plan !== 'pro' ? `<p style="font-size:0.8125rem;color:white;font-weight:600;margin-bottom:0.75rem;">Passez à Pro pour accéder à tout le contenu</p><a href="index.html#pricing" class="btn btn-sm w-full" style="background:white;color:var(--primary-700);font-weight:700;">Upgrader →</a>` : `<p style="font-size:0.8125rem;color:rgba(255,255,255,0.85);">Accès illimité à tout le contenu</p>`}
      </div>
    </aside>
  `;

  // Insert navbar before body content
  document.body.insertAdjacentHTML('afterbegin', navbarHtml + sidebarMarkup);

  // Show hamburger on mobile
  function checkMobile() {
    const toggle = document.getElementById('sidebarToggle');
    const countdown = document.getElementById('navCountdown');
    if (toggle) toggle.style.display = window.innerWidth < 1024 ? 'flex' : 'none';
    if (countdown) countdown.style.display = window.innerWidth < 640 ? 'none' : 'flex';
  }
  checkMobile();
  window.addEventListener('resize', checkMobile);

  // Live countdown update
  if (user?.examDate) {
    setInterval(() => {
      const c = getCountdown(user.examDate);
      const days = document.getElementById('cdDays');
      const hours = document.getElementById('cdHours');
      const mins = document.getElementById('cdMins');
      if (days) days.textContent = c.days;
      if (hours) hours.textContent = c.hours;
      if (mins) mins.textContent = c.minutes;
    }, 60000);
  }
}
