import Logo from "../assets/logo.png";
import { GiMeal } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { useRef } from "react";

export default function SideBar() {
  const sidebarRef = useRef();
  const overlayRef = useRef();
  function handleClick() {
    sidebarRef.current.classList.toggle("-translate-x-full");
    overlayRef.current.classList.toggle("hidden");
  }
  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 sm:hidden text-3xl text-gray-700 cursor-pointer"
        onClick={handleClick}
      >
        <RiMenu2Fill />
      </button>

      <aside
        ref={sidebarRef}
        className="fixed top-0 left-0 w-64 z-[41] -translate-x-full sm:translate-x-0 bg-white h-screen p-3"
      >
        <img src={Logo} alt="Recipe Logo" />
        <ul>
          <Link to="/">
            <li className="text-white font-bold text-2xl bg-orange-400 cursor-pointer transition-all rounded-md flex gap-3.5 items-center px-4 py-2.5 mb-6 shadow-lg shadow-orange-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-50">
              <GiMeal />
              Meals
            </li>
          </Link>
          <li className="text-black font-bold text-2xl bg-white border-2 border-gray-300 cursor-pointer transition-all rounded-md flex gap-3.5 items-center px-4 py-2.5 mb-6  hover:scale-105 hover:shadow-xl hover:shadow-orange-50">
            <GiMeal />
            <a href="#">Ingredients</a>
          </li>
          <li className="text-black font-bold text-2xl bg-white border-2 border-gray-300 cursor-pointer transition-all rounded-md flex gap-3.5 items-center px-4 py-2.5 mb-6  hover:scale-105 hover:shadow-xl hover:shadow-orange-50">
            <GiMeal />
            <a href="#">Area</a>
          </li>
        </ul>
      </aside>
      <div
        ref={overlayRef}
        class="fixed top-0 left-0 w-full h-full hidden z-[40] bg-black opacity-50"
      ></div>
    </>
  );
}
