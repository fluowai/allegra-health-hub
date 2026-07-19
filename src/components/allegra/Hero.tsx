import { MessageCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-doctor-baby.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ backgroundColor: "#fcfbf8" }}>
      {/* Decorative organic shapes */}
      <svg
        className="pointer-events-none absolute -left-10 top-24 h-64 w-64 text-brand-blue/10"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M45,-58C57,-46,63,-29,66,-11C69,7,68,26,58,40C48,54,29,63,9,64C-11,66,-32,60,-46,47C-60,34,-67,13,-64,-6C-62,-24,-49,-41,-34,-53C-19,-64,-2,-70,15,-70C33,-71,50,-66,45,-58Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="pointer-events-none absolute -left-4 bottom-4 h-32 w-32 rounded-tr-full bg-brand-green/30" />
      <div className="pointer-events-none absolute left-4 top-64 grid grid-cols-5 gap-1.5 opacity-60">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-brand-blue/70" />
        ))}
      </div>

      <div className="container-allegra grid gap-8 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14 lg:py-20">
        <div className="relative z-10 flex flex-col justify-center">
          <h1 className="font-display text-[32px] font-extrabold leading-[1.08] text-brand-blue-dark sm:text-[42px] md:text-5xl lg:text-[56px]">
            Cuidamos da saúde
            <br /> de quem você
            <br />
            <span className="text-brand-orange">mais ama.</span>
          </h1>
          <p className="mt-5 max-w-md font-sans text-sm text-brand-steel sm:text-base md:text-[17px]">
            Atendimento humanizado e equipe multidisciplinar especializada em crianças, adolescentes
            e adultos.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="https://wa.me/556130411414"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 font-ui text-[13px] font-semibold uppercase tracking-wide text-white shadow-xl shadow-brand-green/30 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-blue bg-white px-6 py-3.5 font-ui text-[13px] font-semibold uppercase tracking-wide text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              Conheça nossas especialidades
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-brand-yellow/60" />
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px]">
            <img
              src={heroImg}
              alt="Pediatra sorrindo com um bebê"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-2 w-6 rounded-full bg-brand-blue" />
            <span className="h-2 w-2 rounded-full bg-brand-cloud" />
            <span className="h-2 w-2 rounded-full bg-brand-cloud" />
            <span className="h-2 w-2 rounded-full bg-brand-cloud" />
          </div>
        </div>
      </div>

      <svg
        className="block w-full text-white"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,30 C240,70 480,0 720,20 C960,40 1200,60 1440,20 L1440,60 L0,60 Z"
        />
      </svg>
    </section>
  );
}
