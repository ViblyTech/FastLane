"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { site } from "@/lib/site";

const items = [
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
        className="flex h-10 w-10 items-center justify-center text-[var(--color-fg)] md:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
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
          className="mobile-nav fixed inset-0 z-50 flex flex-col bg-[var(--color-canvas)] md:hidden"
        >
          <div className="container-page flex items-center justify-between py-4">
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
              className="flex h-10 w-10 items-center justify-center text-[var(--color-fg)]"
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
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
            className="container-page flex-1 overflow-y-auto pb-8 pt-4"
          >
            <ul className="flex flex-col divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
              {items.map((item, i) => (
                <li
                  key={item.href}
                  className="mobile-nav-item"
                  style={{ animationDelay: `${100 + i * 40}ms` }}
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
          </nav>

          <div className="container-page flex flex-col gap-3 border-t border-[var(--color-line-soft)] py-6">
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
