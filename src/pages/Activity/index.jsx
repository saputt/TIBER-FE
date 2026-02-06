import React, { useState } from "react";
import SelectionButton from "../../components/atoms/SelectionButton";
import CalenderWeek from "./components/CalenderWeek";
import StreakCard from "./components/StreakCard";
import History from "./components/History";

const ActivityPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold text-h3">Aktivitas Saya</h3>
      <button className="text-h6 bg-primary px-5 py-1 rounded-xl w-fit text-white">
        Minum Obat
      </button>
      <CalenderWeek />
      <StreakCard />
      <History />
    </div>
  );
};

export default ActivityPage;
