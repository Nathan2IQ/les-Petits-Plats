// -----------------------------------------------------------------------------
// Composant SelectedTags
// Affiche les tags sélectionnés (ingrédients, appareils, ustensiles) avec possibilité de suppression
// -----------------------------------------------------------------------------
import filtersStyles from "../Filters/Filters.module.scss";

export default function SelectedTags({
  selectedIngredients = [],
  setSelectedIngredients,
  selectedUstensils = [],
  setSelectedUstensils,
  selectedAppliances = [],
  setSelectedAppliances,
}) {
  // Affiche chaque tag sélectionné avec une croix pour le retirer
  return (
    <div className={filtersStyles.selectedTagsContainer}>
      {/* Ingrédients sélectionnés */}
      {selectedIngredients.map((ingredient) => (
        <div key={ingredient} className={filtersStyles.selectedTag}>
          {ingredient}
          <i
            className="fa-solid fa-x"
            onClick={() =>
              setSelectedIngredients((prev) =>
                prev.filter((i) => i !== ingredient),
              )
            }
          ></i>
        </div>
      ))}
      {/* Appareils sélectionnés */}
      {selectedAppliances.map((appliance) => (
        <div key={appliance} className={filtersStyles.selectedTag}>
          {appliance}
          <i
            className="fa-solid fa-x"
            onClick={() =>
              setSelectedAppliances((prev) =>
                prev.filter((a) => a !== appliance),
              )
            }
          ></i>
        </div>
      ))}
      {/* Ustensiles sélectionnés */}
      {selectedUstensils.map((ustensil) => (
        <div key={ustensil} className={filtersStyles.selectedTag}>
          {ustensil}
          <i
            className="fa-solid fa-x"
            onClick={() =>
              setSelectedUstensils((prev) => prev.filter((u) => u !== ustensil))
            }
          ></i>
        </div>
      ))}
    </div>
  );
}
