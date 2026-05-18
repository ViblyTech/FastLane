import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms for using fastlanedetailing.net and booking with Fast Lane Detailing.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Terms", href: "/terms" }]} />
      <article className="container-page max-w-3xl space-y-6 pb-24 pt-12 sm:pt-16">
        <div className="eyebrow">Last updated: May 2026</div>
        <h1 className="text-h1">Terms of service.</h1>

        <p>
          By using this site or booking with Fast Lane Detailing, you agree to the following.
        </p>

        <h2 className="pt-6 text-2xl font-bold">Bookings and quotes</h2>
        <p>
          Quotes are estimates based on the information you share. Final pricing may adjust after
          in-person inspection if condition differs materially from what was described. We will
          always communicate any change before starting the work.
        </p>

        <h2 className="pt-6 text-2xl font-bold">Cancellation</h2>
        <p>
          Free cancellation up to 24 hours before your appointment. Inside that window, we may
          charge a fee to cover the held time. We are reasonable; emergencies happen.
        </p>

        <h2 className="pt-6 text-2xl font-bold">Our work</h2>
        <p>
          We back the work we do. If something is not right, tell us within seven days and we will
          come back to address it. We cannot fix conditions that existed before our work began,
          such as paint defects below the clear coat, but we will tell you up front what is and
          is not realistic for your car.
        </p>

        <h2 className="pt-6 text-2xl font-bold">Privacy, cookies, and advertising</h2>
        <p>
          We use a small set of cookies and analytics tools (Google Tag Manager, Google
          Analytics 4, Google Ads conversion measurement, and Plausible). Analytics and
          advertising cookies require your consent; you can accept or reject them via the
          banner shown on your first visit. Full details are in our{" "}
          <a
            href="/privacy"
            className="text-[var(--color-fg)] underline underline-offset-4"
          >
            Privacy Policy
          </a>
          .
        </p>

        <h2 className="pt-6 text-2xl font-bold">Acceptable use</h2>
        <p>
          You agree not to attempt to disrupt the site, harvest data, or use it for unlawful
          purposes. We may refuse service or remove content at our discretion.
        </p>

        <h2 className="pt-6 text-2xl font-bold">Disclaimers</h2>
        <p>
          The information on this site is provided in good faith and is accurate to the best of
          our knowledge. We do not warrant that the site will be uninterrupted or error-free.
          Our maximum liability for any claim related to the site is limited to the amount you
          paid us in the 12 months before the claim.
        </p>

        <h2 className="pt-6 text-2xl font-bold">Governing law</h2>
        <p>
          These terms are governed by the laws of the State of Oregon, United States. Disputes
          will be resolved in the state or federal courts located in Deschutes County, Oregon.
        </p>

        <h2 className="pt-6 text-2xl font-bold">Contact</h2>
        <p>Questions or disputes? Call or text {site.phone}.</p>
      </article>
    </>
  );
}
