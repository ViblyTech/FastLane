import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between gap-8 border-t border-[var(--color-line)] py-8 transition-colors hover:bg-[var(--color-surface)] sm:px-2"
      data-event="service_card_click"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="eyebrow text-[var(--color-fg-muted)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="eyebrow text-[var(--color-fg-muted)]">{service.startingAt}</span>
      </div>
      <div>
        <h3 className="text-2xl font-bold sm:text-3xl">{service.name}</h3>
        <p className="mt-3 max-w-prose text-[var(--color-fg-muted)]">{service.short}</p>
      </div>
      <span className="text-sm text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-accent)]">
        Read more →
      </span>
    </Link>
  );
}
