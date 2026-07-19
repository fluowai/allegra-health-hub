import { MessageCircle } from "lucide-react";

const PLANS = ["SulAmérica", "Amil", "Bradesco", "Golden Cross", "Saúde Caixa", "Cassi", "Assefaz"];

export function Insurance() {
  return (
    <section id="convenios" className="bg-white py-12 sm:py-16">
      <div className="container-allegra">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
          Convênios
        </p>
        <div className="rounded-3xl border border-brand-cloud bg-white p-4 soft-shadow sm:p-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {PLANS.map((p) => (
              <div
                key={p}
                className="flex items-center justify-center rounded-2xl bg-brand-mist px-3 py-4 text-center font-display text-sm font-extrabold text-brand-blue-dark/70 transition-colors hover:bg-brand-cloud hover:text-brand-blue sm:text-base"
              >
                {p}
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://wa.me/556130411414?text=Olá! Gostaria de saber se vocês atendem pelo meu convênio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-blue px-5 py-2.5 font-ui text-xs font-semibold uppercase tracking-wide text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Consultar convênio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
