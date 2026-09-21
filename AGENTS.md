# AGENTS.md

## What this is

Static automotive brand showcase ("Motor Index"). Vanilla HTML/CSS/JS — no build tools, no package manager, no bundler. Open any `.html` file directly in a browser.

## Structure

- `index.html` — landing page, brand directory grid with filter/search/sort
- `{brand}.html` — individual brand pages (bmw, ferrari, mercedes, lamborghini, audi, tesla, toyota, mclaren, porsche)
- `brand-pages.js` — shared data (models, specs, themes) and per-brand page rendering. Reads `document.body.dataset.brand` to pick which brand config to apply. Does not contain image URLs.
- `car-hover.js` — custom cursor preview on `.car-card` hover (used on brand pages)
- `site-features.js` — favorites, comparison, mobile nav, image fallbacks. Exposes `window.MotorIndex` API. State persisted in localStorage under key `motor-index-state`
- `assets/` — currently empty; images are loaded from Unsplash URLs

## How brand pages work

All brand HTML files except `porsche.html` share one template. `brand-pages.js` reads `data-brand` from `<body>`, looks up `brandData`, `themes`, `specData`, and `featureData`, and rewrites the DOM at load time. When adding a new brand, you must update all three JS data objects plus hardcode the image URLs in the HTML template.

**Exception:** `porsche.html` is the original page — it has hardcoded Porsche content, does not carry a `data-brand` attribute, and does not load `brand-pages.js`. It loads only `car-hover.js` and `site-features.js`. All other brand pages load all three scripts.

**Images are hardcoded in the HTML.** Each brand page's `<img>` tags contain full Unsplash URLs directly. The JS only updates text content (names, prices, specs, etc.) — never image sources.

## Conventions

- No transpilation — write plain ES6+ browser JS. No modules, no imports.
- All CSS is inline in each HTML file (no external stylesheets). Each brand page duplicates the full template styles.
- Images reference Unsplash by photo ID. When changing images, keep the `?w=...&auto=format&fit=crop` query params for consistent sizing.
- Brand theme colors are defined in `brand-pages.js` under `themes` — each brand has `bg`, `panel`, `line`, `accent`, `soft`.
- Comparison table data lives in `site-features.js` `comparisonData` (3 fields per brand: known for, best starting point, energy).

## Gotchas

- `site-features.js` expects `.brand-card[data-tags]` elements with specific inner structure (`.brand-content`, `.brand-link`). Index page cards must match this.
- `car-hover.js` only activates on `.car-card` elements (brand pages). The index page has its own inline cursor logic.
- No linting, no tests, no CI. Manual browser testing only.
- State is localStorage-only — no backend, no API calls.
