import React from "react";

// script onclick dll

const Input = ({
  type = "text",
  name,
  id,
  placeholder = "placeholder...",
  className,
  width = "100%",
  height = "42px",
  padding = "0px 16px",
  radiusBorder = "8px",
  border = "1px solid #0000004D",
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${className}`}
      style={{
        height: height,
        width: width,
        padding: padding,
        borderRadius: radiusBorder,
        border: border,
      }}
    />
  );
};

export default Input;
