"use client";
import Recipe from "../../components/RecipePage/RecipePage.jsx";
import RecipeHeader from "../../components/RecipeHeader/RecipeHeader.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import NotFound from "../../components/NotFound/NotFound.jsx";
import recipes from "@/data/recipes.json";
import { useParams } from "next/navigation";

export default function RecipePageWrapper() {
  const params = useParams();
  const slug = params.slug;
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return <NotFound />;
  }

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
