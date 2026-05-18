"use client";

/**
 * Google Consent Mode v2 helpers.
 * Default state is set in layout.tsx BEFORE GTM/gtag loads, so this module
 * only handles user-driven updates from the consent banner.
 */

export type ConsentState = "granted" | "denied" | null;

const STORAGE_KEY = "fastlane-consent-v1";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "granted" || v === "denied") return v;
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(state: "granted" | "denied") {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, state);
  } catch {
    // ignore storage errors (private browsing, etc.)
  }
  applyConsent(state);
}

export function applyConsent(state: "granted" | "denied") {
  if (typeof window === "undefined") return;

  const payload = {
    ad_storage: state,
    analytics_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    functionality_storage: "granted",
    security_storage: "granted",
  };

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", payload);
  } else {
    (window.dataLayer ||= []).push({ event: "consent_update", ...payload });
  }
}
