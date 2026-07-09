import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-[oklch(0.16_0.04_255)] text-white/85">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center text-white font-bold">A</div>
            <div>
              <div className="font-display font-bold text-white">Advance Telecom</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">Pakistan</div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Pakistan's leading nationwide distributor of mobile devices, accessories, and energy solutions.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-accent hover:text-white transition-colors"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          title="Quick Links"
          links={[
            { to: "/about", label: "About" },
            { to: "/journey", label: "Journey" },
            { to: "/verticals", label: "Business Verticals" },
            { to: "/network", label: "Distribution Network" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { to: "/warehouses", label: "Warehouses" },
            { to: "/offices", label: "Offices" },
            { to: "/team", label: "Team" },
            { to: "/contact", label: "Contact" },
          ]}
        />
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Shop</h4>
          <a
            href="https://advancetelecom.com.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-gradient-accent text-white px-5 py-2.5 text-sm font-semibold shadow-elegant hover:scale-105 transition-transform"
          >
            Buy Products
          </a>
          <p className="text-xs text-white/60 mt-4 leading-relaxed">
            Visit our online store for the latest mobile phones, accessories and deals.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Advance Telecom Pakistan. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to as string} className="text-white/70 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
