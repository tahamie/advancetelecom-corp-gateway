import { createFileRoute } from "@tanstack/react-router";
import { HomeC3 } from "@/components/concepts/HomeC3";

export const Route = createFileRoute("/c3/")({
  component: HomeC3,
});
