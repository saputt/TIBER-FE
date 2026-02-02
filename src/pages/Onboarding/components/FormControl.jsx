import React from "react";
import FormPersonalization from "../../../components/organism/FormPersonalization";
import Input from "../../../components/atoms/Input";

const FormControl = () => {
  return (
    <FormPersonalization
      title="Seberapa sering jadwal kontrol Anda?"
      description="Kami akan membantu mengingatkan Anda satu hari sebelum jadwal kontrol tiba."
      info="Tahukah Anda? Kontrol rutin diperlukan dokter untuk memantau perkembangan kesehatan Anda dan menyesuaikan dosis obat jika diperlukan"
    >
      <div>
        <p className="text-h5 font-medium">Rentang kontrol, Setiap:</p>
        <Input
          variant="white"
          size="full"
          placeholder="Contoh: 2 (Hari/Minggu/Bulan diatur di →)"
        />
      </div>
    </FormPersonalization>
  );
};

export default FormControl;
