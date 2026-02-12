import { X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useActivityStore } from "../../../store/useActivityStore";
import { useActivityMonth } from "../../../hooks/useActivity";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";
import Notch from "../../../components/atoms/Notch";
import Card from "../../../components/atoms/Card";
import Loading from "../../../components/molecules/Loading";
import { getDaysInMonth, formatMonthYearID } from "../../../utils/dateUtils";

const ActivityMonthModal = () => {
    const { isCalenderMonth, setCalenderMonth } = useActivityStore();
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        if (isCalenderMonth) {
            setCurrentDate(new Date());
        }
    }, [isCalenderMonth]);

    const monthYearString = formatMonthYearID(currentDate);

    const monthNumber = currentDate.getMonth() + 1;

    const { data: activityData, isLoading } = useActivityMonth(monthNumber);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const calendarDays = getDaysInMonth(currentDate);
    const weekDays = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

    const getLogForDay = (day) => {
        if (!activityData?.data?.logs || !day) return null;

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        const dateKey = `${year}-${month}-${dayStr}`;

        return activityData.data.logs.find(log => log.date === dateKey);
    };

    if (!isCalenderMonth) return null;

    return (
        <div className="h-screen w-full bg-black/20 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5 z-10">
            <Card className="bg-white rounded-3xl p-5 shadow-xl relative animate-in fade-in zoom-in duration-300">

                <div className="flex justify-between items-center">
                    <h3 className="text-h5 font-medium">Kalender Aktivitas</h3>
                    <button
                        onClick={() => setCalenderMonth()}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="text-gray-500" size={20} />
                    </button>
                </div>

                <div className="flex justify-between items-center py-1">
                    <button onClick={handlePrevMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-primary">
                        <ChevronLeft size={20} />
                    </button>
                    <span className="text-h5 font-medium text-gray-600">{monthYearString}</span>
                    <button onClick={handleNextMonth} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-primary">
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="border border-primary rounded-2xl p-3 relative pt-8 mb-4 overflow-hidden text-h6">

                    <Notch variant="right" className="px-4 py-1 font-semibold">
                        {monthYearString}
                    </Notch>

                    <div className="grid grid-cols-7 gap-y-1 gap-x-1 text-center">
                        {weekDays.map(day => (
                            <div key={day} className="font-medium text-gray-500">
                                {day}
                            </div>
                        ))}

                        {isLoading ? (
                            <div className="col-span-7 py-10">
                                <Loading />
                            </div>
                        ) : (
                            calendarDays.map((day, index) => {
                                const log = getLogForDay(day);
                                const status = log?.status; // 'taken', 'missed', 'none'
                                const isTaken = status === 'taken';

                                return (
                                    <div key={index} className="flex flex-col items-center">
                                        {day ? (
                                            <>
                                                <div className="relative">
                                                    <CheckboxCircle isActive={isTaken} />
                                                </div>
                                                <span className={`${day ? 'text-gray-700' : 'text-transparent'}`}>
                                                    {day}
                                                </span>
                                            </>
                                        ) : (
                                            <div className="w-8 h-8"></div> // Empty slot placeholder
                                        )}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                <Card className="mt-4 bg-primary/20 border-1 border-primary p-4 rounded-xl text-h6">
                    <p className="text-primary font-bold">
                        Satu lingkaran hijau = satu langkah baik hari itu.
                    </p>
                    <p className="text-primary/80 leading-relaxed">
                        Perjalanan ini bukan tentang sempurna, tapi tentang terus berjalan.
                        Tidak apa-apa jika ada hari yang terlewat. Yang penting, kamu kembali melanjutkan.
                    </p>
                </Card>

            </Card>
        </div>
    );
};

export default ActivityMonthModal;
