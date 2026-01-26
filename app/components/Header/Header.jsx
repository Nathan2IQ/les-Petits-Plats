// -----------------------------------------------------------------------------
// Composant Header
// Affiche l'en-tête principal du site avec bannière, logo, titre et barre de recherche
// -----------------------------------------------------------------------------
import React, { useState } from "react";
import Image from "next/image";
import headerStyles from "./Header.module.scss";
import { Anton, Manrope } from "next/font/google";

// Chargement des polices Google
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header({ searchTerm, onSearchTermChange }) {
  // Valeur locale de la barre de recherche
  const [localValue, setLocalValue] = useState(searchTerm || "");

  // Synchronise le champ local si le prop change (utile si reset via filtres)
  React.useEffect(() => {
    setLocalValue(searchTerm || "");
  }, [searchTerm]);

  // Gère la saisie utilisateur dans la barre de recherche
  function handleChange(e) {
    const value = e.target.value;
    setLocalValue(value);
    // Déclenche la recherche si au moins 3 caractères ou champ vidé
    if (value.length >= 3 || value.length === 0) {
      onSearchTermChange(value);
    }
  }

  // Gère la soumission du formulaire de recherche
  function handleSubmit(e) {
    e.preventDefault();
    if (localValue.length >= 3 || localValue.length === 0) {
      onSearchTermChange(localValue);
    }
  }

  // Affichage de l'en-tête principal
  return (
    <header className={headerStyles.header}>
      {/* Bannière visuelle */}
      <img
        className={headerStyles.banner}
        src="/bannerImg.png"
        alt="Header Image"
      />
      {/* Logo du site */}
      <Image
        className={headerStyles.logo}
        src="/Logo.png"
        alt="Logo"
        width={250}
        height={30}
      />
      {/* Titre principal */}
      <h1 className={headerStyles.title + " " + anton.className}>
        Découvrez nos recettes du quotidien, simples et délicieuses
      </h1>
      {/* Barre de recherche */}
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
