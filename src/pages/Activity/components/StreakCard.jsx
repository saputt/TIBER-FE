import React from "react";
import Card from "../../../components/atoms/Card";
import { Flame } from "lucide-react";

const StreakCard = ({ highestStreak }) => {
  return (
    <Card
      size="full"
      variant="white"
      boxShadowActive="true"
      className="flex items-center lg:items-start lg:justify-center lg:flex-col gap-3 lg:gap-4 lg:h-full lg:px-6"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-light-orange/30">
          <Flame className="text-dark-orange" size={14} />
        </div>
        <p className="font-semibold text-h6 lg:text-h4">
          Streak terpanjang: {highestStreak} hari
        </p>
      </div>

      <p className="hidden lg:block text-gray-500 text-h6 font-normal leading-relaxed">
        Konsistensi adalah kunci kesembuhan. Pertahankan semangatmu dan jangan lupa minum obat hari ini!
      </p>
    </Card>
  );
};

export default StreakCard;
