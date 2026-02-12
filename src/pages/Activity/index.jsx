import React, { useState } from "react";
import SelectionButton from "../../components/atoms/SelectionButton";
import CalenderWeek from "./components/CalenderWeek";
import StreakCard from "./components/StreakCard";
import History from "./components/History";
import CatatanKontrol from "./components/CatatanKontrol";
import Button from "../../components/atoms/Button";

const ActivityPage = () => {
  const [isCatatanKontrol, setIsCatatanKontrol] = useState(false);
  const colorMinumObat = isCatatanKontrol ? "bg-white text-black" : "bg-primary text-white"; 
  const colorCatatanKontrol = isCatatanKontrol ? "bg-primary text-white" : "bg-white text-black";

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold text-h3">Aktivitas Saya</h3>
      <div className="flex gap-2.5">
        <button className={`${colorMinumObat} text-h6 px-5 py-1 rounded-xl w-fit cursor-pointer`} onClick={() => setIsCatatanKontrol(false)}>
          Minum Obat
        </button>
        <Button className={`${colorCatatanKontrol} text-h6 px-5 py-1 rounded-xl w-fit cursor-pointer`} onClick={() => setIsCatatanKontrol(true)}>
          Catatan Kontrol
        </Button>
      </div>
      {isCatatanKontrol ? (
        <CatatanKontrol />
      ) : (
        <>
          <CalenderWeek />
          <StreakCard />
          <History />
        </>
      )}
    </div>
  );
};

export default ActivityPage;
