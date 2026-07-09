import { createFileRoute } from "@tanstack/react-router";
import { HomeC1 } from "@/components/concepts/HomeC1";

export const Route = createFileRoute("/c1/")({
  component: HomeC1,
});
