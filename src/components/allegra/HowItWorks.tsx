import { Calendar, UserCircle2, Stethoscope, Heart, ArrowRight, ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const STEPS: {
  n: number;
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  ring: string;
}[] = [
  {
    n: 1,
    icon: Calendar,
    title: "Agende",
    desc: "Escolha a especialidade e agende sua consulta pelo WhatsApp ou telefone.",
    color: "text-brand-green",
    ring: "ring-brand-green",
  },
  {
    n: 2,
    icon: UserCircle2,
    title: "Chegada",
    desc: "Recepção acolhedora e atendimento personalizado.",
    color: "text-brand-blue",
    ring: "ring-brand-blue",
  },
  {
    n: 3,
    icon: Stethoscope,
    title: "Consulta",
    desc: "Avaliação completa com nossos especialistas.",
    color: "text-brand-purple",
    ring: "ring-brand-purple",
  },
  {
    n: 4,
    icon: Heart,
    title: "Acompanhamento",
    desc: "Suporte contínuo para o desenvolvimento e bem-estar do seu filho.",
    color: "text-brand-orange",
    ring: "ring-brand-orange",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-allegra grid gap-10 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-12">
        <div className="text-center lg:text-left">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
            Como Funciona
          </p>
          <h2 className="font-display text-2xl font-extrabold leading-tight text-brand-blue-dark sm:text-3xl md:text-4xl">
            É fácil cuidar da saúde de quem você ama
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-brand-yellow lg:mx-0 mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative flex flex-col items-center text-center">
              <div
                className={`relative grid h-20 w-20 place-items-center rounded-full bg-white ring-2 ${s.ring} soft-shadow sm:h-24 sm:w-24`}
              >
                <s.icon className={`h-9 w-9 sm:h-10 sm:w-10 ${s.color}`} strokeWidth={1.8} />
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 grid h-7 w-7 place-items-center rounded-full text-xs font-bold text-white ${s.color.replace("text-", "bg-")}`}
                >
                  {s.n}
                </span>
              </div>
              <h3 className={`mt-5 font-display text-base font-bold sm:mt-6 sm:text-lg ${s.color}`}>
                {s.title}
              </h3>
              <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-brand-steel">
                {s.desc}
              </p>

              {/* Arrow between steps */}
              {i < STEPS.length - 1 && (
                <>
                  {/* Mobile: down arrow */}
                  <ArrowDown className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-5 w-5 text-brand-cloud sm:hidden" />
                  {/* Desktop: right arrow */}
                  <ArrowRight className="absolute right-[-14px] top-10 hidden h-6 w-6 text-brand-cloud lg:block" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
