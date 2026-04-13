"use client";

import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import FormationCard from "@/components/FormationCard";
import { blurDataURLs } from "@/lib/blur-data";

export default function Formations() {
  return (
    <>
      <Hero
        image="/images/formations-hero.webp"
        alt="Pierre ancienne avec cupules"
        title="Formations & Stages 2026"
        subtitle="Stages en salle ou en pleine nature dans le Val de Bagnes, accessibles à tous."
        blurDataURL={blurDataURLs["formations-hero"]}
      />

      {/* Intro */}
      <section className="py-[clamp(3rem,2rem+3vw,4rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-night/80 text-lg">
              Inscription par mail à{" "}
              <a href="mailto:info@cieletterre.ch" className="text-sage-dark hover:text-sage transition-colors duration-[400ms] underline">
                info@cieletterre.ch
              </a>{" "}
              ou par téléphone au{" "}
              <a href="tel:+41794176737" className="text-sage-dark hover:text-sage transition-colors duration-[400ms] underline">
                079 417 67 37 (Joël)
              </a>{" "}
              ou au{" "}
              <a href="tel:+41798584155" className="text-sage-dark hover:text-sage transition-colors duration-[400ms] underline">
                079 858 41 55 (Marie)
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Geobiologie */}
      <section className="py-[clamp(4rem,3rem+3vw,5rem)] bg-cream-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,1.2rem+1.2vw,1.875rem)] text-earth mb-6">
              Géobiologie
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            <FormationCard title="Initiation à la géobiologie - stages 1 et 2">
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
              <div className="bg-cream rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Formateur :</strong> Joël</p>
                <p><strong>Date stage 1 :</strong> Samedi 27 juin 2026</p>
                <p><strong>Lieu stage 1 :</strong> Col du Lein</p>
                <p><strong>Date stage 2 :</strong> Samedi 12 septembre 2026</p>
                <p><strong>Lieu stage 2 :</strong> Le Châble (maison de l&apos;Abbaye), Fontenelle (chapelle des Vernays) et Verbier (découverte du village disparu de Curala)</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 150.00 par personne (AVS et AI : CHF 120.00)</p>
                <p><strong>Groupe :</strong> 3 à 6 personnes</p>
              </div>
              <p className="text-xs text-night/60">
                Prendre des habits confortables pour une journée dans la nature et pique-nique pour le repas de midi. Ce cours est accessible à tous, aucun prérequis n&apos;est demandé.
              </p>
            </FormationCard>

            <FormationCard title="Le pendule et les baguettes de sourciers">
              <p>
                Beaucoup pensent qu&apos;il faut un &laquo; don &raquo; pour utiliser un pendule ou des baguettes de sourciers. En réalité, chacun peut apprendre à s&apos;en servir. Nous possédons tous une intuition naturelle, souvent mise de côté dans le rythme du quotidien.
                Dans cet atelier, nous allons réveiller cette intuition et découvrir comment le pendule et les baguettes de sourciers deviennent des outils accessibles, simples et puissants.
              </p>
              <div className="bg-cream rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Formateur :</strong> Joël</p>
                <p><strong>Date :</strong> Samedi 4 juillet 2026</p>
                <p><strong>Lieu :</strong> Plamproz, Haut Val de Bagnes</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 150.00 par personne (AVS et AI : CHF 120.00)</p>
                <p><strong>Groupe :</strong> 3 à 6 personnes</p>
              </div>
            </FormationCard>

            <FormationCard title="Création d'un cromlech">
              <p>
                Nos ancêtres les Celtes ont bâti de nombreux sites de pierres dressées. Ces cromlechs sont encore de nos jours un mystère quant à leur utilité. Cependant, l&apos;énergie dégagée à l&apos;intérieur de ces cercles est perceptible.
                Une journée pour bâtir un cercle de pierre, y ressentir les énergies et effectuer un voyage intérieur.
              </p>
              <div className="bg-cream rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Formateur :</strong> Joël</p>
                <p><strong>Date :</strong> Samedi 29 août 2026</p>
                <p><strong>Lieu :</strong> Plamproz, Haut Val de Bagnes</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 150.00 par personne (AVS et AI : CHF 120.00)</p>
                <p><strong>Groupe :</strong> 3 à 6 personnes</p>
              </div>
            </FormationCard>

          </div>
        </div>
      </section>

      {/* Mediumnite */}
      <section className="py-[clamp(4rem,3rem+3vw,5rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,1.2rem+1.2vw,1.875rem)] text-earth mb-6">
              Médiumnité
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            <FormationCard title="Ressenti et intuition - stages 1, 2, 3 et 4">
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
              <div className="bg-cream rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Formateur :</strong> Joël</p>
                <p><strong>Date(s) :</strong> Samedis 7 novembre, 21 novembre, 5 décembre et 19 décembre 2026</p>
                <p><strong>Lieu :</strong> Atelier TerreColorée, Rue Félix Corthay 11, Le Châble</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 150.00 par personne par stage (AVS et AI : CHF 120.00)</p>
                <p><strong>Groupe :</strong> 3 à 6 personnes</p>
              </div>
            </FormationCard>

            <FormationCard title="Nettoyages énergétiques de mémoires de lieux - module 3 jours">
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
              <div className="bg-cream rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Formateur :</strong> Joël</p>
                <p><strong>Date(s) :</strong> Samedis 19 septembre, 3 octobre et 10 octobre 2026</p>
                <p><strong>Lieu :</strong> Atelier TerreColorée, Rue Félix Corthay 11, Le Châble</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> Module de 3 jours : CHF 450.00 par personne (AVS et AI : CHF 360.00)</p>
                <p><strong>Groupe :</strong> 3 à 6 personnes</p>
              </div>
            </FormationCard>
          </div>
        </div>
      </section>

      {/* Peinture intuitive */}
      <section className="py-[clamp(4rem,3rem+3vw,5rem)] bg-cream-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,1.2rem+1.2vw,1.875rem)] text-earth mb-6">
              Peinture intuitive
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            <FormationCard id="peinture-niveau-1" title="Niveau I - Retrouver la joie de Créer">
              <p>
                Un espace bienveillant pour jouer, oser, écouter, ressentir. Un lieu où la couleur devient langage, où le geste devient souffle, où l&apos;intuition reprend sa place.
              </p>
              <p className="font-medium text-earth">Objectifs :</p>
              <ul className="space-y-1 ml-4">
                <li>• Écouter le langage de son corps, ce messager entre les mondes</li>
                <li>• Oser jouer avec les couleurs, les laisser vous choisir, vous traverser, vous transformer</li>
                <li>• Lâcher le mental pour se relier à son intuition</li>
                <li>• Connexion à votre Âme</li>
              </ul>
              <div className="bg-cream rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Formateur :</strong> Marie</p>
                <p><strong>Date(s) :</strong> Samedis 26 septembre 2026, 31 octobre 2026, 28 novembre 2026, 19 décembre 2026, 16 janvier 2027. Les autres dates sont à convenir ensemble.</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 1&apos;300.00 pour les 10 journées (soit CHF 130.00 par journée)</p>
                <p><strong>Groupe :</strong> 3 à 6 personnes</p>
              </div>
            </FormationCard>

            <FormationCard title="Niveau II - Création Inspirée & Art Médiumnique">
              <p>
                Un approfondissement pour celles et ceux qui souhaitent explorer la dimension spirituelle de la création.
              </p>
              <p className="font-medium text-earth">Objectifs :</p>
              <ul className="space-y-1 ml-4">
                <li>• Connexion avec vos guides, aux Anges : selon les 72 Anges de la kabbale</li>
                <li>• Initiation à l&apos;art psychique, la médiumnité par l&apos;art, aura-graphes</li>
              </ul>
              <div className="bg-cream rounded-lg p-4 space-y-2 text-sm">
                <p><strong>Formateur :</strong> Marie</p>
                <p><strong>Date(s) :</strong> Les dates seront communiquées ultérieurement</p>
                <p><strong>Horaires :</strong> 09h00 à 16h00</p>
                <p><strong>Tarifs :</strong> CHF 650.00 pour les 5 journées (soit CHF 130.00 par journée)</p>
                <p><strong>Groupe :</strong> 3 à 6 personnes</p>
              </div>
            </FormationCard>
          </div>
        </div>
      </section>
    </>
  );
}
