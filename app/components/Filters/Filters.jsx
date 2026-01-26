// -----------------------------------------------------------------------------
// Composant Filters
// Affiche les filtres multi-tags (ingrédients, appareils, ustensiles) avec recherche locale
// Gère l'ouverture/fermeture des menus, la sélection et la recherche dans chaque filtre
// -----------------------------------------------------------------------------
"use client";

import filtersStyles from "./Filters.module.scss";
import { Anton } from "next/font/google";
import { useState, useEffect, useMemo, useRef } from "react";

// Chargement de la police Anton
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Filters({
  recipes,
  filteredCount,
  selectedIngredients,
  setSelectedIngredients,
  selectedUstensils,
  setSelectedUstensils,
  selectedAppliances,
  setSelectedAppliances,
  searchTerm = "",
}) {
  // États pour la recherche locale et l'ouverture des menus
  const [ingredientSearch, setIngredientSearch] = useState("");
  const [applianceSearch, setApplianceSearch] = useState("");
  const [ustensilSearch, setUstensilSearch] = useState("");
  const [openIngredient, setOpenIngredient] = useState(false);
  const [openAppliance, setOpenAppliance] = useState(false);
  const [openUstensil, setOpenUstensil] = useState(false);
  const ingredientRef = useRef(null);
  const applianceRef = useRef(null);
  const ustensilRef = useRef(null);

  // Ferme les menus si clic en dehors
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        openIngredient &&
        ingredientRef.current &&
        !ingredientRef.current.contains(event.target)
      ) {
        setOpenIngredient(false);
      }
      if (
        openAppliance &&
        applianceRef.current &&
        !applianceRef.current.contains(event.target)
      ) {
        setOpenAppliance(false);
      }
      if (
        openUstensil &&
        ustensilRef.current &&
        !ustensilRef.current.contains(event.target)
      ) {
        setOpenUstensil(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openIngredient, openAppliance, openUstensil]);

  // Liste des ingrédients filtrés selon la recherche locale et les tags déjà sélectionnés
  const ingredients = useMemo(() => {
    const all = recipes.flatMap((r) =>
      (r.ingredients ?? []).map((i) => i.ingredient),
    );
    return [...new Set(all)].filter(
      (i) =>
        !selectedIngredients.includes(i) &&
        i.toLowerCase().includes(ingredientSearch.toLowerCase()),
    );
  }, [recipes, selectedIngredients, ingredientSearch]);

  // Liste des appareils filtrés
  const appliances = useMemo(() => {
    const all = recipes.map((r) => r.appliance);
    return [...new Set(all)].filter(
      (a) =>
        !selectedAppliances.includes(a) &&
        a.toLowerCase().includes(applianceSearch.toLowerCase()),
    );
  }, [recipes, selectedAppliances, applianceSearch]);

  // Liste des ustensiles filtrés
  const ustensils = useMemo(() => {
    const all = recipes.flatMap((r) => r.ustensils ?? []);
    return [...new Set(all)].filter(
      (u) =>
        !selectedUstensils.includes(u) &&
        u.toLowerCase().includes(ustensilSearch.toLowerCase()),
    );
  }, [recipes, selectedUstensils, ustensilSearch]);

  // Affichage des filtres
  return (
    <div className={filtersStyles.filtersContainer}>
      <div className={filtersStyles.filtersRow}>
        {/* --- 1. Filtre ingrédients --- */}
        <div className={filtersStyles.selectWrapper}>
          <div
            className={filtersStyles.customSelect}
            tabIndex={0}
            ref={ingredientRef}
          >
            <div
              className={filtersStyles.selectHeader}
              onClick={() => setOpenIngredient((open) => !open)}
            >
              Ingrédients <i className="fa-solid fa-chevron-down"></i>
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
                  {ingredients.length > 0 ? (
                    ingredients.map((ingredient) => (
                      <div
                        key={ingredient}
                        className={filtersStyles.option}
                        onClick={() => {
                          setSelectedIngredients((prev) => [
                            ...prev,
                            ingredient,
                          ]);
                          setOpenIngredient(false);
                          setIngredientSearch("");
                        }}
                      >
                        {ingredient}
                      </div>
                    ))
                  ) : (
                    <div className={filtersStyles.noOption}>
                      Aucun ingrédient
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- 2. Filtre appareils --- */}
        <div className={filtersStyles.selectWrapper}>
          <div
            className={filtersStyles.customSelect}
            tabIndex={0}
            ref={applianceRef}
          >
            <div
              className={filtersStyles.selectHeader}
              onClick={() => setOpenAppliance((open) => !open)}
            >
              Appareils <i className="fa-solid fa-chevron-down"></i>
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
                  {appliances.length > 0 ? (
                    appliances.map((appliance) => (
                      <div
                        key={appliance}
                        className={filtersStyles.option}
                        onClick={() => {
                          setSelectedAppliances((prev) => [...prev, appliance]);
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
        </div>

        {/* --- 3. Filtre ustensiles --- */}
        <div className={filtersStyles.selectWrapper}>
          <div
            className={filtersStyles.customSelect}
            tabIndex={0}
            ref={ustensilRef}
          >
            <div
              className={filtersStyles.selectHeader}
              onClick={() => setOpenUstensil((open) => !open)}
            >
              Ustensiles <i className="fa-solid fa-chevron-down"></i>
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
                  {ustensils.length > 0 ? (
                    ustensils.map((ustensil) => (
                      <div
                        key={ustensil}
                        className={filtersStyles.option}
                        onClick={() => {
                          setSelectedUstensils((prev) => [...prev, ustensil]);
                          setOpenUstensil(false);
                          setUstensilSearch("");
                        }}
                      >
                        {ustensil}
                      </div>
                    ))
                  ) : (
                    <div className={filtersStyles.noOption}>
                      Aucun ustensile
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={filtersStyles.totalRecettes} style={anton.style}>
        {filteredCount} recette{filteredCount > 1 ? "s" : ""}
      </div>
    </div>
  );
}
