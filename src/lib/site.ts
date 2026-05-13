export const site = {
  name: "Fast Lane Detailing",
  legalName: "Fast Lane Mobile Detailing",
  shortName: "Fast Lane",
  tagline: "Mobile auto detailing in Bend, Oregon.",
  description:
    "Mobile auto detailing in Bend, Oregon. We bring a fully-equipped trailer to your driveway. Interior, exterior, ceramic coating, paint correction, engine bay, and odor removal.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fastlanedetailingbend.com",
  phone: "(541) 640-0612",
  phoneE164: "+15416400612",
  founded: "2024",
  address: {
    locality: "Bend",
    region: "OR",
    country: "US",
    postalCode: "97701",
  },
  geo: { lat: 44.0582, lng: -121.3153 },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "08:00", close: "18:00" },
    { days: ["Saturday"], open: "09:00", close: "16:00" },
  ],
  serviceAreas: ["Bend", "Redmond", "Sisters", "Sunriver", "Tumalo", "La Pine"],
  social: {
    facebook: "https://www.facebook.com/fastlanedetailingbend",
    instagram: "https://www.instagram.com/fastlanedetailingbend",
    google: "https://g.page/fastlanedetailingbend",
  },
  rating: { value: 5.0, count: 50 },
} as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  long: string;
  startingAt: string;
};

export const services: Service[] = [
  {
    slug: "mobile-detailing",
    name: "Mobile Detailing",
    short: "Interior and exterior at your driveway, in one appointment.",
    long: "We bring the trailer to your home or office. Hand wash, decontamination, interior vacuum and surface clean, glass, dressings, the works.",
    startingAt: "Free quote",
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    short: "Multi-year paint protection, installed at your home or in the shop.",
    long: "Professional ceramic coatings with two to five-year durability depending on package. Includes paint decontamination and a single-stage polish.",
    startingAt: "Quote on consult",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    short: "Polish out swirls, scratches, and oxidation.",
    long: "Single, two, and three-stage correction. Removes marring that a wash will never touch. The right prep before any ceramic coat.",
    startingAt: "Free quote",
  },
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    short: "Shampoo, leather, headliner, vents, glass. Deep clean.",
    long: "Surface by surface interior reset. Carpet and upholstery extraction, leather conditioning, plastic and trim revival, streak-free glass.",
    startingAt: "Free quote",
  },
  {
    slug: "engine-bay",
    name: "Engine Bay",
    short: "Degrease and dress. Electronics protected, finish you can show off.",
    long: "We mask sensitive electronics, degrease the bay safely, and dress plastics and hoses. Pairs well with any exterior package.",
    startingAt: "Free quote",
  },
  {
    slug: "odor-removal",
    name: "Odor Removal",
    short: "Smoke, pet, food. We treat the source, not just the smell.",
    long: "Source-based odor treatment. Interior shampoo and extraction first, then targeted treatment in the cabin and HVAC.",
    startingAt: "Free quote",
  },
];

export const faqs = [
  {
    q: "What's the difference between a car wash and a detail?",
    a: "A wash removes loose dirt. A detail decontaminates the paint, cleans the interior surface by surface, and finishes with protection. A full detail typically takes two to eight hours depending on the package and the condition of the car.",
  },
  {
    q: "Do you bring your own water?",
    a: "We bring our own power, soaps, and equipment. We use your outside tap for water, about the same volume as a normal hose use. If your spot has no water access, ask about the shop.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "Quality professional ceramic coatings last two to five years with proper maintenance. We walk you through the maintenance plan when you book.",
  },
  {
    q: "What if I park in a garage or my HOA restricts driveway work?",
    a: "We have worked in downtown lots, condo garages, and HOA driveways across Bend. If your spot will not work, we book you for the in-shop appointment instead.",
  },
];
