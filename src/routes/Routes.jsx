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
        loader: () =>
          fetch(
            "https://car-master-server-j2tlnm8x4-md-siam-islam-sagors-projects.vercel.app/"
          ),
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
        path: "/:productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://car-master-server-j2tlnm8x4-md-siam-islam-sagors-projects.vercel.app/${params.productDetails}/${params.id}`
          ),
      },
    ],
  },
]);

export default routes;
