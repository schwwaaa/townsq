const toggle = document.querySelector('.tiny-mode');
if (toggle) {
  toggle.addEventListener('click', () => {
    const active = document.body.classList.toggle('low-bandwidth');
    toggle.setAttribute('aria-pressed', String(active));
    toggle.textContent = active ? 'full bandwidth' : 'low bandwidth';
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
