import { Circle, CircleCheck } from "lucide-react";
import React, { useState } from "react";

const CheckboxCircle = ({ isActive }) => {
  const defaultDesign =
    "rounded-full p-2 flex justify-center items-center inline-block";
  return (
    <>
      {isActive && (
        <div className={`${defaultDesign} bg-primary`}>
          <CircleCheck className="text-white w-4 h-4" />
        </div>
      )}

      {!isActive && (
        <div className={`${defaultDesign} bg-gray-200`}>
          <Circle className="text-gray-400 w-4 h-4" />
        </div>
      )}
    </>
  );
};

export default CheckboxCircle;
