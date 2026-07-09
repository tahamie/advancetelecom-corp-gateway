import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ConceptShell } from "@/components/concepts/ConceptShell";

export const Route = createFileRoute("/c3")({
  component: Layout,
  head: () => ({
    meta: [
      { title: "Advance Telecom — Concept 03" },
      { name: "description", content: "Concept 03 preview of the Advance Telecom corporate website." },
    ],
  }),
});

function Layout() {
  return (
    <ConceptShell id="c3">
      <Outlet />
    </ConceptShell>
  );
}
