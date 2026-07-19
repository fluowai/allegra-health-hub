import { Heart, Award, Baby, ShieldCheck, MapPin, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ITEMS: { icon: LucideIcon; title: string; desc: string; color: string }[] = [
  {
    icon: Heart,
    title: "Atendimento\nHumanizado",
    desc: "Cuidado com carinho em cada detalhe.",
    color: "text-brand-blue",
  },
  {
    icon: Award,
    title: "Equipe\nEspecializada",
    desc: "Profissionais qualificados em diversas áreas.",
    color: "text-brand-green",
  },
  {
    icon: Baby,
    title: "Ambiente\nInfantil",
    desc: "Espaços acolhedores e seguros para todas as idades.",
    color: "text-brand-orange",
  },
  {
    icon: ShieldCheck,
    title: "Segurança\ne Qualidade",
    desc: "Protocolos e equipamentos modernos.",
    color: "text-brand-blue",
  },
  {
    icon: MapPin,
    title: "Localização\nPrivilegiada",
    desc: "Fácil acesso no coração de Taguatinga.",
    color: "text-brand-blue",
  },
  {
    icon: Handshake,
    title: "Convênios\ne Particular",
    desc: "Atendemos diversos convênios e particular.",
    color: "text-brand-purple",
  },
];

export function WhyUs() {
  return (
    <section className="bg-brand-mist py-16">
      <div className="container-allegra">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
          Por Que Escolher a Allegra?
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {ITEMS.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="card-hover rounded-3xl bg-white p-6 text-center soft-shadow"
            >
              <div
                className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-mist ${color}`}
              >
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <h3 className="mt-4 whitespace-pre-line font-display text-sm font-bold text-brand-blue-dark">
                {title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-brand-steel">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
