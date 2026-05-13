import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Fast Lane Detailing handles the information you share with us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Privacy", href: "/privacy" }]} />
      <article className="container-page max-w-3xl space-y-6 pb-24 pt-12 sm:pt-16">
        <div className="eyebrow">Last updated: November 2025</div>
        <h1 className="text-h1">Privacy policy.</h1>

        <p>
          Fast Lane Detailing respects your privacy. This page explains what we collect, why, and
          how to reach us with questions.
        </p>

        <h2 className="text-2xl font-bold pt-6">What we collect</h2>
        <p>
          When you request a quote or contact us, we collect the information you provide: name,
          phone, email, vehicle details, and any notes. We use this only to respond to your
          request and schedule your appointment.
        </p>

        <h2 className="text-2xl font-bold pt-6">Analytics</h2>
        <p>
          The site uses privacy-respecting analytics that do not use cookies and do not track you
          across sites. We see aggregate pageview counts and which pages perform well. No personal
          data is collected.
        </p>

        <h2 className="text-2xl font-bold pt-6">Communications</h2>
        <p>
          If you contact us, we may reply by phone, text, or email using the information you
          provided. We do not sell, rent, or share your information with third parties.
        </p>

        <h2 className="text-2xl font-bold pt-6">Contact</h2>
        <p>
          Questions about this policy? Call or text {site.phone}.
        </p>
      </article>
    </>
  );
}
