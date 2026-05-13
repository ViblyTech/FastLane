import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { faqs, services, site } from "@/lib/site";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Auto Detailing FAQ Bend, OR | Real Answers",
  description:
    "Mobile auto detailing FAQ from Fast Lane Detailing in Bend, OR. Car wash vs detail, ceramic coating durability, mobile vs in-shop, pricing, and more.",
  path: "/faq",
  keywords: [
    "mobile detailing FAQ Bend Oregon",
    "car detailing questions Bend",
    "ceramic coating FAQ Bend",
    "auto detailing FAQ Oregon",
    "car wash vs detail",
    "how long does ceramic coating last",
    "what is paint correction",
    "mobile detailing questions",
  ],
});

const extended = [
  ...faqs,
  {
    q: "How long does a full mobile detail take?",
    a: "Two to eight hours, depending on the package and the condition of the car. A maintenance wash is the short end; a full interior plus exterior plus engine bay is the long end.",
  },
  {
    q: "Should I pre-vacuum or clean out the car before you come?",
    a: "Pull out anything personal you want to keep separate. Loose trash is fine; that is part of what we do.",
  },
  {
    q: "Do you do paint correction without a ceramic coat?",
    a: "Yes. Correction stands on its own. A sealant or wax will hold the result for a few months. A ceramic coat will hold it for years.",
  },
  {
    q: "Do you do RVs, boats, or motorcycles?",
    a: "Ask. We do most of the cars and trucks in Bend, and we have done occasional boats and RVs by quote.",
  },
  {
    q: "Are you insured?",
    a: "Yes. We are happy to share certificates of insurance on request.",
  },
  {
    q: "What payments do you accept?",
    a: "Cash, credit and debit cards, Venmo, and Zelle.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "FAQ", url: `${site.url}/faq` },
          ]),
          faqPageSchema(extended),
        ]}
      />
      <Breadcrumbs trail={[{ name: "FAQ", href: "/faq" }]} />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Frequently asked</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          Mobile auto detailing FAQ, Bend, OR.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          If your question is not on this page, text us at{" "}
          <a
            href={`sms:${site.phoneE164}`}
            className="underline underline-offset-4 hover:text-[var(--color-fg)]"
          >
            {site.phone}
          </a>
          . We answer fast.
        </p>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page py-16">
          <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
            {extended.map((item) => (
              <li key={item.q}>
                <details className="group py-6">
                  <summary
                    className="flex cursor-pointer items-start justify-between gap-6 text-left text-lg font-medium sm:text-xl"
                    data-event="faq_open"
                  >
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 select-none text-[var(--color-fg-muted)] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-prose text-[var(--color-fg-muted)]">{item.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-24">
        <header className="mb-10 max-w-2xl">
          <div className="eyebrow">Still wondering?</div>
          <h2 className="text-h2 mt-4">Maybe a service page has it.</h2>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-fg)]"
            >
              <div className="font-bold">{s.name}</div>
              <div className="mt-1 text-sm text-[var(--color-fg-muted)]">{s.short}</div>
            </Link>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
