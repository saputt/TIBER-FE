import React from "react";

const Input = ({ type, placeholder, variant, size, className, boxShadowActive, onChange }) => {
  const defaultStyle = "rounded-lg px-2.5 py-2.5 focus:outline-black font-inter";

  const variants = {
    white: "bg-white text-black border-1 border-gray-400",
    gray: "bg-bg-gray-50 text-black border-1 border-gray-400",
    whiteNoBorder: "bg-white text-black border-none",
    grayNoBorder: "bg-bg-gray-50 text-black border-none",
  };

  const sizes = {
    sm: "w-[40%]",
    md: "w-[80%]",
    full: "w-full",
  };

  const boxShadow = boxShadowActive ? "shadow-input" : "";

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${sizes[size]} ${variants[variant]} ${defaultStyle} ${className} ${boxShadow}`}
      onChange={onChange}
    />
  );
};

export default Input;
