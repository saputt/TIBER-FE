import React from "react";
import Card from "../atoms/Card";
import { Lightbulb } from "lucide-react";

const FormPersonalization = ({ title, description, info, children }) => {
  const infoSeparated = info.split("?" || ":");
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h3 className="text-h3 font-bold text-wrap w-70 font-jakarta">
          {title}
        </h3>
        <p className="text-h5 w-70">{description}</p>
        <Card variant="Blue" size="full" className="flex gap-2">
          <Lightbulb className="text-light-yellow w-12" />
          <p className="font-light text-h5">
            <span className="font-semibold text-dark-blue">
              {infoSeparated[0]}
            </span>
            {infoSeparated[1]}
          </p>
        </Card>
      </div>

      {children}
    </div>
  );
};

export default FormPersonalization;
