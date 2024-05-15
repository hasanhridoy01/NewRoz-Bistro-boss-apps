import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from '../Pages/Menu/MenuPage/Menu'
import Shop from "../Pages/Shop/ShopPage/Shop";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
          path: '/menuPage',
          element: <Menu />
        },
        {
          path: '/shopPage',
          element: <Shop />
        },
        {
          path: '/contactPage',
          element: <ContactUs />
        }
    ]
  },
]);