import React from "react";
import Card from "../../../components/atoms/Card";
import CheckboxCircle from "../../../components/atoms/CheckboxCircle";

const history = [
  { date: "Hari ini", status: "Minum obat tercatat", take: true },
  { date: "Kemarin", status: "Minum obat tercatat", take: true },
  { date: "23 Januari", status: "Minum obat tercatat", take: true },
  { date: "22 Januari", status: "Minum obat tercatat", take: true },
  { date: "21 Januari", status: "Minum obat tercatat", take: true },
  { date: "20 Januari", status: "Tidak tercatat", take: false },
];

const History = () => {
  return (
    <Card boxShadowActive={true} className="" variant="white">
      <div className="flex items-center">
        <div className="flex-1">
          <p className="text-h4 font-semibold">Riwayat Aktivitas</p>
          <p className="font-light text-h7">
            Hanya menampilkan 1 Minggu terakhir
          </p>
        </div>
        <p className="font-semibold text-h6">Lihat Semua →</p>
      </div>

      <div className="flex flex-col gap-4 py-3">
        {history.map((history) => (
          <div className="flex gap-2">
            <CheckboxCircle isActive={history.take} />
            <div className="flex flex-col flex-1">
              <p className="font-semibold text-h6">{history.date}</p>
              <p className="text-h7">{history.status}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default History;
