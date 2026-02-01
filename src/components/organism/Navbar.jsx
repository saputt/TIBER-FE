import { ArrowLeft, Menu, SquareChartGantt, User, X } from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//navigation layout for mobile
const MobileNav = ({ variant, navigate, location, step }) => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  console.log(hamburgerIsOpen);
  return (
    <nav className="flex items-center gap-2">
      {/* left section */}
      <div>
        {variant === "landing" || variant === "main" ? (
          <img src="/logo.png" className="w-9" onClick={() => navigate("/")} />
        ) : (
          <ArrowLeft
            size={20}
            className="text-primary"
            onClick={() => navigate(-1)}
          />
        )}
      </div>

      {/* middle section */}
      <div className="flex-1">
        {variant === "landing" && (
          <h1 className="text-primary text-h2 font-bold">TIBER</h1>
        )}

        {variant === "main" && (
          <h1 className="text-primary text-h2 font-bold">TIBER</h1>
        )}

        {variant === "setup" && (
          <h1 className="text-h2 font-semibold">Personalisasi</h1>
        )}

        {variant === "info" && (
          <h1 className="text-primary text-center font-bold text-h2">
            Informasi Pengguna
          </h1>
        )}

        {variant === "sub" && (
          <img
            src="/logo.png"
            className="w-9 m-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
        )}
      </div>

      {/* right section */}
      <div>
        {variant === "landing" &&
          (hamburgerIsOpen ? (
            <X
              className="w-10 text-primary cursor-pointer"
              onClick={() => setHamburgerIsOpen(false)}
            />
          ) : (
            <Menu
              className="w-10 text-primary cursor-pointer"
              onClick={() => setHamburgerIsOpen(true)}
            />
          ))}

        {variant === "info" && <img src="/logo.png" className="w-9" />}

        {variant === "main" && (
          <div className="flex gap-4">
            <SquareChartGantt
              className="w-6 text-primary cursor-pointer"
              onClick={() => navigate("/activity")}
            />
            <User
              className="w-6 text-primary cursor-pointer"
              onClick={() => navigate("/profile")}
            />
          </div>
        )}

        {variant === "sub" &&
          (location.pathname === "activity" ? (
            <User
              className="w-6 text-primary cursor-pointer"
              onClick={() => navigate("/profile")}
            />
          ) : (
            <SquareChartGantt
              className="w-6 text-primary cursor-pointer"
              onClick={() => navigate("/activity")}
            />
          ))}

        {variant === "setup" && (
          <p className="text-h5 font-light">
            Langkah {step.currentStep} dari {step.totalStep}
          </p>
        )}
      </div>
    </nav>
  );
};

const DekstopNav = ({ variant }) => {};

const Navbar = ({ variant, step }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const bgColor =
    variant === "main" || variant === "sub" ? "bg-primary/15" : "bg-white";
  return (
    <header className={`${bgColor} p-2 font-inter border-b-1 border-gray-400`}>
      <MobileNav
        step={step}
        variant={variant}
        navigate={navigate}
        location={location}
      />
      <DekstopNav variant={variant} />
    </header>
  );
};

export default Navbar;
