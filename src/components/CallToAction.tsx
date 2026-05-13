import Link from "next/link";
import { site } from "@/lib/site";

export function CallToAction({
  heading = "Ready when you are.",
  body = "Free quote, no commitment. Most appointments confirmed same day.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="border-y border-[var(--color-line-soft)] bg-[var(--color-surface)]">
      <div className="container-page flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-h2 max-w-xl">{heading}</h2>
          <p className="mt-3 max-w-prose text-[var(--color-fg-muted)]">{body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/#quote" className="cta" data-event="cta_book_click">
            Get a quote
          </Link>
          <a
            href={`tel:${site.phoneE164}`}
            className="cta-ghost"
            data-event="cta_call_click"
          >
            Call {site.phone}
          </a>
          <a
            href={`sms:${site.phoneE164}`}
            className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
            data-event="cta_text_click"
          >
            or text
          </a>
        </div>
      </div>
    </section>
  );
}
