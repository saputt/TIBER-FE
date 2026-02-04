import { CircleCheck, CircleCheckBig } from "lucide-react";
import React from "react";

const SelectionButton = ({
  isSelect,
  selectionName,
  className,
  onClick,
  isBoarding,
}) => {
  const defaultStyle = " text-center cursor-pointer";

  let style;

  if (isSelect && isBoarding) {
    style = "bg-primary/30 border-primary flex items-center px-5";
  } else if (isSelect) {
    style = "bg-primary px-5 text-white";
  } else if (!isSelect) {
    style = "bg-white border-gray-400 border-1 px-5";
  }
  return (
    <>
      {isSelect && isBoarding && (
        <button
          className={`${style} ${defaultStyle} ${className} flex justify-center items-center relative`}
          onClick={onClick}
          value={selectionName}
        >
          <p>{selectionName}</p>
          <CircleCheckBig size={25} className="text-primary absolute right-3" />
        </button>
      )}

      {isSelect && (
        <button
          className={`${style} ${defaultStyle} ${className}`}
          onClick={onClick}
          value={selectionName}
        >
          <p>{selectionName}</p>
        </button>
      )}

      {!isSelect && (
        <button
          className={`${style} ${defaultStyle} ${className}`}
          onClick={onClick}
          value={selectionName}
        >
          {selectionName}
        </button>
      )}
    </>
  );
};

export default SelectionButton;
