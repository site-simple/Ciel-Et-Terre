"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function MentionsLegales() {
  return (
    <>
      {/* Header spacer */}
      <div className="pt-32 md:pt-40 pb-16 md:pb-20 bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-sage text-center mb-4">
              Mentions l&eacute;gales
            </h1>
            <p className="text-center text-earth/60 text-sm">Impressum</p>
          </ScrollReveal>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-night/80 leading-relaxed">
            {/* Exploitant */}
            <ScrollReveal>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-sage mb-4">
                  Exploitant du site
                </h2>
                <p>
                  Ciel et Terre
                  <br />
                  Jo&euml;l et Marie Hiroz
                  <br />
                  Canton du Valais, Suisse
                </p>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-sage mb-4">
                  Contact
                </h2>
                <p className="mb-4">
                  Ciel et Terre
                  <br />
                  Chemin du Sommet 7<br />
                  1934 Le Ch&acirc;ble
                </p>
                <p>
                  E-mail :{" "}
                  <a
                    href="mailto:info@cieletterre.ch"
                    className="text-earth hover:text-sage transition-colors underline underline-offset-2"
                  >
                    info@cieletterre.ch
                  </a>
                  <br />
                  T&eacute;l&eacute;phone :{" "}
                  <a
                    href="tel:+41794176737"
                    className="text-earth hover:text-sage transition-colors underline underline-offset-2"
                  >
                    +41 79 417 67 37
                  </a>{" "}
                  (Jo&euml;l) /{" "}
                  <a
                    href="tel:+41798584155"
                    className="text-earth hover:text-sage transition-colors underline underline-offset-2"
                  >
                    +41 79 858 41 55
                  </a>{" "}
                  (Marie)
                </p>
              </div>
            </ScrollReveal>

            {/* Hébergement */}
            <ScrollReveal>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-sage mb-4">
                  H&eacute;bergement
                </h2>
                <p>
                  Le site est h&eacute;berg&eacute; par : Vercel Inc., San
                  Francisco, USA
                </p>
              </div>
            </ScrollReveal>

            {/* Propriété intellectuelle */}
            <ScrollReveal>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-sage mb-4">
                  Propri&eacute;t&eacute; intellectuelle
                </h2>
                <p className="mb-4">
                  L&apos;ensemble du contenu &eacute;ditorial de ce site
                  (textes, images, logos, design) est la propri&eacute;t&eacute;
                  de Jo&euml;l et Marie Hiroz / Ciel et Terre.
                  L&apos;utilisation, la reproduction ou la redistribution du
                  contenu sans l&apos;accord &eacute;crit de Jo&euml;l et Marie
                  Hiroz / Ciel et Terre est interdite.
                </p>
                <p>
                  Le code source, le d&eacute;veloppement technique et
                  l&apos;architecture du site ont &eacute;t&eacute;
                  con&ccedil;us et r&eacute;alis&eacute;s par Samuel Barman,
                  qui en conserve la propri&eacute;t&eacute; intellectuelle.
                  L&apos;utilisation, la reproduction ou la redistribution du
                  code source sans l&apos;accord &eacute;crit de Samuel Barman
                  est interdite.
                </p>
              </div>
            </ScrollReveal>

            {/* Responsabilité */}
            <ScrollReveal>
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl text-sage mb-4">
                  Responsabilit&eacute;
                </h2>
                <p className="mb-4">
                  Ciel et Terre s&apos;efforce de fournir des informations
                  exactes et &agrave; jour sur ce site. Toutefois, aucune
                  garantie n&apos;est donn&eacute;e quant &agrave;
                  l&apos;exactitude, l&apos;exhaustivit&eacute; ou
                  l&apos;actualit&eacute; des informations publi&eacute;es. La
                  responsabilit&eacute; de Ciel et Terre ne saurait &ecirc;tre
                  engag&eacute;e en cas d&apos;erreurs ou d&apos;omissions dans
                  le contenu du site.
                </p>
                <p>
                  Les liens vers des sites tiers sont fournis &agrave; titre
                  informatif. Ciel et Terre n&apos;exerce aucun
                  contr&ocirc;le sur ces sites et d&eacute;cline toute
                  responsabilit&eacute; quant &agrave; leur contenu.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
