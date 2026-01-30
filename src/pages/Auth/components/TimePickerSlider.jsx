import React, { useState } from "react";
import RangeSlider from "../../../components/atoms/RangeSlider";

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

const TimePickerSlider = ({ timeDay }) => {
  const getTime = () => times.find((time) => time.timeDay === timeDay);

  const minMinute = parseInt(getTime().time[0].split(".")[0] * 60);
  const maxMinute = parseInt(getTime().time.at(-1).split(".")[0] * 60);

  const [minutes, setMinutes] = useState(getTime().defaultMin);

  const formatTime = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col gap-4">
      <p>
        time Pengingat - <b>{timeDay}</b>
      </p>
      <div className="bg-red-200 p-4 flex flex-col gap-3">
        <RangeSlider
          min={minMinute}
          max={maxMinute}
          step={5}
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />

        <div className="flex justify-between">
          {getTime().time.map((time) => (
            <p>{time}</p>
          ))}
        </div>

        <div className="w-[80%] bg-gray-100 p-4 rounded-xl text-center text-2xl font-bold m-auto">
          {formatTime(minutes)}
        </div>
      </div>
    </div>
  );
};

export default TimePickerSlider;
