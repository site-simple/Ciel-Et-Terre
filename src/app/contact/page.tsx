"use client";

import { lazy, Suspense } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ContactFormSkeleton from "@/components/ContactFormSkeleton";
import { blurDataURLs } from "@/lib/blur-data";

const ContactForm = lazy(() => import("@/components/ContactForm"));

export default function Contact() {
  return (
    <>
      <Hero
        image="/images/contact-hero.webp"
        alt="Sentier en forêt"
        title="Contact"
        subtitle="N'hésitez pas à nous contacter pour toute question ou demande de renseignements."
        blurDataURL={blurDataURLs["contact-hero"]}
      />

      <section className="py-[clamp(4rem,2.5rem+5vw,6rem)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Form */}
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl text-earth mb-6">
                Envoyez-nous un message
              </h2>
              <Suspense fallback={<ContactFormSkeleton />}>
                <ContactForm />
              </Suspense>
            </ScrollReveal>

            {/* Coordonnees */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-10">
                <div>
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl text-earth mb-6">
                    Coordonnées
                  </h2>
                  <div className="space-y-8">
                    {/* Joel */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="font-medium text-earth mb-4">Joël Hiroz</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <MapPin size={18} className="mt-0.5 shrink-0 text-sage" />
                          <a
                            href="https://www.google.com/maps/search/Chemin+du+Sommet+7,+1934+Le+Châble,+Suisse"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-night/80 text-sm hover:text-sage transition-colors duration-[400ms]"
                          >
                            Chemin du Sommet 7<br />
                            1934 Le Châble
                          </a>
                        </li>
                        <li className="flex items-center gap-3">
                          <Phone size={18} className="shrink-0 text-sage" />
                          <a href="tel:+41794176737" className="text-night/80 text-sm hover:text-sage transition-colors duration-[400ms]">
                            079 417 67 37
                          </a>
                        </li>
                        <li className="flex items-center gap-3">
                          <Mail size={18} className="shrink-0 text-sage" />
                          <a href="mailto:info@cieletterre.ch" className="text-night/80 text-sm hover:text-sage transition-colors duration-[400ms]">
                            info@cieletterre.ch
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Marie */}
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="font-medium text-earth mb-4">Marie Hiroz Azzalini</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <MapPin size={18} className="mt-0.5 shrink-0 text-sage" />
                          <a
                            href="https://www.google.com/maps/search/Rue+Félix+Corthay+11,+1934+Le+Châble,+Suisse"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-night/80 text-sm hover:text-sage transition-colors duration-[400ms]"
                          >
                            Rue Félix Corthay 11<br />
                            Le Châble
                          </a>
                        </li>
                        <li className="flex items-center gap-3">
                          <Mail size={18} className="shrink-0 text-sage" />
                          <a href="mailto:info@cieletterre.ch" className="text-night/80 text-sm hover:text-sage transition-colors duration-[400ms]">
                            info@cieletterre.ch
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Map mobile only */}
                <div className="lg:hidden">
                  <h2 className="font-[family-name:var(--font-heading)] text-2xl text-earth mb-4">
                    Nous trouver
                  </h2>
                  <div className="rounded-xl overflow-hidden shadow-sm aspect-[4/3]">
                    <iframe
                      src="https://maps.google.com/maps?q=Chemin+du+Sommet+7,+1934+Le+Ch%C3%A2ble,+Suisse&t=k&z=17&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Carte Google Maps - Chemin du Sommet 7, Le Châble"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map bandeau pleine largeur - desktop uniquement */}
      <section className="hidden lg:block w-full h-[400px]">
        <iframe
          src="https://maps.google.com/maps?q=Chemin+du+Sommet+7,+1934+Le+Ch%C3%A2ble,+Suisse&t=k&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte Google Maps - Chemin du Sommet 7, Le Châble"
        />
      </section>
    </>
  );
}
