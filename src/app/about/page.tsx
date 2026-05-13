import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { team, site } from "@/lib/site";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Fast Lane Detailing",
  description:
    "Meet Luka and Ian, the team behind Fast Lane Detailing. Founded in Bend in 2024 with ten-plus years of detailing experience behind the trailer.",
  path: "/about",
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
          Built by detailers, in Bend.
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-[var(--color-fg-muted)]">
          Founded in Bend in 2024 with ten-plus years of detailing experience behind the trailer.
          Two people, one trailer, every appointment hands-on.
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
            <h2 className="text-h2 mt-4">Your driveway is the shop.</h2>
          </header>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              A real detail takes hours. Most people do not have hours to spend dropping a car off
              and figuring out a ride. So we brought the shop to you.
            </p>
            <p className="text-[var(--color-fg-muted)]">
              The trailer carries its own power, water reclamation, professional polishers,
              dual-stage extraction, and a coating prep room. Every tool we would use at a fixed
              shop, parked in front of your house. Working on the floor of your garage or right in
              the driveway, we leave less of a mess than a normal hose wash. When the weather
              turns or your spot will not work, we bring the car in instead.
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
