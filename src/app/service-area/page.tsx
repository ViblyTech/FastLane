import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Marquee } from "@/components/Marquee";
import { CallToAction } from "@/components/CallToAction";
import { site } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";

const areas: Array<{ city: string; note: string; drive: string }> = [
  {
    city: "Bend",
    note: "Our home base. From the Old Mill District to NE, NW, and the Westside.",
    drive: "0 minutes",
  },
  {
    city: "Redmond",
    note: "Regular runs. SW and NE Redmond, plus Tetherow-adjacent stops out the highway.",
    drive: "20 minutes",
  },
  {
    city: "Sisters",
    note: "Weekly mobile runs in season. Ranch and craftsman driveways no problem.",
    drive: "25 minutes",
  },
  {
    city: "Sunriver",
    note: "Vacation rentals, primary residences, garages and outdoor pads.",
    drive: "25 minutes",
  },
  {
    city: "Tumalo",
    note: "On the way to Bend. Schedule before or after a Bend appointment for a quicker booking.",
    drive: "15 minutes",
  },
  {
    city: "La Pine",
    note: "Quoted by job. Ceramic and correction welcome; mention it when you book.",
    drive: "35 minutes",
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Mobile Detailing Service Area | Bend, Redmond, Sisters, Sunriver",
  description:
    "Mobile auto detailing across Central Oregon: Bend, Redmond, Sisters, Sunriver, Tumalo, La Pine. Free travel within a 30-mile radius of Bend.",
  path: "/service-area",
  keywords: [
    "mobile detailing Bend Oregon",
    "mobile detailing Redmond Oregon",
    "mobile detailing Sisters Oregon",
    "mobile detailing Sunriver Oregon",
    "mobile detailing Tumalo Oregon",
    "mobile detailing La Pine Oregon",
    "auto detailing Central Oregon",
    "car detailing service area Bend",
    "mobile detailer near me",
  ],
});

export default function ServiceAreaPage() {
  const placeSchemas = areas.map((a) => ({
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${a.city}, Oregon`,
    address: {
      "@type": "PostalAddress",
      addressLocality: a.city,
      addressRegion: "OR",
      addressCountry: "US",
    },
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Service area", url: `${site.url}/service-area` },
          ]),
          ...placeSchemas,
        ]}
      />
      <Breadcrumbs trail={[{ name: "Service area", href: "/service-area" }]} />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Service area</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          Mobile auto detailing across Central Oregon.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          Standard mobile detailing service area is a {site.serviceRadiusMiles}-mile radius from
          Bend, Oregon — no travel fee inside it. We cover Bend, Redmond, Sisters, Sunriver,
          Tumalo, and La Pine. Outside that radius, we still travel for ceramic coating and bigger
          paint correction jobs. Ask when you book.
        </p>
      </section>

      <Marquee items={[...site.serviceAreas, "Free travel inside the zone"]} />

      <section className="container-page py-20">
        <div className="grid gap-px overflow-hidden rounded-card border border-[var(--color-line-soft)] bg-[var(--color-line-soft)] sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <article
              key={a.city}
              className="flex flex-col gap-3 bg-[var(--color-surface)] p-6"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-2xl font-bold">{a.city}</h2>
                <span className="eyebrow">{a.drive}</span>
              </div>
              <p className="text-[var(--color-fg-muted)]">{a.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">Outside our zone?</div>
            <h2 className="text-h2 mt-4">Ask anyway.</h2>
          </header>
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-fg-muted)]">
            <p>
              We travel for ceramic coating, full corrections, and packages that justify the trip.
              If you are in Madras, Prineville, or further out, send a message and we will work
              out the logistics.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/#quote" className="cta">
                Get a quote
              </Link>
              <Link href="/contact" className="cta-ghost">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
