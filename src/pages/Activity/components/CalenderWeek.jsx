import React from "react";
import Card from "../../../components/atoms/Card";
import Notch from "../../../components/atoms/Notch";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";
import { useActivityStore } from "../../../store/useActivityStore";

const CalenderWeek = ({ weekSummary }) => {
  const setCalenderMonth = useActivityStore((state) => state.setCalenderMonth);
  return (
    <Card
      className="relative overflow-hidden pt-8 flex flex-col gap-3"
      variant="white"
      size="full"
      boxShadowActive={true}
    >
      <Notch variant="right" className="font-semibold text-h6 px-5 py-1 lg:text-h5 lg:px-8">
        Minggu 3 | Januari 2026
      </Notch>

      <div className="flex justify-between">
        {weekSummary.map((week) => {
          const dateObj = new Date(week.date);

          const dayInWeek = dateObj.toLocaleDateString("id-ID", {
            weekday: "short",
          });

          return (
            <div className="flex flex-col items-center gap-1" key={week.date}>
              <p className="text-h6">{dayInWeek}</p>
              <CheckboxCircle isActive={week.status === "taken"} className="w-8 h-8 lg:w-11 lg:h-11" classCircle="w-4 h-4 lg:w-6 lg:h-6" />
              <p className="text-h6">{week.date.split("-")[2]}</p>
            </div>
          );
        })}
      </div>

      <p
        className="text-h6 text-right font-semibold hover:text-primary transition-colors cursor-pointer"
        onClick={() => setCalenderMonth()}
      >
        Lihat Selengkapnya →
      </p>
    </Card>
  );
};

export default CalenderWeek;
