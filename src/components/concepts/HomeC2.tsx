import { Link } from "@tanstack/react-router";
import { ArrowRight, ShoppingBag, Building2 } from "lucide-react";
import { HomeNewsPreview, HomeEventsPreview } from "@/components/shared/Sections";
import { Reveal } from "@/components/shared/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { COMPANY, STATS, VERTICALS } from "@/data/content";

const BASE = "/c2";

export function HomeC2() {
  return (
    <>
      {/* Split-screen hero */}
      <section className="relative min-h-screen pt-20 md:pt-16 flex flex-col md:flex-row overflow-hidden">
        <div className="group relative flex-1 min-h-[50vh] md:min-h-screen bg-[#0f0f11] text-white flex items-center justify-center overflow-hidden transition-[flex] duration-500 hover:flex-[1.25]">
          <div
            className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
            style={{ backgroundImage: `url(https://picsum.photos/seed/at-corporate/1400/1600)`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30" />
          <div className="relative z-10 max-w-md px-8 py-16 md:py-0 text-center md:text-left">
            <Building2 className="h-8 w-8 opacity-70" />
            <div className="mt-4 text-[11px] uppercase tracking-[0.3em] text-white/70">The Corporation</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold uppercase leading-[0.95]">Advance<br /><span className="text-white/50">Telecom</span></h1>
            <p className="mt-5 text-sm md:text-base text-white/70">Three decades of nationwide distribution, business verticals and leadership — explore the corporate side.</p>
            <Link to={BASE as any} onClick={(e) => e.preventDefault()} className="mt-8 hidden" />
            <a href="#corporate" className="mt-8 inline-flex items-center gap-2 border border-white/40 px-6 py-3 font-semibold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Enter Corporate <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="group relative flex-1 min-h-[50vh] md:min-h-screen bg-[#ef2b3a] text-white flex items-center justify-center overflow-hidden transition-[flex] duration-500 hover:flex-[1.25]">
          <div
            className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity mix-blend-luminosity"
            style={{ backgroundImage: `url(https://picsum.photos/seed/at-store/1400/1600)`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#ef2b3a]/90 to-[#ef2b3a]/40" />
          <div className="relative z-10 max-w-md px-8 py-16 md:py-0 text-center md:text-left">
            <ShoppingBag className="h-8 w-8 opacity-90" />
            <div className="mt-4 text-[11px] uppercase tracking-[0.3em] text-white/85">The Marketplace</div>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold uppercase leading-[0.95]">Online<br /><span className="text-white/70">Store</span></h1>
            <p className="mt-5 text-sm md:text-base text-white/85">Mobile phones, accessories, smart devices and energy solutions — shop the full catalogue.</p>
            <a href={COMPANY.storeUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-white text-[#ef2b3a] px-6 py-3 font-semibold text-sm uppercase tracking-widest hover:opacity-90">
              Enter Store <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Corporate anchor */}
      <section id="corporate" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--c-accent)] font-bold">Corporate Overview</div>
              <h2 className="mt-3 text-4xl md:text-6xl font-bold uppercase leading-[0.95]">Built for the whole country.</h2>
            </div>
            <p className="opacity-70 max-w-md">
              We move the world's most-loved technology brands into more than 180 Pakistani cities every day — through partners, warehouses and people who never stop showing up.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--c-border)] border border-[color:var(--c-border)]">
            {STATS.map((s) => (
              <div key={s.l} className="bg-[color:var(--c-bg)] p-8">
                <div className="text-4xl md:text-5xl font-bold text-[color:var(--c-accent)]">
                  <AnimatedCounter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest opacity-70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals — asymmetric */}
      <section className="py-20 md:py-28 bg-[color:var(--c-surface)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--c-accent)] font-bold">Business Verticals</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold uppercase max-w-3xl leading-[0.95]">Six divisions moving in one direction.</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {VERTICALS.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className={`relative rounded-none p-8 border border-[color:var(--c-border)] bg-[color:var(--c-bg)] ${i % 4 === 0 ? "md:col-span-2" : ""}`}>
                  <div className="text-6xl font-bold text-[color:var(--c-accent)]/25 leading-none">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-4 text-2xl font-bold uppercase">{v.title}</h3>
                  <p className="mt-2 text-sm opacity-75">{v.desc}</p>
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
