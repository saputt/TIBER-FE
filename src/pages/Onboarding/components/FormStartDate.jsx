import React, { useState } from "react";
import Input from "../../../components/atoms/Input";
import Card from "../../../components/atoms/Card";
import { Lightbulb } from "lucide-react";
import FormPersonalization from "../../../components/organism/FormPersonalization";
import { useOnboardingStore } from "../../../store/useOnboardingStore";
import InputLabel from "../../../components/molecules/InputLabel";

const FormStartDate = () => {
  const setFormData = useOnboardingStore((state) => state.setFormData);
  const formData = useOnboardingStore((state) => state.formData);

  return (
    <FormPersonalization
      title="Kapan Anda memulai pengobatan"
      description="Ini membantu kami menghitung progres perjalanan pengobatan Anda."
      info="Tahukah Anda? Pengobatan TBC biasanya berlangsung 6 - 8 bulan. Konsistensi minum obat setiap hari sangat penting untuk kesembuhan total."
    >
      <InputLabel
        label="Tanggal Mulai Pengobatan"
        variant="gray"
        onChange={() =>
          setFormData("personalization", { start_date: e.target.value })
        }
        placeholder="DD/MM/YYYY"
      />
    </FormPersonalization>
  );
};

export default FormStartDate;
