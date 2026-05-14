import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { QuoteForm } from "@/components/QuoteForm";
import { services, site } from "@/lib/site";
import { articlesByService } from "@/lib/blog";
import {
  serviceSchema,
  faqPageSchema,
  breadcrumbSchema,
  servicePageSchema,
} from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetail(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => service.related.includes(s.slug));
  const relatedArticles = articlesByService(service.slug);

  return (
    <>
      <JsonLd
        data={[
          servicePageSchema(service),
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Services", url: `${site.url}/services` },
            { name: service.name, url: `${site.url}/services/${service.slug}` },
          ]),
          faqPageSchema(service.faqs),
        ]}
      />

      <Breadcrumbs
        trail={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">{service.startingAt}</div>
        <h1 className="service-headline text-h1 mt-4 max-w-3xl">
          {service.name} in Bend, OR.
        </h1>
        <p className="service-intro mt-6 max-w-3xl text-lg text-[var(--color-fg-muted)]">
          {service.intro}
        </p>

        <aside
          className="service-quick-answer mt-10 max-w-3xl rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6"
          aria-label="Quick answer"
        >
          <div className="eyebrow text-[var(--color-fg-muted)]">Quick answer</div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">Service</dt>
              <dd className="mt-1 text-base font-semibold">{service.name}</dd>
            </div>
            <div>
              <dt className="eyebrow">Typical time</dt>
              <dd className="mt-1 text-base font-semibold">{service.time}</dd>
            </div>
            <div>
              <dt className="eyebrow">Pricing</dt>
              <dd className="mt-1 text-base font-semibold">{service.startingAt}</dd>
            </div>
          </dl>
          <p className="mt-5 text-sm text-[var(--color-fg-muted)]">
            Serving Bend, Redmond, Sisters, Sunriver, Tumalo, and La Pine. Call or text{" "}
            <a
              href={`tel:${site.phoneE164}`}
              className="text-[var(--color-fg)] underline underline-offset-4"
            >
              {site.phone}
            </a>{" "}
            to book.
          </p>
        </aside>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/#quote" className="cta">
            Book this service
          </Link>
          <a href={`sms:${site.phoneE164}`} className="cta-ghost">
            Text us a question
          </a>
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-2">
          <div>
            <div className="eyebrow">What is included</div>
            <ul className="mt-6 divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
              {service.includes.map((item) => (
                <li key={item} className="flex items-baseline gap-4 py-3">
                  <span className="text-[var(--color-accent)]">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow">Good for</div>
            <ul className="mt-6 divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
              {service.goodFor.map((item) => (
                <li key={item} className="flex items-baseline gap-4 py-3">
                  <span className="text-[var(--color-accent)]">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <dt className="eyebrow">Typical time</dt>
                <dd className="mt-2 text-xl font-bold">{service.time}</dd>
              </div>
              <div>
                <dt className="eyebrow">Pricing</dt>
                <dd className="mt-2 text-xl font-bold">{service.startingAt}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {service.faqs.length > 0 ? (
        <section className="border-b border-[var(--color-line-soft)]">
          <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
            <header>
              <div className="eyebrow">FAQ</div>
              <h2 className="text-h2 mt-4">About {service.name.toLowerCase()}.</h2>
            </header>
            <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
              {service.faqs.map((item) => (
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
      ) : null}

      {relatedArticles.length > 0 ? (
        <section className="border-b border-[var(--color-line-soft)] bg-[var(--color-surface)]">
          <div className="container-page py-24">
            <header className="mb-10 max-w-2xl">
              <div className="eyebrow">Related reading</div>
              <h2 className="text-h2 mt-4">
                More on {service.name.toLowerCase()}
              </h2>
            </header>
            <ul className="grid gap-6 sm:grid-cols-2">
              {relatedArticles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="group flex h-full flex-col gap-3 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-canvas)] p-6 transition-colors hover:border-[var(--color-fg)]"
                  >
                    <div className="eyebrow flex flex-wrap items-center gap-3 text-[var(--color-fg-muted)]">
                      <span>{a.readMinutes} min read</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-[var(--color-accent)]">
                      {a.title}
                    </h3>
                    <p className="text-[var(--color-fg-muted)]">{a.excerpt}</p>
                    <span className="mt-auto text-sm text-[var(--color-fg-muted)]">
                      Read article →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-b border-[var(--color-line-soft)]">
          <div className="container-page py-24">
            <header className="mb-10 max-w-2xl">
              <div className="eyebrow">Pairs well with</div>
              <h2 className="text-h2 mt-4">You may also want</h2>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex flex-col gap-3 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-fg)]"
                >
                  <div className="eyebrow text-[var(--color-fg-muted)]">{r.startingAt}</div>
                  <h3 className="text-xl font-bold">{r.name}</h3>
                  <p className="text-[var(--color-fg-muted)]">{r.short}</p>
                  <span className="mt-2 text-sm text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)]">
                    {r.name} in Bend, OR →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="quote" className="scroll-mt-24">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">Book</div>
            <h2 className="text-h2 mt-4">Get a quote for {service.name.toLowerCase()}.</h2>
            <p className="mt-4 text-[var(--color-fg-muted)]">
              Free, no commitment. Or call or text{" "}
              <a
                href={`tel:${site.phoneE164}`}
                className="text-[var(--color-fg)] underline underline-offset-4"
              >
                {site.phone}
              </a>
              .
            </p>
          </header>
          <QuoteForm />
        </div>
      </section>

      <CallToAction
        heading={`Ready to book ${service.name.toLowerCase()}?`}
        body="Free quote, no commitment. Most appointments confirmed same day."
      />
    </>
  );
}
