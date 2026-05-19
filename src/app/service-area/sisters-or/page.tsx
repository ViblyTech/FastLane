import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { services, site } from "@/lib/site";
import { breadcrumbSchema, cityPageSchema, faqPageSchema } from "@/lib/schema";

const TITLE = "Mobile Auto Detailing Sisters, OR | Fast Lane Detailing";
const DESCRIPTION =
  "Mobile auto detailing in Sisters, Oregon — ranch driveways, craftsman properties, and downtown lots. Self-contained trailer comes to you. 25 minutes from Bend, no travel fee.";

const neighborhoods = [
  "Downtown Sisters (Cascade & Hood)",
  "Crossroads / Tollgate",
  "Squaw Creek Canyon",
  "Camp Sherman by quote",
  "Black Butte Ranch (gate-friendly)",
  "Cloverdale / Highway 20 corridor",
];

const sistersFaqs = [
  {
    q: "Is Sisters too far for a mobile detail?",
    a: "Not at all. Sisters is 25 minutes from our Bend base and inside our standard 30-mile no-travel-fee zone. We run Sisters weekly in season and on demand off-season.",
  },
  {
    q: "Do you come to Black Butte Ranch or other gated communities?",
    a: "Yes. Tell us when you book and we'll coordinate gate access with you. The trailer fits standard residential entries.",
  },
  {
    q: "Will dust and dirt-road grit be a problem for a ceramic coating?",
    a: "It's the reason a coating is worth it out here. Coated paint shrugs off the gravel-road dust and mag chloride that beat up unprotected clear coat. We've done coatings on plenty of dirt-road regulars in Sisters.",
  },
  {
    q: "How far in advance should I book for Sisters?",
    a: "A few days for a basic detail, a week or two for ceramic coating or paint correction. In summer we book up faster — call early if you have a window.",
  },
  {
    q: "Do you service Camp Sherman or other outlying spots?",
    a: "Camp Sherman by quote. We travel for ceramic coating and bigger correction jobs that justify the drive. Ask when you book.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/service-area/sisters-or",
  keywords: [
    "mobile detailing Sisters Oregon",
    "auto detailing Sisters OR",
    "car detailing Sisters",
    "mobile car wash Sisters",
    "ceramic coating Sisters Oregon",
    "paint correction Sisters OR",
    "interior detailing Sisters",
    "Black Butte Ranch detailing",
    "Camp Sherman car detailing",
  ],
});

export default function SistersCityPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Service area", url: `${site.url}/service-area` },
            { name: "Sisters, OR", url: `${site.url}/service-area/sisters-or` },
          ]),
          cityPageSchema({
            city: "Sisters",
            state: "OR",
            slug: "sisters-or",
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
          }),
          faqPageSchema(sistersFaqs),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Service area", href: "/service-area" },
          { name: "Sisters, OR", href: "/service-area/sisters-or" },
        ]}
      />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Sisters, Oregon</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          Mobile auto detailing in Sisters, Oregon.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          Sisters is a 25-minute drive from Bend and one of our regular service areas. Ranch
          driveways, craftsman properties, downtown lots — none of it is a problem. The trailer is
          fully self-contained, so we do not need water or power from your house, and we work
          equally well at a ranch on Indian Ford Road or a townhome behind the bakery downtown.
        </p>
        <aside
          className="mt-10 max-w-3xl rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6"
          aria-label="Quick answer"
        >
          <div className="eyebrow text-[var(--color-fg-muted)]">Quick answer</div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">From Bend</dt>
              <dd className="mt-1 text-base font-semibold">~25 minutes</dd>
            </div>
            <div>
              <dt className="eyebrow">Travel fee</dt>
              <dd className="mt-1 text-base font-semibold">None</dd>
            </div>
            <div>
              <dt className="eyebrow">Best to book</dt>
              <dd className="mt-1 text-base font-semibold">A few days ahead</dd>
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
            to book a Sisters appointment.
          </p>
        </aside>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/#quote" className="cta">
            Book a Sisters detail
          </Link>
          <a href={`tel:${site.phoneE164}`} className="cta-ghost" data-event="cta_call_click">
            Call {site.phone}
          </a>
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">Where we run</div>
            <h2 className="text-h2 mt-4">Sisters neighborhoods we cover.</h2>
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
              Sisters drivers see more dust, dirt road grit, and mag chloride than the average
              Bend commuter, which is why ceramic coating is so popular out here. Coated paint
              washes faster and holds up to the conditions. If you live off a gravel road, we'll
              talk through whether a coating or a hand wash schedule fits your driving better
              before quoting anything.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <header className="mb-10 max-w-2xl">
          <div className="eyebrow">Services in Sisters</div>
          <h2 className="text-h2 mt-4">What we offer here.</h2>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-3 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-fg)]"
            >
              <div className="eyebrow text-[var(--color-fg-muted)]">{s.startingAt}</div>
              <h3 className="text-xl font-bold">{s.name} in Sisters</h3>
              <p className="text-[var(--color-fg-muted)]">{s.short}</p>
              <span className="mt-2 text-sm text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)]">
                {s.name} in Sisters, OR →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">FAQ</div>
            <h2 className="text-h2 mt-4">Sisters detailing questions.</h2>
          </header>
          <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
            {sistersFaqs.map((item) => (
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
        heading="Ready for a Sisters detail?"
        body="Free quote, no commitment. We run Sisters weekly in season."
      />
    </>
  );
}
