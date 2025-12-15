import Image from "next/image";
import headerStyles from "./Header.module.scss";
import { Anton, Manrope } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <img
        className={headerStyles.banner}
        src="/bannerImg.png"
        alt="Header Image"
      />
      <Image
        className={headerStyles.logo}
        src="/logo.png"
        alt="Logo"
        width={250}
        height={250}
      />
      <h1 className={headerStyles.title + " " + anton.className}>
        Découvrez nos recettes du quotidien, simples et délicieuses
      </h1>
      <form className={headerStyles.searchForm} action="#" method="get">
        <div>
          <input
            className={headerStyles.searchBar + " " + manrope.className}
            type="text"
            placeholder="Rechercher une recette, un ingrédient, ..."
          />
          <button type="submit" className={headerStyles.searchBtn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </header>
  );
}
