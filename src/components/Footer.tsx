import Link from "next/link";
import { LogoMark } from "./LogoMark";
import { customLogoHref } from "@/lib/logo";
import { site } from "@/lib/site";

const cols = {
  services: [
    { href: "/services/mobile-detailing", label: "Mobile detailing" },
    { href: "/services/ceramic-coating", label: "Ceramic coating" },
    { href: "/services/paint-correction", label: "Paint correction" },
    { href: "/services/interior-detailing", label: "Interior detailing" },
    { href: "/services/engine-bay", label: "Engine bay" },
    { href: "/services/odor-removal", label: "Odor removal" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/reviews", label: "Reviews" },
    { href: "/service-area", label: "Service area" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/accessibility", label: "Accessibility" },
    { href: "/sitemap.xml", label: "Sitemap" },
  ],
};

export function Footer() {
  const pngHref = customLogoHref();
  return (
    <footer className="border-t border-[var(--color-line-soft)] bg-[var(--color-canvas)]">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="h-32 w-32 text-[var(--color-fg)]">
              <LogoMark variant="full" pngHref={pngHref} className="h-full w-full" />
            </div>
            <address className="not-italic mt-6 space-y-1 text-sm text-[var(--color-fg-muted)]">
              <div className="text-[var(--color-fg)]">{site.name}</div>
              <div>
                {site.address.locality}, {site.address.region}
              </div>
              <div>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="hover:text-[var(--color-fg)]"
                  data-event="cta_call_click"
                >
                  {site.phone}
                </a>
                {" · call or text"}
              </div>
              <div>Mon to Fri 8am to 6pm · Sat 9am to 4pm</div>
            </address>
          </div>

          <FooterCol title="Services" links={cols.services} />
          <FooterCol title="Company" links={cols.company} />
          <FooterCol title="Legal" links={cols.legal} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--color-line-soft)] pt-8 text-xs text-[var(--color-fg-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {site.legalName}. Bend, Oregon.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={site.social.google}
              target="_blank"
              rel="noopener"
              className="hover:text-[var(--color-fg)]"
            >
              Google
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener"
              className="hover:text-[var(--color-fg)]"
            >
              Facebook
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener"
              className="hover:text-[var(--color-fg)]"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-[var(--color-fg-muted)]">
          Friends in Tampa, FL? Visit our partner shop.
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div>
      <div className="eyebrow mb-4">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
