import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { AboutSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c4/about")({
  component: Page,
  head: () => ({
    meta: [
      { title: "About Us — Advance Telecom · Concept 04" },
      { name: "description", content: "The people, partnerships and infrastructure behind Pakistan\'s most trusted technology distributor." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c4" eyebrow="About Us" title={'A three-decade story of trust, scale and technology.'} subtitle={'The people, partnerships and infrastructure behind Pakistan\'s most trusted technology distributor.'} />
      <AboutSection />
    </>
  );
}
