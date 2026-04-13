import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark-green text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Ciel et Terre"
              width={220}
              height={55}
              className="h-14 w-auto brightness-0 invert mb-1"
            />
            <p className="text-off-white/80 italic text-sm leading-relaxed mb-3">
              &laquo; On ne peut concevoir le Ciel sans la Terre,
              <br />
              ni la Terre sans le Ciel &raquo;
            </p>
            <p className="text-off-white/70 text-sm">&mdash; Nguy&#7877;n Du</p>
          </div>

          {/* Col 2: Links */}
          <div className="md:pt-3">
            <h4 className="font-[family-name:var(--font-heading)] text-lg text-off-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/a-propos", label: "À propos" },
                { href: "/geobiologie", label: "Géobiologie" },
                { href: "/mediumnite", label: "Médiumnité" },
                { href: "/formations", label: "Formations & Stages" },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-off-white/80 hover:text-white transition-colors duration-[400ms] inline-block text-sm py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="md:pt-3">
            <h4 className="font-[family-name:var(--font-heading)] text-lg text-off-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="group flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-off-white/90 group-hover:scale-110 transition-[scale] duration-[400ms]" />
                <a
                  href="https://www.google.com/maps/search/Chemin+du+Sommet+7,+1934+Le+Châble,+Suisse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors duration-[400ms]"
                >
                  Ciel et Terre
                  <br />
                  Chemin du Sommet 7<br />
                  1934 Le Châble
                </a>
              </li>
              <li className="group flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-off-white/90 group-hover:scale-110 transition-[scale] duration-[400ms]" />
                <div className="text-sm space-y-1">
                  <a href="tel:+41794176737" className="block hover:text-white transition-colors duration-[400ms]">
                    Joël Hiroz - 079 417 67 37
                  </a>
                  <a href="tel:+41798584155" className="block hover:text-white transition-colors duration-[400ms]">
                    Marie Hiroz - 079 858 41 55
                  </a>
                </div>
              </li>
              <li className="group flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-off-white/90 group-hover:scale-110 transition-[scale] duration-[400ms]" />
                <a
                  href="mailto:info@cieletterre.ch"
                  className="text-sm hover:text-white transition-colors duration-[400ms]"
                >
                  info@cieletterre.ch
                </a>
              </li>
            </ul>

          </div>

          {/* Col 4: Suivez-nous */}
          <div className="md:pt-3">
            <h4 className="font-[family-name:var(--font-heading)] text-lg text-off-white mb-4">
              Suivez-nous
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/_cieletterre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-off-white/10 flex items-center justify-center text-off-white/80 hover:text-white hover:bg-off-white/20 hover:scale-110 active:scale-95 transition-[color,background-color,scale] duration-[400ms]"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/cieletterre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-off-white/10 flex items-center justify-center text-off-white/80 hover:text-white hover:bg-off-white/20 hover:scale-110 active:scale-95 transition-[color,background-color,scale] duration-[400ms]"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-off-white/15 text-center">
          <p className="text-off-white/70 text-sm">
            &copy; {new Date().getFullYear()} Ciel et Terre.
            Tous droits réservés.
            <span className="mx-2">|</span>
            <Link
              href="/mentions-legales"
              className="hover:text-white transition-colors duration-[400ms]"
            >
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
