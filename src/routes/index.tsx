import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/allegra/TopBar";
import { Header } from "@/components/allegra/Header";
import { Hero } from "@/components/allegra/Hero";
import { Specialties } from "@/components/allegra/Specialties";
import { WhyUs } from "@/components/allegra/WhyUs";
import { Structure } from "@/components/allegra/Structure";
import { HowItWorks } from "@/components/allegra/HowItWorks";
import { Testimonials } from "@/components/allegra/Testimonials";
import { Insurance } from "@/components/allegra/Insurance";
import { FinalCTA } from "@/components/allegra/FinalCTA";
import { Footer } from "@/components/allegra/Footer";
import { FloatingWhatsApp } from "@/components/allegra/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Allegra — Centro Integrado de Saúde Infantil | Taguatinga/DF" },
      {
        name: "description",
        content:
          "Clínica Allegra: atendimento humanizado e equipe multidisciplinar em Odontopediatria, Pediatria, Psicologia, Fonoaudiologia, Nutrição e mais. Agende sua consulta.",
      },
      { property: "og:title", content: "Clínica Allegra — Centro Integrado de Saúde Infantil" },
      {
        property: "og:description",
        content: "Cuidamos da saúde de quem você mais ama. Taguatinga/DF.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Clínica Allegra – Centro Integrado de Saúde Infantil",
          address: {
            "@type": "PostalAddress",
            streetAddress: "QNA 32 Lote 01, Setor Norte",
            addressLocality: "Taguatinga",
            addressRegion: "DF",
            postalCode: "72110-320",
            addressCountry: "BR",
          },
          telephone: ["+55-61-3041-1414", "+55-61-3562-9984"],
          openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Specialties />
        <WhyUs />
        <Structure />
        <HowItWorks />
        <Testimonials />
        <Insurance />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
