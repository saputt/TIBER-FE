import React, { useState } from "react";
import OnboardingLayout from "../../components/templates/OnboardingLayout";
import FormStartDate from "./components/FormStartDate";
import FormDuration from "./components/FormDuration";
import FormTimeCategory from "./components/FormTimeCategory";
import { useOnboardingStore } from "../../store/useOnboardingStore";
import FormControl from "./components/FormControl";
import FormReminder from "./components/FormReminder";

const OnboardingPage = () => {
  const step = useOnboardingStore((state) => state.step);
  const formData = useOnboardingStore((state) => state.formData);
  console.log(formData);
  const formStep = {
    1: <FormStartDate />,
    2: <FormDuration />,
    3: <FormTimeCategory />,
    4: <FormControl />,
    5: <FormReminder />,
  };
  return <OnboardingLayout>{formStep[step]}</OnboardingLayout>;
};

export default OnboardingPage;
