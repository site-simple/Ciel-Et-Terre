"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/geobiologie", label: "Géobiologie" },
  { href: "/mediumnite", label: "Médiumnité" },
  { href: "/formations", label: "Formations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contact" },
];

// Pages that have a full-height hero image behind the header
const pagesWithHero = ["/", "/geobiologie", "/mediumnite", "/a-propos", "/formations", "/tarifs", "/contact"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const hasHero = pagesWithHero.includes(pathname);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const useDarkText = scrolled || !hasHero || isOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-[500ms] ${
        useDarkText
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Ciel et Terre"
              width={240}
              height={60}
              className={`h-14 md:h-16 w-auto transition-[opacity] duration-[500ms] ${
                useDarkText ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors duration-[400ms] ${
                  pathname === link.href
                    ? useDarkText
                      ? "text-sage-dark font-medium"
                      : "text-white font-medium"
                    : useDarkText
                    ? "text-night/80 hover:text-sage"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-md transition-colors ${
              useDarkText ? "text-night" : "text-white"
            }`}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className="block w-6 h-6 relative">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current rounded transition-all duration-[500ms] ${
                  isOpen ? "top-[11px] rotate-45" : "top-[4px] rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] h-0.5 w-6 bg-current rounded transition-all duration-[500ms] ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-current rounded transition-all duration-[500ms] ${
                  isOpen ? "top-[11px] -rotate-45" : "top-[18px] rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-mist"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2, delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-md text-base transition-colors ${
                      pathname === link.href
                        ? "text-sage-dark font-medium bg-sage/10"
                        : "text-night/80 hover:text-sage hover:bg-mist/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
