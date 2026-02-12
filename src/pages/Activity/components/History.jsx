import React from "react";
import Card from "../../../components/atoms/Card";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";
import { formatRelativeDateID } from "../../../utils/dateUtils";

const History = ({ data = [], onOpen }) => {
  // Sorting newest first is safer for history, even if BE prepares it
  const sortedData = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Card boxShadowActive={true} className="" variant="white">
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

      <div className="flex flex-col gap-4 py-3 overflow-y-auto pr-1">
        {sortedData.length > 0 ? (
          sortedData.map((item, index) => {
            const isTaken = item.status === "taken";
            const statusText = isTaken ? "Minum obat tercatat" : "Tidak tercatat";

            return (
              <div className="flex gap-2" key={index}>
                <CheckboxCircle isActive={isTaken} />
                <div className="flex flex-col flex-1">
                  <p className="font-semibold text-h6">{formatRelativeDateID(item.date)}</p>
                  <p className="text-h7">{statusText}</p>
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
