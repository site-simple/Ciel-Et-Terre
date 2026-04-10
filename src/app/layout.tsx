import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geobiologie-bagnes.ch"),
  title: "Ciel et Terre | Géobiologie & Médiumnité — Val de Bagnes, Valais",
  description:
    "Joël et Marie vous accompagnent en géobiologie, médiumnité et formations dans le Val de Bagnes en Valais. Expertises, harmonisations, stages en pleine nature.",
  keywords: [
    "géobiologie",
    "médiumnité",
    "Val de Bagnes",
    "Valais",
    "harmonisation",
    "expertise géobiologique",
    "formations géobiologie",
    "nettoyage énergétique",
    "Ciel et Terre",
    "Suisse",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ciel et Terre | Géobiologie & Médiumnité — Val de Bagnes, Valais",
    description:
      "Joël et Marie vous accompagnent en géobiologie, médiumnité et formations dans le Val de Bagnes en Valais.",
    url: "/",
    siteName: "Ciel et Terre",
    locale: "fr_CH",
    type: "website",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Ciel et Terre — Géobiologie & Médiumnité dans le Val de Bagnes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciel et Terre | Géobiologie & Médiumnité — Val de Bagnes, Valais",
    description:
      "Joël et Marie vous accompagnent en géobiologie, médiumnité et formations dans le Val de Bagnes en Valais.",
    images: ["/images/hero-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased bg-cream text-night">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  name: "Ciel et Terre",
                  description:
                    "Géobiologie, médiumnité et formations dans le Val de Bagnes en Valais.",
                  url: "https://geobiologie-bagnes.ch",
                  telephone: ["+41 79 417 67 37", "+41 79 858 41 55"],
                  email: "info@cieletterre.ch",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Val de Bagnes",
                    addressRegion: "Valais",
                    addressCountry: "CH",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 46.0833,
                    longitude: 7.2167,
                  },
                  image: "https://geobiologie-bagnes.ch/images/hero-banner.jpg",
                  priceRange: "$$",
                  knowsLanguage: "fr",
                  founder: [
                    { "@type": "Person", name: "Joël Hiroz" },
                    { "@type": "Person", name: "Marie Hiroz Azzalini" },
                  ],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Géobiologie",
                          description:
                            "Expertise géobiologique et harmonisation de lieux de vie.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Médiumnité",
                          description:
                            "Médiumnité de contact défunt, médiumnité psychique et peinture intuitive.",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Formations & Stages",
                          description:
                            "Stages de géobiologie, pendule, baguettes de sourcier et médiumnité.",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Ciel et Terre",
                  url: "https://geobiologie-bagnes.ch",
                  inLanguage: "fr",
                },
              ],
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
