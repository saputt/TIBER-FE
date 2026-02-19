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
          const isTaken = week.status === "taken";

          return (
            <div className="flex flex-col items-center gap-1" key={week.date}>
              <p className="text-h6">{dayInWeek}</p>
              <CheckboxCircle
                isActive={isTaken}
                size={22}
                className="w-9 h-9 lg:w-12 lg:h-12"
                classCircle={`${isTaken ? "animate-[scaleIn_0.4s_ease-out]" : ""}`}
              />
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
