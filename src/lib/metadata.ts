import type { Metadata } from "next";
import { site } from "./site";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
  keywords?: string[];
}): Metadata {
  const url = `${site.url}${opts.path ?? ""}`;
  const image = opts.ogImage ?? `${site.url}/opengraph-image`;
  const keywords = opts.keywords ?? [...site.keywords];

  return {
    title: opts.title,
    description: opts.description,
    keywords,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
    robots: opts.noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "US-OR",
      "geo.placename": "Bend",
      "geo.position": `${site.geo.lat};${site.geo.lng}`,
      ICBM: `${site.geo.lat}, ${site.geo.lng}`,
    },
  };
}
