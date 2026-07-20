import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Heart,
} from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contato" className="bg-[oklch(0.28_0.09_258)] text-white">
      <div className="container-allegra grid gap-8 py-10 sm:py-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
        {/* Logo + description */}
        <div className="lg:col-span-1">
          <Logo variant="white" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Cuidamos da saúde e do desenvolvimento de crianças, adolescentes e adultos com carinho,
            respeito e excelência.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="https://wa.me/556130411414"
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-green transition-transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com"
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-orange transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              className="grid h-10 w-10 place-items-center rounded-full bg-brand-blue transition-transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Navegação
          </h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <a href="#home" className="transition-colors hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#especialidades" className="transition-colors hover:text-white">
                Especialidades
              </a>
            </li>
            <li>
              <a href="#equipe" className="transition-colors hover:text-white">
                Equipe
              </a>
            </li>
            <li>
              <a href="#estrutura" className="transition-colors hover:text-white">
                Estrutura da Clínica
              </a>
            </li>
            <li>
              <a href="#convenios" className="transition-colors hover:text-white">
                Convênios
              </a>
            </li>
            <li>
              <a href="#blog" className="transition-colors hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#contato" className="transition-colors hover:text-white">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Specialties */}
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Especialidades
          </h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>Odontopediatria</li>
            <li>Pediatria</li>
            <li>Psicologia</li>
            <li>Fonoaudiologia</li>
            <li>Nutrição</li>
            <li>Psicopedagogia</li>
            <li>Terapia Ocupacional</li>
            <li>ABA</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Contato
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <a
                href="tel:+556130411414"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-yellow" /> (61) 3041-1414
              </a>
            </li>
            <li>
              <a
                href="tel:+556135629984"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-yellow" /> (61) 3562-9984
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/556130411414"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-brand-yellow" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:contato@clinicaallegra.com.br"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-brand-yellow" /> contato@clinicaallegra.com.br
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
              <span>
                QNA 32 Lote 01, Setor Norte
                <br />
                Taguatinga – Brasília/DF
                <br />
                CEP: 72110-320
              </span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">
            Horários
          </h4>
          <div className="text-sm text-white/80">
            <p className="font-semibold text-white">Segunda a Sexta</p>
            <p className="mt-1 flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-yellow" /> 8h às 18h
            </p>
            <p className="mt-4 font-semibold text-white">Sábado</p>
            <p className="mt-1 flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-yellow" /> 8h às 12h
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-allegra flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>
            © 2026 Clínica Allegra – Centro Integrado de Saúde Infantil. Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-1">
            Desenvolvido com 
            <svg width="14" height="14" viewBox="0 0 46 46" fill="none" aria-hidden>
              <defs>
                <linearGradient id="footer-logo-mark" x1="0" y1="0" x2="46" y2="46" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2F80ED" />
                  <stop offset="0.6" stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#FF8A34" />
                </linearGradient>
              </defs>
              <circle cx="15" cy="13" r="5" fill="url(#footer-logo-mark)" />
              <path d="M4 40c0-7 5-12 11-12s11 5 11 12" fill="url(#footer-logo-mark)" />
              <circle cx="32" cy="18" r="3.5" fill="#FF8A34" />
              <path d="M25 40c0-4.5 3.2-8 7-8s7 3.5 7 8" fill="#FF8A34" />
            </svg>
            por Agência Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
