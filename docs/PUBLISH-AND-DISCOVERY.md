# Publish and search-discovery action plan — 31 October 2026

## What is confirmed

The live domain is reachable over HTTPS and hosted by Vercel. Earlier sandbox/web-fetch failures were not proof of a public outage. A successful external HTTP check returned 200.

A direct live audit found the old client-only application:
- All 11 public routes lacked a prerendered H1 in their HTTP HTML. These are source-content check failures, not claims that the pages cannot render in browsers.
- /contact returned the homepage canonical and did not contain the business email in its HTML source.
- /internship returned the same 1,336-byte shell for an OAI-SearchBot user-agent request.
- Live sitemap omitted /internship, /privacy-policy and /terms-conditions.
- A deliberately nonexistent URL returned HTTP 200.

See LIVE-SEO-AUDIT.json. Current local build fixes these items. Local lint/build/SEO checks pass; production has not been changed. Checking a bot user-agent does not test access from the actual OpenAI IP ranges.

## Step 1 — Connect access

Connect Vercel and GitHub using their account connection flows in the assistant application. Use the accounts that own the existing Vercel project/domain and choudry2004/rachry-technologies repository. Tell the assistant when the connections are complete. Do not paste passwords, API keys, session cookies or recovery codes into chat.

The assistant can then inspect the project, review changes, create a preview, and proceed with the deployment you authorized. Do not create a second Vercel project or change DNS just to deploy this update. If a required capability is absent, use the existing project dashboard/CLI flow below.

## Step 2 — Deploy through the existing project

1. In Vercel, open the project already serving rachrytechnolgies.in.
2. Confirm its Git repository is choudry2004/rachry-technologies and identify its actual Production Branch before pushing. Local checkout is main, but remote hosting settings have not been inspected.
3. Confirm root directory points at this application, Build Command is npm run build, Output Directory is dist. Keep existing environment settings; no new private secrets are required for this static build. Use a Node version supported by the installed Vite release.
4. Review local changes and run npm.cmd run lint, npm.cmd test, npm.cmd run build, npm.cmd run test:seo.
5. Prefer a preview branch/deployment first. In the browser, inspect home, menu, contact and internship at desktop/mobile sizes. Original hero video and design should remain; verify hydration and form validation without sending a real enquiry.
6. Promote/merge the approved version using the existing project's production flow. A push to the configured production branch can automatically deploy. Keep the previous deployment for rollback.
7. Run npm.cmd run test:live from a network-enabled terminal. It should report zero failing route checks, visible contact email, no missing sitemap routes and HTTP 404 for the missing test URL. Review the actual report, not only build success.

## Step 3 — Google Search Console (owner login required)

1. Open https://search.google.com/search-console/ using the company's owner Google account.
2. If this website already exists as a verified property, select it; do not create unnecessary duplicates.
3. Otherwise add a URL-prefix property for exactly https://rachrytechnolgies.in/ and choose HTML file verification. A verification file already exists at public/google24646795e4451460.html, but it is valid for your account only if Google's displayed challenge matches. Do not assume ownership is verified just because a file exists.
4. If Google provides a different verification HTML file, give that file to the assistant for placement in public, then deploy it and click Verify yourself. Preserve any existing valid verification files. Alternatively use a Domain property and complete the exact DNS TXT challenge yourself; do not change unrelated DNS records.
5. After verification, open Sitemaps and submit https://rachrytechnolgies.in/sitemap.xml.
6. Inspect the homepage, /contact and /internship through URL Inspection. Use Test live URL; if the pages are accessible and indexable, request indexing. Do not repeat submissions continuously. Indexing is not guaranteed by a request.
7. Share non-sensitive status/error text with the assistant if anything fails. Do not share account credentials.

## Step 4 — Bing Webmaster Tools (owner login required)

1. Open https://www.bing.com/webmasters/ and sign in.
2. Add the existing site. If the interface offers import from your verified Search Console property, use that flow; otherwise follow Bing's exact verification challenge.
3. Submit https://rachrytechnolgies.in/sitemap.xml under Sitemaps.
4. Inspect/submit the homepage, contact and internship URLs using the available URL tools. This aids Bing discovery; it is not a ChatGPT listing guarantee.

## Step 5 — OpenAI crawler access

Local robots.txt already allows all public crawlers. Do not change it merely to add redundant rules. OAI-SearchBot controls automatic ChatGPT Search crawling; GPTBot is a separate training control. Search discovery does not require opting into training.

After deployment, check actual Vercel/CDN logs for OAI-SearchBot requests and 403/429/challenge responses. Only adjust a confirmed blocking rule for the intended verified crawler traffic; do not disable the firewall globally. Current user-agent probe returns 200, but the response body is still the old empty shell. Official crawler ranges and guidance: https://developers.openai.com/api/docs/bots .

## Step 6 — Business confirmation

Owner to confirm whether internship applications are currently open or closed. Do not infer live availability from the presence of an application form. Once confirmed, the assistant can update the existing copy with truthful availability information while preserving the design. Product names remain unfinalized and both product categories are in development.

## Work that remains dependent on the owner

Account connections/login, OTP/CAPTCHA, ownership verification, DNS changes when required, and confirmation of current internship admissions. No agent can guarantee when Google/Bing/ChatGPT will index or cite a site. Google/Bing account completion and successful live deployment must be evidenced before reporting them as complete.

Sources: https://vercel.com/docs/git ; https://support.google.com/webmasters/answer/9008080 ; https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed ; https://developers.openai.com/api/docs/bots .
