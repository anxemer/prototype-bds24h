// BDS24H — shared UI interactions (mock, no backend)
document.addEventListener('DOMContentLoaded', () => {

  // mega menu (click to open on mobile-friendly way, hover on desktop via CSS :hover fallback)
  document.querySelectorAll('.main-nav > li').forEach(li => {
    const trigger = li.querySelector('.nav-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const wasOpen = li.classList.contains('open');
      document.querySelectorAll('.main-nav > li.open').forEach(o => o.classList.remove('open'));
      if (!wasOpen) li.classList.add('open');
    });
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav')) {
      document.querySelectorAll('.main-nav > li.open').forEach(o => o.classList.remove('open'));
    }
  });

  // mobile nav drawer
  const mobileNav = document.querySelector('.mobile-nav');
  const navOpenBtn = document.querySelector('.hamburger');
  const navOverlay = document.querySelector('.nav-overlay');
  const navCloseBtn = document.querySelector('.mn-close');
  function openNav(){ mobileNav?.classList.add('open'); navOverlay?.classList.add('open'); }
  function closeNav(){ mobileNav?.classList.remove('open'); navOverlay?.classList.remove('open'); }
  navOpenBtn?.addEventListener('click', openNav);
  navOverlay?.addEventListener('click', closeNav);
  navCloseBtn?.addEventListener('click', closeNav);
  document.querySelectorAll('.mn-links a').forEach(a => a.addEventListener('click', closeNav));

  // filterbox collapse groups
  document.querySelectorAll('.fgroup-title').forEach(t => {
    t.addEventListener('click', () => t.closest('.fgroup').classList.toggle('collapsed'));
  });

  // mobile filter drawer
  const filterbox = document.querySelector('.filterbox');
  const openBtn = document.querySelector('.mobile-filter-btn');
  const overlay = document.querySelector('.filter-overlay');
  const closeBtn = document.querySelector('.filterbox-close');
  function openFilter(){ filterbox?.classList.add('open'); overlay?.classList.add('open'); }
  function closeFilter(){ filterbox?.classList.remove('open'); overlay?.classList.remove('open'); }
  openBtn?.addEventListener('click', openFilter);
  overlay?.addEventListener('click', closeFilter);
  closeBtn?.addEventListener('click', closeFilter);

  // chip toggles (single-select rows)
  document.querySelectorAll('.chiprow').forEach(row => {
    row.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        row.querySelectorAll('.chip').forEach(c => c.classList.remove('on'));
        chip.classList.add('on');
      });
    });
  });

  // view toggle
  document.querySelectorAll('.view-toggle').forEach(vt => {
    vt.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        vt.querySelectorAll('button').forEach(x => x.classList.remove('on'));
        b.classList.add('on');
      });
    });
  });

  // remove filter chip (mock)
  document.querySelectorAll('.fchip button').forEach(b => {
    b.addEventListener('click', () => b.closest('.fchip').remove());
  });

  // favorite heart toggle
  document.querySelectorAll('.pcard-media .fav').forEach(f => {
    f.addEventListener('click', (e) => {
      e.stopPropagation();
      f.classList.toggle('active');
      const path = f.querySelector('.ic');
      if (path) path.style.fill = f.classList.contains('active') ? '#DE9A16' : 'none';
    });
  });
});
