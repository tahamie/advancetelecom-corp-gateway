import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { JourneySection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c4/journey")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Our Journey — Advance Telecom · Concept 04" },
      { name: "description", content: "From a single Karachi office in 1994 to 13 warehouses and 180+ cities today." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c4" eyebrow="Our Journey" title={'30 years, one nationwide network.'} subtitle={'From a single Karachi office in 1994 to 13 warehouses and 180+ cities today.'} />
      <JourneySection />
    </>
  );
}
