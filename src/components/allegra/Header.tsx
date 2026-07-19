import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Equipe", href: "#equipe" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Convênios", href: "#convenios" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-cloud bg-white/80 backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <div className="container-allegra grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
        <a href="#home" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-8">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative py-1.5 font-ui text-sm font-semibold transition-colors hover:text-brand-blue ${
                i === 0 ? "text-brand-blue" : "text-brand-ink"
              }`}
            >
              {item.label}
              {i === 0 && (
                <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-brand-orange" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/556130411414"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 font-ui text-sm font-semibold text-white shadow-lg shadow-brand-green/25 transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            AGENDAR CONSULTA
          </a>
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-cloud text-brand-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-cloud bg-white">
          <div className="container-allegra flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 font-ui text-sm font-semibold text-brand-ink hover:bg-brand-mist"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/556130411414"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-3 font-ui text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" /> AGENDAR CONSULTA
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
