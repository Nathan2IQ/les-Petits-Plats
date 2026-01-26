// -----------------------------------------------------------------------------
// Composant Recipes
// Affiche la liste des recettes sous forme de cartes avec image, nom, description, temps et ingrédients
// -----------------------------------------------------------------------------
import Link from "next/link";
import recipesStyles from "./Recipes.module.scss";
import Image from "next/image";
import { Anton, Manrope } from "next/font/google";

// Chargement des polices Google
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
});

// Affiche la liste des recettes reçues en props
export default function Recipes({ recipes }) {
  return (
    <section className={recipesStyles.recipesSection}>
      {/* Pour chaque recette, affiche une carte */}
      {recipes.map(
        (
          recipe, // Objet recette
        ) => (
          <article key={recipe.id} className={recipesStyles.recipeCard}>
            <Link href={`/recipes/${recipe.slug}`}>
              {/* Image de la recette */}
              <div className={recipesStyles.imageWrapper}>
                <Image
                  src={`/img-recipes/${recipe.image}`}
                  alt={recipe.name}
                  className={recipesStyles.recipeImage}
                  width={400}
                  height={100}
                />
                {/* Badge du temps de préparation */}
                <span
                  className={recipesStyles.recipeTimeBadge}
                  style={manrope.style}
                >
                  {recipe.time} min
                </span>
              </div>
              {/* Infos recette */}
              <div className={recipesStyles.recipeInfo}>
                <h2 className={recipesStyles.recipeName} style={anton.style}>
                  {recipe.name}
                </h2>
                <h3 className={recipesStyles.recipeH3} style={manrope.style}>
                  Recette
                </h3>
                <p
                  className={recipesStyles.recipeDetails}
                  style={manrope.style}
                >
                  {recipe.description}
                </p>
                {/* Liste des ingrédients */}
                <div className={recipesStyles.recipeIngredientsCtn}>
                  <h3 className={recipesStyles.recipeH3} style={manrope.style}>
                    Ingrédients
                  </h3>
                  <ul className={recipesStyles.recipeUl}>
                    {recipe.ingredients.map((ing, idx) => (
                      <li
                        key={idx}
                        className={recipesStyles.recipeLi}
                        style={manrope.style}
                      >
                        <span className={recipesStyles.ingredientName}>
                          {ing.ingredient}
                        </span>
                        {(ing.quantity || ing.unit) && (
                          <span className={recipesStyles.ingredientQuantity}>
                            {ing.quantity ? ` ${ing.quantity}` : ""}
                            {ing.unit ? ing.unit : ""}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </article>
        ),
      )}
    </section>
  );
}
