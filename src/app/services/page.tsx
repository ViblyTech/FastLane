import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CallToAction } from "@/components/CallToAction";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Car Detailing Services in Bend, OR",
  description:
    "Full menu of mobile auto detailing services in Bend, Oregon. Mobile detailing, ceramic coating, paint correction, interior detailing, engine bay, odor removal.",
  path: "/services",
});

export default function ServicesIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: site.url },
          { name: "Services", url: `${site.url}/services` },
        ])}
      />
      <Breadcrumbs trail={[{ name: "Services", href: "/services" }]} />

      <section className="container-page pb-12 pt-12 sm:pt-16">
        <div className="eyebrow">Services</div>
        <h1 className="text-h1 mt-4 max-w-3xl">
          Every service we offer, in one menu.
        </h1>
        <p className="mt-6 max-w-prose text-lg text-[var(--color-fg-muted)]">
          Mobile or in-shop, single service or a full package. Each link below opens a full
          breakdown of what is included, who it is for, and how long it takes.
        </p>
      </section>

      <section className="border-y border-[var(--color-line-soft)]">
        <div className="container-page">
          <div className="grid border-b border-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24">
        <header className="mb-10 max-w-2xl">
          <div className="eyebrow">Not sure where to start?</div>
          <h2 className="text-h2 mt-4">Tell us about the car.</h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Send a few details and we will recommend the right package. No commitment, no upsell
            pressure.
          </p>
        </header>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/#quote" className="cta">
            Request a quote
          </Link>
          <Link href="/faq" className="cta-ghost">
            Read the FAQ
          </Link>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
