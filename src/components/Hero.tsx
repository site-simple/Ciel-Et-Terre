"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  alt: string;
  overlay?: boolean;
  height?: string;
  blurDataURL?: string;
  fixedBackground?: boolean;
}

export default function Hero({
  image,
  title,
  subtitle,
  overlay = true,
  height = "h-[60vh]",
  blurDataURL,
  fixedBackground = true,
}: HeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setImageLoaded(true);
  }, []);

  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden bg-cover bg-center ${fixedBackground ? "bg-fixed" : ""} bg-earth`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Blur-up placeholder layer */}
      {blurDataURL && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            filter: "blur(20px)",
            transform: "scale(1.1)",
            opacity: imageLoaded ? 0 : 1,
          }}
        />
      )}
      {/* Hidden image to detect load */}
      {blurDataURL && (
        <img
          ref={imgRef}
          src={image}
          alt=""
          className="hidden"
          onLoad={() => setImageLoaded(true)}
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-night/55" />
      )}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-[family-name:var(--font-heading)] text-[clamp(1.875rem,1.2rem+2.5vw,3rem)] font-medium mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[clamp(1.125rem,1rem+0.5vw,1.25rem)] text-white/90 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
