import React, { useState } from "react";
import SelectionButton from "../../components/atoms/SelectionButton";
import CalenderWeek from "./components/CalenderWeek";
import StreakCard from "./components/StreakCard";
import History from "./components/History";
import ActivityMonthModal from "./components/ActivityMonthModal";
import ActivityHistoryModal from "./components/ActivityHistoryModal";
import ActivitySkeleton from "./components/ActivitySkeleton";
import CatatanKontrol from "./components/CatatanKontrol";
import Button from "../../components/atoms/Button";
import { useActivityOverview } from "../../hooks/useActivity";

const ActivityPage = () => {
  // Logic dari kamu: Fetching data
  const { data, isLoading } = useActivityOverview();
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  // Logic dari teman: Toggle navigasi
  const [isCatatanKontrol, setIsCatatanKontrol] = useState(false);

  // Styling dinamis untuk button
  const colorMinumObat = isCatatanKontrol
    ? "bg-white text-black border border-gray-200"
    : "bg-primary text-white";
  const colorCatatanKontrol = isCatatanKontrol
    ? "bg-primary text-white"
    : "bg-white text-black border border-gray-200";

  // Loading state tetap pakai Skeleton kamu
  if (isLoading) {
    return <ActivitySkeleton />;
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-h3">Aktivitas Saya</h3>

        {/* Navigasi Tab Gabungan */}
        <div className="flex gap-2.5">
          <button
            className={`${colorMinumObat} text-h6 px-5 py-1 rounded-xl w-fit cursor-pointer transition-colors`}
            onClick={() => setIsCatatanKontrol(false)}
          >
            Minum Obat
          </button>
          <Button
            className={`${colorCatatanKontrol} text-h6 px-5 py-1 rounded-xl w-fit cursor-pointer transition-colors`}
            onClick={() => setIsCatatanKontrol(true)}
          >
            Catatan Kontrol
          </Button>
        </div>

        {/* Konten Kondisional */}
        {isCatatanKontrol ? (
          <CatatanKontrol />
        ) : (
          <>
            {/* Pakai data hasil fetching kamu */}
            <CalenderWeek weekSummary={data?.data?.weekly_summary} />
            <StreakCard highestStreak={data?.data?.highest_streak} />
            <History
              data={data?.data?.recent_logs}
              onOpen={() => setIsHistoryModalOpen(true)}
            />
          </>
        )}
      </div>

      {/* Modal-modal tetap di luar agar tidak terpengaruh toggle */}
      {!isCatatanKontrol && (
        <>
          <ActivityMonthModal />
          <ActivityHistoryModal
            isOpen={isHistoryModalOpen}
            onClose={() => setIsHistoryModalOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default ActivityPage;
