import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema, organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: "Arial",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
  weight: ["400", "500"],
  preload: false,
  fallback: ["ui-monospace", "SF Mono", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}, Mobile Auto Detailing in Bend, OR`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [...site.keywords],
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0d" },
    { media: "(prefers-color-scheme: light)", color: "#f6f4ef" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <div className="scroll-progress" aria-hidden="true" />
        <JsonLd data={[organizationSchema(), localBusinessSchema(), websiteSchema()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.tagged-events.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
