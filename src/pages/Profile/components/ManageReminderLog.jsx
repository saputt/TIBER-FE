import { Bell, X } from "lucide-react";
import React, { useState } from "react";
import Card from "../../../components/atoms/Card";
import SelectionButton from "../../../components/atoms/SelectionButton";
import RangeSlider from "../../../components/atoms/RangeSlider";
import Button from "../../../components/atoms/Button";
import { useProfileStore } from "../../../store/useProfileStore";

const times = [
  {
    timeDay: "pagi",
    defaultMin: 480,
    time: ["07.00", "08.00", "09.00", "10.00"],
  },
  {
    timeDay: "siang",
    defaultMin: 720,
    time: ["11.00", "12.00", "13.00", "14.00"],
  },
  {
    timeDay: "sore",
    defaultMin: 960,
    time: ["15.00", "16.00", "17.00", "18.00"],
  },
  {
    timeDay: "malam",
    defaultMin: 1200,
    time: ["19.00", "20.00", "21.00", "22.00"],
  },
];

const ManageReminderLog = () => {
  const [selectTime, setSelectTime] = useState("pagi");

  const getTime = () => times.find((time) => time.timeDay === selectTime);

  const minMinute = parseInt(getTime().time[0].split(".")[0] * 60);
  const maxMinute = parseInt(getTime().time.at(-1).split(".")[0] * 60);

  const [minutes, setMinutes] = useState(getTime().defaultMin);

  const formatTime = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const format = `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
    return format;
  };

  const setDaily = useProfileStore((state) => state.setDaily);

  return (
    <div className="h-screen w-full bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5">
      <Card
        className="flex flex-col gap-3 py-4"
        boxShadowActive={true}
        variant="white"
        size="full"
      >
        <div className="flex items-center gap-2">
          <Bell className="text-primary" size={20} />
          <h3 className="text-h4 font-medium flex-1">Pengingat Harian</h3>
          <X size={25} onClick={() => setDaily()} />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h4 className="text-h5">Waktu Rutin</h4>
            <div className="flex justify-between">
              {times.map((time) => (
                <SelectionButton
                  isSelect={selectTime === time.timeDay}
                  onClick={() => {
                    setSelectTime(time.timeDay);
                    setMinutes(time.defaultMin);
                  }}
                  selectionName={time.timeDay}
                  key={time.timeDay}
                  className="px-6 py-1 text-h6"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h5 className="text-h5 font-medium">Waktu Pengingat</h5>
            <div className="border-1 border-gray-400 w-fit px-2 text-h5 font-light">
              {formatTime(minutes)}
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <RangeSlider
                min={minMinute}
                max={maxMinute}
                step={5}
                value={minutes}
                onChange={(e) => setMinutes(parseInt(e.target.value))}
              />
              <div className="flex justify-between text-h6">
                {getTime().time.map((time) => (
                  <p>{time}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <Button variant="gray" className="flex-1 py-2 text-h6">
            Batal
          </Button>
          <Button variant="primary" className="flex-1 text-h6">
            Simpan
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ManageReminderLog;
