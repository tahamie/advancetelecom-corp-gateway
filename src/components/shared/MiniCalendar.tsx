import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EVENTS, statusOf, type EventItem } from "@/data/events";

function ymd(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function MiniCalendar({
  onSelect,
  selected,
}: {
  onSelect?: (date: string, events: EventItem[]) => void;
  selected?: string | null;
}) {
  const [cursor, setCursor] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d;
  });

  const byDate = useMemo(() => {
    const m = new Map<string, EventItem[]>();
    EVENTS.forEach((e) => {
      const arr = m.get(e.date) ?? [];
      arr.push(e);
      m.set(e.date, arr);
    });
    return m;
  }, []);

  const monthLabel = cursor.toLocaleString("en-US", { month: "long", year: "numeric" });
  const firstWeekday = cursor.getDay();
  const daysInMonth = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();

  const cells: Array<{ date: string; day: number } | null> = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const dt = new Date(cursor.getFullYear(), cursor.getMonth(), d);
    cells.push({ date: ymd(dt), day: d });
  }

  const shift = (n: number) =>
    setCursor((c) => new Date(c.getFullYear(), c.getMonth() + n, 1));

  const todayStr = ymd(new Date());

  return (
    <div className="rounded-2xl p-5 bg-[color:var(--c-surface,rgba(0,0,0,0.03))] border border-[color:var(--c-border,rgba(0,0,0,0.08))]">
      <div className="flex items-center justify-between mb-4">
        <button aria-label="Previous month" onClick={() => shift(-1)} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div key={monthLabel} className="font-display font-semibold text-lg animate-fade-up">{monthLabel}</div>
        <button aria-label="Next month" onClick={() => shift(1)} className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-[10px] uppercase tracking-widest opacity-60 mb-2">
        {["S","M","T","W","T","F","S"].map((d, i) => (
          <div key={i} className="text-center">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((c, i) => {
          if (!c) return <div key={i} className="aspect-square" />;
          const events = byDate.get(c.date) ?? [];
          const hasEvent = events.length > 0;
          const st = hasEvent ? statusOf(c.date) : null;
          const isSelected = selected === c.date;
          const isToday = c.date === todayStr;
          const color =
            st === "upcoming" ? "bg-emerald-500"
            : st === "ongoing" ? "bg-amber-500"
            : st === "completed" ? "bg-slate-400"
            : "";
          return (
            <button
              key={c.date}
              onClick={() => hasEvent && onSelect?.(c.date, events)}
              className={[
                "aspect-square rounded-lg text-xs relative flex items-center justify-center transition",
                hasEvent ? "cursor-pointer hover:bg-black/5 dark:hover:bg-white/10 font-semibold" : "opacity-70",
                isSelected ? "ring-2 ring-[color:var(--c-accent,#3b82f6)]" : "",
                isToday ? "outline outline-1 outline-current/30" : "",
              ].join(" ")}
            >
              <span>{c.day}</span>
              {hasEvent && <span className={`absolute bottom-1 h-1 w-1 rounded-full ${color}`} />}
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-[11px] opacity-80">
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Upcoming</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500" /> Ongoing</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-slate-400" /> Completed</span>
      </div>
    </div>
  );
}
