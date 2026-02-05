import React from "react";
import Card from "../../../components/atoms/Card";
import { Sparkle } from "lucide-react";

const CardJourney = () => {
  return (
    <Card
      variant="white"
      size="full"
      className="py-5 flex flex-col gap-3"
      boxShadowActive={true}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 aspect-square rounded-full bg-sec-dark-blue/30 flex items-center justify-center">
          <Sparkle className="text-sec-dark-blue" size={16} />
        </div>
        <h3 className="text-h4">Perjalanan Pengobatan</h3>
      </div>
      <Card
        className="bg-sec-dark-blue/10 flex flex-col gap-1 py-4"
        size="full"
      >
        <h5 className="font-bold text-h5">45 hari sudah kamu jalani.</h5>
        <p className="text-h5">
          Seperempat perjalan selesai, setiap langkah kecil tetap berarti.
        </p>
      </Card>
    </Card>
  );
};

export default CardJourney;
