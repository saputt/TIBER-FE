import React, { useState } from "react";
import InputLabel from "../../../components/molecules/InputLabel";
import { useOnboardingStore } from "../../../store/useOnboardingStore";
import InfoSaveCard from "./InfoSaveCard";
import Button from "../../../components/atoms/Button";
import { useRegister } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const RegistForm = () => {
  const setFormData = useOnboardingStore((state) => state.setFormData);
  const formData = useOnboardingStore((state) => state.formData);
  const navigate = useNavigate();
  const { mutate: register, isPending } = useRegister();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");

  let alert;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isPending) return;

    if (password !== confirmPassword) {
      alert("kata sandi tidak sesuai");
      return;
    }

    const finalData = {
      user: {
        fullname: fullname,
        email: email,
        password: password,
      },
      personalization: {
        ...formData.personalization,
        // Paksa jadi integer biar Laravel gak 422
        duration_month: parseInt(formData.personalization.duration_month),
        control_freq_value: parseInt(
          formData.personalization.control_freq_value,
        ),
      },
    };

    register(finalData);
  };

  return (
    <div>
      <InfoSaveCard variant="green" />

      <form onSubmit={handleRegister}>
        <div className="w-full flex flex-col gap-4 my-3">
          <InputLabel
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap"
            variantInput="input"
            variantLabel="normal"
            variant="gray"
            onChange={(e) => setFullName(e.target.value)}
          />
          <InputLabel
            label="Email"
            placeholder="nama@email.com"
            variantInput="input"
            variantLabel="normal"
            variant="gray"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputLabel
            label="Kata Sanndi"
            placeholder="Min 8 Karakter"
            variantInput="input"
            variantLabel="normal"
            variant="gray"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputLabel
            label="Konfirmasi Kata Sandi"
            placeholder="Masukkan ulang kata sandi"
            variantInput="input"
            variantLabel="normal"
            variant="gray"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <InfoSaveCard variant="blue" />

        <Button variant="primary" size="full" className="mt-5 shadow-button">
          {isPending ? "Sedang mendaftar..." : "Daftar"}
        </Button>
      </form>
    </div>
  );
};

export default RegistForm;
