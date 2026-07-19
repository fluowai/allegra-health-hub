const PLANS = ["SulAmérica", "Amil", "Bradesco", "Golden Cross", "Saúde Caixa", "Cassi", "Assefaz"];

export function Insurance() {
  return (
    <section id="convenios" className="bg-white py-16">
      <div className="container-allegra">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">Convênios</p>
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-brand-cloud bg-white px-6 py-6 soft-shadow">
          {PLANS.map((p) => (
            <div
              key={p}
              className="flex-1 min-w-[110px] text-center font-display text-lg font-extrabold text-brand-blue-dark/70 transition-colors hover:text-brand-blue"
            >
              {p}
            </div>
          ))}
          <a
            href="#todos-convenios"
            className="rounded-full border-2 border-brand-blue px-5 py-2 font-ui text-xs font-semibold uppercase tracking-wide text-brand-blue transition-colors hover:bg-brand-blue hover:text-white"
          >
            Ver todos
          </a>
        </div>
      </div>
    </section>
  );
}
