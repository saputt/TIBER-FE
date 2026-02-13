import React from "react";
import Card from "../../../components/atoms/Card";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";
import { formatRelativeDateID } from "../../../utils/dateUtils";

const History = ({ data = [], onOpen }) => {
  const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Card boxShadowActive={true} className="lg:pt-4" variant="white">
      <div className="flex items-center">
        <div className="flex-1">
          <p className="text-h4 font-semibold">Riwayat Aktivitas</p>
          <p className="font-light text-h7">
            Hanya menampilkan data terbaru
          </p>
        </div>
        <p
          className="font-semibold text-h6 cursor-pointer hover:text-primary transition-colors"
          onClick={onOpen}
        >
          Lihat Semua →
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:gap-6 py-3 lg:py-6 overflow-y-auto pr-1">
        {sortedData.length > 0 ? (
          sortedData.map((item, index) => {
            const isTaken = item.status === "taken";
            const statusText = isTaken ? "Minum obat tercatat" : "Tidak tercatat";

            return (
              <div className="flex gap-2 items-center lg:rounded-2xl lg:hover:bg-gray-50 transition-colors" key={index}>
                <CheckboxCircle isActive={isTaken} className="w-8 h-8 lg:w-11 lg:h-11" classCircle="w-4 h-4 lg:w-6 lg:h-6" />
                <div className="flex flex-col flex-1 gap-1">
                  <p className="font-semibold text-h6 lg:text-h4">{formatRelativeDateID(item.date)}</p>
                  <p className="text-h7 lg:text-h6 text-gray-500">{statusText}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 py-4">Belum ada riwayat aktivitas</p>
        )}
      </div>
    </Card>
  );
};

export default History;
