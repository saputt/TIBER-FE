import React from "react";
import Card from "../../../components/atoms/Card";
import { Timer, X } from "lucide-react";
import Button from "../../../components/atoms/Button";
import { useProfileStore } from "../../../store/useProfileStore";
import Input from "../../../components/atoms/Input";

const StartDateSetting = () => {
  const setStartDate = useProfileStore((state) => state.setStartDate);
  return (
    <div className="z-90 bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5">
      <Card
        className="flex flex-col gap-4 py-4 z-100"
        boxShadowActive={true}
        variant="white"
        size="full"
      >
        <div className="flex gap-2">
          <Timer size={15} className="text-gray-700" />
          <p className="flex-1 text-h5 font-medium">Tanggal Mulai</p>
          <X size={20} onClick={() => setStartDate()} />
        </div>

        <Input type="date" variant="white" />

        <div className="flex text-h6 gap-2">
          <Button variant="gray" className="flex-1 py-2">
            Batal
          </Button>
          <Button variant="primary" className="flex-1">
            Simpan
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default StartDateSetting;
