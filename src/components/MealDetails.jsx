import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
export default function MealDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  async function getMealDetails() {
    try {
      const data = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (!data.data.meals) {
        setError("Meal not found Please Try Another One ⚠️⚠️");
        return;
      }
      const meal = data.data.meals[0];
      setMeal(meal);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching meal details ⚠️⚠️");
    } finally {
      setLoading(false);
    }
  }
  let measure = Object.keys(meal)
    .filter((key) => key.startsWith("strMeasure") && meal[key].trim())
    .map((key) => (
      <li
        key={key}
        className="text-lg mt-4 pb-2.5  border-b-2 text-right border-b-gray-300"
      >
        {meal[key]}
      </li>
    ));
  let ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient") && meal[key])
    .map((key) => (
      <li
        key={key}
        className="text-lg mt-4 pb-2.5  border-b-2  border-b-gray-300"
      >
        {meal[key]}:
      </li>
    ));
  console.log(meal);
  useEffect(() => {
    getMealDetails();
  }, [id]);
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
      <div className=" ml-4 sm:ml-72  p-4 min-h-screen">
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col  gap-4">
            <h1 className="text-6xl mb-2.5 ">{meal.strMeal}</h1>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className=" rounded-lg "
            />
            <div className="flex gap-3 self-center">
              <Link to={meal.strYoutube} target="_blank">
                <button className="py-2.5 px-3.5 bg-red-600 text-white rounded-lg flex gap-1.5 items-center mt-5 cursor-pointer transition-all  hover:bg-red-700">
                  <FaYoutube />
                  youtube
                </button>
              </Link>
              <Link to={meal.strSource} target="_blank">
                <button className="py-2.5 px-3.5 bg-green-600 text-white rounded-lg flex gap-1.5 items-center mt-5 cursor-pointer transition-all  hover:bg-green-700">
                  <CiGlobe />
                  Source
                </button>
              </Link>
            </div>
          </div>
          <p className="  leading-relaxed ">{meal.strInstructions}</p>
          <div className="p-6 rounded-2xl bg-white h-max">
            <h2 className="text-3xl pb-2.5 font-bold border-b-2 border-b-gray-500 ">
              Ingredients
            </h2>
            <div className="flex justify-between items-center">
              <ul className="w-1/2">{ingredients}</ul>
              <ul className="w-1/2">{measure}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
