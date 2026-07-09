import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { EventsIndexSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c1/events")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Events — Advance Telecom · Concept 01" },
      { name: "description", content: "Upcoming and past events at Advance Telecom Pakistan." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c1" eyebrow="Events" title="Where we meet, launch and celebrate." subtitle="Product launches, dealer meetups, trade shows and community events across Pakistan." />
      <EventsIndexSection base="/c1" />
    </>
  );
}
