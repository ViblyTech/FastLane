import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

type Crumb = { name: string; href: string };

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", href: "/" }, ...trail];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          full.map((c) => ({ name: c.name, url: `${site.url}${c.href}` })),
        )}
      />
      <nav aria-label="Breadcrumb" className="container-page pt-10">
        <ol className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--color-fg-muted)]">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-x-3">
                {i > 0 ? <span aria-hidden="true">/</span> : null}
                {last ? (
                  <span className="text-[var(--color-fg)]" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-[var(--color-fg)]">
                    {c.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
