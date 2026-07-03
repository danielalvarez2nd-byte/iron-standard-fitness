const config = window.DHTAGTIME_CONFIG || {};

function resolveUrl(key) {
  if (key === 'etsy') return config.etsyUrl || '#';
  if (key === 'message') return config.messageUrl || '#';
  if (key === 'watchMessage') return config.watchMessageUrl || config.messageUrl || '#';
  return config[key] || '#';
}

function applyConfigLinks() {
  document.querySelectorAll('[data-config-link]').forEach((link) => {
    const key = link.getAttribute('data-config-link');
    const value = resolveUrl(key);
    if (value) link.setAttribute('href', value);
  });

  document.querySelectorAll('[data-config-text]').forEach((node) => {
    const key = node.getAttribute('data-config-text');
    if (config[key]) node.textContent = config[key];
  });
}

function productArtClass(title) {
  const lowered = title.toLowerCase();
  if (lowered.includes('pet')) return 'art-pet';
  if (lowered.includes('business')) return 'art-card';
  if (lowered.includes('accessor')) return 'art-accessory';
  if (lowered.includes('dial')) return 'art-dial';
  if (lowered.includes('watch')) return 'art-watch';
  return 'art-metal';
}

function renderProducts() {
  document.querySelectorAll('[data-product-grid]').forEach((grid) => {
    const key = grid.getAttribute('data-product-grid');
    const items = Array.isArray(config[key]) ? config[key] : [];
    if (!items.length) return;

    grid.innerHTML = items.map((item) => {
      const link = resolveUrl(item.url);
      const comingSoon = String(item.label || '').toLowerCase().includes('coming soon');
      return `
        <article class='product-card reveal ${comingSoon ? 'coming-soon-card' : ''}'>
          <span class='product-label'>${item.label || 'Featured'}</span>
          <div class='product-art ${productArtClass(item.title || '')}'></div>
          <h3>${item.title || ''}</h3>
          <p>${item.description || ''}</p>
          <div class='product-meta'><span>${item.price || ''}</span></div>
          <a class='card-link' href='${link}'>${item.cta || 'Learn More'}</a>
        </article>`;
    }).join('');
  });
}

function setupMenu() {
  const button = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-site-nav]');
  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupHeader() {
  const header = document.querySelector('[data-header]');
  if (!header) return;
  const update = () => header.classList.toggle('scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function setupContactForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('D.H. Tag & Time inquiry: ' + (data.get('topic') || 'Custom order'));
    const body = encodeURIComponent([
      'Name: ' + (data.get('name') || ''),
      'Topic: ' + (data.get('topic') || ''),
      '',
      'Details:',
      data.get('details') || ''
    ].join('\n'));

    const base = (config.messageUrl || 'mailto:hello@example.com').split('?')[0];
    window.location.href = `${base}?subject=${subject}&body=${body}`;
  });
}

applyConfigLinks();
renderProducts();
setupMenu();
setupHeader();
setupReveal();
setupContactForm();