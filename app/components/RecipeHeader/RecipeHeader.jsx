import Image from "next/image";
import recipeHeaderStyles from "./RecipeHeader.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={recipeHeaderStyles.header}>
      <img
        className={`${recipeHeaderStyles.banner} banner__notFound`}
        src="/bannerImg.png"
        alt="Header Image"
      />
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
