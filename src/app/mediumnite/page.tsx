"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";

export default function Mediumnite() {
  return (
    <>
      <Hero
        image="/images/mediumnite.jpg"
        alt="Lune à travers les branches"
        title="Médiumnité"
        subtitle="Un pont entre le visible et l'invisible, au service de votre chemin."
      />

      {/* Section 1 */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-earth mb-8">
              Qu&apos;est-ce que la médiumnité ?
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-night/70 leading-relaxed">
              <p>
                La médiumnité est un pont entre le visible et l&apos;invisible, une capacité naturelle permettant d&apos;entrer en résonance avec les mondes subtils. Le médium devient alors un canal, un réceptacle, un messager. À travers son corps, son cœur et sa conscience, il perçoit les émotions, les vibrations et les énergies qui entourent les êtres, les lieux et la nature.
              </p>
              <p>
                Depuis la nuit des temps, ces êtres sensibles ont accompagné l&apos;humanité. Ils étaient chamanes, druides, guérisseurs, oracles, prophètes — ceux qui savaient écouter ce que le silence murmure.
              </p>
              <p>
                Nous portons tous en nous une forme de médiumnité, une sensibilité naturelle qui ne demande qu&apos;à être reconnue. Pourtant, chacun ne choisira pas forcément de développer ce potentiel. La médiumnité n&apos;est qu&apos;un chemin parmi d&apos;autres, une voie intérieure qui mène à la rencontre de Soi.
              </p>
              <p>
                Les médiums ne sont pas des êtres à part : ce sont des personnes ordinaires qui ont accepté d&apos;écouter leur sensibilité et de l&apos;offrir au service des autres. Ils traversent des épreuves, connaissent le doute et possèdent leurs propres fragilités, comme tout le monde. Mais en choisissant cette voie, ils s&apos;engagent à transformer leurs faiblesses, à en faire des forces, et à avancer avec authenticité.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Contact defunt */}
      <section className="py-20 md:py-28 bg-cream-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-earth mb-8">
              Médiumnité de contact défunt
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-night/70 leading-relaxed">
              <p>
                C&apos;est un moment privilégié et sacré partagé entre le défunt, le médium et la personne en consultation. Le médium peut percevoir — voir, entendre, ressentir — les émotions, les souvenirs, les traits de personnalité et les nuances d&apos;expression des proches disparus.
              </p>
              <p>Pour offrir :</p>
              <ul className="space-y-3 ml-4">
                {[
                  "Des messages porteurs de sens,",
                  "Une guidance adaptée à la situation vécue,",
                  "Une guérison émotionnelle, le lien continue, une forme de présence,",
                  "Éclaircir des non-dits, mettre des mots sur des situations restées en suspens,",
                  "Un apaisement ou une compréhension plus profonde.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-sage-light mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Psychique */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-earth mb-8">
              Médiumnité psychique
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-night/70 leading-relaxed">
              <p>
                Le médium se connecte à l&apos;âme de la personne qu&apos;il accompagne, en entrant en résonance avec son corps énergétique, souvent appelé aura. À travers cette connexion subtile, il perçoit ses qualités profondes, ses zones de blocage, ainsi que certains aspects de son histoire personnelle, passée ou actuelle.
              </p>
              <p>
                Il peut également ressentir ses potentialités, ses aptitudes naturelles et la manière dont elle peut, selon son libre arbitre, les développer ou non.
              </p>
              <p>
                Il ne s&apos;agit ni de voyance ni de prédiction du futur. La médiumnité psychique constitue un outil d&apos;exploration intérieure : un moyen destiné à mieux se connaître, à comprendre ses fonctionnements et, potentiellement, à cheminer vers un mieux-être.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Peinture intuitive */}
      <section className="py-20 md:py-28 bg-cream-dark/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-earth mb-8">
                  Peinture intuitive
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <p className="text-night/70 leading-relaxed">
                  À travers des jeux, des explorations et des expériences artistiques guidées, vous partirez à la rencontre de vous-même. Vous découvrirez votre pouvoir créateur, cette force intérieure capable de transformer votre regard sur votre vie et d&apos;y apporter plus de couleur, de sens et de présence. Car vous êtes les créateurs de votre existence.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/lune-arbres-portrait.jpg"
                  alt="Lune à travers les arbres"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-earth italic leading-relaxed">
              C&apos;est avec une joie sincère que je deviens le pont entre vous, vos proches et la voix de votre Âme.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
