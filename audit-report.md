# Fast Lane Detailing — SEO Audit Report

**Site**: https://www.fastlanedetailing.net
**Branch**: `claude/fast-lane-detailing-site-Lfv2Y` @ `5e80554`
**Audit date**: 2026-05-14
**Audited by**: Claude (read-only Phase 1 pass per ranking-improvement prompt)

---

## Pre-flight confirmation

| Field | Confirmed |
|---|---|
| Business / Domain / NAP | ✓ Fast Lane Detailing · www.fastlanedetailing.net · (541) 640-0612 |
| Stack | ✓ Next.js 15 App Router · TypeScript · Tailwind v4 · Motion v12 |
| Deploy target | ✓ Vercel |
| Analytics | ⚠ GTM container `GTM-PLLD4KQD` is loaded; GA4 is **not** wired through it yet (no `G-*` measurement ID in code or env). Owner action: add GA4 tag inside GTM and confirm pageview firing. |
| Service area | ✓ Bend, Redmond, Sisters, Sunriver, Tumalo, La Pine (30-mile radius) |
| Hours | ✓ Mon–Fri 8am–5pm |

---

## 1. Stack and deployment

- **Framework**: Next.js 15.5.18 App Router, all routes server-rendered or statically generated
- **Package manager**: npm
- **TypeScript**: strict
- **Styling**: Tailwind v4 (`@import "tailwindcss"`, CSS-first config)
- **Animation**: motion 12.38 (used surgically on hero, ServiceCard, Reveal, Stagger)
- **Fonts**: `next/font/google` — Inter (subset latin), JetBrains Mono, Bebas Neue. `display: swap`, self-hosted at build time. ✓ Phase 2.6 compliant.
- **Hosting**: Vercel edge + Image Optimization CDN
- **Security headers**: HSTS preload, X-Frame-Options DENY, COOP same-origin, full CSP including all Google ad-tech wildcards per Google's tag-platform guidance, Permissions-Policy locked down

---

## 2. Route inventory (15 unique routable URLs)

| Path | Type | H1 | Title (chars) | Meta desc (chars) | Word count est. |
|---|---|---|---|---|---|
| `/` | static | "Bend Oregon / Top-Rated Auto Detailer" | "Mobile Auto Detailing Bend, OR \| Ceramic Coating & Paint Correction" (64) | 156 | ~600 visible + sections |
| `/services` | static | "Auto detailing services in Bend, Oregon." | "Auto Detailing Services Bend, OR \| Mobile & In-Shop" (51) | 159 | ~250 |
| `/services/mobile-detailing` | SSG | "Mobile Detailing in Bend, OR." | "Mobile Auto Detailing Bend, OR \| At Your Driveway" (49) | 150 | ~700 |
| `/services/ceramic-coating` | SSG | "Ceramic Coating in Bend, OR." | "Ceramic Coating Bend, OR \| 2-5 Year Paint Protection" (52) | 158 | ~750 |
| `/services/paint-correction` | SSG | "Paint Correction in Bend, OR." | "Paint Correction Bend, OR \| Remove Swirls & Scratches" (53) | 149 | ~700 |
| `/services/interior-detailing` | SSG | "Interior Detailing in Bend, OR." | "Interior Car Detailing Bend, OR \| Deep Clean Mobile Service" (59) | 142 | ~600 |
| `/services/engine-bay` | SSG | "Engine Bay in Bend, OR." | "Engine Bay Cleaning Bend, OR \| Safe Degrease & Dress" (52) | 155 | ~450 |
| `/services/odor-removal` | SSG | "Odor Removal in Bend, OR." | "Car Odor Removal Bend, OR \| Smoke, Pet & Food Smell" (51) | 150 | ~500 |
| `/pricing` | static | "Mobile detailing prices in Bend, Oregon." | "Auto Detailing Prices Bend, OR \| Free Quotes" (44) | 153 | ~500 |
| `/about` | static | "About Fast Lane Detailing, Bend, OR." | "About Fast Lane Detailing \| Bend, OR Mobile Auto Detailers" (58) | 145 | ~400 |
| `/reviews` | static | "5.0 ★ across 95+ Google reviews." | "5-Star Reviews \| Fast Lane Detailing Bend, OR \| 95+ Google Reviews" (66 ⚠) | 159 | ~350 |
| `/service-area` | static | "Mobile auto detailing across Central Oregon." | "Mobile Detailing Service Area \| Bend, Redmond, Sisters, Sunriver" (63 ⚠) | 158 | ~400 |
| `/contact` | static | "Contact Fast Lane Detailing in Bend, OR." | "Contact Fast Lane Detailing Bend, OR \| (541) 640-0612" (52) | 147 | ~250 |
| `/faq` | static | "Mobile auto detailing FAQ, Bend, OR." | "Mobile Auto Detailing FAQ Bend, OR \| Real Answers" (50) | 152 | ~700 |
| `/blog` | static | "Detailing tips and guides from Bend, Oregon." | "Detailing Tips & Guides \| Bend, OR Mobile Auto Detailing Blog" (60) | 159 | ~250 |
| `/blog/[slug]` × 5 articles | SSG | per article | per article (40–60) | per article (140–160) | 600–1100 each |
| `/privacy` | static | "Privacy policy." | unique | unique | ~1500 |
| `/terms` | static | "Terms of service." | unique | unique | ~600 |
| `/accessibility` | static | "Accessibility statement." | unique | unique | ~250 |

