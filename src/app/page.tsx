import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { faqPageSchema, howToProcessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { QuoteForm } from "@/components/QuoteForm";
import { ReviewsBand } from "@/components/ReviewsBand";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
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
      <Hero pngHref={pngHref} />
      <TrustLine />
      <Services />
      <ReviewsBand pngHref={pngHref} />
      <Studio />
      <Faq />
      <Book />
    </>
  );
}

function Hero({ pngHref }: { pngHref?: string }) {
  return (
    <section className="hero relative isolate overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b0d] to-black" />
        <div className="absolute inset-0 hero-spotlight" />
        <div className="absolute inset-0 hero-grain" />
        {pngHref ? (
          <div className="hero-watermark pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[min(140vw,1200px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
            <Image
              src={pngHref}
              alt=""
              width={1024}
              height={1024}
              className="h-full w-full object-contain"
              sizes="100vw"
              priority
            />
          </div>
        ) : null}
        <svg
          viewBox="0 0 1600 900"
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M180 540 C 360 380, 700 300, 950 320 C 1140 336, 1240 380, 1310 420 C 1370 450, 1420 460, 1460 450" />
          <path d="M180 540 C 380 560, 720 580, 960 575 C 1140 568, 1280 545, 1380 510 C 1430 490, 1450 470, 1460 450" />
        </svg>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="container-page relative flex min-h-[88vh] flex-col items-center justify-center py-24 text-center sm:min-h-[92vh] sm:py-32">
        <Reveal>
          <div className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-white/55">
            <span className="hidden h-px w-8 bg-white/30 sm:inline-block" />
            <span>Car detailing · Bend, Oregon</span>
            <span className="hidden h-px w-8 bg-white/30 sm:inline-block" />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <h1
            className="mt-10 font-[var(--font-display)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="block text-[clamp(3.25rem,13vw,9rem)] uppercase leading-[0.9] tracking-[0.01em]">
              Bend Oregon
            </span>
            <span className="hero-outline mt-1 block text-[clamp(2.75rem,11vw,7.5rem)] uppercase leading-[0.9] tracking-[0.01em]">
              #1 Auto Detailer
            </span>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <div
            aria-hidden="true"
            className="mx-auto mt-10 h-px w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </Reveal>

        <Reveal delay={300}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Your go-to for car detailing, ceramic coating, and paint correction in Bend, Oregon.
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-12 flex flex-col items-center gap-6">
            <a
              href={`tel:${site.phoneE164}`}
              className="hero-cta"
              data-event="cta_call_click"
            >
              Call now
            </a>
            <p className="flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-white/55">
              <span className="text-white">{site.rating.value.toFixed(1)} ★</span>
              <span className="h-px w-4 bg-white/25" aria-hidden="true" />
              <span>{site.rating.count}+ Google reviews</span>
            </p>
          </div>
        </Reveal>

        <a
          href="#services"
          aria-label="Scroll to services"
          className="scroll-chevron absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
        >
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
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
          <SectionHeader
            eyebrow="Welcome to Fast Lane Detailing"
            heading="Our services"
            subhead="Mobile or in-shop. The same two hands every time."
          />
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
      <div className="container-page py-28 sm:py-36">
        <Reveal>
          <SectionHeader
            eyebrow="The team"
            heading="Two people. One trailer."
            subhead="Luka and Ian. Founded in Bend in 2024 with a decade of paint behind it. Every appointment, you are getting one of us, not a rotating crew you have never met."
          />
        </Reveal>

        <Reveal delay={140}>
          <ol className="mx-auto mt-16 max-w-2xl divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)] text-lg">
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

        <Reveal delay={220}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link href="/about" className="cta-ghost">
              About us
            </Link>
            <Link href="/reviews" className="cta-ghost">
              Reviews
            </Link>
          </div>
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
          <SectionHeader
            eyebrow="FAQ"
            heading="Common questions"
            subhead="What people ask before they book. If yours is not on the list, text us anytime."
          />
        </Reveal>

        <Reveal delay={120}>
          <ul className="mx-auto mt-16 max-w-3xl divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
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
          <div className="mt-12 text-center">
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
      <div className="container-page py-28 sm:py-36">
        <Reveal>
          <SectionHeader
            eyebrow="Book"
            heading="Tell us about your car"
            subhead="Free quote, no commitment. Most appointments confirmed the same day."
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 text-center text-sm text-[var(--color-fg-muted)]">
            Or call or text{" "}
            <a
              href={`tel:${site.phoneE164}`}
              className="text-[var(--color-fg)] underline underline-offset-4"
              data-event="cta_call_click"
            >
              {site.phone}
            </a>
            {" · "}
            {site.serviceAreas.join(" · ")}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-12 max-w-3xl">
            <QuoteForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
