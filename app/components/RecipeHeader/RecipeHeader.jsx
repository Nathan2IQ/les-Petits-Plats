// -----------------------------------------------------------------------------
// Composant RecipeHeader
// Affiche l'en-tête spécifique de la page recette avec bannière et logo cliquable
// -----------------------------------------------------------------------------
import Image from "next/image";
import recipeHeaderStyles from "./RecipeHeader.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={recipeHeaderStyles.header}>
      {/* Bannière de la page recette */}
      <img
        className={`${recipeHeaderStyles.banner} banner__notFound`}
        src="/bannerImg.png"
        alt="Header Image"
      />
      {/* Logo cliquable pour revenir à l'accueil */}
      <Link href="/">
        <Image
          className={recipeHeaderStyles.logo}
          src="/logo.png"
          alt="Logo"
          width={250}
          height={30}
        />
      </Link>
    </header>
  );
}
