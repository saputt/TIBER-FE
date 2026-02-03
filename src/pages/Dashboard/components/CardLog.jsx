import React from "react";
import Card from "../../../components/atoms/Card";
import Badge from "../../../components/atoms/Badge";
import { Pill } from "lucide-react";
import ButtonTest from "../../../components/atoms/ButtonTest";

const CardLog = ({ isTaken }) => {
  return (
    <>
      {isTaken && (
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
          >
            Konfirmasi
          </ButtonTest>
        </Card>
      )}

      {!isTaken && (
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
          >
            Konfirmasi
          </ButtonTest>
        </Card>
      )}
    </>
  );
};

export default CardLog;
