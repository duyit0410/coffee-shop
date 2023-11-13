import Welcome from "@pages/Welcome";
import ScreenLayout from "./ScreenLayout";
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import PageHome from "@pages/PageHome";
import PageProfile from "@pages/PageProfile";
import SettingPage from "@pages/SettingPage";

const router = createHashRouter([
  {
    element: <ScreenLayout />,
    children: [
      { path: "/", element: <PageHome /> },
      { path: "/welcome", element: <Welcome /> },
      { path: "/home", element: <PageHome /> },
      { path: "/profile", element: <PageProfile /> },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
