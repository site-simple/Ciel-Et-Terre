import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales | Ciel et Terre",
  description:
    "Mentions légales du site Ciel et Terre - Géobiologie et Médiumnité, Val de Bagnes, Valais.",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
