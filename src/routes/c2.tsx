import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ConceptShell } from "@/components/concepts/ConceptShell";

export const Route = createFileRoute("/c2")({
  component: Layout,
  head: () => ({
    meta: [
      { title: "Advance Telecom — Concept 02" },
      { name: "description", content: "Concept 02 preview of the Advance Telecom corporate website." },
    ],
  }),
});

function Layout() {
  return (
    <ConceptShell id="c2">
      <Outlet />
    </ConceptShell>
  );
}
