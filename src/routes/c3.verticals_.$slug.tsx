import { createFileRoute, notFound, Link as TSLink } from "@tanstack/react-router";
import { VERTICALS } from "@/data/content";
import { VerticalDetailSection } from "@/components/shared/Sections";
import { ArrowLeft } from "lucide-react";
import type React from "react";

const Link = TSLink as unknown as React.FC<any>;

export const Route = createFileRoute("/c3/verticals_/$slug")({
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
  return <VerticalDetailSection base="/c3" vertical={vertical} />;
}
