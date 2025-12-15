import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Recipe from "./components/Recipes/Recipes";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Filters />
        <Recipe />
      </main>
      <Footer />
    </>
  );
}
