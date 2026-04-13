import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formations & Stages 2026 | Ciel et Terre - Val de Bagnes",
  description:
    "Stages de géobiologie, pendule, baguettes de sourcier, médiumnité et nettoyages énergétiques dans le Val de Bagnes. Calendrier 2026.",
  keywords: [
    "formation géobiologie",
    "stage pendule",
    "baguettes de sourcier",
    "stage médiumnité",
    "nettoyage énergétique",
    "Val de Bagnes",
    "calendrier 2026",
  ],
  alternates: {
    canonical: "/formations",
  },
  openGraph: {
    title: "Formations & Stages 2026 | Ciel et Terre - Val de Bagnes",
    description:
      "Stages de géobiologie, pendule, baguettes de sourcier et médiumnité dans le Val de Bagnes. Calendrier 2026.",
    url: "/formations",
    images: [{ url: "/images/formations-hero.jpg", width: 1200, height: 630, alt: "Formations - Ciel et Terre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formations & Stages 2026 | Ciel et Terre - Val de Bagnes",
    description:
      "Stages de géobiologie, pendule, baguettes de sourcier et médiumnité dans le Val de Bagnes.",
    images: ["/images/formations-hero.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
