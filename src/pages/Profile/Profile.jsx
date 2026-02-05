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

const ProfilePage = () => {
  const isDailyOpen = useProfileStore((state) => state.isDailyOpen);
  const isControlOpen = useProfileStore((state) => state.isControlOpen);
  return (
    <div className="flex flex-col gap-4">
      {isDailyOpen && <ManageReminderLog />}
      {isControlOpen && <ManageControl />}

      <ProfileCard />
      <SummaryCard />
      <SettingReminderCard />
      <HelpCard />
      <NoteCard />
      <ButtonTest
        variant="white"
        size="full"
        className="flex justify-center items-center text-h5"
      >
        <LogOut size={17} />
        Keluar
      </ButtonTest>
    </div>
  );
};

export default ProfilePage;
