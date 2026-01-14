import filtersStyles from "../Filters/Filters.module.scss";

export default function SelectedTags({
  selectedIngredients = [],
  setSelectedIngredients,
  selectedUstensils = [],
  setSelectedUstensils,
  selectedAppliances = [],
  setSelectedAppliances,
}) {
  return (
    <div className={filtersStyles.selectedTagsContainer}>
      {selectedIngredients.map((ingredient) => (
        <div key={ingredient} className={filtersStyles.selectedTag}>
          {ingredient}
          <i
            className="fa-solid fa-x"
            onClick={() =>
              setSelectedIngredients((prev) =>
                prev.filter((i) => i !== ingredient)
              )
            }
          ></i>
        </div>
      ))}
      {selectedAppliances.map((appliance) => (
        <div key={appliance} className={filtersStyles.selectedTag}>
          {appliance}
          <i
            className="fa-solid fa-x"
            onClick={() =>
              setSelectedAppliances((prev) =>
                prev.filter((a) => a !== appliance)
              )
            }
          ></i>
        </div>
      ))}
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
