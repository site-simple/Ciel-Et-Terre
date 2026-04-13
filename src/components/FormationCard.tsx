"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface FormationCardProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

export default function FormationCard({ id, title, children }: FormationCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const panelId = id ? `${id}-panel` : undefined;

  // Check hash on mount, on navigation, and on hashchange
  useEffect(() => {
    if (!id) return;

    const check = () => {
      if (window.location.hash === `#${id}`) {
        setIsOpen(true);
        // Positionnement smooth au niveau de la carte
        setTimeout(() => {
          if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    // Check immediately
    check();
    // Check again after a tick (hash may not be set yet during client-side nav)
    const t1 = setTimeout(check, 50);
    const t2 = setTimeout(check, 150);

    window.addEventListener("hashchange", check);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("hashchange", check);
    };
  }, [id, pathname]);

  return (
    <div id={id} ref={ref} className="bg-white rounded-xl shadow-md border border-stone/30 overflow-hidden scroll-mt-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-cream-dark/30 transition-colors duration-[400ms]"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <h3 className="font-[family-name:var(--font-heading)] text-lg text-earth pr-4">
          {title}
        </h3>
        <ChevronDown
          size={20}
          className={`shrink-0 text-sage transition-transform duration-[500ms] ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            id={panelId}
            role="region"
            aria-labelledby={id}
          >
            <div className="px-6 pb-6 text-night/80 leading-relaxed space-y-4 text-sm">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
