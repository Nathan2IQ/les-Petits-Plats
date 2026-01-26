// -----------------------------------------------------------------------------
// Composant NotFound
// Affiche une page 404 personnalisée avec bannière, logo, message et pied de page
// -----------------------------------------------------------------------------
import Style from "./NotFound.module.scss";
import Link from "next/link";
import Image from "next/image";
import Footer from "../Footer/Footer";

import { Anton, Manrope } from "next/font/google";

// Chargement de la police Anton
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function NotFound() {
  return (
    <>
      <div className={Style.notFound}>
        {/* Bannière d'erreur */}
        <img className={Style.banner} src="/bannerImg.png" alt="Header Image" />
        {/* Logo cliquable pour revenir à l'accueil */}
        <Link href="/">
          <Image
            className={Style.logo}
            src="/logo.png"
            alt="Logo"
            width={250}
            height={30}
          />
        </Link>
        {/* Message d'erreur */}
        <div className={Style.content}>
          <h1 className={anton.className}>404 :(</h1>
          <p className={anton.className}>
            La page que vous demandez est introuvable.
          </p>
        </div>
      </div>
      {/* Pied de page */}
      <Footer />
    </>
  );
}
