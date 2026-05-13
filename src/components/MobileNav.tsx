"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { site, services } from "@/lib/site";

const company = [
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-area", label: "Service area" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
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

  const panel = (
    <div
      id="mobile-nav-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      style={{
        backgroundColor: "var(--color-canvas)",
        color: "var(--color-fg)",
        position: "fixed",
        inset: 0,
        zIndex: 100,
      }}
      className="mobile-nav flex flex-col md:hidden"
    >
      <div className="flex items-center justify-between border-b border-[var(--color-line-soft)] px-6 py-4">
        <Link
          href="/"
          onClick={close}
          className="text-lg"
          aria-label={`${site.name} home`}
        >
          <LogoMark />
        </Link>
        <button
          type="button"
          onClick={close}
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
        <div className="px-6 pb-8 pt-2">
          <details
            open
            className="mobile-nav-group border-b border-[var(--color-line-soft)]"
          >
            <summary className="mobile-nav-summary">
              <span>Services</span>
              <span aria-hidden="true" className="mobile-nav-plus">
                +
              </span>
            </summary>
            <ul className="mobile-nav-children">
              <li>
                <Link href="/services" onClick={close} className="mobile-nav-child">
                  <span>Service menu</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={close}
                    className="mobile-nav-child"
                  >
                    <span>{s.name}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <details className="mobile-nav-group">
            <summary className="mobile-nav-summary">
              <span>Company</span>
              <span aria-hidden="true" className="mobile-nav-plus">
                +
              </span>
            </summary>
            <ul className="mobile-nav-children">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="mobile-nav-child"
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </nav>

      <div className="flex flex-col gap-3 border-t border-[var(--color-line-soft)] px-6 py-5">
        <a
          href={`tel:${site.phoneE164}`}
          onClick={close}
          className="cta-ghost w-full justify-between"
          data-event="cta_call_click"
        >
          <span>Call {site.phone}</span>
          <span aria-hidden="true">→</span>
        </a>
        <Link
          href="/#quote"
          onClick={close}
          className="cta w-full justify-between"
          data-event="cta_book_click"
        >
          <span>Book now</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );

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

      {mounted && open ? createPortal(panel, document.body) : null}
    </>
  );
}
