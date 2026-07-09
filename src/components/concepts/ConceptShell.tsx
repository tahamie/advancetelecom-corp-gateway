import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, ShoppingBag, ArrowLeft } from "lucide-react";
import { THEMES, type ConceptId } from "./theme";
import { COMPANY } from "@/data/content";
import { Chatbot } from "@/components/site/Chatbot";
import { FloatingBuyNow } from "@/components/site/FloatingBuyNow";

const NAV = [
  { seg: "about", label: "About" },
  { seg: "journey", label: "Journey" },
  { seg: "verticals", label: "Verticals" },
  { seg: "network", label: "Network" },
  { seg: "warehouses", label: "Warehouses" },
  { seg: "offices", label: "Offices" },
  { seg: "team", label: "Leadership" },
  { seg: "news", label: "News" },
  { seg: "events", label: "Events" },
  { seg: "contact", label: "Contact" },
] as const;

export function ConceptShell({ id, children }: { id: ConceptId; children: ReactNode }) {
  const theme = THEMES[id];
  return (
    <div
      className={theme.bodyClass}
      style={{
        ...theme.cssVars,
        background: "var(--c-bg)",
        color: "var(--c-fg)",
        fontFamily: theme.fontFamily,
        minHeight: "100vh",
      }}
    >
      <style>{`
        .${theme.bodyClass} h1, .${theme.bodyClass} h2, .${theme.bodyClass} h3, .${theme.bodyClass} h4 {
          font-family: ${theme.headingFamily};
          letter-spacing: -0.02em;
        }
      `}</style>
      <ConceptHeader id={id} />
      <main>{children}</main>
      <ConceptFooter id={id} />
      <ChangeConceptPill />
      <FloatingBuyNow />
      <Chatbot />
    </div>
  );
}

function ChangeConceptPill() {
  return (
    <Link
      to="/"
      className="fixed top-4 left-4 z-50 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-widest font-semibold bg-black/80 text-white backdrop-blur border border-white/10 hover:bg-black"
    >
      <ArrowLeft className="h-3 w-3" /> Change Concept
    </Link>
  );
}


