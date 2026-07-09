import { createFileRoute } from "@tanstack/react-router";
import { HomeC4 } from "@/components/concepts/HomeC4";

export const Route = createFileRoute("/c4/")({
  component: HomeC4,
});
