import React from "react";
import Card from "../../../components/atoms/Card";
import Badge from "../../../components/atoms/Badge";
import {
  Calendar,
  ChevronRight,
  Lock,
  Mail,
  Pencil,
  Timer,
  Trash,
  User,
  X,
} from "lucide-react";
import Notch from "../../../components/atoms/Notch";
import { useProfileStore } from "../../../store/useProfileStore";

const ManageProfileCard = () => {
  const setProfileFalse = useProfileStore((state) => state.setProfileFalse);
  const isProfileOpen = useProfileStore((state) => state.isProfileOpen);

  console.log(isProfileOpen);
  return (
    <div className="h-screen w-full bg-white/10 backdrop-blur-sm fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center p-5">
      <Card
        className="flex flex-col items-center gap-3 py-8 relative"
        boxShadowActive={true}
        variant="white"
        size="full"
      >
        <X
          className="absolute top-3 right-3 text-gray-800"
          size={20}
          onClick={() => setProfileFalse()}
        />

        <Badge variant="primary" size="sm">
          Sesuaikan Profil
        </Badge>

        <div className="w-14 h-14 aspect-square rounded-full bg-primary flex items-center justify-center text-h1 font-semibold text-white">
          S
        </div>

        <div className="flex items-center gap-1">
          <p className="text-h5 font-medium">Sauki</p>
          <Pencil size={10} />
        </div>

        <Card
          className="flex flex-col gap-2"
          variant="white"
          boxShadowActive={true}
          size="full"
        >
          <div className="flex items-center ">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1">
                <Calendar size={10} />
                <p className="text-h6 font-semibold">Tanggal Mulai</p>
              </div>
              <p className="text-h6">15/12/2025</p>
            </div>
            <p className="text-primary text-h6 font-semibold">Ubah</p>
          </div>
          <hr className="text-gray-400" />
          <div className="flex items-center">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1">
                <Timer size={10} />
                <p className="text-h6 font-semibold">Durasi Pengobatan</p>
              </div>
              <p className="text-h6">6 Bulan</p>
            </div>
            <p className="text-primary text-h6 font-semibold">Ubah</p>
          </div>
        </Card>

        <Card
          size="full"
          boxShadowActive={true}
          className="relative overflow-hidden pt-8 flex flex-col gap-2"
        >
          <Notch className="flex px-2 py-1 items-center gap-1" variant="left">
            <User size={10} className="text-white" />
            <p className="text-h6">Akun</p>
          </Notch>
          <div className="flex items-center ">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1">
                <Mail size={10} />
                <p className="text-h6 font-semibold">Email</p>
              </div>
              <p className="text-h6">saukiwell69@gmail.com</p>
            </div>
            <p className="text-primary text-h6 font-semibold">Ubah</p>
          </div>
          <hr className="text-gray-400" />

          <div className="flex items-center ">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1">
                <Lock size={10} />
                <p className="text-h6 font-semibold">Kata Sandi</p>
              </div>
              <p className="text-h6">••••••••</p>
            </div>
            <p className="text-primary text-h6 font-semibold">Ubah</p>
          </div>
          <hr className="text-gray-400" />
          <div className="flex items-center ">
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-1">
                <Trash size={10} />
                <p className="text-h6 font-semibold">Hapus Akun</p>
              </div>
              <p className="text-h6">Menghapus akun secara permanen</p>
            </div>
            <ChevronRight size={20} className="text-primary" />
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default ManageProfileCard;
