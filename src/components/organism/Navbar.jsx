import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import MobileNav from "./NavbarComponents/MobileNav";

const Navbar = ({ variant }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const bgColor =
    variant === "main" || variant === "sub" ? "bg-primary/15" : "bg-white";

  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  useEffect(() => {
    if (hamburgerIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hamburgerIsOpen]);

  return (
    <>
      <header
        className={`${bgColor} p-2 font-inter border-b-1 border-gray-400 sticky top-0 w-full backdrop-blur-3xl z-100`}
      >
        <MobileNav
          variant={variant}
          navigate={navigate}
          location={location}
          hamburgerIsOpen={hamburgerIsOpen}
          setHamburgerIsOpen={setHamburgerIsOpen}
        />
      </header>


      {variant === "landing" && hamburgerIsOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300 ease-in-out"
          onClick={() => setHamburgerIsOpen(false)}
        />
      )}

      {variant === "landing" && (
        <div
          className={`fixed top-0 left-0 pt-[52.8px] px-2 w-full ${bgColor} rounded-b-xl z-50 transform transition-transform duration-500 ease-in-out ${hamburgerIsOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex flex-col">
            <Link
              className="p-4 font-inter text-h5 text-black/70 text-left"
              to="/about"
              onClick={() => {setHamburgerIsOpen(false)}}
            >
              Tentang TIBER
            </Link>
            <Link
              className="p-4 font-inter text-h5 text-black/70 text-left border-b border-black/30"
              to="/hows-it-work"
              onClick={() => {setHamburgerIsOpen(false)}}
            >
              Cara Kerja
            </Link>
            <Link
              className="p-4 font-inter text-h5 text-black/70 text-left"
              to="/login"
              onClick={() => {setHamburgerIsOpen(false)}}
            >
              Masuk
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
