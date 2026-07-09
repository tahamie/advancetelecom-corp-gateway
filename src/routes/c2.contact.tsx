import { createFileRoute } from "@tanstack/react-router";
import { ConceptPageHero } from "@/components/concepts/ConceptShell";
import { ContactSection } from "@/components/shared/Sections";

export const Route = createFileRoute("/c2/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Contact — Advance Telecom · Concept 02" },
      { name: "description", content: "Corporate inquiries, partnerships, media requests and bulk purchases." },
    ],
  }),
});

function Page() {
  return (
    <>
      <ConceptPageHero id="c2" eyebrow="Contact" title={'Let\'s talk.'} subtitle={'Corporate inquiries, partnerships, media requests and bulk purchases.'} />
      <ContactSection />
    </>
  );
}
