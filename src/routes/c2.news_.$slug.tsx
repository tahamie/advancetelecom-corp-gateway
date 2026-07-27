import { createFileRoute, notFound } from "@tanstack/react-router";
import { NewsDetailSection } from "@/components/shared/Sections";
import { getNewsBySlug } from "@/data/news";

export const Route = createFileRoute("/c2/news_/$slug")({
  loader: ({ params }) => {
    const article = getNewsBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  component: Page,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center text-center px-4">
      <div>
        <h1 className="text-3xl font-bold">Article not found</h1>
        <p className="mt-2 opacity-70">The article you're looking for doesn't exist.</p>
      </div>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Advance Telecom` : "News — Advance Telecom" },
      { name: "description", content: loaderData?.summary ?? "Advance Telecom news article." },
    ],
  }),
});

function Page() {
  const article = Route.useLoaderData();
  return <NewsDetailSection base="/c2" article={article} />;
}