function ConceptHeader({ id }: { id: ConceptId }) {
  const theme = THEMES[id];
  const base = `/${id}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const bg = (() => {
    switch (theme.headerVariant) {
      case "editorial":
        return scrolled ? "bg-[#faf7f2]/85 backdrop-blur border-b border-black/5" : "bg-transparent";
      case "duotone":
        return scrolled ? "bg-black/70 backdrop-blur border-b border-white/10" : "bg-transparent";
      case "enterprise":
        return scrolled ? "bg-white/95 backdrop-blur border-b border-black/5 shadow-sm" : "bg-white/80 backdrop-blur";
      case "gateway":
        return scrolled ? "bg-[#080b18]/70 backdrop-blur border-b border-white/10" : "bg-transparent";
    }
  })();

  const linkColor = theme.headerVariant === "editorial" || theme.headerVariant === "enterprise" ? "text-[color:var(--c-fg)]/85 hover:text-[color:var(--c-accent)]" : "text-white/80 hover:text-white";

  return (
    <header className={`fixed top-0 inset-x-0 z-30 transition-all pl-32 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to={base as any} className="flex items-center gap-2 group">
          <ConceptLogo id={id} />
          <div className="leading-tight">
            <div className="font-semibold text-[15px]" style={{ fontFamily: theme.headingFamily }}>{COMPANY.name}</div>
            <div className="text-[10px] uppercase tracking-widest opacity-70">{theme.label}</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((n) => {
            const to = `${base}/${n.seg}`;
            const active = pathname === to || pathname.startsWith(`${to}/`);
            return (
              <Link key={n.seg} to={to as any} className={`px-3 py-2 text-sm font-medium transition-colors ${linkColor} ${active ? "!text-[color:var(--c-accent)]" : ""}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={COMPANY.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[color:var(--c-accent)] text-white px-4 py-2 text-sm font-semibold hover:opacity-90"
          >
            <ShoppingBag className="h-4 w-4" /> Store
          </a>
          <button className="xl:hidden p-2 rounded-lg hover:bg-black/10" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden border-t border-[color:var(--c-border)] bg-[color:var(--c-bg)] animate-fade-up">
          <div className="px-4 py-3 flex flex-col">
            {NAV.map((n) => (
              <Link key={n.seg} to={`${base}/${n.seg}` as any} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function ConceptLogo({ id }: { id: ConceptId }) {
  const theme = THEMES[id];
  if (theme.headerVariant === "editorial")
    return <div className="h-9 w-9 rounded-full grid place-items-center border-2 border-[color:var(--c-accent)] text-[color:var(--c-accent)] font-serif italic font-bold">A</div>;
  if (theme.headerVariant === "duotone")
    return <div className="h-9 w-9 grid place-items-center bg-[color:var(--c-accent)] text-white font-bold tracking-tighter">A</div>;
  if (theme.headerVariant === "enterprise")
    return <div className="h-9 w-9 rounded-lg grid place-items-center bg-[color:var(--c-accent)] text-white font-bold">A</div>;
  return <div className="h-9 w-9 rounded-xl grid place-items-center bg-gradient-to-br from-[color:var(--c-accent)] to-[color:var(--c-accent-2)] text-white font-bold shadow-lg shadow-violet-500/30">A</div>;
}

function ConceptFooter({ id }: { id: ConceptId }) {
  const theme = THEMES[id];
  const base = `/${id}`;
  const isDark = theme.headerVariant === "duotone" || theme.headerVariant === "gateway";
  return (
    <footer className={`mt-16 pt-14 pb-24 border-t border-[color:var(--c-border)] ${isDark ? "bg-black/40" : "bg-[color:var(--c-surface)]"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <ConceptLogo id={id} />
            <div className="font-semibold" style={{ fontFamily: theme.headingFamily }}>{COMPANY.name}</div>
          </div>
          <p className="mt-3 text-sm opacity-70">{COMPANY.tagline}. Nationwide distribution of mobile devices, accessories, smart devices and energy solutions.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest opacity-60">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to={`${base}/about` as any} className="hover:text-[color:var(--c-accent)]">About</Link></li>
            <li><Link to={`${base}/journey` as any} className="hover:text-[color:var(--c-accent)]">Journey</Link></li>
            <li><Link to={`${base}/team` as any} className="hover:text-[color:var(--c-accent)]">Leadership</Link></li>
            <li><Link to={`${base}/contact` as any} className="hover:text-[color:var(--c-accent)]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest opacity-60">Explore</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to={`${base}/verticals` as any} className="hover:text-[color:var(--c-accent)]">Business Verticals</Link></li>
            <li><Link to={`${base}/network` as any} className="hover:text-[color:var(--c-accent)]">Distribution Network</Link></li>
            <li><Link to={`${base}/warehouses` as any} className="hover:text-[color:var(--c-accent)]">Warehouses</Link></li>
            <li><Link to={`${base}/offices` as any} className="hover:text-[color:var(--c-accent)]">Offices</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest opacity-60">Newsroom</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to={`${base}/news` as any} className="hover:text-[color:var(--c-accent)]">Latest News</Link></li>
            <li><Link to={`${base}/events` as any} className="hover:text-[color:var(--c-accent)]">Events</Link></li>
            <li><a href={COMPANY.storeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--c-accent)]">Online Store ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-[color:var(--c-border)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs opacity-60 flex flex-wrap justify-between gap-2">
        <div>© {new Date().getFullYear()} Advance Telecom Pakistan. All rights reserved.</div>
        <div>{theme.label} — {theme.name}</div>
      </div>
    </footer>
  );
}

export function ConceptPageHero({
  id,
  eyebrow,
  title,
  subtitle,
}: {
  id: ConceptId;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  const theme = THEMES[id];
  if (theme.heroVariant === "editorial") {
    return (
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[color:var(--c-surface)] border-b border-[color:var(--c-border)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {eyebrow && <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--c-accent-2)] font-semibold">{eyebrow}</div>}
          <h1 className="mt-3 text-4xl md:text-6xl max-w-4xl leading-[1.05]" style={{ fontFamily: theme.headingFamily }}>{title}</h1>
          {subtitle && <p className="mt-5 text-lg opacity-75 max-w-2xl">{subtitle}</p>}
        </div>
      </section>
    );
  }
  if (theme.heroVariant === "duotone") {
    return (
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-[color:var(--c-accent)]/25 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {eyebrow && <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--c-accent)] font-bold">{eyebrow}</div>}
          <h1 className="mt-3 text-4xl md:text-7xl font-bold max-w-4xl leading-[0.95] tracking-tight uppercase">{title}</h1>
          {subtitle && <p className="mt-6 text-lg text-white/70 max-w-2xl">{subtitle}</p>}
        </div>
      </section>
    );
  }
  if (theme.heroVariant === "enterprise") {
    return (
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 bg-gradient-to-br from-[color:var(--c-accent)] to-[#3b82f6] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {eyebrow && <div className="text-[11px] uppercase tracking-widest text-white/80 font-semibold">{eyebrow}</div>}
          <h1 className="mt-2 text-3xl md:text-5xl font-bold max-w-4xl">{title}</h1>
          {subtitle && <p className="mt-4 text-base md:text-lg text-white/85 max-w-2xl">{subtitle}</p>}
        </div>
      </section>
    );
  }
  // gateway
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[color:var(--c-accent)]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[color:var(--c-accent-2)]/25 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1.5 text-xs uppercase tracking-widest">{eyebrow}</div>}
        <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-4xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">{title}</h1>
        {subtitle && <p className="mt-5 text-lg opacity-75 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
