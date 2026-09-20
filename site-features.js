const brandNames = {
  audi: 'Audi', bmw: 'BMW', ferrari: 'Ferrari', lamborghini: 'Lamborghini',
  mclaren: 'McLaren', mercedes: 'Mercedes-Benz', porsche: 'Porsche', tesla: 'Tesla', toyota: 'Toyota'
};
const comparisonData = {
  audi: ['Understated technology', 'A3 / Q5', 'Measured'], bmw: ['Driver involvement', '3 Series / X3', 'Precise'],
  ferrari: ['Motorsport emotion', '296 GTB / Roma', 'Dramatic'], lamborghini: ['Supercar theatre', 'Revuelto / Urus', 'Unmissable'],
  mclaren: ['Low-mass engineering', '750S / Artura', 'Fearless'], mercedes: ['Luxury breadth', 'C-Class / G-Class', 'Composed'],
  porsche: ['Sports-car balance', '911 / Macan', 'Focused'], tesla: ['Electric software', 'Model 3 / Model Y', 'Minimal'],
  toyota: ['Trust and range', 'Corolla / Land Cruiser', 'Durable']
};
const storageKey = 'motor-index-state';
const fallbackState = { version: 1, favorites: [], compare: [] };

function getState() {
  try {
    const state = JSON.parse(localStorage.getItem(storageKey));
    if (!state || !Array.isArray(state.favorites) || !Array.isArray(state.compare)) return { ...fallbackState };
    return { version: 1, favorites: [...new Set(state.favorites)], compare: [...new Set(state.compare)].slice(0, 3) };
  } catch (error) {
    return { ...fallbackState };
  }
}
function saveState(state) {
  localStorage.setItem(storageKey, JSON.stringify({ version: 1, favorites: [...new Set(state.favorites)], compare: [...new Set(state.compare)].slice(0, 3) }));
  document.dispatchEvent(new CustomEvent('motor-index-statechange'));
}
function currentBrand() { return document.body.dataset.brand || ''; }
function brandLabel(id) { return brandNames[id] || id; }
window.MotorIndex = {
  getState,
  saveState,
  isFavorite: id => getState().favorites.includes(id),
  isCompared: id => getState().compare.includes(id),
  toggleFavorite(id) {
    const state = getState();
    state.favorites = state.favorites.includes(id) ? state.favorites.filter(item => item !== id) : [...state.favorites, id];
    saveState(state);
  },
  toggleCompare(id) {
    const state = getState();
    if (state.compare.includes(id)) state.compare = state.compare.filter(item => item !== id);
    else if (state.compare.length < 3) state.compare.push(id);
    else return false;
    saveState(state);
    return true;
  }
};

const featureStyle = document.createElement('style');
featureStyle.textContent = `
  .menu-toggle { display:none; border:1px solid currentColor; background:transparent; color:inherit; padding:9px 12px; cursor:pointer; font:inherit; font-size:12px; text-transform:uppercase; letter-spacing:.08em; }
  .menu-toggle:focus-visible, .brand-action:focus-visible, .brand-favorite-button:focus-visible, .favorites-filter:focus-visible, .compare-open:focus-visible, .compare-remove:focus-visible { outline:2px solid #e6bd54; outline-offset:3px; }
  .brand-actions { display:flex; flex-wrap:wrap; gap:8px; margin:0 0 12px; }
  .brand-action, .brand-favorite-button, .favorites-filter, .compare-open { border:1px solid currentColor; background:transparent; color:inherit; padding:8px 11px; cursor:pointer; font:inherit; font-size:11px; }
  .brand-action[aria-pressed="true"], .brand-favorite-button[aria-pressed="true"], .favorites-filter[aria-pressed="true"] { background:var(--brand-accent, #d5001c); border-color:var(--brand-accent, #d5001c); color:#080909; }
  .compare-tools { display:flex; align-items:center; flex-wrap:wrap; gap:10px; margin-top:12px; color:var(--muted, #96a39d); font-size:12px; }
  .compare-open[hidden] { display:none; }
  .compare-remove { border:1px solid currentColor; background:transparent; color:inherit; padding:5px 8px; cursor:pointer; font:inherit; font-size:11px; }
  .compare-empty { color:var(--muted, #96a39d); text-align:center; }
  .no-results { display:none; margin:16px 0 0; padding:18px; border:1px dashed var(--line, #293535); color:var(--muted, #96a39d); text-align:center; }
  .no-results.visible { display:block; }
  @media (max-width:768px) {
    .menu-toggle { display:block; }
    .topnav, .nav-links { display:none !important; position:absolute; top:100%; right:0; left:0; flex-direction:column; gap:0; padding:10px 20px; background:rgba(9,13,14,.98); border-bottom:1px solid currentColor; }
    .topnav.is-open, .nav-links.is-open { display:flex !important; }
    .topnav a, .nav-links a { padding:12px 0; }
  }
  @media (prefers-reduced-motion: reduce) { .menu-toggle, .brand-action, .brand-favorite-button { transition:none !important; } }
`;
document.head.appendChild(featureStyle);

