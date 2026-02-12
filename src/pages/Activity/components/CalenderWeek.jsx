import React from "react";
import Card from "../../../components/atoms/Card";
import Notch from "../../../components/atoms/Notch";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";
import { usePersonalizationStore } from "../../../store/usePersonalizationStore";
import { getWeekNumberFromStart } from "../../../utils/WeekNumber";
import { useActivityStore } from "../../../store/useActivityStore";

const CalenderWeek = ({ weekSummary }) => {
  const personalization = usePersonalizationStore(
    (state) => state.personalization,
  );

  const setCalenderMonth = useActivityStore((state) => state.setCalenderMonth);
  return (
    <Card
      className="relative overflow-hidden pt-8 flex flex-col gap-3"
      variant="white"
      size="full"
      boxShadowActive={true}
    >
      <Notch variant="right" className="font-semibold text-h6 px-5 py-1">
        Minggu 3 | Januari 2026
      </Notch>

      <div className="flex justify-between">
        {weekSummary.map((week) => {
          const dateObj = new Date(week.date);

          const dayInWeek = dateObj.toLocaleDateString("id-ID", {
            weekday: "short",
          });

          return (
            <div className="flex flex-col items-center gap-1">
              <p className="text-h6">{dayInWeek}</p>
              <CheckboxCircle isActive={week.status === "taken"} />
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
