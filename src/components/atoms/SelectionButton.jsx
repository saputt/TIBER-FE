import { CircleCheck } from "lucide-react";
import React from "react";

const SelectionButton = ({ isSelect, selectionName, className, onClick }) => {
  const defaultStyle =
    "rounded-lg text-h4 border-1 w-full py-3 text-center cursor-pointer";

  let style;

  if (isSelect) {
    style = "bg-primary/30 border-primary flex items-center px-5";
  } else if (!isSelect) {
    style = "bg-white border-gray-400";
  }
  return (
    <>
      {isSelect && (
        <button
          className={`${style} ${defaultStyle} ${className}`}
          onClick={onClick}
          value={selectionName}
        >
          <p className="flex-1">{selectionName}</p>
          <CircleCheck size={25} className="text-primary" />
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
