import { ArrowLeft, Menu, SquareChartGantt, User, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useOnboardingStore } from "../../store/useOnboardingStore";

//navigation layout for mobile
const MobileNav = ({ variant, navigate, location, hamburgerIsOpen, setHamburgerIsOpen }) => {

  const step = useOnboardingStore((state) => state.step);
  const totalStep = useOnboardingStore((state) => state.totalStep);
  const backStep = useOnboardingStore((state) => state.backStep);
  const setMaxStep = useOnboardingStore((state) => state.setMaxStep);

  const backStepSetup = () => {
    if (step === 1) {
      navigate("/");
    } else {
      backStep();
    }
  };

  return (
    <nav className="flex items-center gap-2">
      {/* left section */}
      <div>
        {variant === "landing" || variant === "main" ? (
          <img
            src="/logo.png"
            className="w-9"
            onClick={() => navigate("/dashboard")}
          />
        ) : variant === "setup" ? (
          <ArrowLeft
            size={20}
            className="text-primary"
            onClick={() => backStepSetup()}
          />
        ) : variant === "sub" ? (
          <ArrowLeft
            size={20}
            className="text-primary"
            onClick={() => navigate("/dashboard")}
          />
        ) : (
          variant === "regist" && (
            <ArrowLeft
              size={20}
              className="text-primary"
              onClick={() => {
                setMaxStep();
                navigate("/onboarding");
              }}
            />
          )
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

        {variant === "regist" && (
          <h1 className="text-h2 font-semibold">Buat Akun</h1>
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
            onClick={() => navigate("/dashboard")}
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
          (location.pathname.includes("activity") ? (
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
            Langkah {step} dari {totalStep}
          </p>
        )}
      </div>
    </nav>
  );
};

const DekstopNav = ({ variant }) => {};

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
  }, [hamburgerIsOpen])
  
  return (
    <>
      <header
        className={`${bgColor} p-2 font-inter border-b-1 border-gray-400 sticky top-0 w-full backdrop-blur-3xl z-100`}
      >
        <MobileNav variant={variant} navigate={navigate} location={location} hamburgerIsOpen={hamburgerIsOpen} setHamburgerIsOpen={setHamburgerIsOpen}/>
        <DekstopNav variant={variant} />
      </header>

      {variant === "landing" && hamburgerIsOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300 ease-in-out" onClick={() => setHamburgerIsOpen(false)} />
      )}

      {variant === "landing" && (
        <div className={`fixed top-0 left-0 pt-[52.8px] px-2 w-full ${bgColor} rounded-b-xl z-50 transform transition-transform duration-500 ease-in-out ${hamburgerIsOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex flex-col">
            <Link className="p-4 font-inter text-h5 text-black/70 text-left" to="/about">Tentang TIBER</Link>
            <Link className="p-4 font-inter text-h5 text-black/70 text-left border-b border-black/30" to="/hows-it-work">Cara Kerja</Link>
            <Link className="p-4 font-inter text-h5 text-black/70 text-left" to="/login">Masuk</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
