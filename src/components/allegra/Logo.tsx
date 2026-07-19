export function Logo({ variant = "color" }: { variant?: "color" | "white" }) {
  const nameGradient = variant === "white" ? "url(#logo-white)" : "url(#logo-name)";
  const subColor = variant === "white" ? "rgba(255,255,255,0.85)" : "var(--brand-ink)";
  return (
    <div className="flex items-center gap-2.5">
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden>
        <defs>
          <linearGradient
            id="logo-mark"
            x1="0"
            y1="0"
            x2="46"
            y2="46"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F80ED" />
            <stop offset="0.6" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#FF8A34" />
          </linearGradient>
        </defs>
        {/* Adult silhouette */}
        <circle cx="15" cy="13" r="5" fill="url(#logo-mark)" />
        <path d="M4 40c0-7 5-12 11-12s11 5 11 12" fill="url(#logo-mark)" />
        {/* Child silhouette */}
        <circle cx="32" cy="18" r="3.5" fill="#FF8A34" />
        <path d="M25 40c0-4.5 3.2-8 7-8s7 3.5 7 8" fill="#FF8A34" />
        {/* Heart */}
        <path
          d="M27.6 22.3c1-1.1 2.7-1.2 3.7-.1.8.8.8 2 .2 2.9l-3.9 4.1-3.9-4.1c-.6-.9-.6-2.1.2-2.9 1-1.1 2.7-1 3.7.1z"
          fill="#FFD34D"
        />
      </svg>
      <div className="leading-tight">
        <div
          className="font-display text-2xl font-extrabold"
          style={{
            background:
              variant === "white" ? "white" : "linear-gradient(90deg,#2F80ED,#8B5CF6,#FF8A34)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Allegra
        </div>
        <div
          className="text-[9px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: subColor }}
        >
          Centro Integrado
          <br />
          de Saúde Infantil
        </div>
        {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
        <span className="hidden">{nameGradient}</span>
      </div>
    </div>
  );
}
