import React, { useState } from "react";
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

export default function Header({ searchTerm, onSearchTermChange }) {
  const [localValue, setLocalValue] = useState(searchTerm || "");

  // Synchronise le champ local si le prop change (utile si reset via filtres)
  React.useEffect(() => {
    setLocalValue(searchTerm || "");
  }, [searchTerm]);

  function handleChange(e) {
    const value = e.target.value;
    setLocalValue(value);
    if (value.length >= 3 || value.length === 0) {
      onSearchTermChange(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (localValue.length >= 3 || localValue.length === 0) {
      onSearchTermChange(localValue);
    }
  }

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
        height={30}
      />
      <h1 className={headerStyles.title + " " + anton.className}>
        Découvrez nos recettes du quotidien, simples et délicieuses
      </h1>
      <form
        className={headerStyles.searchForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div>
          <input
            className={headerStyles.searchBar + " " + manrope.className}
            type="text"
            placeholder="Rechercher une recette, un ingrédient, ..."
            value={localValue}
            onChange={handleChange}
          />
          <button type="submit" className={headerStyles.searchBtn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </header>
  );
}
