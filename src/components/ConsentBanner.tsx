"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readConsent, writeConsent, applyConsent } from "@/lib/consent";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const current = readConsent();
    if (current === null) {
      // No choice yet — show banner.
      const t = window.setTimeout(() => setVisible(true), 600);
      return () => window.clearTimeout(t);
    }
    // User already chose — re-apply stored state on every page load so
    // updates to gtag's consent are kept in sync.
    applyConsent(current);
  }, []);

  if (!visible) return null;

  const accept = () => {
    writeConsent("granted");
    setVisible(false);
  };

  const reject = () => {
    writeConsent("denied");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="consent-banner fixed inset-x-3 bottom-3 z-[80] rounded-lg border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-4 shadow-2xl sm:inset-x-auto sm:left-4 sm:bottom-4 sm:max-w-md sm:p-5"
    >
      <p className="text-sm leading-relaxed text-[var(--color-fg)]">
        We use cookies to understand traffic and measure ad performance. You can{" "}
        <span className="font-medium">accept</span> or{" "}
        <span className="font-medium">reject</span> non-essential cookies. Essential
        cookies (the ones that keep the site working) stay on either way.
      </p>
      <p className="mt-2 text-xs text-[var(--color-fg-muted)]">
        Read our{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-2 hover:text-[var(--color-fg)]"
        >
          privacy policy
        </Link>{" "}
        for the details.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={accept}
          className="cta px-5 py-2 text-sm"
          data-event="consent_accept"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={reject}
          className="cta-ghost px-5 py-2 text-sm"
          data-event="consent_reject"
        >
          Reject non-essential
        </button>
      </div>
    </div>
  );
}