**Title duplicates**: none found. ✓
**Description duplicates**: none found. ✓
**Title length warnings**: two titles run 63–66 chars (truncate in mobile SERP) — `/reviews` and `/service-area`.
**Body word counts**: most service pages near or above the 800-word target via `includes`, `goodFor`, FAQs, and related sections. **Engine bay and odor removal pages are short** (~450–500 words excluding FAQ schema) and should be expanded.

---

## 3. Structured data (JSON-LD)

**30 distinct `@type` values rendered across the site** — comprehensive:

`AggregateRating`, `Answer`, `Audience`, `BlogPosting`, `BreadcrumbList`, `City`, `CollectionPage`, `ContactPoint`, `FAQPage`, `GeoCircle`, `GeoCoordinates`, `HowTo`, `HowToStep`, `ItemList`, `ListItem`, `Offer`, `OfferCatalog`, `OpeningHoursSpecification`, `Organization`, `Person`, `PostalAddress`, `PriceSpecification`, `Question`, `Rating`, `Review`, `Service`, `SpeakableSpecification`, `State`, `WebPage`, `WebSite`. Also `LocalBusiness ["LocalBusiness", "AutomotiveBusiness"]` multi-type.

**By page** (from `lib/schema.ts` + per-page `JsonLd` calls):

| Page | Schemas |
|---|---|
| All (via `layout.tsx`) | Organization, LocalBusiness, WebSite |
| `/` | WebPage(speakable), HowTo, FAQPage |
| `/services/[slug]` | WebPage(speakable), Service+Offer+OfferCatalog, BreadcrumbList, FAQPage |
| `/blog/[slug]` | BlogPosting(speakable), BreadcrumbList, FAQPage |
| `/blog` | BreadcrumbList, CollectionPage(ItemList), Blog |
| `/about` | BreadcrumbList, Person×2 |
| `/contact` | BreadcrumbList, ContactPoint |
| `/reviews` | BreadcrumbList, Review×7 (real-looking customer reviews) |
| `/service-area` | BreadcrumbList, Place×6 |
| `/pricing` `/faq` legal | BreadcrumbList |

**Gap**: `sameAs` on the root LocalBusiness only includes Facebook, Instagram, and Google (`g.page`). The prompt's Phase 6 requires sameAs to **also include Yelp and BBB** for entity-consistency. Owner needs to provide Yelp and BBB URLs if claimed; otherwise create the listings.

---

## 4. Sitemap, robots, canonicals, OG

