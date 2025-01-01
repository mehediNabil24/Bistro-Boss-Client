import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainOutlet from "../Outlet/MainOutlet";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Shared/Order/Order";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainOutlet></MainOutlet>,
      children : [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        }
      ]
    },
  ]);