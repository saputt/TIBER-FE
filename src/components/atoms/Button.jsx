import React from "react";

const Button = ({ variant, size, children, className, boxShadowActive, onClick }) => {
  const defaultStyle = "rounded-lg font-inter";
  
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
  
  const boxShadow = boxShadowActive ? "shadow-button" : "";

  return (
    <button
      className={`${sizes[size]} ${variants[variant]} ${defaultStyle} ${className} ${boxShadow}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
