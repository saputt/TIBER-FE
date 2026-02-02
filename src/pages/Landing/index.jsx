import React, { useState } from "react";
import ButtonTest from "../../components/atoms/ButtonTest";
import Navbar from "../../components/organism/Navbar";
import OnboardingLayout from "../../components/templates/OnboardingLayout";
import DashboardPage from "../Dashboard";
import FormStartDate from "../Onboarding/components/FormStartDate";

const LandingPage = () => {
  return (
    <div>
      <FormStartDate />
    </div>
  );
};

export default LandingPage;
