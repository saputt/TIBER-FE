import React from "react";
import Navbar from "../../components/organism/Navbar";
import OnboardingLayout from "../../components/templates/OnboardingLayout";
import Card from "../../components/atoms/Card";
import { LockKeyhole, SquareCheck } from "lucide-react";

const RegisterPage = () => {
  return (
    <OnboardingLayout>
      <div className="flex flex-col items-center ">
        <img src="secLogo.png" className="w-15" />
        <div className="text-center flex flex-col py-7">
          <h2 className="font-bold text-h2">Hampir Selesai!</h2>
          <p className="text-h5 text-wrap w-60">
            Buat akun untuk menyimpan progres pengobatan Anda dengan aman
          </p>
        </div>
        <Card variant="primaryNoBorder" size="full" className="flex gap-2">
          <SquareCheck className="text-primary w-6" />
          <div className="flex-1 flex flex-col gap-1 leading-4">
            <h5 className="font-semibold text-h5">
              Data personalisasi Anda sudah tersimpan.
            </h5>
            <p className="text-h6">
              Sekarang buat akun untuk melanjutkan pelacakan harian dan melihat
              progres Anda.
            </p>
          </div>
        </Card>

        {/* form register */}
        <div></div>

        <Card
          size="full"
          className="bg-light-blue/70 border-2 border-light-blue"
        >
          <LockKeyhole className="w-6" />
        </Card>
      </div>
    </OnboardingLayout>
  );
};

export default RegisterPage;
