import React from "react";
import Button from "../../components/atoms/Button";
import ButtonTest from "../../components/atoms/ButtonTest";
import SelectionButton from "../../components/atoms/SelectionButton";

const ActivityPage = () => {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-h3">Aktivitas Saya</h3>

      <div>
        <SelectionButton className="text-h6 font-light py-1">
          Halo
        </SelectionButton>
      </div>
    </div>
  );
};

export default ActivityPage;
