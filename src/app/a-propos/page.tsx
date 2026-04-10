"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";

export default function APropos() {
  return (
    <>
      <Hero
        image="/images/about.jpg"
        alt="Paysage de neige et ciel bleu"
        title="Qui sommes-nous ?"
        subtitle="Découvrez le parcours de Joël et Marie, entre ciel et terre."
      />

      {/* Presentation commune */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="space-y-5 text-night/70 leading-relaxed max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-earth font-[family-name:var(--font-heading)]">
                Marie porte le ciel dans ses yeux. Joël écoute la terre sous ses pas.
              </p>
              <p>
                Nos différences auraient pu tracer deux routes séparées. Elles sont devenues un pont, un équilibre.
              </p>
              <p>
                Le voyage n&apos;a pas toujours été paisible. Chacun de notre côté, nous avons exploré les opportunités que la Vie plaçait sur notre route, élargissant peu à peu nos horizons. Ces parcours singuliers nous ont finalement conduits à un point de rencontre plus profond entre nos deux âmes.
              </p>
              <p>
                Depuis, nous avançons ensemble, dans le respect de ce que chacun est, dans la liberté de laisser son âme s&apos;exprimer. Chaque jour, l&apos;aventure recommence : réapprendre à être soi, réapprendre à être vrai et à grandir côte à côte.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Joel */}
      <section className="py-20 md:py-28 bg-cream-dark/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Joël en montagne avec baguettes de sourcier"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-earth mb-8">
                  Joël
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-5 text-night/70 leading-relaxed">
                  <p>
                    La nature a depuis toujours été un élément essentiel à mon équilibre et mon bien-être. Le lien profond que j&apos;ai développé avec elle m&apos;a progressivement ouvert à de nouvelles perceptions et compréhensions.
                  </p>
                  <p>
                    Dans cette recherche de sens et d&apos;harmonie, la géobiologie s&apos;est imposée comme une évidence. Je me suis formé durant trois ans à la géobiologie et pratique cet art avec passion depuis plus de dix ans.
                  </p>
                  <p>
                    Depuis 2015, je pratique également la médiumnité sous ses différentes formes. Soucieux d&apos;offrir une pratique sérieuse et éthique, j&apos;ai suivi de nombreuses formations en Suisse et en Angleterre, et je continue à enrichir mes connaissances au fil du temps.
                  </p>
                  <p>
                    Le respect de la vie et de la Terre est au cœur de ma démarche. Il représente pour moi un chemin essentiel vers l&apos;élévation de la conscience et la paix intérieure.
                  </p>
                  <p>
                    Depuis 2016, je transmets mon savoir à travers des cours ainsi qu&apos;au sein des Universités Populaires du Bas-Valais.
                  </p>
                  <p>
                    En 2018, j&apos;ai publié mon premier livre autobiographique, &laquo; Ce livre s&apos;adresse à vous Messieurs, mais pas que... &raquo;, témoignage d&apos;un parcours de vie personnel et spirituel.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Marie */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <ScrollReveal>
                <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-earth mb-8">
                  Marie
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-5 text-night/70 leading-relaxed">
                  <p>
                    Native d&apos;un village de montagne en Valais, j&apos;ai grandi au sein d&apos;une famille catholique pratiquante, où le lien au monde spirituel faisait naturellement partie du quotidien. Très tôt, j&apos;ai perçu mon environnement avec une sensibilité particulière : des ressentis subtils, des impressions difficiles à nommer, une intuition vive qui me dépassait. Je ne savais pas encore que cette hypersensibilité deviendrait un jour l&apos;un de mes plus précieux outils.
                  </p>
                  <p>
                    Très jeune, je rêvais de devenir artiste peintre. Les couleurs, les formes et la création étaient pour moi une évidence. Pourtant, la vie m&apos;a d&apos;abord conduite vers le métier d&apos;aide-soignante, une voie en résonance avec mon empathie et mon désir d&apos;accompagner les autres. Ce choix, loin de me détourner de ma voie, a nourri ma compréhension de l&apos;humain. J&apos;y ai appris l&apos;écoute, la présence, la douceur — des qualités qui, plus tard, deviendront essentielles dans mon travail artistique et pédagogique, posant les bases de ma démarche actuelle : une approche où la création artistique devient un espace de bien-être, d&apos;expression et d&apos;alignement intérieur, des compétences nécessaires dans ma pratique de la médiumnité.
                  </p>
                  <p>
                    En 2002, une remise en question majeure m&apos;a conduite à me reconnecter à mon Âme et à réorienter ma vie dans ses aspects spirituels et professionnels.
                  </p>
                  <p>
                    En 2005, j&apos;ai fondé Terre colorée, mon atelier de dessin et de peinture. C&apos;était bien plus qu&apos;un espace de création : c&apos;était un retour à moi-même. C&apos;est à cette période que le monde spirituel a repris une place active dans ma vie. Mes Guides se sont manifestés à travers mes œuvres, notamment dans la série &laquo; Huile et texte &raquo;, bien avant que je ne comprenne que cette inspiration portait un nom : la médiumnité.
                  </p>
                  <p>
                    Le chemin fut long avant que je prenne conscience de mon potentiel médiumnique et que je l&apos;accueille comme une véritable voie intérieure.
                  </p>
                  <p>
                    En 2015, j&apos;ai suivi mon premier cours de médiumnité auprès de Sarah d&apos;Usrso, une expérience brève mais déterminante. J&apos;ai poursuivi ma formation avec elle pendant un an et demi, puis au Arthur Findlay College en Angleterre en 2017, une étape marquante dans mon développement.
                  </p>
                  <p>
                    Depuis, j&apos;ai enrichi ma pratique auprès de nombreux enseignants reconnus — Nadia Mongi, Lynn Parker, Kitty Wood, Sue Wood, Moira Hawkins, Andrew Manship, John Johnson et Tim Abbott. Grâce à eux, j&apos;ai exploré différents aspects de la médiumnité :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-sage-light mt-2 shrink-0" />
                      <span>L&apos;art psychique : lecture énergétique à travers la création de tableaux et d&apos;aura-graphes,</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-sage-light mt-2 shrink-0" />
                      <span>Le contact avec les défunts,</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-sage-light mt-2 shrink-0" />
                      <span>La trans-médiumnité, dans laquelle je me considère encore en formation.</span>
                    </li>
                  </ul>
                  <p>
                    Aujourd&apos;hui, j&apos;avance sur ce chemin avec gratitude et émerveillement. Mon travail réunit l&apos;art, la sensibilité intuitive et la médiumnité dans une approche profondément humaine. J&apos;accompagne chacun avec respect, éthique et douceur, en mettant mes capacités au service de la compréhension, de la guérison et de la beauté.
                  </p>
                  <p className="text-earth font-medium italic">
                    Mon histoire est celle d&apos;un retour à soi, d&apos;une écoute retrouvée, et d&apos;un dialogue constant entre le visible et l&apos;invisible.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-mist flex items-center justify-center">
                  {/* Portrait de Marie — à remplacer par la photo fournie par le client */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-sage/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-sage text-4xl font-[family-name:var(--font-heading)]">M</span>
                    </div>
                    <p className="text-night/40 text-sm">Portrait de Marie</p>
                    <p className="text-night/30 text-xs mt-1">(photo à venir)</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
