import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { services, site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

const tiers = [
  {
    name: "Maintenance",
    summary: "Keep a daily driver looking sharp between deeper details.",
    includes: [
      "Foam pre-wash and contact wash",
      "Wheels, tires, trim",
      "Vacuum and surface wipe-down",
      "Glass inside and out",
    ],
    starting: "Free quote",
    time: "Two to three hours",
    href: "/services/mobile-detailing",
  },
  {
    name: "Full Detail",
    summary: "Interior and exterior, top to bottom. The reset.",
    includes: [
      "Everything in maintenance",
      "Paint decontamination and clay",
      "Carpet and upholstery extraction",
      "Leather clean and condition",
      "Trim dressing and sealant",
    ],
    starting: "Free quote",
    time: "Four to six hours",
    href: "/services/interior-detailing",
    featured: true,
  },
  {
    name: "Coating Package",
    summary: "Paint correction plus professional ceramic coating.",
    includes: [
      "Full decontamination and clay",
      "Single or two-stage paint correction",
      "Professional ceramic coating",
      "Coating walkthrough and maintenance plan",
    ],
    starting: "Quote on consult",
    time: "One to two days",
    href: "/services/ceramic-coating",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Pricing: Mobile Detailing in Bend, OR",
  description:
    "Free quotes on every car. Mobile auto detailing in Bend and Central Oregon. Packages from maintenance washes to full ceramic coating.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Pricing", url: `${site.url}/pricing` },
        ])}
      />
      <Breadcrumbs trail={[{ name: "Pricing", href: "/pricing" }]} />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Pricing</div>
        <h1 className="text-h1 mt-4 max-w-3xl">Honest pricing, every car different.</h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          Every car is a different job. A maintenance wash on a one-year-old sedan is not the same
          as a full detail on a family SUV that lives outside. We quote each one for what it
          actually needs.
        </p>
        <p className="mt-4 max-w-prose text-[var(--color-fg-muted)]">
          Send a few details and a photo or two. We will reply with a written quote, usually the
          same day.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/#quote" className="cta">
            Get a quote
          </Link>
          <a href={`sms:${site.phoneE164}`} className="cta-ghost">
            Text us photos
          </a>
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page py-20">
          <div className="grid gap-px overflow-hidden rounded-card border border-[var(--color-line-soft)] bg-[var(--color-line-soft)] lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`flex flex-col gap-6 p-8 ${
                  tier.featured ? "bg-[var(--color-canvas)] ring-1 ring-[var(--color-accent)]" : "bg-[var(--color-surface)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="eyebrow">{tier.featured ? "Most popular" : "Package"}</div>
                  <span className="eyebrow">{tier.time}</span>
                </div>
                <h2 className="text-2xl font-bold sm:text-3xl">{tier.name}</h2>
                <p className="text-[var(--color-fg-muted)]">{tier.summary}</p>
                <div className="text-3xl font-bold">{tier.starting}</div>
                <ul className="space-y-2 border-y border-[var(--color-line-soft)] py-6 text-sm">
                  {tier.includes.map((line) => (
                    <li key={line} className="flex items-baseline gap-3">
                      <span className="text-[var(--color-accent)]">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-3">
                  <Link href={tier.href} className="cta-ghost">
                    Service details
                  </Link>
                  <Link href="/#quote" className="cta">
                    Get a quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <header className="mb-10 max-w-2xl">
          <div className="eyebrow">Every service</div>
          <h2 className="text-h2 mt-4">Or build it à la carte.</h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            We are very willing to work with you on the right scope. Skip what you do not need;
            add what you do.
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="flex items-center justify-between gap-4 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-fg)]"
            >
              <div>
                <div className="font-bold">{s.name}</div>
                <div className="mt-1 text-sm text-[var(--color-fg-muted)]">{s.short}</div>
              </div>
              <span className="eyebrow whitespace-nowrap">{s.startingAt}</span>
            </Link>
          ))}
        </div>
      </section>

      <CallToAction
        heading="Want a written quote?"
        body="Send a few photos and the details. We reply the same day in most cases."
      />
    </>
  );
}
