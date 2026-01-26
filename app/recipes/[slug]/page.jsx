// -----------------------------------------------------------------------------
// Page dynamique d'une recette individuelle
// - Récupère le slug dans l'URL
// - Cherche la recette correspondante dans le JSON
// - Affiche NotFound si la recette n'existe pas
// - Affiche l'en-tête, la recette et le pied de page
// -----------------------------------------------------------------------------
"use client";
import Recipe from "../../components/RecipePage/RecipePage.jsx";
import RecipeHeader from "../../components/RecipeHeader/RecipeHeader.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import NotFound from "../../components/NotFound/NotFound.jsx";
import recipes from "@/data/recipes.json";
import { useParams } from "next/navigation";

export default function RecipePageWrapper() {
  // Récupère le paramètre 'slug' de l'URL
  const params = useParams();
  const slug = params.slug;
  // Recherche la recette correspondante dans le JSON
  const recipe = recipes.find((r) => r.slug === slug);

  // Si la recette n'existe pas, affiche la page NotFound
  if (!recipe) {
    return <NotFound />;
  }

  // Affiche l'en-tête, la page recette et le pied de page
  return (
    <>
      <RecipeHeader />
      <main>
        <Recipe />
      </main>
      <Footer />
    </>
  );
}
