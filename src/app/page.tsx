"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Home, Sparkles, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import { blurDataURLs } from "@/lib/blur-data";

const quotes = [
  { text: "\u00AB On ne peut concevoir le Ciel sans la Terre, ni la Terre sans le Ciel \u00BB", author: "Nguy\u1EC5n Du" },
  { text: "\u00AB Le Ciel et la Terre sont en nous \u00BB", author: "Gandhi" },
];

export default function Accueil() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (heroImgRef.current?.complete) setHeroLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed bg-earth"
        style={{ backgroundImage: "url(/images/accueil-hero.webp)" }}
      >
        {/* Blur-up placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${blurDataURLs["accueil-hero"]})`,
            filter: "blur(20px)",
            transform: "scale(1.1)",
            opacity: heroLoaded ? 0 : 1,
          }}
        />
        <img ref={heroImgRef} src="/images/accueil-hero.webp" alt="" className="hidden" onLoad={() => setHeroLoaded(true)} />
        <div className="absolute inset-0 bg-night/55" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="-mb-4 md:-mb-6 lg:-mb-8"
          >
            <h1 className="sr-only">Ciel et Terre - Géobiologie &amp; Médiumnité à Val de Bagnes, Valais</h1>
            <img
              src="/images/logo.png"
              alt="Ciel et Terre"
              width={400}
              height={120}
              className="h-28 md:h-44 lg:h-72 w-auto mx-auto brightness-0 invert"
            />
          </motion.div>
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-white/90 mb-4"
          >
            Géobiologie &amp; Médiumnité - Val de Bagnes, Valais
          </motion.p>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.0, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10 h-20 md:h-16 relative"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-white/80 italic text-xs md:text-base md:whitespace-nowrap absolute inset-0 flex flex-col md:flex-row items-center justify-center md:gap-2 font-[family-name:var(--font-quote)] text-center px-4 leading-relaxed"
              >
                <span>{quotes[quoteIndex].text}</span>
                <span className="text-white/70 mt-1 md:mt-0">&mdash; {quotes[quoteIndex].author}</span>
              </motion.p>
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.0, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link
              href="/a-propos"
              className="inline-block bg-sage-dark text-white px-8 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-sage active:scale-[0.97] transition-[scale,background-color,box-shadow] duration-[500ms]"
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-[clamp(5rem,3rem+6vw,7rem)] bg-cream-dark/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-earth text-center mb-4">
              Nos services
            </h2>
            <p className="text-night/70 text-center mb-12 max-w-2xl mx-auto">
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
              color="sage"
            />
            <ServiceCard
              icon={Sparkles}
              title="Médiumnité"
              description="Un pont entre le visible et l'invisible, au service de votre chemin."
              href="/mediumnite"
              delay={0.15}
              color="blue"
            />
            <ServiceCard
              icon={BookOpen}
              title="Formations & Stages"
              description="Découvrez nos stages en pleine nature dans le Val de Bagnes."
              href="/formations"
              delay={0.3}
              color="earth"
            />
          </div>
        </div>
      </section>

    </>
  );
}
