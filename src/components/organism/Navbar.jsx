import { ArrowLeft } from "lucide-react";
import React from "react";

const Navbar = ({ variant }) => {
  // variant = landing, tentang, personalisasi, dashboard, dashboard2
  //landing, main, sub, info, setup
  return (
    <header>
      <nav>
        <div>
          {variant === "landing" && variant === "main" ? (
            <img src="/logo.png" />
          ) : (
            <ArrowLeft size={20} className="text-primary" />
          )}
        </div>
        <div></div>
        <div></div>
      </nav>
    </header>
  );
};

export default Navbar;
