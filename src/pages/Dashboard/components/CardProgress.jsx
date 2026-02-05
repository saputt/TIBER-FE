import React from "react";
import Card from "../../../components/atoms/Card";
import { ChartBar } from "lucide-react";
import BarStep from "../../../components/atoms/BarStep";

const CardProgress = () => {
  return (
    <Card
      boxShadowActive={true}
      size="full"
      variant="white"
      className="py-4 flex flex-col gap-4"
    >
      <div className="flex gap-2 items-center">
        <div className="w-8 h-8 rounded-full bg-light-green/30 flex items-center justify-center">
          <ChartBar size={15} className="text-primary" />
        </div>
        <h4 className="text-h4">Progres Pengobatan</h4>
      </div>
      <div className="flex flex-col">
        <h2 className="font-semibold text-h2">Hari 45 dari 180</h2>
        <p className="text-h5">Sekitar seperempat perjalanan tercapai</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex">
          <BarStep isActive={true} />
        </div>
        <div className="w-full flex justify-between">
          <p className="text-h6">Mulai</p>
          <p className="text-h6">Selesai</p>
        </div>
      </div>
    </Card>
  );
};

export default CardProgress;