function initNavigation() {
  document.querySelectorAll('nav').forEach(nav => {
    const links = nav.matches('.topnav, .nav-links') ? nav : nav.querySelector('.topnav, .nav-links');
    if (!links || nav.querySelector('.menu-toggle')) return;
    const id = links.id || `${links.classList.contains('topnav') ? 'index' : 'brand'}-navigation`;
    links.id = id;
    const toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-controls', id);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
    const toggleHost = nav.matches('.topnav, .nav-links') ? nav.parentElement : nav;
    toggleHost.appendChild(toggle);
    const close = () => { links.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu'; };
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
  });
}

function updateFavoriteButtons() {
  const state = getState();
  document.querySelectorAll('[data-brand-action="favorite"]').forEach(button => {
    const id = button.dataset.brand;
    const active = state.favorites.includes(id);
    button.setAttribute('aria-pressed', String(active));
    button.textContent = active ? `Saved ${brandLabel(id)}` : `Save ${brandLabel(id)}`;
    button.setAttribute('aria-label', active ? `Remove ${brandLabel(id)} from favorites` : `Add ${brandLabel(id)} to favorites`);
  });
  document.querySelectorAll('[data-brand-action="compare"]').forEach(button => {
    const active = state.compare.includes(button.dataset.brand);
    button.setAttribute('aria-pressed', String(active));
    button.textContent = active ? 'Compared' : 'Compare';
  });
  const count = document.querySelector('.favorites-count');
  if (count) count.textContent = String(state.favorites.length);
  const compareCount = document.querySelector('.compare-count');
  if (compareCount) compareCount.textContent = `${state.compare.length} of 3 selected`;
  const compareOpen = document.querySelector('.compare-open');
  if (compareOpen) compareOpen.hidden = state.compare.length === 0;
}

function renderComparison() {
  const table = document.querySelector('.compare table');
  if (!table) return;
  const state = getState();
  const head = table.querySelector('thead tr');
  if (!head.querySelector('.compare-action-heading')) {
    const heading = document.createElement('th');
    heading.className = 'compare-action-heading';
    heading.textContent = 'Manage';
    head.appendChild(heading);
  }
  const body = table.querySelector('tbody');
  body.replaceChildren();
  if (!state.compare.length) {
    const row = document.createElement('tr');
    row.innerHTML = '<td class="compare-empty" colspan="5">Select up to three brands above to build your comparison.</td>';
    body.appendChild(row);
    return;
  }
  state.compare.forEach(id => {
    const data = comparisonData[id] || ['Not available', 'Not available', 'Not available'];
    const row = document.createElement('tr');
    row.innerHTML = `<td>${brandLabel(id)}</td><td>${data[0]}</td><td>${data[1]}</td><td>${data[2]}</td><td><button class="compare-remove" type="button" data-remove-compare="${id}">Remove</button></td>`;
    body.appendChild(row);
  });
}

function initIndexFeatures() {
  const cards = [...document.querySelectorAll('.brand-card[data-tags]')];
  if (!cards.length) return;
  cards.forEach(card => {
    const id = card.dataset.brand || card.querySelector('h3')?.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    card.dataset.brand = id;
    const content = card.querySelector('.brand-content');
    const link = card.querySelector('.brand-link');
    if (!content || !link || content.querySelector('.brand-actions')) return;
    const actions = document.createElement('div');
    actions.className = 'brand-actions';
    actions.innerHTML = `<button class="brand-action" type="button" data-brand-action="favorite" data-brand="${id}" aria-pressed="false">Save ${brandLabel(id)}</button><button class="brand-action" type="button" data-brand-action="compare" data-brand="${id}" aria-pressed="false">Compare</button>`;
    content.insertBefore(actions, link);
  });
  const tools = document.querySelector('.directory-tools');
  if (tools && !tools.querySelector('.favorites-filter')) {
    const compareTools = document.createElement('div');
    compareTools.className = 'compare-tools';
    compareTools.innerHTML = '<button class="favorites-filter" type="button" aria-pressed="false">Favorites <span class="favorites-count">0</span></button><span class="compare-count" aria-live="polite">0 of 3 selected</span><button class="compare-open" type="button" hidden>Compare selected</button>';
    tools.insertAdjacentElement('afterend', compareTools);
  }
  if (!document.querySelector('.no-results')) {
    const message = document.createElement('p');
    message.className = 'no-results';
    message.textContent = 'No brands match that search. Clear the search or choose All brands.';
    document.querySelector('.brand-grid').insertAdjacentElement('afterend', message);
  }
  document.addEventListener('click', event => {
    const action = event.target.closest('[data-brand-action]');
    if (action) {
      event.preventDefault();
      event.stopPropagation();
      const id = action.dataset.brand;
      if (action.dataset.brandAction === 'favorite') MotorIndex.toggleFavorite(id);
      if (action.dataset.brandAction === 'compare') MotorIndex.toggleCompare(id);
      updateFavoriteButtons();
      renderComparison();
    }
    const remove = event.target.closest('[data-remove-compare]');
    if (remove) { MotorIndex.toggleCompare(remove.dataset.removeCompare); updateFavoriteButtons(); renderComparison(); }
  });
  const favoriteFilter = document.querySelector('.favorites-filter');
  if (favoriteFilter) favoriteFilter.addEventListener('click', () => {
    window.motorFavoritesOnly = !window.motorFavoritesOnly;
    favoriteFilter.setAttribute('aria-pressed', String(window.motorFavoritesOnly));
    if (typeof window.applyDirectoryState === 'function') window.applyDirectoryState();
    updateFavoriteButtons();
  });
  document.querySelector('.compare-open')?.addEventListener('click', () => document.querySelector('.compare')?.scrollIntoView({ behavior: 'smooth' }));
  updateFavoriteButtons();
  renderComparison();
}

function initDetailFeatures() {
  const id = currentBrand();
  if (!id || !brandNames[id] || document.querySelector('.brand-favorite-button')) return;
  const actions = document.querySelector('.hero-actions') || document.querySelector('.hero-content');
  if (!actions) return;
  const button = document.createElement('button');
  button.className = 'brand-favorite-button';
  button.type = 'button';
  button.dataset.brandAction = 'favorite';
  button.dataset.brand = id;
  actions.appendChild(button);
  button.addEventListener('click', () => { MotorIndex.toggleFavorite(id); updateFavoriteButtons(); });
  updateFavoriteButtons();
}

initNavigation();
initIndexFeatures();
initDetailFeatures();
document.querySelectorAll('img').forEach(image => {
  image.addEventListener('error', () => {
    if (image.dataset.fallbackApplied) return;
    image.dataset.fallbackApplied = 'true';
    const fallback = [...document.querySelectorAll('img')].find(candidate => candidate !== image && candidate.complete && candidate.naturalWidth > 0);
    if (fallback) image.src = fallback.currentSrc || fallback.src;
  });
});
document.querySelectorAll('a[href="#"]').forEach(link => { link.href = link.classList.contains('view-details') ? '#models' : '#contact'; });
document.querySelectorAll('.nav-links a').forEach(link => { if (link.getAttribute('href') === '#electric' || link.getAttribute('href') === '#configure') link.href = '#models'; });
document.addEventListener('motor-index-statechange', () => { updateFavoriteButtons(); renderComparison(); if (typeof window.applyDirectoryState === 'function') window.applyDirectoryState(); });
window.addEventListener('storage', event => { if (event.key === storageKey) { updateFavoriteButtons(); renderComparison(); } });
