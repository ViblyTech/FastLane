import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description:
    "Fast Lane Detailing's commitment to an accessible website. Standards, known issues, and how to reach us.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Accessibility", href: "/accessibility" }]} />
      <article className="container-page max-w-3xl space-y-6 pb-24 pt-12 sm:pt-16">
        <div className="eyebrow">Last updated: November 2025</div>
        <h1 className="text-h1">Accessibility statement.</h1>

        <p>
          We build this site to be usable by as many people as possible. We target WCAG 2.2 AA
          conformance and test the site with keyboard navigation, screen readers, and reduced
          motion settings.
        </p>

        <h2 className="text-2xl font-bold pt-6">What we have done</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Semantic HTML with proper heading hierarchy</li>
          <li>Visible focus states on every interactive element</li>
          <li>Keyboard-accessible navigation and forms</li>
          <li>Respect for the operating system reduced-motion preference</li>
          <li>Color contrast that meets AA on body copy, AAA on most surfaces</li>
        </ul>

        <h2 className="text-2xl font-bold pt-6">Known gaps</h2>
        <p>
          If you find content that is hard to use with assistive technology, let us know and we
          will fix it.
        </p>

        <h2 className="text-2xl font-bold pt-6">Contact</h2>
        <p>Call or text {site.phone}.</p>
      </article>
    </>
  );
}
