import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { VerticalsSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c2/verticals")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Business Verticals — Advance Telecom · Concept 02" },
      { name: "description", content: "Mobile, accessories, smart devices, energy, retail enablement and after-sales — under one roof." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c2" eyebrow="Business Verticals" title={'Six businesses, one mission.'} subtitle={'Mobile, accessories, smart devices, energy, retail enablement and after-sales — under one roof.'} />
      <VerticalsSection />
    </>
  );
}
