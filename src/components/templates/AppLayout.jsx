import React, { Children } from "react";
import Navbar from "../organism/Navbar";
import Sidebar from "../organism/Sidebar";
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
    "/hows-it-work": "how",
    "/profile/settings": "main",
  };

  const isLanding = location.pathname === "/";

  return (
    <div className="font-inter min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {!isLanding && (
        <Sidebar className="hidden lg:flex flex-shrink-0 sticky top-0 h-screen" />
      )}

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <div className={!isLanding ? "lg:hidden" : ""}>
          <Navbar variant={types[location.pathname]} />
        </div>

        <main className="p-4 lg:px-32 lg:py-10 bg-gray-50 flex-1 overflow-y-auto relative pb-24 lg:pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
