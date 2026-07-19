import { useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import img1 from "@/assets/structure-reception.jpg";
import img2 from "@/assets/structure-consultorio.jpg";
import img3 from "@/assets/structure-odontologia.jpg";
import img4 from "@/assets/structure-infantil.jpg";
import img5 from "@/assets/structure-especializada.jpg";

const SLIDES = [
  { img: img1, title: "Recepção", desc: "Ambiente acolhedor para receber você e sua família." },
  { img: img2, title: "Consultórios", desc: "Equipados para oferecer o melhor atendimento." },
  { img: img3, title: "Odontologia", desc: "Consultórios modernos e especializados." },
  { img: img4, title: "Espaço Infantil", desc: "Diversão e segurança para as crianças." },
  { img: img5, title: "Salas Especializadas", desc: "Ambientes preparados para cada tipo de atendimento." },
];

export function Structure() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setIdx((i) => (i + 1) % SLIDES.length);

  return (
    <section id="estrutura" className="bg-white py-20">
      <div className="container-allegra">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
            Conheça Nossa Estrutura
          </p>
          <p className="text-brand-steel">
            Ambientes pensados para o bem-estar e conforto da sua família.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {SLIDES.map((s, i) => (
              <figure
                key={s.title}
                className={`card-hover overflow-hidden rounded-3xl bg-white soft-shadow transition-all ${
                  i === idx ? "ring-2 ring-brand-blue/50" : ""
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="px-4 py-4">
                  <h3 className="font-display text-sm font-bold text-brand-blue">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-steel">{s.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute -left-3 top-1/2 hidden -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-white text-brand-blue soft-shadow lg:grid"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Próximo"
            onClick={next}
            className="absolute -right-3 top-1/2 hidden -translate-y-1/2 h-11 w-11 place-items-center rounded-full bg-white text-brand-blue soft-shadow lg:grid"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#galeria"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 font-ui text-sm font-semibold text-white shadow-lg shadow-brand-blue/25 transition-transform hover:-translate-y-0.5"
          >
            <Images className="h-4 w-4" /> Ver mais fotos
          </a>
        </div>
      </div>
    </section>
  );
}
