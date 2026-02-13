import { Calendar, X } from "lucide-react";
import React, { useState } from "react";
import Card from "../../../components/atoms/Card";
import DateTrigger from "../../../components/atoms/DateTrigger";
import Button from "../../../components/atoms/Button";
import { useProfileStore } from "../../../store/useProfileStore";
import DatePicker from "../../../components/organism/DatePicker/DatePicker";
import { formatDateID } from "../../../utils/dateUtils";

const ManageControl = () => {
  const setControl = useProfileStore((state) => state.setControl);
  const [selectedDate, setSelectedDate] = useState("");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
  };

  return (
    <div className="h-screen w-full bg-white/20 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5 z-50">
      <Card
        className="flex flex-col gap-3 py-4"
        boxShadowActive={true}
        variant="white"
        size="full"
      >
        <div className="flex gap-2">
          <Calendar size={15} className="text-dark-purple" />
          <h5 className="text-h5 flex-1">Pengingat Kontrol Dokter</h5>
          <X size={25} onClick={() => setControl()} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-h5 font-medium">Tanggal kontrol selanjutnya</h5>

          <DateTrigger
            value={selectedDate ? formatDateID(new Date(selectedDate)) : ""}
            placeholder="Pilih Tanggal Kontrol"
            onClick={() => setIsDatePickerOpen(true)}
            className="cursor-pointer"
          />

          <DatePicker
            isOpen={isDatePickerOpen}
            onClose={() => setIsDatePickerOpen(false)}
            onSelectDate={handleDateSelect}
            initialDate={selectedDate || new Date()}
          />

        </div>
        <div className="flex text-h6 gap-2">
          <Button variant="gray" className="flex-1 py-2" onClick={() => setControl()}>
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
