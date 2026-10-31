# Rachry Technologies website

React 19, React Router 7, Vite 8 and Tailwind 4. The production build prerenders all public routes, then hydrates the same components in the browser. The existing production domain is `rachrytechnolgies.in`.

## Local commands

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run lint
npm.cmd test
npm.cmd run build
npm.cmd run test:seo
npm.cmd run preview
```

Use `npm` instead of `npm.cmd` on other platforms. Production preview serves `dist` at http://127.0.0.1:4173 and returns real 404 responses. `test:seo` requires a current build. Unit tests use Node's built-in test runner and mocked delivery requests; no customer data is submitted.

## Source structure

```text
src/
  app/routes.jsx                 Public route components; existing paths retained
  components/
    layout/                      Header, footer, layout, scroll behavior
    home/                        Homepage presentation sections
    shared/                      Reusable CTA, process and service-row components
    seo/                         Compatibility metadata wrapper
  content/
    company.js                   Business facts, product status and navigation
    home.js                      Homepage copy
  config/
    seo.js                       Canonical page titles/descriptions and domain
    integrations.js              Public contact endpoint
  features/internship/
    InternshipPage.jsx           Program presentation
    ApplicationForm.jsx          Form state and fields
    PrimaryButton.jsx            Existing shared program button
    application.js               Validation, payload construction, submission
    config.js                    Existing price, Google Form IDs and options
    content.js                   Existing program content and domain data
  hooks/useSEO.js                 Metadata updates on client navigation
  lib/                           Contact, analytics and structured-data helpers
  pages/                         Route components; service pages under services/
  assets/                        Existing images and videos
  App.jsx                        Route shell
  main.jsx                       Browser hydration entry
  entry-server.jsx               Build-time prerender entry
scripts/                         Build, SEO verification and local HTTP preview
tests/                          Form and provider error regression tests
 docs/                           Audit, SEO, preferences and implementation notes
```

## Editing content safely

- Edit company identity and contact details in `src/content/company.js`; homepage messaging in `src/content/home.js`.
- Both interactive web products and the aptitude platform are in development, with names not finalized. Do not invent product names, launch dates, features, live links or reviews. Owner confirmation is required before updating these facts.
- Route components call `useSEO('/existing-path')`. Edit their metadata in `src/config/seo.js`. Structured data is shared between static generation and client navigation through `src/lib/seo-schema.js`.
- New public routes need entries in `src/app/routes.jsx` and `src/config/seo.js`; the build verifies they match. Sitemap and 404 output are generated into `dist`. Never edit generated HTML directly.
- Existing internship pricing, form entry IDs and dropdown values are isolated in the feature's config. Do not change them without owner confirmation. An iframe load does not verify Google Form acceptance; test receipt through the owner's account.
- Keep the current design and hero video. Propose visual/layout changes and obtain approval before implementing them. Copy can evolve within the existing presentation.

## Deployment and verification

Build and publish only `dist` through the existing Vercel project after production approval. `dist-ssr` is a build-time artifact, not a public server deployment. No new dependencies were added for this refactor.

See [SEO implementation](docs/SEO-IMPLEMENTATION.md), [refactor and content notes](docs/REFACTOR-AND-CONTENT.md) and [design preference](docs/DESIGN-PREFERENCES.md). Live form receipt, Google account ownership/indexing, staging browser interactions and Vercel redirect behavior require separate verification. Analytics remains opt-in and disabled by default.
