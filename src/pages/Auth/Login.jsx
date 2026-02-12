import React, { useState } from "react";
import InputLabel from "../../components/molecules/InputLabel";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button";
import { useLogin } from "../../hooks/useAuth";
import { useAuthStore } from "../../store/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate: login, isPending } = useLogin();

  const handleSubmit = () => {
    if (isPending) return;
    setErrorMessage(""); // Clear previous errors
    login(
      {
        email,
        password,
      },
      {
        onError: (error) => {
          const msg =
            error.response?.data?.message ||
            "Terjadi kesalahan. Silakan coba lagi.";
          setErrorMessage(msg);
        },
      }
    );
  };

  return (
    <div className="px-8 py-24 bg-gray-50 min-h-dvh w-full flex flex-col items-center">
      <div className="flex justify-center">
        <img src="/secLogo.png" className="w-14 rounded-lg" />
      </div>
      <div className="mt-9 flex flex-col items-center">
        <span className="font-inter font-bold text-h2">
          Selamat Datang Kembali
        </span>
        <span className="font-inter text-h5">
          Lanjutkan perjalanan pengobatan Anda
        </span>
      </div>
      <div className="flex flex-col gap-2 mt-8 w-full sm:w-md">
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm text-center">
            {errorMessage}
          </div>
        )}
        <InputLabel
          variantInput="input"
          variantLabel="normal"
          label="Email"
          variant="gray"
          type="email"
          placeholder="nama@email.com"
          size="full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col">
          <InputLabel
            variantInput="input"
            variantLabel="normal"
            label="Kata Sandi"
            variant="gray"
            type={showPassword ? "text" : "password"}
            placeholder="Min 8 Karakter"
            size="full"
            onChange={(e) => setPassword(e.target.value)}
            endIcon={showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            onEndIconClick={() => setShowPassword(!showPassword)}
          />
          <div className="text-end">
            <Link
              to="*"
              className="font-inter text-h5 underline text-black/70 w-fit"
            >
              Lupa sandi
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center w-full sm:w-md">
        <Button
          variant="primary"
          size="full"
          boxShadowActive="true"
          className="mt-6 text-h5 sm:w-md"
          onClick={() => handleSubmit()}
        >
          {isPending ? "Sedang masuk..." : "Login"}
        </Button>
      </div>
      <div className="text-center mt-1">
        <span className="text-primary font-inter text-h5 text-center">
          Belum punya akun? <Link to="/onboarding">Daftar Sekarang</Link>
        </span>
      </div>
      <div className="text-center mt-0.5">
        <span className="text-black/50 font-inter text-h5 text-center">
          <Link to="/">Kembali</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
