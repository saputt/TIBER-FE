import React from "react";
import Card from "../../../components/atoms/Card";
import { Flame } from "lucide-react";

const CardStreak = () => {
  return (
    <Card
      variant="white"
      size="full"
      className="flex py-4 items-center gap-2"
      boxShadowActive={true}
    >
      <div className="w-11 h-11 bg-light-orange/30 rounded-full aspect-square flex items-center justify-center">
        <Flame size={20} className="text-dark-orange" />
      </div>
      <div className="flex-1">
        <h2 className="text-h2 font-medium">5 Hari</h2>
        <p className="text-h5">Konsisten tanpa terlewat</p>
      </div>
    </Card>
  );
};

export default CardStreak;
