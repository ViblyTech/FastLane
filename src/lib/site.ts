export const site = {
  name: "Fast Lane Detailing",
  legalName: "Fast Lane Mobile Detailing",
  shortName: "Fast Lane",
  tagline: "Detailing that comes to you.",
  description:
    "Mobile auto detailing in Bend, Oregon. We bring a fully-equipped trailer to your driveway. Interior, exterior, ceramic coating, paint correction, engine bay, and odor removal. Free quotes.",
  keywords: [
    "mobile detailing Bend Oregon",
    "mobile auto detailing Bend",
    "mobile car detailing Bend",
    "car detailing Bend Oregon",
    "auto detailing Bend OR",
    "car detailing near me Bend",
    "best car detailing Bend",
    "ceramic coating Bend Oregon",
    "ceramic coating Bend OR",
    "paint correction Bend Oregon",
    "interior car detailing Bend",
    "auto detailing Central Oregon",
    "mobile car wash Bend",
    "mobile detailing Redmond Oregon",
    "mobile detailing Sisters Oregon",
    "mobile detailing Sunriver",
    "engine bay cleaning Bend",
    "car odor removal Bend",
    "detailing Bend Oregon",
    "Fast Lane Detailing",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fastlanedetailing.net",
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
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], open: "08:00", close: "17:00" },
  ],
  paymentsAccepted: ["Cash", "Credit Card", "Debit Card", "Venmo", "Zelle"],
  currenciesAccepted: "USD",
  serviceAreas: ["Bend", "Redmond", "Sisters", "Sunriver", "Tumalo", "La Pine"],
  social: {
    facebook: "https://www.facebook.com/fastlanedetailingbend",
    instagram: "https://www.instagram.com/fastlanedetailingbend",
    google: "https://g.page/fastlanedetailingbend",
    googleReviewUrl: "https://g.page/r/fastlanedetailingbend/review",
  },
  rating: { value: 5.0, count: 95 },
  analytics: {
    gtm: "GTM-PLLD4KQD",
  },
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
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "mobile-detailing",
    name: "Mobile Detailing",
    short: "Interior and exterior at your driveway, in one appointment.",
    long: "Hand wash, paint decontamination, interior vacuum and surface clean, glass, dressings, the works.",
    intro:
      "Mobile detailing is a full interior-and-exterior service performed at the customer's location. We bring a fully self-contained trailer (on-board water tank, generator, soaps, and equipment) to your driveway, your office parking lot, or anywhere with a flat spot to park. One appointment, no driving across town.",
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
        q: "Do you need a power or water hookup?",
        a: "No. The trailer is fully self-contained: on-board water tank and generator. We do not need access to your power or water at all. All we need is a flat spot to park.",
      },
      {
        q: "Will my driveway get soapy?",
        a: "We use biodegradable soaps and capture runoff where possible. We have worked in HOAs and condo lots across Bend without issue.",
      },
    ],
    related: ["ceramic-coating", "interior-detailing", "paint-correction"],
    keywords: [
      "mobile detailing Bend Oregon",
      "mobile auto detailing Bend",
      "mobile car detailing Bend OR",
      "car detailing at your home Bend",
      "mobile detailer near me",
      "mobile detailing Redmond",
      "mobile detailing Sisters Oregon",
      "mobile detailing Sunriver",
      "mobile car wash Bend",
    ],
    metaTitle: "Mobile Auto Detailing Bend, OR | At Your Driveway",
    metaDescription:
      "Professional mobile auto detailing in Bend, Oregon. Interior and exterior at your driveway in one appointment. Self-contained trailer. Free quotes.",
  },
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    short: "Multi-year paint protection, installed at your home, office, or wherever works.",
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
    keywords: [
      "ceramic coating Bend Oregon",
      "ceramic coating Bend OR",
      "ceramic coating Central Oregon",
      "ceramic coating near me Bend",
      "paint protection Bend",
      "ceramic coating cost Bend",
      "best ceramic coating Bend",
      "professional ceramic coating Oregon",
      "ceramic coating Redmond",
    ],
    metaTitle: "Ceramic Coating Bend, OR | 2-5 Year Paint Protection",
    metaDescription:
      "Professional ceramic coating in Bend, OR. Two to five year paint protection from a 5-star detailer. Installed at your home or office. Free consultation.",
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
    keywords: [
      "paint correction Bend Oregon",
      "paint correction Bend OR",
      "paint correction Central Oregon",
      "paint correction cost Bend",
      "swirl removal Bend",
      "car polishing Bend",
      "scratch removal Bend",
      "machine polishing Bend",
      "single stage paint correction",
      "multi stage paint correction Oregon",
    ],
    metaTitle: "Paint Correction Bend, OR | Remove Swirls & Scratches",
    metaDescription:
      "Paint correction in Bend, Oregon. Remove swirls, scratches, and oxidation with single, two, or three-stage machine polishing. Free quotes.",
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
        a: "Yes. We use a combination of rubber tools, soft brushes, and extraction. The harder cases take an extra hour, not a different detailer.",
      },
    ],
    related: ["odor-removal", "mobile-detailing"],
    keywords: [
      "interior car detailing Bend Oregon",
      "interior detailing Bend OR",
      "car interior cleaning Bend",
      "car shampoo Bend",
      "carpet cleaning car Bend",
      "leather conditioning Bend",
      "interior detailer near me",
      "auto interior cleaning Central Oregon",
      "deep clean car interior Bend",
    ],
    metaTitle: "Interior Car Detailing Bend, OR | Deep Clean Mobile Service",
    metaDescription:
      "Deep interior car detailing in Bend, Oregon. Shampoo, leather conditioning, headliner, vents, glass. Mobile service across Central Oregon.",
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
    keywords: [
      "engine bay cleaning Bend Oregon",
      "engine bay detail Bend",
      "engine cleaning Bend OR",
      "engine bay degrease Bend",
      "engine detailing Central Oregon",
      "auto engine cleaning Bend",
    ],
    metaTitle: "Engine Bay Cleaning Bend, OR | Safe Degrease & Dress",
    metaDescription:
      "Professional engine bay cleaning in Bend, Oregon. Safe degrease with masked electronics and dressed plastics. Pre-sale prep or show finish. Free quotes.",
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
    keywords: [
      "car odor removal Bend Oregon",
      "smoke smell removal car Bend",
      "pet odor removal car Bend",
      "car smell removal Bend",
      "auto odor treatment Bend",
      "remove smoke smell from car Oregon",
      "cigarette smell removal car Bend",
    ],
    metaTitle: "Car Odor Removal Bend, OR | Smoke, Pet & Food Smell",
    metaDescription:
      "Car odor removal in Bend, Oregon. Smoke, pet, food. We treat the source, not just the smell. Source-based interior treatment from a 5-star detailer.",
  },
];

