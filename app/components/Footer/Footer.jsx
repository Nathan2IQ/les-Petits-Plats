// -----------------------------------------------------------------------------
// Composant Footer
// Affiche le pied de page du site
// -----------------------------------------------------------------------------
import footerStyles from "./Footer.module.scss";
import { Manrope } from "next/font/google";

// Chargement de la police Manrope
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  // Affichage du pied de page
  return (
    <footer className={footerStyles.footer + " " + manrope.className}>
      <p>Copyright © 2025 - Les Petits Plats</p>
    </footer>
  );
}
