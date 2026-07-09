import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { NetworkSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c4/network")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Distribution Network — Advance Telecom · Concept 04" },
      { name: "description", content: "Every province, every major city — connected by 13 warehouses and 8,500+ retail partners." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c4" eyebrow="Distribution Network" title={'Nationwide reach, city by city.'} subtitle={'Every province, every major city — connected by 13 warehouses and 8,500+ retail partners.'} />
      <NetworkSection />
    </>
  );
}
