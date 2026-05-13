"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { site, services } from "@/lib/site";

const primary = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service area" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="-mr-2 flex h-11 w-11 items-center justify-center text-[var(--color-fg)] md:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </svg>
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          style={{ backgroundColor: "var(--color-canvas)", color: "var(--color-fg)" }}
          className="mobile-nav fixed inset-0 z-50 flex flex-col md:hidden"
        >
          <div className="flex items-center justify-between border-b border-[var(--color-line-soft)] px-6 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-lg"
              aria-label={`${site.name} home`}
            >
              <LogoMark />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="-mr-2 flex h-11 w-11 items-center justify-center text-[var(--color-fg)]"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
          </div>

          <nav
            aria-label="Mobile primary"
            className="flex-1 overflow-y-auto overscroll-contain"
          >
            <div className="px-6 pb-8 pt-4">
              <ul>
                {primary.map((item, i) => (
                  <li
                    key={item.href}
                    className="mobile-nav-item border-b border-[var(--color-line-soft)] last:border-b-0"
                    style={{ animationDelay: `${60 + i * 28}ms` }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between gap-4 py-5 text-3xl font-semibold tracking-tight"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-[var(--color-fg-muted)]">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="eyebrow mt-10">Services</div>
              <ul className="mt-3">
                {services.map((s, i) => (
                  <li
                    key={s.slug}
                    className="mobile-nav-item border-b border-[var(--color-line-soft)] last:border-b-0"
                    style={{ animationDelay: `${260 + i * 24}ms` }}
                  >
                    <Link
                      href={`/services/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between gap-4 py-3.5 text-base"
                    >
                      <span>{s.name}</span>
                      <span aria-hidden="true" className="text-[var(--color-fg-muted)]">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex flex-col gap-3 border-t border-[var(--color-line-soft)] px-6 py-5">
            <a
              href={`tel:${site.phoneE164}`}
              onClick={() => setOpen(false)}
              className="cta-ghost w-full justify-between"
              data-event="cta_call_click"
            >
              <span>Call {site.phone}</span>
              <span aria-hidden="true">→</span>
            </a>
            <Link
              href="/#quote"
              onClick={() => setOpen(false)}
              className="cta w-full justify-between"
              data-event="cta_book_click"
            >
              <span>Book now</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
