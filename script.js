(() => {
  const body = document.body;
  const resolutionButtons = Array.from(document.querySelectorAll('[data-resolution]'));

  const setButtonState = (low) => {
    resolutionButtons.forEach((button) => {
      const mode = button.getAttribute('data-resolution');
      const active = low ? mode === 'low' : mode === 'high';
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('is-active', active);
    });
  };

  const setResolution = (mode) => {
    const low = mode === 'low';

    body.classList.toggle('low-resolution', low);
    body.classList.toggle('high-resolution', !low);
    body.classList.toggle('low-resolution-entering', low);
    body.classList.remove('low-resolution-settled');
    setButtonState(low);

    if (!low) {
      body.classList.remove('low-resolution-entering');
    }
  };

  setButtonState(body.classList.contains('low-resolution'));

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-resolution]');
    if (!button) return;
    event.preventDefault();
    setResolution(button.getAttribute('data-resolution'));
  });

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
