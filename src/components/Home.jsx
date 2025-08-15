import axios from "axios";
import Recipes from "./Recipes";
import CategoriesList from "./CategoriesList";
import { ClipLoader } from "react-spinners";
import { useEffect, useState } from "react";
function Home() {
  const [recipes, setRecipes] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  async function getAllRecipes() {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      if (!data.meals) {
        setError("No recipes found. ");
      }
      const recipes = data.meals;
      setRecipes(recipes);
    } catch (error) {
      console.error(error);
      setError("An error occured while fetching recipes⚠️⚠️");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getAllRecipes();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader />
      </div>
    );
  }
  if (error) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-red-600">{error}</p>
      </div>
    );
  }
  return (
    <section className="py-10 ">
      <div className=" ml-4 sm:ml-72 p-4 min-h-screen">
        <main>
          <CategoriesList />
        </main>
        <header>
          <Recipes recipes={recipes} />
        </header>
      </div>
    </section>
  );
}

export default Home;
