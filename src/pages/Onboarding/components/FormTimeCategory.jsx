import React, { useState } from "react";
import SelectionButton from "../../../components/atoms/SelectionButton";
import { useOnboardingStore } from "../../../store/useOnboardingStore";
import FormPersonalization from "../../../components/organism/FormPersonalization";

const FormTimeCategory = () => {
  const [selectTime, setSelectTime] = useState();

  const timeCategory = ["Pagi", "Siang", "Sore", "Malam"];

  const setFormData = useOnboardingStore((state) => state.setFormData);

  const formData = useOnboardingStore((state) => state.formData);
  console.log(formData);
  return (
    <FormPersonalization
      title="Kapan waktu paling nyaman bagi Anda untuk minum obat?"
      description="Informasi ini akan digunakan untuk mengirimkan pengingat minum obat sesuai jadwal Anda."
      info="Tips: Pilihlah waktu yang paling mudah diingat, misalnya sesaat setelah bangun tidur atau setelah makan, agar pengobatan menjadi bagian dari rutinitas Anda."
    >
      <div className="flex flex-col gap-2">
        <p className="text-h5 font-medium">Waktu Rutin</p>
        <div className="flex flex-col gap-2">
          {timeCategory.map((time) => (
            <SelectionButton
              key={time}
              isSelect={selectTime === time}
              selectionName={time}
              isBoarding={true}
              className="py-2"
              onClick={() => {
                setSelectTime(time);
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
