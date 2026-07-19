import { useEffect, useRef, useCallback, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length) focusable[0].focus();
  }, [open]);

  const handleNavClick = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-brand-cloud bg-white/90 backdrop-blur-xl" : "bg-white"
      }`}
    >
      <div className="container-allegra flex h-16 items-center justify-between gap-3 md:h-[72px]">
        {/* Hamburger - mobile only */}
        <button
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-cloud bg-white text-brand-ink transition-colors hover:bg-brand-mist lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="Clínica Allegra - Página inicial"
        >
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-lg px-3 py-2 font-ui text-[13px] font-semibold transition-colors hover:bg-brand-mist hover:text-brand-blue ${
                i === 0 ? "text-brand-blue" : "text-brand-ink"
              }`}
            >
              {item.label}
              {i === 0 && (
                <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-brand-orange" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/556130411414"
          className="hidden items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 font-ui text-sm font-semibold text-white shadow-lg shadow-brand-green/25 transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          AGENDAR
        </a>

        {/* Mobile CTA - phone icon */}
        <a
          href="tel:+556130411414"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-green text-white shadow-md shadow-brand-green/20 lg:hidden"
          aria-label="Ligar agora"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`fixed inset-x-0 top-16 z-50 border-b border-brand-cloud bg-white shadow-2xl transition-all duration-300 ease-out lg:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: "calc(100vh - 64px)" }}
      >
        <div className="container-allegra overflow-y-auto py-4">
          <nav className="flex flex-col gap-1">
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`flex items-center rounded-xl px-4 py-3.5 font-ui text-[15px] font-semibold transition-colors hover:bg-brand-mist ${
                  i === 0 ? "bg-brand-mist text-brand-blue" : "text-brand-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3 border-t border-brand-cloud pt-4">
            <a
              href="https://wa.me/556130411414"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 font-ui text-sm font-semibold text-white shadow-lg shadow-brand-green/25"
            >
              <MessageCircle className="h-4 w-4" />
              AGENDAR PELO WHATSAPP
            </a>
            <a
              href="tel:+556130411414"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-blue px-6 py-3 font-ui text-sm font-semibold text-brand-blue"
            >
              <Phone className="h-4 w-4" />
              (61) 3041-1414
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
