import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { MobileNav } from "./MobileNav";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service area" },
  { href: "/reviews", label: "Reviews" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line-soft)] bg-[color-mix(in_oklab,var(--color-canvas)_85%,transparent)] backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--color-accent)] focus:px-3 focus:py-2 focus:text-sm focus:text-[var(--color-accent-fg)]"
      >
        Skip to content
      </a>
      <div className="container-page flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-lg sm:text-xl"
          aria-label={`${site.name} home`}
          prefetch
        >
          <LogoMark />
        </Link>
        <nav aria-label="Primary" className="hidden gap-7 text-sm md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              prefetch
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneE164}`}
            className="hidden text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] lg:inline"
            data-event="cta_call_click"
          >
            {site.phone}
          </a>
          <MobileNav />
          <Link href="/#quote" className="cta" data-event="cta_book_click">
            Book now
          </Link>
        </div>
      </div>
    </header>
  );
}
