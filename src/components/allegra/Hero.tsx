import { MessageCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-doctor-baby.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Decorative organic shapes */}
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-brand-green/20 blur-2xl" />
      <div className="pointer-events-none absolute left-6 top-56 hidden md:block">
        <div className="grid grid-cols-6 gap-2 opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
          ))}
        </div>
      </div>

      <div className="container-allegra grid gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <div className="relative z-10 flex flex-col justify-center">
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] text-brand-blue-dark sm:text-5xl md:text-6xl">
            Cuidamos da saúde
            <br /> de quem você
            <br />
            <span className="text-brand-orange">mais ama.</span>
          </h1>
          <p className="mt-6 max-w-md font-sans text-base text-brand-steel md:text-lg">
            Atendimento humanizado e equipe multidisciplinar especializada em crianças, adolescentes e adultos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/556130411414"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3.5 font-ui text-sm font-semibold text-white shadow-xl shadow-brand-green/30 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              AGENDAR PELO WHATSAPP
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-6 py-3.5 font-ui text-sm font-semibold text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              CONHEÇA NOSSAS ESPECIALIDADES
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-blue/15" />
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-yellow/40" />
          <div className="relative overflow-hidden rounded-[36px] soft-shadow">
            <img
              src={heroImg}
              alt="Pediatra sorrindo com um bebê"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Slider dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-2 w-6 rounded-full bg-brand-blue" />
            <span className="h-2 w-2 rounded-full bg-brand-cloud" />
            <span className="h-2 w-2 rounded-full bg-brand-cloud" />
            <span className="h-2 w-2 rounded-full bg-brand-cloud" />
          </div>
        </div>
      </div>

      {/* Bottom organic wave */}
      <svg className="block w-full text-brand-mist" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,40 C240,90 480,0 720,30 C960,60 1200,80 1440,30 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
}
