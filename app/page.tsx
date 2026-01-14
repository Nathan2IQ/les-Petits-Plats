"use client";

import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Recipes from "./components/Recipes/Recipes";
import Footer from "./components/Footer/Footer";
import SelectedTags from "./components/Filters/SelectedTags";
import recipesData from "@/data/recipes.json";
import { useState } from "react";

export default function Home() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedUstensils, setSelectedUstensils] = useState([]);
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fonction de filtrage multi-tags + recherche texte
  const filteredRecipes = recipesData.filter((recipe) => {
    // Recherche texte (nom, description, ingrédients)
    const lowerSearch = searchTerm.trim().toLowerCase();

    const matchText =
      lowerSearch.length < 3 ||
      recipe.name.toLowerCase().includes(lowerSearch) ||
      recipe.description.toLowerCase().includes(lowerSearch) ||
      recipe.ingredients.some((ing) =>
        String(ing.ingredient).toLowerCase().includes(lowerSearch)
      );

    // Ingrédients : tous les tags doivent être présents
    const matchIngredients =
      selectedIngredients.length === 0 ||
      selectedIngredients.every((tag) =>
        recipe.ingredients.some(
          (ing) =>
            String(ing.ingredient).toLowerCase() === String(tag).toLowerCase()
        )
      );
    // Ustensiles : tous les tags doivent être présents
    const matchUstensils =
      selectedUstensils.length === 0 ||
      selectedUstensils.every((tag) =>
        (recipe.ustensils || []).some(
          (ust) => String(ust).toLowerCase() === String(tag).toLowerCase()
        )
      );
    // Appareils : tous les tags doivent être présents
    const matchAppliances =
      selectedAppliances.length === 0 ||
      selectedAppliances.every(
        (tag) =>
          String(recipe.appliance).toLowerCase() === String(tag).toLowerCase()
      );
    return matchText && matchIngredients && matchUstensils && matchAppliances;
  });

  return (
    <>
      <Header searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
      <main>
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
        <SelectedTags
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
          selectedUstensils={selectedUstensils}
          setSelectedUstensils={setSelectedUstensils}
          selectedAppliances={selectedAppliances}
          setSelectedAppliances={setSelectedAppliances}
        />
        <Recipes recipes={filteredRecipes} />
      </main>
      <Footer />
    </>
  );
}
