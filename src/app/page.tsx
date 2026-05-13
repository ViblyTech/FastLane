import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { faqPageSchema, howToProcessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { site, services, faqs } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Auto Detailing in Bend, OR | Fast Lane Detailing",
  description:
    "Mobile auto detailing in Bend, Oregon. We bring the trailer to your driveway. Interior, exterior, ceramic coating, paint correction, engine bay, and odor removal. Free quotes.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[howToProcessSchema(), faqPageSchema([...faqs])]} />
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
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 280"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[420px] w-[1200px] -translate-y-1/2 text-[var(--color-line-soft)] sm:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M40 200 C 180 80, 460 30, 700 60 C 880 80, 1000 140, 1100 200" />
        <path d="M40 200 C 240 220, 540 240, 820 230 C 980 224, 1060 212, 1100 200" />
      </svg>
      <div className="container-page relative pb-24 pt-20 sm:pt-28">
        <div className="eyebrow flex items-center gap-3">
          <span className="inline-block h-px w-10 bg-[var(--color-fg-muted)]" aria-hidden="true" />
          Bend, Oregon · Mobile detailing
        </div>
        <h1 className="text-display mt-8 max-w-[14ch]">
          Detailing that{" "}
          <span className="text-[var(--color-accent)]">comes to you.</span>
        </h1>
        <p className="mt-8 max-w-prose text-lg text-[var(--color-fg-muted)] sm:text-xl">
          Fully-equipped mobile trailer. Bend and Central Oregon. Book a free quote in under a
          minute, or text us if you would rather talk first.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="#quote" className="cta" data-event="cta_book_click">
            Book now
          </Link>
          <a
            href={`sms:${site.phoneE164}`}
            className="cta-ghost"
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
    { label: "Service radius", value: `${site.serviceRadiusMiles} mi` },
  ];

  return (
    <section className="border-b border-[var(--color-line-soft)]" aria-label="At a glance">
      <div className="container-page grid grid-cols-2 gap-y-10 py-12 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-bold sm:text-3xl">{s.value}</div>
            <div className="eyebrow mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="border-b border-[var(--color-line-soft)]">
      <div className="container-page py-24">
        <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="eyebrow">Services</div>
            <h2 className="text-h2 mt-4">Every service we offer.</h2>
            <p className="mt-4 text-[var(--color-fg-muted)]">
              One menu, mobile or in-shop. Pick a service or get a quote and we will talk through
              what your car actually needs.
            </p>
          </div>
          <Link
            href="/services"
            className="self-start text-sm text-[var(--color-fg-muted)] underline underline-offset-4 hover:text-[var(--color-fg)]"
          >
            See full service menu →
          </Link>
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
      title: "Drive a car you would buy again.",
      body: "Two to eight hours later, depending on the package.",
    },
  ];

  return (
    <section className="border-b border-[var(--color-line-soft)]">
      <div className="container-page py-24">
        <header className="mb-12 max-w-2xl">
          <div className="eyebrow">How it works</div>
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
    <section
      id="about"
      className="border-b border-[var(--color-line-soft)] bg-[var(--color-surface)]"
    >
      <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <div className="eyebrow">About</div>
          <h2 className="text-h2 mt-4">Built by detailers, in Bend.</h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Founded in Bend in 2024. Ten-plus years of detailing experience behind the trailer.
          </p>
          <p className="text-[var(--color-fg-muted)]">
            Luka and Ian are the entire team. Every appointment, you are getting one of us, not a
            rotating crew you have never met. We work on daily drivers, family SUVs, weekend
            trucks, and the rare car that lives under a cover most of the year. Premium results,
            fair pricing, and a willingness to work with you on the package that actually fits.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link href="/about" className="cta-ghost">
              More about us
            </Link>
            <Link href="/reviews" className="cta-ghost">
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
      <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
        <header>
          <div className="eyebrow">FAQ</div>
          <h2 className="text-h2 mt-4">Common questions.</h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            More on the{" "}
            <Link
              href="/faq"
              className="underline underline-offset-4 hover:text-[var(--color-fg)]"
            >
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
          {faqs.slice(0, 4).map((item) => (
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
  );
}

function ServiceAreaSection() {
  return (
    <section className="border-b border-[var(--color-line-soft)]">
      <div className="container-page py-24">
        <header className="mb-12 max-w-2xl">
          <div className="eyebrow">Service area</div>
          <h2 className="text-h2 mt-4">Where we go.</h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Mobile service across Bend and Central Oregon. Outside our footprint? Ask. We travel
            for ceramic coating jobs.
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
        <div className="mt-10">
          <Link
            href="/service-area"
            className="text-sm text-[var(--color-fg-muted)] underline underline-offset-4 hover:text-[var(--color-fg)]"
          >
            See the full service area →
          </Link>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-24">
      <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
        <header>
          <div className="eyebrow">Book</div>
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
