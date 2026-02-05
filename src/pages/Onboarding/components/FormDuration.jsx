import React from "react";
import Card from "../../../components/atoms/Card";
import { Lightbulb } from "lucide-react";
import Input from "../../../components/atoms/Input";
import FormPersonalization from "../../../components/organism/FormPersonalization";
import InputLabel from "../../../components/molecules/InputLabel";

const FormDuration = () => {
  return (
    <FormPersonalization
      title="Berapa lama perkiraan durasi pengobatan Anda"
      description="Ini membantu kami menghitung progres perjalanan pengobatan Anda."
      info="Tahukah Anda? Menyelesaikan seluruh rangkaian durasi pengobatan sangat penting untuk mencegah kuman TBC menjadi kebal (resisten) terhadap obat."
    >
      <InputLabel
        label="Durasi Pengobatan"
        variant="gray"
        placeholder="Contoh: 6 Bulan"
        type="number"
      />
    </FormPersonalization>
  );
};

export default FormDuration;
