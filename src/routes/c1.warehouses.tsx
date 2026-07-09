import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { WarehousesSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c1/warehouses")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Warehouses — Advance Telecom · Concept 01" },
      { name: "description", content: "Modern facilities across every region, engineered for speed, safety and scale." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c1" eyebrow="Warehouses" title={'13 warehouses. One integrated logistics engine.'} subtitle={'Modern facilities across every region, engineered for speed, safety and scale.'} />
      <WarehousesSection />
    </>
  );
}
