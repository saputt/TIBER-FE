import React, { useState } from "react";
import Input from "../../../components/atoms/Input";
import Card from "../../../components/atoms/Card";
import { Lightbulb } from "lucide-react";
import FormPersonalization from "../../../components/organism/FormPersonalization";
import { useOnboardingStore } from "../../../store/useOnboardingStore";

const FormStartDate = () => {
  const setFormData = useOnboardingStore((state) => state.setFormData);
  const formData = useOnboardingStore((state) => state.formData);

  return (
    <FormPersonalization
      title="Kapan Anda memulai pengobatan"
      description="Ini membantu kami menghitung progres perjalanan pengobatan Anda."
      info="Tahukah Anda? Pengobatan TBC biasanya berlangsung 6 - 8 bulan. Konsistensi minum obat setiap hari sangat penting untuk kesembuhan total."
    >
      <div>
        <p className="text-h5 font-medium">Tanggal Mulai Pengobatan</p>
        <Input
          type="date"
          variant="white"
          size="full"
          placeholder="DD/MM/YYYY"
          onChange={(e) =>
            setFormData("personalization", { start_date: e.target.value })
          }
        />
      </div>
    </FormPersonalization>
  );
};

export default FormStartDate;
