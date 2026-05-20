import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shimi Company — Électricité Générale & BTP",
  description:
    "Shimi Company accompagne les grands projets résidentiels et tertiaires avec plus de 35 ans d'expérience terrain. Expert CFO/CFA, construction électrique et BTP. Basé à Sainte-Luce-sur-Loire.",
  keywords: ["électricité", "BTP", "CFO", "CFA", "construction", "chantier", "Île-de-France", "Sainte-Luce-sur-Loire", "Loire-Atlantique"],
  openGraph: {
    title: "Shimi Company — Électricité Générale & BTP",
    description:
      "Votre partenaire de confiance pour les projets électriques d'envergure depuis 35 ans.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}