import Image from "next/image";
import Link from "next/link";
import { Binoculars, Microscope, Brain, Shield } from "lucide-react";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { blurDataURLs } from "@/lib/blur-data";

export default function Geobiologie() {
  return (
    <>
      <Hero
        image="/images/geobiologie-hero.webp"
        alt="Forêt avec rayons de soleil"
        title="Géobiologie"
        subtitle="Harmoniser votre lieu de vie pour retrouver bien-être et équilibre."
        blurDataURL={blurDataURLs["geobiologie-hero"]}
      />

      {/* Section 1: C'est quoi */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-earth mb-8">
              La géobiologie, c&apos;est quoi ?
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-night/80 leading-relaxed">
              <p>
                La géobiologie, héritière de savoirs ancestraux et enrichie par des recherches modernes, elle explore les interactions entre l&apos;être humain et son environnement, qu&apos;il s&apos;agisse des énergies naturelles de la Terre, des matériaux qui nous entourent ou des influences technologiques du quotidien.
              </p>
              <p>
                Depuis des millénaires, les civilisations ont observé que certains lieux donnent de l&apos;énergie, de la vitalité tandis que d&apos;autres fatiguent ou perturbent.
              </p>
              <p>
                Aujourd&apos;hui, la géobiologie remet ce savoir au service de l&apos;habitat moderne. Elle permet de comprendre ce qui influence la qualité du sommeil, la concentration, le stress ou la sensation de bien-être dans un espace.
              </p>
              <p className="text-earth font-medium">
                Mon objectif est simple : vous aider à créer un environnement sain, équilibré et ressourçant, dans lequel vous vous sentez pleinement chez vous.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Pourquoi (moved before Comment) */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-sage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-off-white mb-8">
              Pourquoi faire appel à un géobiologue ?
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-off-white/90 leading-relaxed">
              <p>
                Faire appel à un géobiologue, c&apos;est chercher à comprendre et à harmoniser les énergies de votre lieu de vie pour votre bien-être. Beaucoup de personnes se tournent vers la géobiologie lorsqu&apos;elles traversent des situations difficiles ou ressentent des inconforts persistants, tels que :
              </p>
              <ul className="space-y-3 ml-4">
                {[
                  "des troubles du sommeil ou des insomnies,",
                  "un stress récurrent sans cause apparente,",
                  "une fatigue chronique ou inexpliquée,",
                  "un malaise ou une sensation d'inconfort dans une pièce en particulier.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-off-white/60 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                La géobiologie permet d&apos;identifier les perturbations environnementales, naturelles ou liées à l&apos;habitat, qui peuvent influencer votre équilibre physique et émotionnel. L&apos;objectif est de rétablir une harmonie durable afin de retrouver un espace de vie apaisant et ressourçant.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Comment (stays as is) */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-cream-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-earth mb-8">
              Comment ?
            </h2>
            <p className="text-night/80 leading-relaxed mb-8">
              En tant que géobiologue, je vais :
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: Binoculars,
                text: "Analyser votre lieu de vie ou de travail sous un angle global.",
              },
              {
                icon: Microscope,
                text: "Repérer les zones perturbées",
              },
              {
                icon: Brain,
                text: "Comprendre les causes possibles d'inconfort (stress, fatigue, troubles du sommeil...)",
              },
              {
                icon: Shield,
                text: "Proposer des ajustements simples pour améliorer l'harmonie du lieu.",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-[translate,box-shadow] duration-[1200ms] h-full">
                  <item.icon size={24} className="shrink-0 text-sage mt-0.5" />
                  <p className="text-night/80 text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="space-y-5 text-night/80 leading-relaxed">
              <p>
                La géobiologie n&apos;est pas une croyance, mais une démarche d&apos;observation, de compréhension et d&apos;harmonisation. Elle offre une nouvelle manière d&apos;habiter son espace, plus consciente, plus apaisée et plus alignée avec vos besoins.
              </p>
              <p className="text-earth font-medium italic">
                Retrouver l&apos;harmonie chez soi, c&apos;est retrouver l&apos;harmonie en soi. Je vous accompagne sur ce chemin.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Ma demarche - green bg */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-sage">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-off-white mb-8">
                  Ma démarche
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-5 text-off-white/90 leading-relaxed">
                  <p>
                    Lors d&apos;une expertise géobiologique, mes premières recherches sont orientées sur l&apos;analyse approfondie des différentes sources de perturbations présentes dans votre environnement : veines d&apos;eau souterraines, failles géologiques, vortex, ondes de forme, nœuds telluriques, électrosmog et autres influences énergétiques.
                  </p>
                  <p>
                    Pour affiner cette étude technique et offrir une vision globale du lieu, j&apos;associe la médiumnité à ma démarche. Cette complémentarité me semble indispensable pour appréhender en profondeur l&apos;énergie d&apos;un lieu.
                  </p>
                  <p>
                    Grâce à la médiumnité psychique, je me relie aux vibrations des occupants actuels, aux mémoires des anciens habitants ainsi qu&apos;aux empreintes énergétiques laissées par toutes les personnes ayant interagi avec le lieu.
                  </p>
                  <p>
                    Mon intention est d&apos;identifier les blocages, les tensions et les perturbations énergétiques afin de comprendre ce qui a marqué le site et influence encore son atmosphère aujourd&apos;hui.
                  </p>
                  <p>
                    Je reste également attentif à la possibilité d&apos;un contact avec une personne défunte souhaitant transmettre un message, lorsque cela se manifeste naturellement et toujours dans le respect de chacun.
                  </p>
                  <p className="text-off-white font-medium italic">
                    Ainsi, géobiologie et médiumnité se complètent pour offrir une expertise précise, sensible et entièrement personnalisée.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="relative md:min-h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/geobiologie-demarche.webp"
                    alt="Sauge blanche fumante dans un bol"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    placeholder="blur"
                    blurDataURL={blurDataURLs["geobiologie-demarche"]}
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Electrosmog (unchanged) */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-earth mb-8">
              Électrosmog
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-night/80 leading-relaxed">
              <p>
                L&apos;électrosensibilité, ou hypersensibilité électromagnétique, correspond à l&apos;apparition de symptômes physiques et émotionnels chez certaines personnes lorsqu&apos;elles sont exposées aux champs électromagnétiques du quotidien (Wi-Fi, téléphones, antennes relais, appareils électriques...).
              </p>
              <p>
                Les personnes concernées décrivent souvent des maux de tête persistants, des troubles du sommeil, une fatigue chronique, des difficultés de concentration, ainsi que des picotements, des sensations de chaleur ou une irritabilité inhabituelle. Ces manifestations peuvent devenir très gênantes, au point d&apos;affecter la qualité de vie, le repos et même la capacité à travailler ou à rester dans certains lieux.
              </p>
              <p>
                Les symptômes varient fortement d&apos;un individu à l&apos;autre et peuvent apparaître dans des situations très précises, comme l&apos;utilisation d&apos;un appareil électronique ou la présence dans un environnement saturé en ondes.
              </p>
              <p>
                Même si la science n&apos;a pas encore établi d&apos;explication définitive, l&apos;électrosensibilité est une réalité vécue par ceux qui en souffrent. Leur principal défi consiste à identifier les sources d&apos;exposition qui aggravent leurs symptômes et à adapter leur environnement pour retrouver un mieux-être.
              </p>
              <p className="text-earth font-medium">
                Lors d&apos;une expertise de géobiologie, je vais mesurer l&apos;intensité des perturbations dans chaque pièce et je vous guide vers des solutions simples pour réduire leur impact sur votre bien-être.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 6: Histoire - 2 columns with photo, first 3 paragraphs removed */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-cream-dark/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-earth mb-8">
              Histoire de la géobiologie
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <ScrollReveal delay={0.2}>
                <div className="relative md:min-h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/geobiologie-histoire.webp"
                    alt="Pierres levées de Callanish"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    placeholder="blur"
                    blurDataURL={blurDataURLs["geobiologie-histoire"]}
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-3 order-1 lg:order-2">
              <ScrollReveal>
                <div className="space-y-5 text-night/80 leading-relaxed">
                  <p>
                    Depuis la nuit des temps, les civilisations humaines ont accordé une attention particulière à l&apos;énergie des lieux où elles vivaient, priaient ou enterraient leurs morts. Bien avant l&apos;apparition des outils scientifiques modernes, les peuples observaient les phénomènes naturels, ressentaient les ambiances subtiles et cherchaient à comprendre pourquoi certains endroits semblaient favoriser la santé, la prospérité ou la spiritualité. En Chine, en Égypte, chez les Celtes ou encore chez les Romains, le choix d&apos;un emplacement n&apos;était jamais laissé au hasard : il reposait sur une combinaison de connaissances empiriques, d&apos;observations fines et d&apos;intuitions liées à l&apos;environnement.
                  </p>

                  <p>
                    Dans la Chine ancienne, par exemple, l&apos;art du Feng Shui guidait l&apos;implantation des habitations et des tombeaux en fonction des flux énergétiques du paysage. Les Égyptiens, quant à eux, orientaient leurs temples selon des axes astronomiques précis, convaincus que l&apos;harmonie entre ciel et terre renforçait la puissance spirituelle du lieu. Les Celtes, grands observateurs de la nature, identifiaient des points particuliers dans le paysage - sources, clairières, intersections de courants d&apos;eau - qu&apos;ils considéraient comme des nœuds d&apos;énergie. Les Romains, plus pragmatiques, utilisaient des rites de fondation pour déterminer si un site était propice à la construction d&apos;une ville ou d&apos;un sanctuaire.
                  </p>
                  <p>
                    Cette sensibilité aux lieux ne disparaît pas avec l&apos;Antiquité. Au Moyen Âge, elle se transforme et s&apos;intègre dans la tradition chrétienne. De nombreuses églises furent ainsi bâties sur d&apos;anciens lieux de culte païens, eux-mêmes situés sur des zones réputées pour leur énergie tellurique. Ce choix n&apos;était pas seulement symbolique : il témoignait d&apos;une volonté de s&apos;inscrire dans la continuité d&apos;un lieu déjà perçu comme puissant. L&apos;architecture religieuse médiévale, avec ses proportions inspirées de la géométrie sacrée, ses orientations soigneusement choisies et ses jeux de lumière, cherchait à amplifier les qualités énergétiques du site pour favoriser l&apos;élévation spirituelle des fidèles.
                  </p>
                  <p>
                    Ainsi, bien avant que la géobiologie moderne ne formalise ces notions, les civilisations anciennes appliquaient déjà, de manière intuitive ou ritualisée, des principes qui s&apos;en rapprochent. Elles percevaient les lieux non comme de simples espaces physiques, mais comme des entités vivantes, traversées de forces invisibles qu&apos;il convenait de comprendre, de respecter et parfois d&apos;harmoniser. Cette vision, loin d&apos;être anecdotique, a profondément influencé la manière dont les humains ont façonné leurs paysages, leurs villes et leurs lieux sacrés.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <ScrollReveal>
          <Link
            href="/tarifs"
            className="inline-block bg-sage-dark text-white px-8 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-sage active:scale-[0.97] transition-[scale,background-color,box-shadow] duration-[500ms]"
          >
            Voir les tarifs
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
