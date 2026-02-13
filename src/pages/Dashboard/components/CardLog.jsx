import React, { useState } from "react";
import Card from "../../../components/atoms/Card";
import Badge from "../../../components/atoms/Badge";
import { CircleCheckBig, Pill } from "lucide-react";
import ButtonTest from "../../../components/atoms/ButtonTest";
import { useMedicationLog } from "../../../hooks/useDashboard";
import { useAuthStore } from "../../../store/useAuthStore";

import { confirmationMessages } from "../../../utils/messages";
import SuccessModal from "../../../components/molecules/SuccessModal";

const CardLog = ({ isTaken }) => {
  const { mutate } = useMedicationLog();
  const user = useAuthStore((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleLog = () => {
    const now = new Date();
    const formatted = now
      .toISOString()
      .slice(0, 19)
      .replace("T", " ")
      .split(" ");
    const data = {
      user_id: user.id,
      log_date: formatted[0],
      logged_time: formatted[1],
    };

    mutate(data, {
      onSuccess: () => {
        const randomMessage =
          confirmationMessages[
          Math.floor(Math.random() * confirmationMessages.length)
          ];
        setModalMessage(randomMessage);
        setShowModal(true);
      },
    });
  };

  return (
    <>
      <SuccessModal
        isOpen={showModal}
        title="Berhasil Tercatat!"
        description={modalMessage}
        buttonText="Tutup"
        onConfirm={() => setShowModal(false)}
      />
      {isTaken && (
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
            Selesai!
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
            className="text-h6"
          >
            Sampai jumpa di jadwal berikutnya
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
            onClick={() => handleLog()}
          >
            Konfirmasi
          </ButtonTest>
        </Card>
      )}
    </>
  );
};

export default CardLog;
