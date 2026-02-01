import React, { useState } from "react";
import Navbar from "../organism/Navbar";
import Button from "../atoms/Button";
import ButtonTest from "../atoms/ButtonTest";
import { ArrowRight } from "lucide-react";
import { useOnboardingStore } from "../../store/useOnboardingStore";

const OnboardingLayout = ({ children }) => {
  const nextStep = useOnboardingStore((state) => state.nextStep);
  const backStep = useOnboardingStore((state) => state.backStep);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar variant="setup" />

      <main className="flex-1 flex flex-col">
        <section className="flex-1 flex flex-col overflow-y-auto px-3 py-4">
          <h3 className="text-h3 font-bold">{}</h3>
          {children}
        </section>
        <footer className="bg-white sticky bottom-0 px-3 py-2 border-t-1 border-gray-200">
          <ButtonTest
            variant="primary"
            size="full"
            className="flex justify-center items-center gap-1"
          >
            <p className="font-bold text-h4">Lanjut</p>
            <ArrowRight size={15} className="text-white" />
          </ButtonTest>
        </footer>
      </main>
    </div>
  );
};

export default OnboardingLayout;
