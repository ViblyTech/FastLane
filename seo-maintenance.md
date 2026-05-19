# Fast Lane Detailing — SEO Maintenance Runbook

A short, opinionated checklist to keep the site competitive in Google,
Bing, and AI-search results without spending more than a few hours a
month on it.

**Single sources of truth**

| Item | File / Tool |
|---|---|
| NAP, hours, services, pricing | `src/lib/site.ts` |
| Services + FAQs + keywords | `src/lib/site.ts` |
| Articles (publishedAt / updatedAt) | `src/lib/blog.ts` |
| Sitemap | `src/app/sitemap.ts` (auto from data) |
| Robots | `src/app/robots.ts` |
| Schema.org JSON-LD | `src/lib/schema.ts` |
| AI ingestion | `public/llms.txt`, `public/llms-full.txt` |
| Google Search Console | `public/googlebbc9e3e5440a7be4.html` |

If a fact changes (phone, hours, service, price), update it in one
place (`site.ts` or `blog.ts`) — the schema, sitemap, llms files, and
visible copy will all follow on the next deploy.

---

## Monthly (30 minutes)

- [ ] **GSC: review last 28 days.** Search Console → Performance → last
      28 days. Note any query where impressions jumped but clicks did
      not. That's a title/description test target.
- [ ] **Rich results.** Run the Rich Results Test on `/`,
      `/services/mobile-detailing`, `/service-area/bend-or`, and the
      newest blog post. Confirm `LocalBusiness`, `Service`, `FAQPage`,
      `BlogPosting`, and `BreadcrumbList` parse cleanly.
- [ ] **Coverage.** GSC → Pages. Confirm no new "Discovered, not
      indexed" or "Crawled, not indexed" pages. Investigate any drops.
- [ ] **Mobile usability.** Open the homepage on a phone; tap every CTA
      and confirm the menu opens, the quote form submits, and the call
      conversion fires when you tap the phone number.
- [ ] **Google Business Profile.** Post one update (a recent job, a
      seasonal reminder, or a service-area note). Photos help.
- [ ] **Review request.** Send a personal review request to one happy
      customer from the last 30 days using
      `https://g.page/r/fastlanedetailingbend/review`.
- [ ] **Bump `updatedAt` on any service page** that has had a copy or
      pricing change.

## Quarterly (60 minutes)

- [ ] **One new blog post.** 800–1200 words, one specific question,
      Speakable schema, FAQPage schema, links to one service page and
      one related article. Use the existing posts as the template.
- [ ] **Refresh `site.rating.count`** if review count has grown
      meaningfully on Google Business Profile.
- [ ] **Audit external NAP.** Spot-check Google Business Profile,
      Yelp, BBB, Facebook, and Instagram. Phone number byte-identical
      to `(541) 640-0612`, hours match `Mon–Fri 8am–5pm`, business
      name byte-identical to `Fast Lane Detailing`.
- [ ] **Run Lighthouse on the deployed homepage.** Mobile target:
      Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95,
      SEO = 100.
- [ ] **Add 1–2 FAQ items** to `/faq` based on the previous month's
      customer questions over phone or text.
- [ ] **Check `llms-full.txt`.** Update price ranges, service area,
      hours, and rating if anything has changed.

## Yearly (90 minutes)

- [ ] **Refresh every service page intro.** Even small rewrites help.
      Update `updatedAt` on each.
- [ ] **Sweep blog articles.** Re-read each one. If it's still
      accurate, bump `updatedAt`. If it's stale, rewrite.
- [ ] **Rebuild the OG image** if the brand, accent color, or logo
      changes.
- [ ] **Re-export the Search Console performance CSV** (last 12
      months) and look for new query opportunities that did not exist
      a year ago.
- [ ] **Re-run the Phase 1 audit** (see `audit-report.md`) against the
      live site and update the prioritized fix list.

---

## When to deploy without a sweep

These are "ship right now" triggers — don't batch:

- Phone number change → update `site.phoneE164` and `site.phone`,
  deploy same day, update Google Business Profile, Facebook,
  Instagram, Yelp, BBB simultaneously.
- Hours change → update `site.hours`, post to Google Business Profile.
- New service area added → add to `site.serviceAreas`, decide if it
  warrants its own location page.
- A new review milestone (100, 150, 200) → bump `site.rating.count`
  for fresh aggregate-rating snippets in SERPs.

## What not to do

- Don't keyword-stuff. The titles and descriptions are already
  optimized; adding more breaks click-through rates.
- Don't generate AI service or location pages. Each location page
  needs unique, factual content about neighborhoods and conditions —
  templated AI text gets de-indexed.
- Don't change canonical URL slugs without a redirect. If you must
  rename `/services/mobile-detailing`, add a `redirects` entry in
  `next.config.ts` first.
- Don't accept review trades or paid reviews. Google delists, and the
  AggregateRating schema becomes a liability.
- Don't add schema for things that aren't on the page. If you add
  `Product` markup but don't sell products, Google flags it.

## Tools

- Google Search Console — https://search.google.com/search-console
- Bing Webmaster Tools — https://www.bing.com/webmasters (after
  verification)
- Rich Results Test — https://search.google.com/test/rich-results
- Schema Markup Validator — https://validator.schema.org
- PageSpeed Insights — https://pagespeed.web.dev
- Google Business Profile — https://business.google.com

## Reference

- Phase 1 audit report — `audit-report.md`
- Production deployment — https://www.fastlanedetailing.net
- Branch — `claude/fast-lane-detailing-site-Lfv2Y`