| Item | Status |
|---|---|
| `/sitemap.xml` | ✓ Generated from `app/sitemap.ts`. 23 URLs (home + 11 static + 6 services + 5 articles). Hardcoded canonical origin `https://www.fastlanedetailing.net`. Home includes trailing slash. |
| `/robots.txt` | ✓ Generated from `app/robots.ts`. 21 user-agent rules: `*`, GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, GoogleOther, Applebot-Extended, Bingbot, Amazonbot, Meta-ExternalAgent, FacebookBot, DuckDuckBot, YandexBot, Bytespider, Diffbot, CCBot. Sitemap line present. |
| Canonical | ✓ Every page sets `alternates.canonical` via `buildMetadata()` → absolute URL |
| hreflang | ✓ `alternates.languages: { "en-US": url }` |
| OG sitewide | ✓ Set in `metadata` per-page via `buildMetadata`. Dynamic OG image at `/opengraph-image` (Satori). |
| OG article tags | ✓ `/blog/[slug]` emits `og:type=article`, `article:published_time`, `article:modified_time`, `article:author`, `article:section`, `article:tag` |
| Twitter card | ✓ `summary_large_image` |
| `/llms.txt` | ✓ Present, well-formed, 60-line summary + Q&A |
| `/llms-full.txt` | ✓ Present, comprehensive — entity facts, full service + pricing tables, 13 Q&A pairs, voice query map, citation policy |
| `/googlebbc9e3e5440a7be4.html` | ✓ Google Search Console verification file present |
| Bing Webmaster verification | ✗ **Missing**. Add `BingSiteAuth.xml` once verified in Bing. |

---

## 5. Image and performance audit

- **Logo**: served via `next/image` with explicit `width=1024 height=1024`, `priority` on header, `sizes` set, AVIF/WebP via Vercel CDN. ✓
- **OG image**: dynamic Satori at `/opengraph-image`, 1200×630. ✓
- **Favicon**: `/icon.png` 256×256, `/apple-icon.png` 180×180, generated via `sharp` from logo. ✓
- **Hero imagery**: ✗ **No real photography anywhere**. Hero uses CSS gradients + faint car silhouette SVG + faded logo watermark. Service pages have **zero** photos. About page has **zero** photos. The prompt's Phase 4 explicitly requires "Hero image of actual work (no stock)" on every service page. **Owner action: upload photos of trailer, before/after work, team headshots.**
- **Third-party scripts**: GTM (afterInteractive), gtag.js with AW base + phone-replacement target (afterInteractive), Plausible (defer). Consent default script runs `beforeInteractive` to gate ad/analytics storage until user accepts. Cookie banner is a small client island.
- **Fonts**: 3 families, all `next/font` self-hosted, `display: swap`, Inter+Bebas preloaded, Mono on-demand. ✓
- **Motion**: ~25KB gzipped, used surgically (Reveal, Counter, MagneticButton, Stagger, ServiceCard). Respects `prefers-reduced-motion`.

---

## 6. Page architecture vs. Phase 4 requirements

| Phase 4 requirement | Status |
|---|---|
| One page per top-5 service | ✓ Plus engine-bay (6th). |
| 800–1200 words / service | ⚠ Mobile detailing, ceramic coating, paint correction, interior detailing all near 700–800 (close to target with FAQ). Engine bay and odor removal are short (~450–500). |
| Hero image of real work | ✗ None |
| 2–4 internal links per service | ✓ Related services (3) + related articles + breadcrumbs |
| FAQs (3–5) per service | ✓ 2–3 each, could expand to 5 |
| Service JSON-LD | ✓ |
| FAQPage JSON-LD | ✓ |
| **Location pages per city** | ✗ **Missing**. Only a single `/service-area` index exists. No per-city pages for Bend, Redmond, Sisters, Sunriver, Tumalo, La Pine. |
| Consolidated `/faq` page | ✓ ~10 questions, voice-friendly phrasing ("Where can I get my car detailed in Bend, Oregon?", "When is Fast Lane Detailing open?") |
| `/about` with Person JSON-LD | ✓ Luka and Ian both have Person schema with `jobTitle`, `worksFor: { @id: LocalBusiness }` |
| `/about` photos | ✗ Missing |
| `/about` LinkedIn `sameAs` on Person | ✗ Missing — Person nodes have no `sameAs` |
| `/contact` with GBP map iframe | ✗ Missing — has NAP, hours, click-to-call/text, three-channel grid, but no embedded map |
| `/contact` NAP as text | ✓ |
| Click-to-call | ✓ Multiple |

---

## 7. AI search + GEO/AEO/LLMO (Phase 6)

