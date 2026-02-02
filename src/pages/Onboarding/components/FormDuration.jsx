import React from "react";
import Card from "../../../components/atoms/Card";
import { Lightbulb } from "lucide-react";
import Input from "../../../components/atoms/Input";
import FormPersonalization from "../../../components/organism/FormPersonalization";

const FormDuration = () => {
  return (
    <FormPersonalization
      title="Berapa lama perkiraan durasi pengobatan Anda"
      description="Ini membantu kami menghitung progres perjalanan pengobatan Anda."
      info="Tahukah Anda? Menyelesaikan seluruh rangkaian durasi pengobatan sangat penting untuk mencegah kuman TBC menjadi kebal (resisten) terhadap obat."
    >
      <div>
        <p className="text-h5 font-medium">Durasi Pengobatan</p>
        <Input
          type="number"
          variant="white"
          size="full"
          placeholder="Contoh: 6 Bulan"
        />
      </div>
    </FormPersonalization>
  );
};

export default FormDuration;
