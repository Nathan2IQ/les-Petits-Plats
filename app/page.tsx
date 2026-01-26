// -----------------------------------------------------------------------------
// Page d'accueil principale de l'application Les Petits Plats
// - Gère la recherche et le filtrage multi-tags sur les recettes
// - Affiche l'en-tête, les filtres, les tags sélectionnés, la liste des recettes filtrées et le pied de page
// -----------------------------------------------------------------------------
"use client";

import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Recipes from "./components/Recipes/Recipes";
import Footer from "./components/Footer/Footer";
import SelectedTags from "./components/Filters/SelectedTags";
import recipesData from "@/data/recipes.json";
import { useState } from "react";

export default function Home() {
  // États pour les tags sélectionnés et la recherche texte
  const [selectedIngredients, setSelectedIngredients] = useState([]); // Ingrédients sélectionnés
  const [selectedUstensils, setSelectedUstensils] = useState([]); // Ustensiles sélectionnés
  const [selectedAppliances, setSelectedAppliances] = useState([]); // Appareils sélectionnés
  const [searchTerm, setSearchTerm] = useState(""); // Terme de recherche principal

  // Fonction de filtrage multi-tags + recherche texte
  // Retourne la liste des recettes correspondant à la recherche et aux tags
  const filteredRecipes = recipesData.filter((recipe) => {
    // Recherche texte (nom, description, ingrédients)
    const lowerSearch = searchTerm.trim().toLowerCase();

    // Vérifie si le texte recherché est présent dans le nom, la description ou les ingrédients
    const matchText =
      lowerSearch.length < 3 ||
      recipe.name.toLowerCase().includes(lowerSearch) ||
      recipe.description.toLowerCase().includes(lowerSearch) ||
      recipe.ingredients.some((ing) =>
        String(ing.ingredient).toLowerCase().includes(lowerSearch),
      );

    // Ingrédients : tous les tags doivent être présents dans la recette
    const matchIngredients =
      selectedIngredients.length === 0 ||
      selectedIngredients.every((tag) =>
        recipe.ingredients.some(
          (ing) =>
            String(ing.ingredient).toLowerCase() === String(tag).toLowerCase(),
        ),
      );
    // Ustensiles : tous les tags doivent être présents dans la recette
    const matchUstensils =
      selectedUstensils.length === 0 ||
      selectedUstensils.every((tag) =>
        (recipe.ustensils || []).some(
          (ust) => String(ust).toLowerCase() === String(tag).toLowerCase(),
        ),
      );
    // Appareils : tous les tags doivent être présents dans la recette
    const matchAppliances =
      selectedAppliances.length === 0 ||
      selectedAppliances.every(
        (tag) =>
          String(recipe.appliance).toLowerCase() === String(tag).toLowerCase(),
      );
    // La recette est conservée si tous les filtres sont validés
    return matchText && matchIngredients && matchUstensils && matchAppliances;
  });

  // Rendu de la page principale
  return (
    <>
      {/* En-tête avec barre de recherche principale */}
      <Header searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <main>
        {/* Filtres multi-tags (ingrédients, ustensiles, appareils) */}
        <Filters
          recipes={filteredRecipes}
          filteredCount={filteredRecipes.length}
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
          selectedUstensils={selectedUstensils}
          setSelectedUstensils={setSelectedUstensils}
          selectedAppliances={selectedAppliances}
          setSelectedAppliances={setSelectedAppliances}
          searchTerm={searchTerm}
        />
        {/* Affichage des tags sélectionnés avec possibilité de suppression */}
        <SelectedTags
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
          selectedUstensils={selectedUstensils}
          setSelectedUstensils={setSelectedUstensils}
          selectedAppliances={selectedAppliances}
          setSelectedAppliances={setSelectedAppliances}
        />
        {/* Liste des recettes filtrées */}
        <Recipes recipes={filteredRecipes} />
      </main>
      {/* Pied de page */}
      <Footer />
    </>
  );
}
