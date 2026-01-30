import { CircleCheck } from "lucide-react";
import React, { useState } from "react";

const CheckboxCircle = () => {
  const [active, setActive] = useState(true);
  const defaultDesign =
    "rounded-full w-10 aspect-square bg-gray-50 p-1 flex justify-center items-center";
  return (
    <>
      {active && (
        <div className={defaultDesign}>
          <CircleCheck size={20} className="text-primary" />
        </div>
      )}

      {!active && <div></div>}
    </>
  );
};

export default CheckboxCircle;
