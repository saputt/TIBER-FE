import React, { useState } from "react";
import SelectionButton from "../../../components/atoms/SelectionButton";
import { useOnboardingStore } from "../../../store/useOnboardingStore";

const SelectOption = ({ options }) => {
  const [isSelect, setIsSelect] = useState();
  const setForm = useOnboardingStore((state) => state.setForm);

  return (
    <div>
      <div>
        <h3 className="text-h3 text-primary font-medium">Pilih Rentang</h3>
      </div>

      <div className="flex flex-col px-4 py-2 gap-2">
        {options.map((option) => (
          <SelectionButton
            selectionName={option.name}
            isSelect={isSelect === option.name}
            onClick={() => {
              setIsSelect(option.name);
              setForm("personalization", { control_freq_unit: option.name });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectOption;
