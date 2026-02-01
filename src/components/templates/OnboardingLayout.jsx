import React from "react";
import Navbar from "../organism/Navbar";
import Button from "../atoms/Button";
import ButtonTest from "../atoms/ButtonTest";
import { ArrowRight } from "lucide-react";

const OnboardingLayout = ({ step, children }) => {
  return (
    <div className="bg-gray-100">
      <Navbar variant="setup" step={step} />

      <main>
        <section>{children}</section>

        <footer className="bg-white sticky bottom-0 px-6 py-3 border-t-1 border-gray-200">
          <ButtonTest
            variant="primary"
            size="full"
            className="flex items-center gap-3"
          >
            <p className="font-bold text-h4">Lanjut</p>
            <ArrowRight className="w-15 text-white" />
          </ButtonTest>
        </footer>
      </main>
    </div>
  );
};

export default OnboardingLayout;
