> Historical report: later SEO and design-restoration changes supersede parts of this document. See SEO-IMPLEMENTATION.md and DESIGN-PREFERENCES.md for current status.

﻿# Implementation and release notes

Local implementation in C:\Projects\rachry-technologies. Production has not been deployed.

## Before and after

- Home: vague headline and 11.31 MB background video replaced with concise service positioning, navy/cyan layout, CSS approach visual and working contact/student CTAs.
- Header: hover-only controls and 1,600+ lines of duplicated commented code replaced with compact disclosure navigation, active links, Escape handling, focus-out closure and mobile menu.
- Contact: existing Formspree endpoint preserved; associated labels, invalid-field focus, live feedback, honeypot, Unicode-friendly names, length limits and 15-second timeout added. Removed map placeholder. Backend validation and spam/rate-limit configuration remain Formspree owner responsibilities.
- Internship: existing Google Form IDs and prices preserved. Cross-origin iframe load now shows an unverified receipt message instead of claiming confirmed acceptance. Google response delivery still needs owner verification.
- SEO: all 11 existing public routes receive unique static head metadata, canonical, sharing tags and Organization/WebSite/breadcrumb/service JSON-LD where applicable. Privacy/terms also update on client navigation. Sitemap includes all public routes. 404 view is noindex after JavaScript loads.
- Performance: route splitting reduced main bundle from approximately 434 KB / 119 KB gzip to 270 KB / 84 KB gzip. Other route chunks load on demand. Service videos retained with user controls and preload none. Existing 1.97 MB founder image still needs a suitable compressed source.
- Accessibility: skip link, visible focus, keyboard disclosure menus, stronger footer contrast and form announcements added. Existing reduced-motion CSS retained. WCAG conformance is not certified.
- Hosting: explicit per-route static-head rewrites and basic security headers added for Vercel. Verify actual hosting behavior on staging.

## Files and responsibilities

App.jsx and NotFound.jsx: lazy routes and fallback. Navbar.jsx, Hero.jsx, Layout.jsx, index.css: shared UX. Contact.jsx and Internship.jsx: form feedback. Service pages: CTA/video behavior. Legal pages and useSEO.js: metadata. scripts/generate-seo.mjs: static head/sitemap generation; scripts/verify-build.mjs: artifact validation. public/sitemap.xml, robots.txt, social-preview.png: discovery/sharing. vercel.json: rewrites/headers. src/analytics.js: opt-in conversion adapter. No new dependencies.

## Validation

- npm.cmd run build: passed, 11 static route heads generated.
- node scripts/verify-build.mjs: passed; unique titles/descriptions, canonical URLs, parsed JSON-LD, sharing metadata, sitemap and robots.
- npm.cmd run lint: run; see final execution output for result.
- npm.cmd audit --omit=dev: failed because registry advisory endpoint could not be reached; vulnerability status unknown.
- Browser tool reported no connected browsers. Desktop/mobile screenshots, interaction tests, automated accessibility scans and Lighthouse could not be completed. No scores or Core Web Vitals claims.
- No real contact or application submission sent. No analytics requests enabled.
- Body remains client rendered. Static heads improve source metadata but do not replace full prerendering; evaluate static body rendering for an SEO-focused follow-up.
- Source existing claims (location, working hours, service turnaround/revisions, internship price/certificate) require business-owner confirmation. No new testimonials, metrics or projects fabricated.

## Manual setup and staging checklist

1. Build with npm.cmd run build and serve dist on a staging deployment. Confirm every public URL serves its own head before JavaScript. Check slash variants, unknown routes, HTTPS and www redirect policy on the existing domain spelling.
2. Test all seven requested widths (320, 375, 425, 768, 1024, 1440, 1920), keyboard navigation, dropdown Escape, contact validation and reduced motion. Check video controls do not obscure hero content.
3. Owner to verify Formspree ownership, server-side field validation, anti-abuse settings and actual receipt/error behavior. Verify Google Form entry mappings and acceptance using an authorized test submission. Do not treat iframe load as delivery confirmation.
4. Replace logo-only social preview with an approved 1200×630 raster if desired. Validate social cards and schema using official sharing/structured-data tools. No external validator results claimed.
5. Run connected npm audit, Lighthouse mobile/desktop and accessibility scans. Compress founder photo; optimize other images with dimensions and responsive sources after visual verification.
6. Analytics is intentionally off. After owner supplies a real GA4 ID and a consent integration, import enableAnalytics from src/analytics.js and call it only after opt-in. contact_form_success is wired to an OK Formspree response. Link events collect category names only, not form values or destination addresses. Add consent revocation and SPA pageview lifecycle before enabling production tracking; no live tracking verification claimed.
7. Existing Google verification HTML is preserved. An authorized Search Console owner must verify access, submit /sitemap.xml and inspect representative service URLs. No account verification performed.
8. Obtain production approval only after staging checks. Publish dist through the existing hosting pipeline. Retain previous deployment for rollback; these are uncommitted local changes and original video assets are retained.

## Post-launch monitoring

Check contact delivery and route errors immediately. In the first week inspect indexing, canonical selections, sitemap discovery and 404s in Search Console; compare engagement/conversion events only after consent and tracking validation. Review Search Console Core Web Vitals and field data over the following 28 days. Targets are performance 90+, accessibility/best practices/SEO 95+ and field LCP <=2.5s, INP <=200ms, CLS <=0.1; none are guaranteed or measured here.
