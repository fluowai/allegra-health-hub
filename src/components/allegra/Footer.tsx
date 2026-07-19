import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Heart } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contato" className="bg-[oklch(0.28_0.09_258)] text-white">
      <div className="container-allegra grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo variant="white" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Cuidamos da saúde e do desenvolvimento de crianças, adolescentes e adultos com carinho, respeito e excelência.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="https://wa.me/556130411414" className="grid h-9 w-9 place-items-center rounded-full bg-brand-green" aria-label="WhatsApp">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" className="grid h-9 w-9 place-items-center rounded-full bg-brand-orange" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" className="grid h-9 w-9 place-items-center rounded-full bg-brand-blue" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">Navegação</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#especialidades" className="hover:text-white">Especialidades</a></li>
            <li><a href="#equipe" className="hover:text-white">Equipe</a></li>
            <li><a href="#estrutura" className="hover:text-white">Estrutura da Clínica</a></li>
            <li><a href="#convenios" className="hover:text-white">Convênios</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#contato" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">Especialidades</h4>
          <ul className="space-y-2 text-sm text-white/80">
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

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">Contato</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-yellow" /> (61) 3041-1414</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-yellow" /> (61) 3562-9984</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-brand-yellow" /> (61) 3041-1414</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-yellow" /> contato@clinicaallegra.com.br</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-yellow" /> QNA 32 Lote 01, Setor Norte<br />Taguatinga – Brasília/DF<br />CEP: 72110-320</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-brand-yellow">Horários</h4>
          <div className="text-sm text-white/80">
            <p className="font-semibold text-white">Segunda a Sexta</p>
            <p className="mt-1 flex items-center gap-2"><Clock className="h-4 w-4 text-brand-yellow" /> 8h às 18h</p>
            <p className="mt-4 font-semibold text-white">Sábado</p>
            <p className="mt-1 flex items-center gap-2"><Clock className="h-4 w-4 text-brand-yellow" /> 8h às 12h</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-allegra flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 md:flex-row">
          <p>© 2026 Clínica Allegra – Centro Integrado de Saúde Infantil. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com <Heart className="h-3 w-3 fill-brand-orange text-brand-orange" /> por Agência Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
