import { createFileRoute } from "@tanstack/react-router";
import { HomeC2 } from "@/components/concepts/HomeC2";

export const Route = createFileRoute("/c2/")({
  component: HomeC2,
});
