import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import BrandProduct from "../pages/BrandProduct/BrandProduct";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/"),
      },
      {
        path: "/brand",
        element: <BrandProduct></BrandProduct>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default routes;
