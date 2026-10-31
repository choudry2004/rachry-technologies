# SEO implementation — 31 October 2026

This supersedes the earlier implementation report's statements about client-only body rendering and SPA 404 handling. Original design, hero video, visible copy and existing public URLs are preserved.

## Completed

- React static prerender generates the complete existing page tree for all 11 indexable URLs, including lazy-loaded routes. The client hydrates that tree; no framework migration or dependency additions.
- src/config/seo.js is the shared source for build-time and client-navigation titles/descriptions. New routes must be added there and in App.jsx; build checks prevent missing route content/links.
- Each page has a unique title, description, self canonical, robots directive, Open Graph, Twitter card, image alternative and English/India locale. Shortened overlong About and Internship descriptions without modifying visible page copy.
- Organization, WebSite, Service and BreadcrumbList JSON-LD use existing company/service information. Existing visible founder data remains on About. No invented review ratings, LocalBusiness address, FAQ eligibility or results claims.
- XML sitemap contains the 11 canonical public URLs; no fake modification dates. robots.txt allows public crawling and references the absolute sitemap URL. Existing Search Console verification file remains intact.
- Static output uses clean HTML routes; Vercel cleanUrls/trailingSlash settings handle URL variants. Host-specific permanent redirect prepares www to the existing apex domain. HTTPS/domain certificate configuration is still a hosting responsibility.
- Dedicated prerendered 404.html contains noindex. Removed the SPA catch-all rewrite so unknown paths can receive a native Vercel HTTP 404. Missing assets also stop returning homepage HTML.
- Original images get intrinsic dimensions; founder image lazy loads below the fold. The original hero video and navigation appearance are unchanged.
- Static preview mirrors clean URL and 404 behavior; npm.cmd run preview serves http://127.0.0.1:4173.

## Evidence

- npm.cmd run lint: pass, no warnings.
- npm.cmd run build: pass; static bodies for 11 public URLs plus 404 generated.
- npm.cmd run test:seo: pass. Checks unique metadata, canonical URLs, parsed JSON-LD, sitemap/robots, prerendered content, one H1 per page, unresolved loading fallbacks, internal anchors and local asset paths.
- HTTP checks: all 11 local URLs return 200 with H1 in source; unknown URL returns 404 with noindex; slash and .html variants return 308 to canonical paths.
- These local HTTP tests exercise scripts/preview.mjs; they do not certify actual Vercel runtime routing. Live browser/Lighthouse, Google Rich Results, Search Console and production redirect verification remain outstanding.

## Release and owner actions

1. Run npm.cmd run build and npm.cmd run test:seo. Deploy dist using the existing Vercel project only after production approval. Keep the previous deployment available for rollback. No production deployment performed here.
2. Verify direct requests to /, /about, /internship and a service URL show their complete content and route-specific metadata in View Source. Verify JavaScript hydrates and forms/menu still work in desktop/mobile browsers; a browser was not connected for this task.
3. On the real host inspect HTTP status and Location for www, slash variants, .html aliases and a deliberately missing URL; confirm HTTPS certificates and apex configuration. Native Vercel static 404 behavior is configured, not yet observed on production.
4. An authorized Search Console owner must confirm the preserved verification token belongs to the right property, submit https://rachrytechnolgies.in/sitemap.xml and request inspection of representative pages. No credentials, ownership verification or account changes claimed.
5. Validate production schema in Schema Markup Validator/Google Rich Results Test, check social previews and run mobile PageSpeed/Lighthouse. Standard Organization/WebSite/Service markup does not guarantee special rich results. Do not assume scores or ranking.
6. Monitor sitemap processing, indexing exclusions, canonical choices and broken URLs in week one. Review search queries/impressions/clicks and field Core Web Vitals over the next 28 days. Preserve the domain spelling; domain migration needs separate approval.
7. Owner should confirm existing location and business statements. Physical-office eligibility has not been verified, so LocalBusiness/Google Business Profile setup is intentionally not claimed complete. Existing large hero video and founder source image remain performance optimization opportunities; obtain approval before any visual changes.

References used for implementation: https://react.dev/reference/react-dom/static/prerender ; https://react.dev/reference/react-dom/client/hydrateRoot ; https://vercel.com/kb/guide/custom-404-page .


Structure/content follow-up: see [REFACTOR-AND-CONTENT.md](REFACTOR-AND-CONTENT.md). Shared JSON-LD now lives in src/lib/seo-schema.js and public route loading in src/app/routes.jsx.
