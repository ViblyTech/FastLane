import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { services, site } from "@/lib/site";
import { breadcrumbSchema, cityPageSchema, faqPageSchema } from "@/lib/schema";

const TITLE = "Mobile Auto Detailing Redmond, OR | Fast Lane Detailing";
const DESCRIPTION =
  "Mobile auto detailing in Redmond, Oregon — SW Redmond to Eaglecrest, the Highway 97 corridor, and the Roberts Field side of town. Self-contained trailer at your driveway. Free travel from Bend.";

const neighborhoods = [
  "SW Redmond (Eaglecrest area)",
  "NW Redmond (Antler / Canyon)",
  "NE Redmond (toward Roberts Field)",
  "Highway 97 commercial corridor",
  "Tetherow / Cline Falls Highway side",
  "Terrebonne and Crooked River Ranch by quote",
];

const redmondFaqs = [
  {
    q: "Do you actually drive to Redmond, or is it only Bend?",
    a: "We drive to Redmond regularly. It's a 20-minute run from our Bend base and one of our most-booked service areas. No travel fee inside the 30-mile radius from Bend, and Redmond is well inside that.",
  },
  {
    q: "How do you schedule Redmond appointments?",
    a: "We block Redmond days when we can group multiple appointments — typically one or two weekdays per week. If you're flexible on day, we can usually fit you into an existing run. If you need a specific day, book a few days in advance.",
  },
  {
    q: "Can you come to my office at Roberts Field or along the 97 corridor?",
    a: "Yes. Office-lot details are easy — we set up in a corner of the lot and the car is done by the end of your workday.",
  },
  {
    q: "Do you cover Terrebonne and Crooked River Ranch?",
    a: "By quote. They're a bit outside the standard zone but we go there for ceramic coating and full corrections that justify the drive. Mention it when you book.",
  },
  {
    q: "What services do you bring to Redmond?",
    a: "Everything we offer in Bend: mobile detailing, ceramic coating, paint correction, interior detailing, engine bay cleaning, and odor removal. Same equipment, same trailer, same team.",
  },
];

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/service-area/redmond-or",
  keywords: [
    "mobile detailing Redmond Oregon",
    "auto detailing Redmond OR",
    "car detailing Redmond",
    "mobile car wash Redmond",
    "ceramic coating Redmond Oregon",
    "paint correction Redmond OR",
    "interior detailing Redmond",
    "detailer near me Redmond Oregon",
    "Eaglecrest car detailing",
  ],
});

export default function RedmondCityPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Service area", url: `${site.url}/service-area` },
            { name: "Redmond, OR", url: `${site.url}/service-area/redmond-or` },
          ]),
          cityPageSchema({
            city: "Redmond",
            state: "OR",
            slug: "redmond-or",
            metaTitle: TITLE,
            metaDescription: DESCRIPTION,
          }),
          faqPageSchema(redmondFaqs),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Service area", href: "/service-area" },
          { name: "Redmond, OR", href: "/service-area/redmond-or" },
        ]}
      />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Redmond, Oregon</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          Mobile auto detailing in Redmond, Oregon.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          Redmond is a 20-minute run from our Bend base and one of our regular service areas. We
          work SW Redmond, NW Redmond, the Eaglecrest neighborhoods, the Highway 97 corridor, and
          the Roberts Field side of town. Our trailer carries its own water, power, and supplies,
          so we set up in your driveway, your office lot, or anywhere with a flat spot to park —
          and there is no travel fee.
        </p>
        <aside
          className="mt-10 max-w-3xl rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6"
          aria-label="Quick answer"
        >
          <div className="eyebrow text-[var(--color-fg-muted)]">Quick answer</div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="eyebrow">From Bend</dt>
              <dd className="mt-1 text-base font-semibold">~20 minutes</dd>
            </div>
            <div>
              <dt className="eyebrow">Travel fee</dt>
              <dd className="mt-1 text-base font-semibold">None</dd>
            </div>
            <div>
              <dt className="eyebrow">Typical schedule</dt>
              <dd className="mt-1 text-base font-semibold">1-2 days / week</dd>
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
            to book a Redmond appointment.
          </p>
        </aside>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/#quote" className="cta">
            Book a Redmond detail
          </Link>
          <a href={`tel:${site.phoneE164}`} className="cta-ghost" data-event="cta_call_click">
            Call {site.phone}
          </a>
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">Where we work</div>
            <h2 className="text-h2 mt-4">Redmond neighborhoods and corridors.</h2>
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
              Redmond's grid layout makes most appointments easy — flat driveways, decent
              clearance, and plenty of room to set up. If you're in a townhouse complex or a
              tighter lot off Antler or Sisters Avenue, tell us when you book and we'll figure out
              the best spot together.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <header className="mb-10 max-w-2xl">
          <div className="eyebrow">Services in Redmond</div>
          <h2 className="text-h2 mt-4">What we bring here.</h2>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-3 rounded-card border border-[var(--color-line-soft)] bg-[var(--color-surface)] p-6 transition-colors hover:border-[var(--color-fg)]"
            >
              <div className="eyebrow text-[var(--color-fg-muted)]">{s.startingAt}</div>
              <h3 className="text-xl font-bold">{s.name} in Redmond</h3>
              <p className="text-[var(--color-fg-muted)]">{s.short}</p>
              <span className="mt-2 text-sm text-[var(--color-fg-muted)] group-hover:text-[var(--color-accent)]">
                {s.name} in Redmond, OR →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">FAQ</div>
            <h2 className="text-h2 mt-4">Redmond detailing questions.</h2>
          </header>
          <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
            {redmondFaqs.map((item) => (
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
        heading="Ready for a Redmond detail?"
        body="Free quote, no commitment. We schedule Redmond runs every week."
      />
    </>
  );
}
