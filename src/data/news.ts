export type NewsCategory =
  | "Corporate News"
  | "Business Updates"
  | "Product Announcements"
  | "Distribution"
  | "Partnerships"
  | "CSR Activities"
  | "Awards & Recognition"
  | "Technology"
  | "Media Coverage";

export interface NewsArticle {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string; // ISO
  author: string;
  readingTime: number; // minutes
  image: string;
  summary: string;
  body: string[]; // paragraphs
  gallery: string[];
}

const img = (seed: string, w = 1600, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const NEWS: NewsArticle[] = [
  {
    slug: "at-partners-global-brand-2026",
    title: "Advance Telecom signs nationwide distribution pact with a leading global smartphone brand",
    category: "Partnerships",
    date: "2026-06-18",
    author: "Corporate Communications",
    readingTime: 4,
    image: img("news-partner"),
    summary:
      "The multi-year agreement expands Advance Telecom's authorised portfolio and unlocks nationwide availability across 180+ cities.",
    body: [
      "Karachi — Advance Telecom Pakistan today announced a nationwide distribution partnership that adds a leading global smartphone brand to its authorised portfolio.",
      "Under the multi-year agreement, Advance Telecom will manage in-country distribution, after-sales support and channel enablement, leveraging its 12+ warehouses and 8,500+ retail partners.",
      "'This partnership deepens our commitment to bringing best-in-class technology to every corner of Pakistan,' said the company's Chief Executive.",
      "Product availability will begin rolling out through authorised retailers over the coming weeks, with dedicated brand experience zones planned in major cities.",
    ],
    gallery: [img("news-partner-a", 900, 600), img("news-partner-b", 900, 600), img("news-partner-c", 900, 600)],
  },
  {
    slug: "flagship-launch-lahore-2026",
    title: "Flagship device launch draws record crowd at Lahore experience event",
    category: "Product Announcements",
    date: "2026-05-30",
    author: "Product Marketing",
    readingTime: 3,
    image: img("news-launch"),
    summary:
      "Retail partners, media and enthusiasts gathered for the reveal of the season's most anticipated smartphone.",
    body: [
      "Lahore hosted one of the year's largest device launches, curated by Advance Telecom for retail partners, technology media and consumers.",
      "The evening featured hands-on demos, live camera walk-throughs and exclusive first-day pricing for participating retailers.",
      "The device is available starting this week across all authorised outlets nationwide.",
    ],
    gallery: [img("news-launch-a", 900, 600), img("news-launch-b", 900, 600)],
  },
  {
    slug: "new-warehouse-multan-2026",
    title: "New 40,000 sq ft warehouse opens in Multan, expanding southern-Punjab reach",
    category: "Distribution",
    date: "2026-05-12",
    author: "Operations",
    readingTime: 3,
    image: img("news-warehouse"),
    summary:
      "The facility strengthens next-day delivery for southern Punjab retailers and adds 40+ new operational roles.",
    body: [
      "Advance Telecom has inaugurated a new 40,000 sq ft distribution centre in Multan, its 13th warehouse nationwide.",
      "The facility features automated inbound processing, secure high-value storage and integrated last-mile dispatch.",
      "'Multan is a natural anchor for southern Punjab and northern Sindh,' said the head of Logistics.",
    ],
    gallery: [img("news-warehouse-a", 900, 600), img("news-warehouse-b", 900, 600)],
  },
  {
    slug: "csr-solar-schools-2026",
    title: "Solar-for-Schools programme powers 25 rural classrooms in Sindh",
    category: "CSR Activities",
    date: "2026-04-22",
    author: "Sustainability Office",
    readingTime: 4,
    image: img("news-csr"),
    summary:
      "The initiative brings uninterrupted electricity and connected learning to more than 3,000 students.",
    body: [
      "As part of its Solar-for-Schools programme, Advance Telecom's Energy division has electrified 25 rural classrooms across Sindh.",
      "Each installation combines rooftop solar, battery storage and LED lighting, replacing kerosene lamps and diesel generators.",
      "The programme will extend to 100 classrooms by the end of the fiscal year.",
    ],
    gallery: [img("news-csr-a", 900, 600), img("news-csr-b", 900, 600)],
  },
  {
    slug: "distributor-of-the-year-2026",
    title: "Advance Telecom named 'Distributor of the Year' at industry excellence awards",
    category: "Awards & Recognition",
    date: "2026-03-15",
    author: "Corporate Communications",
    readingTime: 2,
    image: img("news-award"),
    summary:
      "The recognition highlights nationwide reach, service excellence and consistent partner performance.",
    body: [
      "Advance Telecom has been named 'Distributor of the Year' at Pakistan's leading technology industry awards.",
      "The award recognises the company's nationwide coverage, service quality and consistent partner performance across every province.",
    ],
    gallery: [img("news-award-a", 900, 600)],
  },
  {
    slug: "energy-vertical-expansion-2026",
    title: "Energy vertical expands into industrial-scale solar solutions",
    category: "Business Updates",
    date: "2026-02-28",
    author: "Energy Division",
    readingTime: 3,
    image: img("news-energy"),
    summary:
      "New product lineup targets factories, warehouses and commercial buildings across Pakistan.",
    body: [
      "Advance Telecom's Energy division has launched a dedicated industrial solutions lineup — high-capacity inverters, lithium battery banks and turnkey rooftop solar installations for commercial buildings.",
      "The offering targets rising demand from factories, warehouses and large retail chains looking to reduce grid dependence.",
    ],
    gallery: [img("news-energy-a", 900, 600), img("news-energy-b", 900, 600)],
  },
  {
    slug: "retailer-training-academy-2026",
    title: "Retailer Training Academy graduates 500th cohort",
    category: "Corporate News",
    date: "2026-02-05",
    author: "Channel Enablement",
    readingTime: 2,
    image: img("news-training"),
    summary:
      "The academy equips retail staff with product, warranty and after-sales expertise across the country.",
    body: [
      "Advance Telecom's Retailer Training Academy has graduated its 500th cohort since launch.",
      "The programme, delivered both in-person and online, covers product knowledge, warranty handling and after-sales best practices.",
    ],
    gallery: [img("news-training-a", 900, 600)],
  },
  {
    slug: "media-coverage-business-recorder-2026",
    title: "'How Advance Telecom scaled to 180+ cities' — feature in Business Recorder",
    category: "Media Coverage",
    date: "2026-01-20",
    author: "Corporate Communications",
    readingTime: 3,
    image: img("news-media"),
    summary:
      "A long-form feature explores three decades of distribution leadership and the road ahead.",
    body: [
      "Business Recorder published a long-form feature exploring Advance Telecom's growth from a single office to a nationwide distribution powerhouse.",
      "The article covers strategic partnerships, warehousing investments and the company's growing energy business.",
    ],
    gallery: [img("news-media-a", 900, 600)],
  },
  {
    slug: "smart-devices-portfolio-2025",
    title: "Smart devices portfolio adds premium audio and wearables",
    category: "Product Announcements",
    date: "2025-12-10",
    author: "Product Marketing",
    readingTime: 3,
    image: img("news-smart"),
    summary:
      "A curated selection of true-wireless audio and smartwatches joins the authorised catalogue.",
    body: [
      "Advance Telecom has expanded its smart devices portfolio with a curated lineup of true-wireless earbuds, smartwatches and connected accessories.",
      "The additions are available immediately across the authorised retail network and online store.",
    ],
    gallery: [img("news-smart-a", 900, 600), img("news-smart-b", 900, 600)],
  },
  {
    slug: "logistics-tech-upgrade-2025",
    title: "Nationwide logistics platform upgraded with real-time tracking",
    category: "Technology",
    date: "2025-11-02",
    author: "Technology Office",
    readingTime: 3,
    image: img("news-tech"),
    summary:
      "Retail partners now get live shipment visibility from warehouse to storefront.",
    body: [
      "Advance Telecom has rolled out a real-time logistics tracking platform for retail partners, providing live visibility from warehouse dispatch to storefront delivery.",
      "The platform integrates with the company's ERP and mobile ordering app used by thousands of retailers nationwide.",
    ],
    gallery: [img("news-tech-a", 900, 600)],
  },
];

export const NEWS_CATEGORIES: NewsCategory[] = [
  "Corporate News",
  "Business Updates",
  "Product Announcements",
  "Distribution",
  "Partnerships",
  "CSR Activities",
  "Awards & Recognition",
  "Technology",
  "Media Coverage",
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return NEWS.find((n) => n.slug === slug);
}

export function getAdjacent(slug: string) {
  const sorted = [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const i = sorted.findIndex((n) => n.slug === slug);
  return {
    prev: i > 0 ? sorted[i - 1] : null,
    next: i >= 0 && i < sorted.length - 1 ? sorted[i + 1] : null,
  };
}
