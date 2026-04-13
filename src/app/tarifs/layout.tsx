import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | Ciel et Terre - Val de Bagnes",
  description:
    "Tarifs des expertises géobiologiques, nettoyages énergétiques et déplacements. Demandez un devis gratuit.",
  keywords: [
    "tarifs géobiologie",
    "prix expertise géobiologique",
    "devis géobiologie",
    "nettoyage énergétique tarif",
    "Val de Bagnes",
  ],
  alternates: {
    canonical: "/tarifs",
  },
  openGraph: {
    title: "Tarifs | Ciel et Terre - Val de Bagnes",
    description:
      "Tarifs des expertises géobiologiques, nettoyages énergétiques et déplacements. Devis gratuit.",
    url: "/tarifs",
    images: [{ url: "/images/tarifs.jpg", width: 1200, height: 630, alt: "Tarifs - Ciel et Terre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs | Ciel et Terre - Val de Bagnes",
    description:
      "Tarifs des expertises géobiologiques, nettoyages énergétiques et déplacements. Devis gratuit.",
    images: ["/images/tarifs.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
