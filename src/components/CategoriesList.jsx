import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
export default function CategoriesList() {
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  async function getCategories() {
    try {
      const data = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const categories = data.data.categories;
      setCategories(categories);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getCategories();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader />
      </div>
    );
  }
  function handleChange(e) {
    const category = e.target.value;
    navigate("/category/" + category);
  }
  return (
    <>
      <h1 className="text-4xl font-bold  bg-gradient-to-r from-[#ff940e] via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent mb-10 ">
        Learn, Cook, Eat Your Food
      </h1>
      <ul className="sm:flex hidden   gap-5 flex-wrap mb-32 ">
        <li>
          <NavLink
            className="  bg-[#f4f2ee] 
               hover:bg-white
              border-2 border-gray-300 py-2 shadow-md px-4 rounded-full 
              transition-all"
            to="/"
          >
            All
          </NavLink>
        </li>
        {categories &&
          categories.map((category) => {
            return (
              <li
                key={category.idCategory}
                className="transition-all hover:scale-105 mb-4"
              >
                <NavLink
                  className="bg-[#f4f2ee] hover:bg-white border-2 border-gray-300 py-2 shadow-md px-4 rounded-full transition-all "
                  to={`/category/${category.strCategory}`}
                >
                  {category.strCategory}
                </NavLink>
              </li>
            );
          })}
      </ul>
      <select
        className="w-full mb-32 sm:hidden bg-white p-3"
        name="categories"
        id="categories"
        onChange={handleChange}
      >
        {categories &&
          categories.map((category) => {
            return (
              <option value={category.strCategory} key={category.idCategory}>
                {category.strCategory}
              </option>
            );
          })}
      </select>
    </>
  );
}
