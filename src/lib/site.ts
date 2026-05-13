export const site = {
  name: "Fast Lane Detailing",
  legalName: "Fast Lane Mobile Detailing",
  shortName: "Fast Lane",
  tagline: "Detailing that comes to you.",
  description:
    "Mobile auto detailing in Bend, Oregon. We bring a fully-equipped trailer to your driveway. Interior, exterior, ceramic coating, paint correction, engine bay, and odor removal. Free quotes.",
  keywords: [
    "mobile detailing Bend Oregon",
    "car detailing Bend",
    "ceramic coating Bend",
    "paint correction Bend",
    "interior car detailing Bend",
    "auto detailing Central Oregon",
    "mobile car wash Bend",
  ],
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
  serviceRadiusMiles: 30,
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "08:00", close: "18:00" },
    { days: ["Saturday"], open: "09:00", close: "16:00" },
  ],
  paymentsAccepted: ["Cash", "Credit Card", "Debit Card", "Venmo", "Zelle"],
  currenciesAccepted: "USD",
  serviceAreas: ["Bend", "Redmond", "Sisters", "Sunriver", "Tumalo", "La Pine"],
  social: {
    facebook: "https://www.facebook.com/fastlanedetailingbend",
    instagram: "https://www.instagram.com/fastlanedetailingbend",
    google: "https://g.page/fastlanedetailingbend",
  },
  rating: { value: 5.0, count: 50 },
} as const;

export const team = [
  {
    slug: "luka",
    name: "Luka",
    role: "Co-founder, Detailer",
    bio: "Hands-on every appointment. Ten-plus years of paint, polish, and ceramic experience across daily drivers, family rigs, and weekend cars.",
  },
  {
    slug: "ian",
    name: "Ian",
    role: "Co-founder, Detailer",
    bio: "Interior and odor specialist with a perfectionist streak. Spends as much time on a headliner as most people spend on a full wash.",
  },
] as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  long: string;
  intro: string;
  includes: string[];
  goodFor: string[];
  time: string;
  startingAt: string;
  faqs: Array<{ q: string; a: string }>;
  related: string[];
};

