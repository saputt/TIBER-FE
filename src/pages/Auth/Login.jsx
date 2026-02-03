import React from "react";
import InputLabel from "../../components/molecules/InputLabel"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button"

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-8 py-24 bg-gray-50 min-h-dvh w-full flex flex-col items-center">
      <div className="flex justify-center">
        <img src="/secLogo.png" className="w-14 rounded-lg" />
      </div>
      <div className="mt-9 flex flex-col items-center">
        <span className="font-inter font-bold text-h2">Selamat Datang Kembali</span>
        <span className="font-inter text-h5">Lanjutkan perjalanan pengobatan Anda</span>
      </div>
      <div className="flex flex-col gap-2 mt-14 w-full sm:w-md">
        <InputLabel variantInput="input" variantLabel="normal" label="Email" variant="gray" type="email" placeholder="nama@email.com" size="full"/>
        <div className="flex flex-col">
          <InputLabel variantInput="input" variantLabel="normal" label="Kata Sandi" variant="gray" type="password" placeholder="Min 8 Karakter" size="full"/>
          <div className="text-end">
            <Link to="*" className="font-inter text-h5 underline text-black/70 w-fit">Lupa sandi</Link>
          </div>
        </div>
      </div>
      <div className="text-center w-full sm:w-md">
        <Button variant="primary" size="full" boxShadowActive="true" className="mt-6 text-h5 sm:w-md" onClick={() => {navigate("/dashboard")}}>Masuk</Button>
      </div>
      <div className="text-center mt-1">
        <span className="text-primary font-inter text-h5 text-center">Belum punya akun? <Link to="/register">Daftar Sekarang</Link></span>
      </div>
      <div className="text-center mt-0.5">
        <span className="text-black/50 font-inter text-h5 text-center"><Link to="/">Kembali</Link></span>
      </div>
    </div>
  );
};

export default LoginPage;
