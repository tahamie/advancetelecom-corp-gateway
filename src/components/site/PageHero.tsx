import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-accent/40 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs uppercase tracking-widest text-white/90 animate-fade-up">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-4 text-4xl md:text-6xl font-bold max-w-4xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>{children}</div>}
      </div>
    </section>
  );
}
