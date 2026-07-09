import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageSquareText, LayoutTemplate, SplitSquareHorizontal, Building2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: ConceptSelector,
});

const CONCEPTS = [
  {
    id: "c1",
    number: "01",
    title: "Welcome Popup Experience",
    desc: "The corporate website opens after an elegant welcome popup asking whether the visitor wants the Corporate Website or the Online Store.",
    icon: MessageSquareText,
    accent: "from-[#0f2544] to-[#2b4a7d]",
    tag: "Editorial · Refined",
  },
  {
    id: "c2",
    number: "02",
    title: "Split Screen Experience",
    desc: "The landing page is divided into Corporate and Online Store sections, allowing visitors to choose where they want to go.",
    icon: SplitSquareHorizontal,
    accent: "from-[#111827] to-[#dc2626]",
    tag: "Dual-tone · Bold",
  },
  {
    id: "c3",
    number: "03",
    title: "Corporate First Experience",
    desc: "The Corporate Website opens immediately, while multiple CTAs guide users to the Online Store.",
    icon: Building2,
    accent: "from-[#1e40af] to-[#3b82f6]",
    tag: "Classic · Enterprise",
  },
  {
    id: "c4",
    number: "04",
    title: "Interactive Business Gateway",
    desc: "Visitors enter through a premium gateway showcasing Corporate, Online Store, Distribution Network and AI Assistant before entering the website.",
    icon: Sparkles,
    accent: "from-[#4c1d95] to-[#7c3aed]",
    tag: "Premium · Futuristic",
  },
] as const;

function ConceptSelector() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1.5 text-[11px] uppercase tracking-widest text-white/80 animate-fade-up">
            <LayoutTemplate className="h-3.5 w-3.5" /> Client Preview · Advance Telecom
          </div>
          <h1
            className="mt-5 text-4xl md:text-6xl font-bold tracking-tight animate-fade-up"
            style={{ animationDelay: "0.1s", fontFamily: '"Fraunces", "Poppins", serif' }}
          >
            Choose a Corporate Website Experience
          </h1>
          <p className="mt-5 text-lg text-white/70 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Select one of the four concepts below to preview the complete corporate website.
            Each concept is an independent prototype with its own homepage, navigation and design language.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CONCEPTS.map((c, i) => (
            <Link
              key={c.id}
              to={`/${c.id}` as string}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 overflow-hidden hover:border-white/25 transition-all animate-fade-up"
              style={{ animationDelay: `${0.25 + i * 0.1}s` }}
            >
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-30 transition-opacity bg-gradient-to-br ${c.accent} blur-3xl`} />
              <div className="relative flex items-start justify-between gap-4">
                <div className={`h-14 w-14 grid place-items-center rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-2xl`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest text-white/50">Concept</div>
                  <div className="text-3xl font-bold tabular-nums" style={{ fontFamily: '"Fraunces", serif' }}>{c.number}</div>
                </div>
              </div>
              <div className="relative mt-6">
                <div className="text-[11px] uppercase tracking-widest text-white/50">{c.tag}</div>
                <h2 className="mt-1 text-2xl md:text-3xl font-bold" style={{ fontFamily: '"Fraunces", serif' }}>{c.title}</h2>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.desc}</p>
              </div>
              <div className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold group-hover:gap-3 transition-all">
                Preview Concept <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center text-xs text-white/40">
          Only the selected concept will be loaded. Each concept has its own homepage, pages, News and Events modules.
        </div>
      </div>
    </div>
  );
}
