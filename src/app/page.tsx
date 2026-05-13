import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { faqPageSchema, howToProcessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
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
      <TrustLine />
      <Services />
      <Studio />
      <Faq />
      <Book />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="container-page relative pb-28 pt-20 sm:pb-40 sm:pt-40 lg:pt-48">
        <Reveal>
          <h1 className="text-display max-w-[16ch]">
            Detailing that{" "}
            <span className="text-[var(--color-accent)]">comes to you.</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-10 max-w-[28ch] text-xl text-[var(--color-fg-muted)] sm:text-2xl">
            Mobile detailing. Bend, Oregon.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
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
        </Reveal>
        <Reveal delay={340}>
          <p className="mt-16 max-w-[40ch] text-sm text-[var(--color-fg-muted)]">
            <span className="text-[var(--color-fg)]">
              {site.rating.value.toFixed(1)} ★
            </span>{" "}
            across {site.rating.count}+ reviews. Ten-plus years of detailing experience behind the
            trailer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function TrustLine() {
  const promises = [
    "Same-day quote",
    "Free estimates",
    "Owner-operated",
    "Insured",
  ];
  return (
    <section
      aria-label="Service promises"
      className="border-y border-[var(--color-line-soft)] bg-[var(--color-canvas)]"
    >
      <div className="container-page py-6">
        <ul className="eyebrow flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[var(--color-fg-muted)]">
          {promises.map((p, i) => (
            <li key={p} className="flex items-center gap-6">
              <span>{p}</span>
              {i < promises.length - 1 ? (
                <span className="hidden h-px w-8 bg-[var(--color-line-soft)] sm:inline-block" />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[var(--color-canvas)]">
      <div className="container-page py-28 sm:py-36">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-h1">Six services.</h2>
            <p className="mt-6 max-w-[42ch] text-lg text-[var(--color-fg-muted)]">
              Mobile or in-shop. The same two hands every time.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-20 grid border-b border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12">
            <Link
              href="/services"
              className="text-sm text-[var(--color-fg-muted)] underline underline-offset-4 hover:text-[var(--color-fg)]"
            >
              Full service menu →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section className="border-y border-[var(--color-line-soft)] bg-[var(--color-canvas)]">
      <div className="container-page grid gap-16 py-28 sm:py-36 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <Reveal>
          <div>
            <h2 className="text-h1">
              Two people.
              <br />
              One trailer.
            </h2>
            <p className="mt-10 max-w-[40ch] text-xl leading-snug">
              Luka and Ian. Founded in Bend in 2024 with a decade of paint behind it. Every
              appointment, you are getting one of us, not a rotating crew you have never met.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/about" className="cta-ghost">
                About us
              </Link>
              <Link href="/reviews" className="cta-ghost">
                Reviews
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ol className="flex flex-col justify-center divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)] text-lg">
            <li className="flex items-baseline gap-6 py-6">
              <span className="w-8 shrink-0 font-mono text-sm text-[var(--color-fg-muted)]">
                01
              </span>
              <span>Book a quote. We confirm same-day in most cases.</span>
            </li>
            <li className="flex items-baseline gap-6 py-6">
              <span className="w-8 shrink-0 font-mono text-sm text-[var(--color-fg-muted)]">
                02
              </span>
              <span>We come to you. Driveway, office, or in-shop.</span>
            </li>
            <li className="flex items-baseline gap-6 py-6">
              <span className="w-8 shrink-0 font-mono text-sm text-[var(--color-fg-muted)]">
                03
              </span>
              <span>Drive a car you would buy again.</span>
            </li>
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-[var(--color-canvas)]">
      <div className="container-page py-28 sm:py-36">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-h1">Questions.</h2>
            <p className="mt-6 max-w-[44ch] text-lg text-[var(--color-fg-muted)]">
              What people ask before they book. If yours is not here, text us at{" "}
              <a
                href={`sms:${site.phoneE164}`}
                className="text-[var(--color-fg)] underline underline-offset-4"
              >
                {site.phone}
              </a>
              .
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-16 divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
            {faqs.slice(0, 4).map((item) => (
              <li key={item.q}>
                <details className="group py-7">
                  <summary
                    className="flex cursor-pointer items-start justify-between gap-8 text-left text-xl font-semibold tracking-tight sm:text-2xl"
                    data-event="faq_open"
                  >
                    <span className="max-w-[40ch]">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 select-none text-[var(--color-fg-muted)] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[60ch] text-[var(--color-fg-muted)]">{item.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12">
            <Link
              href="/faq"
              className="text-sm text-[var(--color-fg-muted)] underline underline-offset-4 hover:text-[var(--color-fg)]"
            >
              All FAQ →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section
      id="quote"
      className="scroll-mt-24 border-t border-[var(--color-line-soft)] bg-[var(--color-canvas)]"
    >
      <div className="container-page grid gap-12 py-28 sm:py-36 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <header>
            <h2 className="text-h1">
              Tell us about
              <br />
              your car.
            </h2>
            <p className="mt-8 max-w-[36ch] text-lg text-[var(--color-fg-muted)]">
              Free quote, no commitment. Most appointments confirmed the same day.
            </p>
            <p className="mt-6 max-w-[36ch] text-sm text-[var(--color-fg-muted)]">
              Or call or text{" "}
              <a
                href={`tel:${site.phoneE164}`}
                className="text-[var(--color-fg)] underline underline-offset-4"
                data-event="cta_call_click"
              >
                {site.phone}
              </a>
              .
            </p>
            <p className="mt-10 text-sm text-[var(--color-fg-muted)]">
              {site.serviceAreas.join(" · ")}
            </p>
          </header>
        </Reveal>
        <Reveal delay={140}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
