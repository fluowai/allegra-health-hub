import { MessageCircle, Heart } from "lucide-react";
import child from "@/assets/cta-child.png";

export function FinalCTA() {
  return (
    <section className="bg-white pb-10 pt-4">
      <div className="container-allegra">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-brand-blue to-[oklch(0.55_0.2_258)] px-6 py-8 soft-shadow md:px-12 md:py-10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10" />
          <div className="grid items-center gap-6 md:grid-cols-[180px_1fr_auto]">
            <img
              src={child}
              alt=""
              loading="lazy"
              width={640}
              height={640}
              className="mx-auto h-40 w-40 object-contain md:h-48 md:w-48"
            />
            <div className="text-center md:text-left">
              <h2 className="font-display text-2xl font-extrabold text-white md:text-3xl">
                Seu filho merece o melhor cuidado!
              </h2>
              <p className="mt-2 text-sm text-white/85">
                Agende agora mesmo e proporcione mais qualidade de vida e desenvolvimento para quem
                você mais ama.
              </p>
            </div>
            <a
              href="https://wa.me/556130411414"
              className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-ui text-sm font-semibold text-brand-blue shadow-lg transition-transform hover:-translate-y-0.5 md:mx-0"
            >
              <MessageCircle className="h-4 w-4" /> AGENDAR CONSULTA
            </a>
          </div>
          <Heart
            className="pointer-events-none absolute -right-2 bottom-2 h-24 w-24 text-brand-yellow/70"
            fill="currentColor"
          />
        </div>
      </div>
    </section>
  );
}
