import React from "react";
import Card from "../../../components/atoms/Card";
import Badge from "../../../components/atoms/Badge";
import { Calendar, Pencil, Timer } from "lucide-react";

const ManageProfileCard = () => {
  return (
    <div className="h-screen w-full bg-white/10 backdrop-blur-sm p-10 fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center">
      <Card
        className="flex flex-col items-center gap-2"
        boxShadowActive={true}
        size="full"
        variant="white"
      >
        <Badge variant="primary" size="sm">
          Sesuaikan Profil
        </Badge>

        <div className="w-14 h-14 aspect-square rounded-full bg-primary flex items-center justify-center text-h1 font-semibold text-white">
          S
        </div>

        <div className="flex items-center gap-1">
          <p className="text-h5 font-medium">Sauki</p>
          <Pencil size={10} />
        </div>

        <Card
          className="flex flex-col gap-2"
          variant="white"
          boxShadowActive={true}
          size="full"
        >
          <div className="flex items-center ">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1">
                <Calendar size={10} />
                <p className="text-h6 font-semibold">Tanggal Mulai</p>
              </div>
              <p className="text-h6">15/12/2025</p>
            </div>
            <p className="text-primary text-h6 font-semibold">Ubah</p>
          </div>
          <hr className="text-gray-400" />
          <div className="flex items-center">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1">
                <Timer size={10} />
                <p className="text-h6 font-semibold">Durasi Pengobatan</p>
              </div>
              <p className="text-h6">6 Bulan</p>
            </div>
            <p className="text-primary text-h6 font-semibold">Ubah</p>
          </div>
        </Card>
      </Card>
      ;
    </div>
  );
};

export default ManageProfileCard;
