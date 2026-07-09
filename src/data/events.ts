export type EventCategory =
  | "Product Launches"
  | "Corporate Events"
  | "Dealer Meetups"
  | "Distributor Conferences"
  | "Trade Shows"
  | "Technology Exhibitions"
  | "CSR Activities"
  | "Recruitment Drives"
  | "Training Sessions"
  | "Annual Meetings";

export type EventStatus = "upcoming" | "ongoing" | "completed";

export interface EventItem {
  slug: string;
  title: string;
  category: EventCategory;
  date: string; // ISO YYYY-MM-DD
  time: string;
  venue: string;
  city: string;
  organizer: string;
  image: string;
  description: string;
  agenda: { time: string; title: string }[];
  speakers: { name: string; role: string; image: string }[];
  gallery: string[];
  downloads: { name: string; size: string }[];
  registrationOpen: boolean;
}

const img = (seed: string, w = 1600, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// Anchor "today" so status is stable regardless of clock
const TODAY = new Date();
const iso = (d: Date) => d.toISOString().slice(0, 10);
const addDays = (n: number) => {
  const d = new Date(TODAY);
  d.setDate(d.getDate() + n);
  return iso(d);
};

export const EVENTS: EventItem[] = [
  {
    slug: "flagship-launch-karachi",
    title: "Flagship Smartphone Launch — Karachi",
    category: "Product Launches",
    date: addDays(14),
    time: "7:00 PM",
    venue: "Movenpick Hotel, Grand Ballroom",
    city: "Karachi",
    organizer: "Advance Telecom Product Marketing",
    image: img("event-launch"),
    description:
      "An exclusive evening unveiling the season's most anticipated flagship smartphone, with hands-on demos, retailer pricing and photography walkthroughs.",
    agenda: [
      { time: "7:00 PM", title: "Registration & networking" },
      { time: "7:45 PM", title: "Keynote & device unveil" },
      { time: "8:30 PM", title: "Hands-on demo zones" },
      { time: "9:30 PM", title: "Dinner & partner announcements" },
    ],
    speakers: [
      { name: "Ahsan Rauf", role: "Head of Product Marketing", image: img("sp-1", 400, 400) },
      { name: "Sara Iqbal", role: "Brand Director", image: img("sp-2", 400, 400) },
    ],
    gallery: [img("event-launch-a", 900, 600), img("event-launch-b", 900, 600), img("event-launch-c", 900, 600)],
    downloads: [
      { name: "Product deck (PDF)", size: "3.4 MB" },
      { name: "Retailer pricing sheet (PDF)", size: "812 KB" },
    ],
    registrationOpen: true,
  },
  {
    slug: "dealer-meetup-lahore",
    title: "Dealer Meetup — Lahore",
    category: "Dealer Meetups",
    date: addDays(7),
    time: "3:00 PM",
    venue: "Pearl Continental, Lahore",
    city: "Lahore",
    organizer: "Channel Enablement",
    image: img("event-dealer"),
    description:
      "Quarterly dealer meetup for Punjab region — new incentives, roadmap and Q&A with senior leadership.",
    agenda: [
      { time: "3:00 PM", title: "Welcome & regional performance" },
      { time: "4:00 PM", title: "New incentive programme" },
      { time: "5:00 PM", title: "Open Q&A" },
      { time: "6:00 PM", title: "Hi-tea" },
    ],
    speakers: [
      { name: "Bilal Hassan", role: "Regional Sales Head", image: img("sp-3", 400, 400) },
    ],
    gallery: [img("event-dealer-a", 900, 600), img("event-dealer-b", 900, 600)],
    downloads: [{ name: "Incentive brochure (PDF)", size: "1.2 MB" }],
    registrationOpen: true,
  },
  {
    slug: "distributor-conference-2026",
    title: "Annual Distributor Conference 2026",
    category: "Distributor Conferences",
    date: addDays(45),
    time: "10:00 AM",
    venue: "Serena Hotel, Islamabad",
    city: "Islamabad",
    organizer: "Corporate Office",
    image: img("event-conference"),
    description:
      "Two-day national distributor conference featuring strategy sessions, brand keynotes and awards.",
    agenda: [
      { time: "Day 1 · 10:00 AM", title: "Opening keynote" },
      { time: "Day 1 · 2:00 PM", title: "Brand strategy sessions" },
      { time: "Day 2 · 10:00 AM", title: "Regional break-outs" },
      { time: "Day 2 · 7:00 PM", title: "Awards & gala dinner" },
    ],
    speakers: [
      { name: "Chief Executive Officer", role: "Advance Telecom", image: img("sp-4", 400, 400) },
      { name: "Chief Commercial Officer", role: "Advance Telecom", image: img("sp-5", 400, 400) },
    ],
    gallery: [img("event-conf-a", 900, 600), img("event-conf-b", 900, 600), img("event-conf-c", 900, 600)],
    downloads: [{ name: "Conference agenda (PDF)", size: "2.1 MB" }],
    registrationOpen: true,
  },
  {
    slug: "itcn-asia-2026",
    title: "ITCN Asia — Advance Telecom Pavilion",
    category: "Trade Shows",
    date: addDays(-3),
    time: "10:00 AM — 8:00 PM",
    venue: "Expo Centre, Karachi",
    city: "Karachi",
    organizer: "Marketing",
    image: img("event-itcn"),
    description:
      "Ongoing three-day pavilion showcasing the full smartphone, accessory and energy portfolio.",
    agenda: [{ time: "All day", title: "Product zones, live demos, giveaways" }],
    speakers: [],
    gallery: [img("event-itcn-a", 900, 600), img("event-itcn-b", 900, 600)],
    downloads: [],
    registrationOpen: false,
  },
  {
    slug: "csr-tree-plantation-2026",
    title: "Nationwide Tree Plantation Drive",
    category: "CSR Activities",
    date: addDays(21),
    time: "8:00 AM",
    venue: "Multiple cities",
    city: "Nationwide",
    organizer: "Sustainability Office",
    image: img("event-csr"),
    description:
      "Employee-led tree plantation drive across all Advance Telecom cities to mark World Environment Week.",
    agenda: [
      { time: "8:00 AM", title: "Volunteer briefing" },
      { time: "9:00 AM", title: "Plantation begins" },
      { time: "12:00 PM", title: "Community lunch" },
    ],
    speakers: [],
    gallery: [img("event-csr-a", 900, 600)],
    downloads: [],
    registrationOpen: true,
  },
  {
    slug: "recruitment-drive-lahore",
    title: "Recruitment Drive — Sales & Operations",
    category: "Recruitment Drives",
    date: addDays(30),
    time: "10:00 AM",
    venue: "Advance Telecom Head Office, Lahore",
    city: "Lahore",
    organizer: "Human Resources",
    image: img("event-hr"),
    description: "Open recruitment for sales, operations and warehouse leadership roles across Pakistan.",
    agenda: [
      { time: "10:00 AM", title: "Registration & CV drop" },
      { time: "11:00 AM", title: "On-site interviews" },
    ],
    speakers: [],
    gallery: [img("event-hr-a", 900, 600)],
    downloads: [{ name: "Open roles list (PDF)", size: "540 KB" }],
    registrationOpen: true,
  },
  {
    slug: "training-solar-installers",
    title: "Certified Solar Installer Training",
    category: "Training Sessions",
    date: addDays(10),
    time: "9:00 AM",
    venue: "Advance Telecom Energy Training Centre, Karachi",
    city: "Karachi",
    organizer: "Energy Division",
    image: img("event-training"),
    description:
      "Three-day certified training for solar installers and technicians — theory, safety and hands-on labs.",
    agenda: [
      { time: "Day 1", title: "Solar fundamentals & safety" },
      { time: "Day 2", title: "Inverter & battery integration" },
      { time: "Day 3", title: "Hands-on installation lab" },
    ],
    speakers: [
      { name: "Farhan Malik", role: "Head of Energy Training", image: img("sp-6", 400, 400) },
    ],
    gallery: [img("event-training-a", 900, 600)],
    downloads: [{ name: "Training syllabus (PDF)", size: "1.1 MB" }],
    registrationOpen: true,
  },
  {
    slug: "annual-general-meeting-2026",
    title: "Annual General Meeting 2026",
    category: "Annual Meetings",
    date: addDays(70),
    time: "11:00 AM",
    venue: "Advance Telecom Corporate HQ, Karachi",
    city: "Karachi",
    organizer: "Board Office",
    image: img("event-agm"),
    description: "Annual General Meeting covering financial results, strategy and shareholder Q&A.",
    agenda: [
      { time: "11:00 AM", title: "Chairman address" },
      { time: "11:45 AM", title: "Financial results review" },
      { time: "12:30 PM", title: "Shareholder Q&A" },
    ],
    speakers: [],
    gallery: [img("event-agm-a", 900, 600)],
    downloads: [{ name: "AGM notice (PDF)", size: "310 KB" }],
    registrationOpen: false,
  },
  {
    slug: "tech-expo-islamabad",
    title: "Technology Expo — Islamabad",
    category: "Technology Exhibitions",
    date: addDays(-30),
    time: "10:00 AM",
    venue: "Pak-China Friendship Centre, Islamabad",
    city: "Islamabad",
    organizer: "Marketing",
    image: img("event-expo"),
    description: "Completed technology expo featuring the full Advance Telecom portfolio and interactive demos.",
    agenda: [{ time: "All day", title: "Pavilion open" }],
    speakers: [],
    gallery: [img("event-expo-a", 900, 600), img("event-expo-b", 900, 600)],
    downloads: [],
    registrationOpen: false,
  },
  {
    slug: "corporate-townhall-2026",
    title: "Corporate Town Hall — Q3 FY26",
    category: "Corporate Events",
    date: addDays(3),
    time: "4:00 PM",
    venue: "Advance Telecom Corporate HQ, Karachi",
    city: "Karachi",
    organizer: "Corporate Office",
    image: img("event-townhall"),
    description: "Quarterly all-hands town hall covering business performance, product roadmap and Q&A.",
    agenda: [
      { time: "4:00 PM", title: "Leadership address" },
      { time: "5:00 PM", title: "Team Q&A" },
    ],
    speakers: [],
    gallery: [img("event-townhall-a", 900, 600)],
    downloads: [],
    registrationOpen: false,
  },
];

export const EVENT_CATEGORIES: EventCategory[] = [
  "Product Launches",
  "Corporate Events",
  "Dealer Meetups",
  "Distributor Conferences",
  "Trade Shows",
  "Technology Exhibitions",
  "CSR Activities",
  "Recruitment Drives",
  "Training Sessions",
  "Annual Meetings",
];

export function statusOf(dateStr: string): EventStatus {
  const today = iso(new Date());
  if (dateStr === today) return "ongoing";
  return dateStr > today ? "upcoming" : "completed";
}

export function getEventBySlug(slug: string): EventItem | undefined {
  return EVENTS.find((e) => e.slug === slug);
}
