import React from "react";
import FormPersonalization from "../../../components/organism/FormPersonalization";
import Input from "../../../components/atoms/Input";
import InputLabel from "../../../components/molecules/InputLabel";

const FormControl = () => {
  return (
    <FormPersonalization
      title="Seberapa sering jadwal kontrol Anda?"
      description="Kami akan membantu mengingatkan Anda satu hari sebelum jadwal kontrol tiba."
      info="Tahukah Anda? Kontrol rutin diperlukan dokter untuk memantau perkembangan kesehatan Anda dan menyesuaikan dosis obat jika diperlukan"
    >
      <InputLabel
        variantInput="select"
        placeholder="Contoh: 2 (Hari/Minggu/Bulan diatur di →)"
        label="Rentang kontrol, Setiap:"
      />
    </FormPersonalization>
  );
};

export default FormControl;
