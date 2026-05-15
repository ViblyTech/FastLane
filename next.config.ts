import type { NextConfig } from "next";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const googleTagSources =
  "https://www.googletagmanager.com https://www.google-analytics.com https://*.googletagmanager.com https://*.google-analytics.com https://www.googleadservices.com https://*.g.doubleclick.net";

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://plausible.io ${googleTagSources}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: ${googleTagSources}`,
  "font-src 'self' data:",
  `connect-src 'self' ${plausibleDomain ? "https://plausible.io" : ""} ${googleTagSources}`.trim(),
  "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net",
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
