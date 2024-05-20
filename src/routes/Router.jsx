import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home"
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "menu",
          element: <Menu></Menu>,
        },
        {
          path: "order/:category",
          element: <Order></Order>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
        
      ],
  },
]);

