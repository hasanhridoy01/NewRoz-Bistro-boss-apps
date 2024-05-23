import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/MenuPage/Menu";
import Shop from "../Pages/Shop/ShopPage/Shop";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/AuthPages/Login/Login";
import Registration from "../Pages/AuthPages/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menuPage",
        element: (
          <PrivateRoutes>
            <Menu />
          </PrivateRoutes>
        )
      },
      {
        path: "/shopPage",
        element: (
          <PrivateRoutes>
            <Shop />
          </PrivateRoutes>
        ),
      },
      {
        path: "/contactPage",
        element: (
          <PrivateRoutes>
            <ContactUs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);
