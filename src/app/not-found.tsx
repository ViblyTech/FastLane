import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-32 text-center">
      <div className="eyebrow text-[var(--color-fg-muted)]">404</div>
      <h1 className="mt-4 text-h1">Wrong turn.</h1>
      <p className="mt-4 text-[var(--color-fg-muted)]">
        We could not find that page. Try one of these instead.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full border border-[var(--color-line-soft)] px-5 py-2 text-sm hover:border-[var(--color-fg)]"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="rounded-full border border-[var(--color-line-soft)] px-5 py-2 text-sm hover:border-[var(--color-fg)]"
        >
          Services
        </Link>
        <Link
          href="/#quote"
          className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm text-[var(--color-accent-fg)] hover:opacity-90"
        >
          Get a quote
        </Link>
      </div>
    </section>
  );
}
