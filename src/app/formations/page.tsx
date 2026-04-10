"use client";

import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import FormationCard from "@/components/FormationCard";

const calendar = [
  { date: "Samedi 27 juin 2026", title: "Initiation à la géobiologie — stage 1" },
  { date: "Samedi 4 juillet 2026", title: "Utilisation du pendule et des baguettes de sourcier" },
  { date: "Samedi 29 août 2026", title: "Création d'un cromlech" },
  { date: "Samedi 12 septembre 2026", title: "Initiation à la géobiologie — stage 2" },
  { date: "Samedi 19 septembre 2026", title: "Nettoyages énergétiques de mémoires de lieux — 1ère partie" },
  { date: "Samedi 3 octobre 2026", title: "Nettoyages énergétiques de mémoires de lieux — 2ème partie" },
  { date: "Samedi 10 octobre 2026", title: "Nettoyages énergétiques de mémoires de lieux — 3ème partie" },
  { date: "Samedi 7 novembre 2026", title: "Ressenti et intuition — stage 1" },
  { date: "Samedi 21 novembre 2026", title: "Ressenti et intuition — stage 2" },
  { date: "Samedi 5 décembre 2026", title: "Ressenti et intuition — stage 3" },
  { date: "Samedi 19 décembre 2026", title: "Ressenti et intuition — stage 4" },
];

