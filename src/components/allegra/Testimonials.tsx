import { Star } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const REVIEWS = [
  { name: "Juliano Andrade", img: t1, text: "Clínica maravilhosa! Meu filho ama o ambiente e os profissionais. Somos muito bem atendidos em todas as consultas." },
  { name: "Carlos Eduardo", img: t2, text: "Equipe muito atenciosa e preparada. A Allegra faz toda a diferença no desenvolvimento da minha filha." },
  { name: "Marina Soares", img: t3, text: "Ambiente acolhedor, organizado e com excelentes profissionais. Recomendo de olhos fechados!" },
];

function GoogleG() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.5-5.9 7.5-11.3 7.5-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 8 3l5.7-5.7C33.9 5.8 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.5 18.9 12.5 24 12.5c3 0 5.8 1.1 8 3l5.7-5.7C33.9 5.8 29.2 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.1 0 9.7-1.9 13.1-5l-6-5.1c-2 1.4-4.5 2.2-7.1 2.2-5.4 0-9.7-3-11.3-7.4l-6.5 5C9.6 39.6 16.3 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.4l6 5.1C40.9 35.6 44 30.3 44 24c0-1.3-.1-2.4-.4-3.5z"/>
    </svg>
  );
}

export function Testimonials() {
  return (
    <section className="bg-brand-mist py-20">
      <div className="container-allegra">
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
          O Que Os Pais Dizem
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.name} className="card-hover rounded-3xl bg-white p-6 soft-shadow">
              <div className="flex items-center gap-4">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <div className="flex text-brand-yellow">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1 font-display text-sm font-bold text-brand-blue-dark">{r.name}</p>
                </div>
                <div className="ml-auto"><GoogleG /></div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-steel">{r.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="h-2 w-6 rounded-full bg-brand-blue" />
          <span className="h-2 w-2 rounded-full bg-brand-cloud" />
          <span className="h-2 w-2 rounded-full bg-brand-cloud" />
          <span className="h-2 w-2 rounded-full bg-brand-cloud" />
        </div>
      </div>
    </section>
  );
}
