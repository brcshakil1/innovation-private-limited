import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import PrivetRoute from "./PrivetRoute";
import Cart from "../pages/Cart/Cart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivetRoute>
            <Home />
          </PrivetRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivetRoute>
            <Cart />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
