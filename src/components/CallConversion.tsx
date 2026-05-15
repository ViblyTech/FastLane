"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

const CONVERSION_TARGET = "AW-18075280930/AC_aCP6xz5gcEKLM-6pD";

function fireCallConversion() {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: CONVERSION_TARGET });
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: "conversion",
      send_to: CONVERSION_TARGET,
    });
  }
}

/**
 * Tracks Google Ads phone-call conversions for every `tel:` link click anywhere
 * on the site. Also exposes window.gtag_report_conversion for any inline
 * onClick handlers that want to fire the conversion explicitly with a URL.
 */
export function CallConversion() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.gtag_report_conversion = function (url) {
      const callback = function () {
        if (typeof url !== "undefined") {
          window.location.href = url;
        }
      };
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: CONVERSION_TARGET,
          event_callback: callback,
        });
        // Safety: fire callback after 1s in case gtag callback never resolves
        if (typeof url !== "undefined") {
          window.setTimeout(callback, 1000);
        }
      } else {
        callback();
      }
      return false;
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a[href^='tel:']") as HTMLAnchorElement | null;
      if (anchor) fireCallConversion();
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
