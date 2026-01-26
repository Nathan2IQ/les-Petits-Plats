// -----------------------------------------------------------------------------
// Layout racine de l'application Les Petits Plats
// Définit la structure HTML globale et les métadonnées du site
// -----------------------------------------------------------------------------
import type { Metadata } from "next";

import "./globals.css";

// Métadonnées globales du site (titre, description)
export const metadata: Metadata = {
  title: "Les Petits Plats",
  description: "Découvrez nos recettes du quotidien, simples et délicieuses",
};

// Composant layout racine qui enveloppe toute l'application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
