import { useAppSelector } from "@hooks/useRedux";
import BottomNav from "@layouts/BottomNav";
import React from "react";
import { Outlet } from "react-router-dom";

const ScreenLayout = () => {
  const { loading } = useAppSelector((s) => s.app);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-whtie">Loading...</span>
        </div>
      )}
      <div className="h-screen w-screen overflow-y-scroll relative flex flex-col bg-slate-300">
        <Outlet />
      </div>
    </>
  );
};

export default ScreenLayout;
