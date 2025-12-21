import Recipe from "../../components/RecipePage/RecipePage.jsx";
import RecipeHeader from "../../components/RecipeHeader/RecipeHeader.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function RecipePage() {
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
