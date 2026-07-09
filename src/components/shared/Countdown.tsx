import { useEffect, useState } from "react";

export function Countdown({ target }: { target: string }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const ms = new Date(target).getTime() - now;
  const clamp = Math.max(0, ms);
  const d = Math.floor(clamp / 86_400_000);
  const h = Math.floor((clamp % 86_400_000) / 3_600_000);
  const m = Math.floor((clamp % 3_600_000) / 60_000);
  const s = Math.floor((clamp % 60_000) / 1000);
  const box = (n: number, l: string) => (
    <div className="flex flex-col items-center rounded-xl px-4 py-3 min-w-[70px] bg-[color:var(--c-surface,rgba(0,0,0,0.05))] border border-[color:var(--c-border,rgba(0,0,0,0.08))]">
      <div className="text-2xl md:text-3xl font-bold tabular-nums">{n.toString().padStart(2, "0")}</div>
      <div className="text-[10px] uppercase tracking-widest opacity-70 mt-0.5">{l}</div>
    </div>
  );
  return (
    <div className="flex gap-2">
      {box(d, "Days")}
      {box(h, "Hrs")}
      {box(m, "Min")}
      {box(s, "Sec")}
    </div>
  );
}
