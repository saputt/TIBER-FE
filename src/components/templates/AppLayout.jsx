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
    "/about": "about",
    "/information-user": "info",
    "/hows-it-work": "hows",
  };

  return (
    <div className="font-inter">
      <Navbar variant={types[location.pathname]} />

      <main className="p-8 bg-gray-50 relative">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
