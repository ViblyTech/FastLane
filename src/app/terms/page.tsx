import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms for using fastlanedetailingbend.com and booking with Fast Lane Detailing.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Terms", href: "/terms" }]} />
      <article className="container-page max-w-3xl space-y-6 pb-24 pt-12 sm:pt-16">
        <div className="eyebrow">Last updated: November 2025</div>
        <h1 className="text-h1">Terms of service.</h1>

        <p>
          By using this site or booking with Fast Lane Detailing, you agree to the following.
        </p>

        <h2 className="text-2xl font-bold pt-6">Bookings and quotes</h2>
        <p>
          Quotes are estimates based on the information you share. Final pricing may adjust after
          in-person inspection if condition differs materially from what was described. We will
          always communicate any change before starting the work.
        </p>

        <h2 className="text-2xl font-bold pt-6">Cancellation</h2>
        <p>
          Free cancellation up to 24 hours before your appointment. Inside that window, we may
          charge a fee to cover the held time. We are reasonable; emergencies happen.
        </p>

        <h2 className="text-2xl font-bold pt-6">Our work</h2>
        <p>
          We back the work we do. If something is not right, tell us within seven days and we will
          come back to address it. We cannot fix conditions that existed before our work began,
          such as paint defects below the clear coat, but we will tell you up front what is and
          is not realistic for your car.
        </p>

        <h2 className="text-2xl font-bold pt-6">Contact</h2>
        <p>Questions or disputes? Call or text {site.phone}.</p>
      </article>
    </>
  );
}
