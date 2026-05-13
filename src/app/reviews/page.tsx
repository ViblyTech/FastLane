import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { reviews, site } from "@/lib/site";
import { breadcrumbSchema, reviewListSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Reviews of Fast Lane Detailing, Bend, OR",
  description:
    "Five-star reviews of Fast Lane Detailing in Bend, Oregon. Mobile detailing, ceramic coating, paint correction, interior detailing.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Reviews", url: `${site.url}/reviews` },
          ]),
          ...reviewListSchema(),
        ]}
      />
      <Breadcrumbs trail={[{ name: "Reviews", href: "/reviews" }]} />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Reviews</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          {site.rating.value.toFixed(1)} ★ across {site.rating.count}+ reviews.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          A small selection below. Read the rest on{" "}
          <a
            href={site.social.google}
            target="_blank"
            rel="noopener"
            className="underline underline-offset-4 hover:text-[var(--color-fg)]"
          >
            Google
          </a>
          .
        </p>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page py-16">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <li
                key={i}
                className="flex flex-col gap-4 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6"
              >
                <div
                  className="flex items-center gap-1 text-[var(--color-accent)]"
                  aria-label={`${r.rating} out of 5 stars`}
                >
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="text-[var(--color-fg)]">{r.body}</p>
                <div className="mt-2 flex items-center justify-between text-sm text-[var(--color-fg-muted)]">
                  <span>{r.author}</span>
                  <time dateTime={r.date}>
                    {new Date(r.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex flex-wrap items-center gap-3">
          <a href={site.social.google} target="_blank" rel="noopener" className="cta-ghost">
            See all on Google
          </a>
          <Link href="/#quote" className="cta">
            Book your detail
          </Link>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
