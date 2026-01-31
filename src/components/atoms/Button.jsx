import React from "react";

const Button = ({
  children,
  type,
  name,
  id,
  className,
  backgroundColor = "#4EA9A2",
  width = "100%",
  height = "42px",
  radiusBorder = "8px",
  textColor = "#FFFFFF",
  fontSize = "12px",
  fontWeight = "800",
  boxShadow = "10px 10px 20px 0px #0000001A",
  onClick,
}) => {
  return (
    <button
      type={type}
      name={name}
      id={id}
      className={`cursor-pointer transition-all duration-200 hover:opacity-80 ${className}`}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: radiusBorder,
        color: textColor,
        fontSize: fontSize,
        fontWeight: fontWeight,
        boxShadow: boxShadow,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
