import React, { Children } from "react";
import Navbar from "../organism/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();

  const types = {
    "/dashboard": "main",
    "/": "landing",
    "/activity": "sub",
    "/profile": "sub",
  };

  return (
    <div className="font-inter">
      <Navbar variant={types[location.pathname]} />

      <main className="p-8 ">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
