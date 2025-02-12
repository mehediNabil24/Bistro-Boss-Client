import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainOutlet from "../Outlet/MainOutlet";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Shared/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashobard/Cart/Cart";
import AllUser from "../Pages/Dashobard/AllUser/AllUser";
import AddItems from "../Pages/Dashobard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashobard/ManageItems/ManageItems";

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
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [

        //normal user route
        {
          path: 'cart',
          element: <Cart></Cart>
        },

        //admin routes 
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>

        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'allUsers',
          element: <AllUser></AllUser>
        }

      ]
    }
  ]);