"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormationCardProps {
  title: string;
  children: React.ReactNode;
}

export default function FormationCard({ title, children }: FormationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-cream-dark/30 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="font-[family-name:var(--font-heading)] text-lg text-earth pr-4">
          {title}
        </h3>
        <ChevronDown
          size={20}
          className={`shrink-0 text-sage transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-6 pb-6 text-night/70 leading-relaxed space-y-4 text-sm">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
