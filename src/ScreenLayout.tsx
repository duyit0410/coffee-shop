import React from "react";
import { Outlet } from "react-router-dom";

const ScreenLayout = () => {
  return (
    <div className="h-full relative flex flex-col">
      <Outlet />
    </div>
  );
};

export default ScreenLayout;
