import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ciel et Terre - Val de Bagnes",
  description:
    "Contactez Joël et Marie pour une expertise géobiologique, une séance de médiumnité ou une inscription aux formations.",
  keywords: [
    "contact géobiologue",
    "contact médium Valais",
    "Joël Hiroz contact",
    "Marie Hiroz Azzalini",
    "Val de Bagnes",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Ciel et Terre - Val de Bagnes",
    description:
      "Contactez Joël et Marie pour une expertise géobiologique ou une séance de médiumnité.",
    url: "/contact",
    images: [{ url: "/images/contact.jpg", width: 1200, height: 630, alt: "Contact - Ciel et Terre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Ciel et Terre - Val de Bagnes",
    description:
      "Contactez Joël et Marie pour une expertise géobiologique ou une séance de médiumnité.",
    images: ["/images/contact.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
