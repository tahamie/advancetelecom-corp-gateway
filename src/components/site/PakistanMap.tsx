import { useState } from "react";

export type MapPin = {
  id: string;
  city: string;
  x: number; // 0..100 (percent)
  y: number;
  type: "office" | "warehouse" | "distribution";
  note?: string;
};

const defaultPins: MapPin[] = [
  { id: "khi", city: "Karachi", x: 26, y: 82, type: "office", note: "Head Office & National DC" },
  { id: "lhr", city: "Lahore", x: 62, y: 46, type: "office", note: "Regional HQ North" },
  { id: "isb", city: "Islamabad", x: 60, y: 26, type: "office", note: "Federal Office" },
  { id: "fsd", city: "Faisalabad", x: 55, y: 46, type: "warehouse", note: "Central Warehouse" },
  { id: "mux", city: "Multan", x: 46, y: 56, type: "warehouse", note: "South-Punjab Hub" },
  { id: "pew", city: "Peshawar", x: 50, y: 22, type: "warehouse", note: "KPK Distribution" },
  { id: "que", city: "Quetta", x: 22, y: 55, type: "distribution", note: "Balochistan Coverage" },
  { id: "hyd", city: "Hyderabad", x: 31, y: 74, type: "distribution", note: "Sindh Coverage" },
  { id: "skt", city: "Sialkot", x: 66, y: 38, type: "distribution", note: "Regional Coverage" },
  { id: "guj", city: "Gujranwala", x: 63, y: 40, type: "distribution", note: "Regional Coverage" },
  { id: "sgd", city: "Sargodha", x: 56, y: 40, type: "distribution", note: "Regional Coverage" },
  { id: "bwp", city: "Bahawalpur", x: 47, y: 62, type: "distribution", note: "Regional Coverage" },
];

const typeColor: Record<MapPin["type"], string> = {
  office: "oklch(0.42 0.17 255)",
  warehouse: "oklch(0.58 0.22 27)",
  distribution: "oklch(0.62 0.19 250)",
};

export function PakistanMap({ pins = defaultPins }: { pins?: MapPin[] }) {
  const [active, setActive] = useState<MapPin | null>(null);

  return (
    <div className="relative rounded-3xl bg-gradient-soft shadow-elegant border border-border p-4 md:p-6">
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        {(["office", "warehouse", "distribution"] as const).map((t) => (
          <div key={t} className="flex items-center gap-2 text-xs font-medium text-muted-foreground capitalize">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: typeColor[t] }} />
            {t === "distribution" ? "Distribution Coverage" : t + "s"}
          </div>
        ))}
      </div>
      <div className="relative aspect-[4/5] md:aspect-[5/4] w-full">
        {/* Stylized Pakistan silhouette */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="pkFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.92 0.03 250)" />
              <stop offset="100%" stopColor="oklch(0.85 0.05 250)" />
            </linearGradient>
          </defs>
          <path
            d="M18,22 L32,14 L48,12 L58,16 L64,20 L62,26 L66,30 L70,34 L64,40 L66,46 L58,50 L54,58 L48,62 L44,68 L40,74 L36,80 L30,86 L22,84 L18,76 L22,70 L20,62 L16,54 L20,48 L18,40 L14,32 Z"
            fill="url(#pkFill)"
            stroke="oklch(0.55 0.08 250)"
            strokeWidth="0.4"
          />
        </svg>

        {pins.map((p) => (
          <button
            key={p.id}
            onMouseEnter={() => setActive(p)}
            onFocus={() => setActive(p)}
            onMouseLeave={() => setActive((a) => (a?.id === p.id ? null : a))}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            aria-label={`${p.city} ${p.type}`}
          >
            <span
              className="absolute inset-0 rounded-full animate-ping-slow"
              style={{ background: typeColor[p.type], opacity: 0.6 }}
            />
            <span
              className="relative block h-3 w-3 rounded-full ring-2 ring-white shadow-soft"
              style={{ background: typeColor[p.type] }}
            />
            <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold text-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity">
              {p.city}
            </span>
          </button>
        ))}

        {active && (
          <div
            className="absolute z-10 glass rounded-xl px-3 py-2 shadow-elegant text-xs pointer-events-none animate-fade-up"
            style={{
              left: `${active.x}%`,
              top: `${active.y}%`,
              transform: "translate(-50%, calc(-100% - 16px))",
            }}
          >
            <div className="font-semibold text-foreground">{active.city}</div>
            <div className="text-muted-foreground capitalize">
              {active.type === "distribution" ? "Distribution Coverage" : active.type}
            </div>
            {active.note && <div className="text-foreground/80 mt-0.5">{active.note}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