| Item | Status |
|---|---|
| `llms.txt` | ✓ Per Answer.AI spec |
| `llms-full.txt` | ✓ Full concatenated reference |
| Citable claim structure (one claim per sentence, no hedging) | ✓ Service intros, blog intros, llms.txt all use definition-first patterns |
| Conversational H2s | ⚠ Mostly statements. Could rewrite a few section heads as questions ("How does ceramic coating last that long?" vs "How long it actually lasts, by tier"). Currently strong on `/faq` but weaker on service pages. |
| SpeakableSpecification | ✓ Home, services, blog all have Speakable JSON-LD with CSS selectors |
| Explicit AI crawler allow in robots | ✓ All major LLM crawlers named individually |

---

## 8. Internal linking pass (Phase 5)

| Required | Status |
|---|---|
| Every service → 2–4 related services | ✓ `related` array per service |
| Every service → relevant blog articles | ✓ via `articlesByService` helper |
| Blog articles → 2–3 services | ✓ via `ctaService` field |
| Home links to top services + locations | ✓ Services grid, footer service column |
| Footer has all services + locations | ✓ Six services in footer; no per-city links because per-city pages do not exist |
| Anchor text descriptive | ✓ Replaced generic "Learn more" / "Read more" with `[Service name] in Bend, OR` |

---

## 9. Tracking + conversions (Phase 7)

| Item | Status |
|---|---|
| GTM container loaded sitewide | ✓ `GTM-PLLD4KQD` |
| GA4 wired through GTM | ⚠ Owner action: verify GA4 tag exists inside GTM and is firing on All Pages |
| Google Ads base tag (AW-18075280930) | ✓ Direct gtag |
| Phone-call conversion tracking | ✓ `CallConversion` fires `gtag('event','conversion', send_to:'AW-…/AC_aCP6xz5gcEKLM-6pD')` on every `tel:` click via delegated listener |
| Phone number replacement | ✓ `gtag('config','AW-…/bD4QCL6hu68cEKLM-6pD', { phone_conversion_number })` injected after AW base config |
| Form submission tracking | ⚠ Form submits POST to `/api/quote` and Zapier webhook; no GA4/GTM event fired on submit success. Should add `gtag('event','generate_lead',...)` or `dataLayer.push({event:'quote_submit'})`. |
| Direction request tracking | ✗ No GBP map link in code yet |
| Email click tracking | ✗ No `mailto:` links anywhere visible; site uses phone + form |
| Cookie consent (Consent Mode v2) | ✓ Default denied → updated on accept; banner persists choice in localStorage |
| `Last updated` timestamp on content | ⚠ Articles show "Updated [date]". Service pages do **not**. Add. |
| Google Search Console verified | ✓ File method confirmed via `/googlebbc9e3e5440a7be4.html` |
| Bing Webmaster verified | ✗ Not yet |
| `seo-maintenance.md` runbook | ✗ Does not exist |

---

## 10. Search Console CSV analysis

**Not provided.** If you have a "Performance → Search results" export from Google Search Console (last 90 days, queries + pages + clicks + impressions + CTR + position), drop it at `/tmp/gsc-export.csv` and I'll run the quick-win / phantom / underserved analysis as part of Phase 2.

---

## 11. NAP and entity consistency

| Source | Name | Phone | Hours |
|---|---|---|---|
| Site footer + schema | Fast Lane Detailing | (541) 640-0612 | Mon–Fri 8am–5pm |
| llms.txt + llms-full.txt | Fast Lane Detailing | (541) 640-0612 | Mon–Fri 8am–5pm |
| GBP `g.page/fastlanedetailingbend` | Owner-controlled | Owner-controlled | Owner-controlled |
| Yelp | ✗ Unknown (link missing from `sameAs`) | — | — |
| BBB | ✗ Unknown (link missing from `sameAs`) | — | — |
| Facebook `/fastlanedetailingbend` | Owner-controlled | Owner-controlled | Owner-controlled |
| Instagram `@fastlanedetailingbend` | Owner-controlled | Owner-controlled | Owner-controlled |

Site-side NAP is internally consistent (single source of truth in `src/lib/site.ts`). External NAP verification cannot be done from the sandbox — the allowlist blocks google.com, yelp.com, bbb.org. Owner action: spot-check each external profile and confirm phone format `(541) 640-0612` is byte-identical.

