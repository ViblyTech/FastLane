import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { team, site } from "@/lib/site";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Fast Lane Detailing | Bend, OR Mobile Auto Detailers",
  description:
    "Meet Luka and Ian, the owner-operated mobile auto detailing team in Bend, Oregon. Founded 2024 with 10+ years of paint, polish, and ceramic experience.",
  path: "/about",
  keywords: [
    "Fast Lane Detailing Bend Oregon",
    "Bend OR car detailers",
    "Luka Ian Fast Lane Detailing",
    "mobile detailer Bend Oregon",
    "owner-operated detailing Bend",
    "best mobile detailer Bend",
    "auto detailers Central Oregon",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "About", url: `${site.url}/about` },
          ]),
          ...team.map((m) => personSchema(m)),
        ]}
      />
      <Breadcrumbs trail={[{ name: "About", href: "/about" }]} />

      <section className="container-page pb-16 pt-12 sm:pt-16">
        <div className="eyebrow">About</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          About Fast Lane Detailing, Bend, OR.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--color-fg-muted)]">
          Owner-operated mobile auto detailing in Bend, Oregon. Founded 2024 with ten-plus years
          of paint, polish, and ceramic experience behind the trailer. Two people, one trailer,
          every appointment hands-on across Bend, Redmond, Sisters, Sunriver, Tumalo, and La Pine.
        </p>
      </section>

      <section className="border-y border-[var(--color-line-soft)] bg-[var(--color-surface)]">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.slug}
              id={member.slug}
              className="rounded-card border border-[var(--color-line-soft)] bg-[var(--color-canvas)] p-8"
            >
              <div className="eyebrow">{member.role}</div>
              <h2 className="text-h2 mt-3">{member.name}</h2>
              <p className="mt-6 max-w-prose text-[var(--color-fg-muted)]">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">Why mobile</div>
            <h2 className="text-h2 mt-4">We come to you.</h2>
          </header>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              A real detail takes hours. Most people do not have hours to spend dropping a car off
              and figuring out a ride. So we built a trailer instead.
            </p>
            <p className="text-[var(--color-fg-muted)]">
              The trailer is fully self-contained: on-board water tank, generator, soaps,
              professional polishers, dual-stage extraction, and a coating prep room. We do not
              need access to your power or water. All we need is a flat spot to park. When the
              weather turns or your spot will not work, we figure out a location that works for
              both of us — a parking lot, your office, a friend's driveway, wherever makes sense.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page grid gap-12 py-24 lg:grid-cols-[1fr_1.4fr]">
          <header>
            <div className="eyebrow">Standards</div>
            <h2 className="text-h2 mt-4">What we stand on.</h2>
          </header>
          <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line-soft)]">
            {[
              {
                t: "Honest scoping.",
                d: "If correction is not worth it on your car, we will tell you. If a wash will solve the problem, we will book that instead of the detail.",
              },
              {
                t: "One of us, every time.",
                d: "No rotating crews. The person who quoted you is the person doing the work.",
              },
              {
                t: "Professional product only.",
                d: "Professional ceramic systems, real polishers, real chemistry. Nothing off a department store shelf.",
              },
              {
                t: "We back our work.",
                d: "If something is not right, tell us. We will be back the next day.",
              },
            ].map((row) => (
              <li key={row.t} className="grid gap-2 py-6 sm:grid-cols-[1fr_2fr]">
                <div className="font-bold">{row.t}</div>
                <div className="text-[var(--color-fg-muted)]">{row.d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-24">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/services" className="cta-ghost">
            See services
          </Link>
          <Link href="/reviews" className="cta-ghost">
            Read reviews
          </Link>
          <Link href="/#quote" className="cta">
            Get a quote
          </Link>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
