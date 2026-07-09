import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "bot"; text: string; cta?: boolean };

const STORE = "https://advancetelecom.com.pk/";

const productKeywords = [
  "buy", "price", "pricing", "cost", "order", "phone", "mobile", "samsung",
  "iphone", "xiaomi", "vivo", "oppo", "infinix", "accessory", "accessories",
  "charger", "earbud", "cable", "product", "stock", "available", "purchase",
  "shop", "store", "deal", "offer",
];

const knowledge: { keys: string[]; answer: string }[] = [
  {
    keys: ["office", "headquarter", "hq", "address", "location"],
    answer:
      "Advance Telecom operates offices in Karachi (Head Office), Lahore, Islamabad, Faisalabad, Peshawar, Multan and Quetta. See the Offices page for full details.",
  },
  {
    keys: ["warehouse", "storage", "logistics"],
    answer:
      "We operate 12+ regional warehouses covering all four provinces, powering rapid nationwide distribution.",
  },
  {
    keys: ["distribution", "network", "coverage", "cities"],
    answer:
      "Our distribution network reaches 180+ cities across Pakistan through 8,500+ retail partners. Explore the Distribution Network page for the interactive map.",
  },
  {
    keys: ["career", "job", "hiring", "vacancy"],
    answer:
      "We're always looking for great talent across sales, operations, energy and technology. Reach out via the Contact page selecting 'Career Opportunities'.",
  },
  {
    keys: ["dealer", "partner", "retailer", "become"],
    answer:
      "To become a dealer or retail partner, submit an inquiry on the Contact page with type 'Corporate Partnership' and our team will get back within 48 hours.",
  },
  {
    keys: ["bulk", "corporate", "enterprise", "b2b"],
    answer:
      "For bulk and corporate procurement, please contact us via the Contact page (Bulk Buyer / Corporate Partnership) — dedicated account managers will assist you.",
  },
  {
    keys: ["energy", "solar", "inverter", "battery"],
    answer:
      "Our Energy Solutions vertical distributes solar, inverter and battery products nationwide. See Business Verticals → Energy Solutions.",
  },
  {
    keys: ["about", "company", "who", "history"],
    answer:
      "Advance Telecom is one of Pakistan's largest technology distributors, representing leading global brands across mobile, accessories and energy. Visit About Us for the full story.",
  },
];

function respond(input: string): Msg {
  const q = input.toLowerCase();
  if (productKeywords.some((k) => q.includes(k))) {
    return {
      role: "bot",
      text: "Our online store contains our latest products, pricing and offers. Please continue on our e-commerce site.",
      cta: true,
    };
  }
  for (const item of knowledge) {
    if (item.keys.some((k) => q.includes(k))) return { role: "bot", text: item.answer };
  }
  return {
    role: "bot",
    text: "Thanks for your message! I can help with information about our company, offices, warehouses, distribution and partnerships. For products and orders, please visit our online store.",
    cta: true,
  };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi! I'm the Advance Telecom assistant. Ask me about our offices, warehouses, distribution, partnerships — or products.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Msg = { role: "user", text };
    const reply = respond(text);
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed z-40 bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-primary text-white shadow-elegant grid place-items-center hover:scale-105 transition-transform"
        aria-label="Open assistant"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          "fixed z-40 bottom-24 right-6 w-[min(92vw,380px)] rounded-2xl shadow-elegant border border-border bg-card overflow-hidden transition-all origin-bottom-right",
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        )}
      >
        <div className="bg-gradient-primary text-white p-4">
          <div className="font-display font-semibold">Advance Assistant</div>
          <div className="text-xs text-white/80">Corporate & product help</div>
        </div>
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gradient-soft">
          {messages.map((m, i) => (
            <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-white text-foreground shadow-soft rounded-bl-sm",
                )}
              >
                {m.text}
                {m.cta && (
                  <a
                    href={STORE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-gradient-accent text-white px-3 py-1.5 text-xs font-semibold hover:scale-105 transition-transform"
                  >
                    Visit Online Store <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <div className="p-3 border-t border-border bg-white flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Ask about offices, products…"
            className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={send}
            className="h-9 w-9 grid place-items-center rounded-full bg-gradient-primary text-white hover:scale-105 transition-transform"
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}
