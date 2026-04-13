"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { blurDataURLs } from "@/lib/blur-data";

const galleryImages = [
  { src: "/images/galerie-dun-monde-a-lautre.webp", alt: "D'un monde à l'autre - Huile 60x60cm", title: "D\u2019un monde \u00e0 l\u2019autre", technique: "Huile sur toile \u2013 60\u00d760 cm", width: 3596, height: 3578 },
  { src: "/images/galerie-aube.webp", alt: "L'aube - Huile 40x30cm", title: "L\u2019aube", technique: "Huile sur toile \u2013 40\u00d730 cm", width: 2936, height: 2201 },
  { src: "/images/galerie-emergence.webp", alt: "Émergence", title: "\u00c9mergence", technique: "Huile sur toile", width: 2108, height: 3469 },
  { src: "/images/galerie-mediumnite.webp", alt: "Médiumnité - Huile sur toile de lin 40x50cm", title: "M\u00e9diumnit\u00e9", technique: "Huile sur toile de lin \u2013 40\u00d750 cm", width: 2374, height: 1896 },
  { src: "/images/galerie-enseignement.webp", alt: "Enseignement - Huile sur toile de lin 40x40cm", title: "Enseignement", technique: "Huile sur toile de lin \u2013 40\u00d740 cm", width: 1963, height: 1948 },
];


function GalerieCarousel({ images, onImageClick }: { images: typeof galleryImages; onImageClick: (i: number) => void }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const len = images.length;

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + len) % len);
  };

  // Auto-play toutes les 5 secondes, redémarre après chaque changement
  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % len);
    }, 10000);
    return () => clearTimeout(timer);
  }, [current, len]);

  // Swipe touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };
  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) > 50) {
      go(distance > 0 ? 1 : -1);
    }
    touchStart.current = null;
    touchEnd.current = null;
  };

  const variants = prefersReducedMotion
    ? {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0 }),
      };

  return (
    <>
      {/* ===== Slideshow unifié desktop/mobile ===== */}
      <div className="max-w-3xl mx-auto">
        {/* Image principale + flèches */}
        <div className="relative">
          {/* Zones cliquables desktop */}
          <button
            onClick={() => go(-1)}
            className="hidden md:flex absolute -left-16 top-0 bottom-0 w-16 rounded-l-xl items-center justify-center text-dark-blue/30 hover:text-dark-blue/70 hover:bg-cream-dark/40 transition-[color,background-color] duration-[500ms] z-10"
            aria-label="Tableau précédent"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => go(1)}
            className="hidden md:flex absolute -right-16 top-0 bottom-0 w-16 rounded-r-xl items-center justify-center text-dark-blue/30 hover:text-dark-blue/70 hover:bg-cream-dark/40 transition-[color,background-color] duration-[500ms] z-10"
            aria-label="Tableau suivant"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image */}
          <div
            className="cursor-pointer"
            onClick={() => onImageClick(current)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="overflow-visible flex flex-col items-center h-[calc(70vh-64px)] md:h-[calc(80vh-64px)] px-6">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex-1 flex flex-col items-center justify-center min-h-0"
                >
                  <div className="rounded-lg overflow-hidden shadow-[4px_6px_20px_rgba(0,0,0,0.25)] inline-block">
                    <Image
                      src={images[current].src}
                      alt={images[current].alt}
                      width={images[current].width}
                      height={images[current].height}
                      className="block w-auto h-auto max-h-[calc(70vh-148px)] md:max-h-[calc(80vh-148px)]"
                      sizes="(max-width: 768px) 100vw, 700px"
                      loading="lazy"
                    />
                  </div>
                  {/* Plaque muséale */}
                  <div className="mt-3">
                    <div className="bg-white px-6 py-3 shadow-[3px_4px_12px_rgba(0,0,0,0.12)] rounded-lg border border-dark-blue/10">
                      <p className="text-dark-blue/80 text-base font-[family-name:var(--font-heading)] italic">{images[current].title}</p>
                      <p className="text-dark-blue/50 text-xs mt-1">{images[current].technique}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation mobile : flèches */}
        <div className="flex items-center justify-center gap-6 mt-4 md:hidden">
          <button onClick={() => go(-1)} className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-dark-blue/60 hover:text-dark-blue active:scale-95 transition-[color,transform] duration-[400ms]" aria-label="Précédent">
            <ChevronLeft size={20} />
          </button>
          <p className="text-dark-blue/50 text-xs">{current + 1} / {images.length}</p>
          <button onClick={() => go(1)} className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-dark-blue/60 hover:text-dark-blue active:scale-95 transition-[color,transform] duration-[400ms]" aria-label="Suivant">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
}

