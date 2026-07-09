import { Link } from "@tanstack/react-router";
import { Building2, ShoppingBag, MapPin, Mail, ArrowRight, Phone, Zap, Truck } from "lucide-react";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { HomeNewsPreview, HomeEventsPreview } from "@/components/shared/Sections";
import { Reveal } from "@/components/shared/Reveal";
import { STATS } from "@/data/content";

const BASE = "/c4";

const GATEWAY = [
  {
    icon: Building2,
    title: "Corporate",
    desc: "About us, journey, business verticals, leadership & careers.",
    to: `${BASE}/about`,
    accent: "from-[#7c5cff] to-[#22d3ee]",
  },
  {
    icon: ShoppingBag,
    title: "Online Store",
    desc: "Mobile phones, accessories, smart devices & latest offers.",
    href: "https://advancetelecom.com.pk/",
    accent: "from-[#ef4444] to-[#f97316]",
  },
  {
    icon: MapPin,
    title: "Distribution Network",
    desc: "Interactive nationwide map of warehouses, offices & coverage.",
    to: `${BASE}/network`,
    accent: "from-[#22d3ee] to-[#7c5cff]",
  },
  {
    icon: Mail,
    title: "Contact Us",
    desc: "Corporate inquiries, partnerships, bulk orders & media requests.",
    to: `${BASE}/contact`,
    accent: "from-[#ef4444] to-[#3b82f6]",
  },
] as const;

export function HomeC4() {
  return (
    <>
      {/* Gateway hero */}
      <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 -left-24 h-[28rem] w-[28rem] rounded-full bg-[#7c5cff]/25 blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-[#22d3ee]/25 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-[#f97316]/20 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto pt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1.5 text-xs uppercase tracking-widest text-white/90 animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-[#22d3ee] animate-pulse" /> Interactive Business Gateway
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Welcome to <span className="block bg-gradient-to-r from-white to-[#22d3ee] bg-clip-text text-transparent">Advance Telecom</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl opacity-80 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Pakistan's leading technology distributor — choose an entry point and dive into the experience that fits you.
            </p>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GATEWAY.map((c, i) => {
              const inner = (
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:-translate-y-1 transition-transform group overflow-hidden">
                  <div className={`absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity bg-gradient-to-br ${c.accent} blur-2xl`} />
                  <div className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-2xl`}>
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-5 font-semibold text-lg">{c.title}</h3>
                  <p className="relative mt-2 text-sm opacity-75 leading-relaxed">{c.desc}</p>
                  <div className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Enter <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
              const style = { animationDelay: `${0.35 + i * 0.08}s` };
              if ("href" in c && c.href) return <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="animate-fade-up" style={style}>{inner}</a>;
              if ("to" in c) return <Link key={c.title} to={c.to as any} className="animate-fade-up" style={style}>{inner}</Link>;
              return null;
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 60}>
              <div className="rounded-2xl p-6 border border-white/10 bg-white/[0.04] text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#7c5cff] to-[#22d3ee] bg-clip-text text-transparent">
                  <AnimatedCounter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-1 text-sm opacity-75">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#22d3ee] font-semibold">What we do</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Powering Pakistan's mobile & energy economy</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { icon: Phone, t: "Mobile Distribution", d: "Authorized distributor for leading global smartphone brands." },
              { icon: Zap, t: "Energy Solutions", d: "Solar, inverter and battery solutions for homes and businesses." },
              { icon: Truck, t: "Nationwide Logistics", d: "13 warehouses and next-day delivery across 180+ cities." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 80}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 hover:-translate-y-1 transition-transform">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#7c5cff] to-[#22d3ee] text-white grid place-items-center">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{f.t}</h3>
                  <p className="mt-1.5 text-sm opacity-75">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeNewsPreview base={BASE} />
      <HomeEventsPreview base={BASE} />
    </>
  );
}
