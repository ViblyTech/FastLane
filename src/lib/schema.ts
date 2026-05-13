import { site, faqs, services, team, reviews, type Service } from "./site";
import type { Article } from "./blog";

const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;
const ORG_ID = `${site.url}/#org`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.shortName,
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    image: [`${site.url}/og.png`, `${site.url}/logo.svg`],
    logo: `${site.url}/logo.svg`,
    priceRange: "$$",
    currenciesAccepted: site.currenciesAccepted,
    paymentAccepted: site.paymentsAccepted.join(", "),
    foundingDate: site.founded,
    knowsAbout: [
      "Mobile auto detailing",
      "Ceramic coating",
      "Paint correction",
      "Interior detailing",
      "Engine bay cleaning",
      "Odor removal",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.geo.lat,
        longitude: site.geo.lng,
      },
      geoRadius: site.serviceRadiusMiles * 1609.34,
    },
    areaServed: site.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "State", name: "Oregon" },
    })),
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: Object.values(site.social),
    hasMap: site.social.google,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.short,
        url: `${site.url}/services/${s.slug}`,
      },
    })),
    founder: team.map((t) => ({
      "@type": "Person",
      name: t.name,
      jobTitle: t.role,
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.svg`,
    sameAs: Object.values(site.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: "en-US",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function faqPageSchema(items: Array<{ q: string; a: string }> = [...faqs]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/${service.slug}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.long,
    url: `${site.url}/services/${service.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: site.serviceAreas.map((city) => ({ "@type": "City", name: city })),
    audience: {
      "@type": "Audience",
      audienceType: "Vehicle owners in Bend and Central Oregon",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: site.currenciesAccepted,
      price: "0",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: site.currenciesAccepted,
        description: service.startingAt,
      },
      availability: "https://schema.org/InStock",
      seller: { "@id": BUSINESS_ID },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} package details`,
      itemListElement: service.includes.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}

export function howToProcessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to book Fast Lane Detailing in Bend, OR",
    description:
      "Three-step booking and service flow for mobile auto detailing in Bend and Central Oregon.",
    totalTime: "PT4H",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Book or get a quote",
        text: "Tell us your car and what you want done via the online quote form or by calling or texting (541) 640-0612. We confirm same-day in most cases.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "We come to you",
        text: "Our fully-equipped trailer arrives at your driveway, parking lot, or office. In-shop appointments available if your spot will not work.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Drive a clean car",
        text: "Two to eight hours later, depending on the package, you have a car that looks and feels new again.",
      },
    ],
  };
}

export function personSchema(member: (typeof team)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/about#${member.slug}`,
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    worksFor: { "@id": BUSINESS_ID },
  };
}

export function reviewListSchema() {
  return reviews.map((r, i) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${site.url}/reviews#${i + 1}`,
    author: { "@type": "Person", name: r.author },
    datePublished: r.date,
    reviewBody: r.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: { "@id": BUSINESS_ID },
  }));
}

export function articleSchema(article: Article) {
  const author = team.find((t) => t.slug === article.author);
  const url = `${site.url}/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    url,
    mainEntityOfPage: url,
    image: [`${site.url}/og.png`],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "en-US",
    wordCount:
      article.intro.split(/\s+/).length +
      article.sections.reduce((total, section) => {
        return (
          total +
          section.blocks.reduce((blockTotal, block) => {
            if (block.type === "p") return blockTotal + block.text.split(/\s+/).length;
            if (block.type === "ul" || block.type === "ol")
              return (
                blockTotal +
                block.items.reduce((sum, item) => sum + item.split(/\s+/).length, 0)
              );
            return blockTotal;
          }, 0)
        );
      }, 0),
    timeRequired: `PT${article.readMinutes}M`,
    author: author
      ? {
          "@type": "Person",
          "@id": `${site.url}/about#${author.slug}`,
          name: author.name,
          jobTitle: author.role,
        }
      : undefined,
    publisher: { "@id": BUSINESS_ID },
    isPartOf: { "@id": WEBSITE_ID },
    about: article.ctaService
      ? {
          "@type": "Service",
          name: services.find((s) => s.slug === article.ctaService)?.name ?? "",
        }
      : undefined,
  };
}

export function contactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "@id": `${site.url}/contact#point`,
    telephone: site.phoneE164,
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: ["English"],
  };
}
