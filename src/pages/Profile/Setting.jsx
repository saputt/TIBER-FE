import React, { useEffect } from "react";
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
import FullNameSetting from "./components/FullNameSetting";
import ChangePasswordSetting from "./components/ChangePasswordSetting";

const ProfileSettingPage = () => {
  const isDurationOpen = useProfileStore((state) => state.isDurationOpen);
  const isStartDateOpen = useProfileStore((state) => state.isStartDateOpen);
  const isFullNameOpen = useProfileStore((state) => state.isFullNameOpen);
  const isChangePasswordOpen = useProfileStore((state) => state.isChangePasswordOpen);

  return (
    <>
      <div className="h-full flex flex-col items-center gap-3 relative">
        {isDurationOpen && <DurationLogSetting />}

        {isStartDateOpen && <StartDateSetting />}

        {isFullNameOpen && <FullNameSetting/>}
        
        {isChangePasswordOpen && <ChangePasswordSetting/>}

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
