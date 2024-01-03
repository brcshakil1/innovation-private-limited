import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "./../pages/Home/Home";
import Login from "./../pages/Login/Login";
import PrivetRoute from "./PrivetRoute";

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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
