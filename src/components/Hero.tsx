"use client";

import { motion } from "framer-motion";

interface HeroProps {
  image: string;
  title: string;
  subtitle?: string;
  alt: string;
  overlay?: boolean;
  height?: string;
}

export default function Hero({
  image,
  title,
  subtitle,
  overlay = true,
  height = "h-[60vh]",
}: HeroProps) {
  return (
    <section
      className={`relative ${height} flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-night/55" />
      )}
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-medium mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
