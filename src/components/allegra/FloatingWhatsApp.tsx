import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/556130411414"
      aria-label="Agendar pelo WhatsApp"
      className={`fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-brand-green text-white shadow-xl shadow-brand-green/40 transition-all duration-300 hover:scale-110 sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
