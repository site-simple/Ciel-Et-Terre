import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sage-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Ciel et Terre"
              width={220}
              height={55}
              className="h-14 w-auto brightness-0 invert mb-1"
            />
            <p className="text-white/70 italic text-sm leading-relaxed mb-3">
              &laquo; On ne peut concevoir le ciel sans la terre,
              <br />
              ni la terre sans le ciel &raquo;
            </p>
            <p className="text-white/50 text-sm">— Nguyễn Du</p>
          </div>

          {/* Col 2: Links */}
          <div className="md:pt-3">
            <h4 className="font-[family-name:var(--font-heading)] text-lg text-white mb-4">
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
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="md:pt-3">
            <h4 className="font-[family-name:var(--font-heading)] text-lg text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-cream" />
                <a
                  href="https://www.google.com/maps/search/Chemin+du+Sommet+7,+1934+Le+Châble,+Suisse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  Joël Hiroz
                  <br />
                  Chemin du Sommet 7<br />
                  1934 Le Châble
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-cream" />
                <a
                  href="tel:+41794176737"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  079 417 67 37
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-cream" />
                <a
                  href="mailto:info@cieletterre.ch"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  info@cieletterre.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/15 text-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Ciel et Terre.
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
