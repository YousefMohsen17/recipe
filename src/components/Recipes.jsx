import { FaEarthAfrica } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Recipes({ recipes }) {
  return (
    <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-20">
      {recipes &&
        recipes.map((recipe) => {
          return (
            <div
              key={recipe.idMeal}
              className="flex flex-col gap-y-2.5 p-10 items-center bg-white rounded-[35px] hover:scale-105 transition-all shadow-lg duration-500 group"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className=" w-3xs rounded-full -translate-y-20 shadow-xl group-hover:rotate-360 transition-all duration-500"
              />

              <span className="font-bold  text-2xl -mt-12">
                {recipe.strMeal.split(" ").slice(0, 2).join(" ")}
              </span>
              {recipe.strArea && (
                <p className="text-green-500 flex items-center gap-2.5 ">
                  <FaEarthAfrica />
                  {recipe.strArea}
                </p>
              )}
              <Link className="" to={`/mealdetails/${recipe.idMeal}`}>
                <button
                  className="bg-green-500 text-white px-4 py-2 font-semibold rounded-full 
              cursor-pointer
            transition-all
            hover:scale-105 hover:bg-green-700"
                >
                  View Recipe
                </button>
              </Link>
            </div>
          );
        })}
    </ul>
  );
}
