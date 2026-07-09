import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { ContactSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c1/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Contact — Advance Telecom · Concept 01" },
      { name: "description", content: "Corporate inquiries, partnerships, media requests and bulk purchases." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c1" eyebrow="Contact" title={'Let\'s talk.'} subtitle={'Corporate inquiries, partnerships, media requests and bulk purchases.'} />
      <ContactSection />
    </>
  );
}
