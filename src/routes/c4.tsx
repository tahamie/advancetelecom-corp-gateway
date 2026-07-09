import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ConceptShell } from "@/components/concepts/ConceptShell";

export const Route = createFileRoute("/c4")({
  component: Layout,
  head: () => ({
    meta: [
      { title: "Advance Telecom — Concept 04" },
      { name: "description", content: "Concept 04 preview of the Advance Telecom corporate website." },
    ],
  }),
});

function Layout() {
  return (
    <ConceptShell id="c4">
      <Outlet />
    </ConceptShell>
  );
}
