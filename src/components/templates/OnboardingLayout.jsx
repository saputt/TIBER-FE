import Navbar from "../organism/Navbar";
import ButtonTest from "../atoms/ButtonTest";
import { ArrowRight } from "lucide-react";
import { useOnboardingStore } from "../../store/useOnboardingStore";
import { useLocation, useNavigate } from "react-router-dom";

const OnboardingLayout = ({ children }) => {
  const navigate = useNavigate();

  const nextStep = useOnboardingStore((state) => state.nextStep);
  const step = useOnboardingStore((state) => state.step);

  const location = useLocation();

  const nextStepSetup = () => {
    if (step === 5) {
      navigate("/register");
    } else {
      nextStep();
    }
  };
  return (
    <div className="bg-gray-100 h-screen flex flex-col font-inter">
      <Navbar
        variant={location.pathname.includes("register") ? "regist" : "setup"}
      />

      <main className="flex-1 flex flex-col relative">
        <div></div>

        <section className="flex-1 flex flex-col overflow-y-auto px-4 py-5">
          {children}
        </section>

        {!location.pathname.includes("register") && (
          <footer className="bg-white px-3 py-2 border-t-1 border-gray-200">
            <ButtonTest
              variant="primary"
              size="full"
              className="flex justify-center items-center gap-1"
              onClick={() => nextStepSetup()}
            >
              <p className="font-bold text-h4">Lanjut</p>
              <ArrowRight size={15} className="text-white" />
            </ButtonTest>
          </footer>
        )}
      </main>
    </div>
  );
};

export default OnboardingLayout;
