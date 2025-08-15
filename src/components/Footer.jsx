import logo from "../assets/logo.png";
export default function Footer() {
  return (
    <footer className="bg-white z-[42] relative">
      <div class="container  mx-auto p-4 max-w-screen-xl flex justify-between border-b-2 border-b-gray-200 pb-5 items-center">
        <div className="flex items-center">
          <img src={logo} alt="Recipe Logo" className="w-10" />
          <h2 className="ml-2.5 text-2xl font-bold">Recipe</h2>
        </div>
        <span className="text-blue-600 text-2xl font-bold">Route</span>
      </div>
      <div className="text-center text-gray-500 text-sm py-2 my-4">
        © 2025 Nagy Osama™. All Rights Reserved.
      </div>
    </footer>
  );
}
