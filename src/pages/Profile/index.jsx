import React from "react";
import ProfileCard from "./components/ProfileCard";
import SummaryCard from "./components/SummaryCard";
import SettingReminderCard from "./components/SettingReminderCard";
import HelpCard from "./components/HelpCard";
import NoteCard from "./components/NoteCard";
import Button from "../../components/atoms/Button";
import ButtonTest from "../../components/atoms/ButtonTest";
import { LogOut } from "lucide-react";
import { useProfileStore } from "../../store/useProfileStore";
import ManageProfileCard from "./components/ManageProfileCard";

const ProfilePage = () => {
  const isProfileOpen = useProfileStore((state) => state.isProfileOpen);
  return (
    <div className="flex flex-col gap-4">
      {isProfileOpen && <ManageProfileCard />}

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
