"use client";

import filtersStyles from "./Filters.module.scss";
import { Anton } from "next/font/google";
import { useState, useMemo } from "react";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Filters({
  selectedIngredient,
  setSelectedIngredient,
  selectedUstensil,
  setSelectedUstensil,
  selectedAppliance,
  setSelectedAppliance,
  recipes,
  filteredCount,
}) {
  // --- 1. Création des listes uniques ---
  const ingredients = useMemo(
    () =>
      recipes
        .flatMap((recipe) => recipe.ingredients ?? [])
        .map((ing) => ing.ingredient)
        .filter((v, i, self) => self.indexOf(v) === i),
    [recipes]
  );

  const ustensils = useMemo(
    () =>
      recipes
        .flatMap((recipe) => recipe.ustensils ?? [])
        .filter((v, i, self) => self.indexOf(v) === i),
    [recipes]
  );

  const appliances = useMemo(
    () =>
      recipes
        .map((recipe) => recipe.appliance)
        .filter((v, i, self) => self.indexOf(v) === i),
    [recipes]
  );

  // --- States pour le filtre ustensiles ---
  const [openUstensil, setOpenUstensil] = useState(false);
  const [ustensilSearch, setUstensilSearch] = useState("");
  const filteredUstensils = useMemo(
    () =>
      ustensils.filter((ust) =>
        ust.toLowerCase().includes(ustensilSearch.toLowerCase())
      ),
    [ustensils, ustensilSearch]
  );
  // --- States pour le filtre appareils ---
  const [openAppliance, setOpenAppliance] = useState(false);
  const [applianceSearch, setApplianceSearch] = useState("");
  const filteredAppliances = useMemo(
    () =>
      appliances.filter((app) =>
        app.toLowerCase().includes(applianceSearch.toLowerCase())
      ),
    [appliances, applianceSearch]
  );

  // --- States pour le filtre ingrédients ---
  const [openIngredient, setOpenIngredient] = useState(false);
  const [ingredientSearch, setIngredientSearch] = useState("");
  const filteredIngredients = useMemo(
    () =>
      ingredients.filter((ing) =>
        ing.toLowerCase().includes(ingredientSearch.toLowerCase())
      ),
    [ingredients, ingredientSearch]
  );

  return (
    <div className={filtersStyles.filtersContainer}>
      {/* --- 2. Filtre ingrédients --- */}
      <div className={filtersStyles.selectWrapper}>
        <div className={filtersStyles.customSelect} tabIndex={0}>
          <div
            className={filtersStyles.selectHeader}
            onClick={() => setOpenIngredient((open) => !open)}
          >
            Ingrédients
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          {openIngredient && (
            <div className={filtersStyles.dropdown}>
              <div className={filtersStyles.inputWrapper}>
                <i className="fa fa-search" />
                <input
                  type="text"
                  className={filtersStyles.searchInput}
                  value={ingredientSearch}
                  onChange={(e) => setIngredientSearch(e.target.value)}
                  autoFocus
                />
              </div>
              <div className={filtersStyles.optionsList}>
                {filteredIngredients.length > 0 ? (
                  filteredIngredients.map((ingredient) => (
                    <div
                      key={ingredient}
                      className={filtersStyles.option}
                      onClick={() => {
                        setSelectedIngredient(ingredient);
                        setOpenIngredient(false);
                        setIngredientSearch("");
                      }}
                    >
                      {ingredient}
                    </div>
                  ))
                ) : (
                  <div className={filtersStyles.noOption}>Aucun ingrédient</div>
                )}
              </div>
            </div>
          )}
        </div>
        {selectedIngredient && (
          <div className={filtersStyles.selectedTag}>
            {selectedIngredient}
            <i
              className="fa-solid fa-x"
              onClick={() => setSelectedIngredient("")}
            ></i>
          </div>
        )}
      </div>

      {/* --- 3. Filtre appareils --- */}
      <div className={filtersStyles.selectWrapper}>
        <div className={filtersStyles.customSelect} tabIndex={0}>
          <div
            className={filtersStyles.selectHeader}
            onClick={() => setOpenAppliance((open) => !open)}
          >
            Appareils
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          {openAppliance && (
            <div className={filtersStyles.dropdown}>
              <div className={filtersStyles.inputWrapper}>
                <i className="fa fa-search" />
                <input
                  type="text"
                  className={filtersStyles.searchInput}
                  value={applianceSearch}
                  onChange={(e) => setApplianceSearch(e.target.value)}
                  autoFocus
                />
              </div>
              <div className={filtersStyles.optionsList}>
                {filteredAppliances.length > 0 ? (
                  filteredAppliances.map((appliance) => (
                    <div
                      key={appliance}
                      className={filtersStyles.option}
                      onClick={() => {
                        setSelectedAppliance(appliance);
                        setOpenAppliance(false);
                        setApplianceSearch("");
                      }}
                    >
                      {appliance}
                    </div>
                  ))
                ) : (
                  <div className={filtersStyles.noOption}>Aucun appareil</div>
                )}
              </div>
            </div>
          )}
        </div>
        {selectedAppliance && (
          <div className={filtersStyles.selectedTag}>
            {selectedAppliance}
            <i
              className="fa-solid fa-x"
              onClick={() => setSelectedAppliance("")}
            ></i>
          </div>
        )}
      </div>

      {/* --- 4. Filtre ustensiles --- */}
      <div className={filtersStyles.selectWrapper}>
        <div className={filtersStyles.customSelect} tabIndex={0}>
          <div
            className={filtersStyles.selectHeader}
            onClick={() => setOpenUstensil((open) => !open)}
          >
            Ustensiles
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          {openUstensil && (
            <div className={filtersStyles.dropdown}>
              <div className={filtersStyles.inputWrapper}>
                <i className="fa fa-search" />
                <input
                  type="text"
                  className={filtersStyles.searchInput}
                  value={ustensilSearch}
                  onChange={(e) => setUstensilSearch(e.target.value)}
                  autoFocus
                />
              </div>
              <div className={filtersStyles.optionsList}>
                {filteredUstensils.length > 0 ? (
                  filteredUstensils.map((ustensil) => (
                    <div
                      key={ustensil}
                      className={filtersStyles.option}
                      onClick={() => {
                        setSelectedUstensil(ustensil);
                        setOpenUstensil(false);
                        setUstensilSearch("");
                      }}
                    >
                      {ustensil}
                    </div>
                  ))
                ) : (
                  <div className={filtersStyles.noOption}>Aucun ustensile</div>
                )}
              </div>
            </div>
          )}
        </div>
        {selectedUstensil && (
          <div className={filtersStyles.selectedTag}>
            {selectedUstensil}
            <i
              className="fa-solid fa-x"
              onClick={() => setSelectedUstensil("")}
            ></i>
          </div>
        )}
      </div>

      {/* --- 5. Affichage du total de recettes filtrées --- */}
      <div className={filtersStyles.totalRecettes} style={anton.style}>
        {filteredCount} recette{filteredCount > 1 ? "s" : ""}
      </div>
    </div>
  );
}
