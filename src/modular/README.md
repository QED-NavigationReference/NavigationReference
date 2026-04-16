# Department Header/Footer Modules

Source reviewed: `dept/Department of Education (13_04_2026 10:24:33 am).html`

## What was extracted
- Header essentials:
  - Site tools links (`QLD Education website`, `Contact us`)
  - Department branding
  - Site search area
- Footer essentials:
  - Contact block and phone link
  - Legal and utility links
  - Social links
  - Traditional Owners acknowledgement and Queensland Government link

## Files
- `header.html`: reusable header partial
- `footer.html`: reusable footer partial
- `css/dept-header-footer.css`: all styles for header/footer
- `js/dept-header-footer.js`: mobile toggle and auto-year
- `template-shell.html`: usage example for a modular page
- `reference-header-footer.html`: current best reference page
- `reference-header-footer-no-search.html`: same reference layout without search box and without JS fallback
- `reference-main-menu-components.html`: modular main-menu, hero banner and page-components reference (with JS interactions)
- `reference-main-menu-components-no-js.html`: same page with no JS dependency
- `components/main-menu-header.html`: modular header + main menu partial
- `components/hero-banner.html`: modular hero banner partial
- `components/page-components.html`: modular page-component partials (alert, cards, accordion)
- `css/dept-page-components.css`: dedicated styles for menu/banner/components
- `js/dept-page-components.js`: accessible dropdown/menu behavior

## Exact-Match Source Extraction
- `exact/header.html`: raw extracted source header markup
- `exact/footer.html`: raw extracted source footer markup
- `exact/dept-exact.css`: extracted source style blocks
- `reference-header-footer.html` now uses these exact extracted assets for closest possible visual parity.
- Search behavior is optional:
  - use `reference-header-footer.html` for search UI + optional JS fallback
  - use `reference-header-footer-no-search.html` when you want no search and no JS

## Notes
- SharePoint-specific and SingleFile-export markup was intentionally removed.
- Icons were converted to text-first controls to avoid heavy external dependencies.
- You can wire these partials into any templating system (SSI, static-site-generator, server render, or component include).
