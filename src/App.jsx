import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import MealDetails from "./components/MealDetails";
import Category from "./components/Category";
function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/category/:name",
          element: <Category />,
        },
        {
          path: "/mealdetails/:id",
          element: <MealDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
