import { Link as TSLink } from "@tanstack/react-router";
// Cast to accept string `to` (concept bases are computed at runtime).
const Link = TSLink as unknown as React.FC<any>;
import type React from "react";
import { useMemo, useState } from "react";
import { Search, Calendar, Clock, User, ArrowRight, ChevronLeft, ChevronRight, Share2, Copy, MapPin, Download, Users, CheckCircle2, Mail } from "lucide-react";
import { NEWS, NEWS_CATEGORIES, getAdjacent, type NewsArticle } from "@/data/news";
import { EVENTS, EVENT_CATEGORIES, statusOf, type EventItem } from "@/data/events";
import { ABOUT, JOURNEY, VERTICALS, WAREHOUSES, OFFICES, NETWORK_STATS, LEADERSHIP, CONTACT, STATS } from "@/data/content";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { Reveal } from "@/components/shared/Reveal";
import { MiniCalendar } from "@/components/shared/MiniCalendar";
import { Countdown } from "@/components/shared/Countdown";
import { PakistanMap } from "@/components/site/PakistanMap";
import { toast } from "sonner";

/* ------------- Utility ------------- */

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

/* ============================================================
   CORPORATE SECTIONS
   ============================================================ */

export function AboutSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-14">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">{ABOUT.headline}</h2>
        <p className="mt-5 text-lg opacity-80 max-w-2xl">{ABOUT.intro}</p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Reveal delay={80}>
          <div className="space-y-5 opacity-90 leading-relaxed">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.l} className="rounded-2xl p-5 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
                <div className="text-3xl font-bold text-[color:var(--c-accent)]">
                  <AnimatedCounter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-1 text-sm opacity-70">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {ABOUT.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <div className="h-full rounded-2xl p-6 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
              <div className="text-xs uppercase tracking-widest opacity-60">{`0${i + 1}`}</div>
              <h3 className="mt-2 font-display font-semibold text-xl">{p.title}</h3>
              <p className="mt-2 text-sm opacity-75 leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function JourneySection() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[color:var(--c-border)]" />
        <div className="space-y-10">
          {JOURNEY.map((j, i) => (
            <Reveal key={j.year} delay={i * 60}>
              <div className={`relative md:flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:items-center`}>
                <div className="md:w-1/2 md:px-10">
                  <div className="ml-12 md:ml-0 rounded-2xl p-5 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
                    <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">{j.year}</div>
                    <h3 className="mt-1 font-display font-semibold text-lg">{j.title}</h3>
                    <p className="mt-2 text-sm opacity-75">{j.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 h-4 w-4 rounded-full bg-[color:var(--c-accent)] ring-4 ring-[color:var(--c-bg)]" />
                <div className="hidden md:block md:w-1/2" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VerticalsSection({ base }: { base?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {VERTICALS.map((v, i) => (
          <Reveal key={v.title} delay={i * 60}>
            {base ? (
              <Link to={`${base}/verticals/$slug`} params={{ slug: v.slug }} className="group block h-full rounded-2xl p-6 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:border-[color:var(--c-accent)]/50">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">
                    Business Vertical
                  </div>
                  <ArrowRight className="h-4 w-4 text-[color:var(--c-accent)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
                <h3 className="mt-2 font-display font-semibold text-xl group-hover:text-[color:var(--c-accent)] transition-colors">{v.title}</h3>
                <p className="mt-2 text-sm opacity-75 leading-relaxed">{v.desc}</p>
              </Link>
            ) : (
              <div className="h-full rounded-2xl p-6 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] hover:-translate-y-1 transition-transform duration-300">
                <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">
                  Business Vertical
                </div>
                <h3 className="mt-2 font-display font-semibold text-xl">{v.title}</h3>
                <p className="mt-2 text-sm opacity-75 leading-relaxed">{v.desc}</p>
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function NetworkSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {NETWORK_STATS.map((s, i) => (
          <Reveal key={s.l} delay={i * 60}>
            <div className="rounded-2xl p-5 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] text-center">
              <div className="text-2xl md:text-3xl font-bold text-[color:var(--c-accent)]">{s.v}</div>
              <div className="mt-1 text-xs opacity-70 uppercase tracking-widest">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <PakistanMap />
      </Reveal>
      <Reveal>
        <div className="rounded-3xl p-8 md:p-12 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
          <h3 className="font-display font-semibold text-2xl">Nationwide distribution, city by city</h3>
          <p className="mt-2 opacity-75 max-w-2xl">
            From Karachi to Peshawar, Gwadar to Skardu — our distribution network moves technology across every province, every day.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Karachi","Lahore","Islamabad","Rawalpindi","Peshawar","Quetta","Multan","Faisalabad","Sialkot","Sukkur","Hyderabad","Bahawalpur","Gujranwala","Sargodha","Abbottabad","Mardan","Larkana","Mirpur","Muzaffarabad","Gilgit","Skardu"].map((c) => (
              <span key={c} className="rounded-full px-3 py-1 text-xs font-medium border border-[color:var(--c-border)] bg-[color:var(--c-bg)]">{c}</span>
            ))}
            <span className="rounded-full px-3 py-1 text-xs font-medium bg-[color:var(--c-accent)] text-white">+160 more</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export function WarehousesSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {WAREHOUSES.map((w, i) => (
          <Reveal key={w.city} delay={i * 40}>
            <div className="rounded-2xl p-5 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] flex items-start gap-4">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-[color:var(--c-accent)] text-white shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display font-semibold text-lg">{w.city}</div>
                <div className="text-sm opacity-70">{w.area}</div>
                <div className="mt-1 text-xs uppercase tracking-widest opacity-60">{w.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function OfficesSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-5">
        {OFFICES.map((o, i) => (
          <Reveal key={o.city} delay={i * 60}>
            <div className="rounded-2xl p-6 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
              <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">{o.type}</div>
              <h3 className="mt-1 font-display font-semibold text-xl">{o.city}</h3>
              <p className="mt-2 text-sm opacity-75">{o.address}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function TeamSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LEADERSHIP.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <div className="rounded-2xl p-6 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] text-center">
              <div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--c-accent)] text-white grid place-items-center font-display text-2xl font-bold">
                {p.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
              </div>
              <h3 className="mt-4 font-display font-semibold">{p.name}</h3>
              <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] mt-1">{p.role}</div>
              <p className="mt-2 text-xs opacity-70 leading-relaxed">{p.bio}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10">
      <Reveal>
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold">Get in touch</h2>
          <p className="opacity-75">
            Reach out for corporate inquiries, distribution partnerships, bulk purchases or media requests.
          </p>
          <div className="space-y-3 text-sm">
            <div><span className="opacity-60">Phone: </span>{CONTACT.phone}</div>
            <div><span className="opacity-60">Email: </span>{CONTACT.email}</div>
            <div><span className="opacity-60">HQ: </span>{CONTACT.hq}</div>
          </div>
        </div>
      </Reveal>
      <Reveal delay={120}>
        {sent ? (
          <div className="rounded-2xl p-8 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] text-center">
            <CheckCircle2 className="h-10 w-10 text-[color:var(--c-accent)] mx-auto" />
            <h3 className="mt-4 font-display font-semibold text-xl">Message received</h3>
            <p className="mt-2 text-sm opacity-75">Our team will be in touch within one business day.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4 rounded-2xl p-6 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]"
          >
            {[
              { name: "name", label: "Full name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "subject", label: "Subject", type: "text" },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-xs uppercase tracking-widest opacity-70">{f.label}</label>
                <input required type={f.type} className="mt-1 w-full rounded-lg border border-[color:var(--c-border)] bg-[color:var(--c-bg)] px-3 py-2 text-sm outline-none focus:border-[color:var(--c-accent)]" />
              </div>
            ))}
            <div>
              <label className="text-xs uppercase tracking-widest opacity-70">Message</label>
              <textarea required rows={4} className="mt-1 w-full rounded-lg border border-[color:var(--c-border)] bg-[color:var(--c-bg)] px-3 py-2 text-sm outline-none focus:border-[color:var(--c-accent)]" />
            </div>
            <button className="rounded-full px-5 py-2.5 text-sm font-semibold bg-[color:var(--c-accent)] text-white hover:opacity-90 transition">Send message</button>
          </form>
        )}
      </Reveal>
    </div>
  );
}

/* ============================================================
   NEWS
   ============================================================ */

export function NewsCard({ n, base }: { n: NewsArticle; base: string }) {
  return (
    <Link to={`${base}/news/$slug`} params={{ slug: n.slug }} className="group block rounded-2xl overflow-hidden border border-[color:var(--c-border)] bg-[color:var(--c-surface)] hover:-translate-y-1 transition-transform duration-300">
      <div className="aspect-[16/10] overflow-hidden bg-black/5">
        <img src={n.image} alt={n.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest opacity-70">
          <span className="text-[color:var(--c-accent)] font-semibold">{n.category}</span>
          <span>•</span>
          <span>{fmtDate(n.date)}</span>
        </div>
        <h3 className="mt-2 font-display font-semibold text-lg leading-snug line-clamp-2">{n.title}</h3>
        <p className="mt-2 text-sm opacity-75 line-clamp-2">{n.summary}</p>
        <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--c-accent)]">
          Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function HomeNewsPreview({ base }: { base: string }) {
  const latest = [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 3);
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">Latest News</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">From the newsroom</h2>
          </div>
          <Link to={`${base}/news`} className="text-sm font-semibold text-[color:var(--c-accent)] inline-flex items-center gap-1.5 hover:gap-2 transition-all">
            View all news <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {latest.map((n, i) => (
            <Reveal key={n.slug} delay={i * 80}>
              <NewsCard n={n} base={base} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsIndexSection({ base }: { base: string }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [year, setYear] = useState<string>("all");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const years = useMemo(() => Array.from(new Set(NEWS.map((n) => n.date.slice(0, 4)))).sort().reverse(), []);
  const filtered = useMemo(() => {
    return NEWS
      .filter((n) => cat === "all" || n.category === cat)
      .filter((n) => year === "all" || n.date.startsWith(year))
      .filter((n) => q === "" || n.title.toLowerCase().includes(q.toLowerCase()) || n.summary.toLowerCase().includes(q.toLowerCase()))
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [q, cat, year]);

  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const cur = Math.min(page, pages);
  const slice = filtered.slice((cur - 1) * perPage, cur * perPage);
  const featured = [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1))[0];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Featured */}
      <Reveal>
        <Link to={`${base}/news/$slug`} params={{ slug: featured.slug }} className="group grid md:grid-cols-2 gap-6 rounded-3xl overflow-hidden border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
          <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
            <img src={featured.image} alt={featured.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <div className="text-[11px] uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">Featured · {featured.category}</div>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">{featured.title}</h2>
            <p className="mt-3 opacity-75">{featured.summary}</p>
            <div className="mt-4 text-sm opacity-70">{fmtDate(featured.date)} · {featured.readingTime} min read</div>
          </div>
        </Link>
      </Reveal>

      {/* Filters */}
      <div className="grid md:grid-cols-4 gap-3">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
          <input
            value={q}
            onChange={(e) => { setQ(e.target.value); setPage(1); }}
            placeholder="Search news…"
            className="w-full rounded-full border border-[color:var(--c-border)] bg-[color:var(--c-surface)] pl-10 pr-4 py-2.5 text-sm outline-none focus:border-[color:var(--c-accent)]"
          />
        </div>
        <select value={cat} onChange={(e) => { setCat(e.target.value); setPage(1); }} className="rounded-full border border-[color:var(--c-border)] bg-[color:var(--c-surface)] px-4 py-2.5 text-sm outline-none">
          <option value="all">All categories</option>
          {NEWS_CATEGORIES.map((c) => (<option key={c} value={c}>{c}</option>))}
        </select>
        <select value={year} onChange={(e) => { setYear(e.target.value); setPage(1); }} className="rounded-full border border-[color:var(--c-border)] bg-[color:var(--c-surface)] px-4 py-2.5 text-sm outline-none">
          <option value="all">All years</option>
          {years.map((y) => (<option key={y} value={y}>{y}</option>))}
        </select>
      </div>

      {/* Grid */}
      {slice.length === 0 ? (
        <div className="text-center py-16 opacity-70">No articles match your filters.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {slice.map((n, i) => (
            <Reveal key={n.slug} delay={i * 60}><NewsCard n={n} base={base} /></Reveal>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button disabled={cur === 1} onClick={() => setPage(cur - 1)} className="p-2 rounded-lg border border-[color:var(--c-border)] disabled:opacity-40"><ChevronLeft className="h-4 w-4" /></button>
          {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
            <button key={p} onClick={() => setPage(p)} className={`h-9 w-9 rounded-lg text-sm font-semibold ${p === cur ? "bg-[color:var(--c-accent)] text-white" : "border border-[color:var(--c-border)]"}`}>{p}</button>
          ))}
          <button disabled={cur === pages} onClick={() => setPage(cur + 1)} className="p-2 rounded-lg border border-[color:var(--c-border)] disabled:opacity-40"><ChevronRight className="h-4 w-4" /></button>
        </div>
      )}

      {/* Newsletter */}
      <Reveal>
        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed to the Advance Telecom newsletter."); }}
          className="rounded-3xl p-8 md:p-10 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] flex flex-col md:flex-row md:items-center gap-4"
        >
          <div className="flex-1">
            <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">Newsletter</div>
            <h3 className="mt-1 font-display font-semibold text-xl">Get the latest, in your inbox</h3>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input type="email" required placeholder="you@company.com" className="flex-1 md:w-72 rounded-full border border-[color:var(--c-border)] bg-[color:var(--c-bg)] px-4 py-2.5 text-sm outline-none focus:border-[color:var(--c-accent)]" />
            <button className="rounded-full px-5 py-2.5 text-sm font-semibold bg-[color:var(--c-accent)] text-white hover:opacity-90 inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Subscribe</button>
          </div>
        </form>
      </Reveal>
    </div>
  );
}

export function NewsDetailSection({ base, article }: { base: string; article: NewsArticle }) {
  const { prev, next } = getAdjacent(article.slug);
  const related = NEWS.filter((n) => n.category === article.category && n.slug !== article.slug).slice(0, 3);
  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      try { await navigator.share({ title: article.title, url }); } catch {}
    } else {
      navigator.clipboard?.writeText(url);
      toast.success("Link copied to clipboard.");
    }
  };
  return (
    <div>
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-10 text-white">
          <div className="text-[11px] uppercase tracking-widest text-white/85">{article.category}</div>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold max-w-3xl">{article.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{fmtDate(article.date)}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readingTime} min read</span>
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{article.author}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        {article.body.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed opacity-90">{p}</p>
        ))}
        {article.gallery.length > 0 && (
          <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {article.gallery.map((g, i) => (
              <img key={i} src={g} alt="" className="rounded-xl aspect-[4/3] object-cover w-full" loading="lazy" />
            ))}
          </div>
        )}
        <div className="pt-6 flex items-center gap-2">
          <button onClick={share} className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--c-border)] px-4 py-2 text-sm hover:bg-[color:var(--c-surface)]"><Share2 className="h-4 w-4" /> Share</button>
          <button onClick={() => { navigator.clipboard?.writeText(window.location.href); toast.success("Link copied."); }} className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--c-border)] px-4 py-2 text-sm hover:bg-[color:var(--c-surface)]"><Copy className="h-4 w-4" /> Copy link</button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 grid md:grid-cols-2 gap-4">
        {prev ? (
          <Link to={`${base}/news/$slug`} params={{ slug: prev.slug }} className="rounded-2xl p-5 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] hover:-translate-y-1 transition-transform">
            <div className="text-xs uppercase tracking-widest opacity-60 inline-flex items-center gap-1.5"><ChevronLeft className="h-3 w-3" /> Previous</div>
            <div className="mt-1 font-display font-semibold">{prev.title}</div>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`${base}/news/$slug`} params={{ slug: next.slug }} className="rounded-2xl p-5 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] hover:-translate-y-1 transition-transform text-right">
            <div className="text-xs uppercase tracking-widest opacity-60 inline-flex items-center gap-1.5 justify-end w-full">Next <ChevronRight className="h-3 w-3" /></div>
            <div className="mt-1 font-display font-semibold">{next.title}</div>
          </Link>
        ) : <div />}
      </div>
      {related.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">Related</div>
          <h3 className="mt-1 font-display font-semibold text-2xl">More in {article.category}</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {related.map((n) => (<NewsCard key={n.slug} n={n} base={base} />))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   EVENTS
   ============================================================ */

export function EventCard({ e, base }: { e: EventItem; base: string }) {
  const st = statusOf(e.date);
  const stColor = st === "upcoming" ? "bg-emerald-500" : st === "ongoing" ? "bg-amber-500" : "bg-slate-400";
  return (
    <Link to={`${base}/events/$slug`} params={{ slug: e.slug }} className="group block rounded-2xl overflow-hidden border border-[color:var(--c-border)] bg-[color:var(--c-surface)] hover:-translate-y-1 transition-transform duration-300">
      <div className="aspect-[16/9] overflow-hidden bg-black/5 relative">
        <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-widest text-white ${stColor}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-white" /> {st}
        </span>
      </div>
      <div className="p-5">
        <div className="text-[11px] uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">{e.category}</div>
        <h3 className="mt-1 font-display font-semibold text-lg leading-snug">{e.title}</h3>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs opacity-80">
          <div className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{fmtDate(e.date)}</div>
          <div className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{e.time}</div>
          <div className="inline-flex items-center gap-1.5 col-span-2"><MapPin className="h-3.5 w-3.5" />{e.venue}</div>
          <div className="inline-flex items-center gap-1.5 col-span-2"><Users className="h-3.5 w-3.5" />{e.organizer}</div>
        </div>
        <p className="mt-3 text-sm opacity-75 line-clamp-2">{e.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className={`text-xs font-semibold ${e.registrationOpen ? "text-emerald-600" : "opacity-60"}`}>
            {e.registrationOpen ? "Registration Open" : "Registration Closed"}
          </span>
          <span className="text-sm font-semibold text-[color:var(--c-accent)] inline-flex items-center gap-1">View Details <ArrowRight className="h-4 w-4" /></span>
        </div>
      </div>
    </Link>
  );
}

export function HomeEventsPreview({ base }: { base: string }) {
  const upcoming = EVENTS.filter((e) => statusOf(e.date) === "upcoming").sort((a, b) => (a.date < b.date ? -1 : 1))[0];
  if (!upcoming) return null;
  return (
    <section className="py-16 md:py-24 bg-[color:var(--c-surface)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8 items-stretch rounded-3xl overflow-hidden border border-[color:var(--c-border)] bg-[color:var(--c-bg)]">
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
              <img src={upcoming.image} alt={upcoming.title} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">Next Upcoming Event</div>
              <h2 className="mt-2 text-3xl font-bold">{upcoming.title}</h2>
              <div className="mt-3 flex flex-wrap gap-4 text-sm opacity-80">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{fmtDate(upcoming.date)} · {upcoming.time}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{upcoming.venue}</span>
              </div>
              <p className="mt-4 opacity-75">{upcoming.description}</p>
              <div className="mt-6 flex gap-3">
                <Link to={`${base}/events/$slug`} params={{ slug: upcoming.slug }} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--c-accent)] text-white px-5 py-2.5 text-sm font-semibold">Event Details <ArrowRight className="h-4 w-4" /></Link>
                <Link to={`${base}/events`} className="inline-flex items-center gap-2 rounded-full border border-[color:var(--c-border)] px-5 py-2.5 text-sm font-semibold">View All Events</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function EventsIndexSection({ base }: { base: string }) {
  const [filterDate, setFilterDate] = useState<string | null>(null);
  const [cat, setCat] = useState<string>("all");

  const upcoming = EVENTS
    .filter((e) => filterDate ? e.date === filterDate : true)
    .filter((e) => cat === "all" || e.category === cat)
    .sort((a, b) => (a.date < b.date ? -1 : 1));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid lg:grid-cols-[380px_1fr] gap-8">
        <div className="space-y-4 lg:sticky lg:top-24 self-start">
          <MiniCalendar selected={filterDate} onSelect={(d) => setFilterDate(filterDate === d ? null : d)} />
          <div>
            <label className="text-xs uppercase tracking-widest opacity-70">Filter by category</label>
            <select value={cat} onChange={(e) => setCat(e.target.value)} className="mt-1 w-full rounded-lg border border-[color:var(--c-border)] bg-[color:var(--c-surface)] px-3 py-2 text-sm">
              <option value="all">All categories</option>
              {EVENT_CATEGORIES.map((c) => (<option key={c} value={c}>{c}</option>))}
            </select>
          </div>
          {filterDate && (
            <button onClick={() => setFilterDate(null)} className="text-xs text-[color:var(--c-accent)] font-semibold">Clear date filter ({filterDate})</button>
          )}
        </div>
        <div className="space-y-5">
          {upcoming.length === 0 ? (
            <div className="rounded-2xl p-10 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] text-center opacity-70">No events match your filters.</div>
          ) : upcoming.map((e, i) => (
            <Reveal key={e.slug} delay={i * 60}><EventCard e={e} base={base} /></Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EventDetailSection({ base, event }: { base: string; event: EventItem }) {
  const st = statusOf(event.date);
  const related = EVENTS.filter((e) => e.category === event.category && e.slug !== event.slug).slice(0, 3);
  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) { try { await navigator.share({ title: event.title, url }); } catch {} }
    else { navigator.clipboard?.writeText(url); toast.success("Link copied."); }
  };
  return (
    <div>
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <img src={event.image} alt={event.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-10 text-white">
          <div className="text-[11px] uppercase tracking-widest text-white/85">{event.category} · {st}</div>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold max-w-3xl">{event.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{fmtDate(event.date)} · {event.time}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{event.venue}, {event.city}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-10">
          <p className="text-lg opacity-90 leading-relaxed">{event.description}</p>

          {st === "upcoming" && (
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">Countdown</div>
              <div className="mt-3"><Countdown target={event.date} /></div>
            </div>
          )}

          {event.agenda.length > 0 && (
            <div>
              <h2 className="font-display font-semibold text-2xl">Agenda</h2>
              <div className="mt-4 space-y-3">
                {event.agenda.map((a, i) => (
                  <div key={i} className="flex gap-4 rounded-xl p-4 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
                    <div className="min-w-[110px] text-sm font-semibold text-[color:var(--c-accent)]">{a.time}</div>
                    <div className="text-sm">{a.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.speakers.length > 0 && (
            <div>
              <h2 className="font-display font-semibold text-2xl">Speakers</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {event.speakers.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 rounded-xl p-4 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
                    <img src={s.image} alt={s.name} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="text-xs opacity-70">{s.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {event.gallery.length > 0 && (
            <div>
              <h2 className="font-display font-semibold text-2xl">Gallery</h2>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                {event.gallery.map((g, i) => (
                  <img key={i} src={g} alt="" className="rounded-xl aspect-[4/3] object-cover w-full" loading="lazy" />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl p-5 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
            <div className="text-xs uppercase tracking-widest opacity-70">Venue</div>
            <div className="mt-1 font-semibold">{event.venue}</div>
            <div className="text-sm opacity-70">{event.city}</div>
            <div className="mt-3 aspect-[4/3] rounded-lg bg-[color:var(--c-bg)] border border-[color:var(--c-border)] grid place-items-center opacity-70 text-sm">
              <div className="text-center">
                <MapPin className="h-6 w-6 mx-auto text-[color:var(--c-accent)]" />
                <div className="mt-1 text-xs">Google Map placeholder</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-5 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] space-y-3">
            <div className="text-xs uppercase tracking-widest opacity-70">Organizer</div>
            <div className="font-semibold">{event.organizer}</div>
            <button
              disabled={!event.registrationOpen}
              onClick={() => event.registrationOpen && toast.success("Registration received — see you there!")}
              className="w-full rounded-full py-2.5 text-sm font-semibold bg-[color:var(--c-accent)] text-white disabled:opacity-50"
            >
              {event.registrationOpen ? "Register Now" : "Registration Closed"}
            </button>
            <div className="flex gap-2">
              <button onClick={share} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-[color:var(--c-border)] py-2 text-xs"><Share2 className="h-3.5 w-3.5" /> Share</button>
              <button onClick={() => { navigator.clipboard?.writeText(window.location.href); toast.success("Link copied."); }} className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-[color:var(--c-border)] py-2 text-xs"><Copy className="h-3.5 w-3.5" /> Copy</button>
            </div>
          </div>

          {event.downloads.length > 0 && (
            <div className="rounded-2xl p-5 border border-[color:var(--c-border)] bg-[color:var(--c-surface)]">
              <div className="text-xs uppercase tracking-widest opacity-70">Downloads</div>
              <div className="mt-2 space-y-2">
                {event.downloads.map((d) => (
                  <button key={d.name} onClick={() => toast.info("Download placeholder")} className="w-full flex items-center justify-between gap-2 rounded-lg border border-[color:var(--c-border)] px-3 py-2 text-sm hover:bg-[color:var(--c-bg)]">
                    <span className="inline-flex items-center gap-2"><Download className="h-4 w-4 text-[color:var(--c-accent)]" />{d.name}</span>
                    <span className="text-xs opacity-60">{d.size}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {related.length > 0 && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">Related events</div>
          <h3 className="mt-1 font-display font-semibold text-2xl">More {event.category}</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            {related.map((e) => (<EventCard key={e.slug} e={e} base={base} />))}
          </div>
        </div>
      )}
    </div>
  );
}
