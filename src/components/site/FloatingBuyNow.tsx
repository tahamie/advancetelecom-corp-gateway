import { ShoppingBag } from "lucide-react";

export function FloatingBuyNow() {
  return (
    <a
      href="https://advancetelecom.com.pk/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 bottom-6 left-6 group"
      aria-label="Buy Now on the online store"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <span className="relative flex items-center gap-2 rounded-full bg-gradient-accent text-white pl-4 pr-5 py-3 font-semibold shadow-elegant transition-transform group-hover:scale-105">
        <ShoppingBag className="h-5 w-5" />
        Buy Now
      </span>
    </a>
  );
}
