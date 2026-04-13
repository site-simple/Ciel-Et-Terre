"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { blurDataURLs } from "@/lib/blur-data";

export default function Tarifs() {
  return (
    <>
      <Hero
        image="/images/tarifs-hero.webp"
        alt="Horizon et montagnes"
        title="Tarifs"
        subtitle="Médiumnité et Géobiologie"
        blurDataURL={blurDataURLs["tarifs-hero"]}
      />

      {/* Section Mediumnite - blue bg */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-off-white text-center mb-4">
              Médiumnité
            </h2>
            <p className="text-off-white/90 text-center mb-4 text-lg font-[family-name:var(--font-heading)] italic">
              Contacts défunts, lectures psychiques avec auragraphes
            </p>
            <p className="text-off-white/90 text-center mb-12 max-w-2xl mx-auto">
              &laquo; C&apos;est avec une joie sincère que je me mets à votre service pour être le messager entre vous et le Monde Spirituel. &raquo;
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Contact défunt", price: "CHF 100.00", duration: "Durée de la séance : 60 minutes" },
              { title: "Lecture psychique avec auragraphe", price: "CHF 120.00", duration: "Durée de la séance : 60 minutes" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-off-white/10 backdrop-blur-sm rounded-2xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[translate,box-shadow] duration-[1200ms]">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-off-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-semibold text-off-white mb-2">{item.price}</p>
                  <p className="text-off-white/70 text-sm">{item.duration}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Geobiologie - sage bg */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-sage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-off-white text-center mb-4">
              Géobiologie
            </h2>
            <p className="text-off-white/90 text-center mb-4 text-lg font-[family-name:var(--font-heading)] italic">
              Expertises &amp; Harmonisations
            </p>
            <p className="text-off-white/90 text-center mb-12 max-w-2xl mx-auto">
              Je vous propose mes services pour des expertises géobiologiques, nettoyages énergétiques de mémoires de lieux et rééquilibrage des énergies :
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              { title: "Expertise de maisons et de locaux commerciaux", price: "CHF 2.50 le m²" },
              { title: "Expertise de terrains jusqu'à 1000 m²", price: "CHF 600.00 puis CHF 1.00 le m²" },
              { title: "Nettoyages énergétiques de mémoires de lieux et rééquilibrage des énergies", price: "CHF 150.00" },
              { title: "Déplacements", price: "CHF 1.00 le km aller et retour" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                <div className="bg-off-white/10 backdrop-blur-sm rounded-2xl px-4 py-6 md:p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[translate,box-shadow] duration-[1200ms] h-full flex flex-col justify-center">
                  <h3 className="font-[family-name:var(--font-heading)] text-[clamp(1rem,0.8rem+0.7vw,1.25rem)] text-off-white mb-3 md:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-semibold text-off-white">{item.price}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-off-white/90 text-center mb-10">
              Sur demande, je vous ferai parvenir un devis détaillé.
            </p>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-dark-green text-off-white px-8 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-dark-green/80 active:scale-[0.97] transition-[scale,background-color,box-shadow] duration-[500ms]"
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
