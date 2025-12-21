import Link from "next/link";
import recipesStyles from "./Recipes.module.scss";
import recipes from "@/data/recipes.json";
import Image from "next/image";
import { Anton, Manrope } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

const manrope = Manrope({
  subsets: ["latin"],
});

export default function Recipes() {
  return (
    <section className={recipesStyles.recipesSection}>
      {recipes.map((recipe) => (
        <article key={recipe.id} className={recipesStyles.recipeCard}>
          <Link href={`/recipes/${recipe.slug}`}>
            <div className={recipesStyles.imageWrapper}>
              <Image
                src={`/img-recipes/${recipe.image}`}
                alt={recipe.name}
                className={recipesStyles.recipeImage}
                width={400}
                height={100}
              />
              <span
                className={recipesStyles.recipeTimeBadge}
                style={manrope.style}
              >
                {recipe.time} min
              </span>
            </div>
            <div className={recipesStyles.recipeInfo}>
              <h2 className={recipesStyles.recipeName} style={anton.style}>
                {recipe.name}
              </h2>
              <h3 className={recipesStyles.recipeH3} style={manrope.style}>
                Recette
              </h3>
              <p className={recipesStyles.recipeDetails} style={manrope.style}>
                {recipe.description}
              </p>
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
      ))}
    </section>
  );
}
