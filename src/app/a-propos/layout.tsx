import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous | Ciel et Terre — Val de Bagnes",
  description:
    "Découvrez Joël et Marie, géobiologue et médium dans le Val de Bagnes en Valais. Parcours, formations et vision.",
  keywords: [
    "Joël Hiroz",
    "Marie Hiroz Azzalini",
    "géobiologue Valais",
    "médium Val de Bagnes",
    "parcours géobiologie",
  ],
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "Qui sommes-nous | Ciel et Terre — Val de Bagnes",
    description:
      "Découvrez Joël et Marie, géobiologue et médium dans le Val de Bagnes en Valais.",
    url: "/a-propos",
    images: [{ url: "/images/about.jpg", width: 1200, height: 630, alt: "Joël et Marie — Ciel et Terre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qui sommes-nous | Ciel et Terre — Val de Bagnes",
    description:
      "Découvrez Joël et Marie, géobiologue et médium dans le Val de Bagnes en Valais.",
    images: ["/images/about.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
