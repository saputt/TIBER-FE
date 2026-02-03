import React from "react";
import InputSelect from "./inputSelect";
import Input from "../atoms/Input";

const InputLabel = ({
  label,
  variantInput,
  variantLabel,
  variant,
  type,
  placeholder,
  size,
  className,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {variantLabel == "normal" && (
        <span className="text-h4 font-inter">{label}</span>
      )}
      {variantLabel == "medium" && (
        <span className="text-h4 font-medium font-inter">{label}</span>
      )}
      {variantInput == "select" && (
        <InputSelect variant={variant} placeholder={placeholder} />
      )}
      {variantInput == "input" && (
        <Input
          variant={variant}
          placeholder={placeholder}
          type={type}
          className={className}
          onChange={onChange}
          size={size}
        />
      )}
    </div>
  );
};

export default InputLabel;
