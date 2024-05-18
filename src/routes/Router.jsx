import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home"
import Menu from "../pages/menu/Menu";

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
      ],
  },
]);

