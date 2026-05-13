import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessSchema, websiteSchema, faqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { site, services, faqs } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Auto Detailing in Bend, OR — Fast Lane Detailing",
  description:
    "Mobile auto detailing in Bend, Oregon. We bring the trailer to your driveway. Interior, exterior, ceramic coating, and paint correction. Free quotes.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[localBusinessSchema(), websiteSchema(), faqPageSchema([...faqs])]}
      />

      <Hero />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <AboutStrip />
      <FaqSection />
      <ServiceAreaSection />
      <QuoteSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line-soft)]">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
        <div className="eyebrow flex items-center gap-3 text-[var(--color-fg-muted)]">
          <span className="inline-block h-px w-10 bg-[var(--color-fg-muted)]" />
          Bend, Oregon · Mobile detailing
        </div>
        <h1 className="text-display mt-8 max-w-[14ch]">
          Detailing that <em className="not-italic text-[var(--color-accent)]">comes to you.</em>
        </h1>
        <p className="mt-8 max-w-prose text-lg text-[var(--color-fg-muted)] sm:text-xl">
          Fully-equipped mobile trailer. Bend and Central Oregon. Book a free quote in under a minute.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="#quote"
            className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-accent-fg)] transition-opacity hover:opacity-90"
            data-event="cta_book_click"
          >
            Book now
          </Link>
          <a
            href={`sms:${site.phoneE164}`}
            className="rounded-full border border-[var(--color-line-soft)] px-6 py-3 text-sm hover:border-[var(--color-fg)]"
            data-event="cta_text_click"
          >
            Text {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const stats: Array<{ label: string; value: string }> = [
    { label: "Google rating", value: `${site.rating.value.toFixed(1)} ★` },
    { label: "Five-star reviews", value: `${site.rating.count}+` },
    { label: "Years of experience", value: "10+" },
    { label: "Mobile service area", value: "Bend + Central OR" },
  ];

  return (
    <section className="border-b border-[var(--color-line-soft)]" aria-label="At a glance">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-12 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold sm:text-3xl">{s.value}</div>
            <div className="eyebrow mt-2 text-[var(--color-fg-muted)]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="border-b border-[var(--color-line-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <header className="mb-12 max-w-2xl">
          <div className="eyebrow text-[var(--color-fg-muted)]">Services</div>
          <h2 className="text-h2 mt-4">Every service we offer.</h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            One menu, mobile or in-shop. Pick a service or get a quote and we'll talk through what your car
            actually needs.
          </p>
        </header>
        <div className="grid border-b border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      title: "Book or get a quote.",
      body: "Tell us your car and what you want done. We confirm same-day in most cases.",
    },
    {
      title: "We come to you.",
      body: "Fully-equipped trailer in your driveway, parking lot, or at the shop if you prefer.",
    },
    {
      title: "Drive a car you'd buy again.",
      body: "Two to eight hours later, depending on the package.",
    },
  ];

  return (
    <section className="border-b border-[var(--color-line-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <header className="mb-12 max-w-2xl">
          <div className="eyebrow text-[var(--color-fg-muted)]">How it works</div>
          <h2 className="text-h2 mt-4">Three steps, no surprises.</h2>
        </header>
        <ol className="grid gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-[var(--color-line)] pt-6">
              <div className="eyebrow text-[var(--color-accent)]">Step 0{i + 1}</div>
              <h3 className="mt-4 text-xl font-bold sm:text-2xl">{step.title}</h3>
              <p className="mt-3 text-[var(--color-fg-muted)]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AboutStrip() {
  return (
    <section id="about" className="border-b border-[var(--color-line-soft)] bg-[var(--color-surface)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="eyebrow text-[var(--color-fg-muted)]">About</div>
          <h2 className="text-h2 mt-4">Built by detailers, in Bend.</h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-[var(--color-fg)]">
          <p>
            Founded in Bend in 2024. Ten-plus years of detailing experience behind the trailer.
          </p>
          <p className="text-[var(--color-fg-muted)]">
            Luka and Ian are the entire team. Every appointment, you're getting one of us, not a rotating
            crew you have never met. We work on daily drivers, family SUVs, weekend trucks, and the rare car
            that lives under a cover most of the year. Premium results, fair pricing, and a willingness to
            work with you on the package that actually fits.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/about"
              className="rounded-full border border-[var(--color-line-soft)] px-5 py-2 text-sm hover:border-[var(--color-fg)]"
            >
              More about us
            </Link>
            <Link
              href="/reviews"
              className="rounded-full border border-[var(--color-line-soft)] px-5 py-2 text-sm hover:border-[var(--color-fg)]"
            >
              Read reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="border-b border-[var(--color-line-soft)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
        <header>
          <div className="eyebrow text-[var(--color-fg-muted)]">FAQ</div>
          <h2 className="text-h2 mt-4">Common questions.</h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            More on the{" "}
            <Link href="/faq" className="underline underline-offset-4 hover:text-[var(--color-fg)]">
              full FAQ
            </Link>{" "}
            or just{" "}
            <a
              href={`sms:${site.phoneE164}`}
              className="underline underline-offset-4 hover:text-[var(--color-fg)]"
              data-event="cta_text_click"
            >
              text us
            </a>
            .
          </p>
        </header>
        <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
          {faqs.map((item) => (
            <li key={item.q}>
              <details className="group py-6">
                <summary
                  className="flex cursor-pointer items-start justify-between gap-6 text-left text-lg font-medium marker:hidden sm:text-xl"
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
  );
}

function ServiceAreaSection() {
  return (
    <section className="border-b border-[var(--color-line-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <header className="mb-12 max-w-2xl">
          <div className="eyebrow text-[var(--color-fg-muted)]">Service area</div>
          <h2 className="text-h2 mt-4">Where we go.</h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Mobile service across Bend and Central Oregon. Outside our footprint? Ask. We travel for
            ceramic coating jobs.
          </p>
        </header>
        <ul className="grid grid-cols-2 gap-y-3 border-t border-[var(--color-line)] pt-6 text-2xl font-bold tracking-tight sm:grid-cols-3 sm:text-3xl">
          {site.serviceAreas.map((city) => (
            <li key={city} className="flex items-baseline gap-3">
              <span className="text-[var(--color-accent)]">·</span>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr]">
        <header>
          <div className="eyebrow text-[var(--color-fg-muted)]">Book</div>
          <h2 className="text-h2 mt-4">Tell us about your car.</h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Free quote, no commitment. Prefer to talk? Call or text{" "}
            <a
              href={`tel:${site.phoneE164}`}
              className="text-[var(--color-fg)] underline underline-offset-4"
              data-event="cta_call_click"
            >
              {site.phone}
            </a>
            .
          </p>
        </header>
        <QuoteForm />
      </div>
    </section>
  );
}
