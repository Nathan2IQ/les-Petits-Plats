import Image from "next/image";
import recipeHeaderStyles from "./RecipeHeader.module.scss";

export default function Header() {
  return (
    <header className={recipeHeaderStyles.header}>
      <img
        className={recipeHeaderStyles.banner}
        src="/bannerImg.png"
        alt="Header Image"
      />
      <Image
        className={recipeHeaderStyles.logo}
        src="/logo.png"
        alt="Logo"
        width={250}
        height={250}
      />
    </header>
  );
}
