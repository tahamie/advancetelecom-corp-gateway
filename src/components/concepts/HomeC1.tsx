import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, ArrowRight, ShoppingBag, Building2 } from "lucide-react";
import { HomeNewsPreview, HomeEventsPreview } from "@/components/shared/Sections";
import { Reveal } from "@/components/shared/Reveal";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { COMPANY, STATS, ABOUT, VERTICALS } from "@/data/content";

const BASE = "/c1";
const SESSION_KEY = "at-c1-welcome-dismissed";

export function HomeC1() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!sessionStorage.getItem(SESSION_KEY)) setShowPopup(true);
  }, []);
  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && <WelcomePopup onDismiss={dismiss} />}

      {/* Editorial hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--c-accent-2)] font-semibold">Est. 1994 · Karachi, Pakistan</div>
          <h1 className="mt-4 text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-medium max-w-5xl" style={{ fontFamily: '"Fraunces", serif' }}>
            The quiet force behind Pakistan's <em className="text-[color:var(--c-accent-2)] not-italic font-normal" style={{ fontFamily: '"Fraunces", serif', fontStyle: "italic" }}>connected life</em>.
          </h1>
          <p className="mt-8 text-lg md:text-xl max-w-2xl opacity-75 leading-relaxed">
            {COMPANY.name} distributes the world's most trusted mobile, smart-device and energy brands across 180+ cities — through 8,500+ retail partners and a network of 13 warehouses.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to={`${BASE}/about` as any} className="inline-flex items-center gap-2 rounded-none border-2 border-[color:var(--c-accent)] text-[color:var(--c-accent)] px-6 py-3 font-semibold hover:bg-[color:var(--c-accent)] hover:text-white transition-colors">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={COMPANY.storeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-none bg-[color:var(--c-accent-2)] text-white px-6 py-3 font-semibold hover:opacity-90">
              <ShoppingBag className="h-4 w-4" /> Visit the store
            </a>
          </div>
        </div>
      </section>

      {/* Rule + intro */}
      <section className="border-t border-[color:var(--c-border)] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--c-accent-2)] font-semibold">A note from the newsroom</div>
            <div className="mt-2 text-sm opacity-70">Vol. XXX · Corporate Edition</div>
          </div>
          <div className="md:col-span-8 space-y-5">
            <p className="text-2xl md:text-3xl leading-snug" style={{ fontFamily: '"Fraunces", serif' }}>
              "For three decades, we have grown one partnership, one shipment and one satisfied retailer at a time — and we intend to keep it that way."
            </p>
            <p className="opacity-75 leading-relaxed">{ABOUT.intro}</p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-t border-[color:var(--c-border)] py-20 bg-[color:var(--c-surface)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 60}>
              <div className="text-center px-4 py-6 md:border-r last:border-r-0 border-[color:var(--c-border)]">
                <div className="text-4xl md:text-5xl text-[color:var(--c-accent-2)]" style={{ fontFamily: '"Fraunces", serif' }}>
                  <AnimatedCounter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest opacity-70">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Verticals */}
      <section className="border-t border-[color:var(--c-border)] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--c-accent-2)] font-semibold">What we do</div>
          <h2 className="mt-3 text-3xl md:text-5xl max-w-3xl" style={{ fontFamily: '"Fraunces", serif' }}>Six businesses. One nationwide network.</h2>
          <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-8">
            {VERTICALS.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="border-t border-[color:var(--c-border)] pt-5 flex items-start gap-5">
                  <div className="text-2xl text-[color:var(--c-accent-2)] font-serif" style={{ fontFamily: '"Fraunces", serif' }}>{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="text-xl" style={{ fontFamily: '"Fraunces", serif' }}>{v.title}</h3>
                    <p className="mt-1 text-sm opacity-75">{v.desc}</p>
                  </div>
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

function WelcomePopup({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4 animate-fade-up">
      <div className="max-w-2xl w-full bg-[#faf7f2] rounded-2xl overflow-hidden border border-black/10 shadow-2xl">
        <div className="p-8 md:p-12">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-[#c0a062] font-semibold">Welcome to Advance Telecom</div>
              <h2 className="mt-3 text-3xl md:text-4xl text-[#0f2544] max-w-md leading-tight" style={{ fontFamily: '"Fraunces", serif' }}>Where would you like to begin?</h2>
            </div>
            <button onClick={onDismiss} aria-label="Close" className="p-2 rounded-full hover:bg-black/5"><X className="h-5 w-5 text-[#0f2544]" /></button>
          </div>
          <p className="mt-4 text-sm text-[#0f2544]/70 max-w-md">
            You can explore our corporate story, distribution network and leadership — or head straight to our online store to shop.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <button onClick={onDismiss} className="group flex items-start gap-4 rounded-xl border border-[#0f2544]/15 bg-white p-5 text-left hover:border-[#0f2544] transition-colors">
              <Building2 className="h-6 w-6 text-[#0f2544]" />
              <div>
                <div className="font-semibold text-[#0f2544]">Corporate Website</div>
                <div className="mt-1 text-xs text-[#0f2544]/70">About us, journey, network and leadership.</div>
                <div className="mt-2 text-xs font-semibold text-[#0f2544] inline-flex items-center gap-1 group-hover:gap-2 transition-all">Continue <ArrowRight className="h-3 w-3" /></div>
              </div>
            </button>
            <a
              href={COMPANY.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onDismiss}
              className="group flex items-start gap-4 rounded-xl border border-[#c0a062]/40 bg-[#c0a062] p-5 text-left text-white hover:opacity-95"
            >
              <ShoppingBag className="h-6 w-6" />
              <div>
                <div className="font-semibold">Online Store</div>
                <div className="mt-1 text-xs opacity-85">Mobile phones, accessories & smart devices.</div>
                <div className="mt-2 text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Go to store ↗</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
