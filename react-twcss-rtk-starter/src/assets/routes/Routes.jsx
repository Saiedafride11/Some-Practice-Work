import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";
import About from "../page/About/About.jsx";
import Home from "../page/Home/Home.jsx";
import Login from "../page/Login/Login.jsx";
import NotFound from "../page/NotFound/NotFound.jsx";
import Products from "../page/Products/Products.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      // {
      //   path: '/product-details/:id',
      //   element: <ProductDetails />,
      // },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
