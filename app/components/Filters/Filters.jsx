"use client";

import filtersStyles from "./Filters.module.scss";
import recipes from "@/data/recipes.json";
import { useState } from "react";
import { Anton, Manrope } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400"],
});

// Liste unique des ingrédients
const ingredients = recipes
  .flatMap((recipe) => recipe.ingredients.map((ing) => ing.ingredient))
  .filter((value, index, self) => self.indexOf(value) === index);

// Liste unique des ustensiles
const ustensils = recipes
  .flatMap((recipe) => recipe.ustensils)
  .filter((value, index, self) => self.indexOf(value) === index);

// Liste unique des appareils
const appliances = recipes
  .map((recipe) => recipe.appliance)
  .filter((value, index, self) => self.indexOf(value) === index);

export default function Filters() {
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedUstensil, setSelectedUstensil] = useState("");
  const [selectedAppliance, setSelectedAppliance] = useState("");

  return (
    <div className={filtersStyles.filtersContainer}>
      <div className={filtersStyles.selectWrapper}>
        <select
          className={`${filtersStyles.selectIngredient} ${manrope.className}`}
          value={selectedIngredient}
          onChange={(e) => setSelectedIngredient(e.target.value)}
        >
          <option value="">Ingrédients</option>
          {ingredients.map((ingredient, idx) => (
            <option key={idx} value={ingredient}>
              {ingredient}
            </option>
          ))}
        </select>
        <i className="fa-solid fa-chevron-down"></i>
      </div>

      <div className={filtersStyles.selectWrapper}>
        <select
          className={filtersStyles.selectAppliance}
          value={selectedAppliance}
          onChange={(e) => setSelectedAppliance(e.target.value)}
        >
          <option value="">Appareils</option>
          {appliances.map((appliance, idx) => (
            <option key={idx} value={appliance}>
              {appliance}
            </option>
          ))}
        </select>
        <i className="fa-solid fa-chevron-down"></i>
      </div>

      <div className={filtersStyles.selectWrapper}>
        <select
          className={filtersStyles.selectUstensil}
          value={selectedUstensil}
          onChange={(e) => setSelectedUstensil(e.target.value)}
        >
          <option value="">Ustensiles</option>
          {ustensils.map((ustensil, idx) => (
            <option key={idx} value={ustensil}>
              {ustensil}
            </option>
          ))}
        </select>
        <i className="fa-solid fa-chevron-down"></i>
      </div>

      <div className={filtersStyles.totalRecettes} style={anton.style}>
        42 recettes
      </div>
    </div>
  );
}
