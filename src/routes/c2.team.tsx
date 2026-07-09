import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { TeamSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c2/team")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Leadership — Advance Telecom · Concept 02" },
      { name: "description", content: "A leadership team with deep experience across distribution, technology and finance." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c2" eyebrow="Leadership" title={'The people leading Advance Telecom.'} subtitle={'A leadership team with deep experience across distribution, technology and finance.'} />
      <TeamSection />
    </>
  );
}
