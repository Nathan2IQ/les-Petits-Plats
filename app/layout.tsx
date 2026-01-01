import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Les Petits Plats",
  description: "Découvrez nos recettes du quotidien, simples et délicieuses",
};

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