export default function Mediumnite() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    // Focus the close button when lightbox opens
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      // Focus trap: keep Tab within the lightbox
      if (e.key === "Tab" && lightboxRef.current) {
        const focusable = lightboxRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <>
      <Hero
        image="/images/mediumnite-hero.webp"
        alt="Sauge blanche"
        title="Médiumnité"
        subtitle="Un pont entre le visible et l'invisible, au service de votre chemin."
        blurDataURL={blurDataURLs["mediumnite-hero"]}
      />

      {/* Section 1: Qu'est-ce que la mediumnite - off-white bg, dark-blue text */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-dark-blue mb-8">
              Qu&apos;est-ce que la médiumnité ?
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-dark-blue/90 leading-relaxed">
              <p>
                La médiumnité est un pont entre le visible et l&apos;invisible, une capacité naturelle permettant d&apos;entrer en résonance avec les mondes subtils. Le médium devient alors un canal, un réceptacle, un messager. À travers son corps, son cœur et sa conscience, il perçoit les émotions, les vibrations et les énergies qui entourent les êtres, les lieux et la nature.
              </p>
              <p>
                Depuis la nuit des temps, ces êtres sensibles ont accompagné l&apos;humanité. Ils étaient chamanes, druides, guérisseurs, prophètes - ceux qui savaient écouter ce que le silence murmure.
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

      {/* Section 2: Contact defunt - dark-blue bg, off-white text */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-off-white mb-8">
              Médiumnité de contact défunt
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-off-white/90 leading-relaxed">
              <p>
                C&apos;est un moment privilégié et sacré partagé entre le défunt, le médium et la personne en consultation. Le médium peut percevoir - voir, entendre, ressentir - les émotions, les souvenirs, les traits de personnalité et les nuances d&apos;expression des proches disparus.
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
                    <span className="w-2 h-2 rounded-full bg-off-white/60 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          {/* Photo sous contact defunt */}
          <ScrollReveal>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mt-12 max-w-2xl mx-auto">
              <Image
                src="/images/mediumnite-contact-defunt.webp"
                alt="Peinture intuitive"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                placeholder="blur"
                blurDataURL={blurDataURLs["mediumnite-contact-defunt"]}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Psychique - off-white bg, dark-blue text */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-dark-blue mb-8">
              Médiumnité psychique
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-dark-blue/90 leading-relaxed">
              <p>
                Le médium se connecte à l&apos;âme de la personne qu&apos;il accompagne, en entrant en résonance avec son corps énergétique, appelé aura.
              </p>
              <p>
                À travers cette connexion subtile, il perçoit ses qualités profondes, ses zones de blocage, ainsi que certains aspects de son histoire personnelle, passée ou actuelle.
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

      {/* Section 4: Peinture intuitive - off-white bg */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)] bg-off-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.5rem+1.5vw,2.25rem)] text-dark-blue mb-8">
              Peinture intuitive
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5 text-dark-blue/90 leading-relaxed mb-12">
              <p>
                À travers des jeux, des explorations et des expériences artistiques guidées, vous partirez à la rencontre de vous-même. Vous découvrirez votre pouvoir créateur, cette force intérieure capable de transformer votre regard sur votre vie et d&apos;y apporter plus de couleur, de sens et de présence. Car vous êtes les créateurs de votre existence.
              </p>
            </div>
          </ScrollReveal>

          {/* Diaporama galerie */}
          <GalerieCarousel images={galleryImages} onImageClick={openLightbox} />

          {/* En savoir plus link */}
          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link
                href="/formations#peinture-niveau-1"
                className="inline-block bg-sage-dark text-white px-8 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-sage active:scale-[0.97] transition-[scale,background-color,box-shadow] duration-[500ms]"
              >
                En savoir plus
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing quote */}
      <section className="py-[clamp(5rem,3rem+6vw,7rem)]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-heading)] text-[clamp(1.25rem,1rem+1vw,1.5rem)] text-dark-blue italic leading-relaxed">
              &laquo; C&apos;est avec une joie sincère que je me mets à votre service pour être le messager entre vous et le Monde Spirituel. &raquo;
            </p>
          </ScrollReveal>
        </div>
      </section>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            ref={lightboxRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`Galerie - ${galleryImages[lightboxIndex].title}`}
          >
            {/* Fermer */}
            <button
              ref={closeButtonRef}
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white transition-colors z-20"
              aria-label="Fermer la galerie"
            >
              <X size={32} />
            </button>

            {/* Precedent */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-0 top-0 bottom-0 w-20 md:w-32 flex items-end pb-16 md:items-center md:pb-0 justify-center text-white/50 hover:text-white hover:bg-white/5 transition-[color,background-color] duration-[400ms] z-10"
              aria-label="Précédent"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Suivant */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-0 top-0 bottom-0 w-20 md:w-32 flex items-end pb-16 md:items-center md:pb-0 justify-center text-white/50 hover:text-white hover:bg-white/5 transition-[color,background-color] duration-[400ms] z-10"
              aria-label="Suivant"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image + legende */}
            <div className="flex flex-col items-center max-w-5xl max-h-[85vh] px-4 md:px-16" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={lightboxIndex}
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative w-[80vw] max-w-3xl aspect-square"
              >
                <Image
                  src={galleryImages[lightboxIndex].src}
                  alt={galleryImages[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="80vw"
                />
              </motion.div>
              <p className="text-white/80 text-sm md:text-base mt-4 text-center font-[family-name:var(--font-heading)] italic">
                {galleryImages[lightboxIndex].alt}
              </p>
              <p className="text-white/40 text-xs mt-1">
                {lightboxIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
