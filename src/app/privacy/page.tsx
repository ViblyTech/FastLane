import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How Fast Lane Detailing collects, uses, and protects the information you share. Cookies, analytics, advertising, and your rights as a California or EU resident.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Privacy", href: "/privacy" }]} />
      <article className="container-page max-w-3xl space-y-6 pb-24 pt-12 sm:pt-16">
        <div className="eyebrow">Last updated: May 2026</div>
        <h1 className="text-h1">Privacy policy.</h1>

        <p className="text-lg text-[var(--color-fg)]">
          {site.name} ("we", "us") is a mobile auto detailing business based in Bend, Oregon. We
          built this policy so you know exactly what we collect, why, and what you can do about
          it.
        </p>

        <h2 className="pt-6 text-2xl font-bold">1. What we collect</h2>
        <h3 className="pt-2 text-xl font-semibold">Information you give us directly</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Quote requests:</strong> when you fill out the quote form, you share your
            name, phone number, email, vehicle year/make/model, service interest, location
            preference, and any notes you add. We use this only to respond to your inquiry and
            schedule the appointment.
          </li>
          <li>
            <strong>Calls and texts:</strong> when you call or text our business line at{" "}
            {site.phone}, we have your phone number and the content of the conversation. Standard
            carrier records also apply.
          </li>
          <li>
            <strong>Reviews and references:</strong> if you leave us a Google or social media
            review, that content is governed by the platform's privacy policy, not ours.
          </li>
        </ul>

        <h3 className="pt-4 text-xl font-semibold">Information collected automatically</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Standard server logs:</strong> our hosting provider records IP address, user
            agent, and request paths for security and abuse prevention. Logs are not used for
            tracking or advertising.
          </li>
          <li>
            <strong>Cookies and similar technologies:</strong> we use cookies to measure traffic,
            evaluate ad performance, and remember your consent choices. See Section 3 for the
            full list.
          </li>
        </ul>

        <h2 className="pt-6 text-2xl font-bold">2. How we use your information</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Respond to quote requests and schedule appointments.</li>
          <li>Send service-related messages (appointment confirmations, follow-ups).</li>
          <li>Improve the website and understand which content is helpful.</li>
          <li>Measure how well our Google Ads campaigns deliver real customers.</li>
          <li>Comply with applicable law.</li>
        </ul>
        <p>
          We do not sell your personal information. We do not share it with third parties for
          their own marketing. We do not use it to make automated decisions that have legal
          effect.
        </p>

        <h2 className="pt-6 text-2xl font-bold">3. Cookies and tracking technologies</h2>
        <p>
          A cookie is a small text file your browser stores on your device. We use a small number
          of cookies for specific purposes:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-[var(--color-line-soft)] text-sm">
            <thead className="bg-[var(--color-surface)]">
              <tr>
                <th className="border-b border-[var(--color-line-soft)] px-3 py-2 text-left font-semibold">
                  Category
                </th>
                <th className="border-b border-[var(--color-line-soft)] px-3 py-2 text-left font-semibold">
                  Provider
                </th>
                <th className="border-b border-[var(--color-line-soft)] px-3 py-2 text-left font-semibold">
                  Purpose
                </th>
                <th className="border-b border-[var(--color-line-soft)] px-3 py-2 text-left font-semibold">
                  Requires consent
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-line-soft)]">
              <tr>
                <td className="px-3 py-2 align-top">Essential</td>
                <td className="px-3 py-2 align-top">{site.name}</td>
                <td className="px-3 py-2 align-top">
                  Remembers your cookie consent choice so we do not ask again on every visit.
                </td>
                <td className="px-3 py-2 align-top">No</td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top">Analytics</td>
                <td className="px-3 py-2 align-top">Google Analytics (via Google Tag Manager)</td>
                <td className="px-3 py-2 align-top">
                  Anonymized pageview, session, and event data so we can see which pages are
                  useful.
                </td>
                <td className="px-3 py-2 align-top">Yes</td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top">Advertising</td>
                <td className="px-3 py-2 align-top">Google Ads</td>
                <td className="px-3 py-2 align-top">
                  Measures whether visitors who clicked one of our ads later took an action like
                  calling or submitting a quote. Used for conversion attribution.
                </td>
                <td className="px-3 py-2 align-top">Yes</td>
              </tr>
              <tr>
                <td className="px-3 py-2 align-top">Privacy analytics</td>
                <td className="px-3 py-2 align-top">Plausible</td>
                <td className="px-3 py-2 align-top">
                  Cookie-less, anonymized traffic counts. No personal data, no cross-site tracking.
                </td>
                <td className="px-3 py-2 align-top">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We support{" "}
          <strong>Google Consent Mode v2</strong>. When you first visit, our consent banner is
          set to <em>deny</em> ad and analytics storage by default. If you accept, we update
          Google's tags to use cookies and full measurement. If you reject, Google's tags receive
          a consent signal that prevents cookies and personal identifiers from being set; only
          aggregate, anonymized signals are exchanged.
        </p>
        <p>
          You can change your choice anytime by clearing site data for{" "}
          <span className="font-mono text-sm">www.fastlanedetailing.net</span> in your browser
          settings and reloading the site — the banner will appear again.
        </p>

        <h2 className="pt-6 text-2xl font-bold">4. Who we share information with</h2>
        <p>We share your information only with the third parties that help us run the business:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Hosting:</strong> Vercel Inc. (United States) hosts the website and processes
            request data on our behalf.
          </li>
          <li>
            <strong>Email:</strong> Resend (United States) delivers the quote-notification emails
            from the website to our inbox.
          </li>
          <li>
            <strong>Workflow automation:</strong> Zapier (United States) receives quote-form
            submissions in a webhook and can forward them to our CRM, spreadsheet, or SMS
            service per our configuration.
          </li>
          <li>
            <strong>Analytics:</strong> Google LLC (United States) — Google Analytics 4 and
            Google Tag Manager. Subject to your consent (Section 3).
          </li>
          <li>
            <strong>Advertising:</strong> Google LLC (United States) — Google Ads conversion
            tracking. Subject to your consent (Section 3).
          </li>
          <li>
            <strong>Privacy analytics:</strong> Plausible Insights OÜ (Estonia, EU) — cookie-less
            site analytics.
          </li>
        </ul>
        <p>
          We sign data-processing agreements with these providers where applicable. We do not
          authorize them to use your information for their own marketing.
        </p>
        <p>
          We may also disclose information when required by law, court order, or to protect our
          rights, property, or safety.
        </p>

        <h2 className="pt-6 text-2xl font-bold">5. How long we keep it</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Quote requests:</strong> retained as long as we have an active customer
            relationship, plus seven years for tax and accounting purposes.
          </li>
          <li>
            <strong>Analytics data:</strong> Google Analytics 4 default retention (14 months).
          </li>
          <li>
            <strong>Advertising data:</strong> Google Ads default retention (per Google's
            policy).
          </li>
          <li>
            <strong>Server logs:</strong> 30 days.
          </li>
        </ul>

        <h2 className="pt-6 text-2xl font-bold">6. Your rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Ask what personal information we hold about you.</li>
          <li>Ask us to correct or delete it.</li>
          <li>Withdraw consent for analytics or advertising cookies.</li>
          <li>Opt out of communications by replying STOP to a text or asking by phone.</li>
        </ul>
        <p>
          To exercise any of these rights, call or text us at{" "}
          <a
            href={`tel:${site.phoneE164}`}
            className="text-[var(--color-fg)] underline underline-offset-4"
          >
            {site.phone}
          </a>
          . We will respond within 30 days.
        </p>

        <h3 className="pt-4 text-xl font-semibold">California residents (CCPA / CPRA)</h3>
        <p>
          California residents have the additional right to know the categories of personal
          information we have collected, the business purpose, the categories of third parties we
          shared it with, and to request deletion or correction. You also have the right not to
          be discriminated against for exercising these rights. We do not sell personal
          information and do not share it for cross-context behavioral advertising other than the
          conversion measurement described in Section 3.
        </p>

        <h3 className="pt-4 text-xl font-semibold">EU and UK residents (GDPR / UK GDPR)</h3>
        <p>
          Our lawful bases for processing are: (a) <em>consent</em> for analytics and advertising
          cookies, (b) <em>contract</em> for handling your quote and providing the service, and
          (c) <em>legitimate interests</em> for fraud prevention and security logging. You can
          contact us to access, correct, or erase data, or to object to or restrict processing.
          You can also lodge a complaint with your local supervisory authority.
        </p>

        <h2 className="pt-6 text-2xl font-bold">7. Children</h2>
        <p>
          Our services are directed to adults purchasing detailing for their vehicles. We do not
          knowingly collect information from anyone under 13.
        </p>

        <h2 className="pt-6 text-2xl font-bold">8. Security</h2>
        <p>
          We use HTTPS across the entire site, store nothing sensitive on our own servers, and
          rely on the security practices of the third-party providers listed in Section 4. No
          system is perfectly secure; in the unlikely event of a breach affecting your
          information, we will notify you and any required regulators.
        </p>

        <h2 className="pt-6 text-2xl font-bold">9. Links to other sites</h2>
        <p>
          Our site links out to Google, Facebook, Instagram, and similar platforms. Once you
          leave our site, their privacy policies apply, not ours.
        </p>

        <h2 className="pt-6 text-2xl font-bold">10. Changes to this policy</h2>
        <p>
          If we change this policy, we will update the date at the top and, for material changes,
          show a notice on the site.
        </p>

        <h2 className="pt-6 text-2xl font-bold">11. Contact</h2>
        <p>
          Questions about this policy or your data? Call or text{" "}
          <a
            href={`tel:${site.phoneE164}`}
            className="text-[var(--color-fg)] underline underline-offset-4"
          >
            {site.phone}
          </a>{" "}
          or use the{" "}
          <Link
            href="/contact"
            className="text-[var(--color-fg)] underline underline-offset-4"
          >
            contact form
          </Link>
          .
        </p>
        <p className="text-sm text-[var(--color-fg-muted)]">
          {site.legalName} · {site.address.locality}, {site.address.region}, {site.address.country}
        </p>
      </article>
    </>
  );
}
