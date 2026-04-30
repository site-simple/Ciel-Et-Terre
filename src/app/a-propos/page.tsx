"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { blurDataURLs } from "@/lib/blur-data";

export default function APropos() {
  return (
    <>
      <Hero
        image="/images/apropos-hero.webp"
        alt="Paysage de neige et ciel bleu"
        title="Qui sommes-nous ?"
        subtitle="Découvrez le parcours de Marie et Joël, entre Ciel et Terre."
        blurDataURL={blurDataURLs["apropos-hero"]}
      />

      {/* Presentation commune */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="space-y-5 text-night/80 leading-relaxed max-w-3xl mx-auto">
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

      {/* Marie */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-dark-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <ScrollReveal>
                <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-off-white mb-8">
                  Marie
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-5 text-off-white/90 leading-relaxed">
                  <p>
                    Née dans un village de montagne en Valais, j&apos;ai grandi dans une famille où la spiritualité faisait naturellement partie du quotidien. Très tôt, ma sensibilité et mon intuition se sont révélées, sans que je comprenne encore qu&apos;elles deviendraient des outils précieux.
                  </p>
                  <p>
                    Je rêvais d&apos;être artiste peintre, mais j&apos;ai d&apos;abord travaillé comme aide-soignante, un métier en accord avec mon empathie. Cette expérience a nourri ma compréhension de l&apos;humain et posé les bases de mon approche actuelle : une création artistique au service du bien-être, de l&apos;expression et de l&apos;alignement intérieur, en lien avec ma médiumnité.
                  </p>
                  <p>
                    En 2002, une profonde remise en question m&apos;a reconnectée à mon Âme et a réorienté ma vie. En 2005, j&apos;ai fondé Terre colorée, mon atelier de dessin et de peinture, où le monde spirituel a repris une place active. Mes Guides se sont manifestés dans mes œuvres, bien avant que je ne reconnaisse cette inspiration comme de la médiumnité.
                  </p>
                  <p>
                    Après un long chemin d&apos;intégration, j&apos;ai suivi mes premières formations en 2015, puis durant plusieurs années au Arthur Findlay College. Depuis, j&apos;ai approfondi différents aspects de la médiumnité : l&apos;art psychique, le contact avec les défunts et la trans-médiumnité.
                  </p>
                  <p>
                    Aujourd&apos;hui, j&apos;unis l&apos;art, l&apos;intuition et la médiumnité dans une démarche profondément humaine. J&apos;accompagne chacun avec respect, éthique et douceur, au service de la compréhension, de la guérison et de la beauté. Mon parcours de vie est celui d&apos;un retour à soi et d&apos;un dialogue constant entre le visible et l&apos;invisible.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-dark-blue/50 flex items-center justify-center">
                  {/* Portrait de Marie - à remplacer par la photo fournie par le client */}
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-off-white/20 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-off-white text-4xl font-[family-name:var(--font-heading)]">M</span>
                    </div>
                    <p className="text-off-white/60 text-sm">Portrait de Marie</p>
                    <p className="text-off-white/50 text-xs mt-1">(photo à venir)</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Joel */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-off-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/apropos-joel-portrait.webp"
                    alt="Joël en montagne avec baguettes de sourcier"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    placeholder="blur"
                    blurDataURL={blurDataURLs["apropos-joel-portrait"]}
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-sage mb-8">
                  Joël
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <div className="space-y-5 text-sage leading-relaxed">
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
    </>
  );
}
