import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";

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
        }
    ]
  },
]);