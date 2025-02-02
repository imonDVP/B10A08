import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductCart from "../components/ProductCart";
import CardDetails from "../pages/CardDetails";
import Statistics from "../components/Statistics";
import About from "../components/About";
import NotFound from "../components/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",

        element: <Home />,

        loader: () => fetch("../categories.json"),

        children: [
          {
            path: "/", // This is the correct way to define the child route
            element: <ProductCart />,
            loader:()=> fetch("../data.json")
            
          },
          {
            path: "/category/:category", // This is the correct way to define the child route
            element: <ProductCart />,
            loader:()=> fetch("../data.json")
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader:()=> fetch("../data.json")
      },
      
      {
        path: "/card/:id",
        element: <CardDetails />,
        loader:()=> fetch("../data.json")
      },


      {
        path: "/statistics",
        element: <Statistics/>,
      
      },
      {
        path: "/about",
        element: <About/>,
      
      },
    ],
  },
]);

export default routes;
