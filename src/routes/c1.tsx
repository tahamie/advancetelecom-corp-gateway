import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ConceptShell } from "@/components/concepts/ConceptShell";

export const Route = createFileRoute("/c1")({
  component: Layout,
  head: () => ({
    meta: [
      { title: "Advance Telecom — Concept 01" },
      { name: "description", content: "Concept 01 preview of the Advance Telecom corporate website." },
    ],
  }),
});

function Layout() {
  return (
    <ConceptShell id="c1">
      <Outlet />
    </ConceptShell>
  );
}
