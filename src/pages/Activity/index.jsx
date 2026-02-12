import React, { useState } from "react";
import SelectionButton from "../../components/atoms/SelectionButton";
import CalenderWeek from "./components/CalenderWeek";
import StreakCard from "./components/StreakCard";
import History from "./components/History";
import ActivityMonthModal from "./components/ActivityMonthModal";
import ActivityHistoryModal from "./components/ActivityHistoryModal";
import ActivitySkeleton from "./components/ActivitySkeleton";
import Loading from "../../components/molecules/Loading";
import { useActivityMonth, useActivityOverview } from "../../hooks/useActivity";
import { useActivityStore } from "../../store/useActivityStore";

const ActivityPage = () => {
  const { data, isLoading } = useActivityOverview();
  console.log(data);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  if (isLoading) {
    return <ActivitySkeleton />;
  }

  return (
    <>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-h3">Aktivitas Saya</h3>
        <button className="text-h6 bg-primary px-5 py-1 rounded-xl w-fit text-white">
          Minum Obat
        </button>
        <CalenderWeek weekSummary={data?.data?.weekly_summary} />
        <StreakCard highestStreak={data?.data?.highest_streak} />
        <History
          data={data?.data?.recent_logs}
          onOpen={() => setIsHistoryModalOpen(true)}
        />
      </div>
      <ActivityMonthModal />
      <ActivityHistoryModal
        isOpen={isHistoryModalOpen}
        onClose={() => setIsHistoryModalOpen(false)}
      />
    </>
  );
};

export default ActivityPage;
