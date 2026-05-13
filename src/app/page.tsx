import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { faqPageSchema, howToProcessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { ReviewsBand } from "@/components/ReviewsBand";
import { Reveal } from "@/components/Reveal";
import { customLogoHref } from "@/lib/logo";
import { site, services, faqs } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Mobile Auto Detailing in Bend, OR | Fast Lane Detailing",
  description:
    "Mobile auto detailing in Bend, Oregon. We bring the trailer to your driveway. Interior, exterior, ceramic coating, paint correction, engine bay, and odor removal. Free quotes.",
  path: "/",
});

export default function HomePage() {
  const pngHref = customLogoHref();
  return (
    <>
      <JsonLd data={[howToProcessSchema(), faqPageSchema([...faqs])]} />
      <Hero />
      <TrustLine />
      <Services />
      <ReviewsBand pngHref={pngHref} />
      <Studio />
      <Faq />
      <Book />
    </>
  );
}

function Hero() {
  return (
    <section className="hero relative isolate overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0d] to-black" />
        <div className="absolute inset-0 hero-spotlight" />
        <svg
          viewBox="0 0 1600 900"
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M180 540 C 360 380, 700 300, 950 320 C 1140 336, 1240 380, 1310 420 C 1370 450, 1420 460, 1460 450" />
          <path d="M180 540 C 380 560, 720 580, 960 575 C 1140 568, 1280 545, 1380 510 C 1430 490, 1450 470, 1460 450" />
        </svg>
      </div>

      <div className="container-page relative flex min-h-[88vh] flex-col items-center justify-center py-24 text-center sm:min-h-[92vh] sm:py-32">
        <Reveal>
          <div className="eyebrow text-white/60">
            Car detailing · Bend, Oregon
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="mt-8">
            <span className="block text-[clamp(2.5rem,10vw,7rem)] font-black uppercase leading-[0.95] tracking-tight">
              Bend Oregon
            </span>
            <span className="hero-outline mt-1 block text-[clamp(2rem,8vw,6rem)] font-black uppercase leading-[0.95] tracking-tight">
              #1 Auto Detailer
            </span>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-10 max-w-xl text-base text-white/75 sm:text-lg">
            Your go-to for car detailing, ceramic coating, and paint correction in Bend, Oregon.
          </p>
        </Reveal>

        <Reveal delay={380}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={`tel:${site.phoneE164}`}
              className="hero-cta"
              data-event="cta_call_click"
            >
              Call now
            </a>
            <p className="text-xs uppercase tracking-[0.18em] text-white/55">
              <span className="text-white">{site.rating.value.toFixed(1)} ★</span> from{" "}
              {site.rating.count}+ Google reviews
            </p>
          </div>
        </Reveal>

        <a
          href="#services"
          aria-label="Scroll to services"
          className="scroll-chevron absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
        >
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="10 16 20 26 30 16" />
          </svg>
        </a>
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
          <div className="text-center">
            <div className="eyebrow">Welcome to Fast Lane Detailing</div>
            <h2 className="text-h1 mt-6 uppercase tracking-tight">Our services</h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-6 h-px w-20 bg-[var(--color-accent)]"
            />
            <p className="mx-auto mt-8 max-w-[44ch] text-lg text-[var(--color-fg-muted)]">
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
          <div className="mt-12 text-center">
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
