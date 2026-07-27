import { createFileRoute, notFound, Link as TSLink } from "@tanstack/react-router";
import { VERTICALS } from "@/data/content";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { ArrowLeft, Play } from "lucide-react";
import type React from "react";

const Link = TSLink as unknown as React.FC<any>;

export const Route = createFileRoute("/c3/verticals/$slug")({
  loader: ({ params }) => {
    const vertical = VERTICALS.find((v) => v.slug === params.slug);
    if (!vertical) throw notFound();
    return vertical;
  },
  component: Page,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center text-center px-4">
      <div>
        <h1 className="text-3xl font-bold">Vertical not found</h1>
        <p className="mt-2 opacity-70">The business vertical you're looking for doesn't exist.</p>
        <Link to="/c3/verticals" className="mt-6 inline-flex items-center gap-2 text-[color:var(--c-accent)] hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Verticals
        </Link>
      </div>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Advance Telecom` : "Business Verticals — Advance Telecom" },
      { name: "description", content: loaderData?.desc ?? "Business Verticals." },
    ],
  }),
});

function Page() {
  const vertical = Route.useLoaderData();
  
  return (
    <>
      <ConceptPageHero 
        id="c3" 
        eyebrow="Business Vertical" 
        title={vertical.title} 
        subtitle={vertical.desc} 
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12 md:space-y-16">
        <Link to="/c3/verticals" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--c-accent)] hover:opacity-80 transition-opacity">
          <ArrowLeft className="h-4 w-4" /> Back to all verticals
        </Link>
        
        {/* Video Section */}
        {vertical.videoUrl && (
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-[color:var(--c-border)] bg-black aspect-video relative group animate-fade-up">
            <video 
              src={vertical.videoUrl} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="h-full w-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Play Button Indicator (Decorative) */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
               <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 grid place-items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
                  <Play className="h-6 w-6 md:h-8 md:w-8 translate-x-0.5" fill="currentColor" />
               </div>
            </div>
          </div>
        )}
        
        {/* Content Section */}
        <div className="max-w-4xl mx-auto text-center md:text-left animate-fade-up" style={{ animationDelay: "150ms" }}>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Overview</h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            {vertical.longDesc}
          </p>
        </div>
      </div>
    </>
  );
}
