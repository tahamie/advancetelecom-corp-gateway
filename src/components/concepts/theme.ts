import type { CSSProperties } from "react";

export type ConceptId = "c1" | "c2" | "c3" | "c4";

export interface ConceptTheme {
  id: ConceptId;
  name: string;
  label: string;
  bodyClass: string;
  fontFamily: string;
  headingFamily: string;
  cssVars: CSSProperties;
  // Header/footer style
  headerVariant: "editorial" | "duotone" | "enterprise" | "gateway";
  heroVariant: "editorial" | "duotone" | "enterprise" | "gateway";
}

export const THEMES: Record<ConceptId, ConceptTheme> = {
  c1: {
    id: "c1",
    name: "Welcome Popup Experience",
    label: "Concept 01",
    bodyClass: "concept-c1",
    fontFamily: '"Manrope", ui-sans-serif, system-ui, sans-serif',
    headingFamily: '"Fraunces", "Poppins", serif',
    cssVars: {
      // Ivory white + corporate blue + signal red
      ["--c-bg" as any]: "#ffffff",
      ["--c-fg" as any]: "#0b1a33",
      ["--c-surface" as any]: "#f4f7fc",
      ["--c-border" as any]: "rgba(11,26,51,0.10)",
      ["--c-accent" as any]: "#1d4ed8",
      ["--c-accent-2" as any]: "#e11d48",
      ["--c-muted" as any]: "#5b6b85",
    },
    headerVariant: "editorial",
    heroVariant: "editorial",
  },
  c2: {
    id: "c2",
    name: "Split Screen Experience",
    label: "Concept 02",
    bodyClass: "concept-c2",
    fontFamily: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    headingFamily: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    cssVars: {
      // Deep navy + red accent + white text
      ["--c-bg" as any]: "#0a1633",
      ["--c-fg" as any]: "#ffffff",
      ["--c-surface" as any]: "#12224a",
      ["--c-border" as any]: "rgba(255,255,255,0.12)",
      ["--c-accent" as any]: "#ef2b3a",
      ["--c-accent-2" as any]: "#60a5fa",
      ["--c-muted" as any]: "rgba(255,255,255,0.70)",
    },
    headerVariant: "duotone",
    heroVariant: "duotone",
  },
  c3: {
    id: "c3",
    name: "Corporate First Experience",
    label: "Concept 03",
    bodyClass: "concept-c3",
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
    headingFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
    cssVars: {
      // Clean white with corporate blue primary and red highlight
      ["--c-bg" as any]: "#ffffff",
      ["--c-fg" as any]: "#0b1a33",
      ["--c-surface" as any]: "#f5f7fb",
      ["--c-border" as any]: "rgba(11,26,51,0.10)",
      ["--c-accent" as any]: "#1e40af",
      ["--c-accent-2" as any]: "#dc2626",
      ["--c-muted" as any]: "#5b6b85",
    },
    headerVariant: "enterprise",
    heroVariant: "enterprise",
  },
  c4: {
    id: "c4",
    name: "Interactive Business Gateway",
    label: "Concept 04",
    bodyClass: "concept-c4",
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
    headingFamily: '"Poppins", ui-sans-serif, system-ui, sans-serif',
    cssVars: {
      // Midnight blue gateway with red accent, white text
      ["--c-bg" as any]: "#050b1f",
      ["--c-fg" as any]: "#ffffff",
      ["--c-surface" as any]: "rgba(255,255,255,0.05)",
      ["--c-border" as any]: "rgba(255,255,255,0.12)",
      ["--c-accent" as any]: "#3b82f6",
      ["--c-accent-2" as any]: "#ef4444",
      ["--c-muted" as any]: "rgba(255,255,255,0.72)",
    },
    headerVariant: "gateway",
    heroVariant: "gateway",
  },
};
