# Hariharan Ramachandran — professional portfolio

A responsive Next.js App Router portfolio. Original CSS globe illustration, subtle pointer perspective and reduced-motion support. No third-party scripts, analytics, web fonts, WebGL or external runtime assets. Public profile content is rendered on the server.

## Local development

Use Node 22 or 24 and npm.

```sh
npm ci
npm run dev
```

## Production / Dokploy Railpack

Select **Railpack** as the build provider and the repository root as the build path. Use `npm ci`, `npm run build`, then `npm start`. Set `PORT` to the Dokploy application port (for example 3000), configure the domain and HTTPS in Dokploy, and use `/` for a health check. The start script binds `0.0.0.0` and validates `PORT`; the default is 3000. `RAILPACK_NODE_VERSION=24` can pin the Node runtime. No Dockerfile or captain-definition is needed.

No secrets or environment variables are required beyond optional `PORT`. Do not place credentials in this repository. Deployment and merge require separate authorization.

Provider references: https://railpack.com/languages/node/ and https://nextjs.org/docs/app/api-reference/cli/next

## Verification

```sh
npm run typecheck
npm run build
npx playwright install chromium
npm test
```

Browser tests run the production server on port 43127 and check desktop/mobile navigation, overflow, contact integrity, reduced motion, keyboard access and missing pages. Install Chromium OS dependencies if the host requires them. Screenshots are generated in `test-results/`.

## Content provenance

Biography and investment/advisory claims come from the supplied project brief. Email and LinkedIn were recovered from the existing Blogger archive. The archive displayed `+917358065999` but its old tel link pointed at a different US number; the new link matches the displayed number. No performance claims, dates or current employment status are inferred. The old claims of investment returns were intentionally omitted. Preserved original favicon and organization images are in `public/`; organization logos are not used to imply affiliation beyond the supplied biography.

The archive (`index.html`, `feeds`, `cdn-cgi`) and legacy deployment definition were removed after extraction. Public contact details should be reconfirmed by the owner before publication. Contact uses email, phone and LinkedIn; there is no form backend or data collection. Content is maintained in `app/page.tsx` and styling in `app/globals.css`.

## Revised design review

`docs/design-skill-evidence.md` records all 23 source skills, per-skill workflow
applications and conflict decisions. `docs/skill-read-manifest.json` records the
source revision, installed copies and reference-file hashes. Some advertised
upstream reference files are absent; the evidence report names them explicitly.
The reusable review recipe is packaged in `docs/finance-portfolio-review.zip`.

Automatic hero orbit motion ends within 4.15 seconds. Optional mouse tilt is
confined to the portrait; reduced-motion changes cancel optional effects live.
Core content, links and navigation remain usable without JavaScript.

Run browser checks against the production build with `npm test`.
To avoid another local reviewer’s server, set `PORTFOLIO_TEST_PORT=43131 npm test`.
The default test port remains 43127. Production still uses the platform `PORT`.
