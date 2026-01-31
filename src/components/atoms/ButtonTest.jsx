import React from "react";

const ButtonTest = ({ variant, size, children, className }) => {
  const defaultStyle = "rounded-lg";

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-primary/50",
    gray: "bg-gray-100 border-1 border-gray-200",
    white: "bg-white border-1 border-gray-200",
  };

  const sizes = {
    sm: "py-3 px-10",
    md: "w-[80%] py-3",
    full: "w-full py-3",
  };

  return (
    <button
      className={`${sizes[size]} ${variants[variant]} ${defaultStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonTest;
