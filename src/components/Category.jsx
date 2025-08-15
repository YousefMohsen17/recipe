import { useParams } from "react-router-dom";
import CategoriesList from "./CategoriesList";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

import axios from "axios";
import Recipes from "./Recipes";
export default function Category() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState("");
  const [error, setError] = useState("");
  async function getMealsByCategory() {
    try {
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.name}`
      );
      if (!data.data.meals) {
        setError("No recipes found for this category. ⚠️⚠️");
        return;
      }
      const recipes = data.data.meals;
      setRecipes(recipes);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching recipes. ⚠️⚠️");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getMealsByCategory();
  }, [params.name]);
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
    <>
      <section className="py-10 ">
        <div className="  ml-72  p-4 min-h-screen">
          <CategoriesList />
          <Recipes recipes={recipes} />
        </div>
      </section>
    </>
  );
}
