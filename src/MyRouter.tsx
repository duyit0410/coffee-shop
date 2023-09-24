
import Register from "@pages/Register";
import ScreenLayout from "./ScreenLayout";
import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";


const router = createHashRouter([
  {
    element: <ScreenLayout />,
    children: [
      {
        path: '/register',
        element: <Register/>
      }
  ],
  },
]);

const MyRouter = () => {
  return <RouterProvider router={router} />;
};

export default MyRouter;
