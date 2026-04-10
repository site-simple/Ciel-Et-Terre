import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Médiumnité | Ciel et Terre — Val de Bagnes",
  description:
    "Médiumnité de contact défunt, médiumnité psychique et peinture intuitive. Un pont entre le visible et l'invisible dans le Val de Bagnes.",
  keywords: [
    "médiumnité",
    "contact défunt",
    "médiumnité psychique",
    "peinture intuitive",
    "médium Valais",
    "Val de Bagnes",
  ],
  alternates: {
    canonical: "/mediumnite",
  },
  openGraph: {
    title: "Médiumnité | Ciel et Terre — Val de Bagnes",
    description:
      "Médiumnité de contact défunt, médiumnité psychique et peinture intuitive dans le Val de Bagnes.",
    url: "/mediumnite",
    images: [{ url: "/images/mediumnite.jpg", width: 1200, height: 630, alt: "Médiumnité — Ciel et Terre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Médiumnité | Ciel et Terre — Val de Bagnes",
    description:
      "Médiumnité de contact défunt, médiumnité psychique et peinture intuitive dans le Val de Bagnes.",
    images: ["/images/mediumnite.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
