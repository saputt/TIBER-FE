import React from "react";
import Navbar from "../../components/organism/Navbar";
import OnboardingLayout from "../../components/templates/OnboardingLayout";
import Card from "../../components/atoms/Card";
import { LockKeyhole, SquareCheck } from "lucide-react";
import ButtonTest from "../../components/atoms/ButtonTest";
import InfoSaveCard from "./components/InfoSaveCard";
import RegistForm from "./components/RegistForm";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <OnboardingLayout>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-col items-center">
          <img src="secLogo.png" className="w-15" />
          <div className="text-center flex flex-col py-6">
            <h2 className="font-bold text-h2">Hampir Selesai!</h2>
            <p className="text-h5 text-wrap w-60">
              Buat akun untuk menyimpan progres pengobatan Anda dengan aman
            </p>
          </div>
        </div>

        <InfoSaveCard variant="green" />

        {/* form register */}
        <RegistForm />

        <InfoSaveCard variant="blue" />

        <ButtonTest
          variant="primary"
          size="full"
          className="mt-5 shadow-button"
          onClick={() => navigate("/dashboard")}
        >
          Daftar
        </ButtonTest>

        <p className="text-center text-h6 text-wrap w-65">
          Dengan membuat akun, anda menyetujui Syarat & Ketentuan dan Kebijakan
          Privasi kami.
        </p>
      </div>
    </OnboardingLayout>
  );
};

export default RegisterPage;
