import React, { useState } from "react";
import Card from "../../components/atoms/Card";
import Badge from "../../components/atoms/Badge";
import { Pill } from "lucide-react";
import Button from "../../components/atoms/Button";
import ButtonTest from "../../components/atoms/ButtonTest";
import CardLog from "./components/CardLog";
import CardStreak from "./components/CardStreak";
import CardJourney from "./components/CardJourney";
import CardControl from "./components/CardControl";
import CardProgress from "./components/CardProgress";
import CardImportant from "./components/CardImportant";
import { useDashboardOverview } from "../../hooks/useDashboard";
import DashboardSkeleton from "./components/DashboardSkeleton";
import Loading from "../../components/molecules/Loading";

const DashboardPage = () => {
  const { data: dashboard, isLoading } = useDashboardOverview();

  console.log(dashboard);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  const calculateDaysLeft = (targetDate) => {
    if (!targetDate) return 0;

    const target = new Date(targetDate);
    const now = new Date();

    target.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    const diffInMs = target - now;

    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  };

  return (
    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:items-start">
      {/* Main Content Area (Column 1-8) */}
      <div className="flex flex-col gap-6 lg:col-span-8">
        {/* Banner Status */}
        <div className="w-full">
          <CardLog isTaken={dashboard?.data?.is_taken_today} />
        </div>

        {/* Progress & Journey - 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <CardProgress
            currentDay={dashboard?.data?.days_passed}
            totalDay={dashboard?.data?.total_days}
          />
          <CardJourney
            dayPass={dashboard?.data?.days_passed}
            totalDay={dashboard?.data?.total_days}
          />
        </div>
      </div>

      {/* Right Sidebar Area (Column 9-12) */}
      <div className="flex flex-col gap-6 lg:col-span-4 h-full">
        <CardStreak streak={dashboard?.data?.current_streak} />
        <CardControl dayLeft={calculateDaysLeft(dashboard?.data?.next_checkup)} />

        <div className="lg:mt-auto">
          <CardImportant />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
