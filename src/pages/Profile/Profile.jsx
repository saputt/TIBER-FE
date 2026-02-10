import React from "react";
import ProfileCard from "./components/ProfileCard";
import SummaryCard from "./components/SummaryCard";
import SettingReminderCard from "./components/SettingReminderCard";
import HelpCard from "./components/HelpCard";
import NoteCard from "./components/NoteCard";
import ButtonTest from "../../components/atoms/ButtonTest";
import { LogOut } from "lucide-react";
import { useProfileStore } from "../../store/useProfileStore";
import ManageReminderLog from "./components/ManageReminderLog";
import ManageControl from "./components/ManageControl";
import { useLogout } from "../../hooks/useAuth";
import { useGetPersonalization } from "../../hooks/useProfile";
import { useAuthStore } from "../../store/useAuthStore";
import { FormatDate } from "../../utils/FormatDate";

const ProfilePage = () => {
  const isDailyOpen = useProfileStore((state) => state.isDailyOpen);
  const isControlOpen = useProfileStore((state) => state.isControlOpen);
  const { mutate: logout } = useLogout();
  const { data } = useGetPersonalization();
  console.log(data);
  const username = useAuthStore((state) => state.user?.fullname);
  return (
    <div className="flex flex-col gap-4">
      {isDailyOpen && <ManageReminderLog />}
      {isControlOpen && <ManageControl />}

      <ProfileCard
        name={username}
        duration={data?.Data.duration_month}
        startDate={FormatDate(data?.Data.start_date)}
      />
      <SummaryCard />
      <SettingReminderCard
        reminderTimeDay={data?.Data.time_category}
        reminderTime={data?.Data.reminder_time}
        checkup={FormatDate(data?.Data.next_checkup_date)}
      />
      <HelpCard />
      <NoteCard />
      <ButtonTest
        variant="white"
        size="full"
        className="flex justify-center items-center text-h5"
        onClick={() => logout()}
      >
        <LogOut size={17} />
        Keluar
      </ButtonTest>
    </div>
  );
};

export default ProfilePage;
