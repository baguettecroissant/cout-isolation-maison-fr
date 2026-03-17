import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: 'swap',
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cout-isolation-maison.fr'),
  title: "Coût Isolation Maison 2026 — Prix au m², Devis & Artisans RGE",
  description: "Comparez les prix d'isolation des combles, ITE et isolation phonique. Devis gratuits d'artisans certifiés RGE partout en France. Économisez jusqu'à 30% sur vos factures.",
  openGraph: {
    title: "Coût Isolation Maison 2026 — Prix au m², Devis & Artisans RGE",
    description: "Isolation combles, ITE, phonique — comparez les prix au m² et obtenez des devis gratuits d'artisans RGE.",
    url: 'https://www.cout-isolation-maison.fr',
    siteName: 'Cout-Isolation-Maison.fr',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Coût Isolation Maison 2026 — Prix au m², Devis & Artisans RGE",
    description: "Isolation combles, ITE, phonique — comparez les prix au m² et obtenez des devis gratuits d'artisans RGE.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cout-Isolation-Maison.fr",
  "url": "https://www.cout-isolation-maison.fr",
  "logo": "https://www.cout-isolation-maison.fr/icon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cout-Isolation-Maison.fr",
  "url": "https://www.cout-isolation-maison.fr",
  "description": "Guide indépendant : prix et artisans pour l'isolation des combles, l'ITE et l'isolation phonique en France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${lora.variable} ${spaceMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1 pb-14 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
