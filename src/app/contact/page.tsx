import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";
import { breadcrumbSchema, contactPointSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact Fast Lane Detailing Bend, OR | (541) 640-0612",
  description:
    "Contact Fast Lane Detailing in Bend, Oregon. Call or text (541) 640-0612 for a free mobile auto detailing quote. Same-day response in most cases.",
  path: "/contact",
  keywords: [
    "Fast Lane Detailing contact",
    "Bend Oregon car detailer phone",
    "mobile detailing quote Bend",
    "auto detailing Bend OR phone",
    "car detailing near me phone",
    "detailing booking Bend Oregon",
    "free detailing quote Bend",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Contact", url: `${site.url}/contact` },
          ]),
          contactPointSchema(),
        ]}
      />
      <Breadcrumbs trail={[{ name: "Contact", href: "/contact" }]} />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Contact</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          Contact Fast Lane Detailing in Bend, OR.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          Three ways to reach a Bend mobile auto detailer. Phone is the fastest, text is the
          easiest, the quote form below is for when you want to share vehicle details up front.
        </p>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-px bg-[var(--color-line-soft)] sm:grid-cols-3">
          {[
            {
              label: "Call",
              value: site.phone,
              href: `tel:${site.phoneE164}`,
              note: "Fastest. Mon to Sat business hours.",
              event: "cta_call_click",
            },
            {
              label: "Text",
              value: site.phone,
              href: `sms:${site.phoneE164}`,
              note: "Best for quick questions and photos.",
              event: "cta_text_click",
            },
            {
              label: "Quote form",
              value: "Send details",
              href: "#quote",
              note: "Best when you know what you want.",
              event: "cta_book_click",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              data-event={c.event}
              className="group flex flex-col gap-3 bg-[var(--color-canvas)] p-8 transition-colors hover:bg-[var(--color-surface)]"
            >
              <div className="eyebrow">{c.label}</div>
              <div className="text-2xl font-bold sm:text-3xl">{c.value}</div>
              <div className="text-sm text-[var(--color-fg-muted)]">{c.note}</div>
              <span className="mt-2 text-sm text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)]">
                Open →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.2fr]">
        <header>
          <div className="eyebrow">Hours</div>
          <h2 className="text-h2 mt-4">When we work.</h2>
          <dl className="mt-8 space-y-3 text-lg">
            <div className="flex justify-between gap-6 border-b border-[var(--color-line-soft)] pb-3">
              <dt>Monday to Friday</dt>
              <dd className="text-[var(--color-fg-muted)]">8am to 6pm</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-[var(--color-line-soft)] pb-3">
              <dt>Saturday</dt>
              <dd className="text-[var(--color-fg-muted)]">9am to 4pm</dd>
            </div>
            <div className="flex justify-between gap-6 border-b border-[var(--color-line-soft)] pb-3">
              <dt>Sunday</dt>
              <dd className="text-[var(--color-fg-muted)]">By appointment</dd>
            </div>
          </dl>
          <address className="not-italic mt-12 space-y-1 text-sm text-[var(--color-fg-muted)]">
            <div className="text-[var(--color-fg)]">{site.name}</div>
            <div>
              {site.address.locality}, {site.address.region}
            </div>
            <div>Mobile service across Central Oregon</div>
          </address>
        </header>
        <div id="quote" className="scroll-mt-24">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
