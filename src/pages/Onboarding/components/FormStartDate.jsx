import React, { useState } from "react";
import Input from "../../../components/atoms/Input";
import Card from "../../../components/atoms/Card";
import { Lightbulb } from "lucide-react";
import FormPersonalization from "../../../components/organism/FormPersonalization";
import { useOnboardingStore } from "../../../store/useOnboardingStore";
import InputLabel from "../../../components/molecules/InputLabel";

import { Calendar } from "lucide-react";
import DatePicker from "./DatePicker";
import { formatDateID } from "../../../utils/dateUtils";

const FormStartDate = () => {
  const setFormData = useOnboardingStore((state) => state.setFormData);
  const startDate = useOnboardingStore(
    (state) => state.formData?.personalization?.start_date
  );

  const [showDatePicker, setShowDatePicker] = useState(false);

  const formattedDate = startDate ? formatDateID(startDate) : "";

  return (
    <FormPersonalization
      title="Kapan Anda memulai pengobatan"
      description="Ini membantu kami menghitung progres perjalanan pengobatan Anda."
      info="Tahukah Anda? Pengobatan TBC biasanya berlangsung 6 - 8 bulan. Konsistensi minum obat setiap hari sangat penting untuk kesembuhan total."
    >
      <div className="flex flex-col gap-1.5">
        <span className="text-h4 font-inter">Tanggal Mulai Pengobatan</span>

        <button
          onClick={() => setShowDatePicker(true)}
          className={`w-full p-3 rounded-lg border border-gray-400 flex justify-between items-center transition-all duration-200border-gray-200 bg-gray-50 text-gray-400 hover:border-primary/50`}
        >
          <span className={`text-h5 font-medium ${startDate ? "text-black" : ""}`}>
            {formattedDate || "Pilih Tanggal Mulai"}
          </span>
          <Calendar size={20} className={startDate ? "text-primary" : "text-gray-400"} />
        </button>
      </div>

      <DatePicker
        isOpen={showDatePicker}
        onClose={() => setShowDatePicker(false)}
        onSelectDate={(date) => setFormData("personalization", { start_date: date })}
        initialDate={startDate}
      />
    </FormPersonalization>
  );
};

export default FormStartDate;
