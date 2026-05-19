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
    ads: "AW-18075280930",
    // Phone-call conversion target (AW-CONVERSION_ID/LABEL) used by
    // Google Ads call-tracking phone-number replacement. Fired via a
    // gtag('config', target, { phone_conversion_number }) call after
    // the base AW tag loads.
    adsPhoneConversion: "AW-18075280930/bD4QCL6hu68cEKLM-6pD",
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
  details?: Array<{ heading: string; body: string }>;
  time: string;
  startingAt: string;
  faqs: Array<{ q: string; a: string }>;
  related: string[];
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  updatedAt: string;
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
    updatedAt: "2026-05-19",
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
      {
        q: "How long do I need to wait before washing after a ceramic coat?",
        a: "Seven days. The coating is touch-dry within an hour, but the full cure takes a week. Avoid automatic washes for the first month and never go through a brush wash for the life of the coating.",
      },
      {
        q: "Is ceramic coating worth it in Bend?",
        a: "For most owners who keep cars more than two years, yes. Mag chloride, road dust, UV at 3,600 feet, and pine sap all attack unprotected paint. A coating shrugs all of that off and makes maintenance washes faster.",
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
    updatedAt: "2026-05-19",
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
      {
        q: "How much clear coat does correction remove?",
        a: "A typical single-stage removes one to three microns of clear coat — well within safe limits. Modern factory clear is 40 to 60 microns thick. We measure with a paint gauge before and during correction to stay in safe territory.",
      },
      {
        q: "How long does paint correction last without a coating?",
        a: "The correction itself is permanent — what we remove is gone. But the corrected paint is still vulnerable to new defects from wash-induced scratches, road debris, and UV. A sealant holds the finish for two to four months; a ceramic coating holds it for years.",
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
    updatedAt: "2026-05-19",
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
      {
        q: "Will hot-water extraction shrink or fade my carpet?",
        a: "No. We use temperature-controlled extraction and pH-balanced shampoo. Carpet and upholstery dry within a few hours and come back uniform, not blotchy.",
      },
      {
        q: "Do you clean child car seats?",
        a: "We surface-wipe the hard plastics and vacuum the harness webbing. We do not remove the harness covers — that voids most car-seat warranties. If a seat needs full disassembly, you do that part and we clean the empty space underneath.",
      },
      {
        q: "Can you remove water spots from interior glass?",
        a: "Yes. Most interior water spots come from off-gassing condensing on the windshield. We clean with a low-residue glass cleaner and microfiber, then re-polish if any film remains.",
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
    updatedAt: "2026-05-19",
  },
  {
    slug: "engine-bay",
    name: "Engine Bay",
    short: "Degrease and dress. Electronics protected, finish you can show off.",
    long: "We mask sensitive electronics, degrease the bay safely, and dress plastics and hoses.",
    intro:
      "An engine bay detail is the safe cleaning, degreasing, and dressing of everything under the hood. On a clean bay, oil weeps and coolant seeps are immediately visible — you spot problems early. On a dirty one, you do not notice a leak until you smell it. We mask the electronics, work with the engine cool, use low-pressure water only, and finish with a satin dressing that does not run, drip, or fling onto components. Done a few times per year, an engine bay stays close to factory-clean for the life of the car.",
    includes: [
      "Cool-engine inspection — we will not work on a hot motor",
      "Mask the air intake, alternator, fuse box, distributor, coil packs, and any open electronics",
      "Citrus-based degreaser applied by hand to plastics, hoses, brackets, and the firewall",
      "Hand agitation with soft brushes for delicate components and stiff brushes for caked grease",
      "Low-pressure rinse — never high-pressure spray near sensors or connectors",
      "Towel-dry every reachable surface to prevent water spots",
      "Water-based plastic and rubber dressing for a satin, non-greasy finish",
      "Final walk-around with hood up so you see exactly what was done",
    ],
    goodFor: [
      "Pre-sale prep where a clean bay adds visible value",
      "Shows, meets, and any time you'll pop the hood for someone",
      "Owners who tow, drive dirt roads, or live east of town where dust gets in",
      "Anyone who wants to spot a leak the day it starts, not after it's done damage",
    ],
    details: [
      {
        heading: "How we keep it safe",
        body:
          "The number-one failure mode in engine bay cleaning is water in a connector or on a control module. We prevent it. Every wash starts with a cool engine — if you've driven recently, we wait. With the hood open, we mask everything sensitive: the air intake, alternator, fuse box, exposed ECUs, and any open coil packs. Plastic and painter's tape, no liquid touches what is covered. We use a garden-pressure hose, never a power washer near sensors or wiring. On hybrids and EVs we mask the high-voltage warning areas and stay away from them entirely. The car drives away dry and ready.",
      },
      {
        heading: "Our process, step by step",
        body:
          "First pass is a citrus-based degreaser applied by hand to plastics, hoses, brackets, and the firewall. It dwells for a few minutes — long enough to break the bond between grime and surface, not long enough to bleach plastics. We agitate with brushes, soft for delicate trim and stiff for caked-on grease. Then a low-pressure rinse, working top to bottom so dirty water never runs over a clean surface. We towel-dry every reachable area, remove masking, and inspect. If a hose or bracket needs a second pass, it gets one. Then the dressing.",
      },
      {
        heading: "What the dressing does, and what it does not do",
        body:
          "We use a water-based satin dressing on plastics, rubber, and engine covers. It conditions the surface and leaves a uniform, OEM-clean appearance — not the glossy, dripping look that attracts dust within a week. We do not dress anything that gets hot enough to wick or discolor: no manifold dressing, no exhaust dressing. The result lasts months between cleanings and does not transfer to your hands or clothes when you check the dipstick.",
      },
    ],
    time: "One to two hours",
    startingAt: "Free quote",
    faqs: [
      {
        q: "Is it safe?",
        a: "Yes, when it is done right. We cool the engine, mask the electronics, and use low pressure. We have done it on everything from old Subarus to new EVs.",
      },
      {
        q: "Can you clean the engine bay on an EV or hybrid?",
        a: "Yes. We have done engine bay details on Teslas, EUVs, and hybrids. Same approach: cool components, mask the high-voltage areas, work clean. We stay away from the orange high-voltage cables entirely.",
      },
      {
        q: "How often should I get my engine bay detailed?",
        a: "Once or twice a year for most daily drivers in Bend. More often if you tow, take dirt roads, or live east of town where the dust gets in. An annual detail keeps it from ever getting bad.",
      },
      {
        q: "Will the dressing damage rubber or plastic?",
        a: "No. We use water-based, silicone-light dressings that condition without leaving a glossy residue. They do not cause cracking and they do not attract dust like cheap aerosol dressings do.",
      },
      {
        q: "Will cleaning hide leaks I should know about?",
        a: "The opposite. A clean engine bay makes any new weep or seep obvious within a day or two. We tell you about anything we notice while we work — that is part of why people book this service.",
      },
      {
        q: "Can I drive the car right after?",
        a: "Yes. We confirm everything is dry, all masking is removed, and the engine starts and runs normally before we hand it back. No wait time.",
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
      "EV engine bay cleaning Bend",
      "show car engine detail Oregon",
    ],
    metaTitle: "Engine Bay Cleaning Bend, OR | Safe Degrease & Dress",
    metaDescription:
      "Professional engine bay cleaning in Bend, Oregon. Safe degrease with masked electronics and dressed plastics. Pre-sale prep or show finish. Free quotes.",
    updatedAt: "2026-05-19",
  },
  {
    slug: "odor-removal",
    name: "Odor Removal",
    short: "Smoke, pet, food. We treat the source, not just the smell.",
    long: "Source-based odor treatment. Interior shampoo and extraction first, then targeted treatment in the cabin and HVAC.",
    intro:
      "Most odor problems are not a smell problem, they are a residue problem. Air fresheners and ozone alone do not work because they mask, they do not remove. We treat the source first with shampoo, extraction, and surface treatment, then handle anything left in the air with targeted cabin and HVAC treatment. The result is a car that smells like nothing — not like a different chemical that you'll get tired of by next week.",
    includes: [
      "Walk-through to identify the source: cabin, trunk, HVAC, or under-seat",
      "Full interior detail as prep so we work on clean surfaces",
      "Hot-water carpet and upholstery extraction with low-residue shampoo",
      "Headliner spot treatment with vacuum recovery — no over-saturation",
      "Trunk and cargo carpet extraction including under the spare tire",
      "Targeted cabin surface treatment for porous trim and weatherstripping",
      "Cabin air treatment that runs through the HVAC system with the blower on full",
      "Equilibrate-and-recheck: close the car, let it sit, smell it again before we hand it back",
    ],
    goodFor: [
      "Cars that were smoked in by a previous owner",
      "Pet accidents, dander, and that wet-dog cabin smell",
      "Spilled food, drinks, milk, or worse",
      "Used-car purchases where you bought the car and the smell came with it",
      "Anyone who has tried air fresheners, ozone, or DIY shampooing and given up",
    ],
    details: [
      {
        heading: "Step 1: find the source",
        body:
          "We start by walking through the car and smelling each area separately — cabin, trunk, HVAC on recirc, engine bay. Smoke residue lives in headliner foam, vent ducts, and any soft surface. Pet odor is in carpet padding, seat foam, and HVAC condensation. Food and biological spills are in carpet and the padding underneath. Knowing where the smell lives changes the treatment. A trunk smell that we treat as a cabin smell will come back in two weeks. We localize before we touch anything.",
      },
      {
        heading: "Step 2: extract, do not mask",
        body:
          "Source-based removal means physically pulling the residue out, not covering it. We hot-water extract the carpets and seats with low-residue shampoo. Headliners get a controlled chemical treatment with immediate vacuum recovery so we never over-saturate the foam — over-saturating headliner foam is what causes sag, and we avoid it. Trunk and cargo carpets get the same extraction treatment. If the spill went deeper than the carpet — like a pet accident that soaked through to the subfloor padding — we tell you up front. Sometimes the only fix is replacing pad sections, and that is a body-shop job, not a detail.",
      },
      {
        heading: "Step 3: cabin air and HVAC",
        body:
          "After surfaces are clean and dry, we treat the cabin air and HVAC. The treatment runs through the climate system with the blower on full, recirc off, then on. It reaches everywhere your air comes out of, including the evaporator and the ductwork behind the dash. This is the step that gets the last 10% out — the part of the smell that lives in the vents instead of the carpet.",
      },
      {
        heading: "Step 4: verify before handoff",
        body:
          "We close the car, let it sit, and re-check after the cabin equilibrates. If the smell remains, the source was deeper than the first scan and we keep working. We are honest about what is and is not possible. Decades of indoor smoking leaves residue in foam and weatherstripping that no chemistry will fully reverse — we will tell you up front what to expect. For most cars, including most used-car smoker buys, we get to a clean baseline that holds.",
      },
    ],
    time: "Four to eight hours",
    startingAt: "Free quote",
    faqs: [
      {
        q: "Can you really get smoke smell out?",
        a: "In most cases, yes. Severity matters. A few months of casual smoking is straightforward. Decades-long heavy smoking leaves residue in foam and headliner that we will be honest about up front — we may get to 90% and not 100%.",
      },
      {
        q: "Will it come back?",
        a: "Not if we got the source. If the smell returns within a few weeks, the source was deeper than the first treatment reached — we'll come back and treat the area we missed.",
      },
      {
        q: "Do you use ozone?",
        a: "We use ozone selectively, as a finishing step on heavy smoke cars. Ozone alone does not remove residue, which is why most ozone-only treatments fail. We treat the source first, then ozone is the last 5%.",
      },
      {
        q: "Can you remove pet accident smells from the carpet padding?",
        a: "Often, yes. Light accidents that did not soak through come out with hot-water extraction. Heavy accidents that reached the subfloor padding may need section replacement at a body shop — we will tell you which yours is after we look.",
      },
      {
        q: "Will my car smell like chemicals when you are done?",
        a: "Briefly, while it dries. Within a few hours the cabin is odor-neutral. If you have a chemical sensitivity, tell us up front and we will use a fragrance-free protocol.",
      },
      {
        q: "How long should I keep windows down after?",
        a: "An hour or two with the windows cracked is plenty. Most of the moisture is already extracted before we leave.",
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
      "dog smell removal car Bend",
      "ozone treatment car Bend",
      "used car smoke smell removal Oregon",
    ],
    metaTitle: "Car Odor Removal Bend, OR | Smoke, Pet & Food Smell",
    metaDescription:
      "Car odor removal in Bend, Oregon. Smoke, pet, food. We treat the source, not just the smell. Source-based interior treatment from a 5-star detailer.",
    updatedAt: "2026-05-19",
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
