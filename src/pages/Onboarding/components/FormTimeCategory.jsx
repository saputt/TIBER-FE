import React, { useState } from "react";
import SelectionButton from "../../../components/atoms/SelectionButton";
import { useOnboardingStore } from "../../../store/useOnboardingStore";
import FormPersonalization from "../../../components/organism/FormPersonalization";

const FormTimeCategory = () => {
  const timeCategories = ["pagi", "siang", "sore", "malam"];

  const setFormData = useOnboardingStore((state) => state.setFormData);

  const timeCategory = useOnboardingStore(
    (state) => state.formData?.personalization?.time_category,
  );

  return (
    <FormPersonalization
      title="Kapan waktu paling nyaman bagi Anda untuk minum obat?"
      description="Informasi ini akan digunakan untuk mengirimkan pengingat minum obat sesuai jadwal Anda."
      info="Tips: Pilihlah waktu yang paling mudah diingat, misalnya sesaat setelah bangun tidur atau setelah makan, agar pengobatan menjadi bagian dari rutinitas Anda."
    >
      <div className="flex flex-col gap-2">
        <p className="text-h5 font-medium">Waktu Rutin</p>
        <div className="flex flex-col gap-2">
          {timeCategories.map((time) => (
            <SelectionButton
              key={time}
              isSelect={timeCategory === time}
              selectionName={time}
              isBoarding={true}
              className="py-3 text-h5"
              onClick={() => {
                setFormData("personalization", { time_category: time });
              }}
            />
          ))}
        </div>
      </div>
    </FormPersonalization>
  );
};

export default FormTimeCategory;
