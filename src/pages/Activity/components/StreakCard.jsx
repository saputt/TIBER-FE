import React from "react";
import Card from "../../../components/atoms/Card";
import { Flame } from "lucide-react";

const StreakCard = () => {
  return (
    <Card
      size="full"
      variant="white"
      boxShadowActive="true"
      className="flex items-center gap-3"
    >
      <div className="w-8 h-8 flex justify-center items-center rounded-full bg-light-orange/30">
        <Flame className="text-dark-orange" size={14} />
      </div>
      <p className="font-semibold text-h6">Streak terpanjang: 12 hari</p>
    </Card>
  );
};

export default StreakCard;
