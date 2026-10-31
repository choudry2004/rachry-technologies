# Structure and content improvements — 31 October 2026

## Positioning

Rachry Technologies builds its own digital products, delivers technology/creative/marketing services and supports student learning. The owner confirmed interactive web products and an aptitude learning platform are both in development; names are not finalized. Home, About, Strategy, Contact and footer copy now reflect this identity. Product descriptions do not promise features, release dates, public access or invented brands. SEO titles/descriptions reflect the updated identity too.

The existing About section's three cards now explain own products, client services and learning. Existing service cards retain their URLs and have clearer descriptions and link labels. The hero's long abstract paragraph was replaced with a concise description; the original heading, video, colors, layout and classes were retained. No new visual sections or product pages were added. Separate product pages/navigation can be proposed after content is finalized and the owner approves the visual scope.

## Organization

- Pages moved from src/components/pages to src/pages. Public paths are unchanged.
- Shared layout, home sections and reusable components have their own folders.
- App.jsx is a small route shell. app/routes.jsx owns page loading; header/footer remain mounted while lazy pages load.
- Company facts, navigation and home copy are separate from presentation. SEO configuration moved to config/seo.js.
- The internship page is now a route entry pointing to features/internship. Pricing/Google IDs, program data, validation/submission, form UI and page presentation are separated. Existing field values and integration mappings were preserved.
- Identical service-row markup is shared across four service pages. Old commented-out component copies were removed; original assets were retained.
- Contact requests live in lib/contact.js; provider endpoint in config/integrations.js. Contacts in the footer/CTA/contact page use shared company values. Analytics remains disabled pending consent integration.
- Structured data comes from one shared helper for build and navigation. Build asserts exact route/SEO registry parity.

## Functional/content improvements

- Desktop nav disclosure triggers are semantic buttons, support click/keyboard/touch, expose expanded state and link to controlled panels. Closed desktop/mobile panels are inert. Escape restores trigger focus; focus leaving nav closes menus. Timer cleanup added. Classes/layout preserved.
- Contact success/error feedback has live announcement roles; editing clears stale success. Existing validation, timeout, provider endpoint and integration behavior retained.
- Process content is present before JavaScript; reduced-motion users see it without scroll-reveal dependence.
- Unsupported hard service promises about unlimited revisions, fixed delivery windows, free source files and no contract lock-in were replaced with scope-dependent wording. No prices, legal policy text, founder details, social accounts or service inventory invented.

## Validation and limits

Run results: lint, 5 form/provider regression tests, full production prerender build and SEO/local HTTP verification all pass. Static verification covers 11 unique route heads, JSON-LD, single H1, assets, anchors, 404, product status and original hero video. Application tests cover Unicode names, mobile normalization, invalid form rejection and contact provider/network errors. No live submission was sent.

No browser is connected, so manual keyboard/touch interactions, screenshots, visual wrapping and hydration behavior still require browser QA before release. Lint/static checks cannot prove WCAG conformance. Real email/Form receipt, Lighthouse, Search Console and actual production hosting behavior remain unverified. No deployment or Git commit was performed.
