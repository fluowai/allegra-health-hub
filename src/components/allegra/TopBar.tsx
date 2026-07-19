import { MapPin, Clock, Phone, Instagram, MessageCircle } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-brand-blue text-white">
      {/* Desktop: full info bar */}
      <div className="hidden md:block">
        <div className="container-allegra flex h-10 items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              QNA 32 Lote 01, Setor Norte, Taguatinga – Brasília/DF
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" />
              Seg a Sex: 8h às 18h · Sáb: 8h às 12h
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+556130411414" className="flex items-center gap-1.5 hover:opacity-90">
              <Phone className="h-3.5 w-3.5" /> (61) 3041-1414
            </a>
            <a href="tel:+556135629984" className="flex items-center gap-1.5 hover:opacity-90">
              <Phone className="h-3.5 w-3.5" /> (61) 3562-9984
            </a>
            <a
              href="https://wa.me/556130411414"
              className="flex items-center gap-1.5 hover:opacity-90"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              className="flex items-center gap-1.5 hover:opacity-90"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile: compact phone + WhatsApp bar */}
      <div className="md:hidden">
        <div className="container-allegra flex h-9 items-center justify-between text-[11px] font-semibold">
          <div className="flex items-center gap-3">
            <a href="tel:+556130411414" className="flex items-center gap-1 hover:opacity-90">
              <Phone className="h-3 w-3" /> (61) 3041-1414
            </a>
            <span className="text-white/40">|</span>
            <a
              href="https://wa.me/556130411414"
              className="flex items-center gap-1 hover:opacity-90"
            >
              <MessageCircle className="h-3 w-3" /> WhatsApp
            </a>
          </div>
          <a
            href="https://instagram.com"
            className="flex items-center gap-1 hover:opacity-90"
            aria-label="Instagram"
          >
            <Instagram className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