export default function Formations() {
  return (
    <>
      <Hero
        image="/images/formation.jpg"
        alt="Pierre ancienne avec cupules"
        title="Formations & Stages 2026"
        subtitle="Stages en pleine nature dans le Val de Bagnes, accessibles à tous."
      />

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-night/70 text-lg">
              Inscription par mail à{" "}
              <a href="mailto:info@cieletterre.ch" className="text-sage-dark hover:text-sage transition-colors duration-200 underline">
                info@cieletterre.ch
              </a>{" "}
              ou par téléphone au{" "}
              <a href="tel:+41794176737" className="text-sage-dark hover:text-sage transition-colors duration-200 underline">
                079 417 67 37
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Calendar */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-earth mb-8 text-center">
              Calendrier 2026
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {calendar.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-white rounded-xl p-4 shadow-sm">
                  <span className="text-sage-dark font-medium text-sm sm:whitespace-nowrap sm:min-w-[200px]">
                    {item.date}
                  </span>
                  <span className="text-night/70 text-sm">{item.title}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed descriptions */}
      <section className="py-16 md:py-20 bg-cream-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-earth mb-4">
              Géobiologie
            </h2>
          </ScrollReveal>
          <div className="space-y-4 mb-16">
            <FormationCard title="Initiation à la géobiologie — stages 1 et 2">
              <p>
                Le ressenti et l&apos;intuition, des outils que nous avons tous à disposition et qui nous aident au quotidien.
                Je vous propose deux journées dans la nature pour découvrir ce qu&apos;est la géobiologie.
              </p>
              <p className="font-medium text-earth">Au programme :</p>
              <ul className="space-y-1 ml-4">
                <li>• Ressenti des énergies de ces lieux : les courants d&apos;eau souterrains, les failles, les Vortex, les énergies des arbres</li>
                <li>• Utilisation des baguettes de sourciers et du pendule</li>
                <li>• Travail sur le ressenti et l&apos;intuition</li>
              </ul>
              <div className="bg-cream rounded-lg p-4 space-y-2">
                <p><strong>Lieu stage 1 :</strong> Col du Lein</p>
                <p><strong>Lieu stage 2 :</strong> Le Châble : maison de l&apos;Abbaye, Fontenelle : chapelle des Vernays et Verbier : découverte du village disparu de Curala</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 150.00 par personne (AVS et AI : CHF 120.00)</p>
              </div>
              <p className="text-xs text-night/50">
                Prendre des habits confortables pour une journée dans la nature et pique-nique pour le repas de midi. Ce cours est accessible à tous, aucun prérequis n&apos;est demandé.
              </p>
            </FormationCard>

            <FormationCard title="Création d'un cromlech">
              <p>
                Nos ancêtres les Celtes ont bâti de nombreux sites de pierres dressées. Ces cromlechs sont encore de nos jours un mystère quant à leur utilité. Cependant, l&apos;énergie dégagée à l&apos;intérieur de ces cercles est perceptible.
                Une journée pour bâtir un cercle de pierre, y ressentir les énergies et effectuer un voyage intérieur.
              </p>
              <div className="bg-cream rounded-lg p-4 space-y-2">
                <p><strong>Lieu :</strong> Plamproz, Haut Val de Bagnes</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 150.00 par personne (AVS et AI : CHF 120.00)</p>
              </div>
              <p className="text-xs text-night/50">
                Prendre des habits confortables pour une journée dans la nature et pique-nique pour le repas de midi. Ce cours est accessible à tous, aucun prérequis n&apos;est demandé.
              </p>
            </FormationCard>

            <FormationCard title="Le pendule et les baguettes de sourciers">
              <p>
                Nul n&apos;a besoin de posséder un don pour utiliser un pendule.
              </p>
              <p>
                Beaucoup pensent qu&apos;il faut un &laquo; don &raquo; pour utiliser un pendule ou des baguettes de sourciers. En réalité, chacun peut apprendre à s&apos;en servir. Nous possédons tous une intuition naturelle, souvent mise de côté dans le rythme du quotidien.
                Dans cet atelier, nous allons justement réveiller cette intuition et découvrir comment le pendule et les baguettes de sourciers deviennent des outils accessibles, simples et puissants lorsqu&apos;on les pratique avec régularité.
              </p>
              <div className="bg-cream rounded-lg p-4 space-y-2">
                <p><strong>Lieu :</strong> Plamproz, Haut Val de Bagnes</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 150.00 par personne (AVS et AI : CHF 120.00)</p>
              </div>
              <p className="text-xs text-night/50">
                Prendre des habits confortables pour une journée dans la nature et pique-nique pour le repas de midi. Ce cours est accessible à tous, aucun prérequis n&apos;est demandé.
              </p>
            </FormationCard>
          </div>

          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-earth mb-4">
              Médiumnité
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            <FormationCard title="Ressenti et intuition — stages 1, 2, 3 et 4">
              <p>
                Le ressenti et l&apos;intuition, des outils que nous avons tous à disposition et qui nous aident au quotidien.
                La médiumnité psychique est un outil de développement personnel. Elle permet d&apos;améliorer la confiance en soi.
                Je vous propose des ateliers pour se réapproprier cette faculté en travaillant votre médiumnité avec des exercices ludiques.
              </p>
              <p className="font-medium text-earth">Au programme :</p>
              <ul className="space-y-1 ml-4">
                <li>• Méditations</li>
                <li>• C&apos;est quoi la médiumnité ainsi que les différentes pratiques</li>
                <li>• Exercices pratiques sur le ressenti, l&apos;intuition et la médiumnité</li>
              </ul>
              <div className="bg-cream rounded-lg p-4 space-y-2">
                <p><strong>Lieu :</strong> Atelier TerreColorée, Rue Félix Corthay 11, Le Châble</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 150.00 par personne (AVS et AI : CHF 120.00)</p>
              </div>
              <p className="text-xs text-night/50">
                Pique-nique pour le repas de midi. Ce cours est accessible à tous, aucun prérequis n&apos;est demandé.
              </p>
            </FormationCard>

            <FormationCard title="Les nettoyages énergétiques de mémoires de lieux">
              <p>
                Notre manière de vivre, de penser, nos peurs ont une influence sur l&apos;énergie de notre lieu de vie. Vivant ou mort, nous pouvons laisser une empreinte énergétique de notre passage dans un lieu. Les personnes qui vivront après nous pourront ressentir ces énergies.
                Un nettoyage énergétique doit se faire avec le cœur, sans peur, sans jugement et avec amour.
              </p>
              <p className="font-medium text-earth">Au programme :</p>
              <ul className="space-y-1 ml-4">
                <li>• Travail sur son ressenti et son intuition</li>
                <li>• Visite de deux lieux chargés d&apos;histoire</li>
                <li>• Découverte et exercices de médiumnité psychique</li>
                <li>• Les différentes techniques et méthodes</li>
                <li>• Nettoyage énergétique d&apos;un lieu (selon les possibilités)</li>
              </ul>
              <div className="bg-cream rounded-lg p-4 space-y-2">
                <p><strong>Lieu :</strong> Atelier TerreColorée, Rue Félix Corthay 11, Le Châble</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> Module de 3 jours : CHF 450.00 par personne (AVS et AI : CHF 360.00)</p>
              </div>
              <p className="text-xs text-night/50">
                Pique-nique pour le repas de midi. Ce cours est accessible à tous, aucun prérequis n&apos;est demandé.
              </p>
            </FormationCard>
          </div>
        </div>
      </section>
    </>
  );
}
