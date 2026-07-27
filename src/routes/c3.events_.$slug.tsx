import { createFileRoute, notFound } from "@tanstack/react-router";
import { EventDetailSection } from "@/components/shared/Sections";
import { getEventBySlug } from "@/data/events";

export const Route = createFileRoute("/c3/events_/$slug")({
  loader: ({ params }) => {
    const event = getEventBySlug(params.slug);
    if (!event) throw notFound();
    return event;
  },
  component: Page,
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center text-center px-4">
      <div>
        <h1 className="text-3xl font-bold">Event not found</h1>
        <p className="mt-2 opacity-70">The event you're looking for doesn't exist.</p>
      </div>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — Advance Telecom` : "Event — Advance Telecom" },
      { name: "description", content: loaderData?.description ?? "Advance Telecom event." },
    ],
  }),
});

function Page() {
  const event = Route.useLoaderData();
  return <EventDetailSection base="/c3" event={event} />;
}
