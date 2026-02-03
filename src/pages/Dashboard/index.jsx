import React from "react";
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

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <CardLog isTaken={false} />
      <CardStreak />
      <CardJourney />
      <CardControl />
      <CardProgress />
      <CardImportant />
    </div>
  );
};

export default DashboardPage;
