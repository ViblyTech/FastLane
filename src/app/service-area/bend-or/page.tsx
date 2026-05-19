import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { services, site } from "@/lib/site";
import { breadcrumbSchema, cityPageSchema, faqPageSchema } from "@/lib/schema";

const TITLE = "Mobile Auto Detailing Bend, OR | Fast Lane Detailing";
const DESCRIPTION =
  "Mobile auto detailing across Bend, Oregon — Old Mill, NW Crossing, NE Bend, Westside, the Tetherow corridor. Self-contained trailer at your driveway. 5.0 stars, owner-operated.";

const neighborhoods = [
  "Old Mill District",
  "Downtown / Drake Park",
  "Westside (NW Crossing, Awbrey Butte)",
  "NE Bend (Pilot Butte, Mountain View)",
  "SE Bend (Larkspur, Brookswood)",
  "Tetherow / Shevlin Park corridor",
  "Stonebrook, Skyliner Summit, and the river corridor",
];

const bendFaqs = [
  {
    q: "Do you come to my house in Bend?",
    a: "Yes. Mobile auto detailing in Bend means we park in your driveway, your garage apron, or the curb out front and do the work there. The trailer carries its own water, power, and supplies — no hookups from the house.",
  },
  {
    q: "Do you work in HOAs and condo lots around Bend?",
    a: "We have worked in Old Mill, Northwest Crossing, Tetherow, Awbrey Glen, and Mountain Village without issues. We use biodegradable soaps and capture runoff where the property requires it. If your HOA needs anything specific, tell us when you book.",
  },
  {
    q: "Can you come to my office downtown or in Old Mill?",
    a: "Yes. Many of our weekday appointments are office-lot details — Old Mill, Brooks Alley, the Box Factory, the Franklin corridor. As long as there is a flat spot to park, we can work there.",
  },
  {
    q: "How quickly can you come out in Bend?",
    a: "Same week is normal. Same day depending on schedule. Call or text (541) 640-0612 and we'll confirm same-day in most cases.",
  },
  {
    q: "What does mobile detailing cost in Bend?",
    a: "Maintenance washes start at $80. Full interior or exterior details run $200 to $350. Ceramic coating starts around $800. We quote every job after we see the car — no surprise add-ons.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/service-area/bend-or",
  keywords: [
    "mobile detailing Bend Oregon",
    "auto detailing Bend OR",
    "car detailing Bend",
    "mobile car wash Bend",
    "ceramic coating Bend OR",
    "paint correction Bend Oregon",
    "interior detailing Bend",
    "detailer near me Bend Oregon",
    "Old Mill District car detailing",
    "NW Crossing car detailing",
  ],
});

export default function BendCityPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Service area", url: `${site.url}/service-area` },
            { name: "Bend, OR", url: `${site.url}/service-area/bend-or` },
          ]),
          cityPageSchema({
            city: "Bend",
            state: "OR",
            slug: "bend-or",
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
          }),
          faqPageSchema(bendFaqs),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Service area", href: "/service-area" },
          { name: "Bend, OR", href: "/service-area/bend-or" },
        ]}
      />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Bend, Oregon</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          Mobile auto detailing in Bend, Oregon.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          Bend is our home base. We work every neighborhood — Old Mill to Awbrey Butte, NE Bend to
          the Westside, the Shevlin corridor down through the Tetherow and Brookswood
          subdivisions. The trailer is fully self-contained, so we do not need a hookup from your
          house. We pull up, set up, and the car is clean before lunch.
        </p>
        <aside
          className="mt-10 max-w-3xl rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6"
          aria-label="Quick answer"
        >
          <div className="eyebrow text-[var(--color-fg-muted)]">Quick answer</div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">City</dt>
              <dd className="mt-1 text-base font-semibold">Bend, Oregon</dd>
            </div>
            <div>
              <dt className="eyebrow">Travel fee</dt>
              <dd className="mt-1 text-base font-semibold">None</dd>
            </div>
            <div>
              <dt className="eyebrow">Same-week booking</dt>
              <dd className="mt-1 text-base font-semibold">Almost always</dd>
            </div>
          </dl>
          <p className="mt-5 text-sm text-[var(--color-fg-muted)]">
            Call or text{" "}
            <a
              href={`tel:${site.phoneE164}`}
              className="text-[var(--color-fg)] underline underline-offset-4"
            >
              {site.phone}
            </a>{" "}
            to book a Bend appointment.
          </p>
        </aside>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/#quote" className="cta">
            Book a Bend detail
          </Link>
          <a href={`tel:${site.phoneE164}`} className="cta-ghost" data-event="cta_call_click">
            Call {site.phone}
          </a>
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">Neighborhoods we run</div>
            <h2 className="text-h2 mt-4">Where we work in Bend.</h2>
          </header>
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {neighborhoods.map((n) => (
                <li
                  key={n}
                  className="border-l-2 border-[var(--color-accent)] pl-3 text-[var(--color-fg-muted)]"
                >
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-prose text-[var(--color-fg-muted)]">
              If your spot is tight — a downtown garage, a tucked driveway, a narrow alley — tell
              us when you book. We have worked in most of the strange parking situations Bend
              throws at us, including condo garages off Franklin and street-only parking on the
              Westside. If your spot will not work, we figure out a location that works for both
              of us — a parking lot, a friend&apos;s driveway, your office, whatever makes sense.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <header className="mb-10 max-w-2xl">
          <div className="eyebrow">Services in Bend</div>
          <h2 className="text-h2 mt-4">What we do here.</h2>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-3 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-fg)]"
            >
              <div className="eyebrow text-[var(--color-fg-muted)]">{s.startingAt}</div>
              <h3 className="text-xl font-bold">{s.name} in Bend</h3>
              <p className="text-[var(--color-fg-muted)]">{s.short}</p>
              <span className="mt-2 text-sm text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)]">
                {s.name} in Bend, OR →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">FAQ</div>
            <h2 className="text-h2 mt-4">Bend detailing questions.</h2>
          </header>
          <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
            {bendFaqs.map((item) => (
              <li key={item.q}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 text-left text-lg font-medium sm:text-xl">
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 select-none text-[var(--color-fg-muted)] transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-prose text-[var(--color-fg-muted)]">{item.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction
        heading="Ready for a Bend detail?"
        body="Free quote, no commitment. Same-week booking, most days."
      />
    </>
  );
}