export const faqs = [
  {
    q: "Where can I get my car detailed in Bend, Oregon?",
    a: "Fast Lane Detailing offers mobile auto detailing across Bend and Central Oregon. We come to your driveway, your office, or anywhere with a flat spot to park. Call or text (541) 640-0612 to book.",
  },
  {
    q: "Who is the best mobile auto detailer in Bend?",
    a: "Fast Lane Detailing has 5.0 stars across 95+ Google reviews. Owner-operated by Luka and Ian, with ten-plus years of combined detailing experience and a fully self-contained trailer.",
  },
  {
    q: "What's the difference between a car wash and a detail?",
    a: "A wash removes loose dirt from the surface in fifteen minutes or less. A detail decontaminates the paint, cleans the interior surface by surface, and finishes with protection over two to eight hours.",
  },
  {
    q: "Do you bring your own water and power?",
    a: "Yes. The trailer is fully self-contained with an on-board water tank, generator, soaps, and every piece of equipment we need. We do not need access to your power or water. All we need is a flat spot to park.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "Quality professional ceramic coatings last two to five years with proper maintenance. We walk you through the maintenance plan when you book.",
  },
  {
    q: "What if I park in a garage or my HOA restricts driveway work?",
    a: "We have worked in downtown lots, condo garages, and HOA driveways across Bend. If your spot will not work, we figure out a location that works for both of us — a parking lot, a friend's driveway, your office, wherever makes sense.",
  },
  {
    q: "Do you service Redmond, Sisters, Sunriver, or Tumalo?",
    a: "Yes. Our standard mobile detailing service area covers Bend, Redmond, Sisters, Sunriver, Tumalo, La Pine, and the surrounding Central Oregon communities. Outside of that, ask. We travel for ceramic coating jobs.",
  },
  {
    q: "How much does mobile auto detailing cost in Bend?",
    a: "Maintenance washes start at $80. Full interior or exterior details run $200 to $350. A full interior plus exterior detail is $300 to $500. Paint correction is $400 to $1,500. Ceramic coating starts around $800 and runs up to $2,000+ for multi-layer systems.",
  },
  {
    q: "When is Fast Lane Detailing open?",
    a: "Monday through Friday, 8 AM to 5 PM Pacific time. Closed Saturday and Sunday. Call or text (541) 640-0612 during business hours and we will reply same-day in most cases.",
  },
  {
    q: "How do I book?",
    a: "Use the quote form on the site or call or text (541) 640-0612. We confirm same-day in most cases.",
  },
];

export const reviews = [
  {
    author: "Kaylee Harris",
    rating: 5,
    date: "2026-04-10",
    body: "Communicated well, very kind and generous. They did an amazing job on my boyfriend's truck! Even with the horrible dog hair! Will definitely recommend! And for sure will use them again next time we need a detail.",
  },
  {
    author: "Trent Mitchell",
    rating: 5,
    date: "2026-01-08",
    body: "Booked Fast Lane for a paint correction and ceramic coat on a 2024 Tundra. The prep work alone took most of a day and they walked me through every step. Three months in, the gloss is unreal and washes take half the time. Worth every dollar.",
  },
  {
    author: "Hannah Garrett",
    rating: 5,
    date: "2026-03-22",
    body: "Ian came out to my place in Tumalo and brought a 2019 Outback that had a winter of cinders all over it back to looking better than the day we bought it. Honest pricing too, no surprises.",
  },
  {
    author: "Devon Park",
    rating: 5,
    date: "2026-02-15",
    body: "Got a full interior detail on our family Pilot. Two car seats and three years of crumbs gone. Headliner spot they treated looks brand new. Booked again for spring.",
  },
  {
    author: "Marcus Tan",
    rating: 5,
    date: "2025-09-14",
    body: "Luka came out to my place in NE Bend and turned a 4Runner that had three years of dog hair and trail dust into something my wife actually wanted to ride in. Easy to book, on time, and worth every dollar.",
  },
  {
    author: "Priya Ramaswamy",
    rating: 5,
    date: "2025-08-02",
    body: "Got the ceramic coating on a new Model Y. Ian walked me through the paint correction first, no upsell pressure. Three months in, water still beads like the day they finished.",
  },
  {
    author: "Derek Wallace",
    rating: 5,
    date: "2025-07-19",
    body: "Hired them to prep a used Tacoma for resale. Sold it in four days for top of my asking range. The buyer asked who detailed it. Already booked them for my own truck.",
  },
];
