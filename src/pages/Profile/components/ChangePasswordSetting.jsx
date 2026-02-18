import React, { useState } from "react";
import { Eye, EyeOff, LockKeyhole, X } from "lucide-react";
import { useProfileStore } from "../../../store/useProfileStore";
import Button from "../../../components/atoms/Button";
import InputLabel from "../../../components/molecules/InputLabel";
import { Link } from "react-router-dom";
import Card from "../../../components/atoms/Card";
import { useProfile } from "../../../hooks/useProfile";

const ChangePasswordSetting = () => {
  const setChangePassword = useProfileStore((state) => state.setChangePassword);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()

  const { mutate } = useProfile()

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) return

    mutate({
      old_password: oldPassword,
      new_password: newPassword
    })
  }

  return (
    <div className="h-screen w-full bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5 z-50">
      <Card
        className="flex flex-col gap-3 py-4 w-full lg:w-[40%]"
        boxShadowActive={true}
        variant="white"
      >
        <div className="flex justify-between items-center py-3 border-b border-b-black/50">
          <div className="flex justify-center items-center gap-2">
            <LockKeyhole size="20" className="text-primary" />
            <span className="font-inter font-medium text-h5 lg:text-h4">
              Sesuaikan Kata Sandi
            </span>
          </div>
          <Button onClick={() => setChangePassword()}>
            <X />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-3 py-2">
          <div className="flex flex-col">
            <InputLabel
              label="Masukkan Kata Sandi Anda sekarang"
              placeholder="Sandi sekarang..."
              variant="white"
              type={showCurrentPassword ? "text" : "password"}
              endIcon={
                showCurrentPassword ? <Eye size={20} /> : <EyeOff size={20} />
              }
              onEndIconClick={() =>
                setShowCurrentPassword(!showCurrentPassword)
              }
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <div className="text-end">
              {/* <Link
                to="*"
                className="font-inter text-h5 underline text-black/70 w-fit"
              >
                Lupa sandi
              </Link> */}
            </div>
          </div>
          <InputLabel
            label="Masukkan Kata Sandi baru"
            placeholder="Sandi baru..."
            variant="white"
            type={showNewPassword ? "text" : "password"}
            endIcon={showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            onEndIconClick={() => setShowNewPassword(!showNewPassword)}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <InputLabel
            label="Konfirmasi Kata Sandi baru"
            placeholder="Konfirmasi kata sandi..."
            variant="white"
            type={showConfirmPassword ? "text" : "password"}
            endIcon={
              showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />
            }
            onEndIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="gray"
            onClick={() => {
              setChangePassword();
            }}
            className="py-2 w-full font-inter text-h4"
          >
            Batal
          </Button>
          <Button variant="primary" className="py-2 w-full font-inter text-h4" onClick={handleSubmit}>
            Simpan
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ChangePasswordSetting;
