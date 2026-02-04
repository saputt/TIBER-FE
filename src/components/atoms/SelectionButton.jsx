import { CircleCheck } from "lucide-react";
import React from "react";

const SelectionButton = ({
  children,
  isSelect,
  selectionName,
  className,
  onClick,
}) => {
  const defaultStyle = " text-center cursor-pointer";

  let style;

  if (isSelect) {
    style = "bg-primary/30 border-primary flex items-center px-5";
  } else if (!isSelect) {
    style = "bg-white border-gray-400 border-1 px-5";
  }
  return (
    <>
      {isSelect && (
        <button
          className={`${style} ${defaultStyle} ${className}`}
          onClick={onClick}
          value={selectionName}
        >
          {children}
        </button>
      )}

      {!isSelect && (
        <button
          className={`${style} ${defaultStyle} ${className}`}
          onClick={onClick}
          value={selectionName}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default SelectionButton;
