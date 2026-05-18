import type { NextConfig } from "next";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

// Per Google Tag Platform CSP guidance:
// https://developers.google.com/tag-platform/security/guides/csp
// Covers GTM, GA4, Google Ads conversion measurement, Floodlight, and
// Consent Mode v2 messaging frames.
const googleScriptSrc = [
  "https://*.googletagmanager.com",
  "https://tagmanager.google.com",
].join(" ");

const googleImgSrc = [
  "https://*.google-analytics.com",
  "https://*.analytics.google.com",
  "https://*.googletagmanager.com",
  "https://*.g.doubleclick.net",
  "https://*.google.com",
  "https://*.googleadservices.com",
].join(" ");

const googleConnectSrc = [
  "https://*.google-analytics.com",
  "https://*.analytics.google.com",
  "https://*.googletagmanager.com",
  "https://*.g.doubleclick.net",
  "https://*.google.com",
  "https://*.googleadservices.com",
].join(" ");

const googleFrameSrc = [
  "https://www.googletagmanager.com",
  "https://td.doubleclick.net",
  "https://bid.g.doubleclick.net",
  "https://*.fundingchoicesmessages.google.com",
].join(" ");

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://plausible.io ${googleScriptSrc}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${googleImgSrc}`,
  "font-src 'self' data:",
  `connect-src 'self' ${plausibleDomain ? "https://plausible.io" : ""} ${googleConnectSrc}`.trim(),
  `frame-src 'self' ${googleFrameSrc}`,
  "frame-ancestors 'none'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
];

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()",
  },
  {
    key: "Content-Security-Policy",
    value: cspDirectives.join("; "),
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/:path*\\.(png|jpg|jpeg|svg|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default config;
