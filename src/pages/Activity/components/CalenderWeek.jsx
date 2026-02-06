import React from "react";
import Card from "../../../components/atoms/Card";
import Notch from "../../../components/atoms/Notch";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";

const weeks = [
  { day: "Sen", active: false, date: 19 },
  { day: "Sel", active: true, date: 20 },
  { day: "Rab", active: true, date: 21 },
  { day: "Kam", active: true, date: 22 },
  { day: "Jum", active: true, date: 23 },
  { day: "Sab", active: true, date: 24 },
  { day: "Min", active: false, date: 25 },
];

const CalenderWeek = () => {
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
        {weeks.map((week) => (
          <div className="flex flex-col items-center gap-1">
            <p className="text-h6">{week.day}</p>
            <CheckboxCircle isActive={week.active} />
            <p className="text-h6">{week.date}</p>
          </div>
        ))}
      </div>

      <p className="text-h6 text-right font-semibold">Lihat Selengkapnya →</p>
    </Card>
  );
};

export default CalenderWeek;
