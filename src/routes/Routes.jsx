import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import BrandProduct from "../pages/BrandProduct/BrandProduct";
import AddProduct from "../pages/AddProduct/AddProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
            "https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app/"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
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
        path: "/updateProduct",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/:productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app/${params.productDetails}/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        loader: () =>
          fetch(
            "https://car-master-server-gcimpo0ow-md-siam-islam-sagors-projects.vercel.app/cart_items"
          ),
      },
    ],
  },
]);

export default routes;
