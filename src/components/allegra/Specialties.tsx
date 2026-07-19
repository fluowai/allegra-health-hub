import { Smile, Baby, Brain, MessageSquare, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Spec = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
};

const SPECIALTIES: Spec[] = [
  {
    icon: Smile,
    title: "Odontopediatria",
    desc: "Saúde bucal infantil com carinho e especialização.",
    color: "text-brand-blue",
    bg: "bg-brand-blue",
  },
  {
    icon: Baby,
    title: "Pediatria",
    desc: "Acompanhamento completo da saúde do seu filho.",
    color: "text-brand-green",
    bg: "bg-brand-green",
  },
  {
    icon: Brain,
    title: "Psicologia",
    desc: "Apoio emocional para crianças, adolescentes e adultos.",
    color: "text-brand-purple",
    bg: "bg-brand-purple",
  },
  {
    icon: MessageSquare,
    title: "Fonoaudiologia",
    desc: "Desenvolvimento da comunicação e da linguagem.",
    color: "text-brand-orange",
    bg: "bg-brand-orange",
  },
  {
    icon: Smile,
    title: "Nutrição",
    desc: "Alimentação saudável para mais qualidade de vida.",
    color: "text-brand-green",
    bg: "bg-brand-green",
  },
  {
    icon: Smile,
    title: "Psicopedagogia",
    desc: "Aprendizagem com estratégias e potencialização.",
    color: "text-brand-blue",
    bg: "bg-brand-blue",
  },
  {
    icon: Smile,
    title: "Terapia Ocupacional",
    desc: "Autonomia e desenvolvimento para o dia a dia.",
    color: "text-brand-orange",
    bg: "bg-brand-orange",
  },
];

export function Specialties() {
  return (
    <section id="especialidades" className="bg-white py-16 sm:py-20">
      <div className="container-allegra">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
            Nossas Especialidades
          </p>
          <h2 className="font-display text-2xl font-extrabold text-brand-blue-dark sm:text-3xl md:text-4xl">
            Cuidado completo para todas as fases da vida
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-brand-yellow" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 lg:gap-5">
          {SPECIALTIES.map(({ icon: Icon, title, desc, color, bg }) => (
            <article
              key={title}
              className="card-hover flex flex-col items-center rounded-3xl border border-brand-cloud bg-white p-5 text-center soft-shadow"
            >
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-current/5 sm:h-16 sm:w-16 ${color}`}
              >
                <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.2} />
              </div>
              <h3 className={`mt-3 text-sm font-bold uppercase tracking-wide sm:mt-4 ${color}`}>
                {title}
              </h3>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-brand-steel">{desc}</p>
              <a
                href="https://wa.me/556130411414?text=Olá! Gostaria de agendar uma consulta de ${encodeURIComponent(title)}."
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 inline-flex items-center gap-1.5 rounded-full ${bg} px-4 py-2 text-[11px] font-ui font-semibold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5`}
              >
                Agendar <ArrowRight className="h-3 w-3" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
