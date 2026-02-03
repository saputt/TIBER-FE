import React from "react";
import Card from "../../../components/atoms/Card";
import { Bell, Calendar } from "lucide-react";

const CardControl = () => {
  return (
    <Card
      className="py-4 bg-light-purple flex flex-col gap-2"
      size="full"
      boxShadowActive={true}
    >
      <div className="flex gap-3 items-center">
        <div className="w-8 h-8 aspect-square rounded-full flex justify-center items-center bg-dark-purple/20">
          <Calendar size={15} className="text-dark-purple" />
        </div>
        <h5 className="text-h5 font-medium">Kontrol Berikutnya</h5>
      </div>

      <div>
        <h3 className="font-medium text-h3">7 Hari Lagi</h3>
      </div>

      <div className="flex gap-2">
        <Bell size={14} className="text-dark-purple" />
        <p className="text-h6">Kami akan mengingatkanmu</p>
      </div>
    </Card>
  );
};

export default CardControl;
