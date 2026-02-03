import React from "react";
import Card from "../../../components/atoms/Card";
import { Settings } from "lucide-react";

const ProfileCard = () => {
  return (
    <Card
      variant="white"
      boxShadowActive={true}
      size="full"
      className="flex flex-col gap-3 py-4"
    >
      <div className="flex gap-2 items-center">
        <div className="text-white w-11 h-11 aspect-square bg-primary rounded-full flex items-center justify-center font-bold text-h2">
          S
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="font-semibold text-h4">Sauki WellWell</h3>
          <p className="text-h7">Dimulai 16 Desember 2025</p>
        </div>
        <Settings size={20} />
      </div>
      <hr />
      <div className="flex flex-col">
        <h5 className="text-h5">Durasi Pengobatan</h5>
        <p className="font-semibold text-h5">6 Bulan</p>
      </div>
    </Card>
  );
};

export default ProfileCard;
