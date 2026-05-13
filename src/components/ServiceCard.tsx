import Link from "next/link";
import type { Service } from "@/lib/site";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between gap-8 border-t border-[var(--color-line)] py-8 transition-colors hover:bg-[var(--color-surface)] sm:px-3"
      data-event="service_card_click"
    >
      <span
        className="pointer-events-none absolute right-3 top-8 hidden h-px w-0 bg-[var(--color-accent)] transition-all duration-500 group-hover:w-12 sm:block"
        aria-hidden="true"
      />
      <div className="flex items-baseline justify-between gap-4">
        <span className="eyebrow text-[var(--color-fg-muted)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="eyebrow text-[var(--color-fg-muted)]">{service.startingAt}</span>
      </div>
      <div>
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{service.name}</h3>
        <p className="mt-3 max-w-prose text-[var(--color-fg-muted)]">{service.short}</p>
      </div>
      <span className="flex items-center gap-2 text-sm text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-accent)]">
        {service.name} in Bend, OR
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
