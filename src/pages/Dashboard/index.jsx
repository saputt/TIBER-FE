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
import Loading from "../../components/molecules/Loading";

const DashboardPage = () => {
  const { data: dashboard, isLoading } = useDashboardOverview();

  console.log(dashboard);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
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
    <div className="flex flex-col gap-4">
      <CardLog isTaken={dashboard?.data?.is_taken_today} />
      <CardStreak streak={dashboard?.data?.current_streak} />
      <CardJourney
        dayPass={dashboard?.data?.days_passed}
        totalDay={dashboard?.data?.total_days}
      />
      <CardControl dayLeft={calculateDaysLeft(dashboard?.data?.next_checkup)} />
      <CardProgress
        currentDay={dashboard?.data?.days_passed}
        totalDay={dashboard?.data?.total_days}
      />
      <CardImportant />
    </div>
  );
};

export default DashboardPage;
