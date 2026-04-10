"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Sparkles, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";

export default function Accueil() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero-banner.jpg)" }}
      >
        <div className="absolute inset-0 bg-night/55" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="-mb-4 md:-mb-6 lg:-mb-8"
          >
            <h1 className="sr-only">Ciel et Terre — Géobiologie &amp; Médiumnité à Val de Bagnes, Valais</h1>
            <img
              src="/images/logo.png"
              alt="Ciel et Terre"
              className="h-28 md:h-44 lg:h-56 w-auto mx-auto brightness-0 invert"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-white/90 mb-4"
          >
            Géobiologie &amp; Médiumnité — Val de Bagnes, Valais
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-3 mb-10"
          >
            <p className="text-white/70 italic text-sm md:text-base">
              &laquo; On ne peut concevoir le ciel sans la terre, ni la terre sans le ciel &raquo; — Nguyễn Du
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              href="/a-propos"
              className="inline-block bg-sage-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-sage transition-colors duration-200"
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28 bg-cream-dark/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-earth text-center mb-4">
              Nos services
            </h2>
            <p className="text-night/60 text-center mb-12 max-w-2xl mx-auto">
              Découvrez comment nous pouvons vous accompagner sur votre chemin.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Home}
              title="Géobiologie"
              description="Harmoniser votre lieu de vie pour retrouver bien-être et équilibre."
              href="/geobiologie"
              delay={0}
            />
            <ServiceCard
              icon={Sparkles}
              title="Médiumnité"
              description="Un pont entre le visible et l'invisible, au service de votre chemin."
              href="/mediumnite"
              delay={0.15}
            />
            <ServiceCard
              icon={BookOpen}
              title="Formations & Stages"
              description="Découvrez nos stages en pleine nature dans le Val de Bagnes."
              href="/formations"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6 text-night/70 leading-relaxed">
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
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/portrait.jpg"
                  alt="Joël dans les montagnes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
