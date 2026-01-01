"use client";

import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Recipes from "./components/Recipes/Recipes";
import Footer from "./components/Footer/Footer";
import recipesData from "@/data/recipes.json";
import { useState } from "react";

// const fetchRecipes = async () => {
//   const data = await (await fetch("/recipes.json")).json();
//   console.log(data);
// };

// fetchRecipes();

export default function Home() {
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedUstensil, setSelectedUstensil] = useState("");
  const [selectedAppliance, setSelectedAppliance] = useState("");

  // Fonction de filtrage
  const filteredRecipes = recipesData.filter((recipe) => {
    const matchIngredient =
      !selectedIngredient ||
      recipe.ingredients.some(
        (ing) =>
          ing.ingredient.toLowerCase() === selectedIngredient.toLowerCase()
      );

    const matchUstensil =
      !selectedUstensil ||
      (recipe.ustensils &&
        recipe.ustensils.some(
          (ust) => ust.toLowerCase() === selectedUstensil.toLowerCase()
        ));
    const matchAppliance =
      !selectedAppliance ||
      recipe.appliance.toLowerCase() === selectedAppliance.toLowerCase();

    return matchIngredient && matchUstensil && matchAppliance;
  });

  return (
    <>
      <Header />
      <main>
        <Filters
          selectedIngredient={selectedIngredient}
          setSelectedIngredient={setSelectedIngredient}
          selectedUstensil={selectedUstensil}
          setSelectedUstensil={setSelectedUstensil}
          selectedAppliance={selectedAppliance}
          setSelectedAppliance={setSelectedAppliance}
          recipes={recipesData}
          filteredCount={filteredRecipes.length}
        />
        <Recipes recipes={filteredRecipes} />
      </main>
      <Footer />
    </>
  );
}
