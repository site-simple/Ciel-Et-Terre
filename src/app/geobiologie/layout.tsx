import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Géobiologie | Ciel et Terre — Val de Bagnes",
  description:
    "La géobiologie est l'art d'harmoniser un lieu de vie pour favoriser le bien-être. Expertise géobiologique, électrosmog, harmonisation dans le Val de Bagnes.",
  keywords: [
    "géobiologie",
    "expertise géobiologique",
    "harmonisation lieu de vie",
    "électrosmog",
    "nettoyage énergétique",
    "Val de Bagnes",
    "Valais",
  ],
  alternates: {
    canonical: "/geobiologie",
  },
  openGraph: {
    title: "Géobiologie | Ciel et Terre — Val de Bagnes",
    description:
      "Expertise géobiologique, électrosmog et harmonisation de lieux de vie dans le Val de Bagnes.",
    url: "/geobiologie",
    images: [{ url: "/images/geobiologie.jpg", width: 1200, height: 630, alt: "Géobiologie — Ciel et Terre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Géobiologie | Ciel et Terre — Val de Bagnes",
    description:
      "Expertise géobiologique, électrosmog et harmonisation de lieux de vie dans le Val de Bagnes.",
    images: ["/images/geobiologie.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
