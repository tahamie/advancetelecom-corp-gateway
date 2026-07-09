import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { OfficesSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c1/offices")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Offices — Advance Telecom · Concept 01" },
      { name: "description", content: "Regional offices across Pakistan\'s major commercial centres." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c1" eyebrow="Offices" title={'Where we work — where you can find us.'} subtitle={'Regional offices across Pakistan\'s major commercial centres.'} />
      <OfficesSection />
    </>
  );
}
