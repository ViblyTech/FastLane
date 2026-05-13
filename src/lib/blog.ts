import { team } from "./site";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; text: string };

export type ArticleSection = {
  heading: string;
  blocks: ArticleBlock[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: (typeof team)[number]["slug"];
  publishedAt: string;
  updatedAt: string;
  readMinutes: number;
  related: string[];
  ctaService?: string;
  intro: string;
  sections: ArticleSection[];
  faqs: Array<{ q: string; a: string }>;
};

export const articles: Article[] = [
  {
    slug: "how-much-does-mobile-detailing-cost-bend-oregon",
    title: "How much does mobile detailing cost in Bend, Oregon?",
    excerpt:
      "Mobile detailing in Bend runs $80 to $400 for standard packages, with ceramic coating adding $800 to $2,000+ on top. The real cost depends on package depth, vehicle size, and condition.",
    author: "luka",
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-12",
    readMinutes: 6,
    related: ["car-wash-vs-detail", "paint-correction-vs-ceramic-coating"],
    ctaService: "mobile-detailing",
    intro:
      "Mobile detailing in Bend, Oregon runs roughly $80 for a maintenance wash to $400 for a full interior plus exterior detail, with ceramic coating adding $800 to $2,000 on top. The real number depends on three things: how deep a package the car needs, the vehicle size and condition, and whether you are adding paint protection. The honest pricing breakdown below is what we quote on the driveway in Bend.",
    sections: [
      {
        heading: "Pricing by package, real ranges",
        blocks: [
          {
            type: "p",
            text: "Most mobile detailers in Central Oregon price in package tiers. Here is what we see across Bend, Redmond, and Sisters, and what we charge for each at Fast Lane:",
          },
          {
            type: "table",
            headers: ["Package", "Typical Bend price", "Time", "What you get"],
            rows: [
              [
                "Maintenance wash",
                "$80 – $150",
                "1–2 hrs",
                "Hand wash, wheels, tires, glass, light interior wipe",
              ],
              [
                "Full exterior detail",
                "$200 – $350",
                "3–5 hrs",
                "Decontamination, clay, paint sealant, dressed trim",
              ],
              [
                "Full interior detail",
                "$200 – $350",
                "3–5 hrs",
                "Vacuum, extraction, leather conditioning, glass",
              ],
              [
                "Full int + ext detail",
                "$300 – $500",
                "5–7 hrs",
                "Everything above in one appointment",
              ],
              [
                "Paint correction",
                "$400 – $1,500",
                "6–16 hrs",
                "Machine polish, single to three-stage cut",
              ],
              [
                "Ceramic coating",
                "$800 – $2,000+",
                "1–2 days",
                "Prep, correction, professional coat",
              ],
              [
                "Odor removal",
                "$150 – $400",
                "4–8 hrs",
                "Source treatment for smoke, pet, food",
              ],
            ],
          },
        ],
      },
      {
        heading: "What actually changes the price",
        blocks: [
          {
            type: "p",
            text: "Three variables move quotes up or down on otherwise similar packages:",
          },
          {
            type: "ol",
            items: [
              "Vehicle size. A 4Runner, Suburban, or Sprinter has more square footage of paint and more interior to clean than a Civic. Add 15 to 30 percent over the table above for full-size trucks and three-row SUVs.",
              "Condition. A garaged daily driver costs less to detail than a worksite truck with a full bed of construction dust, a layer of cinder rock, and three years of pet hair. We quote based on photos and a quick walkaround, so what you pay matches what your car actually needs.",
              "Paint condition before correction or coating. Light swirls from drive-through washes need one stage of correction. Hologram patterns or oxidized clear coat need two or three. The prep determines the bill, not the coating itself.",
            ],
          },
        ],
      },
      {
        heading: "How to budget for the right tier",
        blocks: [
          {
            type: "p",
            text: "A useful way to think about it: pick the tier that matches how long you plan to keep the car.",
          },
          {
            type: "ul",
            items: [
              "Selling in 90 days: full detail ($300 to $500). Pays back in resale almost every time.",
              "Daily driver, keeping for 1 to 3 more years: full detail twice a year plus maintenance washes between.",
              "New or near-new car, keeping for 5+ years: paint correction plus ceramic coating up front, then maintenance washes. Most economical over time.",
              "Project car or showpiece: multi-stage correction plus premium coating. Quote on consult.",
            ],
          },
        ],
      },
      {
        heading: "Why mobile is competitive with fixed shops",
        blocks: [
          {
            type: "p",
            text: "A common assumption is that mobile detailing costs more because we travel. In practice, mobile prices in Bend are within 5 to 15 percent of in-shop prices for the same work, and the time you save not dropping off and picking up makes the math even tighter. We carry our own water, power, and equipment, so there is no surcharge for setup at your location.",
          },
        ],
      },
      {
        heading: "What we will not do",
        blocks: [
          {
            type: "p",
            text: "Two pricing practices you should avoid in any detailing quote, mobile or shop:",
          },
          {
            type: "ul",
            items: [
              "Coating quoted without correction prep. A ceramic coating locks in whatever is on the paint. Skipping prep on defected paint is a red flag.",
              "Flat-rate pricing without seeing the car. Every vehicle is a different job. A reputable detailer asks for photos or does a walkaround before committing to a number.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you charge extra for mobile service?",
        a: "Not for jobs inside our standard service area (Bend, Redmond, Sisters, Sunriver, Tumalo, La Pine). For jobs outside the 30-mile radius, we may add a small travel fee, but we always quote it up front.",
      },
      {
        q: "Will the quote change after you see the car?",
        a: "We try to quote accurately from photos, but if the condition is substantially different from what was described, we will walk you through any adjustment before starting. No surprise charges.",
      },
      {
        q: "Do you accept cards or only cash?",
        a: "Cash, credit, debit, Venmo, and Zelle.",
      },
    ],
  },
  {
    slug: "how-long-does-ceramic-coating-last",
    title: "How long does ceramic coating last?",
    excerpt:
      "A professional ceramic coating lasts two to five years with proper maintenance. What changes the answer: the coating tier, the install conditions, and how the car is maintained.",
    author: "luka",
    publishedAt: "2026-04-12",
    updatedAt: "2026-05-10",
    readMinutes: 6,
    related: ["paint-correction-vs-ceramic-coating", "winter-car-care-bend-oregon"],
    ctaService: "ceramic-coating",
    intro:
      "Ceramic coating is a liquid polymer that bonds chemically to a car's paint, forming a hard, transparent protective layer that resists water, UV, and chemical contaminants. A professional ceramic coating lasts two to five years with proper maintenance. The honest answer to how long yours will last depends on three things: the coating tier you choose, the install conditions when it goes on, and how you maintain the car after.",
    sections: [
      {
        heading: "What ceramic coating actually is",
        blocks: [
          {
            type: "p",
            text: "A ceramic coating is a clear, hydrophobic resin that cross-links with the clear coat at a molecular level. Once cured, it produces a glassy surface that water beads off, contaminants struggle to stick to, and UV slowly oxidizes instead of the paint underneath.",
          },
          {
            type: "p",
            text: "It is not a wax. Wax sits on top of the paint and breaks down in weeks. A coating becomes part of the paint system and only releases gradually over years.",
          },
        ],
      },
      {
        heading: "How long it actually lasts, by tier",
        blocks: [
          {
            type: "p",
            text: "Coating durability falls into roughly four tiers. Marketing claims tend to be optimistic; the real-world numbers below assume a hand-washed daily driver in Bend, Oregon.",
          },
          {
            type: "table",
            headers: ["Tier", "Real-world durability", "Typical price"],
            rows: [
              ["Consumer DIY spray", "6 to 12 months", "$30 to $80 in product"],
              ["Pro single-layer", "2 to 3 years", "$500 to $1,000 installed"],
              ["Pro multi-layer", "3 to 5 years", "$1,000 to $1,800 installed"],
              ["Graphene / SiO2 hybrid", "5 to 7 years claimed", "$1,500 to $2,500 installed"],
            ],
          },
        ],
      },
      {
        heading: "What kills a ceramic coating fastest",
        blocks: [
          {
            type: "p",
            text: "We see coatings come off cars in 18 months that should have lasted four years. The cause is almost always one of these:",
          },
          {
            type: "ul",
            items: [
              "Automatic car washes with bristle brushes that grind contaminants into the coating",
              "High-pH or household soap that strips the top layer of the coating",
              "Skipping the every-three-month maintenance wash, letting contamination bond to the surface",
              "Leaving bird droppings or bug guts on hot paint for more than a day",
              "Mag chloride exposure all winter with no rinse-offs",
            ],
          },
        ],
      },
      {
        heading: "How to make a coating last as long as possible",
        blocks: [
          {
            type: "ol",
            items: [
              "Hand-wash only, or touchless if you absolutely have to use a machine. The two-bucket method with a clean wash mitt is the gold standard.",
              "pH-neutral car shampoo. Never dish soap, never household cleaner.",
              "Rinse-off after any heavy mag chloride or cinder exposure.",
              "Annual decontamination and topper. We do this in one appointment.",
              "Address bird droppings, tree sap, and bug residue within 24 hours.",
            ],
          },
        ],
      },
      {
        heading: "When should I re-coat?",
        blocks: [
          {
            type: "p",
            text: "Water behavior is the simplest test. A healthy coating beads water into tight pearls that slide off when the car moves. When water starts sheeting flat across the panel or leaving streaks, the coating is on its way out. That is usually 18 to 24 months on a single-layer install in Bend, and longer on a multi-layer.",
          },
          {
            type: "p",
            text: "Before you re-coat, you almost always need a light decontamination and polish to bring the paint back to neutral. That prep is the difference between a coating that lasts the full advertised lifespan and one that fails a year early.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is ceramic coating worth it on an older car?",
        a: "Yes, if the paint is in decent shape or you're willing to correct it first. A coating locks in whatever is underneath. On a car with heavy oxidation or deep swirls, paint correction first is the difference between a coating that highlights gloss and one that highlights defects.",
      },
      {
        q: "Can I wax a ceramic coating?",
        a: "Yes, but you do not need to. A coating already provides hydrophobic protection. Layering wax on top is mostly cosmetic and washes off quickly.",
      },
      {
        q: "Does ceramic coating prevent rock chips?",
        a: "No. Coatings are hard, but they are thin. They will not stop rock chips. For chip protection on the front of the car, paint protection film is the right tool. Many of our customers combine PPF on the front with ceramic on the rest of the body.",
      },
    ],
  },
  {
    slug: "paint-correction-vs-ceramic-coating",
    title: "Paint correction vs ceramic coating: what's the difference?",
    excerpt:
      "Paint correction removes defects from your clear coat. Ceramic coating protects what's already there. They're two different services, and most cars benefit from both.",
    author: "ian",
    publishedAt: "2026-03-04",
    updatedAt: "2026-05-10",
    readMinutes: 5,
    related: ["how-long-does-ceramic-coating-last", "car-wash-vs-detail"],
    ctaService: "paint-correction",
    intro:
      "Paint correction is the process of removing defects from your car's clear coat using machine polishers and progressively finer abrasives. Ceramic coating is a liquid polymer applied on top of the paint to protect the finish you already have. They are two different services. Most cars benefit most from both, in that order: correction first, then coating.",
    sections: [
      {
        heading: "Paint correction, in one paragraph",
        blocks: [
          {
            type: "p",
            text: "Paint correction uses machine polishers, foam or wool pads, and abrasive compounds to level the top of the clear coat. By removing a few microns of clear, the swirls, scratches, oxidation, and hologram marks that scatter light get cut down to the bottom of the defect. What's left is paint that reflects cleanly.",
          },
        ],
      },
      {
        heading: "Ceramic coating, in one paragraph",
        blocks: [
          {
            type: "p",
            text: "Ceramic coating is a clear hydrophobic resin that bonds chemically to the clear coat. Once cured, the paint becomes harder to scratch, easier to wash, and resistant to UV oxidation. A professional coating lasts two to five years.",
          },
        ],
      },
      {
        heading: "Side by side",
        blocks: [
          {
            type: "table",
            headers: ["", "Paint correction", "Ceramic coating"],
            rows: [
              ["What it does", "Removes defects from the paint", "Adds a protective layer on top"],
              ["How long it takes", "6 to 16 hours", "1 to 2 days (includes prep)"],
              ["How long it lasts", "Permanent until new defects form", "2 to 5 years"],
              ["Typical cost", "$400 to $1,500", "$800 to $2,000"],
              ["Best for", "Cars with visible swirls or oxidation", "Cars in good condition or just corrected"],
            ],
          },
        ],
      },
      {
        heading: "Should you do one, the other, or both?",
        blocks: [
          {
            type: "p",
            text: "Three honest scenarios:",
          },
          {
            type: "ul",
            items: [
              "Correction only: your paint has defects and you do not want long-term commitment. A sealant or wax will hold the result for a few months.",
              "Coating only: your paint is in good condition and you want to lock that in. A light single-stage polish prep is usually enough.",
              "Both: your paint has defects and you want long-term protection. Correction first, coating second. This is what most cars need.",
            ],
          },
        ],
      },
      {
        heading: "What happens if you coat over swirls?",
        blocks: [
          {
            type: "p",
            text: "The coating locks the defects in. Light scatters off the marred surface the same way it did before, except now there is a clear layer over the top making them harder to remove later. A reputable installer will refuse to coat over heavy defects without correction prep. If a quote skips correction on a car that needs it, that is a red flag.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can paint correction remove deep scratches?",
        a: "It removes anything contained within the clear coat. If you can catch a fingernail on the scratch, it has likely gone through the clear into the base coat. Correction will improve those, not erase them. True elimination requires paint, not polish.",
      },
      {
        q: "How many stages of correction do I need?",
        a: "Single-stage handles light swirls and a hologram pattern from drive-through washes. Two-stage handles deeper marring and refines. Three-stage is for show-car finishes and very neglected paint. We inspect the paint and recommend stages honestly.",
      },
      {
        q: "Can you correct then coat in one trip?",
        a: "Usually yes, but it is a long appointment. Correction takes most of a day; coating prep and application take another half-day plus a cure window. Most coating jobs in Bend are scheduled across one to two days.",
      },
    ],
  },
  {
    slug: "winter-car-care-bend-oregon",
    title: "Winter car care in Bend, Oregon",
    excerpt:
      "Cinder rock, mag chloride, and freeze-thaw cycles are the three things that ruin a Central Oregon car's paint and undercarriage. Here's the minimum you need to do.",
    author: "luka",
    publishedAt: "2026-02-18",
    updatedAt: "2026-05-10",
    readMinutes: 7,
    related: ["how-long-does-ceramic-coating-last", "paint-correction-vs-ceramic-coating"],
    ctaService: "mobile-detailing",
    intro:
      "Winter in Bend brings three things that destroy paint and undercarriages: cinder rock from the road department, magnesium chloride brine, and weeks of freeze-thaw cycles. A car that goes through a Central Oregon winter unprotected can lose more paint clarity in four months than it would in a full year of any other climate. The good news is that the prevention is straightforward, and most of it can happen in two appointments.",
    sections: [
      {
        heading: "What makes Bend winters different",
        blocks: [
          {
            type: "p",
            text: "Bend sits in the high desert at roughly 3,600 feet. Winter weather here is not Portland weather and it is not Spokane weather. Three local factors stack up against your paint:",
          },
          {
            type: "ul",
            items: [
              "ODOT and Deschutes County use crushed cinder on local roads instead of pure salt. Cinder is volcanic rock with sharp edges; it acts like sandpaper at highway speed.",
              "Mag chloride brine is sprayed on highways before storms. It is corrosive, it sticks, and it loves seams, rocker panels, and any unsealed metal underneath.",
              "Our freeze-thaw cycle is brutal. Sub-freezing nights, 40-degree sunny days, and another freeze by evening. Any water that wicked into a paint chip or scratch expands every night.",
            ],
          },
        ],
      },
      {
        heading: "What cinder does to your paint",
        blocks: [
          {
            type: "p",
            text: "At 45 mph, cinder rock peppering the front of your car behaves like a sandblaster. Hoods, mirrors, A-pillars, and front fenders take the worst of it. The damage shows up as a fine field of microchips and clear coat marring that catches light and turns paint dull. Most people do not notice it until they wash the car in spring and the paint looks gray.",
          },
          {
            type: "p",
            text: "Cinder also rolls into wheel wells and rocker panels and grinds the bottom edge of your doors against the rubber seal every time you open them. By February most cars in town have a thin line of scratched paint along the lower door edges.",
          },
        ],
      },
      {
        heading: "What mag chloride does",
        blocks: [
          {
            type: "p",
            text: "Mag chloride is the brine you see sprayed across the highways before a storm. It works because magnesium chloride lowers the freezing point of water. The problem is that it also accelerates corrosion on bare metal and bonds aggressively to paint, plastic, and chrome.",
          },
          {
            type: "p",
            text: "Left on the car, mag chloride pulls moisture out of the air, stays wet, and slowly etches into the surface. Undercarriages take the worst of it, but you will see white residue on lower body panels and wheel arches if you skip rinse-offs after highway driving.",
          },
        ],
      },
      {
        heading: "The minimum winter prep",
        blocks: [
          {
            type: "p",
            text: "If you do nothing else, do these three things between November and April:",
          },
          {
            type: "ol",
            items: [
              "Hand-wash or touchless wash every one to two weeks during dry stretches. Focus on rocker panels, wheel arches, and the undercarriage.",
              "Rinse off the undercarriage and lower body within 24 hours of any highway drive through visible brine. A garden hose works; a touchless wash is better.",
              "Address paint chips immediately. A chip filled with touch-up paint is a chip that will not rust. A chip ignored for one winter is a chip that will.",
            ],
          },
        ],
      },
      {
        heading: "The 'do it once and forget about it' approach",
        blocks: [
          {
            type: "p",
            text: "If you would rather not think about winter wash schedules, the right move is a paint correction and ceramic coating combo done before Halloween. A coated car still gets dirty, but the contaminants do not bond. A quick rinse with pH-neutral soap, even at a touchless wash, gets the car back to clean.",
          },
          {
            type: "p",
            text: "We get most of our coating customers in October and early November for exactly this reason. The coating pays for itself in one Bend winter.",
          },
        ],
      },
      {
        heading: "Mid-winter and spring",
        blocks: [
          {
            type: "p",
            text: "Mid-winter, around February, is a good time for an interior detail. Salt and cinder track in on shoes, get ground into carpet, and freeze in place. A hot-water extraction pulls it out before it stains permanently.",
          },
          {
            type: "p",
            text: "Spring is the time for a full decontamination wash, a clay treatment, and either a ceramic top-up or a coat of sealant. This is when winter damage that survived gets removed and the paint gets reset for summer.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is it worth detailing a car right before winter?",
        a: "Yes, especially if you plan to keep the car. A pre-winter detail with a sealant or coating gives the paint a sacrificial layer that takes the abuse instead of the clear coat. We can usually fit a pre-winter detail in a few hours.",
      },
      {
        q: "Will a ceramic coating stop cinder damage?",
        a: "Not entirely. A coating is hard but thin. It will reduce paint marring from cinder dust and make the car easier to clean, but it will not stop rock chips. For chip protection on the front, paint protection film is the right call.",
      },
      {
        q: "What about washing in freezing weather?",
        a: "Pick a sunny day above 40 degrees. Touchless washes are safer than hand-washes in cold because the car dries faster. Avoid washing when temperatures will drop below freezing within a few hours; trapped water in door seals expands and can damage rubber.",
      },
    ],
  },
  {
    slug: "car-wash-vs-detail",
    title: "Car wash vs car detail: what you actually get",
    excerpt:
      "A car wash removes loose dirt from the surface. A detail decontaminates the paint, cleans the interior surface by surface, and finishes with protection. The difference shows.",
    author: "ian",
    publishedAt: "2026-01-20",
    updatedAt: "2026-05-10",
    readMinutes: 4,
    related: ["paint-correction-vs-ceramic-coating", "winter-car-care-bend-oregon"],
    ctaService: "mobile-detailing",
    intro:
      "A car wash removes loose dirt from the surface of your car. A car detail decontaminates the paint, cleans the interior surface by surface, and finishes with protection. The difference between the two is in what gets touched, how long it takes, and what the car looks like when you drive it away.",
    sections: [
      {
        heading: "What a car wash actually does",
        blocks: [
          {
            type: "p",
            text: "A wash hits the exterior with water, soap, and either a brush, a touchless spray, or a hand mitt. It removes loose dirt, dust, and surface grime. It does not touch the interior, it does not address bonded contamination on the paint, and it does not add any protection beyond a light spray-on wax at the end if you paid for that tier.",
          },
          {
            type: "p",
            text: "A wash takes 5 to 15 minutes. It costs $10 to $40 in town. It is the right tool for a daily driver between deeper details.",
          },
        ],
      },
      {
        heading: "What a detail actually does",
        blocks: [
          {
            type: "p",
            text: "A detail is a surface-by-surface reset of the entire car. Exterior steps include a foam pre-wash, a contact wash, decontamination of bonded contaminants like iron and tar, paint sealing or coating, glass, tire dressing, and trim revival. Interior steps include full vacuum, carpet and upholstery extraction, leather cleaning and conditioning, plastic and trim cleaning, vent and crevice detail, and streak-free glass inside.",
          },
          {
            type: "p",
            text: "A full detail takes two to eight hours depending on the package and the condition of the car. It costs $150 to $400 for a thorough job and up from there for correction and coating work.",
          },
        ],
      },
      {
        heading: "Side by side",
        blocks: [
          {
            type: "table",
            headers: ["", "Car wash", "Car detail"],
            rows: [
              ["Time", "5 to 15 minutes", "2 to 8 hours"],
              ["Exterior", "Soap, rinse, dry", "Wash, decontaminate, seal or coat"],
              ["Interior", "Not included", "Vacuum, surface clean, extraction, glass"],
              ["Frequency", "Weekly to monthly", "Quarterly or bi-annual"],
              ["Typical cost", "$10 to $40", "$150 to $400+"],
            ],
          },
        ],
      },
      {
        heading: "When a wash is enough",
        blocks: [
          {
            type: "p",
            text: "A wash is the right call between details. If the interior is clean, the paint is in decent shape, and you just want to get the cinder dust off, a wash does the job. The mistake people make is using washes alone for two or three years and expecting the paint to look the way it did new. It will not.",
          },
        ],
      },
      {
        heading: "When you actually need a detail",
        blocks: [
          {
            type: "ul",
            items: [
              "Pre-sale: a detail before listing the car typically returns multiples of its cost in resale price",
              "Post-winter: cinder and mag chloride leave residue that a wash will not touch",
              "Pet or kid season change: extraction handles hair and food in a way that vacuuming alone does not",
              "Before a ceramic coating: coatings lock in whatever is on the paint, so prep is everything",
              "Twice a year on a daily driver, just to reset",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Why does a detail cost ten times more than a wash?",
        a: "Time and depth. A wash takes fifteen minutes and touches the outside surface. A detail takes hours, touches every surface inside and outside, decontaminates the paint, and finishes with protection that lasts months. The math works out per hour.",
      },
      {
        q: "Can a wash hurt my paint?",
        a: "Automatic washes with bristle brushes can. The brushes pick up grit from earlier cars and grind it into your clear coat, leaving fine swirl marks. Touchless washes are safer. Hand-washing is safest when done with two buckets and a clean mitt.",
      },
      {
        q: "How often should I detail my car?",
        a: "Twice a year for a daily driver is the standard recommendation. Cars that live outside, in coastal climates, or under heavy tree cover may benefit from quarterly. Coated cars stretch to once a year with maintenance washes in between.",
      },
    ],
  },
];

export function findArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function articlesByAuthor(authorSlug: string) {
  return articles.filter((a) => a.author === authorSlug);
}

export function articlesByService(serviceSlug: string) {
  return articles.filter((a) => a.ctaService === serviceSlug);
}
