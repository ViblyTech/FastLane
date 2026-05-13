import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { MobileNav } from "./MobileNav";
import { customLogoHref } from "@/lib/logo";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service area" },
  { href: "/reviews", label: "Reviews" },
];

export function Header() {
  const pngHref = customLogoHref();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line-soft)] bg-[color-mix(in_oklab,var(--color-canvas)_85%,transparent)] backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[var(--color-accent)] focus:px-3 focus:py-2 focus:text-sm focus:text-[var(--color-accent-fg)]"
      >
        Skip to content
      </a>
      <div className="container-page relative flex items-center justify-between py-3">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          prefetch
          className="relative z-10 block h-12 sm:h-14"
        >
          <LogoMark pngHref={pngHref} priority />
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

        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 flex -translate-x-1/2 items-center md:hidden"
        >
          <div className="pointer-events-auto">
            <MobileNav pngHref={pngHref} />
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneE164}`}
            className="hidden text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-fg)] lg:inline"
            data-event="cta_call_click"
          >
            {site.phone}
          </a>
          <Link href="/#quote" className="cta" data-event="cta_book_click">
            Book now
          </Link>
        </div>
      </div>
    </header>
  );
}
