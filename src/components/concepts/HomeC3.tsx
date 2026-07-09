import { Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingBag, Phone, Zap, Truck, Award, MapPin, Users } from "lucide-react";
import { HomeNewsPreview, HomeEventsPreview } from "@/components/shared/Sections";
import { Reveal } from "@/components/shared/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { COMPANY, STATS, VERTICALS, NETWORK_STATS } from "@/data/content";

const BASE = "/c3";

const FEATURES = [
  { icon: Phone, t: "Mobile Distribution", d: "Authorized distributor for leading global smartphone brands." },
  { icon: Zap, t: "Energy Solutions", d: "Solar, inverter and battery solutions for homes and businesses." },
  { icon: Truck, t: "Nationwide Logistics", d: "13 warehouses and next-day delivery across 180+ cities." },
  { icon: Award, t: "Award-Winning Service", d: "Recognised as Pakistan's leading technology distributor." },
];

export function HomeC3() {
  return (
    <>
      {/* Immediate corporate hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-[color:var(--c-accent)] to-[#3b82f6] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-[11px] uppercase tracking-widest">Pakistan's #1 Technology Distributor</div>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">{COMPANY.name} — trusted by 8,500+ retailers nationwide.</h1>
            <p className="mt-5 text-lg text-white/85 max-w-2xl">Authorized distribution of the world's leading mobile, smart-device and energy brands — delivered to 180+ cities across Pakistan through 13 warehouses.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={`${BASE}/about` as any} className="inline-flex items-center gap-2 rounded-lg bg-white text-[color:var(--c-accent)] px-6 py-3 font-semibold hover:opacity-95">
                About the company <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={COMPANY.storeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--c-accent-2)] text-white px-6 py-3 font-semibold hover:opacity-95">
                <ShoppingBag className="h-4 w-4" /> Shop Now
              </a>
              <Link to={`${BASE}/contact` as any} className="inline-flex items-center gap-2 rounded-lg border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-[color:var(--c-accent)]">
                Become a partner
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-6 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.l} className="rounded-xl bg-white/10 p-4">
                  <div className="text-3xl font-bold">
                    <AnimatedCounter to={s.n} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-white/80">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inline Shop CTA banner */}
      <section className="bg-[color:var(--c-accent-2)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm md:text-base font-semibold inline-flex items-center gap-2"><ShoppingBag className="h-4 w-4" /> Looking to buy? Explore the latest smartphones, accessories & smart devices on our online store.</div>
          <a href={COMPANY.storeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-white text-[color:var(--c-accent-2)] px-4 py-2 text-sm font-semibold">Visit Store <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">What we do</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">A complete technology distribution ecosystem</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.t} delay={i * 60}>
                <div className="rounded-2xl p-6 border border-[color:var(--c-border)] bg-[color:var(--c-surface)] hover:-translate-y-1 transition-transform">
                  <div className="h-12 w-12 rounded-lg grid place-items-center bg-[color:var(--c-accent)]/10 text-[color:var(--c-accent)]">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{f.t}</h3>
                  <p className="mt-2 text-sm opacity-75">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-16 md:py-24 bg-[color:var(--c-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 items-end gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">Business Verticals</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold">Six divisions, one nationwide network</h2>
            </div>
            <Link to={`${BASE}/verticals` as any} className="text-sm font-semibold text-[color:var(--c-accent)] justify-self-start md:justify-self-end inline-flex items-center gap-1.5">Explore verticals <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {VERTICALS.map((v, i) => (
              <Reveal key={v.title} delay={i * 50}>
                <div className="rounded-2xl p-5 bg-[color:var(--c-bg)] border border-[color:var(--c-border)]">
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm opacity-75">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Network summary + shop CTA repeat */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-[color:var(--c-accent)] font-semibold">Distribution Network</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">Everywhere you need us to be.</h2>
            <p className="mt-3 opacity-75 max-w-lg">Regional offices, warehouses and retail partnerships that reach every province of Pakistan — plus Azad Jammu & Kashmir.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {NETWORK_STATS.slice(0, 3).map((s) => (
                <div key={s.l} className="rounded-lg p-4 bg-[color:var(--c-surface)] border border-[color:var(--c-border)]">
                  <div className="text-2xl font-bold text-[color:var(--c-accent)]">{s.v}</div>
                  <div className="text-xs opacity-70">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Link to={`${BASE}/network` as any} className="inline-flex items-center gap-1.5 rounded-lg bg-[color:var(--c-accent)] text-white px-5 py-2.5 text-sm font-semibold">Explore network <MapPin className="h-4 w-4" /></Link>
              <Link to={`${BASE}/team` as any} className="inline-flex items-center gap-1.5 rounded-lg border border-[color:var(--c-border)] px-5 py-2.5 text-sm font-semibold"><Users className="h-4 w-4" /> Meet leadership</Link>
            </div>
          </div>
          <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-[color:var(--c-accent-2)] to-orange-500 text-white">
            <div className="text-xs uppercase tracking-widest font-semibold">Ready to shop?</div>
            <h3 className="mt-2 text-2xl md:text-3xl font-bold">Browse the online store — same brands, delivered nationwide.</h3>
            <p className="mt-3 opacity-90">Latest smartphones, wireless audio, accessories and energy essentials.</p>
            <a href={COMPANY.storeUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white text-[color:var(--c-accent-2)] px-5 py-2.5 text-sm font-semibold">
              <ShoppingBag className="h-4 w-4" /> Open the store
            </a>
          </div>
        </div>
      </section>

      <HomeNewsPreview base={BASE} />
      <HomeEventsPreview base={BASE} />
    </>
  );
}
