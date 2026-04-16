# QED Navigation Reference

This repository contains reference HTML templates and assets for the Queensland Department of Education navigation/header/footer patterns.

## Structure

- `src/`
  - Development source files and modular template fragments.
  - `src/modular/` contains the main reference pages and supporting component partials.
  - `src/modular/exact/` holds exact extracted assets for the header/footer reference pages.

- `dist/`
  - Clean distribution-ready HTML pages and assets.
  - Uses simplified asset references under `dist/assets/` for direct consumption.

## Purpose

The repository is intended to provide:

- a clean baseline reference implementation of the department header/footer layout
- a no-search version of the same page for static distribution
- a modular main-menu and component reference page with reusable styling and behavior

## Notes

- `dist/reference-header-footer.html` and `dist/reference-header-footer-no-search.html` are the final exported header/footer reference pages.
- `dist/reference-main-menu-components.html` is the clean main menu/components reference page.
- `dist/assets/` contains the shared CSS/JS assets referenced by the dist pages.

## Usage

Open the desired HTML file in `dist/` in a browser to preview the reference pages.

For development, edit the source files under `src/modular/` and then replicate clean copies into `dist/` as needed.
