import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { NewsIndexSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c1/news")({
  component: Page,
  head: () => ({
    meta: [
      { title: "News — Advance Telecom · Concept 01" },
      { name: "description", content: "Latest news, announcements and media coverage from Advance Telecom Pakistan." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c1" eyebrow="News Center" title="Announcements, partnerships & achievements." subtitle="The latest from across Advance Telecom's corporate, product and distribution businesses." />
      <NewsIndexSection base="/c1" />
    </>
  );
}