---

## Prioritized fix list

### Critical (do in Phase 2)

1. **Add real photography** — hero, each service page, About page team. Without photos the site is text-only and Phase 4's "no stock" requirement is fully unmet. (Owner-supplied content)
2. **Expand engine-bay and odor-removal service pages to 800+ words** with process detail, materials, FAQ section
3. **Build location pages**: at minimum `/service-area/bend-or`, `/service-area/redmond-or`, `/service-area/sisters-or` with unique opening paragraphs (neighborhoods, landmarks, travel notes). Build only as many as can have genuinely unique content.
4. **Add `Last updated: YYYY-MM-DD` to every service page** (article pages already have it)
5. **Embed GBP iframe map on `/contact`** below the channel grid
6. **Fire `quote_submit` dataLayer event** from `QuoteForm` success handler so GA4/Ads can track form conversions
7. **Add `seo-maintenance.md` runbook** with the 30/60/90 monthly checklist
8. **Tighten `/reviews` and `/service-area` title tags to ≤60 chars**

### High value (after Critical)

9. **Add Yelp and BBB URLs to `site.social` and `sameAs`** for entity consistency
10. **Add `sameAs` array to each Person in About** (LinkedIn or Instagram if applicable)
11. **Bing Webmaster Tools verification** + submit sitemap to Bing
12. **Verify GA4 is firing through GTM** — add the GA4 configuration tag in GTM with `G-XXXXXXXXXX` measurement ID
13. **Expand the FAQ page to 15–20 questions** (currently ~10)
14. **Conversational H2 rewrites** on service pages (e.g., "How does paint correction work?" instead of "What is included")
15. **Add 3–5 FAQ items per service page** (currently 2–3)

### Nice to have

16. **Add a "Last updated" line on the home page**
17. **Add a "trust strip" of certifications/badges** if Fast Lane has any (Gtechniq, IGL, CQuartz partner network, etc.) — strong E-E-A-T signal
18. **Add a `/case-studies` or `/work` page** with before/after pairs once photos are available
19. **Add `breadcrumb` schema on the homepage** with just one ListItem to anchor the entity

---

## Verification checklist (the prompt's "Verify" section)

| Check | Result |
|---|---|
| Lighthouse Mobile ≥ 90 / SEO 100 | Not measured from sandbox — Vercel CDN + image opt + RSC suggest pass. **Owner to run on deployed URL.** |
| Rich Results Test on home, service, location, FAQ | Not measured — owner action after Phase 2 deploys |
| `/sitemap.xml` 200 | ✓ verified locally |
| `/robots.txt` 200 with sitemap line | ✓ verified locally |
| `/llms.txt` 200 plain text | ✓ verified locally |
| All `<title>` unique | ✓ |
| All meta descriptions unique | ✓ |
| No accidental `noindex` | ✓ Only legal stubs allowed indexing; no `noindex: true` anywhere |
| `sameAs` includes GBP URL | ✓ (still missing Yelp + BBB) |
| Phone/address as text on `/contact` | ✓ |
| No orphan pages | ✓ Every page reachable from footer or hub navigation |

---

## What I need from you to proceed to Phase 2

1. **Confirm Phase 2 go-ahead.** Once you say go, I'll execute the Critical list above (items 1–8). Items requiring your input (photos, GBP setup, Bing verification, GA4 ID) I'll flag back to you instead of guessing.
2. **GA4 measurement ID** (`G-XXXXXXXXXX`) if you want me to wire it through GTM via env var
3. **Yelp business profile URL** if claimed (or "skip — not on Yelp")
4. **BBB business profile URL** if claimed (or "skip")
5. **LinkedIn URLs for Luka and Ian** for the Person schema `sameAs` (or "skip")
6. **Real photos** to drop into `public/photos/` — even 4–5 (trailer, one before/after, two team shots) materially change Phase 4 outcomes
7. **Search Console performance CSV** (last 90 days) if you want me to do the quick-win analysis
8. **Confirm location pages**: Bend + Redmond + Sisters at minimum, or all six cities? My recommendation is depth over breadth — 3 strong pages beat 6 thin ones.

I'm stopping here per the prompt. Reply with go-ahead and the answers above and I'll execute Phase 2.
