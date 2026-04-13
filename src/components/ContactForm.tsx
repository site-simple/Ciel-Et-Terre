"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  if (submitted) {
    return (
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-sage/10 rounded-2xl p-8 text-center"
      >
        <p className="text-sage-dark font-medium text-lg mb-2">
          Merci pour votre message !
        </p>
        <p className="text-night/70">
          Nous vous répondrons dans les plus brefs délais.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      // Configure your form endpoint here:
      // Replace with your Formspree, Web3Forms, or other form service URL
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        const form = e.currentTarget;
        const data = new FormData(form);
        fetch(form.action, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        })
          .then((res) => {
            if (res.ok) setSubmitted(true);
          })
          .finally(() => setLoading(false));
      }}
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-night/80 mb-1.5">
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-xl border border-mist bg-white text-night focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors duration-[400ms]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-night/80 mb-1.5">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-xl border border-mist bg-white text-night focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors duration-[400ms]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-night/80 mb-1.5">
          Téléphone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-xl border border-mist bg-white text-night focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors duration-[400ms]"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-night/80 mb-1.5">
          Sujet *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-mist bg-white text-night focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors duration-[400ms]"
        >
          <option value="">Choisir un sujet...</option>
          <option value="expertise">Expertise géobiologique</option>
          <option value="nettoyage">Nettoyage énergétique</option>
          <option value="mediumnite">Médiumnité</option>
          <option value="formations">Formations & Stages</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-night/80 mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-mist bg-white text-night focus:outline-none focus:ring-2 focus:ring-sage/40 focus:border-sage transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-sage-dark text-white px-6 py-3.5 rounded-full font-medium shadow-md hover:shadow-lg hover:bg-sage active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed transition-[scale,background-color,box-shadow,opacity] duration-[500ms]"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={18} />
            Envoyer
          </>
        )}
      </button>
    </form>
  );
}
