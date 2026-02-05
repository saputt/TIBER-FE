import React, { useState } from "react";
import Card from "../../../components/atoms/Card";
import Badge from "../../../components/atoms/Badge";
import { CircleCheckBig, Pill } from "lucide-react";
import ButtonTest from "../../../components/atoms/ButtonTest";

const CardLog = ({ isTaken }) => {
  const [taken, setTaken] = useState(false);
  return (
    <>
      {taken && (
        <Card
          boxShadowActive={true}
          size="full"
          className="flex flex-col gap-3 py-4 bg-secondary"
        >
          <Badge
            variant="confirmPrimary"
            size="md"
            className="text-h7 text-black"
          >
            Hari ini belum dicatat
          </Badge>

          <CircleCheckBig size={35} className=" text-primary" />

          <h4 className="text-h4 text-wrap w-50">
            Terima kasih sudah menjaga diri hari ini.
          </h4>

          <p className="text-h6 text-wrap w-[60%]">
            Bagus! Catatanmu sudah tersimpan aman.
          </p>

          <ButtonTest
            variant="secondary"
            size="full"
            className="font-bold text-h6"
            onClick={() => setTaken(!taken)}
          >
            Sampai jumpa di jadwal berikutnya
          </ButtonTest>
        </Card>
      )}

      {!taken && (
        <Card
          boxShadowActive={true}
          size="full"
          variant="white"
          className="flex flex-col gap-3 py-4"
        >
          <Badge variant="confirmGray" size="md" className="text-h7">
            Hari ini belum dicatat
          </Badge>

          <Pill size={30} className=" text-primary" />

          <h4 className="text-h4 text-wrap">Konfirmasi Minum Obat Hari Ini</h4>

          <p className="text-h6 text-wrap w-[60%]">
            Catat rutinitas harianmu dengan satu ketukan
          </p>

          <ButtonTest
            variant="primary"
            size="full"
            className="font-bold text-h6"
            onClick={() => setTaken(!taken)}
          >
            Konfirmasi
          </ButtonTest>
        </Card>
      )}
    </>
  );
};

export default CardLog;
