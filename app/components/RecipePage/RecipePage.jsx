"use client";

import { useParams } from "next/navigation";
import recipes from "@/data/recipes.json";
import styles from "./RecipePage.module.scss";

import { Anton, Manrope } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
});

export default function RecipePage() {
  // Récupère le slug dans l'URL
  const params = useParams();
  const slug = params.slug;

  // Recherche la recette correspondante dans le JSON
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe)
    return <div className={styles.notFound}>Recette introuvable.</div>;

  // Pour compatibilité, certains champs peuvent différer dans le JSON
  const appliances =
    recipe.appliances || (recipe.appliance ? [recipe.appliance] : []);
  const utensils = recipe.utensils || recipe.ustensils || [];

  return (
    <div className={styles.recipePageContainer}>
      {/* Image à gauche */}
      <div className={styles.recipeImageWrapper}>
        <img
          src={`/img-recipes/${recipe.image}`}
          alt={recipe.name}
          className={styles.recipeImage}
        />
      </div>
      {/* Infos recette à droite */}
      <div className={styles.recipeInfo}>
        <h1 className={styles.recipeTitle} style={anton.style}>
          {recipe.name}
        </h1>
        {/* Temps de préparation */}
        <div className={styles.recipeTime}>
          <h2 style={manrope.style}>Temps de préparation</h2>
          <span>{recipe.time}min</span>
        </div>
        {/* Ingrédients */}
        <div className={styles.recipeIngredientsCtn}>
          <h2 className={styles.recipeH2} style={manrope.style}>
            Ingrédients
          </h2>
          <ul className={styles.recipeUl}>
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx} className={styles.recipeLi} style={manrope.style}>
                <span className={styles.ingredientName} style={manrope.style}>
                  {ing.ingredient}
                </span>
                {(ing.quantity || ing.unit) && (
                  <span
                    className={styles.ingredientQuantity}
                    style={manrope.style}
                  >
                    {ing.quantity ? ` ${ing.quantity}` : ""}
                    {ing.unit ? ing.unit : ""}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {utensils.length > 0 && (
          <div className={styles.recipeSection}>
            <h2 style={manrope.style}>Ustensiles nécessaires</h2>
            <ul>
              {utensils.map((u, idx) => (
                <li style={manrope.style} key={idx}>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        )}

        {appliances.length > 0 && (
          <div className={styles.recipeSection}>
            <h2 style={manrope.style}>Appareils nécessaires</h2>
            <ul>
              {appliances.map((a, idx) => (
                <li style={manrope.style} key={idx}>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.recipeSection}>
          <h2 style={manrope.style}>Recette</h2>
          <p className={styles.recipeDescription} style={manrope.style}>
            {recipe.description}
          </p>
        </div>
      </div>
    </div>
  );
}
