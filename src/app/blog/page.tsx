import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { articles } from "@/lib/blog";
import { team, site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Detailing notes from Bend, Oregon",
  description:
    "Practical, plain-language detailing guides from Fast Lane Detailing in Bend, Oregon. Ceramic coating, paint correction, winter prep, mag chloride, and more.",
  path: "/blog",
});

export default function BlogIndex() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Blog", url: `${site.url}/blog` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${site.url}/blog#blog`,
            name: `${site.name} — Detailing notes`,
            url: `${site.url}/blog`,
            publisher: { "@id": `${site.url}/#business` },
            blogPost: sorted.map((a) => ({
              "@type": "BlogPosting",
              headline: a.title,
              url: `${site.url}/blog/${a.slug}`,
              datePublished: a.publishedAt,
              dateModified: a.updatedAt,
            })),
          },
        ]}
      />
      <Breadcrumbs trail={[{ name: "Blog", href: "/blog" }]} />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Notes from the trailer</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          Practical guides on paint, coatings, and Central Oregon weather.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          What we tell customers on the driveway, written down. Plain language, real numbers, no
          upsell theater.
        </p>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page">
          <ul className="grid divide-y divide-[var(--color-line)] border-b border-[var(--color-line)]">
            {sorted.map((article) => {
              const author = team.find((t) => t.slug === article.author);
              return (
                <li key={article.slug}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group flex flex-col gap-4 py-10 transition-colors hover:bg-[var(--color-surface)] sm:gap-6"
                  >
                    <div className="eyebrow flex flex-wrap items-center gap-4 text-[var(--color-fg-muted)]">
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span>{article.readMinutes} min read</span>
                      {author ? (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>By {author.name}</span>
                        </>
                      ) : null}
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                      <span className="transition-colors group-hover:text-[var(--color-accent)]">
                        {article.title}
                      </span>
                    </h2>
                    <p className="max-w-prose text-[var(--color-fg-muted)]">{article.excerpt}</p>
                    <span className="text-sm text-[var(--color-fg-muted)] group-hover:text-[var(--color-fg)]">
                      Read article →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