export const services: Service[] = [
  {
    slug: "mobile-detailing",
    name: "Mobile Detailing",
    short: "Interior and exterior at your driveway, in one appointment.",
    long: "Hand wash, paint decontamination, interior vacuum and surface clean, glass, dressings, the works.",
    intro:
      "Mobile detailing is a full interior-and-exterior service performed at the customer's location instead of a shop. We bring a fully-equipped trailer to your driveway, your office parking lot, or anywhere with a flat surface and an outdoor tap. One appointment, no driving across town.",
    includes: [
      "Foam pre-wash and contact wash",
      "Wheel face, barrel, and tire deep clean",
      "Iron and tar decontamination on paint",
      "Full interior vacuum, including trunk and under seats",
      "Surface-by-surface interior wipe-down",
      "Glass inside and out, streak-free",
      "Tire dressing and trim revival",
    ],
    goodFor: [
      "Your daily driver between deeper details",
      "Cars going up for sale",
      "Anyone who just wants a clean car without losing a Saturday",
    ],
    time: "Two to four hours",
    startingAt: "Free quote",
    faqs: [
      {
        q: "Do you need a power hookup?",
        a: "No. The trailer brings its own power. We use your outside tap for water, about the same as a normal hose use.",
      },
      {
        q: "Will my driveway get soapy?",
        a: "We use biodegradable soaps and capture runoff where possible. We have worked in HOAs and condo lots across Bend without issue.",
      },
    ],
    related: ["ceramic-coating", "interior-detailing", "paint-correction"],
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    short: "Multi-year paint protection, installed at your home or in the shop.",
    long: "Professional ceramic coatings with two to five-year durability. Includes decontamination and a single-stage polish before install.",
    intro:
      "Ceramic coating bonds a clear, hydrophobic layer to your paint that outlasts wax by years. Done right, it makes washes shorter, water bead aggressively, and the paint hold its gloss against UV and contaminants.",
    includes: [
      "Pre-wash and full paint decontamination",
      "Single-stage paint polish to remove light defects",
      "IPA panel wipe to strip oils before coating",
      "Professional ceramic coating application (paint, wheels, glass available)",
      "12 to 24 hour cure window in covered storage when possible",
      "Walkthrough on the maintenance plan",
    ],
    goodFor: [
      "New or near-new cars you plan to keep",
      "Vehicles with fresh paint correction",
      "Owners tired of waxing every season",
    ],
    time: "One to two days depending on package",
    startingAt: "Quote on consult",
    faqs: [
      {
        q: "How long does ceramic coating last?",
        a: "Two to five years with proper maintenance, depending on package. We walk you through the maintenance plan at handoff.",
      },
      {
        q: "Do I need paint correction first?",
        a: "If your paint has swirls, scratches, or oxidation, yes. A coating locks in whatever is underneath it. We will tell you straight if correction is needed.",
      },
      {
        q: "Can ceramic go on wheels and glass?",
        a: "Yes, and we recommend both. Coated wheels stay cleaner between washes and coated glass sheds rain at highway speed.",
      },
    ],
    related: ["paint-correction", "mobile-detailing"],
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    short: "Polish out swirls, scratches, and oxidation.",
    long: "Single, two, and three-stage correction. The right prep before any ceramic coat.",
    intro:
      "Paint correction is the process of removing defects from your clear coat using machine polishers and increasingly fine abrasives. Done right, it restores depth, gloss, and reflection clarity that a wash will never touch.",
    includes: [
      "Paint inspection under LED and depth gauge",
      "Wash, decontamination, and clay treatment",
      "Compounding stage to remove deeper defects",
      "Polishing stage to refine and restore gloss",
      "Optional finishing polish for show-car finish",
      "Paint sealant or ceramic coating recommendation",
    ],
    goodFor: [
      "Pre-coating prep",
      "Used car purchases with neglected paint",
      "Daily drivers with hologram swirls from drive-through washes",
    ],
    time: "Six to sixteen hours depending on stages",
    startingAt: "Free quote",
    faqs: [
      {
        q: "What is the difference between one, two, and three-stage correction?",
        a: "Each stage adds a pass with a different combination of pad and polish. One-stage cleans up light swirls. Two-stage handles deeper defects and refines. Three-stage is show-car level finish work.",
      },
      {
        q: "Will correction take out every scratch?",
        a: "It will take out anything contained within the clear coat. Scratches you can catch a fingernail on may go through the clear, which means correction will improve them but not erase them.",
      },
    ],
    related: ["ceramic-coating", "mobile-detailing"],
  },
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    short: "Shampoo, leather, headliner, vents, glass. Deep clean.",
    long: "Surface by surface interior reset. Carpet and upholstery extraction, leather conditioning, plastic and trim revival.",
    intro:
      "An interior detail is a surface-by-surface reset of every panel inside your car. It is the difference between a vacuum job and a car that feels new from the driver's seat.",
    includes: [
      "Full vacuum including seat rails, trunk, and under seats",
      "Carpet and upholstery hot-water extraction",
      "Leather clean and condition",
      "Headliner spot treatment",
      "Dash, console, doors, and trim cleaned and dressed",
      "Vent and crevice detail",
      "Glass streak-free",
    ],
    goodFor: [
      "Family vehicles with car seats and cracker dust",
      "Used cars you just bought",
      "Pre-sale prep",
    ],
    time: "Three to six hours",
    startingAt: "Free quote",
    faqs: [
      {
        q: "Can you get pet hair out of car seats?",
        a: "Yes. We use a combination of rubber tools, soft brushes, and extraction. The harder cases take an extra hour, not a different shop.",
      },
    ],
    related: ["odor-removal", "mobile-detailing"],
  },
  {
    slug: "engine-bay",
    name: "Engine Bay",
    short: "Degrease and dress. Electronics protected, finish you can show off.",
    long: "We mask sensitive electronics, degrease the bay safely, and dress plastics and hoses.",
    intro:
      "An engine bay detail is the safe cleaning, degreasing, and dressing of everything under the hood. We mask sensitive electronics, use low-pressure water, and finish with a satin dressing on plastics and hoses. The result makes leaks visible, holds resale value, and looks the part if you ever pop the hood.",
    includes: [
      "Mask air intake, alternator, fuse box, and sensitive electronics",
      "Cool-engine degrease and low-pressure rinse",
      "Hand-detail of plastics, hoses, and brackets",
      "Plastic and rubber dressing for satin finish",
    ],
    goodFor: [
      "Pre-sale prep",
      "Shows and meets",
      "Anyone who actually looks under the hood",
    ],
    time: "One to two hours",
    startingAt: "Free quote",
    faqs: [
      {
        q: "Is it safe?",
        a: "Yes, when it is done right. We cool the engine, mask the electronics, and use low pressure. We have done it on everything from old Subarus to new EVs.",
      },
    ],
    related: ["mobile-detailing", "paint-correction"],
  },
  {
    slug: "odor-removal",
    name: "Odor Removal",
    short: "Smoke, pet, food. We treat the source, not just the smell.",
    long: "Source-based odor treatment. Interior shampoo and extraction first, then targeted treatment in the cabin and HVAC.",
    intro:
      "Most odor problems are not a smell problem, they are a residue problem. We treat the source first with shampoo and extraction, then handle anything left in the air with targeted cabin and HVAC treatment.",
    includes: [
      "Full interior detail as prep",
      "Carpet and upholstery extraction",
      "Headliner and trim odor treatment as needed",
      "Cabin air treatment",
      "HVAC purge",
    ],
    goodFor: [
      "Cars that were smoked in",
      "Pet accidents and dander",
      "Spilled food, drinks, or worse",
    ],
    time: "Four to eight hours",
    startingAt: "Free quote",
    faqs: [
      {
        q: "Can you really get smoke smell out?",
        a: "In most cases, yes. Severity matters. Decades-long smoking will leave residue in foam and headliner that we will be honest about up front.",
      },
    ],
    related: ["interior-detailing", "mobile-detailing"],
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
  {
    q: "Do you service Redmond, Sisters, Sunriver, or Tumalo?",
    a: "Yes. Our standard service area covers Bend and the surrounding Central Oregon communities. Outside of that, ask. We travel for ceramic coating jobs.",
  },
  {
    q: "How do I book?",
    a: "Use the quote form on the site or call or text (541) 640-0612. We confirm same-day in most cases.",
  },
];

export const reviews = [
  {
    author: "Marcus T.",
    rating: 5,
    date: "2025-09-14",
    body: "Luka came out to my place in NE Bend and turned a 4Runner that had three years of dog hair and trail dust into something my wife actually wanted to ride in. Easy to book, on time, and worth every dollar.",
  },
  {
    author: "Priya R.",
    rating: 5,
    date: "2025-08-02",
    body: "Got the ceramic coating on a new Model Y. Ian walked me through the paint correction first, no upsell pressure. Three months in, water still beads like the day they finished.",
  },
  {
    author: "Derek W.",
    rating: 5,
    date: "2025-07-19",
    body: "Hired them to prep a used Tacoma for resale. Sold it in four days for top of my asking range. The buyer asked who detailed it. Already booked them for my own truck.",
  },
];
