"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import PriceCard from "@/components/PriceCard";

export default function Tarifs() {
  return (
    <>
      <Hero
        image="/images/tarifs.jpg"
        alt="Palo santo dans un bol"
        title="Tarifs"
        subtitle="Expertises géobiologiques, nettoyages énergétiques et déplacements."
      />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-earth text-center mb-4">
              Expertises &amp; Harmonisations
            </h2>
            <p className="text-night/70 text-center mb-12 max-w-2xl mx-auto">
              Je vous propose mes services pour des expertises géobiologiques et nettoyages énergétiques de mémoires de lieux aux tarifs suivants :
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <PriceCard
              title="Expertise de maisons et de locaux commerciaux"
              price="CHF 2.50 le m²"
              delay={0}
            />
            <PriceCard
              title="Expertise de terrains jusqu'à 1000 m²"
              price="CHF 600.00 puis CHF 1.00 le m²"
              delay={0.1}
            />
            <PriceCard
              title="Nettoyages énergétiques de mémoires de lieux"
              price="CHF 150.00"
              delay={0.2}
            />
            <PriceCard
              title="Déplacements"
              price="CHF 1.00 le km aller et retour"
              delay={0.3}
            />
          </div>

          <ScrollReveal>
            <p className="text-night/60 text-center mb-10">
              Sur demande, je vous ferai parvenir un devis détaillé.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-sage-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-sage transition-colors duration-200"
              >
                Demander un devis
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
