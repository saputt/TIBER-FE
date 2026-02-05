import { Calendar, X } from "lucide-react";
import React from "react";
import Card from "../../../components/atoms/Card";
import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";
import { useProfileStore } from "../../../store/useProfileStore";

const ManageControl = () => {
  const setControl = useProfileStore((state) => state.setControl);
  return (
    <div className="h-screen w-full bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5">
      <Card
        className="flex flex-col gap-3 py-4"
        boxShadowActive={true}
        variant="white"
        size="full"
      >
        <div className="flex gap-2">
          <Calendar size={15} className="text-dark-purple" />
          <h5 className="text-h5 flex-1">Pengingat Kontrol Dokter</h5>
          <X size={25} onClick={() => setControl()} />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-h5 font-medium">Tanggal kontrol selanjutnya</h5>
          <Input type="date" className="border-1 text-h5" />
        </div>
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

export default ManageControl;
