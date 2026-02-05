import React from "react";
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
import Card from "../../components/atoms/Card";
import Notch from "../../components/atoms/Notch";
import { useProfileStore } from "../../store/useProfileStore";
import Badge from "../../components/atoms/Badge";
import ProfileInfoSetting from "./components/ProfileInfoSetting";
import TreatmentEditSetting from "./components/TreatmentEditSetting";
import AccountSetting from "./components/AccountSetting";
import DurationLogSetting from "./components/DurationLogSetting";
import StartDateSetting from "./components/StartDateSetting";

const ProfileSettingPage = () => {
  const isDurationOpen = useProfileStore((state) => state.isDurationOpen);
  const isStartDateOpen = useProfileStore((state) => state.isStartDateOpen);
  return (
    <>
      <div className="h-full flex flex-col items-center gap-3 relative">
        {isDurationOpen && <DurationLogSetting />}

        {isStartDateOpen && <StartDateSetting />}

        <Badge variant="primary" size="sm">
          Sesuaikan Profil
        </Badge>

        <ProfileInfoSetting />

        <TreatmentEditSetting />

        <AccountSetting />
      </div>
    </>
  );
};

export default ProfileSettingPage;
