import React from "react";
import Card from "../../../components/atoms/Card";
import { CircleCheck } from "lucide-react";

const DAY_NAMES_ID = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const MONTH_NAMES_ID = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

const generateWeek = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dates = [];
    for (let i = -3; i <= 3; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() + i);
        dates.push(d);
    }
    return dates;
};

const CalendarStrip = ({ isTakenToday }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dates = generateWeek();

    const monthYear = `${MONTH_NAMES_ID[today.getMonth()]} ${today.getFullYear()}`;

    const isToday = (date) =>
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

    const isPast = (date) => date < today;

    return (
        <Card
            boxShadowActive={true}
            size="full"
            variant="white"
            className="py-3 lg:py-4"
        >
            {/* Desktop Header */}
            <div className="hidden lg:block mb-3 px-1">
                <h3 className="text-h4 font-semibold font-inter text-gray-700">
                    {monthYear}
                </h3>
            </div>

            {/* Date Strip */}
            <div className="flex justify-between items-center">
                {dates.map((date) => {
                    const dayName = DAY_NAMES_ID[date.getDay()];
                    const dateNum = date.getDate();
                    const current = isToday(date);
                    const past = isPast(date);
                    const showCheck = current && isTakenToday;

                    let circleClass =
                        "w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-inter font-semibold text-sm lg:text-base transition-all duration-300 ";

                    if (current) {
                        circleClass += showCheck
                            ? "bg-primary text-white shadow-lg shadow-primary/30 scale-110"
                            : "bg-primary text-white shadow-lg shadow-primary/30";
                    } else if (past) {
                        circleClass += "bg-gray-100 text-gray-500";
                    } else {
                        circleClass += "border border-gray-300 text-gray-400 bg-transparent";
                    }

                    return (
                        <div
                            key={date.toISOString()}
                            className="flex flex-col items-center gap-1"
                        >
                            <span
                                className={`text-[11px] lg:text-xs font-medium font-inter ${current ? "text-primary font-semibold" : "text-gray-400"
                                    }`}
                            >
                                {dayName}
                            </span>

                            <div className={circleClass}>
                                {showCheck ? (
                                    <CircleCheck
                                        size={22}
                                        className="text-white animate-[scaleIn_0.4s_ease-out] lg:w-6 lg:h-6"
                                        strokeWidth={2.5}
                                    />
                                ) : (
                                    dateNum
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};

export default CalendarStrip;
