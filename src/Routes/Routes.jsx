import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        }
    ]
  },
]);