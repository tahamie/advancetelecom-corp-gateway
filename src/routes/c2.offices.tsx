import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { OfficesSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c2/offices")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Offices — Advance Telecom · Concept 02" },
      { name: "description", content: "Regional offices across Pakistan\'s major commercial centres." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c2" eyebrow="Offices" title={'Where we work — where you can find us.'} subtitle={'Regional offices across Pakistan\'s major commercial centres.'} />
      <OfficesSection />
    </>
  );
}
