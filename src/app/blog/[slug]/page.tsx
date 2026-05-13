import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { articles, findArticle, type ArticleBlock } from "@/lib/blog";
import { team, services, site } from "@/lib/site";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
} from "@/lib/schema";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    keywords: article.keywords,
  });
}

export default async function ArticlePage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();

  const author = team.find((t) => t.slug === article.author);
  const ctaService = article.ctaService
    ? services.find((s) => s.slug === article.ctaService)
    : undefined;
  const related = article.related
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <JsonLd
        data={[
          articleSchema(article),
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Blog", url: `${site.url}/blog` },
            { name: article.title, url: `${site.url}/blog/${article.slug}` },
          ]),
          faqPageSchema(article.faqs),
        ]}
      />

      <Breadcrumbs
        trail={[
          { name: "Blog", href: "/blog" },
          { name: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      <article className="container-page pb-16 pt-12 sm:pt-16">
        <div className="eyebrow flex flex-wrap items-center gap-4 text-[var(--color-fg-muted)]">
          <span>
            Updated{" "}
            <time dateTime={article.updatedAt} className="text-[var(--color-fg)]">
              {new Date(article.updatedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </span>
          <span aria-hidden="true">·</span>
          <span>{article.readMinutes} min read</span>
          {author ? (
            <>
              <span aria-hidden="true">·</span>
              <span>
                By{" "}
                <Link
                  href={`/about#${author.slug}`}
                  className="text-[var(--color-fg)] underline underline-offset-4"
                >
                  {author.name}
                </Link>
              </span>
            </>
          ) : null}
        </div>

        <h1 className="article-headline text-h1 mt-6 max-w-4xl">{article.title}</h1>

        <p className="article-intro mt-8 max-w-3xl text-xl leading-relaxed text-[var(--color-fg)] sm:text-2xl">
          {article.intro}
        </p>

        {article.publishedAt !== article.updatedAt ? (
          <p className="mt-6 max-w-3xl text-xs text-[var(--color-fg-muted)]">
            Originally published{" "}
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            . Reviewed and updated{" "}
            <time dateTime={article.updatedAt}>
              {new Date(article.updatedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            .
          </p>
        ) : null}

        <div className="prose-y mt-16 max-w-3xl space-y-14">
          {article.sections.map((section, idx) => (
            <section
              key={`${section.heading}-${idx}`}
              className="article-section space-y-6"
            >
              <h2 className="text-h2">{section.heading}</h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </section>
          ))}

          {article.faqs.length > 0 ? (
            <section className="space-y-6 border-t border-[var(--color-line-soft)] pt-14">
              <h2 className="text-h2">Frequently asked</h2>
              <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
                {article.faqs.map((item) => (
                  <li key={item.q}>
                    <details className="group py-5">
                      <summary
                        className="flex cursor-pointer items-start justify-between gap-6 text-lg font-semibold tracking-tight"
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
                      <p className="mt-3 text-[var(--color-fg-muted)]">{item.a}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {ctaService ? (
            <aside className="rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6 sm:p-8">
              <div className="eyebrow">Related service</div>
              <h3 className="mt-3 text-2xl font-bold">{ctaService.name} in Bend</h3>
              <p className="mt-2 max-w-prose text-[var(--color-fg-muted)]">{ctaService.short}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/services/${ctaService.slug}`} className="cta-ghost">
                  Service details
                </Link>
                <Link href="/#quote" className="cta">
                  Get a quote
                </Link>
              </div>
            </aside>
          ) : null}

          {author ? (
            <aside className="flex items-start gap-6 border-t border-[var(--color-line-soft)] pt-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-soft)] font-mono text-sm">
                {author.name[0]}
              </div>
              <div>
                <div className="eyebrow">Author</div>
                <h3 className="mt-1 text-lg font-bold">{author.name}</h3>
                <p className="text-sm text-[var(--color-fg-muted)]">{author.role}</p>
                <p className="mt-3 text-[var(--color-fg-muted)]">{author.bio}</p>
              </div>
            </aside>
          ) : null}
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-y border-[var(--color-line-soft)] bg-[var(--color-canvas)]">
          <div className="container-page py-20">
            <header className="mb-10 max-w-2xl">
              <div className="eyebrow">Keep reading</div>
              <h2 className="text-h2 mt-4">Related</h2>
            </header>
            <ul className="grid gap-6 sm:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/blog/${r.slug}`}
                    className="group flex flex-col gap-3 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-fg)]"
                  >
                    <div className="eyebrow flex items-center gap-3 text-[var(--color-fg-muted)]">
                      <span>{r.readMinutes} min</span>
                    </div>
                    <h3 className="text-xl font-bold transition-colors group-hover:text-[var(--color-accent)]">
                      {r.title}
                    </h3>
                    <p className="text-[var(--color-fg-muted)]">{r.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CallToAction />
    </>
  );
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-lg leading-relaxed text-[var(--color-fg)]">{block.text}</p>;
    case "ul":
      return (
        <ul className="list-none space-y-3 border-l border-[var(--color-line-soft)] pl-6">
          {block.items.map((item, i) => (
            <li key={i} className="text-lg text-[var(--color-fg)]">
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-3 pl-6 marker:text-[var(--color-fg-muted)]">
          {block.items.map((item, i) => (
            <li key={i} className="pl-2 text-lg text-[var(--color-fg)]">
              {item}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-card border border-[var(--color-line-soft)]">
          <table className="min-w-full divide-y divide-[var(--color-line-soft)] text-left text-sm">
            <thead className="bg-[var(--color-surface)]">
              <tr>
                {block.headers.map((header, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="px-4 py-3 font-semibold text-[var(--color-fg)]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-line-soft)]">
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 align-top text-[var(--color-fg-muted)]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <p className="border-l-2 border-[var(--color-accent)] pl-4 italic text-[var(--color-fg)]">
          {block.text}
        </p>
      );
    default:
      return null;
  }
}
